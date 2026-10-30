import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-5 border-top" style={{ borderColor: 'var(--border-color)', background: 'var(--surface-color)' }}>
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-4">
          <div className="col-md-5 text-center text-md-start">
            <span
              className="gr-text-gradient font-heading d-inline-block mb-2"
              style={{ fontSize: '1.8rem', fontWeight: 800 }}
            >
              {PERSONAL_INFO.name}
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '380px' }}>
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div className="col-md-7 d-flex flex-wrap align-items-center justify-content-center justify-content-md-end gap-3">
            <a href="#about" className="nav-link-custom">About</a>
            <a href="#skills" className="nav-link-custom">Skills</a>
            <a href="#project" className="nav-link-custom">Research</a>
            <a href="#journey" className="nav-link-custom">Journey</a>
            <a href="#certifications" className="nav-link-custom">Certifications</a>
            <a href="#contact" className="nav-link-custom">Contact</a>
            <button
              type="button"
              onClick={onOpenResume}
              className="gr-btn-outline py-1 px-3 ms-2"
              style={{ fontSize: '0.84rem' }}
            >
              Resume
            </button>
          </div>
        </div>

        <div className="border-top pt-4 d-flex flex-wrap align-items-center justify-content-between gap-3" style={{ borderColor: 'var(--border-color)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <div>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="d-flex align-items-center gap-1">
            <span>Crafted with</span>
            <Heart size={14} className="text-danger fill-danger" style={{ fill: '#ef4444', color: '#ef4444' }} />
            <span>using React, Vite & Modern CSS</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-sm p-2 rounded-circle border d-inline-flex align-items-center justify-content-center"
            style={{ color: 'var(--primary-color)', borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
