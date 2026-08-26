"use client";

import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function BudgetFinder() {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [usage, setUsage] = useState('');

  const categories = [
    'Mobiles',
    'Laptops',
    'Gaming PCs',
    'Custom PC Build',
    'Refurbished Laptops/Mobiles',
    'Device Repair',
    'Accessories',
  ];

  const usages = [
    'Gaming & Esports',
    'Office & Productivity',
    'Coding & Software Development',
    'Student & Online Classes',
    'Video Editing & 3D Rendering',
    'Daily Casual Use',
    'Corporate / Bulk Purchase',
  ];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = '919010667726';
    const text = encodeURIComponent(
      `Hello TecnoMart team! 🚀\nI'm looking for the best tech recommendation:\n- Category: ${category || 'Any'}\n- Budget: ₹${budget || 'Flexible'}\n- Usage: ${usage || 'General'}\n\nPlease suggest the best options for me!`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="budget-finder" className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Pill Banner Container */}
        <div className="bg-neutral-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-neutral-800 relative overflow-hidden">
          
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase inline-flex flex-wrap items-center justify-center gap-2">
              <span className="text-amber-500">BUDGET BATAO.</span>
              <span className="text-white">BEST OPTION PAO.</span>
            </h2>
          </div>

          {/* Form Inputs Grid */}
          <form onSubmit={handleWhatsAppSend} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              
              {/* Category Select Dropdown */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-12 bg-white text-neutral-800 text-sm font-medium px-4 pr-10 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 appearance-none shadow-sm transition-all"
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Budget Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Budget (₹)"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-12 bg-white text-neutral-800 text-sm font-medium px-4 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 shadow-sm placeholder-neutral-500 transition-all"
                />
              </div>

              {/* Usage Select Dropdown */}
              <div className="relative">
                <select
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  className="w-full h-12 bg-white text-neutral-800 text-sm font-medium px-4 pr-10 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 appearance-none shadow-sm transition-all"
                >
                  <option value="">Usage</option>
                  {usages.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* WhatsApp Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>TELL US ON WHATSAPP</span>
                </button>
              </div>

            </div>

            {/* Microcopy Below */}
            <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-neutral-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Our experts will suggest the best options within your budget.</span>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
