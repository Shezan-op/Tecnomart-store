"use client";
import styles from './FeatureGrid.module.css';
import { Shield, Smartphone, PenTool, CheckCircle, Battery, Camera, Code, Laptop, Settings, Briefcase, Zap } from 'lucide-react';

const CONTENT = {
  'mobile-top': {
    heading: 'Discover the Future',
    body: 'Premium smartphones engineered for your lifestyle. Every model tested, every deal verified.',
    cards: [
      { icon: <Shield size={32} />, title: 'Affordable Pricing', text: 'Unbeatable deals on top models.' },
      { icon: <Smartphone size={32} />, title: 'Latest Smartphones', text: 'Cutting-edge tech arrivals, daily.' }
    ]
  },
  'mobile-bottom': {
    sections: [
      {
        cards: [
          { icon: <CheckCircle size={32} />, title: 'Refurbished Mobiles', text: 'Certified pre-owned perfection.' },
          { icon: <Shield size={32} />, title: 'Up To 2 Years Warranty', text: 'Peace of mind, guaranteed.' }
        ]
      },
      {
        heading: 'Precision Repair',
        body: 'Expert technicians restoring your device to factory perfection. Fast turnaround. Real warranties.',
        cards: [
          { icon: <Smartphone size={32} />, title: 'Display Replacement', text: 'Flawless OLED and LCD fixes.' },
          { icon: <Battery size={32} />, title: 'Battery Replacement', text: 'Restore full-day power.' },
          { icon: <Camera size={32} />, title: 'Camera Repairs', text: 'Crystal-clear lens restoration.' },
          { icon: <Code size={32} />, title: 'Software Solutions', text: 'Data recovery and OS updates.' }
        ]
      }
    ]
  },
  'display-top': {
    heading: 'Power Meets Productivity',
    body: "Whether you're a student, creator, gamer, or business professional — TecnoMart helps you choose the right laptop and keeps it performing at its best.",
    cards: [
      { icon: <Laptop size={32} />, title: 'Latest Laptop Collection', text: 'Explore new arrivals.' },
      { icon: <PenTool size={32} />, title: 'Hardware Repairs', text: 'Expert component fixes.' }
    ]
  },
  'display-bottom': {
    sections: [
      {
        cards: [
          { icon: <Briefcase size={32} />, title: 'Student & Business Deals', text: 'Special pricing available.' },
          { icon: <Zap size={32} />, title: 'Performance Upgrades', text: 'Boost speed and storage.' }
        ]
      },
      {
        heading: 'Complete Your Setup',
        body: 'Every great device deserves the right accessories. Discover premium mechanical keyboards, gaming mice, headphones, chargers, adapters, and cables that enhance your everyday experience.',
        cards: []
      }
    ]
  }
};

export default function FeatureGrid({ layout }) {
  const data = CONTENT[layout];
  
  if (!data) return null;

  // Handle multi-section layouts (bottom layouts)
  if (data.sections) {
    return (
      <div className={styles.wrapper}>
        {data.sections.map((sec, idx) => (
          <section key={idx} className={styles.section}>
            <div className="container text-center">
              {sec.heading && <h2 className="section-heading">{sec.heading}</h2>}
              {sec.body && <p className="section-body">{sec.body}</p>}
              
              {sec.cards && sec.cards.length > 0 && (
                <div className={styles.grid}>
                  {sec.cards.map((feature, i) => (
                    <div key={i} className={styles.card}>
                      <div className={styles.icon}>{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    );
  }

  // Handle single-section layouts (top layouts)
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className="container text-center">
          {data.heading && <h2 className="section-heading">{data.heading}</h2>}
          {data.body && <p className="section-body">{data.body}</p>}
          
          {data.cards && data.cards.length > 0 && (
            <div className={styles.grid}>
              {data.cards.map((feature, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.icon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
