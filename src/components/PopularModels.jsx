"use client";
import React from "react";
import { motion } from "framer-motion";
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Laptop from 'lucide-react/dist/esm/icons/laptop';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import Monitor from 'lucide-react/dist/esm/icons/monitor';
import Headphones from 'lucide-react/dist/esm/icons/headphones';
import Link from 'next/link';

const products = [
  { 
    id: 1, 
    name: 'MacBook Pro 16″ (M3 Pro)', 
    category: 'PRO WORKSTATION',
    desc: 'Crush 8K timeline scrubbing, Xcode compiles, and heavy local LLMs without dropping a frame or hearing a fan.', 
    specs: ['Apple M3 Pro / Max', 'Up to 36GB Unified RAM', 'Liquid Retina XDR 120Hz', '22h Battery Life'],
    price: 'From ₹1,49,990',
    glowColor: 'from-amber-500/20 via-yellow-950/10 to-transparent',
    accentBorder: 'group-hover:border-[#FDE047]/40',
    bgImage: '/bento-grid-images/mackbook.png',
    icon: Laptop,
    colSpan: 'col-span-1 md:col-span-2'
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S24 Ultra', 
    category: 'AI FLAGSHIP',
    desc: 'Titanium frame, 200MP detail engine, and embedded S-Pen supercomputer.', 
    specs: ['Snapdragon 8 Gen 3', '200MP Quad Telephoto', 'Galaxy AI Suite', '5000 mAh All-Day'],
    price: 'From ₹89,990',
    glowColor: 'from-amber-500/20 via-yellow-950/10 to-transparent',
    accentBorder: 'group-hover:border-[#FDE047]/40',
    bgImage: '/bento-grid-images/samsungs24.png',
    icon: Smartphone,
    colSpan: 'col-span-1'
  },
  { 
    id: 3, 
    name: 'Dell UltraSharp 32″ 4K Hub', 
    category: 'CREATOR DISPLAY',
    desc: 'IPS Black technology with 2000:1 contrast and Thunderbolt 4 90W single-cable dock.', 
    specs: ['4K UHD 3840×2160', '100% sRGB / 98% DCI-P3', 'Built-in KVM Switch', 'Thunderbolt 4 Hub'],
    price: 'From ₹44,990',
    glowColor: 'from-amber-500/20 via-yellow-950/10 to-transparent',
    accentBorder: 'group-hover:border-[#FDE047]/40',
    bgImage: '/bento-grid-images/pc.png',
    icon: Monitor,
    colSpan: 'col-span-1'
  },
  { 
    id: 4, 
    name: 'Sony WH-1000XM5 Studio', 
    category: 'AUDIO ENGINEERING',
    desc: 'Industry-standard noise cancellation with Dual Processors and 8 beamforming mics for pristine isolation.', 
    specs: ['Auto NC Optimizer', '30-Hour Quick Charge', 'LDAC Hi-Res Audio', 'Multipoint Connection'],
    price: 'From ₹24,990',
    glowColor: 'from-amber-500/20 via-yellow-950/10 to-transparent',
    accentBorder: 'group-hover:border-[#FDE047]/40',
    bgImage: '/bento-grid-images/headsetoverthehead.png',
    icon: Headphones,
    colSpan: 'col-span-1 md:col-span-2'
  }
];

export default function PopularModels() {
  return (
    <section className="relative py-28 bg-[var(--bg-base)] overflow-hidden" id="laptops">
      {/* Dynamic atmospheric lighting glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-amber-500/06 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-yellow-500/04 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-3 flex items-center gap-2">
              <span className="inline-block w-5 h-px bg-[#FDE047]" />
              Curated Hardware Catalog
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-hubot tracking-tight leading-tight">
              The Gear Everyone&apos;s Buying
            </h2>
            <p className="font-mona text-slate-300 font-normal text-base mt-2">
              Curated hardware benchmarks tested for high-load workflows and longevity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/services">
              <button type="button" className="group flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all duration-200 text-sm font-semibold font-mona">
                View Full Inventory &amp; Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#FDE047]" />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className={`group relative overflow-hidden rounded-xl bg-[var(--bg-elevated)] border border-white/10 hover:border-white/25 p-7 md:p-8 cursor-pointer ${product.colSpan} min-h-[360px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${product.accentBorder}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              {/* Background Image with Zoom on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-35 group-hover:opacity-45"
                style={{ backgroundImage: `url(${product.bgImage})` }}
              />

              {/* Dark Gradient Overlay to guarantee pristine readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/80 to-[#090b14]/40" />

              {/* Gradient Aura on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.glowColor} opacity-20 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />
              
              <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="flex items-center justify-center text-white">
                  <product.icon size={26} strokeWidth={1.75} className="text-white group-hover:text-[#FDE047] transition-colors" />
                </div>
                <div className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/12 text-xs font-hubot font-semibold text-white/90">
                  {product.price}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="text-[11px] font-hubot tracking-wider uppercase text-[#FDE047] mb-1.5 font-bold">
                  {product.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-hubot mb-2.5 group-hover:text-yellow-100 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-300 font-mona font-normal text-sm leading-relaxed mb-5 max-w-lg">
                  {product.desc}
                </p>
                
                {/* Spec Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-xs font-mona px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-slate-200 font-medium">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-sm text-[#FDE047] font-mona font-bold group-hover:translate-x-1 transition-transform">
                    Explore Details <ArrowRight size={15} />
                  </div>
                  <span className="text-xs text-slate-400 font-mona">In Stock • Hyderabad Store</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
