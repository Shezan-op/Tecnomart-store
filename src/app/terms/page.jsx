"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText } from '@/components/redesign/BlurReveal';

export default function TermsPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-12 sm:py-16">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-10 text-center">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                LEGAL & WARRANTY
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="TERMS & CONDITIONS"
                  className="text-3xl sm:text-4xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2">
                Warranty Policy, Service SLA, & Return Guidelines • Tecno Mart
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-6">
              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">1. Product Authenticity & Manufacturer Warranty</h2>
                <p>
                  All brand-new retail products (smartphones, laptops, components, peripherals) sold by TecnoMart are genuine, sealed units backed by direct brand authorized warranty across India. Warranty terms and durations are governed by the respective manufacturer (Apple, Samsung, ASUS, NVIDIA, Dell, Lenovo, etc.).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">2. Certified Refurbished Warranty & Replacement</h2>
                <p>
                  Refurbished hardware items carry a <strong>1-Year TecnoMart Hardware Warranty</strong> and an initial <strong>7-Day Replacement Guarantee</strong> for functional defects. Warranty excludes accidental drops, liquid spills, unauthorized third-party tampering, or intentional physical breakage occurring after delivery.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">3. Repair Service SLA & 90-Day Coverage</h2>
                <p>
                  Screens, batteries, charging ports, and micro-soldered IC replacements performed at our Jubilee Hills service center include a <strong>90-Day Functional Warranty</strong> on the replaced component. In the rare event a replaced component fails under normal usage within 90 days, we repair or replace the part at zero cost.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">4. Custom PC Builds & Stress Testing</h2>
                <p>
                  All custom rigs are subject to 12 hours of thermal and memory stress testing prior to dispatch. Individual components retain their respective manufacturer warranties (typically 3 to 10 years). TecnoMart provides complimentary lifetime assembly and cable troubleshooting support.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">5. Return & Cancellation Policy</h2>
                <p>
                  Orders can be cancelled before physical dispatch or component unsealing. For delivered goods, returns are accepted within 7 days in original sealed condition. Custom-built PC systems with opened seal components are eligible for technical component replacement under warranty rather than full cancellation once assembled.
                </p>
              </section>
            </div>

          </div>
        </main>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
