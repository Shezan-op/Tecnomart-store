"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { POPULAR_PRODUCTS } from '@/data/redesignAssets';
import { BlurRevealText } from './BlurReveal';

export default function PopularPicks({ onAddToCart }) {
  const [activeDot, setActiveDot] = useState(0);

  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case 'red':
        return 'bg-red-500 text-white';
      case 'green':
        return 'bg-emerald-600 text-white';
      case 'gold':
        return 'bg-amber-500 text-neutral-950';
      default:
        return 'bg-neutral-800 text-white';
    }
  };

  const getProductHref = (prod) => {
    if (prod.id === 'p1') return '/accessories';
    if (prod.id === 'p2') return '/accessories';
    if (prod.id === 'p3') return '/laptops/asus-rog-zephyrus-g16-2025';
    if (prod.id === 'p4') return '/laptops/asus-rog-zephyrus-g16-2025';
    if (prod.id === 'p5') return '/mobiles/iphone-15';
    return '/mobiles';
  };

  // Reorder to match screenshot:
  // Top Row: iPhone 15 (p5), Asus TUF F15 (p4), Zotac RTX 4060 (p3)
  // Second Row: Sony WH-1000XM5 (p2), boAt Wave Ultima (p1)
  const orderedProducts = [
    POPULAR_PRODUCTS.find(p => p.id === 'p5') || POPULAR_PRODUCTS[4],
    POPULAR_PRODUCTS.find(p => p.id === 'p4') || POPULAR_PRODUCTS[3],
    POPULAR_PRODUCTS.find(p => p.id === 'p3') || POPULAR_PRODUCTS[2],
    POPULAR_PRODUCTS.find(p => p.id === 'p2') || POPULAR_PRODUCTS[1],
    POPULAR_PRODUCTS.find(p => p.id === 'p1') || POPULAR_PRODUCTS[0],
  ];

  return (
    <section id="popular" className="py-8 sm:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View All on Right */}
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <div>
            <BlurRevealText
              text="POPULAR PICKS"
              className="text-xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight"
              delay={0.05}
            />
            <div className="w-10 h-0.5 sm:h-1 bg-amber-500 mt-1 rounded-full" />
          </div>

          <div>
            <Link
              href="/mobiles"
              className="text-xs sm:text-sm font-bold text-neutral-700 hover:text-amber-600 border border-neutral-200 px-3 py-1.5 rounded-lg transition-colors uppercase tracking-wider"
            >
              View All
            </Link>
          </div>
        </div>

        {/* 2-Column Grid on Mobile, 3-Column on Tablet, 5-Column on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {orderedProducts.map((prod, idx) => {
            const href = getProductHref(prod);

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-neutral-200 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-start mb-2">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black tracking-wider uppercase ${getBadgeStyle(
                        prod.badgeType
                      )}`}
                    >
                      {prod.badge}
                    </span>
                  </div>

                  {/* Product Image */}
                  <Link href={href} className="block">
                    <div className="w-full aspect-square bg-neutral-50 rounded-lg flex items-center justify-center p-2 mb-2.5 overflow-hidden group-hover:bg-amber-50/40 transition-colors">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Product Title & Subtitle */}
                  <Link href={href} className="block space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500 font-medium line-clamp-1">
                      {prod.subtitle}
                    </p>
                  </Link>
                </div>

                {/* Price & Cart Button Row */}
                <div className="flex items-center justify-between pt-3 mt-1 border-t border-neutral-100">
                  <span className="text-xs sm:text-sm font-black text-neutral-950">
                    {prod.price}
                  </span>

                  <button
                    onClick={() => onAddToCart && onAddToCart(prod)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-50 hover:bg-amber-500 text-amber-600 hover:text-neutral-950 flex items-center justify-center transition-colors active:scale-95 cursor-pointer shadow-2xs"
                    aria-label={`Add ${prod.name} to cart`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Indicator Dots matching Screenshot */}
        <div className="flex items-center justify-center gap-1.5 pt-5 sm:pt-7">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              aria-label={`Go to slide ${dot + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeDot === dot
                  ? 'w-6 bg-amber-500'
                  : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
