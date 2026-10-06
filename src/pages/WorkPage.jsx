import React from 'react';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import CTA from '../components/CTA';

export default function WorkPage({ onNavigate }) {
  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="editorial-badge">
          <span className="badge-dot" />
          <span>PROJECT PORTFOLIO</span>
        </div>
        <h1 className="font-editorial" style={{ marginBottom: '16px' }}>
          Selected Engineering Work
        </h1>
        <p style={{ maxWidth: '640px', color: '#A7A7A7', fontSize: '1.15rem' }}>
          Discover how Ranto delivers AI agents, automation pipelines, and modern applications for real-world enterprise demands.
        </p>
      </div>

      <Projects />
      <Technologies />
      <CTA onNavigate={onNavigate} />
    </main>
  );
}
