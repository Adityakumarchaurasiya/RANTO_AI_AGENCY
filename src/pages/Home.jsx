import React from 'react';
import Hero from '../components/Hero';
import TrustIntro from '../components/TrustIntro';
import Services from '../components/Services';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import WhyRanto from '../components/WhyRanto';
import Projects from '../components/Projects';
import About from '../components/About';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home({ onNavigate }) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <TrustIntro />
      <Services />
      <Process />
      <Technologies />
      <WhyRanto />
      <Projects />
      <About />
      <CTA onNavigate={onNavigate} />
      <Contact />
    </main>
  );
}
