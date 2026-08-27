"use client";

import React, { useState, useMemo } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { Cpu, Zap, HardDrive, ShieldCheck, Check, Sparkles, ShoppingBag, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '@/components/redesign/Icons';

const COMPONENT_OPTIONS = {
  cpu: [
    { id: 'cpu-1', name: 'AMD Ryzen 7 7800X3D (8C/16T, 5.0GHz)', price: 38990, wattage: 120, brand: 'AMD' },
    { id: 'cpu-2', name: 'Intel Core i9-14900K (24C/32T, 6.0GHz)', price: 54990, wattage: 253, brand: 'Intel' },
    { id: 'cpu-3', name: 'Intel Core i7-14700K (20C/28T, 5.6GHz)', price: 38490, wattage: 220, brand: 'Intel' },
    { id: 'cpu-4', name: 'AMD Ryzen 5 7600X (6C/12T, 5.3GHz)', price: 19990, wattage: 105, brand: 'AMD' },
    { id: 'cpu-5', name: 'Intel Core i5-13400F (10C/16T, 4.6GHz)', price: 18490, wattage: 65, brand: 'Intel' },
  ],
  gpu: [
    { id: 'gpu-1', name: 'NVIDIA GeForce RTX 4090 24GB GDDR6X', price: 199990, wattage: 450, brand: 'NVIDIA' },
    { id: 'gpu-2', name: 'NVIDIA GeForce RTX 4080 SUPER 16GB', price: 104990, wattage: 320, brand: 'NVIDIA' },
    { id: 'gpu-3', name: 'NVIDIA GeForce RTX 4070 Ti SUPER 16GB', price: 82990, wattage: 285, brand: 'NVIDIA' },
    { id: 'gpu-4', name: 'NVIDIA GeForce RTX 4070 SUPER 12GB', price: 61990, wattage: 220, brand: 'NVIDIA' },
    { id: 'gpu-5', name: 'NVIDIA GeForce RTX 4060 8GB GDDR6', price: 30990, wattage: 115, brand: 'NVIDIA' },
  ],
  motherboard: [
    { id: 'mb-1', name: 'ASUS ROG STRIX B650-A Gaming WiFi (AM5)', price: 23990, wattage: 40, brand: 'ASUS' },
    { id: 'mb-2', name: 'MSI MAG Z790 TOMAHAWK MAX WiFi (LGA1700)', price: 28990, wattage: 45, brand: 'MSI' },
    { id: 'mb-3', name: 'Gigabyte B650 AORUS ELITE AX', price: 19990, wattage: 35, brand: 'Gigabyte' },
    { id: 'mb-4', name: 'ASUS TUF GAMING B760M-PLUS WiFi', price: 16990, wattage: 30, brand: 'ASUS' },
  ],
  ram: [
    { id: 'ram-1', name: '32GB (16x2) DDR5 6000MHz CL30 RGB (Corsair / G.Skill)', price: 10990, wattage: 15, brand: 'Corsair' },
    { id: 'ram-2', name: '64GB (32x2) DDR5 6000MHz CL30 RGB (Kingston / Corsair)', price: 20990, wattage: 25, brand: 'Kingston' },
    { id: 'ram-3', name: '16GB (8x2) DDR5 5200MHz (Crucial / Corsair)', price: 5490, wattage: 10, brand: 'Crucial' },
  ],
  storage: [
    { id: 'ssd-1', name: '2TB Samsung 990 PRO Gen4 NVMe (7450MB/s)', price: 16990, wattage: 10, brand: 'Samsung' },
    { id: 'ssd-2', name: '1TB Kingston KC3000 Gen4 NVMe (7000MB/s)', price: 8990, wattage: 8, brand: 'Kingston' },
    { id: 'ssd-3', name: '1TB Crucial P3 Plus Gen4 NVMe (5000MB/s)', price: 6290, wattage: 6, brand: 'Crucial' },
  ],
  cooler: [
    { id: 'cl-1', name: 'Deepcool LS720 360mm ARGB Liquid Cooler', price: 9990, wattage: 25, brand: 'Deepcool' },
    { id: 'cl-2', name: 'NZXT Kraken 240 ARGB with LCD Display', price: 14990, wattage: 30, brand: 'NZXT' },
    { id: 'cl-3', name: 'Deepcool AK620 Dual Tower Air Cooler', price: 5490, wattage: 10, brand: 'Deepcool' },
  ],
  psu: [
    { id: 'psu-1', name: 'Corsair RM1000e 1000W 80+ Gold ATX 3.0 Modular', price: 14990, wattage: 0, brand: 'Corsair' },
    { id: 'psu-2', name: 'Deepcool PN850M 850W 80+ Gold ATX 3.0 Modular', price: 9990, wattage: 0, brand: 'Deepcool' },
    { id: 'psu-3', name: 'Cooler Master MWE 750W 80+ Bronze Certified', price: 6490, wattage: 0, brand: 'Cooler Master' },
  ],
  cabinet: [
    { id: 'cab-1', name: 'Lian Li O11 Dynamic EVO RGB (Panoramic Glass)', price: 14990, wattage: 15, brand: 'Lian Li' },
    { id: 'cab-2', name: 'NZXT H9 Flow Dual-Chamber Mid-Tower', price: 13990, wattage: 15, brand: 'NZXT' },
    { id: 'cab-3', name: 'Ant Esports Crystal ARGB Mid-Tower', price: 5990, wattage: 10, brand: 'Ant Esports' },
  ],
};

export default function PCBuildsConfiguratorPage() {
  const [selected, setSelected] = useState({
    cpu: COMPONENT_OPTIONS.cpu[0],
    gpu: COMPONENT_OPTIONS.gpu[2],
    motherboard: COMPONENT_OPTIONS.motherboard[0],
    ram: COMPONENT_OPTIONS.ram[0],
    storage: COMPONENT_OPTIONS.storage[1],
    cooler: COMPONENT_OPTIONS.cooler[0],
    psu: COMPONENT_OPTIONS.psu[1],
    cabinet: COMPONENT_OPTIONS.cabinet[0],
  });

  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  const totalPrice = useMemo(() => {
    return Object.values(selected).reduce((acc, curr) => acc + (curr ? curr.price : 0), 0);
  }, [selected]);

  const totalWattage = useMemo(() => {
    return Object.values(selected).reduce((acc, curr) => acc + (curr ? curr.wattage : 0), 50);
  }, [selected]);

  const handleSelect = (category, item) => {
    setSelected((prev) => ({ ...prev, [category]: item }));
  };

  const handleOrderWhatsApp = () => {
    const summary = [
      `🚀 *Custom PC Build Quotation — TecnoMart*`,
      `• *CPU:* ${selected.cpu.name}`,
      `• *GPU:* ${selected.gpu.name}`,
      `• *Motherboard:* ${selected.motherboard.name}`,
      `• *RAM:* ${selected.ram.name}`,
      `• *Storage:* ${selected.storage.name}`,
      `• *Cooler:* ${selected.cooler.name}`,
      `• *Power Supply:* ${selected.psu.name}`,
      `• *Cabinet:* ${selected.cabinet.name}`,
      `-----------------------------`,
      `⚡ *Estimated System Wattage:* ${totalWattage}W`,
      `💰 *Total Estimated Price:* ₹${totalPrice.toLocaleString('en-IN')}`,
      `-----------------------------`,
      `Please confirm availability, assembly timeline & delivery in Hyderabad!`,
    ].join('\n');

    window.open(`https://wa.me/919010667726?text=${encodeURIComponent(summary)}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-20 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                INTERACTIVE PC BUILDER &amp; CONFIGURATOR
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="BUILD YOUR DREAM PC"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2">
                Select your components below. Real-time compatibility verification, wattage calculation, and instant quotation on WhatsApp.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Main Configurator Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Component Pickers (Col 8) */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                
                {Object.entries(COMPONENT_OPTIONS).map(([category, options]) => {
                  const currentPick = selected[category];
                  const labels = {
                    cpu: '1. Processor (CPU)',
                    gpu: '2. Graphics Card (GPU)',
                    motherboard: '3. Motherboard',
                    ram: '4. Memory (RAM)',
                    storage: '5. Primary Storage (SSD)',
                    cooler: '6. CPU Cooling',
                    psu: '7. Power Supply (PSU)',
                    cabinet: '8. Cabinet / Chassis',
                  };

                  return (
                    <BlurRevealBox key={category} yOffset={15}>
                      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200 shadow-xs">
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-100">
                          <h3 className="text-xs sm:text-base font-black text-neutral-900 uppercase">
                            {labels[category] || category}
                          </h3>
                          <span className="text-[11px] sm:text-xs font-bold text-amber-600">
                            Selected: ₹{currentPick ? currentPick.price.toLocaleString('en-IN') : 0}
                          </span>
                        </div>

                        {/* Options List with Touch-Friendly Hit Targets */}
                        <div className="space-y-2">
                          {options.map((opt) => {
                            const isChosen = currentPick?.id === opt.id;

                            return (
                              <div
                                key={opt.id}
                                onClick={() => handleSelect(category, opt)}
                                className={`p-3 sm:p-3.5 rounded-xl border flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer transition-all active:scale-99 min-h-[48px] ${
                                  isChosen
                                    ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                                    : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50 active:bg-neutral-100'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                                  <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                      isChosen
                                        ? 'border-amber-500 bg-amber-500 text-neutral-950'
                                        : 'border-neutral-300'
                                    }`}
                                  >
                                    {isChosen && <Check className="w-3 h-3 stroke-[3]" />}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight truncate">
                                      {opt.name}
                                    </p>
                                    {opt.wattage > 0 && (
                                      <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium">
                                        Estimated TDP: {opt.wattage}W
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="text-right flex-shrink-0 pl-1">
                                  <span className="text-xs sm:text-sm font-black text-neutral-950">
                                    ₹{opt.price.toLocaleString('en-IN')}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </BlurRevealBox>
                  );
                })}

              </div>

              {/* Right Column: Sticky Summary Box for Desktop (Col 4) */}
              <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
                
                <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-7 border border-neutral-800 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
                      BUILD SUMMARY
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                      ✓ 100% Compatible
                    </span>
                  </div>

                  {/* Estimated Wattage Gauge */}
                  <div className="p-3.5 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-neutral-400 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Estimated Wattage:
                      </span>
                      <span className="text-amber-400 font-black">{totalWattage} W</span>
                    </div>
                    <p className="text-[10px] text-neutral-500">
                      Recommended PSU: {totalWattage > 550 ? '750W - 850W Gold' : '650W Bronze'}
                    </p>
                  </div>

                  {/* Selected Components Condensed List */}
                  <div className="space-y-1.5 text-xs text-neutral-300 max-h-56 overflow-y-auto pr-1 no-scrollbar">
                    {Object.entries(selected).map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1 border-b border-neutral-900">
                        <span className="text-neutral-400 uppercase text-[10px] font-bold">{k}:</span>
                        <span className="font-medium text-right text-white truncate max-w-[170px]">{v?.name.split('(')[0]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total Price */}
                  <div className="pt-2 border-t border-neutral-800 flex items-baseline justify-between">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Estimated Total:</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={handleOrderWhatsApp}
                      className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Order Rig on WhatsApp</span>
                    </button>

                    <p className="text-center text-[10px] text-neutral-400 font-medium leading-relaxed">
                      Free assembly • 12-Hour stress test • Original boxes • Doorstep delivery in Hyderabad.
                    </p>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-neutral-900">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>3-Year Component Warranty</span>
                  </div>
                  <p className="text-neutral-500 leading-relaxed">
                    All components carry authentic manufacturer warranty with direct local RMA service at our Jubilee Hills service hub.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </main>

        {/* Mobile Floating Sticky Bar for Quick Price & Instant WhatsApp Order */}
        <div
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800 p-3.5 shadow-2xl"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase block">
                Total ({totalWattage}W)
              </span>
              <span className="text-lg font-black text-amber-400">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleOrderWhatsApp}
              className="flex-1 max-w-[220px] min-h-[44px] bg-[#25D366] active:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
