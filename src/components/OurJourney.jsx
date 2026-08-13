"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './OurJourney.module.css';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: '2015',
    title: 'The Beginning',
    desc: 'Founded in Towlichowki. First store opens with mobile sales and repairs — a vision of trusted technology starts here.',
  },
  {
    year: '2017',
    title: 'Full Service Centre',
    desc: 'Expanded to a full laptop service centre. Added a certified technician team. Hardware expertise meets customer care.',
  },
  {
    year: '2019',
    title: '10,000 Customers',
    desc: 'Launched the premium accessories department. Crossed 10,000 happy customers — a milestone we wear with pride.',
  },
  {
    year: '2022',
    title: 'Expanded Showroom',
    desc: "New, larger showroom opens. Hyderabad's most trusted tech destination — now with room to match the reputation.",
  },
  {
    year: '2024',
    title: 'Going Digital',
    desc: 'Launched our online presence, reaching customers across all of Telangana. The future of TecnoMart goes beyond four walls.',
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
