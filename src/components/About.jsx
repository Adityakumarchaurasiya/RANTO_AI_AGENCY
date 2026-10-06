import React from 'react';
import { companyDetails } from '../data/company';
import { ShieldCheck, Terminal, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: '#111113',
        borderTop: '1px solid #262629',
        borderBottom: '1px solid #262629'
      }}
    >
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center'
          }}
        >
          {/* Left Column Text */}
          <div>
            <div className="editorial-badge" style={{ marginBottom: '20px' }}>
              <span className="badge-dot" />
              <span>ABOUT RANTO</span>
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
              {companyDetails.aboutHeading}
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#F5F3EE',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}
            >
              Ranto is an AI and software development agency focused on building intelligent digital systems for modern businesses.
            </p>

            <p
              style={{
                fontSize: '1.02rem',
                color: '#A7A7A7',
                lineHeight: 1.7,
                marginBottom: '36px'
              }}
            >
              We combine software engineering, artificial intelligence, automation and user experience to transform ideas and repetitive processes into scalable digital products.
            </p>

            {/* Authentic Founder/Company Philosophy statement */}
            <div
              style={{
                backgroundColor: '#0B0B0C',
                border: '1px solid #262629',
                borderLeft: '4px solid #C9A86A',
                borderRadius: '0 8px 8px 0',
                padding: '24px 28px'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.2rem',
                  color: '#F5F3EE',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  marginBottom: '12px'
                }}
              >
                "{companyDetails.founderNote}"
              </p>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#C9A86A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                — RANTO LEADERSHIP PRINCIPLE
              </span>
            </div>
          </div>

          {/* Right Column Visual Minimalist Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px'
            }}
          >
            <div
              style={{
                backgroundColor: '#0B0B0C',
                border: '1px solid #262629',
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(201, 168, 106, 0.1)',
                  border: '1px solid rgba(201, 168, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A86A',
                  flexShrink: 0
                }}
              >
                <Terminal size={22} />
              </div>
              <div>
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#F5F3EE', marginBottom: '6px' }}>
                  Clean Engineering
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#A7A7A7' }}>
                  No brittle scripts or quick band-aids. We build maintainable, modular software designed for high availability.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#0B0B0C',
                border: '1px solid #262629',
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(201, 168, 106, 0.1)',
                  border: '1px solid rgba(201, 168, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A86A',
                  flexShrink: 0
                }}
              >
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#F5F3EE', marginBottom: '6px' }}>
                  Intelligent Orchestration
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#A7A7A7' }}>
                  Integrating autonomous LLM agents and multi-step tool calls directly into existing databases and workflows.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#0B0B0C',
                border: '1px solid #262629',
                borderRadius: '8px',
                padding: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(201, 168, 106, 0.1)',
                  border: '1px solid rgba(201, 168, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C9A86A',
                  flexShrink: 0
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#F5F3EE', marginBottom: '6px' }}>
                  Enterprise Integrity
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#A7A7A7' }}>
                  Strict data privacy, deterministic fallback paths, and robust security protocols built into every solution.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
