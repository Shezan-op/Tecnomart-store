"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MobileShowcaseWrapper.module.css';
import { PhoneModel } from './SharedPhoneModel';
import MobileFront from './MobileFront';
import MobileBack from './MobileBack';

gsap.registerPlugin(ScrollTrigger);

export default function MobileShowcaseWrapper() {
  const containerRef = useRef(null);
  const phoneWrapperRef = useRef(null);
  const frontContentRef = useRef(null);
  const backContentRef = useRef(null);
  const glareFrontRef = useRef(null);
  const glareBackRef = useRef(null);
  const rightEdgeRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Timeline (1025px and up)
      mm.add('(min-width: 1025px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=300%',
            scrub: true,
            pin: true
          }
        });

        // Setup initial states
        gsap.set(backContentRef.current, { opacity: 0, y: 20, pointerEvents: 'none' });
        gsap.set(frontContentRef.current, { opacity: 1, y: 0, pointerEvents: 'auto' });

        // Total timeline duration arbitrary units: 4
        // 0 to 1 (25%): Front content visible
        tl.to({}, { duration: 1 });

        // 1 to 3 (50%): Phone rotates 180 degrees
        tl.to(phoneWrapperRef.current, {
          rotationY: -180,
          ease: 'power1.inOut',
          duration: 2
        }, 1);

        // 1 to 1.5: Front content fades out and moves up
        tl.to(frontContentRef.current, { opacity: 0, y: -20, duration: 0.5 }, 1);
        // Switch pointer events at midpoint (time 2)
        tl.set(frontContentRef.current, { pointerEvents: 'none' }, 2);
        tl.set(backContentRef.current, { pointerEvents: 'auto' }, 2);

        // 2.5 to 3: Back content fades in from bottom
        tl.to(backContentRef.current, { opacity: 1, y: 0, duration: 0.5 }, 2.5);

        // 3 to 4 (25%): Back content stays visible
        tl.to({}, { duration: 1 }, 3);

        // Lighting Effects mapped to rotation time (1 to 3)
        if (glareFrontRef.current) {
          tl.fromTo(glareFrontRef.current,
            { x: '-100%' }, { x: '100%', ease: 'none', duration: 1.5 }, 0.5
          );
        }

        if (glareBackRef.current) {
          tl.fromTo(glareBackRef.current,
            { x: '-100%' }, { x: '100%', ease: 'none', duration: 1.5 }, 2
          );
        }

        if (rightEdgeRef.current) {
          tl.fromTo(rightEdgeRef.current,
            { filter: 'brightness(0.8)' },
            { 
              filter: 'brightness(2.5)', 
              duration: 0.5, 
              yoyo: true, 
              repeat: 1, 
              ease: 'power1.inOut' 
            }, 
            1.5 
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.masterWrapper}>
      {/* ─── DESKTOP VIEW ─── */}
      <div ref={containerRef} className={`${styles.desktopScrollTrack} ${styles.desktopOnly}`}>
        <div className={styles.stickyContainer}>
          
          {/* Front Content Wrapper */}
          <div ref={frontContentRef} className={styles.sectionContent}>
            <MobileFront isDesktopMode={true} />
          </div>

          {/* Phone in center */}
          <div className={styles.phoneCentralizer}>
            <div ref={phoneWrapperRef} style={{ transformStyle: 'preserve-3d' }}>
              <PhoneModel
                glareFrontRef={glareFrontRef}
                glareBackRef={glareBackRef}
                rightEdgeRef={rightEdgeRef}
              />
            </div>
          </div>

          {/* Back Content Wrapper */}
          <div ref={backContentRef} className={styles.sectionContent}>
            <MobileBack isDesktopMode={true} />
          </div>

        </div>
      </div>

      {/* ─── MOBILE VIEW (Static stacked) ─── */}
      <div className={styles.mobileOnly}>
        <MobileFront isDesktopMode={false} />
        <MobileBack isDesktopMode={false} />
      </div>
    </section>
  );
}
