"use client";
import styles from './InfoBelt.module.css';

export default function InfoBelt({ direction = 'left', text = "TECNO MART •" }) {
  // Repeat text a few times to ensure infinite scroll fills the screen
  const repeatText = Array(10).fill(text).join(" ");
  
  return (
    <div className={styles.beltContainer}>
      <div className={`${styles.marquee} ${direction === 'right' ? styles.marqueeRight : ''}`}>
        <span className={styles.marqueeText}>{repeatText}</span>
        <span className={styles.marqueeText}>{repeatText}</span>
      </div>
    </div>
  );
}
