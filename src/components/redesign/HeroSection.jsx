"use client";

import React from 'react';
import { Wrench, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function HeroSection({ onOpenBudgetFinder, onOpenRepairModal }) {
  const scrollToBudget = () => {
    const el = document.getElementById('budget-finder');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -40, lerp: 0.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-6 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-16 border-b border-neutral-100">
      {/* Subtle Background Radial Highlights */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-neutral-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile & Desktop Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
          
          {/* Left / Top Column: Headlines & Subtitle */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3 sm:space-y-5 z-10 text-left">
            
            {/* Top Pill: "YOUR RIGHT CHOICE" */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-300/80 shadow-2xs">
                YOUR RIGHT CHOICE
              </span>
            </div>

            {/* Main 3-Line Headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <div>
                <BlurRevealText
                  text="YOUR TECH."
                  className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[1.06] uppercase"
                  delay={0.05}
                />
              </div>
              <div>
                <BlurRevealText
                  text="YOUR BUDGET."
                  className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-[1.06] uppercase"
                  delay={0.15}
                />
              </div>
              <div>
                <BlurRevealText
                  text="YOUR RIGHT CHOICE."
                  className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-amber-500 leading-[1.06] uppercase"
                  delay={0.25}
                />
              </div>
            </div>

            {/* Subtitle */}
            <BlurRevealBox delay={0.35} yOffset={15}>
              <p className="text-xs sm:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                Mobiles, Laptops, Gaming PCs &amp; Expert Repairs – <br className="hidden sm:inline" />
                All under one roof.
              </p>
            </BlurRevealBox>

            {/* Desktop CTAs (Hidden on mobile so they render under pedestal on mobile like the screenshot) */}
            <div className="hidden lg:flex items-center gap-3 pt-2">
              <button
                onClick={scrollToBudget}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 px-6 py-3 rounded-lg text-xs font-black tracking-wide uppercase shadow-sm transition-all active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Tell Us Your Budget</span>
              </button>

              <button
                onClick={onOpenRepairModal}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-900 border border-neutral-800 px-6 py-3 rounded-lg text-xs font-bold tracking-wide uppercase transition-all active:scale-98 cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-neutral-800" />
                <span>Book a Repair</span>
              </button>
            </div>

          </div>

          {/* Right / Middle Column: 3D Stage Pedestal with Phone, Laptop & RGB PC */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-2 sm:py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[480px] sm:max-w-[560px] aspect-[4/3] flex items-center justify-center"
            >
              {/* Pedestal Base Platform */}
              <div className="absolute bottom-2 sm:bottom-4 w-[92%] h-16 sm:h-24 bg-gradient-to-b from-white via-neutral-100 to-neutral-300 rounded-[100%] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-t border-white flex items-center justify-center">
                <div className="w-[96%] h-[82%] rounded-[100%] bg-gradient-to-b from-neutral-50 to-neutral-200 shadow-inner flex items-center justify-center" />
              </div>

              {/* Product 1: Smartphone (Left) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[3%] bottom-6 sm:bottom-10 w-[24%] sm:w-[25%] z-20"
              >
                <img
                  src={ASSETS.heroPhone}
                  alt="Flagship Smartphone"
                  className="w-full h-auto object-contain filter drop-shadow-lg"
                />
              </motion.div>

              {/* Product 2: Laptop (Center-Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute left-[24%] bottom-8 sm:bottom-12 w-[48%] sm:w-[50%] z-15"
              >
                <img
                  src={ASSETS.heroLaptop}
                  alt="Ultra Slim Laptop"
                  className="w-full h-auto object-contain filter drop-shadow-xl"
                />
              </motion.div>

              {/* Product 3: RGB Gaming PC Tower (Right) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute right-[2%] bottom-6 sm:bottom-10 w-[42%] sm:w-[44%] z-25"
              >
                <img
                  src={ASSETS.heroPc}
                  alt="Gold RGB Gaming PC"
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                />
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Mobile Dual Action Buttons (Rendered below pedestal on mobile to match screenshot) */}
        <div className="lg:hidden grid grid-cols-2 gap-2.5 pt-3">
          <button
            onClick={scrollToBudget}
            className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-amber-500 active:bg-amber-600 text-neutral-950 px-3 py-2.5 rounded-lg text-[11px] font-black tracking-wide uppercase shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">Tell Us Your Budget</span>
          </button>

          <button
            onClick={onOpenRepairModal}
            className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-white active:bg-neutral-100 text-neutral-900 border border-neutral-800 px-3 py-2.5 rounded-lg text-[11px] font-bold tracking-wide uppercase active:scale-95 transition-all cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5 text-neutral-800" />
            <span className="truncate">Book a Repair</span>
          </button>
        </div>

      </div>
    </section>
  );
}
