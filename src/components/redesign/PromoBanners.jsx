"use client";

import React from 'react';
import { ChevronRight, Wrench, CheckCircle2, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { RefurbishedArrowsIcon } from './Icons';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function PromoBanners({ onOpenRepairModal, onExploreRefurbished }) {
  return (
    <section id="refurbished" className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Refurbished Tech */}
          <BlurRevealBox duration={0.7} yOffset={25}>
            <div className="relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-neutral-50 p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-amber-400/80 transition-all duration-300">
              
              {/* Ambient gold glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Top Refurbished Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <RefurbishedArrowsIcon className="w-7 h-7 text-amber-600 group-hover:rotate-180 transition-transform duration-700" />
                </div>

                {/* Headings with Blur Reveal */}
                <div className="space-y-1 mb-4">
                  <p className="text-xs sm:text-sm font-bold tracking-wider text-neutral-500 uppercase">
                    SMART TECH.
                  </p>
                  <div>
                    <BlurRevealText
                      text="SMARTER PRICES."
                      className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight"
                      delay={0.15}
                    />
                  </div>
                </div>

                {/* Checkmark Bullets */}
                <div className="space-y-2 mb-6">
                  {[
                    'Quality Checked (40+ Point Diagnostic)',
                    'Best Condition Guaranteed',
                    'Budget Friendly & Certified Warranty',
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: CTA Button & Laptop Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end mt-4">
                <div className="sm:col-span-6 z-10">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onExploreRefurbished && onExploreRefurbished()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  >
                    <span>EXPLORE REFURBISHED</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </motion.button>
                </div>

                <div className="sm:col-span-6 relative flex justify-end">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full max-w-[240px] filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={ASSETS.refurbishedLaptop}
                      alt="Certified Refurbished Laptop"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </BlurRevealBox>

          {/* Card 2: Expert Repairs */}
          <BlurRevealBox duration={0.7} delay={0.15} yOffset={25}>
            <div id="repairs" className="relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-neutral-50 p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-amber-400/80 transition-all duration-300">
              
              {/* Ambient gold glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Top Subtitle */}
                <p className="text-xs sm:text-sm font-bold tracking-wider text-amber-600 uppercase mb-1">
                  FAST. RELIABLE. AFFORDABLE.
                </p>

                {/* Main Heading with Blur Reveal */}
                <div className="mb-4">
                  <BlurRevealText
                    text="EXPERT REPAIRS"
                    className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight"
                    delay={0.15}
                  />
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {[
                    'Screen Replacement & Glass Repair',
                    'Battery Replacement (100% Health)',
                    'Software Issues, Motherboard & More',
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700">
                      <CircleDot className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: CTA Button & Repair Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end mt-4">
                <div className="sm:col-span-6 z-10">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenRepairModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>BOOK A REPAIR</span>
                  </motion.button>
                </div>

                <div className="sm:col-span-6 relative flex justify-end">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full max-w-[240px] filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={ASSETS.repairTechnician}
                      alt="Precision Phone Screen Repair by Certified Engineer"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </BlurRevealBox>

        </div>
      </div>
    </section>
  );
}
