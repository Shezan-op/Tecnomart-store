"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff' }}>
      <header className="site-header">
        <Navigation />
      </header>
      
      <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(2.5rem, 5vw, 4rem)', background: 'linear-gradient(to right, #fff, #aab2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1.5rem' }}>
            Professional Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
            From thermal repasting and hardware diagnostics to full system upgrades, our experts have you covered. Full service catalog coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
