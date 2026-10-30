import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`Copied ${fieldName} to clipboard!`);

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#7C3AED', '#087EA4', '#059669', '#E11D48'],
    });

    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) onShowToast('Thank you! Your message has been sent successfully.');

      // Festive Confetti burst
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-5" style={{ position: 'relative' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="gr-section-heading">
          <span className="gr-badge mb-2">
            <Sparkles size={14} /> Let's Connect
          </span>
          <h2>Get In Touch</h2>
          <p>
            Have an opportunity, internship inquiry, or want to discuss research collaborations? I'd love to hear from you.
          </p>
          <div className="gr-heading-bar" />
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Left Column: Direct Contact Info & Links */}
          <div className="col-lg-5">
            <div className="gr-card h-100 d-flex flex-column justify-content-between p-4 p-md-5">
              <div>
                <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Contact Information
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Feel free to reach out directly via email, phone, or connect with me on LinkedIn and GitHub. I respond promptly!
                </p>

                {/* Email Item */}
                <div
                  className="p-3 rounded-3 mb-3 d-flex align-items-center justify-content-between"
                  style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-color)' }}
                >
                  <div className="d-flex align-items-center gap-3 overflow-hidden">
                    <div
                      className="p-2 rounded-circle flex-shrink-0"
                      style={{ background: 'var(--surface-color)', color: 'var(--primary-color)' }}
                    >
                      <Mail size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="fw-semibold text-truncate d-block"
                        style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="btn btn-sm p-1 border-0 rounded-circle ms-2"
                    style={{ color: 'var(--primary-color)' }}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check size={18} className="text-success" /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  className="p-3 rounded-3 mb-3 d-flex align-items-center justify-content-between"
                  style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-color)' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="p-2 rounded-circle flex-shrink-0"
                      style={{ background: 'var(--surface-color)', color: 'var(--primary-color)' }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Phone / WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="fw-semibold"
                        style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    className="btn btn-sm p-1 border-0 rounded-circle ms-2"
                    style={{ color: 'var(--primary-color)' }}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check size={18} className="text-success" /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  className="p-3 rounded-3 mb-4 d-flex align-items-center gap-3"
                  style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-color)' }}
                >
                  <div
                    className="p-2 rounded-circle flex-shrink-0"
                    style={{ background: 'var(--surface-color)', color: 'var(--primary-color)' }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Current Location</div>
                    <div className="fw-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link Buttons */}
              <div className="border-top pt-3" style={{ borderColor: 'var(--border-color)' }}>
                <div className="fw-semibold mb-2" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  Social Profiles
                </div>
                <div className="d-flex gap-2">
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gr-btn-outline py-2 px-3 flex-grow-1 justify-content-center"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={PERSONAL_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gr-btn-outline py-2 px-3 flex-grow-1 justify-content-center"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="col-lg-7">
            <div className="gr-card h-100 p-4 p-md-5">
              {submitted ? (
                <div className="text-center py-5">
                  <div
                    className="d-inline-flex p-4 rounded-circle mb-3"
                    style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}
                  >
                    <Check size={48} strokeWidth={2.5} />
                  </div>
                  <h3 className="h4 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 2rem' }}>
                    Thank you for reaching out, <strong>{formData.name}</strong>. I have received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="gr-btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <MessageSquare size={20} style={{ color: 'var(--primary-color)' }} />
                    <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>
                      Send A Direct Message
                    </h3>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="gr-input"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold" style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="gr-input"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold" style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Internship Inquiry / Project Discussion"
                        className="gr-input"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold" style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Hi Raghavi, I reviewed your portfolio and would like to discuss..."
                        className="gr-textarea"
                        required
                      />
                    </div>

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="gr-btn-primary w-100 justify-content-center py-3"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
