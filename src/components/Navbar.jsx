import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(11, 11, 12, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #262629' : '1px solid transparent'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              border: '1px solid #C9A86A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(201, 168, 106, 0.08)'
            }}
          >
            <span
              className="font-editorial"
              style={{ color: '#C9A86A', fontSize: '1.2rem', fontWeight: 700 }}
            >
              R
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-editorial"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#F5F3EE',
                lineHeight: 1
              }}
            >
              RANTO
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: '#A7A7A7',
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}
            >
              AI AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: isActive ? '#C9A86A' : '#A7A7A7',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F3EE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#C9A86A' : '#A7A7A7')}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#C9A86A',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary desktop-cta"
            style={{ padding: '10px 22px', fontSize: '0.85rem' }}
          >
            <span>Let's Build</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-hamburger"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '8px',
              color: '#F5F3EE',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - var(--header-height))',
            backgroundColor: '#0B0B0C',
            borderTop: '1px solid #262629',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 999
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className="font-editorial"
                style={{
                  fontSize: '2rem',
                  color: activeSection === link.id ? '#C9A86A' : '#F5F3EE',
                  textDecoration: 'none',
                  borderBottom: '1px solid #1C1C1F',
                  paddingBottom: '12px'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Let's Build</span>
              <ArrowUpRight size={18} />
            </button>
            <p style={{ fontSize: '0.85rem', color: '#6C6C72', textAlign: 'center' }}>
              RANTO AI AGENCY • 2026
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
