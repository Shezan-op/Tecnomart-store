"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/data/redesignAssets';
import { RefurbishedArrowsIcon, CrossedToolsIcon } from './Icons';
import { BlurRevealText } from './BlurReveal';

export default function CategoryGrid({ onSelectCategory }) {
  const getCategoryRoute = (catId) => {
    switch (catId) {
      case 'mobiles': return '/mobiles';
      case 'laptops': return '/laptops';
      case 'gaming': return '/gaming';
      case 'refurbished': return '/refurbished';
      case 'repairs': return '/repairs';
      case 'accessories': return '/accessories';
      default: return `/${catId}`;
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Heading with Text Blur Reveal */}
        <div className="text-center mb-7 sm:mb-12">
          <BlurRevealText
            text="WHAT DO YOU NEED?"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight justify-center"
            delay={0.1}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 rounded-full origin-center"
          />
        </div>

        {/* 6 Category Cards Grid (Mobile 2-column, Tablet 3-column, Desktop 6-column) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {CATEGORIES.map((cat, idx) => {
            const route = getCategoryRoute(cat.id);

            return (
              <Link key={cat.id} href={route}>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="h-full group cursor-pointer bg-white hover:bg-neutral-50/80 active:bg-neutral-100 rounded-2xl p-3.5 sm:p-5 border border-neutral-200/90 hover:border-amber-400/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.14)] transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Card Visual / Icon Container */}
                  <div className="w-full aspect-square max-w-[120px] rounded-xl bg-neutral-50 group-hover:bg-amber-50/50 flex items-center justify-center p-2.5 sm:p-3 mb-3 sm:mb-4 transition-colors overflow-hidden">
                    {cat.isImage ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : cat.iconType === 'refurbished' ? (
                      <div className="p-2.5 sm:p-3 bg-amber-100/60 rounded-full group-hover:bg-amber-200/70 transition-colors">
                        <RefurbishedArrowsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 group-hover:rotate-180 transition-transform duration-700" />
                      </div>
                    ) : (
                      <div className="p-2.5 sm:p-3 bg-amber-100/60 rounded-full group-hover:bg-amber-200/70 transition-colors">
                        <CrossedToolsIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-0.5 mt-auto">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight">
                      {cat.subtitle}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
