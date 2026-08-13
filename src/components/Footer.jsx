"use client";
import styles from './Footer.module.css';
import InteractiveLines from './originkit/ui/reactive-lines';
import ParticleText from './ParticleText';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ─── Reactive Lines Background ─── */}
      <InteractiveLines 
        backgroundColor="#000000"
        lineColor="rgba(255, 255, 255, 0.15)"
        fade={true}
        fadeIntensity={20}
      />
      
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.linkGrid}>
          <div className={styles.linkCol}>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
              X (Twitter)
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>

          <div className={styles.linkCol}>
            <a href="#" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Visit Us
            </a>
            <a href="tel:+919010667726" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.22.67.67 0 01.6.07A2 2 0 013 2v3a2 2 0 001.44 1.93 13 13 0 004 .7 2 2 0 001.56-1.2l1-2.4a2 2 0 01.93-.93l2.4-1a2 2 0 001.2-1.56 13 13 0 00.7-4 2 2 0 011.93-1.44H21a2 2 0 012 1.44z"/>
              </svg>
              Contact Us
            </a>
          </div>

          <div className={styles.linkCol}>
            <a href="#" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4.5 8-10a8 8 0 00-16 0c0 5.5 8 10 8 10z"/>
              </svg>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Terms &amp; Conditions
            </a>
          </div>
        </div>

        {/* ─── Giant brand wordmark (Webild style) ─── */}
        <div className={styles.wordmarkWrap}>
          <ParticleText text="TecnoMart" textColor="#ffffff" fontSize={160} />
        </div>

        {/* ─── Bottom line ─── */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} TecnoMart. Engineered for Precision.</span>
          <span className={styles.city}>Hyderabad, Telangana</span>
        </div>
      </div>
    </footer>
  );
}
