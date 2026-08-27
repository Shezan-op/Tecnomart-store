"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import HeroSection from '@/components/redesign/HeroSection';
import TrustStrip from '@/components/redesign/TrustStrip';
import CategoryGrid from '@/components/redesign/CategoryGrid';
import BudgetFinder from '@/components/redesign/BudgetFinder';
import WhyChooseUs from '@/components/redesign/WhyChooseUs';
import GamingBanner from '@/components/redesign/GamingBanner';
import PopularPicks from '@/components/redesign/PopularPicks';
import PromoBanners from '@/components/redesign/PromoBanners';
import ReviewsAndLocation from '@/components/redesign/ReviewsAndLocation';
import LiveSocialProofWidgets from '@/components/redesign/LiveSocialProofWidgets';
import FAQSection from '@/components/redesign/FAQSection';
import TestimonialsSection from '@/components/redesign/TestimonialsSection';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';

export default function Page() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    setCartCount((prev) => prev + 1);
  };

  const handleSelectCategory = (catName) => {
    const el = document.getElementById('budget-finder');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -40, lerp: 0.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreGaming = () => {
    const el = document.getElementById('popular');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -40, lerp: 0.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* 1. Header Navigation */}
        <Header
          onOpenRepairModal={() => setIsRepairOpen(true)}
          cartCount={cartCount}
        />

        <main className="flex-1">
          {/* 2. Hero Section */}
          <HeroSection
            onOpenRepairModal={() => setIsRepairOpen(true)}
          />

          {/* 3. Trust Strip (4-Column Badges) */}
          <TrustStrip />

          {/* 4. Category Grid ("WHAT DO YOU NEED?") */}
          <CategoryGrid
            onSelectCategory={handleSelectCategory}
          />

          {/* 5. Budget Banner ("BUDGET BATAO. BEST OPTION PAO.") */}
          <BudgetFinder />

          {/* 6. Why Choose Us (6 Features) */}
          <WhyChooseUs />

          {/* 7. Gaming PC Banner ("BUILT FOR VICTORY.") */}
          <GamingBanner
            onExploreGaming={handleExploreGaming}
          />

          {/* 8. Popular Picks Carousel */}
          <PopularPicks
            onAddToCart={handleAddToCart}
            addedItems={addedItems}
          />

          {/* 9. Highlight Cards (Expert Repairs & Smarter Prices) */}
          <PromoBanners
            onOpenRepairModal={() => setIsRepairOpen(true)}
            onExploreRefurbished={() => {
              const el = document.getElementById('budget-finder');
              if (el) {
                if (window.__lenis) {
                  window.__lenis.scrollTo(el, { offset: -40, lerp: 0.1 });
                } else {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          />

          {/* 10. Visit Our Store & Google Reviews */}
          <ReviewsAndLocation />

          {/* 11. Live Google Reviews & Instagram Jotform Widgets */}
          <LiveSocialProofWidgets />

          {/* 12. Frequently Asked Questions (FAQ) */}
          <FAQSection />

          {/* 13. Customer Testimonials Section */}
          <TestimonialsSection />
        </main>

        {/* 14. Footer with Stay Updated Card & Socials */}
        <Footer />

        {/* Mobile Bottom Thumb Navigation */}
        <MobileBottomBar
          onOpenRepairModal={() => setIsRepairOpen(true)}
          cartCount={cartCount}
        />

        {/* Interactive Repair Booking Modal */}
        <RepairModal
          isOpen={isRepairOpen}
          onClose={() => setIsRepairOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
