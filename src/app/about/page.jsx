"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { ShieldCheck, Award, HeartHandshake, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const stats = [
    { number: "2016", label: "Founded in Hyderabad" },
    { number: "45,000+", label: "Happy Customers" },
    { number: "18,000+", label: "Devices Repaired" },
    { number: "4.8 / 5", label: "Google Star Rating" },
  ];

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                OUR JOURNEY • OUR VALUES • OUR PASSION
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="ABOUT TECNOMART"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2 sm:mt-3 leading-relaxed">
                Hyderabad's trusted destination for genuine smartphones, high-performance custom PCs, certified refurbished tech, and surgical repairs since 2016.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {stats.map((s, idx) => (
                <BlurRevealBox key={s.label} delay={idx * 0.06} yOffset={20}>
                  <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-50 border border-neutral-200 text-center hover:border-amber-400 hover:shadow-lg transition-all">
                    <span className="text-2xl sm:text-4xl font-black text-neutral-950 block mb-1">
                      {s.number}
                    </span>
                    <span className="text-[11px] sm:text-sm font-bold text-neutral-500">
                      {s.label}
                    </span>
                  </div>
                </BlurRevealBox>
              ))}
            </div>

            {/* Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-16">
              <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <span className="text-xs font-black tracking-widest text-amber-500 uppercase">
                  HOW WE STARTED
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-neutral-950 uppercase">
                  From Passionate PC Enthusiasts to Hyderabad's Trusted Tech Store
                </h2>
                <p>
                  TecnoMart began with a simple observation in 2016: finding authentic tech products, fair pricing, and trustworthy repair engineers under one roof was nearly impossible in the local retail market. Customers were forced to choose between overpriced showroom markups and unreliable grey-market repairs.
                </p>
                <p>
                  We established our flagship store Opposite Fortune Toyota Service Center, 7 Tombs Road, Tolichowki, with an uncompromising commitment: <strong>100% genuine parts, transparent diagnostics with upfront pricing, and personalized advice tailored to every customer's budget.</strong>
                </p>
                <p>
                  Today, over 45,000 students, developers, creative professionals, and esports gamers trust TecnoMart for their hardware upgrades and critical repairs.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
                    alt="TecnoMart Hardware Workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
                    <span className="text-xs font-bold text-white">
                      📍 Flagship Store &amp; Service Hub — 7 Tombs Road, Tolichowki, Hyderabad
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="p-6 sm:p-12 rounded-3xl bg-neutral-950 text-white mb-12 sm:mb-16">
              <h3 className="text-lg sm:text-2xl font-black text-center uppercase tracking-tight text-white mb-6 sm:mb-8">
                Our 4 Pillar Guarantee
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-xs text-neutral-300">
                <div className="space-y-1.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Authenticity Only</h4>
                  <p className="text-neutral-400 leading-relaxed">No clones, no duplicates. Sourced strictly through authorized distributors.</p>
                </div>
                <div className="space-y-1.5">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Certified Engineers</h4>
                  <p className="text-neutral-400 leading-relaxed">IPC-certified micro-soldering and Apple/Windows hardware specialists.</p>
                </div>
                <div className="space-y-1.5">
                  <HeartHandshake className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Honest Pricing</h4>
                  <p className="text-neutral-400 leading-relaxed">Zero hidden charges. Complete price transparency before touching any device.</p>
                </div>
                <div className="space-y-1.5">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Same-Day Action</h4>
                  <p className="text-neutral-400 leading-relaxed">Fast screen replacements and PC assembly completed within hours.</p>
                </div>
              </div>
            </div>

          </div>
        </main>

        <Footer />
        <MobileBottomBar onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
