import React, { useState } from 'react';
import { processSteps } from '../data/company';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="section-padding"
      style={{
        backgroundColor: '#111113',
        borderTop: '1px solid #262629',
        borderBottom: '1px solid #262629'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <div className="editorial-badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot" />
            <span>METHODOLOGY</span>
          </div>

          <h2 className="font-editorial" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>
            From Idea to Intelligent System
          </h2>

          <p style={{ color: '#A7A7A7', fontSize: '1.05rem' }}>
            A disciplined, four-phase engineering framework designed to eliminate risk and deliver predictable digital solutions.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            position: 'relative'
          }}
        >
          {processSteps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                style={{
                  backgroundColor: isSelected ? '#17171A' : '#0B0B0C',
                  border: isSelected ? '1px solid #C9A86A' : '1px solid #262629',
                  borderRadius: '8px',
                  padding: '32px 28px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  boxShadow: isSelected ? '0 10px 30px rgba(201, 168, 106, 0.1)' : 'none'
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}
                >
                  <span
                    className="font-editorial"
                    style={{
                      fontSize: '2.5rem',
                      color: isSelected ? '#C9A86A' : '#6C6C72',
                      fontWeight: 700,
                      lineHeight: 1
                    }}
                  >
                    {step.number}
                  </span>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#C9A86A' : '#262629'
                    }}
                  />
                </div>

                {/* Step Title */}
                <h3
                  className="font-editorial"
                  style={{
                    fontSize: '1.8rem',
                    color: '#F5F3EE',
                    marginBottom: '12px'
                  }}
                >
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#F5F3EE',
                    fontWeight: 500,
                    marginBottom: '14px',
                    lineHeight: 1.5
                  }}
                >
                  {step.subtitle}
                </p>

                {/* Expanded details */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#A7A7A7',
                    lineHeight: 1.6
                  }}
                >
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
