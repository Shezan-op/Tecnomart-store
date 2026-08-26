"use client";

import React, { useEffect } from 'react';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    let lenisInstance = null;
    let tickerHandler = null;

    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
      const Lenis = lenisModule.default || lenisModule;
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.2,
      });

      lenisInstance.on('scroll', ScrollTrigger.update);

      tickerHandler = (time) => {
        lenisInstance.raf(time * 1000);
      };

      gsap.ticker.add(tickerHandler);
      gsap.ticker.lagSmoothing(500, 33);
    });

    return () => {
      if (tickerHandler) {
        import('gsap').then(({ default: gsap }) => {
          gsap.ticker.remove(tickerHandler);
        });
      }
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
