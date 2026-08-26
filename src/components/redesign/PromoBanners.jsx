"use client";

import React from 'react';
import { ChevronRight, Wrench, CheckCircle2, CircleDot } from 'lucide-react';
import { ASSETS } from '@/data/redesignAssets';
import { RefurbishedArrowsIcon } from './Icons';

export default function PromoBanners({ onOpenRepairModal, onExploreRefurbished }) {
  return (
    <section id="refurbished" className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Refurbished Tech */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-neutral-50 p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md hover:border-amber-400/80 transition-all duration-300">
            
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Top Refurbished Icon */}
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <RefurbishedArrowsIcon className="w-7 h-7 text-amber-600" />
              </div>

              {/* Headings */}
              <div className="space-y-1 mb-4">
                <p className="text-xs sm:text-sm font-bold tracking-wider text-neutral-500 uppercase">
                  SMART TECH.
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight">
                  SMARTER PRICES.
                </h3>
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
                <button
                  onClick={() => onExploreRefurbished && onExploreRefurbished()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>EXPLORE REFURBISHED</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

              <div className="sm:col-span-6 relative flex justify-end">
                <div className="w-full max-w-[240px] transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md">
                  <img
                    src={ASSETS.refurbishedLaptop}
                    alt="Certified Refurbished Laptop"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: Expert Repairs */}
          <div id="repairs" className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-neutral-50 p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md hover:border-amber-400/80 transition-all duration-300">
            
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Top Subtitle */}
              <p className="text-xs sm:text-sm font-bold tracking-wider text-amber-600 uppercase mb-1">
                FAST. RELIABLE. AFFORDABLE.
              </p>

              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight mb-4">
                EXPERT REPAIRS
              </h3>

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
                <button
                  onClick={onOpenRepairModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>BOOK A REPAIR</span>
                </button>
              </div>

              <div className="sm:col-span-6 relative flex justify-end">
                <div className="w-full max-w-[240px] transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md">
                  <img
                    src={ASSETS.repairTechnician}
                    alt="Precision Phone Screen Repair by Certified Engineer"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
