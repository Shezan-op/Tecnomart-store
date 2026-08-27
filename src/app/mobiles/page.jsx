"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { MOBILES_DATA } from '@/data/products';
import { ShoppingBag, Check, ShieldCheck, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function MobilesPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Google'];

  const filteredMobiles = selectedBrand === 'All'
    ? MOBILES_DATA
    : MOBILES_DATA.filter((m) => m.brand === selectedBrand);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppBuy = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello TecnoMart! 📱 I want to purchase the ${product.name} (${product.price}). Please share availability and current offers.`
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
            
            {/* Page Header Banner */}
            <div className="mb-8 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                FLAGSHIP &amp; VALUE SMARTPHONES
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="EXPLORE LATEST MOBILES"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2 sm:mt-3">
                100% Genuine, official warranty, no-cost EMI, and instant trade-in bonus at TecnoMart Jubilee Hills.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Value Pillars Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-8 p-3.5 sm:p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs font-semibold text-neutral-700">
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>100% Brand New &amp; Sealed with Tax Invoice</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <Truck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Same-Day Doorstep Delivery in Hyderabad</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Instant Phone Exchange &amp; Data Transfer</span>
              </div>
            </div>

            {/* Brand Filter Buttons */}
            <div className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-8 no-scrollbar">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex-shrink-0 active:scale-95 cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-neutral-950 text-amber-400 shadow-md'
                      : 'bg-neutral-100 active:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredMobiles.map((item, idx) => {
                const isAdded = !!addedItems[item.id];

                return (
                  <BlurRevealBox key={item.id} delay={idx * 0.06} yOffset={20}>
                    <Link
                      href={`/mobiles/${item.slug}`}
                      className="group h-full bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between block"
                    >
                      <div>
                        {/* Badge & Brand */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                          <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider">
                            {item.brand}
                          </span>
                        </div>

                        {/* Image Container */}
                        <div className="w-full aspect-square max-h-[200px] sm:max-h-[220px] bg-neutral-50 rounded-2xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:bg-amber-50/40 transition-colors">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        {/* Details */}
                        <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-medium mb-3">
                          {item.tagline || item.brand}
                        </p>

                        {/* Key Highlights */}
                        <div className="space-y-1 mb-4">
                          {item.keyHighlights?.slice(0, 2).map((highlight, i) => (
                            <p key={i} className="text-[11px] text-neutral-600 font-medium line-clamp-1">
                              • {highlight}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Actions */}
                      <div className="pt-3.5 border-t border-neutral-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg sm:text-xl font-black text-neutral-950">
                              {item.price}
                            </span>
                            <span className="text-xs text-neutral-400 line-through">
                              {item.originalPrice}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={(e) => handleAddToCart(item, e)}
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
                            onClick={(e) => handleWhatsAppBuy(item, e)}
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
