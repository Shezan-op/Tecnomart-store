"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProKeyboard.module.css';
import Keyboard from './Keyboard';

gsap.registerPlugin(ScrollTrigger);

export default function ProKeyboard() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const keyboardRef = useRef(null);
  const [isPowered, setIsPowered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in text and keyboard on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom bottom',
          onEnter: () => setIsPowered(true),
          onLeaveBack: () => setIsPowered(false)
        }
      });

      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 0);

      tl.to(keyboardRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, 0.2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pro-keyboard" className={styles.keyboardSection} ref={sectionRef}>
      <div className={styles.accessoriesText} ref={textRef}>
        <h2>Stop Typing On Mushy Keys.</h2>
        <p>Upgrade to tactile, responsive mechanical boards. Your fingers will thank you.</p>
      </div>

      <div className={styles.keyboardContainer} ref={keyboardRef}>
        <Keyboard isPowered={isPowered} />
      </div>
    </section>
  );
}
