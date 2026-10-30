import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, ArrowRight, Sparkles, Palette, ChevronDown, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { THEMES } from '../data/themes';

export default function Navbar({ currentTheme, onSelectTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const themeDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'project', 'journey', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(e.target)) {
        setThemeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Research', href: '#project', id: 'project' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`gr-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="d-flex align-items-center gap-2 text-decoration-none"
          >
            <span
              className="gr-text-gradient font-heading"
              style={{ fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.03em' }}
            >
              {PERSONAL_INFO.logoText}
            </span>
            <span
              className="d-none d-sm-inline-block text-truncate"
              style={{
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '0.01em',
              }}
            >
              Python Full Stack Dev
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link-custom ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Dropdown + Action Buttons */}
          <div className="d-flex align-items-center gap-3">
            {/* Theme Dropdown (Replaces raw color circles) */}
            <div className="position-relative d-none d-md-inline-block" ref={themeDropdownRef}>
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="gr-btn-outline py-2 px-3 d-flex align-items-center gap-2"
                style={{ fontSize: '0.86rem', cursor: 'pointer' }}
                aria-label="Select Palette"
                aria-expanded={themeDropdownOpen}
              >
                <Palette size={15} style={{ color: 'var(--primary-color)' }} />
                <span>{currentTheme.name}</span>
                <ChevronDown
                  size={14}
                  style={{
                    opacity: 0.7,
                    transform: themeDropdownOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              {themeDropdownOpen && (
                <div
                  className="position-absolute end-0 mt-2 p-2 rounded-3 shadow-lg"
                  style={{
                    background: 'rgba(11, 15, 25, 0.96)',
                    border: '1px solid var(--border-hover)',
                    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 25px -4px var(--glow-color)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    zIndex: 1100,
                    minWidth: '200px',
                  }}
                >
                  <div
                    className="px-2 py-1 mb-1 text-uppercase fw-bold"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}
                  >
                    Color Theme
                  </div>
                  {THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => {
                        onSelectTheme(theme);
                        setThemeDropdownOpen(false);
                      }}
                      className="w-100 text-start py-2 px-3 rounded-2 border-0 d-flex align-items-center justify-content-between gap-2 mb-1"
                      style={{
                        background: currentTheme.id === theme.id ? 'var(--badge-bg)' : 'transparent',
                        color: currentTheme.id === theme.id ? 'var(--primary-color)' : 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: currentTheme.id === theme.id ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: theme.primary,
                            boxShadow: `0 0 8px ${theme.primary}`,
                            display: 'inline-block',
                          }}
                        />
                        <span>{theme.name}</span>
                      </div>
                      {currentTheme.id === theme.id && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="gr-btn-outline d-none d-sm-inline-flex py-2 px-3"
              style={{ fontSize: '0.88rem' }}
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="gr-btn-primary d-none d-sm-inline-flex py-2 px-3"
              style={{ fontSize: '0.88rem' }}
            >
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="d-lg-none btn p-1 border-0"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-light-subtle">
            <span className="gr-text-gradient font-heading fw-bold" style={{ fontSize: '1.4rem' }}>
              {PERSONAL_INFO.logoText}
            </span>
            <button
              type="button"
              className="btn p-1 border-0"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Theme Selector inside Mobile Drawer */}
          <div className="mb-4">
            <label
              className="form-label d-flex align-items-center gap-2 mb-2 text-uppercase fw-bold"
              style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}
            >
              <Sparkles size={14} color="var(--primary-color)" />
              Theme Style
            </label>
            <div
              className="d-flex flex-column gap-1 p-2 rounded-3 border"
              style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}
            >
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    onSelectTheme(theme);
                    setMobileMenuOpen(false);
                  }}
                  className="w-100 text-start py-2 px-3 rounded-2 border-0 d-flex align-items-center justify-content-between"
                  style={{
                    background: currentTheme.id === theme.id ? 'var(--badge-bg)' : 'transparent',
                    color: currentTheme.id === theme.id ? 'var(--primary-color)' : 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontWeight: currentTheme.id === theme.id ? 600 : 500,
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: theme.primary,
                        boxShadow: `0 0 6px ${theme.primary}`,
                        display: 'inline-block',
                      }}
                    />
                    <span>{theme.name}</span>
                  </div>
                  {currentTheme.id === theme.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="d-flex flex-column gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link-custom py-2 px-3 rounded-2 ${activeSection === link.id ? 'active' : ''}`}
                style={{ fontSize: '1rem' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs in drawer */}
          <div className="d-flex flex-column gap-2 mt-auto pt-3 border-top border-light-subtle">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="gr-btn-outline w-100 justify-content-center"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="gr-btn-primary w-100 justify-content-center"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
