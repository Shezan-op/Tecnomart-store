"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { LAPTOPS_DATA } from '@/data/products';
import { ShoppingBag, Check, Cpu, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LaptopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const categories = ['All', 'Gaming', 'Creator', 'Ultrabook', 'Budget'];

  const filteredLaptops = selectedCategory === 'All'
    ? LAPTOPS_DATA
    : LAPTOPS_DATA.filter((l) => l.category === selectedCategory);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppQuote = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi TecnoMart! 💻 I am interested in ${product.name} priced at ${product.price}. Please share availability, warranty, and best price offers.`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-8 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                MACBOOKS, GAMING &amp; WORKSTATIONS
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="PREMIUM LAPTOPS COLLECTION"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2 sm:mt-3">
                Authorized laptops with official brand warranty, free setup, RAM/SSD upgrade on request, and 0% EMI options.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-8 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex-shrink-0 active:scale-95 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neutral-950 text-amber-400 shadow-md'
                      : 'bg-neutral-100 active:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Laptop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredLaptops.map((laptop, idx) => {
                const isAdded = !!addedItems[laptop.id];

                return (
                  <BlurRevealBox key={laptop.id} delay={idx * 0.06} yOffset={20}>
                    <Link
                      href={`/laptops/${laptop.slug}`}
                      className="group h-full bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between block"
                    >
                      <div>
                        {/* Top Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${laptop.badgeColor}`}>
                            {laptop.badge}
                          </span>
                          <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider">
                            {laptop.category}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-[4/3] bg-neutral-50 rounded-2xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:bg-amber-50/30 transition-colors">
                          <img
                            src={laptop.images[0]}
                            alt={laptop.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug mb-1">
                          {laptop.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-medium mb-3">
                          {laptop.tagline}
                        </p>

                        {/* Specs Highlights */}
                        <div className="space-y-1 mb-4 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                          {laptop.keyHighlights?.slice(0, 2).map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-700 truncate">
                              <Cpu className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                              <span className="truncate">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Buttons */}
                      <div className="pt-3.5 border-t border-neutral-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg sm:text-xl font-black text-neutral-950">
                              {laptop.price}
                            </span>
                            <span className="text-xs text-neutral-400 line-through">
                              {laptop.originalPrice}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={(e) => handleAddToCart(laptop, e)}
                            className={`min-h-[44px] rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer ${
                              isAdded
                                ? 'bg-emerald-500 text-white'
                                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300'
                            }`}
                          >
                            {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                            <span>{isAdded ? 'Added' : 'Add to Cart'}</span>
                          </button>

                          <button
                            onClick={(e) => handleWhatsAppQuote(laptop, e)}
                            className="min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer"
                          >
                            <span>Buy on WA</span>
                          </button>
                        </div>
                      </div>

                    </Link>
                  </BlurRevealBox>
                );
              })}
            </div>

          </div>
        </main>

        <Footer />
        <MobileBottomBar onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
