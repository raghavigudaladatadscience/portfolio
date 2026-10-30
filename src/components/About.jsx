import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Sparkles } from 'lucide-react';
import IconHelper from './IconHelper';
import { PERSONAL_INFO, LANGUAGES_DATA } from '../data/portfolioData';

export default function About() {
  const stats = [
    { label: 'B.Tech CSE Aggregate', value: '75%', sub: 'Vaagdevi College of Eng.' },
    { label: 'Secondary School (SSC)', value: '95%', sub: 'Academic Distinction' },
    { label: 'Academic Research', value: '1', sub: 'Decentralized Cloud Storage' },
    { label: 'Key Certifications', value: '4+', sub: 'AWS, IBM SkillsBuild, etc.' },
  ];

  return (
    <section id="about" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Professional Journey
          </span>
          <h2>About Me</h2>
          <p>
            Passionate computer science student turning algorithmic concepts and design into practical digital experiences.
          </p>
          <div className="gr-heading-bar" />
        </div>

        {/* Top Summary & Stats */}
        <div className="row g-4 align-items-stretch mb-5">
          {/* Main Story Card */}
          <div className="col-lg-7">
            <div className="gr-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Bridging Software Engineering & Practical Solutions
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.02rem' }}>
                  {PERSONAL_INFO.aboutText}
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.02rem' }}>
                  My academic journey at <strong>Vaagdevi College of Engineering</strong> in Computer Science (specializing in Data Science) has given me a solid technical base across algorithmic thinking, database systems, and modern web application development. I believe in writing readable, structured code and continuously exploring newer paradigms like decentralized cloud systems and data analytics.
                </p>
              </div>

              {/* Languages Spoken Chips */}
              <div className="pt-4 mt-4 border-top" style={{ borderColor: 'var(--border-color)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Languages size={18} style={{ color: 'var(--primary-color)' }} />
                  <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>
                    Language Proficiencies:
                  </span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {LANGUAGES_DATA.map((lang, idx) => (
                    <span
                      key={idx}
                      className="py-1 px-3 rounded-pill"
                      style={{
                        background: 'var(--badge-bg)',
                        color: 'var(--primary-color)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      {lang.name} <span style={{ opacity: 0.75, fontWeight: 400 }}>({lang.tag})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="col-lg-5">
            <div className="row g-3 h-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="col-sm-6">
                  <motion.div
                    className="gr-card h-100 text-center d-flex flex-column justify-content-center p-4"
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className="gr-text-gradient display-6 fw-bold mb-1"
                    >
                      {stat.value}
                    </div>
                    <div className="fw-bold mb-1" style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {stat.sub}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Core Highlight Pillars */}
        <div className="row g-4">
          {PERSONAL_INFO.highlights.map((highlight, idx) => (
            <div key={idx} className="col-md-4">
              <motion.div
                className="gr-card h-100"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="d-inline-flex p-3 rounded-3 mb-3"
                  style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                >
                  <IconHelper name={highlight.icon} size={26} />
                </div>
                <h4 className="h5 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {highlight.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  {highlight.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
