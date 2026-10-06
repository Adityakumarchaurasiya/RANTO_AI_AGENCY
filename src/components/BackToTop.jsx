import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#111113',
        color: '#F5F3EE',
        border: '1px solid #262629',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 990,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#C9A86A';
        e.currentTarget.style.color = '#C9A86A';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#262629';
        e.currentTarget.style.color = '#F5F3EE';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
