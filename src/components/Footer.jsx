"use client";
import styles from './Footer.module.css';
import InteractiveLines from './originkit/ui/reactive-lines';
import ParticleText from './ParticleText';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ─── Reactive Lines Background ─── */}
      <InteractiveLines 
        backgroundColor="#06070c"
        lineColor="rgba(250, 204, 21, 0.08)"
        fade={true}
        fadeIntensity={20}
      />

      {/* Ambient footer glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-amber-500/05 blur-[160px] rounded-full pointer-events-none" />
      
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <span className="text-2xl font-bold font-hubot text-white tracking-tight">Tecno<span className="text-[#FDE047]">Mart</span></span>
            </div>
            <p className={styles.brandTagline}>
              TecnoMart is Spectrum's retail technology storefront, serving Hyderabad since 2009. Curating benchmark enterprise laptops, flagship smartphones, and certified custom PC workstations.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.col}>
              <h5 className={styles.colTitle}>Hardware</h5>
              <Link href="/#laptops" className={styles.link}>Laptops &amp; MacBooks</Link>
              <Link href="/#mobiles" className={styles.link}>Flagship Smartphones</Link>
              <Link href="/#accessories" className={styles.link}>Mechanical Keyboards</Link>
              <Link href="/build-your-setup" className={styles.link}>Custom Rig Studio</Link>
            </div>

            <div className={styles.col}>
              <h5 className={styles.colTitle}>Services</h5>
              <Link href="/services" className={styles.link}>90-Point Hardware QA</Link>
              <Link href="/services" className={styles.link}>Chipset &amp; Logic Repair</Link>
              <Link href="/services" className={styles.link}>Enterprise Fleet Bulk</Link>
              <Link href="/services" className={styles.link}>Instant Device Trade-In</Link>
            </div>

            <div className={styles.col}>
              <h5 className={styles.colTitle}>Support &amp; Store</h5>
              <a href="#location" className={styles.link}>Towlichowki Center</a>
              <a href="tel:+919010667726" className={styles.link}>+91 90106 67726</a>
              <a href="https://maps.app.goo.gl/Y8cpwK4urKPk5j1U9" target="_blank" rel="noreferrer" className={styles.link}>Google Maps Route</a>
              <a href="#faq" className={styles.link}>Warranty FAQs</a>
            </div>
          </div>
        </div>

        {/* ─── Giant brand wordmark ─── */}
        <div className={styles.wordmarkWrap}>
          <ParticleText text="TecnoMart" textColor="#FDE047" fontSize={150} />
        </div>

        {/* ─── Bottom line ─── */}
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} TecnoMart — A Spectrum Enterprise. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className={styles.city}>Towlichowki, Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
