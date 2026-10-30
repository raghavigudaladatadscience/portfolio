import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, Sparkles } from 'lucide-react';
import IconHelper from './IconHelper';
import { SKILLS_DATA, SOFT_SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map((cat) => cat.category)];

  const filteredCategories = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Technical Arsenal
          </span>
          <h2>Skills & Competencies</h2>
          <p>
            A solid programming base in Java & Python, full-stack web fundamentals, and modern developer tooling.
          </p>
          <div className="gr-heading-bar" />
        </div>

        {/* Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`gr-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {filteredCategories.map((catGroup, idx) => (
                <div key={idx} className="mb-4">
                  {selectedCategory === 'All' && (
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                        {catGroup.category}
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        — {catGroup.description}
                      </span>
                    </div>
                  )}

                  <div className="row g-3">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="col-md-6 col-lg-4">
                        <motion.div
                          className="gr-card h-100 p-3 p-sm-4 d-flex flex-column justify-content-between"
                          whileHover={{ y: -4, borderColor: 'var(--primary-color)' }}
                          transition={{ duration: 0.2 }}
                        >
                          <div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div
                                className="d-flex align-items-center justify-content-center p-2 rounded-3"
                                style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                              >
                                <IconHelper name={skill.icon} size={24} />
                              </div>
                              <span
                                className="py-1 px-2 rounded-pill"
                                style={{
                                  background: 'var(--badge-bg)',
                                  color: 'var(--primary-color)',
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                }}
                              >
                                {skill.tag}
                              </span>
                            </div>

                            <h4 className="h5 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                              {skill.name}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                              {skill.note}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Soft Skills & Working Strengths */}
        <div className="mt-5 pt-3">
          <div className="text-center mb-4">
            <span className="gr-badge mb-2">
              <HeartHandshake size={14} /> Interpersonal Strengths
            </span>
            <h3 className="h4 fw-bold" style={{ color: 'var(--text-primary)' }}>
              Core Soft Skills & Mindset
            </h3>
          </div>

          <div className="row g-3">
            {SOFT_SKILLS_DATA.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <motion.div
                  className="gr-card h-100 p-4 text-center d-flex flex-column align-items-center"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="p-3 rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{ background: 'var(--badge-bg)', color: 'var(--primary-color)' }}
                  >
                    <IconHelper name={item.icon} size={24} />
                  </div>
                  <h4 className="fw-bold mb-2" style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
