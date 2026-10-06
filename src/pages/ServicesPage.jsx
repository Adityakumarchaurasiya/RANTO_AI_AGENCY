import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import CTA from '../components/CTA';

export default function ServicesPage({ onNavigate }) {
  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="editorial-badge">
          <span className="badge-dot" />
          <span>SOLUTIONS & SERVICES</span>
        </div>
        <h1 className="font-editorial" style={{ marginBottom: '16px' }}>
          Autonomous Intelligence & Custom Software
        </h1>
        <p style={{ maxWidth: '640px', color: '#A7A7A7', fontSize: '1.15rem' }}>
          Explore our six core service capabilities built to streamline corporate workflows, create bespoke AI tools, and optimize digital infrastructure.
        </p>
      </div>

      <Services />
      <Process />
      <Technologies />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
