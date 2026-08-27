"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { Wrench, ShieldCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/redesign/Icons';

const REPAIR_SERVICES = [
  {
    title: "Screen & OLED Display Replacement",
    description: "Original Super Retina, AMOLED & IPS display replacements with TrueTone restoration and 100% touch sensitivity.",
    duration: "45 - 60 Minutes",
    warranty: "90 Days Warranty",
    iconColor: "bg-blue-100 text-blue-700",
    estCost: "From ₹1,499",
  },
  {
    title: "Battery Replacement (100% Health)",
    description: "High-density certified Li-ion batteries with official battery health percentage reading and zero-drain calibration.",
    duration: "30 Minutes",
    warranty: "6 Months Warranty",
    iconColor: "bg-emerald-100 text-emerald-700",
    estCost: "From ₹999",
  },
  {
    title: "Motherboard & Chip-Level IC Repair",
    description: "Advanced microscope micro-soldering, short-circuit diagnostics, PMIC replacement, and no-power resurrection.",
    duration: "24 - 48 Hours",
    warranty: "90 Days Warranty",
    iconColor: "bg-purple-100 text-purple-700",
    estCost: "From ₹2,499",
  },
  {
    title: "Water / Liquid Damage Treatment",
    description: "Ultrasonic chemical cleaning, corrosion neutralization, and component level tracing to save your critical data.",
    duration: "Same Day / 24h",
    warranty: "Tested Safe",
    iconColor: "bg-cyan-100 text-cyan-700",
    estCost: "From ₹1,299",
  },
  {
    title: "Laptop Keyboard & Trackpad Repair",
    description: "MacBook butterfly/scissor switches, backlit gaming keyboards, and multi-touch trackpad replacements.",
    duration: "2 - 4 Hours",
    warranty: "6 Months Warranty",
    iconColor: "bg-amber-100 text-amber-700",
    estCost: "From ₹1,499",
  },
  {
    title: "Data Recovery & OS Re-installation",
    description: "Corrupted NVMe/SSD data retrieval, macOS & Windows 11 clean installations, driver optimization, and malware cleanup.",
    duration: "2 - 3 Hours",
    warranty: "Data Safe",
    iconColor: "bg-rose-100 text-rose-700",
    estCost: "From ₹799",
  },
];

export default function RepairsPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  const handleWhatsAppBooking = (serviceName) => {
    const text = encodeURIComponent(
      `Hello TecnoMart Service Center! 🔧 I need assistance with "${serviceName}" for my device. Please share repair estimate and booking slot.`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            {/* Header Banner */}
            <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                HYDERABAD'S PREMIER TECH SERVICE HUB
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="FAST. RELIABLE. EXPERT REPAIRS."
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2">
                Certified hardware engineers, ESD-safe cleanroom laboratory, genuine parts, and transparent upfront pricing in Tolichowki, Hyderabad.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Quick Action Booking Card */}
            <div className="rounded-3xl bg-neutral-950 text-white p-6 sm:p-12 mb-10 sm:mb-14 border border-neutral-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-3">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    FREE DIAGNOSIS • 45-MIN EXPRESS TURNAROUND
                  </span>
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white uppercase">
                    Book A Repair Slot Or Free Pickup
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                    Get an instant estimate, doorstep device pickup across Hyderabad, and track your repair status live via WhatsApp.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <button
                    onClick={() => setIsRepairOpen(true)}
                    className="w-full min-h-[48px] bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book Repair Slot</span>
                  </button>
                  <a
                    href="https://wa.me/919010667726?text=Hi%20TecnoMart!%20I%20want%20to%20get%20a%20repair%20quote%20for%20my%20device."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full min-h-[48px] bg-white/10 hover:bg-white/20 active:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Get Instant Quote</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Repair Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
              {REPAIR_SERVICES.map((srv, idx) => (
                <BlurRevealBox key={srv.title} delay={idx * 0.06} yOffset={20}>
                  <div className="group h-full bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Icon & Est Cost */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${srv.iconColor}`}>
                          <Wrench className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                          {srv.estCost}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-neutral-600 font-medium leading-relaxed mb-4 sm:mb-5">
                        {srv.description}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-neutral-100">
                      <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500 mb-3.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {srv.duration}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-600">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {srv.warranty}
                        </span>
                      </div>

                      <button
                        onClick={() => handleWhatsAppBooking(srv.title)}
                        className="w-full min-h-[44px] rounded-xl bg-neutral-100 hover:bg-amber-500 active:bg-amber-500 hover:text-neutral-950 active:text-neutral-950 text-neutral-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                      >
                        <span>Book This Service</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                </BlurRevealBox>
              ))}
            </div>

            {/* Why TecnoMart Service Center */}
            <div className="p-6 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200">
              <h3 className="text-lg sm:text-xl font-black text-neutral-950 uppercase mb-6 text-center">
                Our Service Center Promise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">100% Genuine Parts</h4>
                    <p className="text-neutral-500 leading-relaxed">Direct OEM components matching factory specifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">Zero Data Loss</h4>
                    <p className="text-neutral-500 leading-relaxed">Safe privacy protocols guaranteeing complete data secrecy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">No Fix, No Fee</h4>
                    <p className="text-neutral-500 leading-relaxed">If we cannot fix your device issue, you pay ₹0 diagnosis charge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">90-Day Warranty</h4>
                    <p className="text-neutral-500 leading-relaxed">Hassle-free replacement warranty on all replaced hardware parts.</p>
                  </div>
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
