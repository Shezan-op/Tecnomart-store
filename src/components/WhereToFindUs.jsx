"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function WhereToFindUs() {
  return (
    <section className="relative py-32 bg-[#050608] overflow-hidden" id="location">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#475BFF] uppercase tracking-[0.2em] text-sm font-semibold mb-3">Visit Our Store</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron">
              Where To Find Us.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Info Cards */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex-1">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#475BFF]/20 flex items-center justify-center text-[#475BFF] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-2">Flagship Store</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    7 Tombs Road, Opposite Toyota Showroom, <br/>Towlichowki, Hyderabad, Telangana 500008
                  </p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10 mb-8" />
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-2">Store Hours</h4>
                  <p className="text-gray-400 font-light">Monday – Sunday</p>
                  <p className="text-[#475BFF] font-medium mt-1">10:00 AM – 9:00 PM</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10 mb-8" />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://maps.app.goo.gl/Y8cpwK4urKPk5j1U9" target="_blank" rel="noreferrer" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#475BFF] hover:bg-[#5a6dff] text-white px-6 py-4 rounded-xl font-medium transition-colors">
                    <Navigation size={18} /> Get Directions
                  </button>
                </a>
                <a href="tel:+919010667726" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-medium transition-colors">
                    <Phone size={18} /> Call Now
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative min-h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              title="TecnoMart Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4827064!2d78.3766!3d17.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2a07f6b7f%3A0x1b2c64b04ba52a42!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full filter invert-[90%] hue-rotate-180 contrast-80 opacity-60 mix-blend-screen transition-all hover:opacity-100 hover:filter-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Elegant Map Overlay Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#475BFF]/20 flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-[#475BFF] rounded-full shadow-[0_0_20px_#475BFF]" />
              </div>
              <div className="mt-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white text-sm font-medium">
                TecnoMart
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
