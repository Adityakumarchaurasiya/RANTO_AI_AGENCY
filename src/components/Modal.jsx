import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(11, 11, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          backgroundColor: '#111113',
          border: '1px solid #262629',
          borderRadius: '12px',
          padding: '36px',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            color: '#A7A7A7',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F3EE')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A7A7')}
        >
          <X size={24} />
        </button>

        {title && (
          <h2
            className="font-editorial"
            style={{
              fontSize: '2rem',
              color: '#F5F3EE',
              marginBottom: '20px',
              paddingRight: '32px'
            }}
          >
            {title}
          </h2>
        )}

        <div style={{ color: '#A7A7A7', fontSize: '1rem', lineHeight: '1.7' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
