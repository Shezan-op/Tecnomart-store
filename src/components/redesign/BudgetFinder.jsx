"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronDown } from 'lucide-react';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function BudgetFinder() {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [usage, setUsage] = useState('');

  const categories = [
    'Mobiles / Smartphones',
    'Laptops / MacBooks',
    'Gaming PCs',
    'Custom PC Build',
    'Refurbished Devices',
    'Device Repairs',
    'Accessories & Audio',
  ];

  const budgets = [
    'Under ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    'Above ₹2,00,000 (No budget constraint)',
  ];

  const usages = [
    'Gaming & Esports',
    'Coding & Development',
    'Office & Productivity',
    'Content Creation & 4K Video',
    'Student & Everyday Use',
  ];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phone = '919010667726';
    const text = encodeURIComponent(
      `Hello TecnoMart team! 🚀\nI would like a tech recommendation for my budget:\n- Category: ${category || 'Not specified'}\n- Budget: ${budget || 'Flexible'}\n- Usage: ${usage || 'General'}\n\nPlease share the best available models & prices at the Tolichowki store!`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="budget-finder" className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Light Beige Card Container matching Screenshot */}
        <BlurRevealBox duration={0.6} yOffset={20}>
          <div className="bg-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-amber-200/70 shadow-xs relative overflow-hidden">
            
            {/* Heading: BUDGET BATAO. BEST OPTION PAO. */}
            <div className="text-center mb-5 sm:mb-7">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight uppercase inline-flex flex-wrap items-center justify-center gap-1.5">
                <span className="text-neutral-950">BUDGET BATAO.</span>
                <span className="text-amber-500">BEST OPTION PAO.</span>
              </h2>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleWhatsAppSend} className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
              
              {/* Stacked Dropdowns on Mobile, 3-column on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
                
                {/* 1. Category Select */}
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-11 sm:h-12 bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 pr-9 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 appearance-none shadow-2xs transition-all"
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

                {/* 2. Budget Dropdown */}
                <div className="relative">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 sm:h-12 bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 pr-9 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 appearance-none shadow-2xs transition-all"
                  >
                    <option value="">Your Budget (₹)</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* 3. Usage Dropdown */}
                <div className="relative">
                  <select
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-full h-11 sm:h-12 bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 pr-9 rounded-xl outline-none border border-neutral-300 focus:border-amber-500 appearance-none shadow-2xs transition-all"
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

              </div>

              {/* Full Width Gold WhatsApp Button matching Screenshot */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-11 sm:h-12 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>TELL US ON WHATSAPP</span>
                </motion.button>
              </div>

              {/* Footnote matching Screenshot */}
              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs text-neutral-600 font-medium pt-1">
                <span className="text-emerald-600">💬</span>
                <span>Our experts will suggest the best options within your budget.</span>
              </div>

            </form>

          </div>
        </BlurRevealBox>

      </div>
    </section>
  );
}
