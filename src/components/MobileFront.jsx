"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MobileFront.module.css';
import { PhoneModel } from './SharedPhoneModel';

gsap.registerPlugin(ScrollTrigger);

export default function MobileFront({ isDesktopMode = false }) {
  const sectionRef = useRef(null);

  // If in desktop mode, the Wrapper handles the sticky track and phone rendering.
  // We just return the HTML structure for the text and cards.
  return (
    <section ref={sectionRef} className={styles.mobileFrontSection} id="mobile-front">
      <div className={styles.contentWrapper}>
        
        {/* Header Text */}
        <div className={styles.textContainer} style={{ opacity: 1 }}>
          <h2>Discover the Future</h2>
          <p>Premium smartphones engineered for your lifestyle.</p>
          <a href="#" className="premiumStoreBtn desktopOnly" style={{ display: 'inline-block', marginTop: '16px' }}>Go to store</a>
        </div>

        {/* 3-Column Layout */}
        <div className={styles.displayArea}>
          
          {/* Left Cards */}
          <div className={styles.featureColumn}>
            <div className={styles.glassCard} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className={styles.cardContent}>
                <h4>Affordable Pricing</h4>
                <p>Unbeatable deals on top models.</p>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 L 40,50 L 70,10 L 100,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="100" cy="10" r="2.5" fill="#ffffff" />
              </svg>
            </div>
            <div className={styles.glassCard} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              </div>
              <div className={styles.cardContent}>
                <h4>Refurbished Mobiles</h4>
                <p>Certified pre-owned perfection.</p>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 L 40,50 L 70,90 L 100,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="100" cy="90" r="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>



          {/* Right Cards */}
          <div className={styles.featureColumn}>
            <div className={styles.glassCard} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
              </div>
              <div className={styles.cardContent}>
                <h4>Latest Smartphones</h4>
                <p>Cutting-edge tech arrivals, daily.</p>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 L 60,50 L 30,20 L 0,20" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="0" cy="20" r="2.5" fill="#ffffff" />
              </svg>
            </div>
            <div className={styles.glassCard} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className={styles.cardContent}>
                <h4>Up To 2 Years Warranty</h4>
                <p>Peace of mind, guaranteed.</p>
              </div>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 L 60,50 L 30,80 L 0,80" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="1"/>
                 <circle cx="0" cy="80" r="2.5" fill="#ffffff" />
              </svg>
            </div>
          </div>

        </div>
        
        {/* Center Phone (Mobile only, outside hidden displayArea) */}
        {!isDesktopMode && (
          <div className={styles.phoneContainer}>
            <PhoneModel 
              glareFrontRef={null} 
              glareBackRef={null} 
              rightEdgeRef={null} 
            />
          </div>
        )}
        
        {/* Mobile Grid (only visible on mobile) */}
        {!isDesktopMode && (
          <div className={styles.mobileGrid}>
            <a href="http://localhost:3000" className="premiumStoreBtn" style={{ gridColumn: '1 / -1', margin: '0 auto 12px' }}>Go to store</a>
            <div className={styles.mobileGridItem}>
               <div className={styles.cardIcon}>
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
               </div>
               <h4>Affordable Pricing</h4>
            </div>
            <div className={styles.mobileGridItem}>
               <div className={styles.cardIcon}>
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
               </div>
               <h4>Refurbished Mobiles</h4>
            </div>
            <div className={styles.mobileGridItem}>
               <div className={styles.cardIcon}>
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
               </div>
               <h4>Latest Smartphones</h4>
            </div>
            <div className={styles.mobileGridItem}>
               <div className={styles.cardIcon}>
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
               </div>
               <h4>Up To 2 Years Warranty</h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
