"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText } from '@/components/redesign/BlurReveal';

export default function PrivacyPolicyPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950 pb-16 lg:pb-0">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-8 sm:py-16">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8 sm:mb-10 text-center">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                LEGAL &amp; COMPLIANCE
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="PRIVACY POLICY"
                  className="text-2xl sm:text-4xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2">
                Last updated: February 2025 • Tecno Mart Technologies Pvt Ltd
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-5 sm:space-y-6 bg-neutral-50/60 p-5 sm:p-8 rounded-3xl border border-neutral-200">
              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">1. Information We Collect</h2>
                <p>
                  At TecnoMart, we collect personal information that you provide to us when booking a repair, placing an order for smartphones, custom PCs, refurbished hardware, or requesting corporate quotations. This includes your name, phone number, email address, physical delivery address, and device diagnostic logs.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">2. Device Data Secrecy During Repairs</h2>
                <p>
                  We adhere to strict data privacy protocols. Our certified engineers never access, copy, or browse personal files, photos, messages, or sensitive information on customer devices submitted for hardware repair, screen replacement, or battery upgrades. Customers are encouraged to backup data prior to servicing where possible.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">3. How We Use Your Information</h2>
                <p>
                  Your information is utilized solely to process your orders, schedule doorstep pickup/delivery, update repair status via WhatsApp/SMS notifications, issue GST tax invoices, and facilitate manufacturer warranty claims. We do not sell or rent your personal data to third parties.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">4. Payment Security</h2>
                <p>
                  All online payments, UPI transactions, and credit card processing are routed through RBI-authorized payment gateways featuring 256-bit SSL encryption. TecnoMart does not store sensitive credit card numbers or CVVs on our servers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base sm:text-lg font-black text-neutral-950 uppercase">5. Contact Our Privacy Officer</h2>
                <p>
                  For any privacy inquiries or to request deletion of your account records, please contact us at <a href="mailto:privacy@tecnomart.in" className="text-amber-600 font-bold underline">privacy@tecnomart.in</a> or visit our store in Jubilee Hills, Hyderabad.
                </p>
              </section>
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
