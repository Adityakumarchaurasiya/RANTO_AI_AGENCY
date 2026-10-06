import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ArrowUpRight, CheckCircle, Layers } from 'lucide-react';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="section-padding">
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
            <span>PORTFOLIO SHOWCASE</span>
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
              Selected Work
            </h2>
            <p style={{ maxWidth: '480px', color: '#A7A7A7', fontSize: '1rem' }}>
              Real-world intelligent products and digital platforms engineered for operational speed.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="ranto-card"
              onClick={() => setSelectedProject(project)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '420px',
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
                {/* Project Header Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: project.accent,
                      backgroundColor: 'rgba(201, 168, 106, 0.08)',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: '1px solid rgba(201, 168, 106, 0.2)'
                    }}
                  >
                    {project.category}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid #262629',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F5F3EE'
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Project Name */}
                <h3
                  className="font-editorial"
                  style={{
                    fontSize: '2.2rem',
                    color: '#F5F3EE',
                    marginBottom: '8px'
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#C9A86A',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}
                >
                  {project.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.96rem',
                    color: '#A7A7A7',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech Tags */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    borderTop: '1px solid #262629',
                    paddingTop: '20px'
                  }}
                >
                  {project.technology.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        backgroundColor: '#17171A',
                        border: '1px solid #262629',
                        color: '#F5F3EE'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name}
      >
        {selectedProject && (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: '#C9A86A',
                  border: '1px solid #C9A86A',
                  padding: '4px 12px',
                  borderRadius: '100px'
                }}
              >
                {selectedProject.category}
              </span>
            </div>

            <p style={{ fontSize: '1.2rem', color: '#F5F3EE', marginBottom: '16px' }}>
              {selectedProject.tagline}
            </p>

            <p style={{ color: '#A7A7A7', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedProject.description}
            </p>

            <div
              style={{
                backgroundColor: '#17171A',
                border: '1px solid #262629',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '28px'
              }}
            >
              <h4
                className="font-editorial"
                style={{ fontSize: '1.2rem', color: '#F5F3EE', marginBottom: '8px' }}
              >
                Performance Metric & Outcome:
              </h4>
              <p style={{ color: '#C9A86A', fontWeight: 500, fontSize: '0.98rem' }}>
                {selectedProject.metrics}
              </p>
            </div>

            <h4
              className="font-editorial"
              style={{ fontSize: '1.2rem', color: '#F5F3EE', marginBottom: '12px' }}
            >
              Technology Stack Used:
            </h4>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {selectedProject.technology.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(201, 168, 106, 0.1)',
                    border: '1px solid rgba(201, 168, 106, 0.3)',
                    color: '#F5F3EE',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedProject(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Build a Similar Solution
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
