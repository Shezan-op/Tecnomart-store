"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { Building2, ShieldCheck, FileText, Users, Laptop, Headphones, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/redesign/Icons';

export default function CorporatePage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('Bulk Laptops (10+ units)');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello TecnoMart Corporate Sales! 🏢\n- Company: ${companyName}\n- Contact: ${contactPerson}\n- Email: ${email}\n- Requirement: ${requirement}\n\nPlease share B2B corporate quotation with GST tax invoice.`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-10 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                B2B • BULK PROCUREMENT • IT INFRASTRUCTURE
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="TECNOMART FOR BUSINESS"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mt-2">
                Equip your startup or enterprise with volume discounts on MacBooks, ThinkPads, Custom Workstations, and dedicated IT fleet maintenance in Hyderabad.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Corporate Banner & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
              
              {/* Left Info Column (Col 7) */}
              <div className="lg:col-span-7 bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
                    WHY CORPORATES TRUST TECNOMART
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase">
                    Enterprise IT Sourcing Made Seamless
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">18% GST Input Tax Credit (ITC)</strong>
                        <span>Valid GST compliant invoices to maximize your company tax savings.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Volume Tiered Pricing</strong>
                        <span>Direct tier discounts for orders above 5, 20, and 50+ units.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Priority Corporate AMC & Support</strong>
                        <span>4-hour turnaround on hardware repairs and loaner replacement laptops.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Trusted by 150+ Hyderabad IT startups & studios</span>
                  <span className="font-bold text-amber-400">Jubilee Hills Hub</span>
                </div>
              </div>

              {/* Right Form Column (Col 5) */}
              <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-neutral-950 uppercase mb-1">
                    Request Corporate RFQ
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mb-5">
                    Our corporate account manager will send a quotation within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Technologies Pvt Ltd"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full h-10 px-3.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="w-full h-10 px-3.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Official Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-10 px-3.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Procurement Requirement
                      </label>
                      <select
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full h-10 px-3 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium shadow-xs"
                      >
                        <option value="Bulk Laptops (10+ units)">Bulk Laptops (10+ units)</option>
                        <option value="MacBook Fleet for Developers">MacBook Fleet for Developers</option>
                        <option value="AI / 3D Render Workstations">AI / 3D Render Workstations</option>
                        <option value="Monitors & Ergonomic Accessories">Monitors & Ergonomic Accessories</option>
                        <option value="Corporate Device AMC & Repairs">Corporate Device AMC & Repairs</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Send RFQ on WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </main>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
