"use client";

import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSequence from '../components/HeroSequence';
import InfoBelt from '../components/InfoBelt';
import MobileShowcaseWrapper from '../components/MobileShowcaseWrapper';
import ScrollStackSection from '../components/ScrollStackSection';
import ProDisplay from '../components/ProDisplay';
import PopularModels from '../components/PopularModels';
import ProKeyboard from '../components/ProKeyboard';
import BrandLoop from '../components/BrandLoop';
import Testimonials from '../components/Testimonials';
import CustomSetupPromo from '../components/CustomSetupPromo';
import WhereToFindUs from '../components/WhereToFindUs';
import OurJourney from '../components/OurJourney';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function Page() {
  useEffect(() => {
    let lenisInstance = null;
    let updateTicker = null;
    let timeout = null;

    Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([lenisModule, gsapModule, scrollTriggerModule]) => {
        const Lenis = lenisModule.default || lenisModule;
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;

        gsap.registerPlugin(ScrollTrigger);

        lenisInstance = new Lenis({
          duration: 0.9,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.05,
          touchMultiplier: 1.2,
          syncTouch: false,
        });

        lenisInstance.on('scroll', ScrollTrigger.update);

        updateTicker = (time) => {
          lenisInstance.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(500, 33);

        timeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);
      }
    );

    return () => {
      if (updateTicker) {
        import('gsap').then(({ default: gsap }) => {
          gsap.ticker.remove(updateTicker);
        });
      }
      if (lenisInstance) lenisInstance.destroy();
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <ScrollProgress />
      <Navigation />

      <HeroSequence />

      {/* Info Belt 1 */}
      <InfoBelt direction="left" text="PREMIUM DEVICES •" />
      
      {/* Mobile Showcases */}
      <MobileShowcaseWrapper />
      
      {/* Info Belt 2 */}
      <InfoBelt direction="right" text="ENGINEERED FOR PRECISION •" />
      
      {/* Scroll Stack Offerings Section */}
      <ScrollStackSection />

      {/* Laptop Showcase */}
      <ProDisplay />

      {/* Popular Models Accordion */}
      <PopularModels />

      {/* Accessories (Keyboard) */}
      <ProKeyboard />

      {/* Brand Logo Loop */}
      <BrandLoop />

      {/* Info Belt 3 (contact belt) */}
      <InfoBelt
        direction="left"
        text="Want better personalised deals? Call us: +91 90106 67726 • Visit us at 7 Tombs Road, Opposite Toyota Showroom, Towlichowki, Hyderabad • Mon-Sun: 10AM - 9PM •"
      />

      {/* Section 9 — Google Reviews & Instagram Widgets */}
      <Testimonials />

      {/* NEW Section — Build Custom Setup */}
      <CustomSetupPromo />

      {/* Section 10 — Where to Find Us */}
      <WhereToFindUs />

      {/* Section 11 — Our Journey */}
      <OurJourney />

      {/* Section 12 — FAQ */}
      <FAQ />

      {/* Section 13 — Footer */}
      <Footer />
    </main>
  );
}
