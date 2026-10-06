import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  // Sync route based on window location hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['services-page', 'about-page', 'work-page', 'contact-page'].includes(hash)) {
        setCurrentPage(hash.replace('-page', ''));
        window.scrollTo(0, 0);
      } else if (hash) {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Intersection observer to highlight navbar links on single-page scroll
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionIds = ['home', 'services', 'about', 'work', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [currentPage]);

  const handleNavigate = (id) => {
    setActiveSection(id);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-container">
      <ScrollProgress />
      
      <Navbar
        activeSection={currentPage === 'home' ? activeSection : currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === 'work' && <WorkPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage />}

      <Footer onNavigate={handleNavigate} />
      <BackToTop />
    </div>
  );
}
