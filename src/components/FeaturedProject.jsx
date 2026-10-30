import React, { useState } from 'react';
import { Sparkles, Cpu, Eye } from 'lucide-react';
import IconHelper from './IconHelper';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECT } from '../data/portfolioData';

export default function FeaturedProject() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="project" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Academic Innovation
          </span>
          <h2>Featured Research Project</h2>
          <p>
            Cutting-edge framework combining cryptographic secret-sharing with distributed blockchain verification and deduplication.
          </p>
          <div className="gr-heading-bar" />
        </div>

        {/* Project Card */}
        <div className="gr-card p-0 overflow-hidden">
          <div className="row g-0 align-items-stretch">
            {/* Visual Image Showcase */}
            <div className="col-lg-6 position-relative overflow-hidden" style={{ minHeight: '380px' }}>
              <img
                src={FEATURED_PROJECT.image}
                alt={FEATURED_PROJECT.shortTitle}
                className="w-100 h-100 object-fit-cover"
                style={{
                  minHeight: '380px',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                  pointerEvents: 'none',
                }}
              />

              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <span className="badge bg-primary mb-2 px-3 py-2" style={{ backdropFilter: 'blur(8px)', background: 'var(--primary-color)' }}>
                  {FEATURED_PROJECT.badge}
                </span>
                <h3 className="h4 fw-bold text-white mb-1">
                  Decentralized Cloud Storage Architecture
                </h3>
                <p className="text-white-50 small mb-0">
                  Ramp Secret-Sharing • Deduplication • Tamper-Proof Audit
                </p>
              </div>

              {/* Quick View Button Overlay */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="position-absolute top-0 end-0 m-3 gr-btn-outline btn-sm d-flex align-items-center gap-1 shadow-sm rounded-pill px-3 py-2"
                style={{ fontWeight: 600, fontSize: '0.82rem', zIndex: 2 }}
              >
                <Eye size={15} />
                <span>View Architecture</span>
              </button>
            </div>

            {/* Description & Pillars */}
            <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                  <span
                    className="py-1 px-3 rounded-pill"
                    style={{
                      background: 'var(--badge-bg)',
                      color: 'var(--primary-color)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}
                  >
                    RESEARCH INITIATIVE
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    B.Tech Capstone & Advanced Studies
                  </span>
                </div>

                <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)', lineHeight: 1.35 }}>
                  {FEATURED_PROJECT.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {FEATURED_PROJECT.description}
                </p>

                {/* 4 Pillars Mini List */}
                <div className="row g-2 mb-4">
                  {FEATURED_PROJECT.keyPillars.map((pillar, idx) => (
                    <div key={idx} className="col-sm-6">
                      <div
                        className="p-2 rounded-2 d-flex align-items-start gap-2 h-100"
                        style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-color)' }}
                      >
                        <div className="mt-1" style={{ color: 'var(--primary-color)' }}>
                          <IconHelper name={pillar.icon} size={16} />
                        </div>
                        <div>
                          <div className="fw-bold" style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                            {pillar.title}
                          </div>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            {pillar.description.slice(0, 75)}...
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Verified Tags */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                  {FEATURED_PROJECT.verifiedTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="py-1 px-2 rounded-2"
                      style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-3" style={{ borderColor: 'var(--border-color)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Academic Framework & Verification Schema
                </span>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="gr-btn-primary py-2 px-4"
                  style={{ fontSize: '0.88rem' }}
                >
                  <Cpu size={16} />
                  <span>Deep Dive Architecture</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
}
