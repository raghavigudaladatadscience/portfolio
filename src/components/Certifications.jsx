import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Compass } from 'lucide-react';
import IconHelper from './IconHelper';
import { CERTIFICATIONS_DATA, INTERESTS_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Lifelong Learning
          </span>
          <h2>Certifications & Professional Development</h2>
          <p>
            Continuous skill validation across cloud architecture simulations, digital strategy, and technical workshops.
          </p>
          <div className="gr-heading-bar" />
        </div>

        {/* Certifications Grid */}
        <div className="row g-4 mb-5">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <motion.div
                className="gr-card h-100 p-4 d-flex flex-column justify-content-between"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                    >
                      <IconHelper name={cert.icon} size={22} />
                    </div>
                    <span
                      className="py-1 px-2 rounded-pill"
                      style={{
                        background: 'var(--badge-bg)',
                        color: 'var(--primary-color)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="fw-bold mb-1" style={{ fontSize: '0.98rem', color: 'var(--text-primary)', minHeight: '44px' }}>
                    {cert.title}
                  </h3>

                  <div className="fw-semibold mb-3" style={{ color: 'var(--primary-color)', fontSize: '0.85rem' }}>
                    Issued by {cert.issuer}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={13} className="text-success" /> Verified Program
                  </span>
                  <span className="py-1 px-2 rounded-pill" style={{ fontSize: '0.72rem', background: 'var(--badge-bg)', color: 'var(--badge-text)', border: '1px solid var(--border-color)' }}>
                    Certificate
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mindset & Professional Interests */}
        <div className="p-4 p-md-5 rounded-4" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-4 text-center text-lg-start">
              <span className="gr-badge mb-2">
                <Compass size={14} /> Future Outlook
              </span>
              <h3 className="h4 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Professional Mindset & Values
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                Committed to intellectual curiosity, collaborative development, and building technology that delivers tangible real-world impact.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                {INTERESTS_DATA.map((item, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div
                      className="p-3 rounded-3 h-100"
                      style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)' }}
                    >
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <div
                          className="p-2 rounded-circle"
                          style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                        >
                          <IconHelper name={item.icon} size={18} />
                        </div>
                        <h4 className="fw-bold mb-0" style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
