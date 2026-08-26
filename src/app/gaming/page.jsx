"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { Flame, Cpu, Gauge, Zap, ShoppingBag, Check, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const GAMING_RIGS = [
  {
    id: "g1",
    name: "TITAN APEX RTX 4090",
    tier: "4K ULTRA / AI",
    fps: "180+ FPS at 4K Ultra",
    specs: {
      cpu: "Intel Core i9-14900KS / AMD Ryzen 9 7950X3D",
      gpu: "NVIDIA GeForce RTX 4090 24GB GDDR6X",
      ram: "64GB DDR5 6400MHz RGB",
      storage: "4TB Gen4 NVMe SSD (7400MB/s)",
      cooling: "360mm ARGB LCD Liquid Cooler",
      psu: "1200W 80+ Platinum ATX 3.0",
      case: "Lian Li O11 Dynamic EVO RGB / Corsair 5000D",
    },
    price: "₹3,89,999",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
    badge: "FLAGSHIP BEAST",
    badgeColor: "bg-amber-500 text-neutral-950 font-black",
  },
  {
    id: "g2",
    name: "CYBERPULSE RTX 4080 SUPER",
    tier: "4K GAMING / STREAMING",
    fps: "144+ FPS at 4K High",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D (Gaming King)",
      gpu: "NVIDIA GeForce RTX 4080 Super 16GB",
      ram: "32GB DDR5 6000MHz RGB",
      storage: "2TB Gen4 NVMe SSD",
      cooling: "360mm Deepcool / NZXT Liquid Cooler",
      psu: "850W 80+ Gold Fully Modular",
      case: "NZXT H9 Flow Panoramic Glass",
    },
    price: "₹2,49,999",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80",
    badge: "PRO GAMER PICK",
    badgeColor: "bg-red-600 text-white font-black",
  },
  {
    id: "g3",
    name: "VALIANT VANGUARD RTX 4070 Ti SUPER",
    tier: "1440P HIGH REFRESH",
    fps: "165+ FPS at 1440p Max",
    specs: {
      cpu: "Intel Core i7-14700K 20-Core",
      gpu: "NVIDIA GeForce RTX 4070 Ti Super 16GB",
      ram: "32GB DDR5 5600MHz RGB",
      storage: "1TB Gen4 NVMe SSD",
      cooling: "240mm ARGB Liquid Cooler",
      psu: "750W 80+ Gold Modular",
      case: "Ant Esports Crystal Panoramic ARGB",
    },
    price: "₹1,74,999",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
    badge: "BESTSELLER",
    badgeColor: "bg-amber-500 text-neutral-950 font-black",
  },
  {
    id: "g4",
    name: "SHADOW STRIKER RTX 4060",
    tier: "1080P ESPORTS CHAMPION",
    fps: "240+ FPS Esports / 100+ AAA",
    specs: {
      cpu: "Intel Core i5-13400F / Ryzen 5 7600",
      gpu: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      ram: "16GB DDR5 5200MHz",
      storage: "1TB NVMe SSD",
      cooling: "Tower ARGB Air Cooler",
      psu: "650W 80+ Bronze Certified",
      case: "Galax Revolution 05 ARGB",
    },
    price: "₹74,999",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=700&q=80",
    badge: "BUDGET CHAMPION",
    badgeColor: "bg-emerald-600 text-white font-black",
  },
];

export default function GamingPage() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);
  };

  const handleCustomQuote = (rig) => {
    const text = encodeURIComponent(
      `Hello TecnoMart Gaming! 🎮 I'm interested in the "${rig.name}" custom rig priced at ${rig.price}. Please share component customization options and same-day delivery details.`
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
            
            {/* Gaming Banner Header */}
            <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 mb-12 border border-neutral-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-2xl relative z-10 space-y-4">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                  CUSTOM BUILDS • LIQUID COOLED • BENCHMARKED
                </span>
                <div>
                  <BlurRevealText
                    text="BUILT FOR VICTORY"
                    className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
                    delay={0.1}
                  />
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Every custom gaming rig is handcrafted by veteran engineers in Hyderabad, stress-tested with Cinebench & 3DMark, and comes with a 3-Year Onsite Component Warranty.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/pc-builds"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all"
                  >
                    <span>Open PC Configurator</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                  <a
                    href="https://wa.me/919010667726?text=Hi%20TecnoMart!%20I%20want%20a%20custom%20gaming%20PC%20recommendation."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border border-white/20"
                  >
                    <span>Talk to PC Specialist</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Gaming Rigs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GAMING_RIGS.map((rig, idx) => {
                const isAdded = !!addedItems[rig.id];

                return (
                  <BlurRevealBox key={rig.id} delay={idx * 0.1} yOffset={25}>
                    <div className="group h-full bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider ${rig.badgeColor}`}>
                            {rig.badge}
                          </span>
                          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <Gauge className="w-3.5 h-3.5" />
                            {rig.fps}
                          </span>
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-[16/10] bg-neutral-950 rounded-2xl flex items-center justify-center p-4 mb-6 overflow-hidden relative shadow-inner">
                          <img
                            src={rig.image}
                            alt={rig.name}
                            className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-108 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-3 left-4 text-xs font-black tracking-widest text-amber-400 uppercase">
                            {rig.tier}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-neutral-950 group-hover:text-amber-600 transition-colors mb-4">
                          {rig.name}
                        </h3>

                        {/* Detailed Specs List */}
                        <div className="space-y-2 mb-6 bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-xs">
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/60">
                            <span className="text-neutral-500 font-bold uppercase">Processor:</span>
                            <span className="font-bold text-neutral-900 text-right">{rig.specs.cpu}</span>
                          </div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/60">
                            <span className="text-neutral-500 font-bold uppercase">Graphics:</span>
                            <span className="font-bold text-amber-600 text-right">{rig.specs.gpu}</span>
                          </div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/60">
                            <span className="text-neutral-500 font-bold uppercase">Memory:</span>
                            <span className="font-bold text-neutral-900 text-right">{rig.specs.ram}</span>
                          </div>
                          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/60">
                            <span className="text-neutral-500 font-bold uppercase">Storage:</span>
                            <span className="font-bold text-neutral-900 text-right">{rig.specs.storage}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 font-bold uppercase">Power & Case:</span>
                            <span className="font-bold text-neutral-900 text-right">{rig.specs.psu}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Action Buttons */}
                      <div className="pt-4 border-t border-neutral-100">
                        <div className="flex items-baseline justify-between mb-4">
                          <div>
                            <span className="text-xs text-neutral-400 uppercase font-bold block">Complete Rig Price</span>
                            <span className="text-2xl font-black text-neutral-950">{rig.price}</span>
                          </div>
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                            ✓ Plug & Play Ready
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            onClick={() => handleAddToCart(rig)}
                            className={`h-12 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              isAdded
                                ? 'bg-emerald-500 text-white'
                                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300'
                            }`}
                          >
                            {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                            <span>{isAdded ? 'Added' : 'Add to Cart'}</span>
                          </button>

                          <button
                            onClick={() => handleCustomQuote(rig)}
                            className="h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 flex items-center justify-center text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                          >
                            <span>Customize on WA</span>
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
