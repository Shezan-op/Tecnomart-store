"use client";

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import HeroSequence from '../components/HeroSequence';
import Navigation from '../components/Navigation';
import InfoBelt from '../components/InfoBelt';

// Below-the-fold dynamic imports for instant initial page load
const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });
const MobileShowcaseWrapper = dynamic(() => import('../components/MobileShowcaseWrapper'), { ssr: false });
const ScrollStackSection = dynamic(() => import('../components/ScrollStackSection'), { ssr: false });
const ProDisplay = dynamic(() => import('../components/ProDisplay'), { ssr: false });
const PopularModels = dynamic(() => import('../components/PopularModels'), { ssr: false });
const ProKeyboard = dynamic(() => import('../components/ProKeyboard'), { ssr: false });
const BrandLoop = dynamic(() => import('../components/BrandLoop'), { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const CustomSetupPromo = dynamic(() => import('../components/CustomSetupPromo'), { ssr: false });
const WhereToFindUs = dynamic(() => import('../components/WhereToFindUs'), { ssr: false });
const OurJourney = dynamic(() => import('../components/OurJourney'), { ssr: false });
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

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
