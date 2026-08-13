"use client";
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './PopularModels.module.css';

const products = [
  { id: 1, name: 'MacBook Pro (M3)', desc: 'Crush compile times and render 4K without dropping a frame.', color: '#475BFF' },
  { id: 2, name: 'Galaxy S24 Ultra', desc: 'A literal supercomputer in your pocket.', color: '#25272B' },
  { id: 3, name: 'Dell UltraSharp 4K', desc: 'Stop squinting. True color accuracy for creatives who care.', color: '#E3E4E5' },
  { id: 4, name: 'Sony WH-1000XM5', desc: 'Turn off the office. Industry-best noise cancellation.', color: '#1C1C1E' },
  { id: 5, name: 'Apple Watch Ultra 2', desc: 'Leave your phone at home. Track every metric.', color: '#B4B2A6' },
  { id: 6, name: 'Custom ASUS ROG', desc: 'Max out your framerates. Zero thermal throttling.', color: '#00e5ff' },
  { id: 7, name: 'iPad Pro (M4)', desc: 'Lighter than a laptop, faster than your desktop.', color: '#8B9098' },
  { id: 8, name: 'Wacom Cintiq Pro', desc: 'Zero latency drawing. The industry standard.', color: '#DADBDC' },
  { id: 9, name: 'Google Nest Audio', desc: 'Room-filling sound that actually hears your commands.', color: '#0A0A0A' }
];

export default function PopularModels() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(Math.floor(products.length / 2));
  
  const contentRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      // Unroll animation
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.8,
        ease: 'power3.inOut'
      });
      
      // Fade in content
      gsap.fromTo(innerRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
      );
    } else {
      // Close animation
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      });
    }
  }, [isOpen]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className={styles.section}>
      <button 
        className={styles.accordionHeader} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.headerText}>The Gear Everyone's Buying</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
      </button>

      <div className={styles.accordionContent} ref={contentRef}>
        <div className={styles.contentInner} ref={innerRef}>
          
          <div className={styles.carouselContainer}>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>&larr;</button>
            
            <div className={styles.carouselTrack}>
              {products.map((p, index) => {
                const len = products.length;
                let diff = (index - currentIndex) % len;
                if (diff < -Math.floor(len / 2)) diff += len;
                if (diff > Math.floor(len / 2)) diff -= len;

                let positionClass = '';
                if (diff === 0) positionClass = styles.center;
                else if (diff === -1) positionClass = styles.left;
                else if (diff === 1) positionClass = styles.right;
                else if (diff < -1) positionClass = styles.hiddenLeft;
                else if (diff > 1) positionClass = styles.hiddenRight;

                return (
                  <div 
                    key={p.id} 
                    className={`${styles.productCard} ${positionClass}`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className={styles.imagePlaceholder} style={{ background: p.color }} />
                    <div className={styles.productInfo}>
                      <h4>{p.name}</h4>
                      <p>{p.desc}</p>
                      <a href="#" className={styles.fullSpecsBtn} onClick={(e) => e.stopPropagation()}>Check Full Specs</a>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>&rarr;</button>
          </div>

        </div>
      </div>
    </section>
  );
}
