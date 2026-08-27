"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { POPULAR_PRODUCTS } from '@/data/redesignAssets';
import { BlurRevealText } from './BlurReveal';

export default function PopularPicks({ onAddToCart, addedItems = {} }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'red':
        return 'bg-red-500 text-white';
      case 'green':
        return 'bg-emerald-500 text-white';
      case 'gold':
      default:
        return 'bg-amber-500 text-neutral-950 font-black';
    }
  };

  const getProductHref = (prod) => {
    if (prod.id === 'p1') return '/mobiles/iphone-16-pro-max';
    if (prod.id === 'p2') return '/accessories';
    if (prod.id === 'p3') return '/laptops/asus-rog-zephyrus-g16-2025';
    if (prod.id === 'p4') return '/laptops/lenovo-legion-pro-5i';
    if (prod.id === 'p5') return '/mobiles/iphone-15';
    return '/mobiles';
  };

  return (
    <section id="popular" className="py-10 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View All & Arrows on Right */}
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <div>
            <BlurRevealText
              text="POPULAR PICKS"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight"
              delay={0.1}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-10 h-1 bg-amber-500 mt-1.5 sm:mt-2 rounded-full origin-left"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/mobiles"
              className="text-xs sm:text-sm font-bold text-neutral-600 hover:text-amber-600 transition-colors uppercase tracking-wider hidden sm:inline"
            >
              View All
            </Link>
            
            {/* Carousel Control Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous Products"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-neutral-300 active:border-neutral-900 bg-white active:bg-neutral-100 flex items-center justify-center text-neutral-700 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next Products"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-neutral-300 active:border-neutral-900 bg-white active:bg-neutral-100 flex items-center justify-center text-neutral-700 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Row / Horizontal Snap Scroll on Mobile */}
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[minmax(210px,240px)] sm:auto-cols-[minmax(240px,270px)] gap-3.5 sm:gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {POPULAR_PRODUCTS.map((prod, idx) => {
            const isAdded = !!addedItems[prod.id];
            const href = getProductHref(prod);

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="snap-start group relative bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200 hover:border-amber-400/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.14)] transition-all duration-300 flex flex-col justify-between"
              >
                <Link href={href} className="block">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase ${getBadgeStyle(
                        prod.badgeType
                      )}`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="w-full aspect-square bg-neutral-50/60 rounded-xl flex items-center justify-center p-3 mb-3.5 overflow-hidden group-hover:bg-amber-50/40 transition-colors">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-base font-bold text-neutral-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 font-medium truncate">
                      {prod.subtitle}
                    </p>
                  </div>
                </Link>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-2">
                  <span className="text-sm sm:text-lg font-black text-neutral-950 tracking-tight">
                    {prod.price}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onAddToCart && onAddToCart(prod);
                    }}
                    aria-label={`Add ${prod.name} to cart`}
                    className={`min-w-[38px] min-h-[38px] sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-amber-50 active:bg-amber-500 text-amber-700 active:text-neutral-950 border border-amber-300'
                    }`}
                  >
                    {isAdded ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 stroke-[2]" />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
