"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { ShoppingBag, Check, Cpu, Zap, ShieldCheck, Laptop } from 'lucide-react';

const LAPTOPS_DATA = [
  {
    id: "l1",
    name: "MacBook Pro 16\" (M3 Max)",
    category: "Creator",
    specs: ["16-core CPU, 40-core GPU", "36GB Unified Memory", "1TB SSD Storage", "Liquid Retina XDR"],
    price: "₹3,49,900",
    badge: "ULTIMATE PERFORMANCE",
    badgeColor: "bg-neutral-900 text-white",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "l2",
    name: "Asus ROG Zephyrus G16 (2025)",
    category: "Gaming",
    specs: ["Intel Core Ultra 9", "NVIDIA RTX 4080 12GB", "32GB LPDDR5X", "2.5K 240Hz OLED"],
    price: "₹2,69,990",
    badge: "OLED GAMING",
    badgeColor: "bg-red-600 text-white",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "l3",
    name: "Dell XPS 14 OLED",
    category: "Ultrabook",
    specs: ["Intel Core Ultra 7", "NVIDIA RTX 4050 6GB", "16GB RAM + 1TB SSD", "3.2K InfinityEdge"],
    price: "₹1,84,990",
    badge: "PREMIUM ULTRABOOK",
    badgeColor: "bg-amber-500 text-neutral-950",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "l4",
    name: "Lenovo Legion Pro 5i",
    category: "Gaming",
    specs: ["Intel Core i7-14700HX", "NVIDIA RTX 4070 8GB", "16GB DDR5 + 1TB SSD", "16\" WQXGA 240Hz"],
    price: "₹1,44,990",
    badge: "BESTSELLER",
    badgeColor: "bg-amber-500 text-neutral-950 font-black",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "l5",
    name: "MacBook Air 15\" (M3)",
    category: "Ultrabook",
    specs: ["Apple M3 Chip", "8-Core CPU / 10-Core GPU", "16GB RAM + 512GB SSD", "18-Hour Battery Life"],
    price: "₹1,44,900",
    badge: "SLIM & SILENT",
    badgeColor: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "l6",
    name: "HP Victus 15 Gaming",
    category: "Budget",
    specs: ["AMD Ryzen 5 7535HS", "NVIDIA RTX 2050 4GB", "16GB RAM + 512GB SSD", "144Hz FHD IPS"],
    price: "₹54,990",
    badge: "BUDGET BEAST",
    badgeColor: "bg-blue-600 text-white",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LaptopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const categories = ['All', 'Gaming', 'Creator', 'Ultrabook', 'Budget'];

  const filteredLaptops = selectedCategory === 'All'
    ? LAPTOPS_DATA
    : LAPTOPS_DATA.filter((l) => l.category === selectedCategory);

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleWhatsAppQuote = (product) => {
    const text = encodeURIComponent(
      `Hi TecnoMart! 💻 I am interested in ${product.name} priced at ${product.price}. Please share availability, warranty, and best price offers.`
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
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                MACBOOKS, GAMING & WORKSTATIONS
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="PREMIUM LAPTOPS COLLECTION"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mt-3">
                Authorized laptops with official brand warranty, free setup, RAM/SSD upgrade on request, and 0% EMI options.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neutral-950 text-amber-400 shadow-md scale-105'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Laptop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredLaptops.map((laptop, idx) => {
                const isAdded = !!addedItems[laptop.id];

                return (
                  <BlurRevealBox key={laptop.id} delay={idx * 0.08} yOffset={25}>
                    <div className="group h-full bg-white rounded-3xl p-6 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                      <div>
                        {/* Top Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${laptop.badgeColor}`}>
                            {laptop.badge}
                          </span>
                          <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider">
                            {laptop.category}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-[4/3] bg-neutral-50 rounded-2xl flex items-center justify-center p-4 mb-5 overflow-hidden group-hover:bg-amber-50/30 transition-colors">
                          <img
                            src={laptop.image}
                            alt={laptop.name}
                            className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors leading-snug mb-3">
                          {laptop.name}
                        </h3>

                        {/* Specs */}
                        <div className="space-y-1.5 mb-5 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                          {laptop.specs.map((s, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                              <Cpu className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                              <span className="truncate">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & Buttons */}
                      <div className="pt-4 border-t border-neutral-100">
                        <div className="flex items-baseline justify-between mb-3">
                          <span className="text-xl font-black text-neutral-950">
                            {laptop.price}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-600">
                            ✓ In Stock (Jubilee Hills)
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(laptop)}
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
                            onClick={() => handleWhatsAppQuote(laptop)}
                            className="h-11 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                          >
                            <span>Enquire on WA</span>
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
