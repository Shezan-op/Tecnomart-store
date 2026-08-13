import Link from 'next/link';
import BackgroundArc from './BackgroundArc';
import styles from './CustomSetupPromo.module.css';

export default function CustomSetupPromo() {
  return (
    <section className={styles.promoSection}>
      <BackgroundArc topOffset="50%" />
      
      <div className={styles.contentContainer}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Build Your Custom Setup</h2>
          <p className={styles.subtitle}>
            From gaming beasts to ultimate workstations, tailor every component 
            to match your exact performance needs.
          </p>
        </div>
        
        <Link href="/build-your-setup" className={styles.ctaButton}>
          <span className={styles.btnText}>Build My Dream Setup</span>
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
