"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import MobileBottomBar from '@/components/redesign/MobileBottomBar';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Product Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello TecnoMart! 👋\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Subject: ${formData.subject}\n- Message: ${formData.message}`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent("Tecno Mart Opposite Fortune Toyota Service Center 7 Tombs Road Tolichowki Hyderabad");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

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
                GET IN TOUCH • VISIT OUR STORE
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="CONTACT TECNOMART"
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-xs sm:text-base text-neutral-600 mt-2 sm:mt-3">
                Have a question about product stock, custom PC builds, or repair appointments? We are here to help 7 days a week.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-2.5 sm:mt-3 rounded-full" />
            </div>

            {/* Main Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12 sm:mb-16">
              
              {/* Left Contact Information (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 space-y-5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

                  <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight">
                    Store &amp; Service Center
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Tecno Mart Store &amp; Service Hub</strong>
                        <span>Opposite Fortune Toyota Service Center, 7 Tombs Road, Tolichowki, Hyderabad, Telangana – 500008</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Phone Support</strong>
                        <a href="tel:+919010667726" className="hover:text-amber-400 transition-colors">+91 90106 67726</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Email Inquiries</strong>
                        <a href="mailto:support@tecnomart.in" className="hover:text-amber-400 transition-colors">support@tecnomart.in</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Store Working Hours</strong>
                        <span>Monday – Sunday: 10:00 AM – 9:30 PM (All 7 Days Open)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800">
                    <a
                      href="https://wa.me/919010667726"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase text-amber-400 hover:text-amber-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Directly with a Tech Specialist &rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Interactive Form (Col 7) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-black uppercase text-neutral-950 tracking-tight mb-2">
                  Drop Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                  Have questions about pricing, bulk corporate orders, or same-day repair availability? Fill out this quick form.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-4 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-amber-500 focus:bg-white text-neutral-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 px-4 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-amber-500 focus:bg-white text-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Subject / Department
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-11 px-4 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-amber-500 focus:bg-white text-neutral-900 transition-colors cursor-pointer"
                    >
                      <option value="Product Inquiry">Product Inquiry (Mobiles &amp; Laptops)</option>
                      <option value="PC Custom Build Consultation">PC Custom Build Consultation</option>
                      <option value="Doorstep Repair Booking">Doorstep Repair Booking</option>
                      <option value="Corporate / Bulk Order">Corporate / Bulk Order</option>
                      <option value="Other Question">Other Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you're looking for or describe your device issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-amber-500 focus:bg-white text-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>

            {/* Map Section */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100 p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="text-base sm:text-lg font-black text-neutral-950 uppercase">Find Us in Tolichowki</h4>
                <p className="text-xs text-neutral-500">Opposite Fortune Toyota Service Center on 7 Tombs Road, Tolichowki.</p>
              </div>
              <button
                onClick={openGoogleMaps}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 active:bg-neutral-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </button>
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
