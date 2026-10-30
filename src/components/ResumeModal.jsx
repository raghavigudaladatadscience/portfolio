import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, FEATURED_PROJECT, CERTIFICATIONS_DATA, LANGUAGES_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
${EDUCATION_DATA.map(e => `• ${e.degree} - ${e.institution} (${e.duration}) | Score: ${e.score}`).join('\n')}

EXPERIENCE
${EXPERIENCE_DATA.map(exp => `• ${exp.role} at ${exp.organization} (${exp.duration})\n  ${exp.achievements.join(' ')}`).join('\n')}

FEATURED RESEARCH
• ${FEATURED_PROJECT.title}
  ${FEATURED_PROJECT.description}

TECHNICAL SKILLS
• Programming: Java, Python
• Web Dev: HTML5, CSS3, JavaScript, React.js, Express.js, MongoDB
• Tools: GitHub, Jupyter Notebook, MS Excel

CERTIFICATIONS
${CERTIFICATIONS_DATA.map(c => `• ${c.title} (${c.issuer})`).join('\n')}

LANGUAGES
${LANGUAGES_DATA.map(l => `${l.name} (${l.tag})`).join(', ')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    if (onShowToast) onShowToast('Resume summary copied to clipboard!');

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop-custom" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="modal-content-custom p-3 p-md-4"
          style={{ maxWidth: '880px' }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Top Bar with actions */}
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 mb-3 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-primary px-3 py-2" style={{ background: 'var(--primary-color)' }}>
                Official Curriculum Vitae
              </span>
              <span className="text-muted small d-none d-sm-inline">
                Gudala Raghavi
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="gr-btn-outline py-1 px-3"
                style={{ fontSize: '0.82rem' }}
              >
                {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="gr-btn-primary py-1 px-3"
                style={{ fontSize: '0.82rem' }}
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm p-1 border-0 rounded-circle ms-2"
                style={{ color: 'var(--text-primary)', background: 'var(--badge-bg)' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Sheet */}
          <div className="resume-paper" id="resume-sheet">
            {/* Header */}
            <div className="text-center pb-4 mb-4 border-bottom">
              <h1 className="h2 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {PERSONAL_INFO.name}
              </h1>
              <div className="fw-semibold mb-2" style={{ color: 'var(--primary-color)', fontSize: '1.05rem' }}>
                {PERSONAL_INFO.title}
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 small" style={{ color: 'var(--text-secondary)' }}>
                <span className="d-flex align-items-center gap-1">
                  <Mail size={13} /> {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="d-flex align-items-center gap-1">
                  <Phone size={13} /> {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="d-flex align-items-center gap-1">
                  <MapPin size={13} /> {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-4">
              <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                Professional Summary
              </h2>
              <p className="small mb-0" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {PERSONAL_INFO.aboutText}
              </p>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                Education
              </h2>
              <div className="d-flex flex-column gap-3 mt-2">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="d-flex flex-wrap justify-content-between">
                    <div>
                      <div className="fw-bold small" style={{ color: 'var(--text-primary)' }}>
                        {edu.degree} — <span className="fw-normal">{edu.institution}</span>
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.78rem' }}>
                        {edu.specialization} • {edu.location}
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-light text-dark border small">
                        {edu.score} ({edu.scoreLabel})
                      </span>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Experience */}
            <div className="mb-4">
              <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                Experience
              </h2>
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="mt-2">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <div className="fw-bold small" style={{ color: 'var(--text-primary)' }}>
                      {exp.role} — <span style={{ color: 'var(--primary-color)' }}>{exp.organization}</span>
                    </div>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>{exp.duration}</span>
                  </div>
                  <ul className="small text-muted mt-1 ps-3 mb-0" style={{ lineHeight: 1.6 }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Capstone Research */}
            <div className="mb-4">
              <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                Featured Research Project
              </h2>
              <div className="mt-2">
                <div className="fw-bold small" style={{ color: 'var(--text-primary)' }}>
                  {FEATURED_PROJECT.shortTitle}
                </div>
                <p className="small text-muted mb-1" style={{ lineHeight: 1.6 }}>
                  {FEATURED_PROJECT.description}
                </p>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                  <strong>Key Focus:</strong> Ramp Secret-Sharing, Blockchain Deduplication, Decentralized Cloud Fault Tolerance
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
              <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                Technical Proficiencies
              </h2>
              <div className="row g-2 mt-1 small" style={{ color: 'var(--text-secondary)' }}>
                <div className="col-md-4">
                  <strong style={{ color: 'var(--text-primary)' }}>Languages:</strong> Java, Python
                </div>
                <div className="col-md-8">
                  <strong style={{ color: 'var(--text-primary)' }}>Web Technologies:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Express.js, MongoDB
                </div>
                <div className="col-12">
                  <strong style={{ color: 'var(--text-primary)' }}>Developer Tools:</strong> Git/GitHub, Jupyter Notebook, MS Excel
                </div>
              </div>
            </div>

            {/* Certifications & Languages */}
            <div className="row g-3">
              <div className="col-md-7">
                <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                  Certifications
                </h2>
                <ul className="small text-muted mt-1 ps-3 mb-0" style={{ lineHeight: 1.6 }}>
                  {CERTIFICATIONS_DATA.map((c, idx) => (
                    <li key={idx}>
                      <strong>{c.title}</strong> — {c.issuer}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-5">
                <h2 className="h6 text-uppercase fw-bold pb-1 border-bottom" style={{ color: 'var(--primary-color)', letterSpacing: '0.05em' }}>
                  Languages
                </h2>
                <div className="small text-muted mt-2 d-flex flex-column gap-1">
                  {LANGUAGES_DATA.map((l, idx) => (
                    <div key={idx} className="d-flex justify-content-between">
                      <span className="fw-medium" style={{ color: 'var(--text-primary)' }}>{l.name}</span>
                      <span style={{ fontSize: '0.78rem' }}>{l.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
