"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function GamingBanner({ onExploreGaming }) {
  return (
    <section id="gaming" className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Gaming Banner Container with Smooth Scroll Entrance */}
        <BlurRevealBox duration={0.8} yOffset={30}>
          <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-950 overflow-hidden border border-neutral-800/80 shadow-2xl">
            
            {/* Background Ambient Gold Lights & Breathing Glow */}
            <motion.div
              animate={{ opacity: [0.15, 0.28, 0.15], scale: [1, 1.08, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{ opacity: [0.12, 0.24, 0.12], scale: [1, 1.06, 1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-600 rounded-full blur-3xl pointer-events-none"
            />
            
            {/* Subtle Tech Grid Overlay */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="techGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="2,4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#techGrid2)" />
              </svg>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 z-10 text-left">
                
                {/* Tagline with Text Blur Reveal */}
                <div>
                  <BlurRevealText
                    text="BUILT FOR VICTORY."
                    className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase"
                    delay={0.1}
                  />
                </div>

                {/* Main Headline with Text Blur Reveal */}
                <div>
                  <BlurRevealText
                    text="GAMING PCs"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none"
                    highlightWord="PCs"
                    highlightClass="text-amber-500"
                    delay={0.25}
                  />
                </div>

                {/* Description & Features */}
                <BlurRevealBox delay={0.4} yOffset={15}>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-neutral-300 font-medium">
                      High Performance. Ultimate Experience.
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                      Custom Builds <span className="text-amber-500 mx-1.5">|</span> Best Prices <span className="text-amber-500 mx-1.5">|</span> Expert Support
                    </p>
                  </div>
                </BlurRevealBox>

                {/* CTA Button */}
                <BlurRevealBox delay={0.55} yOffset={15}>
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onExploreGaming && onExploreGaming()}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-7 py-3.5 rounded-lg text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 cursor-pointer"
                    >
                      <span>EXPLORE GAMING PCS</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </motion.button>
                  </div>
                </BlurRevealBox>

              </div>

              {/* Right Visual Column (Liquid-cooled Custom Gaming PC) */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center"
                >
                  
                  {/* Gold Glow Behind Cabinet */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-amber-400/10 to-transparent rounded-full filter blur-2xl" />

                  {/* Gaming Cabinet Image */}
                  <div className="relative z-10 w-full transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_20px_35px_rgba(245,158,11,0.25)]">
                    <img
                      src={ASSETS.gamingBannerPc}
                      alt="Ultimate Liquid-Cooled Gaming PC Build"
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                    {/* Subtle Tech Emblem Badge on Chassis */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900/90 border border-amber-500/50 rounded-md backdrop-blur-sm flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                        RTX 40-SERIES READY
                      </span>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>

          </div>
        </BlurRevealBox>

      </div>
    </section>
  );
}
