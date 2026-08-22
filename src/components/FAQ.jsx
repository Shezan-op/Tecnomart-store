"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Why choose TecnoMart?",
    a: "Every device is backed by Spectrum's 17-year operational legacy — TecnoMart is Spectrum's retail storefront, est. 2009. We run rigorous 90-point diagnostic benchmarks on every unit, provide direct 12-month hardware warranties on refurbished devices, 3-year warranties on custom PC builds, and offer instant on-site board-level repairs in Hyderabad."
  },
  {
    q: "What is TecnoMart?",
    a: "TecnoMart is Hyderabad's specialized destination for enterprise laptops, flagship smartphones, and bespoke custom PC rigs. We combine authentic OEM sourcing, transparent pricing, and direct technician support."
  },
  {
    q: "Are the refurbished phones and laptops actually reliable?",
    a: "Yes. Every device is tested by senior hardware engineers before entering our inventory. We check battery cycle counts, display uniformities, motherboard voltages, and thermal curves. If it fails even one checkpoint, we don't sell it."
  },
  {
    q: "What if hardware fails after purchase?",
    a: "We provide comprehensive 12-month hardware protection on certified refurbished machines, 3-year doorstep warranty on custom PC builds, 1-year coverage on accessories, and 90-day service warranty on repairs. If an issue occurs, our in-house lab handles it directly without endless delays."
  },
  {
    q: "Do you offer EMI financing or trade-in?",
    a: "Yes. We support 0% No-Cost EMI across major debit and credit cards, as well as instant doorstep or in-store valuation for your existing hardware trade-ins."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative pt-10 pb-24 bg-black overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/05 blur-[140px] rounded-full pointer-events-none" />

      {/* Strictly bounded centered column matching navbar width */}
      <div className="w-full max-w-[780px] mx-auto px-5 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-5 h-px bg-[#FDE047]" />
              Support & Transparency
              <span className="inline-block w-5 h-px bg-[#FDE047]" />
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-hubot tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-mona text-slate-300 font-normal text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Everything you need to know about certified grading, warranty terms, and store pickups.
            </p>
          </motion.div>
        </div>

        {/* Spring-animated Accordion */}
        <div className="border-t border-white/10 mb-10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="border-b border-white/10"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FDE047] cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-hubot text-sm sm:text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-[#FDE047] font-semibold' : 'text-slate-100 font-medium group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex-shrink-0 p-1.5 rounded-md border transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#FDE047] border-[#FDE047]/40 bg-[#FDE047]/10'
                        : 'text-slate-400 border-white/10 group-hover:text-white group-hover:border-white/25'
                    }`}
                  >
                    <Plus size={14} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-slate-300 font-mona font-normal leading-relaxed text-xs sm:text-sm pr-8 border-l-2 border-[#FDE047]/30 pl-4 ml-0 mb-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Support Row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-center sm:text-left bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <h4 className="text-white font-bold font-hubot text-sm mb-1">
              Have a specific model inquiry or custom build question?
            </h4>
            <p className="text-xs font-mona text-slate-400 font-normal">
              Senior hardware engineers respond in &lt;15 minutes during store hours.
            </p>
          </div>
          <a href="tel:+919010667726" className="shrink-0">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FDE047] to-[#FACC15] text-black font-hubot font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-amber-500/15 cursor-pointer"
            >
              <MessageCircle size={14} />
              Talk to Technician
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
