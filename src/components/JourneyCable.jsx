"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './JourneyCable.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function JourneyCable() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      // The clipPath controls the drawing of the cable from top to bottom
      gsap.fromTo(svgRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.cableLayer} ref={containerRef}>
      <svg
        ref={svgRef}
        className={styles.cableSvg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The glowing yellow outline (rendered behind) */}
        <path
          className={styles.cableOutline}
          d="M 100,0 C 140,0 140,50 100,50 C 60,50 60,100 0,100"
        />
        {/* The dynamic solid core (rendered on top) */}
        <path
          className={styles.cableCore}
          d="M 100,0 C 140,0 140,50 100,50 C 60,50 60,100 0,100"
        />
      </svg>
    </div>
  );
}
