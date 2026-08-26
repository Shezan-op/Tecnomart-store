"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { CheckCircle2, ShieldCheck, BatteryCharging, Sparkles, ShoppingBag, Check } from 'lucide-react';
import { RefurbishedArrowsIcon } from '@/components/redesign/Icons';

const REFURBISHED_ITEMS = [
  {
    id: "rf-1",
    name: "Apple MacBook Pro 14\" M1 Pro",
    grade: "Grade A+ (Like New)",
    specs: "16GB RAM / 512GB SSD / 100% Battery Health",
    price: "₹92,990",
    originalPrice: "₹1,94,900",
    save: "Save ₹1,01,910",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
  {
    id: "rf-2",
    name: "iPhone 14 Pro Max 128GB",
    grade: "Grade A+ (Mint Condition)",
    specs: "Deep Purple / 96% Battery / Flawless OLED",
    price: "₹74,990",
    originalPrice: "₹1,39,900",
    save: "Save ₹64,910",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
  {
    id: "rf-3",
    name: "Dell XPS 13 9310 (i7 11th Gen)",
    grade: "Grade A (Excellent)",
    specs: "16GB RAM / 512GB SSD / 4K UHD+ Touch",
    price: "₹49,990",
    originalPrice: "₹1,24,900",
    save: "Save ₹74,910",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
  {
    id: "rf-4",
    name: "Samsung Galaxy S23 Ultra 256GB",
    grade: "Grade A+ (Mint)",
    specs: "Phantom Black / 100% Battery / S-Pen Included",
    price: "₹68,990",
    originalPrice: "₹1,24,999",
    save: "Save ₹56,009",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
  {
    id: "rf-5",
    name: "iPad Pro 11\" M2 (128GB WiFi)",
    grade: "Grade A+ (Open Box)",
    specs: "Space Gray / Liquid Retina / Apple Pencil 2 Compatible",
    price: "₹52,990",
    originalPrice: "₹81,900",
    save: "Save ₹28,910",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
  {
    id: "rf-6",
    name: "Lenovo ThinkPad T14s Gen 3 (Ryzen 7 Pro)",
    grade: "Grade A (Corporate Return)",
    specs: "16GB RAM / 512GB SSD / 14\" FHD IPS / Magnesium Body",
    price: "₹44,990",
    originalPrice: "₹99,990",
    save: "Save ₹55,000",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    warranty: "1-Year TecnoMart Warranty",
  },
];

export default function RefurbishedPage() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const handleAddToCart = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppEnquiry = (item) => {
    const text = encodeURIComponent(
      `Hello TecnoMart! 🔄 I'm interested in the Certified Refurbished ${item.name} (${item.price}). Please share actual unit photos and condition verification.`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />

        <main className="flex-1 py-10 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                CERTIFIED PRE-OWNED & OPEN-BOX TECH
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="SMART TECH. SMARTER SAVINGS."
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                Up to 60% off original retail prices. 40+ point quality certified, 100% genuine parts, with 1-Year TecnoMart Warranty.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Quality Standard Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-5 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 rounded-2xl border border-amber-300/60 text-xs font-bold text-neutral-800 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>40-Point Hardware & Battery Diagnostic Check</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>1-Year Comprehensive Warranty Included</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>7-Day Replacement Guarantee</span>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {REFURBISHED_ITEMS.map((item, idx) => {
                const isAdded = !!addedItems[item.id];

                return (
                  <BlurRevealBox key={item.id} delay={idx * 0.08} yOffset={25}>
                    <div className="group h-full bg-white rounded-3xl p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                      <div>
                        {/* Grade Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                            {item.grade}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500 text-neutral-950">
                            {item.save}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-[4/3] bg-neutral-50 rounded-2xl flex items-center justify-center p-4 mb-5 overflow-hidden group-hover:bg-amber-50/30 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        <h3 className="text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-medium mb-3">
                          {item.specs}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-neutral-700 font-semibold bg-neutral-100 px-3 py-1 rounded-lg w-fit mb-4">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                          <span>{item.warranty}</span>
                        </div>
                      </div>

                      {/* Pricing & Buttons */}
                      <div className="pt-4 border-t border-neutral-100">
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-xl font-black text-neutral-950">
                            {item.price}
                          </span>
                          <span className="text-xs text-neutral-400 line-through">
                            {item.originalPrice}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className={`h-11 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              isAdded
                                ? 'bg-emerald-500 text-white'
                                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300'
                            }`}
                          >
                            {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                            <span>{isAdded ? 'Added' : 'Add to Cart'}</span>
                          </button>

                          <button
                            onClick={() => handleWhatsAppEnquiry(item)}
                            className="h-11 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                          >
                            <span>Inspect on WA</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </BlurRevealBox>
                );
              })}
            </div>

          </div>
        </main>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
