"use client";

import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello TecnoMart Towlichowki! 👋\n- Name: ${name}\n- Phone: ${phone}\n- Message: ${message}`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FDE047' }}>
            Store &amp; Support Hub
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
            Connect With TecnoMart
          </h1>
          <p style={{ 
            fontFamily: "'Mona Sans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            color: 'rgba(255,255,255,0.7)', 
            lineHeight: 1.6 
          }}>
            Drop by our Towlichowki store or reach out online for instant system estimates, warranty support, or custom rig consultations.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section style={{ padding: '0 1rem clamp(4rem, 8vw, 6rem)', flex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Store Info Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                Towlichowki Experience Hub
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: "'Mona Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>
                <div>
                  <strong style={{ color: '#FDE047', display: 'block', marginBottom: '0.25rem' }}>📍 Address:</strong>
                  <span>Opposite RTA Office, Towlichowki Main Road, Hyderabad, Telangana – 500008</span>
                </div>

                <div>
                  <strong style={{ color: '#FDE047', display: 'block', marginBottom: '0.25rem' }}>📞 Phone &amp; WhatsApp:</strong>
                  <a href="tel:+919010667726" style={{ color: '#fff', textDecoration: 'none' }}>+91 90106 67726</a>
                </div>

                <div>
                  <strong style={{ color: '#FDE047', display: 'block', marginBottom: '0.25rem' }}>⏰ Store Hours:</strong>
                  <span>Monday – Sunday: 10:30 AM – 9:30 PM (All 7 Days Open)</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://maps.app.goo.gl/Y8cpwK4urKPk5j1U9"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                Open Google Maps Navigation
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
          }}>
            <h3 style={{ fontFamily: "'Hubot Sans', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontFamily: "'Mona Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              Connect directly with our hardware specialists on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
                  Message / Hardware Query
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="What laptop, PC spec, or repair do you need help with?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  padding: '0.85rem',
                  backgroundColor: '#FDE047',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
