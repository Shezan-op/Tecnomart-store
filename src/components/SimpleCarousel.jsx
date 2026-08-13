"use client";
import { useState } from 'react';
import styles from './SimpleCarousel.module.css';

export default function SimpleCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(cards.length / 2));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className={styles.carouselSection}>
      <button className={`${styles.navBtn} ${styles.prev}`} onClick={handlePrev} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className={styles.carouselContainer}>
        {cards.map((card, index) => {
          // Calculate distance wrapping around
          const len = cards.length;
          let diff = (index - currentIndex) % len;
          if (diff < -Math.floor(len / 2)) diff += len;
          if (diff > Math.floor(len / 2)) diff -= len;

          let positionClass = '';
          if (diff === 0) {
            positionClass = styles.center;
          } else if (diff === -1) {
            positionClass = styles.left;
          } else if (diff === 1) {
            positionClass = styles.right;
          } else if (diff < -1) {
            positionClass = styles.hiddenLeft;
          } else if (diff > 1) {
            positionClass = styles.hiddenRight;
          }

          return (
            <div
              key={card.id || index}
              className={`${styles.card} ${positionClass}`}
              onClick={() => handleCardClick(index)}
            >
              <div className={styles.videoShell}>
                {/* YouTube embed — 9:16 aspect ratio */}
                <iframe
                  className={styles.iframe}
                  src={`https://www.youtube.com/embed/${card.videoId}?rel=0&playsinline=1&modestbranding=1&mute=${diff === 0 ? 0 : 1}&autoplay=0&loop=1&playlist=${card.videoId}`}
                  title={`Testimonial from ${card.author}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className={styles.videoOverlay} />
              </div>
              <div className={styles.info}>
                <p className={styles.quote}>"{card.quote}"</p>
                <div className={styles.author}>
                  <strong>{card.author}</strong>
                  <span>{card.role}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className={`${styles.navBtn} ${styles.next}`} onClick={handleNext} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
