"use client";
import styles from './FeatureGrid.module.css';
import { Shield, Smartphone, PenTool, CheckCircle, Battery, Camera, Code, Laptop, Settings, Briefcase, Zap } from 'lucide-react';

const CONTENT = {
  'mobile-top': {
    heading: 'Phones You Can Trust',
    body: "No hidden defects. No bloated prices. We test every device so you don't have to.",
    cards: [
      { icon: <Shield size={32} />, title: 'Honest Pricing', text: 'Stop overpaying for flagships.' },
      { icon: <Smartphone size={32} />, title: 'Fresh Inventory', text: 'New arrivals hitting the shelves daily.' }
    ]
  },
  'mobile-bottom': {
    sections: [
      {
        cards: [
          { icon: <CheckCircle size={32} />, title: 'Certified Renewed', text: 'Looks new, acts new. Backed by strict quality checks.' },
          { icon: <Shield size={32} />, title: 'Up To 2 Years Warranty', text: 'We stand behind what we sell. Period.' }
        ]
      },
      {
        heading: 'We Fix It Right. The First Time.',
        body: 'A broken phone stops your day. Our technicians get you back online fast, using genuine parts and real warranties.',
        cards: [
          { icon: <Smartphone size={32} />, title: 'Flawless Screens', text: 'Zero dead pixels. Crystal clear OLED and LCDs.' },
          { icon: <Battery size={32} />, title: 'New Battery Life', text: 'Stop living wall-to-wall. Get your full day back.' },
          { icon: <Camera size={32} />, title: 'Lens Restoration', text: 'Focus restored. No more blurry photos.' },
          { icon: <Code size={32} />, title: 'Software Rescue', text: 'Lost files and OS crashes? We handle the digital disasters.' }
        ]
      }
    ]
  },
  'display-top': {
    heading: "Laptops That Don't Quit",
    body: "A slow laptop costs you time and money. Whether you’re rendering video or running spreadsheets, we match you with machines built to handle your exact workload.",
    cards: [
      { icon: <Laptop size={32} />, title: 'Curated Hardware', text: 'Only the models actually worth buying.' },
      { icon: <PenTool size={32} />, title: 'Board-Level Repair', text: 'We fix motherboards, not just screens.' }
    ]
  },
  'display-bottom': {
    sections: [
      {
        cards: [
          { icon: <Briefcase size={32} />, title: 'Student & Office Pricing', text: 'Equip your work without breaking the bank.' },
          { icon: <Zap size={32} />, title: 'Speed Upgrades', text: 'Max out your current machine’s lifespan.' }
        ]
      },
      {
        heading: 'The Gear That Ties It Together',
        body: "Your setup isn't finished until the accessories feel right. From tactile mechanical keyboards and precision mice to cables that actually last, we stock the essentials that make working better.",
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
