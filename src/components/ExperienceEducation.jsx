import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="journey" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Milestones & Growth
          </span>
          <h2>Experience & Education</h2>
          <p>
            Bridging structured academic rigor with hands-on industrial web development training.
          </p>
          <div className="gr-heading-bar" />
        </div>

        {/* Tab Controls */}
        <div className="d-flex justify-content-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`gr-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Milestones
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`gr-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
          >
            <Briefcase size={15} /> Industry Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`gr-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          >
            <GraduationCap size={16} /> Academic Pathway
          </button>
        </div>

        <div className="row g-5">
          {/* Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className={activeTab === 'all' ? 'col-lg-6' : 'col-lg-8 mx-auto'}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                  style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                >
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                    Industry Internship
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0 }}>
                    Professional workplace exposure & web engineering
                  </p>
                </div>
              </div>

              <div className="timeline-container">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="timeline-dot" />

                    <div className="gr-card p-4">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="py-1 px-3 rounded-pill" style={{ fontSize: '0.78rem', fontWeight: 600, background: 'var(--badge-bg)', color: 'var(--badge-text)', border: '1px solid var(--border-color)' }}>
                          {exp.badge}
                        </span>
                        <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                          <Calendar size={14} /> {exp.duration}
                        </span>
                      </div>

                      <h4 className="h5 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h4>
                      <div className="fw-semibold mb-3" style={{ color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                        {exp.organization}
                      </div>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        {exp.description}
                      </p>

                      <div className="border-top pt-3 mt-3" style={{ borderColor: 'var(--border-color)' }}>
                        <div className="fw-bold mb-2" style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                          Key Contributions & Learnings:
                        </div>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {exp.achievements.map((item, aIdx) => (
                            <li key={aIdx} className="d-flex align-items-start gap-2">
                              <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={activeTab === 'all' ? 'col-lg-6' : 'col-lg-8 mx-auto'}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                  style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                    Academic Pathway
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0 }}>
                    Foundational studies and undergraduate engineering
                  </p>
                </div>
              </div>

              <div className="timeline-container">
                {EDUCATION_DATA.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="timeline-dot" />

                    <div className="gr-card p-4">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="py-1 px-3 rounded-pill" style={{ fontSize: '0.78rem', fontWeight: 600, background: 'var(--badge-bg)', color: 'var(--badge-text)', border: '1px solid var(--border-color)' }}>
                          {edu.badge}
                        </span>
                        <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                          <Calendar size={14} /> {edu.duration}
                        </span>
                      </div>

                      <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-1">
                        <h4 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                          {edu.degree}
                        </h4>
                        <div
                          className="px-2 py-1 rounded fw-bold"
                          style={{
                            background: 'var(--badge-bg)',
                            color: 'var(--primary-color)',
                            fontSize: '0.88rem',
                          }}
                        >
                          {edu.score} <span style={{ fontSize: '0.72rem', fontWeight: 500 }}>({edu.scoreLabel})</span>
                        </div>
                      </div>

                      <div className="fw-semibold mb-2" style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {edu.institution}
                      </div>

                      <div className="d-flex align-items-center gap-3 mb-2" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <span className="d-flex align-items-center gap-1">
                          <MapPin size={13} /> {edu.location}
                        </span>
                        <span>•</span>
                        <span className="fw-medium" style={{ color: 'var(--primary-color)' }}>
                          {edu.status}
                        </span>
                      </div>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                        {edu.summary}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
