import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Blocks, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export default function ProjectModal({ isOpen, onClose }) {
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

  return (
    <AnimatePresence>
      <div className="modal-backdrop-custom" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="modal-content-custom p-4 p-md-5"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="d-flex align-items-start justify-content-between mb-4 pb-3 border-bottom" style={{ borderColor: 'var(--border-color)' }}>
            <div>
              <span className="gr-badge mb-2">
                <Blocks size={14} /> {FEATURED_PROJECT.badge}
              </span>
              <h2 className="h4 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {FEATURED_PROJECT.shortTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                Comprehensive Architecture & Cryptographic Mechanics
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-sm p-1 border-0 rounded-circle"
              style={{ color: 'var(--text-primary)', background: 'var(--badge-bg)' }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Research Architecture Flow Diagram */}
          <div className="mb-4 p-3 rounded-4" style={{ background: 'var(--badge-bg)', border: '1px dashed var(--border-color)' }}>
            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem', color: 'var(--primary-color)' }}>
              <Cpu size={16} /> Data Pipeline & System Workflow
            </h4>
            <div className="row g-2 text-center" style={{ fontSize: '0.82rem' }}>
              <div className="col-12 col-md-3">
                <div className="p-3 rounded-3 shadow-sm h-100 border" style={{ background: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                  <div className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>1. Client Ingestion</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    Data hashing & deduplication verification against ledger
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="p-3 rounded-3 shadow-sm h-100 border" style={{ background: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                  <div className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>2. Ramp Secret Sharing</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    Threshold splitting (k, m, n) shares balancing efficiency & secrecy
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="p-3 rounded-3 shadow-sm h-100 border" style={{ background: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                  <div className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>3. Blockchain Ledger</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    Immutable root hash, share index proofs & tamper-audit logs
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="p-3 rounded-3 shadow-sm h-100 border" style={{ background: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
                  <div className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>4. Distributed Cloud</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    Dispersed multi-node persistence with zero-knowledge recovery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Pillars Breakdown */}
          <div className="row g-3 mb-4">
            {FEATURED_PROJECT.keyPillars.map((pillar, idx) => (
              <div key={idx} className="col-md-6">
                <div
                  className="p-3 rounded-3 h-100"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="p-1 rounded-2" style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}>
                      <CheckCircle2 size={16} />
                    </span>
                    <h5 className="fw-bold mb-0" style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {pillar.title}
                    </h5>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Distinction Matrix */}
          <div className="p-3 rounded-3 mb-4 border" style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}>
            <h5 className="fw-bold mb-2" style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
              Technology Architecture Distinction
            </h5>
            <div className="mb-2">
              <span className="badge bg-success-subtle text-success me-2">Verified Core:</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {FEATURED_PROJECT.techDistinction.verifiedCore}
              </span>
            </div>
            <div>
              <span className="badge bg-primary-subtle text-primary me-2">Inferred Architecture:</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {FEATURED_PROJECT.techDistinction.inferredArchitecture}
              </span>
            </div>
          </div>

          {/* Academic Status Note */}
          <div className="d-flex align-items-start gap-2 p-3 rounded-3 mb-4" style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.25)' }}>
            <AlertCircle size={18} className="text-warning flex-shrink-0 mt-1" />
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
              {FEATURED_PROJECT.statusNote}
            </p>
          </div>

          {/* Footer Action */}
          <div className="d-flex justify-content-end gap-3">
            <button type="button" onClick={onClose} className="gr-btn-outline py-2 px-4">
              Close Preview
            </button>
            <a
              href="#contact"
              onClick={() => onClose()}
              className="gr-btn-primary py-2 px-4"
            >
              Inquire About Research
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
