import { useRef } from 'react';
import styles from './MobileFront.module.css';
import { PhoneModel } from './SharedPhoneModel';

export default function MobileFront({ isDesktopMode = false }) {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.mobileFrontSection} id="mobile-front">
      <div className={styles.contentWrapper}>
        
        {/* Header Text */}
        <div className={styles.textContainer} style={{ opacity: 1 }}>
          <h2>Discover the Future</h2>
          <p>Premium smartphones engineered for your lifestyle.</p>
        </div>

        {/* 3-Column Layout */}
        <div className={styles.displayArea}>
          
          {/* Left Features */}
          <div className={`${styles.featureColumn} ${styles.featureColumnLeft}`}>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h4>Affordable Pricing</h4>
              <p>Unbeatable deals on top models.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 45,50 65,10 100,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="100" cy="10" r="3.5" fill="#FDE047" />
              </svg>
            </div>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
              </div>
              <h4>Refurbished Mobiles</h4>
              <p>Certified pre-owned perfection.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 45,50 65,90 100,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="100" cy="90" r="3.5" fill="#FDE047" />
              </svg>
            </div>
          </div>

          {/* Right Features */}
          <div className={`${styles.featureColumn} ${styles.featureColumnRight}`}>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
              </div>
              <h4>Latest Smartphones</h4>
              <p>Cutting-edge tech arrivals, daily.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 55,50 35,10 0,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="0" cy="10" r="3.5" fill="#FDE047" />
              </svg>
            </div>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4>12-Month Warranty</h4>
              <p>On all refurbished phones.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 55,50 35,90 0,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="0" cy="90" r="3.5" fill="#FDE047" />
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
        
        {/* Mobile Accordion (only visible on mobile) */}
        {!isDesktopMode && (
          <div className={styles.mobileAccordion}>
            <details className={styles.accordionItem}>
              <summary>Affordable Pricing</summary>
              <p>Unbeatable deals on top models.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>Refurbished Mobiles</summary>
              <p>Certified pre-owned perfection.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>Latest Smartphones</summary>
              <p>Cutting-edge tech arrivals, daily.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>12-Month Warranty</summary>
              <p>On all refurbished phones.</p>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}
