import React, { useEffect, useRef } from 'react';

/**
 * High-performance Interactive Constellation / Plexus Canvas Background
 * Renders floating particles with dynamic line connections that react to mouse movement
 * and automatically adapts to the active theme's primary color.
 */
export default function ConstellationBackground({ primaryColor = '#06B6D4' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking
    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Parse hex to RGB for alpha blending
    const hexToRgb = (hex) => {
      const cleanHex = hex.replace('#', '');
      const num = parseInt(cleanHex, 16);
      if (cleanHex.length === 3) {
        const r = (num >> 8) & 0xf;
        const g = (num >> 4) & 0xf;
        const b = num & 0xf;
        return {
          r: (r << 4) | r,
          g: (g << 4) | g,
          b: (b << 4) | b,
        };
      }
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };

    let rgb = hexToRgb(primaryColor || '#06B6D4');

    // Particle system configuration
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 38 : 75;
    const maxConnectionDist = isMobile ? 95 : 130;
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6);
        this.radius = Math.random() * 2 + 1;
        this.baseAlpha = Math.random() * 0.4 + 0.35;
        this.alpha = this.baseAlpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around borders
        if (this.x < -10) this.x = width + 10;
        else if (this.x > width + 10) this.x = -10;

        if (this.y < -10) this.y = height + 10;
        else if (this.y > height + 10) this.y = -10;

        // Mouse proximity interaction (subtle push / pulse)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.alpha = Math.min(1, this.baseAlpha + force * 0.5);
          } else {
            this.alpha = this.baseAlpha;
          }
        } else {
          this.alpha = this.baseAlpha;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.alpha})`;
        ctx.shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            const lineAlpha = (1 - dist / maxConnectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw connection lines to mouse
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.38;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${mouseLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [primaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
