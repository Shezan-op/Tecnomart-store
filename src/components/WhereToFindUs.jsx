"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhereToFindUs.module.css';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

export default function WhereToFindUs() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="location">
      <div className="container">
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Find Us
        </div>

        <BlurText
          text="Visit Our Store"
          className={styles.heading}
          delay={80}
          direction="top"
          stepDuration={0.4}
        />

        <div className={styles.grid}>
          {/* ─── Left: Info ─── */}
          <div ref={leftRef} className={styles.infoCard}>
            <div className={styles.infoGroup}>
              <div className={styles.infoLabel}>Address</div>
              <div className={styles.infoValue}>
                7 Tombs Road, Opposite Toyota Showroom, Towlichowki,<br />
                Hyderabad, Telangana 500008
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.infoGroup}>
              <div className={styles.infoLabel}>Phone</div>
              <a href="tel:+919010667726" className={styles.infoValue}>
                +91 90106 67726
              </a>
            </div>

            <div className={styles.divider} />

            <div className={styles.infoGroup}>
              <div className={styles.infoLabel}>Hours</div>
              <div className={styles.infoValue}>
                Monday – Sunday<br />
                <span className={styles.hoursHighlight}>10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.ctaRow}>
              <a
                href="https://maps.app.goo.gl/Y8cpwK4urKPk5j1U9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.dirBtn}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l9-9 9 9M5 10v9h14v-9"/>
                </svg>
                Get Directions
              </a>
              <a href="tel:+919010667726" className={styles.callBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.22C.02.67.22.15.6.07A2 2 0 013 2v3a2 2 0 001.44 1.93 13 13 0 004 .7 2 2 0 001.56-1.2l1-2.4a2 2 0 01.93-.93l2.4-1a2 2 0 001.2-1.56 13 13 0 00.7-4 2 2 0 011.93-1.44H21a2 2 0 012 1.44z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* ─── Right: Map placeholder ─── */}
          <div ref={rightRef} className={styles.mapCard}>
            <div className={styles.mapPlaceholder}>
              <iframe
                title="TecnoMart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4827064!2d78.3766!3d17.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2a07f6b7f%3A0x1b2c64b04ba52a42!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className={styles.mapOverlayPin}>
                <div className={styles.mapPin}>
                  <svg width="28" height="36" viewBox="0 0 28 36">
                    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22S28 24.5 28 14C28 6.268 21.732 0 14 0z" fill="#ffffff"/>
                    <circle cx="14" cy="14" r="5" fill="#000"/>
                  </svg>
                </div>
                <span className={styles.mapPinLabel}>TecnoMart Towlichowki</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
