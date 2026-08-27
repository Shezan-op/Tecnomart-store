"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Plus from 'lucide-react/dist/esm/icons/plus';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import { BlurRevealText } from './BlurReveal';

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
            <div className="mb-3">
              <BlurRevealText
                text="Frequently Asked Questions"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-hubot tracking-tight justify-center"
                delay={0.1}
              />
            </div>
            <p className="font-mona text-slate-300 font-normal text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Everything you need to know about certified grading, warranty terms, and store pickups.
            </p>
          </motion.div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  borderColor: isOpen ? 'rgba(253, 224, 71, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                  backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.015)'
                }}
              >
                {/* Clickable Header Button */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <span
                    className="font-hubot text-sm sm:text-base font-semibold text-white group-hover:text-[#FDE047] transition-colors leading-snug"
                    style={{ color: isOpen ? '#FDE047' : '#ffffff' }}
                  >
                    {faq.q}
                  </span>

                  {/* Smooth Rotating Indicator */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border"
                    style={{
                      borderColor: isOpen ? 'rgba(253, 224, 71, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                      backgroundColor: isOpen ? 'rgba(253, 224, 71, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      color: isOpen ? '#FDE047' : '#ffffff'
                    }}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <Plus size={16} />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-300 font-mona font-normal text-xs sm:text-sm leading-relaxed border-t border-white/05 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions? Quick WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://wa.me/919010667726?text=Hi%20TecnoMart,%20I%20have%20a%20question%20about%20your%20devices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-hubot uppercase tracking-wider text-slate-400 hover:text-[#FDE047] transition-colors py-2 px-4 rounded-xl border border-white/08 hover:border-[#FDE047]/30 bg-white/02"
          >
            <MessageCircle size={14} className="text-[#FDE047]" />
            <span>Have a different question? Chat on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
