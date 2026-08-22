"use client";
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Zap from 'lucide-react/dist/esm/icons/zap';

export default function CustomSetupPromo() {
  return (
    <section className="relative py-24 sm:py-32 text-white overflow-hidden" id="custom-build">
      
      {/* Soft atmospheric ambient glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-amber-500/06 blur-[170px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        
        {/* Eyebrow */}
        <motion.p
          className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
          Custom PC Builds
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
        </motion.p>

        {/* Giant Headline */}
        <motion.h2 
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-hubot tracking-tight leading-[1.08] mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Dream it. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-amber-200 to-yellow-400">
            We engineer it.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="font-mona text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From compact SFF powerhouses to multi-GPU machine learning workstations. Hand-assembled, custom-sleeved, and burn-in certified in Hyderabad.
        </motion.p>

        {/* Trust Specs Strip */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 text-xs sm:text-sm font-mona font-medium text-slate-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#FDE047]" />
            <span>Silicon &amp; Lane Binning</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench size={16} className="text-[#FDE047]" />
            <span>72h MemTest86 &amp; Thermal Soak</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-[#FDE047]" />
            <span>3-Year Doorstep Warranty on Custom Builds</span>
          </div>
        </motion.div>

        {/* Action Button & Technician Direct Call */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/build-your-setup">
            <button type="button" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-amber-400 text-black font-hubot font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2.5 group cursor-pointer">
              Launch 3D Configurator
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="tel:+919010667726" className="text-xs font-mona text-slate-400 hover:text-white transition-colors underline underline-offset-4 mt-2">
            Or speak directly with a workstation technician →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
