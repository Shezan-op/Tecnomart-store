"use client";

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff', paddingTop: '80px' }}>
      <div className="absolute top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
        <Navigation />
      </div>

      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem) 2rem', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(250, 204, 21, 0.12) 0%, #050608 70%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FDE047' }}>
            Warranty &amp; Service SLAs
          </span>
          <h1 style={{ 
            fontFamily: "'Hubot Sans', sans-serif", 
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', 
            color: '#fff',
            margin: '0.75rem 0 1rem'
          }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            Service Agreements &amp; Hardware Warranties
          </p>
        </div>
      </section>

      <section style={{ padding: '0 1rem clamp(4rem, 8vw, 6rem)', flex: 1 }}>
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          fontFamily: "'Mona Sans', sans-serif",
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.2rem', color: '#FDE047', marginBottom: '0.5rem' }}>
              1. Hardware Authenticity &amp; Warranty
            </h3>
            <p>
              All laptops, smartphones, and PC hardware components sold by TecnoMart come with authentic manufacturer or certified store warranties. Refurbished enterprise systems include a 1-year store warranty covering non-accidental hardware component failure.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.2rem', color: '#FDE047', marginBottom: '0.5rem' }}>
              2. Chip-Level Repair Warranty
            </h3>
            <p>
              Replaced ICs, display panels, and battery packs serviced by TecnoMart include a 90-day functional warranty. Accidental drops or post-repair liquid contamination are void from warranty coverage.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.2rem', color: '#FDE047', marginBottom: '0.5rem' }}>
              3. Custom Rig Build Orders
            </h3>
            <p>
              Every custom setup is built to order, cable-managed, and burn-in stress tested for 12 hours prior to customer handover with original component retail boxes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
