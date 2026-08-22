import styles from './MobileBack.module.css';
import { PhoneModel } from './SharedPhoneModel';

export default function MobileBack({ isDesktopMode = false }) {
  if (isDesktopMode) {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer} style={{ opacity: 1 }}>
          <h2>Expert Repairs</h2>
          <p>Certified technicians, genuine parts, guaranteed satisfaction.</p>
        </div>

        <div className={styles.displayArea}>
          {/* Left Features (Back features) */}
          <div className={`${styles.featureColumn} ${styles.featureColumnLeft}`}>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4>Same Day Service</h4>
              <p>Repairs completed in hours, not days.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 45,50 65,10 100,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="100" cy="10" r="3.5" fill="#FDE047" />
              </svg>
            </div>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h4>Expert Mechanics</h4>
              <p>Over 10+ years of hardware mastery.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 0,50 C 45,50 65,90 100,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="100" cy="90" r="3.5" fill="#FDE047" />
              </svg>
            </div>
          </div>
          
          {/* Right Features (Back features) */}
          <div className={`${styles.featureColumn} ${styles.featureColumnRight}`}>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h4>Free Diagnostics</h4>
              <p>No fee to identify hardware issues.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 55,50 35,10 0,10" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="0" cy="10" r="3.5" fill="#FDE047" />
              </svg>
            </div>
            <div className={styles.featureItem} style={{ opacity: 1, transform: 'none' }}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              </div>
              <h4>Genuine Parts</h4>
              <p>100% authentic OEM replacements.</p>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.pointerSvg}>
                 <path d="M 100,50 C 55,50 35,90 0,90" vectorEffect="non-scaling-stroke" fill="none" stroke="rgba(253,224,71,0.85)" strokeWidth="1.5"/>
                 <circle cx="0" cy="90" r="3.5" fill="#FDE047" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile View
  return (
    <section id="mobile-back" className={styles.mobileBackSection}>
      <div className={styles.mobileOnly}>
        <div className={styles.mobileSectionBlock}>
          <div className={styles.mobileSectionHeader}>
            <h2 className={styles.textContainer} style={{ position: 'relative', opacity: 1, top: 0, transform: 'none' }}>
              Expert Repairs
            </h2>
            <p className={styles.mobileSectionSub}>Certified technicians, genuine parts, guaranteed satisfaction.</p>
          </div>

          <div className={styles.mobilePhoneWrapper}>
            <div>
              <PhoneModel glareFrontRef={null} glareBackRef={null} rightEdgeRef={null} />
            </div>
          </div>

          <div className={styles.mobileAccordion}>
            <details className={styles.accordionItem}>
              <summary>Same Day Service</summary>
              <p>Repairs completed in hours, not days.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>Expert Mechanics</summary>
              <p>Over 10+ years of hardware mastery.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>Free Diagnostics</summary>
              <p>No fee to identify hardware issues.</p>
            </details>
            <details className={styles.accordionItem}>
              <summary>Genuine Parts</summary>
              <p>100% authentic OEM replacements.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
