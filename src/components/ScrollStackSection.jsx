"use client";
import React from "react";
import Laptop from 'lucide-react/dist/esm/icons/laptop';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import Headphones from 'lucide-react/dist/esm/icons/headphones';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Flame from 'lucide-react/dist/esm/icons/flame';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';

const STACK_CARDS = [
  {
    num: "01",
    icon: Laptop,
    badge: "Custom Rigs & Enterprise Laptops",
    category: "Laptops & PC Setups",
    heading: "Want to get the best laptop and PC setup?",
    desc: "We engineer high-performance liquid-cooled rigs and curate tier-1 enterprise MacBooks, ThinkPads, and gaming machines. Every unit undergoes rigorous 90-point diagnostic benchmarks, voltage stability tests, and thermal stress-testing before delivery.",
    accentColor: "#FDE047",
    glowColor: "rgba(253, 224, 71, 0.12)",
    borderColor: "rgba(253, 224, 71, 0.22)",
    cardBg: "linear-gradient(145deg, #18160c 0%, #111008 50%, #0a0905 100%)",
    highlights: [
      { icon: Cpu, text: "Custom Liquid-Cooled & Overclocked Rigs" },
      { icon: ShieldCheck, text: "90-Point Thermal & Voltage Stress Benchmark" },
      { icon: Zap, text: "Tier-1 Enterprise MacBooks & ThinkPads" },
      { icon: CheckCircle2, text: "Pre-Configured & Ready-To-Deploy" }
    ],
    contactMessage: "Hi TecnoMart, I want to get the best laptop and PC setup."
  },
  {
    num: "02",
    icon: Smartphone,
    badge: "iPhones & Galaxy Flagships",
    category: "Certified Flagship Mobiles",
    heading: "Premium smartphones engineered for your lifestyle.",
    desc: "Looking for top-tier iPhones or Samsung Galaxy flagships? Explore sealed new arrivals and certified pre-owned perfection with genuine 100% battery health, 12-month replacement warranty on refurbished phones, and instant 0% No-Cost EMI options.",
    accentColor: "#FDE047",
    glowColor: "rgba(253, 224, 71, 0.12)",
    borderColor: "rgba(253, 224, 71, 0.22)",
    cardBg: "linear-gradient(145deg, #16150e 0%, #100f0a 50%, #090805 100%)",
    highlights: [
      { icon: Sparkles, text: "Sealed New & Pristine Certified Pre-Owned" },
      { icon: ShieldCheck, text: "100% Genuine Battery Health Guaranteed" },
      { icon: Zap, text: "12-Month Replacement Warranty Included" },
      { icon: CheckCircle2, text: "Instant 0% No-Cost EMI & Exchange Bonus" }
    ],
    contactMessage: "Hi TecnoMart, I am looking for certified flagship mobile deals."
  },
  {
    num: "03",
    icon: Headphones,
    badge: "Tactile Keyboards & Studio Audio",
    category: "Studio & Gaming Accessories",
    heading: "Tactile mechanical keyboards & studio peripherals.",
    desc: "Elevate your battlestation with color-accurate 4K monitors, custom mechanical switches, audiophile headsets, and ergonomic hardware built to withstand intense marathon development and gaming sessions.",
    accentColor: "#FDE047",
    glowColor: "rgba(253, 224, 71, 0.12)",
    borderColor: "rgba(253, 224, 71, 0.22)",
    cardBg: "linear-gradient(145deg, #18160c 0%, #111008 50%, #0a0905 100%)",
    highlights: [
      { icon: Flame, text: "Custom Mechanical Switches & Keycaps" },
      { icon: Zap, text: "Color-Accurate 4K HDR Studio Monitors" },
      { icon: Cpu, text: "Audiophile-Grade DACs & Hi-Res Headsets" },
      { icon: CheckCircle2, text: "Ergonomic Marathon Battlestation Hardware" }
    ],
    contactMessage: "Hi TecnoMart, I want to explore studio and gaming accessories."
  },
  {
    num: "04",
    icon: Wrench,
    badge: "Micro-Soldering & Precision Lab",
    category: "Chip-Level Repairs & Diagnostics",
    heading: "Hyderabad’s trusted chip-level repair lab.",
    desc: "Facing logic board failure, liquid damage, GPU artifacting, or broken OLED displays? Our senior hardware mechanics provide 15-minute diagnostic assessments and precision micro-soldering with 100% genuine OEM parts.",
    accentColor: "#FDE047",
    glowColor: "rgba(253, 224, 71, 0.12)",
    borderColor: "rgba(253, 224, 71, 0.22)",
    cardBg: "linear-gradient(145deg, #16150e 0%, #100f0a 50%, #090805 100%)",
    highlights: [
      { icon: Zap, text: "15-Minute Transparent Diagnostic Assessment" },
      { icon: Cpu, text: "BGA Reballing & Micro-Soldering Precision" },
      { icon: ShieldCheck, text: "100% Genuine OEM Factory Replacement Parts" },
      { icon: CheckCircle2, text: "90-Day Post-Repair Service Guarantee" }
    ],
    contactMessage: "Hi TecnoMart, I need hardware repair and diagnostic assistance."
  }
];

export default function ScrollStackSection() {
  return (
    <section 
      className="relative bg-[#060810] text-white pt-20 sm:pt-28 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 overflow-visible w-full"
      id="offerings"
      style={{ contain: "paint" }}
    >
      {/* Background ambient lighting - optimized GPU accelerated radial gradients */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(253, 224, 71, 0.15) 0%, rgba(6, 8, 16, 0) 70%)"
        }}
      />

      {/* Section Header (Centered) */}
      <div className="text-center mb-12 sm:mb-20 max-w-3xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FDE047]/30 bg-[#FDE047]/10 mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#FDE047] animate-pulse" />
          <span className="font-hubot text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#FDE047]">
            Core Specializations
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-hubot tracking-tight text-white mb-4 leading-tight">
          What We <span className="text-[#FDE047] drop-shadow-[0_0_24px_rgba(253,224,71,0.3)]">Deliver</span>
        </h2>
        
        <p className="font-mona text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Four specialized verticals backed by 17 years of diagnostic mastery, transparent pricing, and instant dedicated support.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative max-w-5xl mx-auto">
        {STACK_CARDS.map((card, index) => {
          const Icon = card.icon;
          const whatsappUrl = `https://wa.me/919010667726?text=${encodeURIComponent(card.contactMessage)}`;
          // Staggered sticky top offsets so each card top header remains visible as they stack
          const stickyTopMobile = `calc(4.5rem + ${index * 20}px)`;
          const stickyTopDesktop = `calc(5.5rem + ${index * 26}px)`;

          return (
            <div
              key={card.num}
              className="sticky w-full mb-10 sm:mb-16 last:mb-0 transition-transform duration-200 ease-out"
              style={{
                top: `var(--sticky-top, ${stickyTopDesktop})`,
                zIndex: index + 1,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* CSS Custom Property for responsive sticky top */}
              <style jsx>{`
                @media (max-width: 640px) {
                  div[style*="--sticky-top"] {
                    --sticky-top: ${stickyTopMobile} !important;
                  }
                }
                @media (min-width: 641px) {
                  div[style*="--sticky-top"] {
                    --sticky-top: ${stickyTopDesktop} !important;
                  }
                }
              `}</style>

              <div
                className="relative w-full rounded-2xl sm:rounded-3xl border p-6 sm:p-10 md:p-12 lg:p-14 overflow-hidden transition-all duration-300 group hover:border-[#FDE047]/40 shadow-[0_-12px_32px_rgba(0,0,0,0.65),0_20px_50px_rgba(0,0,0,0.8)]"
                style={{
                  background: card.cardBg,
                  borderColor: card.borderColor,
                }}
              >
                {/* Optimized Pure CSS Corner Glow */}
                <div 
                  className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${card.glowColor} 0%, rgba(0,0,0,0) 70%)`
                  }}
                />

                {/* Giant Full-Bleed Watermark Number */}
                <div 
                  className="absolute top-2 right-4 sm:right-10 md:right-14 text-7xl sm:text-9xl md:text-[180px] font-black font-hubot select-none pointer-events-none opacity-[0.06] tracking-tighter leading-none"
                  style={{ color: card.accentColor }}
                >
                  {card.num}
                </div>

                {/* Card Content */}
                <div className="relative z-10 w-full flex flex-col justify-between">
                  
                  {/* Top Bar: Icon, Category Badge & Card Number Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(253,224,71,0.3)]"
                        style={{
                          backgroundColor: "rgba(253, 224, 71, 0.1)",
                          borderColor: "rgba(253, 224, 71, 0.3)",
                          color: card.accentColor,
                        }}
                      >
                        <Icon size={22} className="text-[#FDE047]" />
                      </div>
                      <div>
                        <span className="font-hubot text-xs font-bold uppercase tracking-wider text-[#FDE047] block">
                          {card.category}
                        </span>
                        <span className="font-mona text-[11px] sm:text-xs text-slate-400 font-medium">
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-lg border border-white/10 bg-white/5 font-hubot text-xs sm:text-sm font-black text-slate-300 tracking-wider">
                      {card.num} / 04
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-hubot tracking-tight leading-snug mb-4 max-w-3xl">
                    {card.heading}
                  </h3>

                  {/* Narrative Description */}
                  <p className="font-mona text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mb-6 sm:mb-8 font-normal">
                    {card.desc}
                  </p>

                  {/* Key Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8 max-w-3xl">
                    {card.highlights.map((item, hIdx) => {
                      const HIcon = item.icon;
                      return (
                        <div 
                          key={hIdx}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/5 text-slate-200 text-xs sm:text-sm font-mona font-medium"
                        >
                          <HIcon size={15} className="text-[#FDE047] shrink-0" />
                          <span className="truncate">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-white/10">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#fde047] to-[#facc15] text-black font-hubot font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_24px_rgba(253,224,71,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <MessageCircle size={16} />
                      <span>Contact Now</span>
                      <ArrowRight size={15} />
                    </a>

                    <a
                      href="tel:+919010667726"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-hubot font-semibold text-xs sm:text-sm tracking-wider transition-all cursor-pointer"
                    >
                      <PhoneCall size={15} className="text-[#FDE047]" />
                      <span>Call Desk</span>
                      <span className="text-slate-400 font-mono text-xs hidden sm:inline">+91 90106 67726</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
