import React, { useState } from 'react';
import { companyDetails } from '../data/company';
import { Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import Modal from './Modal';

export default function Footer({ onNavigate }) {
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#0B0B0C',
        borderTop: '1px solid #262629',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand & Positioning */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  border: '1px solid #C9A86A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(201, 168, 106, 0.08)'
                }}
              >
                <span
                  className="font-editorial"
                  style={{ color: '#C9A86A', fontSize: '1.2rem', fontWeight: 700 }}
                >
                  R
                </span>
              </div>
              <span
                className="font-editorial"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#F5F3EE'
                }}
              >
                RANTO
              </span>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#C9A86A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '16px'
              }}
            >
              AI • Software • Automation
            </p>

            <p style={{ color: '#A7A7A7', fontSize: '0.92rem', maxWidth: '300px', lineHeight: 1.6 }}>
              Engineering autonomous AI agents, intelligent business workflows, and high-performance digital products for modern enterprises.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              className="font-editorial"
              style={{
                fontSize: '1.3rem',
                color: '#F5F3EE',
                marginBottom: '20px'
              }}
            >
              Navigation
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate(link.id);
                  }}
                  style={{
                    color: '#A7A7A7',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A86A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A7A7')}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className="font-editorial"
              style={{
                fontSize: '1.3rem',
                color: '#F5F3EE',
                marginBottom: '20px'
              }}
            >
              Connect
            </h4>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <a
                href={companyDetails.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#111113',
                  border: '1px solid #262629',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5F3EE',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A86A';
                  e.currentTarget.style.color = '#C9A86A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#262629';
                  e.currentTarget.style.color = '#F5F3EE';
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href={companyDetails.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#111113',
                  border: '1px solid #262629',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5F3EE',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A86A';
                  e.currentTarget.style.color = '#C9A86A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#262629';
                  e.currentTarget.style.color = '#F5F3EE';
                }}
              >
                <Github size={18} />
              </a>

              <a
                href={companyDetails.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#111113',
                  border: '1px solid #262629',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5F3EE',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A86A';
                  e.currentTarget.style.color = '#C9A86A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#262629';
                  e.currentTarget.style.color = '#F5F3EE';
                }}
              >
                <Instagram size={18} />
              </a>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#6C6C72' }}>
              Inquiries: {companyDetails.emailFallback}
            </p>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div
          style={{
            borderTop: '1px solid #262629',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.88rem',
            color: '#6C6C72'
          }}
        >
          <div>
            © 2026 Ranto AI Agency. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              style={{
                color: '#6C6C72',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F3EE')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6C6C72')}
            >
              Privacy Policy
            </button>

            <button
              onClick={() => setActiveLegalModal('terms')}
              style={{
                color: '#6C6C72',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F3EE')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6C6C72')}
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      <Modal
        isOpen={!!activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        title={activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
      >
        {activeLegalModal === 'privacy' ? (
          <div>
            <p style={{ marginBottom: '16px' }}>
              At Ranto AI Agency, we strictly protect the confidentiality and security of our client data and project architecture.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Information collected through our project inquiry form is strictly used to evaluate service requests and contact your team directly. We do not sell or transfer your contact information to third parties.
            </p>
            <p>
              For enterprise data security protocols or NDAs regarding custom AI model implementations, please speak with our technical team during project discovery.
            </p>
          </div>
        ) : (
          <div>
            <p style={{ marginBottom: '16px' }}>
              All software deliverables, AI models, and custom agent workflows built by Ranto AI Agency are delivered under clear intellectual property ownership agreements specified in formal client engagements.
            </p>
            <p style={{ marginBottom: '16px' }}>
              By submitting an inquiry through our website, you agree to provide authentic contact and project requirements.
            </p>
            <p>© 2026 RANTO AI AGENCY. All Rights Reserved.</p>
          </div>
        )}
      </Modal>
    </footer>
  );
}
