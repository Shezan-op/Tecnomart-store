"use client";

import React, { useState, useMemo } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { LAPTOPS_DATA } from '@/data/products';
import { ShoppingBag, Check, Cpu, ChevronRight, SlidersHorizontal, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function LaptopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high' | 'rating'
  const [visibleCount, setVisibleCount] = useState(4);
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const categories = ['All', 'Gaming', 'Creator', 'Ultrabook', 'Budget'];

  const filteredAndSortedLaptops = useMemo(() => {
    let list = selectedCategory === 'All'
      ? [...LAPTOPS_DATA]
      : LAPTOPS_DATA.filter((l) => l.category === selectedCategory);

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [selectedCategory, sortBy]);

  const displayedLaptops = filteredAndSortedLaptops.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedLaptops.length;

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
      `Hi TecnoMart! 💻 I am interested in ${product.name} priced at ${product.price}. Please share availability and current offers.`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />

        <main className="flex-1 py-8 sm:py-14">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
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
              <p className="text-xs sm:text-base text-neutral-600 mt-2">
                Authorized laptops with official brand warranty, free setup, RAM/SSD upgrades on request, and 0% EMI options.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Value Pillars Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-8 p-3.5 sm:p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs font-semibold text-neutral-700">
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Brand New Sealed with GST Tax Bill</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <Truck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Free Same-Day Setup in Hyderabad</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Custom RAM &amp; SSD Upgrades Available</span>
              </div>
            </div>

            {/* Filter & Sort Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(4);
                    }}
                    className={`min-h-[38px] px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 active:scale-95 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-neutral-950 text-amber-400 shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200/80 border border-neutral-200/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center justify-between sm:justify-end gap-2 flex-shrink-0">
                <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-9 px-3 text-xs font-bold bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 text-neutral-900 cursor-pointer shadow-2xs"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Laptop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10">
              {displayedLaptops.map((laptop, idx) => {
                const isAdded = !!addedItems[laptop.id];

                return (
                  <BlurRevealBox key={laptop.id} delay={idx * 0.05} yOffset={20}>
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
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{laptop.rating}</span>
                          </div>
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
                        <p className="text-xs text-neutral-500 font-medium mb-3 line-clamp-1">
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

            {/* View More Laptops Button */}
            {hasMore && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="min-h-[46px] px-8 bg-neutral-950 hover:bg-neutral-800 active:bg-neutral-800 text-amber-400 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  View More Laptops ({filteredAndSortedLaptops.length - visibleCount} More)
                </button>
              </div>
            )}

          </div>
        </main>

        <Footer />
        <MobileBottomBar onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
