"use client";

import React from 'react';
import { Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function HeroSection({ onOpenBudgetFinder, onOpenRepairModal }) {
  const scrollToBudget = () => {
    const el = document.getElementById('budget-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/60 to-white pt-6 pb-10 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-neutral-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-neutral-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-7 z-10">
            
            {/* Main Headline with Text Blur Reveal */}
            <div className="space-y-1 sm:space-y-1.5">
              <div>
                <BlurRevealText
                  text="YOUR TECH."
                  className="text-3xl sm:text-5xl md:text-6xl xl:text-[64px] font-black tracking-tight text-neutral-950 leading-[1.08] uppercase"
                  delay={0.1}
                />
              </div>
              <div>
                <BlurRevealText
                  text="YOUR BUDGET."
                  className="text-3xl sm:text-5xl md:text-6xl xl:text-[64px] font-black tracking-tight text-neutral-950 leading-[1.08] uppercase"
                  delay={0.25}
                />
              </div>
              <div>
                <BlurRevealText
                  text="YOUR RIGHT CHOICE."
                  className="text-3xl sm:text-5xl md:text-6xl xl:text-[64px] font-black tracking-tight text-amber-500 leading-[1.08] uppercase"
                  delay={0.4}
                />
              </div>
            </div>

            {/* Subtitle with Smooth Entrance */}
            <BlurRevealBox delay={0.55} yOffset={20}>
              <p className="text-sm sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-lg">
                Mobiles, Laptops, Gaming PCs &amp; Expert Repairs – <br className="hidden sm:inline" />
                All under one roof in Jubilee Hills.
              </p>
            </BlurRevealBox>

            {/* Dual CTAs with Spring Entrance (Mobile Optimized Full-Width Stack) */}
            <BlurRevealBox delay={0.7} yOffset={20}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                {/* Tell Us Your Budget Button */}
                <button
                  onClick={scrollToBudget}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 px-6 py-3.5 rounded-xl sm:rounded-lg text-xs sm:text-sm font-black tracking-wide uppercase shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <span>Tell Us Your Budget</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Book a Repair Button */}
                <button
                  onClick={onOpenRepairModal}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-900 border border-neutral-800 hover:border-neutral-950 px-6 py-3.5 rounded-xl sm:rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-all active:scale-98 cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-neutral-800" />
                  <span>Book a Repair</span>
                </button>
              </div>
            </BlurRevealBox>
          </div>

          {/* Right Column: 3D Pedestal Showcase with Products */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center"
            >
              
              {/* Ambient radial lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-amber-300/10 to-transparent rounded-full filter blur-2xl" />

              {/* 3D Circular Pedestal Platform */}
              <div className="absolute bottom-4 sm:bottom-6 w-[88%] h-24 sm:h-28 bg-gradient-to-b from-white via-neutral-100 to-neutral-200 rounded-[100%] shadow-[0_24px_50px_-10px_rgba(0,0,0,0.15)] border-t border-white flex items-center justify-center">
                {/* Pedestal Rim Layer */}
                <div className="w-[96%] h-[80%] rounded-[100%] bg-gradient-to-b from-neutral-50 to-neutral-200/90 shadow-inner flex items-center justify-center border-t border-white/80">
                  {/* Subtle Wing Emblem on Pedestal Front */}
                  <div className="absolute bottom-2 text-amber-500/70">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="currentColor">
                      <path d="M20 2L24 10H30L25 15L27 22L20 18L13 22L15 15L10 10H16L20 2Z" opacity="0.85" />
                      <path d="M5 8C10 9 14 12 17 16L15 18C12 15 9 12 5 11V8Z" opacity="0.7" />
                      <path d="M35 8C30 9 26 12 23 16L25 18C28 15 31 12 35 11V8Z" opacity="0.7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product 1: RGB Gaming PC Tower (Left / Center) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[2%] bottom-16 sm:bottom-20 w-[46%] sm:w-[48%] z-10"
              >
                <div className="relative filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300">
                  <img
                    src={ASSETS.heroPc}
                    alt="Custom RGB Gaming PC Cabinet"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent pointer-events-none rounded-xl mix-blend-screen" />
                </div>
              </motion.div>

              {/* Product 2: Sleek Open Laptop (Center / Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-[4%] top-[10%] sm:top-[8%] w-[52%] sm:w-[54%] z-20"
              >
                <div className="relative filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300">
                  <img
                    src={ASSETS.heroLaptop}
                    alt="Premium Sleek Laptop"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Product 3: White iPhone 15 / Smartphone (Front Right Base) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-[12%] bottom-6 sm:bottom-8 w-[24%] sm:w-[26%] z-30"
              >
                <div className="relative filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300">
                  <img
                    src={ASSETS.heroPhone}
                    alt="iPhone 15 Flagship Smartphone"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
