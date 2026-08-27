"use client";
import React from "react";
import { motion } from "framer-motion";
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Navigation from 'lucide-react/dist/esm/icons/navigation';

export default function WhereToFindUs() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-28 bg-black overflow-hidden" id="location">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-amber-500/08 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-yellow-500/05 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header with generous headroom */}
        <div className="text-center mb-12 md:mb-14 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-3 flex items-center justify-center gap-2">
              <span className="inline-block w-5 h-px bg-[#FDE047]" />
              Hyderabad Flagship
              <span className="inline-block w-5 h-px bg-[#FDE047]" />
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-hubot tracking-tight">
              Where To Find Us
            </h2>
            <p className="font-mona text-slate-300 font-normal text-sm md:text-base mt-3 max-w-2xl mx-auto">
              Visit our Hyderabad flagship center for hands-on device trials, instant diagnostic tests, and custom workstation consulting.
            </p>
          </motion.div>
        </div>

        {/* Compact Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          <motion.div 
            className="lg:col-span-6 flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Info Box */}
            <div className="bg-[#0b0c10] border border-white/10 p-5 sm:p-6 rounded-xl backdrop-blur-2xl flex-1 flex flex-col justify-between shadow-xl">
              
              <div>
                <div className="pb-3 mb-4 border-b border-white/10">
                  <span className="font-hubot text-[11px] font-bold text-white/80 uppercase tracking-wider">Flagship Store &amp; Service Lab</span>
                </div>

                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FDE047] shrink-0 shadow-inner">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-hubot text-sm mb-0.5">TecnoMart Flagship Experience Center</h4>
                    <p className="text-slate-300 font-mona font-normal leading-relaxed text-xs">
                      7 Tombs Road, Opposite Toyota Showroom, <br/>Towlichowki, Hyderabad, Telangana 500008
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-[#FDE047] shrink-0 shadow-inner">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-hubot text-sm mb-0.5">Walk-In Hours</h4>
                    <p className="text-slate-300 font-mona font-normal text-xs">Monday – Sunday (All 7 Days)</p>
                    <p className="text-[#FDE047] font-mona font-semibold text-xs mt-0.5">10:00 AM – 9:00 PM IST</p>
                  </div>
                </div>

                {/* Store Amenities */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 pt-1 border-t border-white/05">
                  <div className="text-xs text-slate-300 font-mona flex items-center gap-1.5">
                    <span className="text-[#FDE047] text-xs">⚡</span> Free Diagnostic
                  </div>
                  <div className="text-xs text-slate-300 font-mona flex items-center gap-1.5">
                    <span className="text-[#FDE047] text-xs">🛡️</span> Up to 3-Year Warranty
                  </div>
                  <div className="text-xs text-slate-300 font-mona flex items-center gap-1.5">
                    <span className="text-[#FDE047] text-xs">🔄</span> Direct Trade-In
                  </div>
                  <div className="text-xs text-slate-300 font-mona flex items-center gap-1.5">
                    <span className="text-[#FDE047] text-xs">💳</span> 0% Cost EMI
                  </div>
                </div>
              </div>
              
              {/* Vertically Stacked CTA Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-3 border-t border-white/10">
                <a href="https://maps.app.goo.gl/Y8cpwK4urKPk5j1U9" target="_blank" rel="noreferrer" className="w-full">
                  <button type="button" className="w-full min-h-[44px] font-hubot flex items-center justify-center gap-2 bg-gradient-to-r from-[#FDE047] to-[#FACC15] text-black py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-amber-500/15 cursor-pointer">
                    <Navigation size={15} /> Get Directions
                  </button>
                </a>
                <a href="tel:+919010667726" className="w-full">
                  <button type="button" className="w-full min-h-[44px] font-hubot flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer">
                    <Phone size={15} /> Call Store Desk
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 rounded-xl overflow-hidden border border-white/12 bg-[#0b0c10] relative min-h-[250px] lg:min-h-[300px] shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              title="TecnoMart Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4827064!2d78.3766!3d17.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2a07f6b7f%3A0x1b2c64b04ba52a42!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full filter invert-[88%] hue-rotate-180 contrast-90 opacity-75 transition-all duration-500 hover:opacity-100 hover:filter-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Elegant Map Overlay Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FDE047]/20 flex items-center justify-center animate-pulse">
                <div className="w-3.5 h-3.5 bg-[#FDE047] rounded-full shadow-[0_0_20px_#FDE047]" />
              </div>
              <div className="mt-1.5 px-2.5 py-1 bg-black/90 backdrop-blur-md rounded-md border border-white/20 text-white text-[11px] font-hubot font-semibold shadow-xl">
                📍 TecnoMart Towlichowki
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
