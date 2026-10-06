import React from 'react';
import { whyRantoPoints } from '../data/company';

export default function WhyRanto() {
  return (
    <section
      id="why-ranto"
      className="section-padding"
      style={{
        backgroundColor: '#111113',
        borderTop: '1px solid #262629',
        borderBottom: '1px solid #262629'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '64px'
          }}
        >
          <div className="editorial-badge">
            <span className="badge-dot" />
            <span>OUR ADVANTAGE</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px'
            }}
          >
            <h2 className="font-editorial" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Why Ranto?
            </h2>
            <p style={{ maxWidth: '480px', color: '#A7A7A7', fontSize: '1rem' }}>
              We aren't just developers. We are product architects committed to measurable operational outcome.
            </p>
          </div>
        </div>

        {/* 4 Points Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}
        >
          {whyRantoPoints.map((point) => (
            <div
              key={point.number}
              className="ranto-card"
              style={{
                backgroundColor: '#0B0B0C',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span
                  className="font-editorial"
                  style={{
                    fontSize: '2.5rem',
                    color: '#C9A86A',
                    fontWeight: 700,
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '20px'
                  }}
                >
                  {point.number}
                </span>

                <h3
                  className="font-editorial"
                  style={{
                    fontSize: '1.8rem',
                    color: '#F5F3EE',
                    marginBottom: '14px'
                  }}
                >
                  {point.title}
                </h3>

                <p style={{ color: '#A7A7A7', fontSize: '0.96rem', lineHeight: 1.6 }}>
                  {point.description}
                </p>
              </div>

              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#262629',
                  marginTop: '28px'
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
