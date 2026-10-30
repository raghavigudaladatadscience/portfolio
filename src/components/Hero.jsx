import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Blocks, Mail, Copy, Check, Code2, Globe, Award, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const TYPEWRITER_ROLES = [
  'Python Full Stack Developer',
  'Building Ideas Into Digital Experiences.',
  'Data Science & Cloud Engineer',
  'Full Stack Web Developer',
];

export default function Hero({ currentTheme, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentWord = TYPEWRITER_ROLES[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentWord.length) {
          // Finished typing word, pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2200);
        } else {
          setTypingSpeed(85);
        }
      } else {
        // Deleting backward
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8, x: 0.2 },
      colors: [currentTheme.primary, currentTheme.secondary],
    });

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background blur blobs */}
      <div className="hero-bg-blobs" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center gy-5">
          {/* Left Column: Text Info, Badges & CTA */}
          <motion.div
            className="col-lg-7 text-center text-lg-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Status Kicker */}
            <div className="d-inline-flex mb-3">
              <span className="gr-badge">
                <span className="gr-badge-dot" />
                <span>Open for Python Full Stack & Intern Roles</span>
              </span>
            </div>

            {/* Headline with Live Typewriter Cursor matching reference */}
            <h1 className="mb-3" style={{ lineHeight: 1.15, letterSpacing: '-0.035em' }}>
              <span className="d-block" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
                Hi, I'm <span className="gr-text-gradient">{PERSONAL_INFO.name}</span>
              </span>
              <span
                className="d-block mt-1 font-mono"
                style={{
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.85rem)',
                  color: 'var(--primary-color)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  minHeight: '2.5rem',
                }}
              >
                <span>{displayText}</span>
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>

            {/* Pill Highlights */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
              <span
                className="py-1 px-3 rounded-pill"
                style={{
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                Decentralized Cloud Storage
              </span>
              <span
                className="py-1 px-3 rounded-pill"
                style={{
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                Java &bull; Python &bull; React.js
              </span>
              <span
                className="py-1 px-3 rounded-pill"
                style={{
                  background: 'var(--badge-bg)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                Aggregate 75%
              </span>
            </div>

            {/* Subtitle Bio */}
            <p
              className="lead mb-4"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.25vw, 1.12rem)',
                maxWidth: '620px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.75,
              }}
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* 3 Action Buttons */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 pt-1 mb-4">
              <a href="#project" className="gr-btn-primary">
                <Blocks size={18} />
                <span>Explore Research</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="gr-btn-outline"
              >
                <FileText size={18} />
                <span>View Full Resume</span>
              </button>

              <a href="#contact" className="gr-btn-outline">
                <Mail size={17} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Copy Email Row */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 pt-1">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center gap-1 text-decoration-none"
                style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', transition: 'color 0.2s' }}
              >
                <GithubIcon size={16} />
                <span>github.com/raghavi-25</span>
              </a>

              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center gap-1 text-decoration-none"
                style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', transition: 'color 0.2s' }}
              >
                <LinkedinIcon size={16} />
                <span>linkedin.com/in/gudala-raghavi</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="gr-btn-outline py-1 px-3 d-inline-flex align-items-center gap-1"
                style={{ fontSize: '0.8rem' }}
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Portrait Showcase with Surrounding Badges */}
          <motion.div
            className="col-lg-5 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="portrait-wrapper">
              {/* Pulsing Halo */}
              <div
                className="portrait-halo"
                style={{
                  background: currentTheme.haloColor || 'var(--glow-color)',
                }}
              />

              {/* Rotating Gradient Ring */}
              <div
                className="portrait-ring-outer"
                style={{
                  background: currentTheme.conicGlow || currentTheme.ringGradient || 'var(--conic-glow)',
                }}
              />

              {/* Inner Frame & Photo */}
              <div className="portrait-inner-frame">
                <img
                  key={currentTheme.id}
                  src={currentTheme.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="portrait-img"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1: Top Left */}
              <motion.div
                className="floating-badge floating-badge-top-left d-none d-sm-flex"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-1 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ color: 'var(--primary-color)' }}
                >
                  <Code2 size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Java & Python
                </div>
              </motion.div>

              {/* Floating Badge 2: Top Right */}
              <motion.div
                className="floating-badge floating-badge-top-right d-none d-sm-flex"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-1 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ color: 'var(--primary-color)' }}
                >
                  <Globe size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  React & Web Dev
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom Left */}
              <motion.div
                className="floating-badge floating-badge-bottom-left d-none d-sm-flex"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-1 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ color: 'var(--primary-color)' }}
                >
                  <Zap size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  75% Aggregate
                </div>
              </motion.div>

              {/* Floating Badge 4: Bottom Right */}
              <motion.div
                className="floating-badge floating-badge-bottom-right d-none d-sm-flex"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="p-1 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ color: 'var(--primary-color)' }}
                >
                  <Award size={16} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  95% SSC Merit
                </div>
              </motion.div>

              {/* Floating Badge 5: Bottom Center */}
              <motion.div
                className="floating-badge floating-badge-bottom-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="gr-badge-dot" style={{ width: '8px', height: '8px' }} />
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Available for Hire
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mt-5 pt-4">
          <a
            href="#about"
            className="d-inline-flex flex-column align-items-center text-decoration-none"
            style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 500 }}
            aria-label="Scroll down to About section"
          >
            <span className="mb-1">Explore More</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} style={{ color: 'var(--primary-color)' }} />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
