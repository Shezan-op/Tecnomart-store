"use client";

import React, { useEffect, useRef } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        padding: '8rem 2rem 4rem', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(26,30,50,0.5) 0%, #050608 70%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ 
            fontFamily: 'Orbitron', 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            background: 'linear-gradient(to right, #ffffff, #aab2ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            We Fix It. You Game.
          </h1>
          <p className="hero-desc" style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.6 
          }}>
            Your PC is a high-performance machine. When it breaks, slows down, or just needs a tune-up, you shouldn't have to guess what's wrong. Let our experts handle the dirty work so you can get back to what matters.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 2rem', flex: 1 }}>
        <div className="services-grid" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((svc, idx) => (
            <div key={idx} className="service-card" style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px',
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{svc.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{svc.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{svc.desc}</p>
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
          padding: '4rem 2rem',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', fontFamily: 'Orbitron' }}>Ready to optimize?</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem' }}>
            Bring your system to our Hyderabad store or contact us on WhatsApp to schedule a service.
          </p>
          <a href="https://wa.me/919010667726?text=Hi! I need help servicing my PC." target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            backgroundColor: '#fff',
            color: '#000',
            textDecoration: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
          >
            Chat with an Expert
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
