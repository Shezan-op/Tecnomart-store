"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroSequence.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext('2d');

    // Set native frame resolution (1920x1080) for instant zero-overhead GPU texture blitting
    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 810;
    const fps = 10; // 10 frames per second
    const videoDurationSec = frameCount / fps; // 81.0 seconds of animation
    const vhPerSecond = 14; // ~14vh of scroll per second of 10fps animation
    const totalTrackVh = Math.round(videoDurationSec * vhPerSecond) + 100; // ~1234vh

    // Apply calculated scroll distance to container
    container.style.setProperty('--hero-track-height', `${totalTrackVh}vh`);

    const currentFrame = (index) =>
      `/frames/${(index + 1).toString().padStart(3, '0')}.jpg`;

    // High-performance bounded frame cache (caps RAM to ~50MB instead of 6GB)
    const keyframes = new Map(); // Landmark frames every 8 steps
    const dynamicCache = new Map(); // Recent 40 frames around current scrub
    const heroFrames = { frame: 0 };
    let lastDrawnFrame = -1;
    let gsapCtx = null;
    let rafScheduled = false;

    const getImage = (targetIndex) => {
      // 1. Check exact dynamic cache
      const dynImg = dynamicCache.get(targetIndex);
      if (dynImg && dynImg.complete && dynImg.naturalWidth > 0) return dynImg;
      
      // 2. Check exact keyframes
      const keyImg = keyframes.get(targetIndex);
      if (keyImg && keyImg.complete && keyImg.naturalWidth > 0) return keyImg;

      // 3. Fallback to closest available frame
      let closest = null;
      let minDiff = Infinity;
      
      for (const [idx, img] of dynamicCache.entries()) {
        if (img.complete && img.naturalWidth > 0) {
          const diff = Math.abs(idx - targetIndex);
          if (diff < minDiff) {
            minDiff = diff;
            closest = img;
          }
        }
      }
      
      for (const [idx, img] of keyframes.entries()) {
        if (img.complete && img.naturalWidth > 0) {
          const diff = Math.abs(idx - targetIndex);
          if (diff < minDiff) {
            minDiff = diff;
            closest = img;
          }
        }
      }

      return closest || keyframes.get(0) || null;
    };

    // Demand-loader for current viewport range
    const requestFramesAround = (centerIndex) => {
      // Fetch further ahead for smoother fast-scrolling
      const start = Math.max(0, centerIndex - 5);
      const end = Math.min(frameCount - 1, centerIndex + 20);

      for (let i = start; i <= end; i++) {
        if (!dynamicCache.has(i) && !keyframes.has(i)) {
          const img = new Image();
          img.src = currentFrame(i);
          dynamicCache.set(i, img);

          // Bounded dynamic cache size (increased to 150 frames)
          if (dynamicCache.size > 150) {
            const firstKey = dynamicCache.keys().next().value;
            dynamicCache.delete(firstKey);
          }
        }
      }
    };

    // Background preloader for keyframes (every 8th frame)
    let preloaderTimer;
    const preloadKeyframes = () => {
      let i = 8;
      const loadNext = () => {
        if (i >= frameCount) return;
        if (!keyframes.has(i)) {
          const img = new Image();
          img.src = currentFrame(i);
          keyframes.set(i, img);
        }
        i += 8;
        preloaderTimer = setTimeout(loadNext, 50); // Small delay to prevent network congestion
      };
      preloaderTimer = setTimeout(loadNext, 1000);
    };
    preloadKeyframes();

    // GPU direct draw
    const drawCanvas = () => {
      rafScheduled = false;
      const targetIndex = Math.min(frameCount - 1, Math.max(0, Math.round(heroFrames.frame)));
      if (targetIndex === lastDrawnFrame && lastDrawnFrame !== -1) return;

      requestFramesAround(targetIndex);
      const img = getImage(targetIndex);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      context.drawImage(img, 0, 0, 1920, 1080);
      lastDrawnFrame = targetIndex;
    };

    const render = () => {
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(drawCanvas);
      }
    };

    // Initialize GSAP scroll timeline immediately
    gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
        }
      });

      tl.to(heroFrames, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: render,
        duration: 1
      }, 0);

    }, container);

    // Preload frame 0 immediately and render as soon as available
    const firstImg = new Image();
    firstImg.src = currentFrame(0);
    const handleFirstFrame = () => {
      keyframes.set(0, firstImg);
      drawCanvas();
      setIsLoading(false);
      ScrollTrigger.refresh();
    };

    if (firstImg.complete) {
      handleFirstFrame();
    } else {
      firstImg.onload = handleFirstFrame;
      firstImg.onerror = () => {
        setIsLoading(false);
      };
    }

    const handleResize = () => {
      drawCanvas();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (gsapCtx) gsapCtx.revert();
      if (preloaderTimer) clearTimeout(preloaderTimer);
    };
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef} id="hero">
      {/* CSS sticky handles the pin — no GSAP pin needed, no pin-spacer */}
      <div className={styles.heroSticky}>
        <div className={styles.canvasContainer}>
          {isLoading && (
            <div className={styles.loadingState}>
              <div className={styles.loadingPulse} />
            </div>
          )}
          <canvas ref={canvasRef} className={styles.canvas} />
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollChevron} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
