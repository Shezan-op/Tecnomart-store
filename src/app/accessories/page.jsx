"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { ShoppingBag, Check } from 'lucide-react';

const ACCESSORIES_DATA = [
  {
    id: "acc-1",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Audio",
    specs: "Industry Leading Noise Canceling • 30h Battery • Auto NC Optimizer",
    price: "₹24,990",
    badge: "TOP PICK",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "acc-2",
    name: "Keychron Q1 Pro Wireless Custom Keyboard",
    category: "Keyboards",
    specs: "CNC Aluminum Body • Hot-Swappable RGB • Gateron Jupiter Switches",
    price: "₹18,999",
    badge: "ENTHUSIAST",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "acc-3",
    name: "Logitech G Pro X Superlight 2 Mouse",
    category: "Mice",
    specs: "60g Ultralight • HERO 2 32K Sensor • 4K Polling Rate",
    price: "₹14,995",
    badge: "ESPORTS READY",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "acc-4",
    name: "LG UltraGear 27\" OLED 240Hz 0.03ms Monitor",
    category: "Monitors",
    specs: "QHD OLED • HDR True Black 400 • G-SYNC & FreeSync Premium",
    price: "₹69,990",
    badge: "240HZ OLED",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "acc-5",
    name: "Anker 737 GaNPrime 140W Power Bank",
    category: "Power",
    specs: "24,000mAh • Smart Digital Display • 140W Two-Way Fast Charge",
    price: "₹12,999",
    badge: "140W GAN",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "acc-6",
    name: "boAt Wave Ultima Smartwatch",
    category: "Wearables",
    specs: "HD Display • Bluetooth Calling • 100+ Sports Modes",
    price: "₹1,499",
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AccessoriesPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const categories = ['All', 'Audio', 'Keyboards', 'Mice', 'Monitors', 'Power', 'Wearables'];

  const filteredItems = selectedCat === 'All'
    ? ACCESSORIES_DATA
    : ACCESSORIES_DATA.filter((a) => a.category === selectedCat);

  const handleAddToCart = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppOrder = (item) => {
    const text = encodeURIComponent(
      `Hi TecnoMart! 🎧 I want to purchase the ${item.name} (${item.price}). Please share availability and payment link.`
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
            <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                COMPLETE YOUR TECH SETUP
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="PREMIUM ACCESSORIES"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2">
                Mechanical keyboards, studio monitors, noise-canceling headphones, and GaN chargers curated for maximum productivity and esports supremacy.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Category Pills with Horizontal Scroll */}
            <div className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-8 no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex-shrink-0 active:scale-95 cursor-pointer ${
                    selectedCat === c
                      ? 'bg-neutral-950 text-amber-400 shadow-md'
                      : 'bg-neutral-100 active:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {filteredItems.map((item, idx) => {
                const isAdded = !!addedItems[item.id];

                return (
                  <BlurRevealBox key={item.id} delay={idx * 0.06} yOffset={20}>
                    <div className="group h-full bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-500 text-neutral-950">
                            {item.badge}
                          </span>
                          <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>

                        <div className="w-full aspect-[4/3] bg-neutral-50 rounded-2xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:bg-amber-50/30 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-medium mb-3 leading-relaxed">
                          {item.specs}
                        </p>
                      </div>

                      <div className="pt-3.5 border-t border-neutral-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <span className="text-lg sm:text-xl font-black text-neutral-950">{item.price}</span>
                          <span className="text-xs font-bold text-emerald-600">✓ Genuine OEM</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(item)}
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
                            onClick={() => handleWhatsAppOrder(item)}
                            className="min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer"
                          >
                            <span>Buy on WA</span>
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
        <MobileBottomBar onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={cartCount} />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
