import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${scrollProgress}%`,
        backgroundColor: '#C9A86A',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
        boxShadow: '0 0 10px rgba(201, 168, 106, 0.7)'
      }}
      aria-hidden="true"
    />
  );
}
