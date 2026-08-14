"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ConfiguratorProvider } from './ConfiguratorContext';
import ConfiguratorUI from './ConfiguratorUI';

export default function BuildYourSetupPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff', paddingTop: '80px' }}>
      <div className="absolute top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
        <Navigation />
      </div>
      
      <section style={{ flex: 1, padding: '2rem 1rem' }}>
        <ConfiguratorProvider>
          <ConfiguratorUI />
        </ConfiguratorProvider>
      </section>

      <Footer />
    </main>
  );
}
