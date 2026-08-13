"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ConfiguratorProvider } from './ConfiguratorContext';
import ConfiguratorUI from './ConfiguratorUI';

export default function BuildYourSetupPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff' }}>
      <header className="site-header">
        <Navigation />
      </header>
      
      <section style={{ flex: 1, padding: '2rem 1rem' }}>
        <ConfiguratorProvider>
          <ConfiguratorUI />
        </ConfiguratorProvider>
      </section>

      <Footer />
    </main>
  );
}
