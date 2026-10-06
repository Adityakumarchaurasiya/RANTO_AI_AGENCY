import React from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)' }}>
      <Contact />
    </main>
  );
}
