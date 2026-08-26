"use client";

import React, { useState } from 'react';
import Header from '@/components/redesign/Header';
import Footer from '@/components/redesign/Footer';
import RepairModal from '@/components/redesign/RepairModal';
import SmoothScrollProvider from '@/components/redesign/SmoothScrollProvider';
import ScrollProgress from '@/components/redesign/ScrollProgress';
import { BlurRevealText, BlurRevealBox } from '@/components/redesign/BlurReveal';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/redesign/Icons';

export default function ContactPage() {
  const [isRepairOpen, setIsRepairOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello TecnoMart! 👋\n- Name: ${name}\n- Phone: ${phone}\n- Message: ${message}`
    );
    window.open(`https://wa.me/919010667726?text=${text}`, '_blank');
    setSent(true);
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent("Tecno Mart Road No 36 Jubilee Hills Hyderabad");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-neutral-950">
        <ScrollProgress />
        <Header onOpenRepairModal={() => setIsRepairOpen(true)} cartCount={0} />

        <main className="flex-1 py-10 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
                GET IN TOUCH • VISIT OUR STORE
              </span>
              <div className="mt-1">
                <BlurRevealText
                  text="CONTACT TECNOMART"
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight justify-center"
                  delay={0.1}
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-600 mt-3">
                Have a question about product stock, custom PC builds, or repair appointments? We are here to help 7 days a week.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Main Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              
              {/* Left Contact Information (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

                  <h3 className="text-xl font-black uppercase text-white tracking-tight">
                    Store & Service Center
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold">Tecno Mart Flagship Store</strong>
                        <span>H.No: 8-2-293/82/A/1287, Road No. 36, Jubilee Hills, Hyderabad, Telangana – 500033</span>
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

                  <div className="pt-4 border-t border-neutral-800">
                    <a
                      href="https://wa.me/919010667726"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Contact Form (Col 7) */}
              <div className="lg:col-span-7 bg-neutral-50 rounded-3xl p-8 border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-black text-neutral-950 uppercase mb-2">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs text-neutral-500 font-medium mb-6">
                  Fill in your details below and our team will get back to you immediately.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-4 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-11 px-4 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Your Message or Device Requirement
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe what you are looking for (device model, issue, budget...)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-4 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl outline-none focus:border-amber-500 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>

            {/* Map Section */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-neutral-950 uppercase">Find Us in Jubilee Hills</h4>
                <p className="text-xs text-neutral-500">Convenient parking, clean customer lounge, and live test benches.</p>
              </div>
              <button
                onClick={openGoogleMaps}
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </button>
            </div>

          </div>
        </main>

        <Footer />
        <RepairModal isOpen={isRepairOpen} onClose={() => setIsRepairOpen(false)} />
      </div>
    </SmoothScrollProvider>
  );
}
