"use client";

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import HeroSequence from '../components/HeroSequence';
import MobileShowcaseWrapper from '../components/MobileShowcaseWrapper';
import DreamSetupSequence from '../components/DreamSetupSequence';
import ProDisplay from '../components/ProDisplay';
import PopularModels from '../components/PopularModels';
import ProKeyboard from '../components/ProKeyboard';
import BrandLoop from '../components/BrandLoop';

import Navigation from '../components/Navigation';
import InfoBelt from '../components/InfoBelt';
import Testimonials from '../components/Testimonials';
import CustomSetupPromo from '../components/CustomSetupPromo';
import WhereToFindUs from '../components/WhereToFindUs';
import OurJourney from '../components/OurJourney';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // After all components have mounted, refresh ScrollTrigger
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <ParticlesBackground />
      <Navigation />

      <HeroSequence />

      {/* Info Belt 1 */}
      <InfoBelt direction="left" text="PREMIUM DEVICES •" />
      
      {/* Mobile Showcases (Unified Wrapper for Desktop 180 Flip, Static on Mobile) */}
      <MobileShowcaseWrapper />
      
      {/* Info Belt 2 */}
      <InfoBelt direction="right" text="ENGINEERED FOR PRECISION •" />
      
      {/* Dream Setup Sequence */}
      <DreamSetupSequence />

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

      {/* Section 9 — Testimonials */}
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
