import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function CTA({ onNavigate }) {
  return (
    <section
      id="cta"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#0B0B0C',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Gradient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 106, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            backgroundColor: '#111113',
            border: '1px solid #262629',
            borderRadius: '16px',
            padding: '80px 48px',
            textAlign: 'center',
            maxWidth: '1040px',
            margin: '0 auto',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Top Accent Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '180px',
              height: '3px',
              backgroundColor: '#C9A86A',
              boxShadow: '0 0 15px rgba(201, 168, 106, 0.5)'
            }}
          />

          <div className="editorial-badge" style={{ marginBottom: '24px' }}>
            <span className="badge-dot" />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              color: '#F5F3EE',
              lineHeight: 1.05,
              marginBottom: '24px',
              fontWeight: 400
            }}
          >
            {companyDetails.ctaHeading}
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#A7A7A7',
              maxWidth: '620px',
              margin: '0 auto 40px auto',
              lineHeight: 1.6
            }}
          >
            {companyDetails.ctaText}
          </p>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="btn-primary"
            style={{
              padding: '16px 40px',
              fontSize: '1.05rem'
            }}
          >
            <span>Start a Conversation</span>
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
