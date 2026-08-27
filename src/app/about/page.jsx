"use client";

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { number: "2009", label: "Serving Hyderabad" },
    { number: "45,000+", label: "Verified Clients" },
    { number: "18,000+", label: "Systems Serviced" },
    { number: "4.8★", label: "Google Rating" },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff', paddingTop: '80px' }}>
      <div className="absolute top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem) 2rem', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(250, 204, 21, 0.12) 0%, #050608 70%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FDE047' }}>
            Spectrum Enterprise Retail
          </span>
          <h1 style={{ 
            fontFamily: "'Hubot Sans', sans-serif", 
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', 
            background: 'linear-gradient(to right, #ffffff, #FDE047)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            margin: '0.75rem 0 1.25rem',
            lineHeight: 1.15
          }}>
            Engineering Trust in Tech
          </h1>
          <p style={{ 
            fontFamily: "'Mona Sans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.6,
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            Since 2009, TecnoMart has been Hyderabad’s premier destination for enterprise-grade laptops, custom high-performance workstations, and certified chip-level diagnostics.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section style={{ padding: '2rem 1rem clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#FDE047', marginBottom: '0.5rem' }}>
                {s.number}
              </div>
              <div style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Story Content */}
      <section style={{ padding: '0 1rem clamp(4rem, 8vw, 6rem)', flex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
          }}>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              The Zero-Compromise Standard
            </h3>
            <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Every machine entering our inventory undergoes rigorous thermal stress-testing, component validation, and clean-room diagnostic screening. We reject sub-par grade units so you get true workstation reliability.
            </p>
            <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Whether you need an ultra-thin ThinkPad for developer workflows, an RTX-powered gaming beast, or surgical micro-soldering repairs, our in-house engineers ensure zero downtime.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
          }}>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Flagship Store & Service Hub
            </h3>
            <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Visit our flagship store in Towlichowki, Hyderabad. Experience live benchmark stations, mechanical keyboard testing bars, and discuss custom builds directly with veteran hardware technicians.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/contact" style={{
                display: 'inline-block',
                backgroundColor: '#FDE047',
                color: '#000',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.75rem 1.8rem',
                borderRadius: '8px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                Visit Our Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
