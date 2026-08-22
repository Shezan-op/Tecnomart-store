import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './DreamSetupSequence.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DreamSetupSequence() {
  const containerRef = useRef(null);
  
  const panel1Ref = useRef(null);
  const panel2Ref = useRef(null);
  const panel3Ref = useRef(null);
  
  const gpuImageRef = useRef(null);
  const cabinetContainerRef = useRef(null);
  const setupContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // We create a ScrollTrigger timeline that scrubs through our 3 panels.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%', // Total scroll distance is 4x viewport height
          scrub: 1, // Smooth scrubbing
          pin: true,
          anticipatePin: 1,
        },
      });

      // Panel 1: Initial state
      gsap.set(panel1Ref.current, { autoAlpha: 1 });
      gsap.set(panel2Ref.current, { autoAlpha: 0 });
      gsap.set(panel3Ref.current, { autoAlpha: 0 });

      // Scene 1: GPU image slides in from bottom-right (x: 50vw, y: 50vh)
      gsap.set(gpuImageRef.current, { x: '50vw', y: '50vh', opacity: 0 });

      // 1. Bring in GPU Image
      tl.to(gpuImageRef.current, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
      
      // Pause briefly for reading
      tl.to({}, { duration: 0.5 });

      // 2. Transition Scene 1 -> Scene 2 (Cross dissolve)
      tl.addLabel('transition1');
      tl.to(panel1Ref.current, { autoAlpha: 0, duration: 1 }, 'transition1');
      tl.to(panel2Ref.current, { autoAlpha: 1, duration: 1 }, 'transition1');
      
      // Slide cabinet container in from bottom-left
      tl.fromTo(
        cabinetContainerRef.current,
        { x: '-50vw', y: '50vh', scale: 0.8 },
        { x: 0, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' },
        'transition1'
      );

      // Pause briefly for reading
      tl.to({}, { duration: 0.5 });

      // 3. Transition Scene 2 -> Scene 3 (Cross dissolve)
      tl.addLabel('transition2');
      tl.to(panel2Ref.current, { autoAlpha: 0, duration: 1 }, 'transition2');
      tl.to(panel3Ref.current, { autoAlpha: 1, duration: 1 }, 'transition2');
      
      // Setup images pop up from center
      tl.fromTo(
        setupContainerRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.5)' },
        'transition2+=0.2'
      );

      // Pause briefly at the end before unpinning
      tl.to({}, { duration: 1 });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.pinContainer}>
      <div className={styles.stickyWrapper}>
        
        {/* PANEL 1: GPU */}
        <div ref={panel1Ref} className={`${styles.panel} ${styles.panel1}`}>
          <div className={styles.contentLeft}>
            <h2 className={styles.heading}>
              Get your favourite graphics card in one place
            </h2>
          </div>
          <div className={styles.contentRight}>
            <div ref={gpuImageRef} className={styles.imageWrapper}>
              <Image 
                src="/GPU-4050.png"
                alt="RTX 4050 GPU"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* PANEL 2: Cabinet */}
        <div ref={panel2Ref} className={`${styles.panel} ${styles.panel2}`}>
          <div className={styles.contentLeft}>
            {/* The infinite crossfade container */}
            <div ref={cabinetContainerRef} className={styles.crossfadeContainer}>
              <Image 
                src="/black-cabinet.png"
                alt="Black Cabinet"
                fill
                style={{ objectFit: 'contain' }}
                className={styles.baseImage}
              />
              <Image 
                src="/white-cabinet.png"
                alt="White Cabinet"
                fill
                style={{ objectFit: 'contain' }}
                className={`${styles.topImage} ${styles.animateFade}`}
              />
            </div>
          </div>
          <div className={styles.contentRight}>
            <h2 className={styles.heading}>
              Build your dream gaming cpu cabinet in just minutes
            </h2>
          </div>
        </div>

        {/* PANEL 3: Full Setup */}
        <div ref={panel3Ref} className={`${styles.panel} ${styles.panel3}`}>
          <div className={styles.contentTop}>
            <h2 className={styles.headingCenter}>
              Build your own dream setup
            </h2>
          </div>
          <div className={styles.contentCenter}>
            <div ref={setupContainerRef} className={styles.setupCrossfadeContainer}>
              <Image 
                src="/black-setup.jpg"
                alt="Black Setup"
                fill
                style={{ objectFit: 'contain' }}
                className={styles.baseImage}
              />
              <Image 
                src="/white-setup.jpg"
                alt="White Setup"
                fill
                style={{ objectFit: 'contain' }}
                className={`${styles.topImage} ${styles.animateFade}`}
              />
            </div>
            
            <Link href="/build-your-setup" className={styles.ctaButton}>
              Configure Custom Rig
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
