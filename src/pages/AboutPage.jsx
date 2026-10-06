import React from 'react';
import About from '../components/About';
import WhyRanto from '../components/WhyRanto';
import TrustIntro from '../components/TrustIntro';
import CTA from '../components/CTA';

export default function AboutPage({ onNavigate }) {
  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="editorial-badge">
          <span className="badge-dot" />
          <span>AGENCY PROFILE</span>
        </div>
        <h1 className="font-editorial" style={{ marginBottom: '16px' }}>
          Building Purposeful Software
        </h1>
        <p style={{ maxWidth: '640px', color: '#A7A7A7', fontSize: '1.15rem' }}>
          Learn about Ranto AI Agency's core engineering principles, human-centered philosophy, and technological focus.
        </p>
      </div>

      <TrustIntro />
      <About />
      <WhyRanto />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
