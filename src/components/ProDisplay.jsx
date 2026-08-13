"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProDisplay.module.css';
import BackgroundArc from './BackgroundArc';

gsap.registerPlugin(ScrollTrigger);

export default function ProDisplay() {
  const containerRef = useRef(null);    
  const showcaseRef = useRef(null);     
  const displayUnitRef = useRef(null);  
  const displayPanelRef = useRef(null); 
  const lidEdgeRef = useRef(null);
  const cardsRef = useRef(null);

  const [textIndex, setTextIndex] = useState(0);
  const screenTexts = [
    "Is your laptop becoming noisy?",
    "Experiencing unexpected lag?",
    "Overheating during heavy tasks?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % screenTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !showcaseRef.current) return;

    const ctx = gsap.context(() => {
      // 1024px+ Desktop Animation (Sticky + Scrub)
      const mm = gsap.matchMedia();

      mm.add('all', () => {
        // Initial state for desktop animation
        gsap.set(displayUnitRef.current, {
          z: -500,
          rotateX: 85, // Flat on desk (tilted back)
          yPercent: 0,
          opacity: 1,
        });

        if (displayPanelRef.current) {
          gsap.set(displayPanelRef.current, { rotateX: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          }
        });

        tl.addLabel('closed');

        tl.to(displayUnitRef.current, {
          z: 0,
          ease: 'power1.inOut',
          duration: 1
        });
        tl.addLabel('approach');

        tl.to({}, { duration: 0.3 });
        tl.addLabel('hold');

        tl.to(displayPanelRef.current, {
          rotateX: 110,
          ease: 'power2.inOut',
          duration: 2
        }, 'open');

        tl.to(displayUnitRef.current, {
          yPercent: 45,
          ease: 'power2.inOut',
          duration: 2
        }, 'open');

        if (lidEdgeRef.current) {
          tl.to(lidEdgeRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
          }, 'open');
        }

        if (cardsRef.current) {
          const boxes = cardsRef.current.querySelectorAll(`.${styles.displayCard}`);
          const pointersLeft = cardsRef.current.querySelectorAll(`.${styles.displayFeatureLeft} .${styles.pointerSvg}`);
          const pointersRight = cardsRef.current.querySelectorAll(`.${styles.displayFeatureRight} .${styles.pointerSvg}`);

          gsap.set(boxes, { opacity: 0, y: 20 });

          tl.to(boxes, { opacity: 1, y: 0, stagger: 0.2, duration: 1 }, 'open+=2');

          tl.fromTo(pointersLeft, 
            { opacity: 0, x: 15 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
            'open+=2'
          );

          tl.fromTo(pointersRight, 
            { opacity: 0, x: -15 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
            'open+=2'
          );
        }

        tl.addLabel('open');

        tl.to({}, { duration: 0.2 });
        tl.addLabel('complete');
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.masterPinWrapper} id="display">
      <div ref={showcaseRef} className={styles.productShowcase}>
        <BackgroundArc topOffset="50%" />

        <section className={styles.displaySection} ref={cardsRef}>
          {/* Left Cards */}
          <div className={styles.displayFeatureLeft}>
            <div className={styles.displayCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h4>Latest Collection</h4>
              <p>New arrivals from Apple, Dell, Asus &amp; more.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 50,50 50,10 100,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="100" cy="10" r="2.5" fill="#ffffff" />
              </svg>
            </div>
            <div className={styles.displayCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h4>Hardware Repairs</h4>
              <p>Expert component-level service, fast turnaround.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 50,50 50,90 100,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="100" cy="90" r="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* 3D Laptop */}
          <div className={`${styles.device} ${styles.preserve3d}`} ref={displayUnitRef}>
            <div className={`${styles.baseTop} ${styles.preserve3d}`}>
              <div className={styles.keyboardWell}>
                {Array.from({ length: 60 }).map((_, i) => (
                  <div key={i} className={styles.laptopKey} />
                ))}
              </div>
              <div className={styles.trackpad} />
              <div id="display-connector" className={styles.displayConnector} />
            </div>
            <div className={styles.baseEdge}>
              <div className={styles.thumbGroove} />
            </div>
            <div className={`${styles.lid} ${styles.preserve3d}`} ref={displayPanelRef}>
              <div className={styles.lidBack} />
              <div className={styles.lidEdge} ref={lidEdgeRef} />
              <div className={styles.lidScreen}>
                <div className={styles.screenGlass}>
                  <div className={styles.screenContent}>
                    <div className={styles.screenTextContainer}>
                      {screenTexts.map((text, index) => (
                        <h3 
                          key={index} 
                          className={`${styles.screenText} ${index === textIndex ? styles.activeText : ''}`}
                        >
                          {text}
                        </h3>
                      ))}
                    </div>
                    <Link href="/services" className={styles.screenBtn}>
                      Get it Solved
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className={styles.displayFeatureRight}>
            <div className={styles.displayCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h4>Student Deals</h4>
              <p>Special pricing for academic needs.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 50,50 50,20 0,20" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="0" cy="20" r="2.5" fill="#ffffff" />
              </svg>
            </div>
            <div className={styles.displayCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h4>Performance Upgrades</h4>
              <p>Boost speed, storage &amp; lifespan.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 50,50 50,80 0,80" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="0" cy="80" r="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </section>

        {/* Mobile Grid (only visible on mobile) */}
        <div className={styles.mobileGrid}>
          <a href="http://localhost:3000" className="premiumStoreBtn" style={{ gridColumn: '1 / -1', margin: '0 auto 12px' }}>Visit Store</a>
          <div className={styles.mobileGridItem}>
             <div className={styles.cardIcon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
             </div>
             <h4>Latest Collection</h4>
          </div>
          <div className={styles.mobileGridItem}>
             <div className={styles.cardIcon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
             </div>
             <h4>Hardware Repairs</h4>
          </div>
          <div className={styles.mobileGridItem}>
             <div className={styles.cardIcon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
             </div>
             <h4>Student Deals</h4>
          </div>
          <div className={styles.mobileGridItem}>
             <div className={styles.cardIcon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
             </div>
             <h4>Performance Upgrades</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
