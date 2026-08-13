"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.css';
import SimpleCarousel from './SimpleCarousel';

gsap.registerPlugin(ScrollTrigger);

// ─── Replace videoId with your real YouTube shorts ID ───
const REELS = [
  {
    id: '1',
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER — replace with real Short ID
    author: 'Rahul S.',
    role: 'Software Developer, Hyderabad',
    quote: 'Saved ₹30K on my MacBook Pro!',
    tag: 'Laptop Deal'
  },
  {
    id: '2',
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER
    author: 'Priya M.',
    role: 'Content Creator',
    quote: 'Flawless iPhone 14 Pro Max, genuine warranty.',
    tag: 'Mobile Buy'
  },
  {
    id: '3',
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER
    author: 'Arjun K.',
    role: 'Student, BITS Hyderabad',
    quote: 'Best laptop for college — Asus got serviced in 2 days!',
    tag: 'Repair'
  },
  {
    id: '4',
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER
    author: 'Neha R.',
    role: 'Graphic Designer',
    quote: 'The 90-point inspection is legit — refurb iPhone looks brand new.',
    tag: 'Refurb'
  },
  {
    id: '5',
    videoId: 'dQw4w9WgXcQ', // PLACEHOLDER
    author: 'Vikram P.',
    role: 'Entrepreneur',
    quote: 'Set up 8 laptops for my office in one day from TecnoMart.',
    tag: 'Business'
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    // We can animate the header in
    gsap.fromTo(
      sectionRef.current.querySelector('.' + styles.header),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Don't Just Take Our Word For It</p>
          <h2 className={styles.heading}>The Best Tech Community In Hyderabad.</h2>
          <div className={styles.ratingBadge}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingText}>4.5 out of 5 · 500+ reviews</span>
          </div>
          <p className={styles.sub}>We don't just sell hardware. We build relationships.</p>
        </div>
      </div>

      {/* Simple 3D Carousel */}
      <SimpleCarousel cards={REELS} />
    </section>
  );
}
