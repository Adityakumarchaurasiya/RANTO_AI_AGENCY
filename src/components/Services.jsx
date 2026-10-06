import React, { useState } from 'react';
import { Bot, Zap, Code, Cpu, Sliders, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/services';
import Modal from './Modal';

const iconMap = {
  Bot,
  Zap,
  Code,
  Cpu,
  Sliders,
  Compass
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding">
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
            <span>CORE CAPABILITIES</span>
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
              What We Build
            </h2>
            <p style={{ maxWidth: '480px', color: '#A7A7A7', fontSize: '1rem' }}>
              Engineered for impact. We transform operational overhead into autonomous, high-performance software systems.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Bot;
            return (
              <div
                key={service.id}
                className="ranto-card"
                onClick={() => setSelectedService(service)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px',
                  backgroundColor: '#111113'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C9A86A';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#262629';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  {/* Card Top: Number & Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '28px'
                    }}
                  >
                    <span
                      className="font-editorial"
                      style={{
                        fontSize: '1rem',
                        color: '#C9A86A',
                        letterSpacing: '0.1em',
                        fontWeight: 700
                      }}
                    >
                      {service.number}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid #262629',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F5F3EE'
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="font-editorial"
                    style={{
                      fontSize: '1.8rem',
                      color: '#F5F3EE',
                      marginBottom: '16px'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: '#A7A7A7',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Example Pills & Footer Arrow */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px'
                    }}
                  >
                    {service.examples.slice(0, 3).map((ex, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(38, 38, 41, 0.5)',
                          border: '1px solid #262629',
                          color: '#F5F3EE'
                        }}
                      >
                        {ex}
                      </span>
                    ))}
                    {service.examples.length > 3 && (
                      <span
                        style={{
                          fontSize: '0.78rem',
                          padding: '4px 8px',
                          color: '#C9A86A'
                        }}
                      >
                        +{service.examples.length - 3} more
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #262629',
                      paddingTop: '16px',
                      color: '#C9A86A',
                      fontSize: '0.88rem',
                      fontWeight: 500
                    }}
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        {selectedService && (
          <div>
            <div
              className="editorial-badge"
              style={{ marginBottom: '16px' }}
            >
              <span className="badge-dot" />
              <span>{selectedService.number}</span>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#F5F3EE', marginBottom: '24px' }}>
              {selectedService.fullDesc}
            </p>

            <div
              style={{
                backgroundColor: 'rgba(201, 168, 106, 0.06)',
                borderLeft: '3px solid #C9A86A',
                padding: '16px 20px',
                borderRadius: '0 6px 6px 0',
                marginBottom: '28px',
                color: '#C9A86A',
                fontSize: '0.95rem'
              }}
            >
              <strong>Architecture Focus:</strong> {selectedService.highlight}
            </div>

            <h4
              className="font-editorial"
              style={{ fontSize: '1.3rem', color: '#F5F3EE', marginBottom: '16px' }}
            >
              Example Deliverables & Applications:
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '32px' }}>
              {selectedService.examples.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    backgroundColor: '#17171A',
                    border: '1px solid #262629',
                    color: '#F5F3EE',
                    fontSize: '0.95rem'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: '#C9A86A', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedService(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inquire About {selectedService.title}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
