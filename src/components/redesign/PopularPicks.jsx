"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import { POPULAR_PRODUCTS } from '@/data/redesignAssets';

export default function PopularPicks({ onAddToCart, addedItems = {} }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
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

  return (
    <section id="popular" className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View All & Arrows on Right */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight">
              POPULAR PICKS
            </h2>
            <div className="w-10 h-1 bg-amber-500 mt-2 rounded-full" />
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#all-products"
              className="text-xs sm:text-sm font-bold text-neutral-600 hover:text-amber-600 transition-colors uppercase tracking-wider hidden sm:inline"
            >
              View All
            </a>
            
            {/* Carousel Control Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous Products"
                className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next Products"
                className="w-9 h-9 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Row / Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col auto-cols-[minmax(220px,260px)] sm:auto-cols-[minmax(240px,270px)] gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
        >
          {POPULAR_PRODUCTS.map((prod) => {
            const isAdded = !!addedItems[prod.id];

            return (
              <div
                key={prod.id}
                className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200 hover:border-amber-400/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
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
                <div className="w-full aspect-square bg-neutral-50/60 rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:bg-amber-50/40 transition-colors">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300"
                  />
                </div>

                {/* Product Details & Price */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    {prod.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                      {prod.price}
                    </span>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => onAddToCart && onAddToCart(prod)}
                      aria-label={`Add ${prod.name} to cart`}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-90 ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-amber-50 hover:bg-amber-500 text-amber-700 hover:text-neutral-950 border border-amber-300'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4 stroke-[2]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
