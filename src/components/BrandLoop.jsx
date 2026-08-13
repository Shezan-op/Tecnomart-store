"use client";
import styles from './BrandLoop.module.css';

export default function BrandLoop() {
  const logos = [
    { name: 'Apple', src: '/svg/apple.svg' },
    { name: 'Samsung', src: '/svg/samsung.svg' },
    { name: 'Dell', src: '/svg/dell-mono.svg' },
    { name: 'Asus', src: '/svg/asus.svg' },
    { name: 'HP', src: '/svg/hp.svg' },
    { name: 'Lenovo', src: '/svg/lenovo-mono.svg' },
    { name: 'MSI', src: '/svg/msi.svg' },
    { name: 'Acer', src: '/svg/acer.svg' }
  ];

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Our collections includes</h3>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeSet}>
            {logos.map((logo, index) => (
              <span key={`orig-${index}`} className={styles.logoItem}>
                <img src={logo.src} alt={logo.name} className={styles.brandIcon} />
              </span>
            ))}
          </div>
          <div className={styles.marqueeSet}>
            {logos.map((logo, index) => (
              <span key={`dup-${index}`} className={styles.logoItem}>
                <img src={logo.src} alt={logo.name} className={styles.brandIcon} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
