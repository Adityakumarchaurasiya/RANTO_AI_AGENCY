import React from 'react';

export default function TrustIntro() {
  return (
    <section
      id="intro"
      className="section-padding"
      style={{
        backgroundColor: '#111113',
        borderTop: '1px solid #262629',
        borderBottom: '1px solid #262629',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          <div className="editorial-badge" style={{ marginBottom: '32px' }}>
            <span className="badge-dot" />
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2
            className="font-editorial"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: '#F5F3EE',
              lineHeight: 1.15,
              marginBottom: '36px',
              fontWeight: 400
            }}
          >
            "Technology should not make your business more complicated.{' '}
            <span style={{ color: '#C9A86A', fontStyle: 'italic' }}>
              It should make your business simpler."
            </span>
          </h2>

          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#C9A86A',
              margin: '0 auto 36px auto'
            }}
          />

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#A7A7A7',
              maxWidth: '780px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            Ranto combines software development, artificial intelligence, automation, and thoughtful design to create digital systems that solve real business problems.
          </p>

        </div>
      </div>
    </section>
  );
}
