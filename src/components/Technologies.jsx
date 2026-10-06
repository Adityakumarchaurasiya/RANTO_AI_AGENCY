import React, { useState } from 'react';
import { technologyCategories } from '../data/technologies';
import { Layers, Terminal, Sparkles, Database, GitBranch } from 'lucide-react';

const categoryIcons = {
  "AI & Agents": Sparkles,
  "Frontend": Layers,
  "Backend": Terminal,
  "Database": Database,
  "Automation": GitBranch
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("AI & Agents");

  return (
    <section id="technologies" className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <div className="editorial-badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot" />
            <span>TECHNICAL ARCHITECTURE</span>
          </div>

          <h2 className="font-editorial" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>
            Built With Modern Technology
          </h2>

          <p style={{ color: '#A7A7A7', fontSize: '1.05rem' }}>
            We leverage enterprise-proven frameworks and cutting-edge artificial intelligence stacks for rock-solid stability and scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px'
          }}
        >
          {technologyCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Layers;
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: isActive ? '1px solid #C9A86A' : '1px solid #262629',
                  backgroundColor: isActive ? 'rgba(201, 168, 106, 0.12)' : 'rgba(17, 17, 19, 0.6)',
                  color: isActive ? '#C9A86A' : '#A7A7A7',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        {technologyCategories
          .filter((cat) => cat.category === activeCategory)
          .map((cat) => (
            <div
              key={cat.category}
              style={{
                backgroundColor: '#111113',
                border: '1px solid #262629',
                borderRadius: '12px',
                padding: '40px',
                maxWidth: '980px',
                margin: '0 auto',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ marginBottom: '32px' }}>
                <h3
                  className="font-editorial"
                  style={{ fontSize: '2rem', color: '#F5F3EE', marginBottom: '8px' }}
                >
                  {cat.category} Stack
                </h3>
                <p style={{ color: '#A7A7A7', fontSize: '0.98rem' }}>
                  {cat.description}
                </p>
              </div>

              {/* Tech Pills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '16px'
                }}
              >
                {cat.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#17171A',
                      border: '1px solid #262629',
                      borderRadius: '8px',
                      padding: '16px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'border-color 0.2s ease, transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#C9A86A';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#262629';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span
                      style={{
                        color: '#F5F3EE',
                        fontWeight: 600,
                        fontSize: '1.05rem'
                      }}
                    >
                      {tech.name}
                    </span>
                    <span
                      style={{
                        color: '#6C6C72',
                        fontSize: '0.8rem',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

      </div>
    </section>
  );
}
