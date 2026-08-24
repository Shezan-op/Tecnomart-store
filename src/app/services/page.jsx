"use client";

import React, { useEffect, useRef } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-title', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-desc', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      // Services Grid Animation
      gsap.fromTo('.service-card', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Deep Diagnostics",
      desc: "Random crashes? Strange noises? We'll track down the exact root cause so you aren't throwing money at the wrong parts.",
      icon: "🔍"
    },
    {
      title: "Thermal Repasting & Cleaning",
      desc: "Stop your PC from sounding like a jet engine. We do a complete deep clean and repaste to bring your temps back down to ice cold.",
      icon: "❄️"
    },
    {
      title: "Hardware Upgrades",
      desc: "From popping in more RAM to a full motherboard swap, we handle the delicate surgery so you can just enjoy the performance bump.",
      icon: "⚡"
    },
    {
      title: "Cable Management",
      desc: "Turn that rat's nest into a work of art. Better airflow, easier maintenance, and a setup you'll actually want to look at.",
      icon: "🎀"
    },
    {
      title: "OS & Software Tuning",
      desc: "Bloatware removal, BIOS updates, and OS optimization to make sure your hardware is actually running at 100% of its capability.",
      icon: "⚙️"
    },
    {
      title: "Data Recovery & Backup",
      desc: "Failing drive? We can help recover lost files and set you up with a bulletproof backup system so it never happens again.",
      icon: "💾"
    }
  ];

  return (
    <main ref={containerRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050608', color: '#fff' }}>
      <div className="absolute top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
        <Navigation />
      </div>
      
      {/* Hero Section */}
      <section style={{ 
        padding: 'clamp(6rem, 12vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(2.5rem, 6vw, 4rem)', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(26,30,50,0.5) 0%, #050608 70%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ 
            fontFamily: "'Hubot Sans', sans-serif", 
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(to right, #ffffff, #aab2ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            marginBottom: '1.5rem',
            lineHeight: 1.15
          }}>
            We Fix It. You Game.
          </h1>
          <p className="hero-desc" style={{ 
            fontFamily: "'Mona Sans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.6 
          }}>
            Your PC is a high-performance machine. When it breaks, slows down, or just needs a tune-up, you shouldn't have to guess what's wrong. Let our experts handle the dirty work so you can get back to what matters.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)', flex: 1 }}>
        <div className="services-grid" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
          gap: 'clamp(1rem, 3vw, 2rem)' 
        }}>
          {services.map((svc, idx) => (
            <div key={idx} className="service-card" style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '2.5rem 2rem',
              transition: 'transform 0.3s ease, background 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{svc.icon}</div>
              <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{svc.title}</h3>
              <p style={{ fontFamily: "'Mona Sans', sans-serif", color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontWeight: 400, fontSize: '0.95rem' }}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'linear-gradient(145deg, rgba(30,35,55,0.6), rgba(15,18,30,0.6))',
          padding: '3.5rem 2rem',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem', fontFamily: "'Hubot Sans', sans-serif", fontWeight: 700 }}>Ready to optimize?</h2>
          <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontWeight: 400 }}>
            Bring your system to our Hyderabad store or contact us on WhatsApp to schedule a service.
          </p>
          <a href="https://wa.me/919010667726?text=Hi! I need help servicing my PC." target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#FDE047',
            color: '#000',
            textDecoration: 'none',
            padding: '0.85rem 2.2rem',
            borderRadius: '8px',
            fontFamily: "'Hubot Sans', sans-serif",
            fontSize: '0.95rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 16px rgba(250, 204, 21, 0.25)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FDE047';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            Chat with an Expert
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
