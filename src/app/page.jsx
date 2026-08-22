"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import ParticlesBackground from '../components/ParticlesBackground';
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

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2,
      syncTouch: false,
    });

    // Synchronize GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    // Use standard lag smoothing so frame drops don't cause violent visual skips
    gsap.ticker.lagSmoothing(500, 33);

    // Refresh ScrollTrigger once DOM is stabilized
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      gsap.ticker.remove(updateTicker);
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
      
      {/* Scroll Stack Offerings Section (Laptops & PCs, Mobiles, Accessories, Services) */}
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
