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
      case 'gaming-pcs': return '/gaming';
      case 'refurbished': return '/refurbished';
      case 'repairs': return '/repairs';
      case 'accessories': return '/accessories';
      default: return `/${catId}`;
    }
  };

  const topRowCategories = CATEGORIES.slice(0, 4); // Mobiles, Laptops, Gaming PCs, Refurbished
  const bottomRowCategories = CATEGORIES.slice(4, 6); // Repairs, Accessories

  const renderCard = (cat, idx) => {
    const route = getCategoryRoute(cat.id);

    return (
      <Link key={cat.id} href={route} className="block w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          whileHover={{ y: -4 }}
          className="h-full group cursor-pointer bg-white hover:bg-neutral-50 active:bg-neutral-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 border border-neutral-200/90 hover:border-amber-400/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
        >
          {/* Card Visual / Icon Container */}
          <div className="w-full aspect-square max-w-[80px] sm:max-w-[120px] rounded-lg sm:rounded-xl bg-neutral-50 group-hover:bg-amber-50/50 flex items-center justify-center p-1.5 sm:p-3 mb-2 sm:mb-3 transition-colors overflow-hidden">
            {cat.isImage ? (
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain filter drop-shadow-xs group-hover:scale-110 transition-transform duration-300"
              />
            ) : cat.iconType === 'refurbished' ? (
              <div className="p-1.5 sm:p-3 bg-amber-100/60 rounded-full group-hover:bg-amber-200/70 transition-colors">
                <RefurbishedArrowsIcon className="w-6 h-6 sm:w-10 sm:h-10 text-amber-600 group-hover:rotate-180 transition-transform duration-700" />
              </div>
            ) : (
              <div className="p-1.5 sm:p-3 bg-amber-100/60 rounded-full group-hover:bg-amber-200/70 transition-colors">
                <CrossedToolsIcon className="w-6 h-6 sm:w-10 sm:h-10 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-0.5 mt-auto">
            <h3 className="text-xs sm:text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors truncate">
              {cat.name}
            </h3>
            <p className="text-[10px] sm:text-xs text-neutral-500 font-medium leading-tight line-clamp-1">
              {cat.subtitle}
            </p>
          </div>
        </motion.div>
      </Link>
    );
  };

  return (
    <section className="py-8 sm:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Heading with Text Blur Reveal */}
        <div className="text-center mb-5 sm:mb-10">
          <BlurRevealText
            text="WHAT DO YOU NEED?"
            className="text-xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight justify-center"
            delay={0.05}
          />
          <div className="w-10 h-0.5 sm:h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Mobile: 4 in top row, 2 centered in bottom row. Desktop: 6-column grid */}
        <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-5">
          
          {/* Row 1 (4 across on mobile) */}
          <div className="grid grid-cols-4 gap-2 sm:contents">
            {topRowCategories.map((cat, idx) => renderCard(cat, idx))}
          </div>

          {/* Row 2 (2 centered on mobile) */}
          <div className="flex justify-center gap-2 sm:contents max-w-[280px] mx-auto">
            {bottomRowCategories.map((cat, idx) => (
              <div key={cat.id} className="w-1/2 sm:w-auto">
                {renderCard(cat, idx + 4)}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
