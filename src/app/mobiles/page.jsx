"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { ShoppingBag, Check, Star, Filter, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const MOBILES_DATA = [
  {
    id: "m1",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    storage: "256GB / 512GB / 1TB",
    color: "Desert Titanium",
    price: "₹1,44,900",
    rawPrice: 144900,
    originalPrice: "₹1,49,900",
    badge: "LATEST FLAGSHIP",
    badgeColor: "bg-amber-500 text-neutral-950",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    specs: ["A18 Pro Chip", "48MP Fusion Camera", "6.9\" Super Retina XDR", "Titanium Frame"],
  },
  {
    id: "m2",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    storage: "256GB / 512GB",
    color: "Titanium Gray",
    price: "₹1,29,999",
    rawPrice: 129999,
    originalPrice: "₹1,34,999",
    badge: "GALAXY AI",
    badgeColor: "bg-blue-600 text-white",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    specs: ["Snapdragon 8 Gen 3", "200MP Quad Tele", "S-Pen Included", "7 Years OS Updates"],
  },
  {
    id: "m3",
    name: "OnePlus 12",
    brand: "OnePlus",
    storage: "16GB RAM + 512GB",
    color: "Silky Black",
    price: "₹64,999",
    rawPrice: 64999,
    originalPrice: "₹69,999",
    badge: "BEST VALUE",
    badgeColor: "bg-emerald-500 text-white",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
    specs: ["Snapdragon 8 Gen 3", "Hasselblad Camera", "100W SUPERVOOC", "5400mAh Battery"],
  },
  {
    id: "m4",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    storage: "128GB / 256GB",
    color: "Obsidian Black",
    price: "₹1,06,999",
    rawPrice: 106999,
    originalPrice: "₹1,09,999",
    badge: "AI POWERED",
    badgeColor: "bg-purple-600 text-white",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    specs: ["Google Tensor G4", "Pro Triple Camera", "Gemini Advanced AI", "Super Actua Display"],
  },
  {
    id: "m5",
    name: "iPhone 15",
    brand: "Apple",
    storage: "128GB",
    color: "Black / Blue / Pink",
    price: "₹69,900",
    rawPrice: 69900,
    originalPrice: "₹79,900",
    badge: "POPULAR",
    badgeColor: "bg-amber-500 text-neutral-950",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    specs: ["A16 Bionic Chip", "Dynamic Island", "48MP Main Camera", "USB-C Port"],
  },
  {
    id: "m6",
    name: "Samsung Galaxy Z Fold 6",
    brand: "Samsung",
    storage: "256GB / 512GB",
    color: "Silver Shadow",
    price: "₹1,64,999",
    rawPrice: 164999,
    originalPrice: "₹1,69,999",
    badge: "FOLDABLE",
    badgeColor: "bg-indigo-600 text-white",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    specs: ["7.6\" Dynamic AMOLED 2X", "Ultra Slim Hinge", "Snapdragon 8 Gen 3", "Multitasking Pro"],
  },
];

export default function MobilesPage() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const brands = ['All', 'Apple', 'Samsung', 'OnePlus', 'Google'];

  const filteredMobiles = selectedBrand === 'All'
    ? MOBILES_DATA
    : MOBILES_DATA.filter((m) => m.brand === selectedBrand);

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppBuy = (product) => {
    const text = encodeURIComponent(
      `Hello TecnoMart! 📱 I want to purchase the ${product.name} (${product.price}). Please share availability and current offers.`
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
            
            {/* Page Header Banner */}
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                FLAGSHIP & VALUE SMARTPHONES
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="EXPLORE LATEST MOBILES"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mt-3">
                100% Genuine, official warranty, no-cost EMI, and instant trade-in bonus at TecnoMart Jubilee Hills.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Value Pillars Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs font-semibold text-neutral-700">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>100% Brand New & Sealed with Official Tax Invoice</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Truck className="w-4 h-4 text-amber-500" />
                <span>Same-Day Safe Doorstep Delivery in Hyderabad</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-500" />
                <span>Instant Phone Exchange & Data Transfer Support</span>
              </div>
            </div>

            {/* Brand Filter Buttons */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-neutral-950 text-amber-400 shadow-md scale-105'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredMobiles.map((item, idx) => {
                const isAdded = !!addedItems[item.id];

                return (
                  <BlurRevealBox key={item.id} delay={idx * 0.08} yOffset={25}>
                    <div className="group h-full bg-white rounded-3xl p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                      <div>
                        {/* Badge & Brand */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                          <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider">
                            {item.brand}
                          </span>
                        </div>

                        {/* Image Container */}
                        <div className="w-full aspect-square max-h-[220px] bg-neutral-50 rounded-2xl flex items-center justify-center p-4 mb-5 overflow-hidden group-hover:bg-amber-50/40 transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        {/* Details */}
                        <h3 className="text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-medium mb-3">
                          {item.color} • {item.storage}
                        </p>

                        {/* Key Specs Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {item.specs.map((spec, i) => (
                            <span key={i} className="text-[10px] font-semibold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Actions */}
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
                            onClick={() => handleWhatsAppBuy(item)}
                            className="h-11 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                          >
                            <span>Buy on WhatsApp</span>
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
