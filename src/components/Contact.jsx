import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Agents',
    budget: '$15k - $30k',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') setStatus('idle');
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your project details or message.');
      return;
    }

    setStatus('loading');

    // Simulate backend payload submission
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: '#111113',
        borderTop: '1px solid #262629'
      }}
    >
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px'
          }}
        >
          {/* Left Column: Heading & Contact Meta */}
          <div>
            <div className="editorial-badge" style={{ marginBottom: '20px' }}>
              <span className="badge-dot" />
              <span>INITIATE PROJECT</span>
            </div>

            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                color: '#F5F3EE',
                lineHeight: 1.1,
                marginBottom: '28px'
              }}
            >
              Let's Build Something Intelligent.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#A7A7A7',
                lineHeight: 1.7,
                marginBottom: '40px'
              }}
            >
              Share your project vision, operational challenge, or technical requirements. Our engineering leadership will review your inquiry and respond within 24 business hours.
            </p>

            {/* Email Fallback Box */}
            <div
              style={{
                backgroundColor: '#0B0B0C',
                border: '1px solid #262629',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(201, 168, 106, 0.1)',
                  border: '1px solid rgba(201, 168, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A86A',
                  flexShrink: 0
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#6C6C72',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block'
                  }}
                >
                  Prefer Direct Email?
                </span>
                <a
                  href={`mailto:${companyDetails.emailFallback}`}
                  style={{
                    color: '#F5F3EE',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A86A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#F5F3EE')}
                >
                  {companyDetails.emailFallback}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div
            style={{
              backgroundColor: '#0B0B0C',
              border: '1px solid #262629',
              borderRadius: '12px',
              padding: '40px'
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  padding: '32px 16px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(201, 168, 106, 0.15)',
                    border: '1px solid #C9A86A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A86A'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-editorial" style={{ fontSize: '2rem', color: '#F5F3EE' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#A7A7A7', fontSize: '1rem', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Your project inquiry regarding <strong>{formData.service}</strong> has been logged. Our engineering team will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'AI Agents',
                      budget: '$15k - $30k',
                      message: ''
                    });
                  }}
                  style={{ marginTop: '12px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                
                {status === 'error' && (
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#F87171',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  {/* Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                      Your Name <span style={{ color: '#C9A86A' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      style={{
                        backgroundColor: '#17171A',
                        border: '1px solid #262629',
                        borderRadius: '6px',
                        padding: '12px 16px',
                        color: '#F5F3EE',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A86A')}
                      onBlur={(e) => (e.target.style.borderColor = '#262629')}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                      Work Email <span style={{ color: '#C9A86A' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      required
                      style={{
                        backgroundColor: '#17171A',
                        border: '1px solid #262629',
                        borderRadius: '6px',
                        padding: '12px 16px',
                        color: '#F5F3EE',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A86A')}
                      onBlur={(e) => (e.target.style.borderColor = '#262629')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  {/* Company */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      style={{
                        backgroundColor: '#17171A',
                        border: '1px solid #262629',
                        borderRadius: '6px',
                        padding: '12px 16px',
                        color: '#F5F3EE',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C9A86A')}
                      onBlur={(e) => (e.target.style.borderColor = '#262629')}
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="service" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                      Primary Service Focus
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        backgroundColor: '#17171A',
                        border: '1px solid #262629',
                        borderRadius: '6px',
                        padding: '12px 16px',
                        color: '#F5F3EE',
                        fontSize: '0.95rem',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="AI Agents">AI Agents</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI-Powered Applications">AI-Powered Applications</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="AI Consulting">AI Consulting</option>
                      <option value="Custom Project">Custom Project</option>
                    </select>
                  </div>
                </div>

                {/* Project Budget */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <label htmlFor="budget" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                    Estimated Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      backgroundColor: '#17171A',
                      border: '1px solid #262629',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      color: '#F5F3EE',
                      fontSize: '0.95rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                    <option value="$30,000+">$30,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                  <label htmlFor="message" style={{ color: '#F5F3EE', fontSize: '0.85rem', fontWeight: 500 }}>
                    Project Details <span style={{ color: '#C9A86A' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals, required capabilities, and timeframe..."
                    required
                    style={{
                      backgroundColor: '#17171A',
                      border: '1px solid #262629',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      color: '#F5F3EE',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C9A86A')}
                    onBlur={(e) => (e.target.style.borderColor = '#262629')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: status === 'loading' ? 0.7 : 1,
                    cursor: status === 'loading' ? 'wait' : 'pointer'
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
