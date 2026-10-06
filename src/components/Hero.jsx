import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 40px)',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Interactive AI Visual Canvas */}
      <HeroCanvas />

      {/* Subtle overlay gradient to guarantee crisp readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11,11,12,0.95) 0%, rgba(11,11,12,0.75) 55%, rgba(11,11,12,0.4) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Small Editorial Badge */}
          <div className="editorial-badge">
            <span className="badge-dot" />
            <span>RANTO AI AGENCY</span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-editorial"
            style={{
              color: '#F5F3EE',
              fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
              lineHeight: 1.02,
              marginBottom: '28px',
              fontWeight: 400
            }}
          >
            Build Smarter.{' '}
            <span style={{ color: '#C9A86A', fontStyle: 'italic', fontWeight: 400 }}>
              Automate Faster.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#A7A7A7',
              maxWidth: '680px',
              lineHeight: 1.6,
              marginBottom: '40px',
              fontWeight: 400
            }}
          >
            We build AI-powered products, intelligent agents, and modern digital experiences that help businesses work smarter and scale faster.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '48px'
            }}
          >
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="btn-primary"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => onNavigate && onNavigate('services')}
              className="btn-secondary"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Subtle Secondary Positioning Text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderTop: '1px solid #262629',
              paddingTop: '24px',
              color: '#6C6C72',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ color: '#C9A86A' }}>•</span>
            <span>AI Automation</span>
            <span style={{ color: '#262629' }}>|</span>
            <span style={{ color: '#C9A86A' }}>•</span>
            <span>AI Agents</span>
            <span style={{ color: '#262629' }}>|</span>
            <span style={{ color: '#C9A86A' }}>•</span>
            <span>Web Development</span>
          </div>

        </div>
      </div>

      {/* Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: '#6C6C72',
          cursor: 'pointer'
        }}
        onClick={() => onNavigate && onNavigate('intro')}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }
      `}</style>
    </section>
  );
}
