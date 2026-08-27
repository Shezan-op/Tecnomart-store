"use client";

import React from 'react';
import { ChevronRight, Wrench, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { RefurbishedArrowsIcon, CrossedToolsIcon } from './Icons';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function PromoBanners({ onOpenRepairModal, onExploreRefurbished }) {
  return (
    <section id="promos" className="py-8 sm:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: Expert Repairs matching Screenshot */}
          <BlurRevealBox duration={0.6} yOffset={20}>
            <div className="relative rounded-2xl bg-[#FAF8F5] p-5 sm:p-7 border border-amber-200/70 shadow-2xs overflow-hidden flex flex-col justify-between group">
              
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Left Text Column */}
                <div className="col-span-7 sm:col-span-8 space-y-2.5">
                  {/* Tools Icon */}
                  <div className="w-9 h-9 rounded-lg bg-amber-100/80 flex items-center justify-center">
                    <CrossedToolsIcon className="w-5 h-5 text-amber-600" />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-bold tracking-wider text-neutral-500 uppercase">
                      FAST. RELIABLE. AFFORDABLE.
                    </p>
                    <h3 className="text-base sm:text-xl font-black text-neutral-950 uppercase tracking-tight">
                      EXPERT REPAIRS
                    </h3>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-1 text-[11px] sm:text-xs font-semibold text-neutral-700">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Screen Replacement</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Battery Replacement</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Software Issues &amp; More</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenRepairModal}
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 px-4 py-2 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs transition-all active:scale-95 cursor-pointer"
                    >
                      <Wrench className="w-3 h-3" />
                      <span>BOOK A REPAIR</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Column (Cracked Screen in Hand) */}
                <div className="col-span-5 sm:col-span-4 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=500&q=80"
                    alt="Expert Phone Screen Repair"
                    className="w-full max-w-[140px] h-auto object-contain rounded-xl filter drop-shadow-md"
                  />
                </div>

              </div>

            </div>
          </BlurRevealBox>

          {/* Card 2: Smarter Prices (Refurbished) matching Screenshot */}
          <BlurRevealBox duration={0.6} delay={0.1} yOffset={20}>
            <div className="relative rounded-2xl bg-[#FAF8F5] p-5 sm:p-7 border border-amber-200/70 shadow-2xs overflow-hidden flex flex-col justify-between group">
              
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Left Text Column */}
                <div className="col-span-7 sm:col-span-8 space-y-2.5">
                  {/* Recycle Icon */}
                  <div className="w-9 h-9 rounded-lg bg-amber-100/80 flex items-center justify-center">
                    <RefurbishedArrowsIcon className="w-5 h-5 text-amber-600" />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-bold tracking-wider text-neutral-500 uppercase">
                      SMART TECH.
                    </p>
                    <h3 className="text-base sm:text-xl font-black text-amber-500 uppercase tracking-tight">
                      SMARTER PRICES.
                    </h3>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-1 text-[11px] sm:text-xs font-semibold text-neutral-700">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Quality Checked</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Best Condition</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-500 stroke-[3]" />
                      <span>Budget Friendly</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onExploreRefurbished && onExploreRefurbished()}
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 px-4 py-2 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs transition-all active:scale-95 cursor-pointer"
                    >
                      <span>EXPLORE REFURBISHED</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Column (MacBook) */}
                <div className="col-span-5 sm:col-span-4 flex items-center justify-center">
                  <img
                    src="/bento-grid-images/mackbook.png"
                    alt="Refurbished Apple MacBook"
                    className="w-full max-w-[140px] h-auto object-contain filter drop-shadow-md"
                  />
                </div>

              </div>

            </div>
          </BlurRevealBox>

        </div>
      </div>
    </section>
  );
}
