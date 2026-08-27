"use client";
import React from 'react';
import styles from './InfoBelt.module.css';

export default function InfoBelt({ direction = 'left', text = "TECNO MART •", duration, speed = 3.2 }) {
  // Ensure enough repeats so the ticker overflows even ultrawide 4K monitors
  const minTargetChars = 260;
  const repeatCount = Math.max(3, Math.ceil(minTargetChars / Math.max(1, text.length)));
  const repeatText = Array(repeatCount).fill(text).join(" ");

  // Calculate duration so all banners travel at the exact same physical reading speed as the hero section
  const computedDuration = duration || Math.max(30, Math.round(repeatText.length / speed));

  return (
    <div className={styles.beltContainer}>
      <div 
        className={`${styles.marquee} ${direction === 'right' ? styles.marqueeRight : ''}`}
        style={{ animationDuration: `${computedDuration}s` }}
      >
        <span className={styles.marqueeText}>{repeatText}</span>
        <span className={styles.marqueeText}>{repeatText}</span>
      </div>
    </div>
  );
}
