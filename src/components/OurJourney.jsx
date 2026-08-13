"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './OurJourney.module.css';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: '2009',
    title: 'The Spectrum Foundation',
    desc: 'It all began with Spectrum. Founded on a commitment to quality technology and unmatched customer service, Spectrum set the benchmark for operational excellence and deep industry expertise.',
  },
  {
    year: '2016',
    title: 'Spectrum Goes Digital',
    desc: 'Spectrum took its massive inventory online, triggering explosive growth. This strategic leap multiplied sales tenfold, pushing monthly turnover to the 5–7 crore mark and proving the power of digital commerce.',
  },
  {
    year: '2025',
    title: 'The Birth of TecnoMart',
    desc: 'TecnoMart launched as a standalone venture with a singular focus — premium hardware and expert service. Backed by Spectrum’s veteran operational guidance and extensive inventory network, a new standard was born.',
  },
  {
    year: '2026',
    title: 'August: The Digital Frontier',
    desc: 'We brought the TecnoMart experience online. Guided by the exact same minds that scaled Spectrum, we now offer our curated tech ecosystem directly to your doorstep, combining standalone agility with legacy expertise.',
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical timeline line filling up
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom 80%',
            scrub: 1
          }
        }
      );

      // Animate each milestone card
      gsap.utils.toArray(`.${styles.item}`).forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 82%' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="journey">
      <div className="container">
        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Our Story
        </div>

        <BlurText
          text="Our Journey"
          className={styles.heading}
          delay={80}
          direction="top"
          stepDuration={0.4}
        />

        <p className={styles.sub}>
          Every milestone reflects our commitment to delivering trusted technology solutions.
        </p>

        {/* ─── Timeline ─── */}
        <div className={styles.timeline}>
          {/* Vertical track */}
          <div className={styles.track}>
            <div ref={lineRef} className={styles.trackLine} />
          </div>

          {/* Items */}
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.card}>
                <div className={styles.yearBadge}>{m.year}</div>
                <div className={styles.cardTitle}>{m.title}</div>
                <div className={styles.cardDesc}>{m.desc}</div>
              </div>
              {/* Connector dot */}
              <div className={styles.dot}>
                <div className={styles.dotInner} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
