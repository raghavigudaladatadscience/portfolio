import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowUp, CheckCircle } from 'lucide-react';
import { THEMES } from './data/themes';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ConstellationBackground from './components/ConstellationBackground';

function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES[0]);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Apply theme variables to root
  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.setAttribute('data-theme', theme.id);
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--bg-color', theme.background);
    root.style.setProperty('--surface-color', theme.surface);
    root.style.setProperty('--text-primary', theme.text);
    root.style.setProperty('--text-secondary', theme.textMuted);
    root.style.setProperty('--accent-gradient', theme.accentGradient);
    root.style.setProperty('--btn-gradient', theme.btnGradient || 'linear-gradient(to right, #06B6D4, #4F46E5)');
    root.style.setProperty('--conic-glow', theme.conicGlow || 'conic-gradient(from 0deg, #06B6D4, #6366F1, #D946EF, #06B6D4)');
    root.style.setProperty('--subtle-gradient', theme.subtleGradient);
    root.style.setProperty('--hero-gradient', theme.heroGradient);
    root.style.setProperty('--border-color', theme.border);
    root.style.setProperty('--border-hover', theme.borderHover);
    root.style.setProperty('--glow-color', theme.glow);
    root.style.setProperty('--badge-bg', theme.badgeBg);
    root.style.setProperty('--badge-text', theme.badgeText);
    root.style.setProperty('--card-bg', theme.cardBg);
    root.style.setProperty('--navbar-bg', theme.navbarBg);
    root.style.setProperty('--halo-color', theme.haloColor);
    root.style.setProperty('--ring-gradient', theme.ringGradient);
  };

  const handleSelectTheme = (theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);

    // Micro-burst of confetti with theme colors
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.1, x: 0.8 },
      colors: [theme.primary, theme.secondary],
    });

    showToast(`Switched theme to ${theme.name}!`);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    // Initialize default theme
    applyTheme(THEMES[0]);

    // Handle scroll for back-to-top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app min-vh-100 d-flex flex-column position-relative" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Interactive Constellation / Particle Network Canvas */}
      <ConstellationBackground primaryColor={currentTheme.primary} />

      {/* Navigation Bar */}
      <Navbar
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow-1">
        <Hero
          currentTheme={currentTheme}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About />
        <Skills />
        <FeaturedProject />
        <ExperienceEducation />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Back to top floating button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="gr-toast" role="alert">
          <CheckCircle size={18} style={{ color: 'var(--primary-color)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
