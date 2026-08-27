"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText } from '@/components/redesign/BlurReveal';
import Configurator from '@/components/redesign/Configurator';

export default function PCBuildsConfiguratorPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-20 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            {/* Header Title & Intro */}
            <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                SMART RIG CONFIGURATOR &amp; RECOMMENDATION ENGINE
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="BUILD YOUR DREAM PC"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2">
                Click your use case and performance tier to automatically generate a 100% compatible, balanced build with instant WhatsApp quotation and live platform toggling.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Smart Configurator Interactive Engine */}
            <Configurator />

          </div>
        </main>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
