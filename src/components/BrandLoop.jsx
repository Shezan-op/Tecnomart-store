"use client";
import styles from './BrandLoop.module.css';

export default function BrandLoop() {
  const logos = [
    'Apple', 'Samsung', 'Dell', 'Asus', 'HP', 'Lenovo', 'Sony', 'Microsoft', 'Google', 'OnePlus'
  ];

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Our collections includes</h3>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeSet}>
            {logos.map((logo, index) => (
              <span key={`orig-${index}`} className={styles.logoItem}>{logo}</span>
            ))}
          </div>
          <div className={styles.marqueeSet}>
            {logos.map((logo, index) => (
              <span key={`dup-${index}`} className={styles.logoItem}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
