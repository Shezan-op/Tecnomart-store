"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BrandLoop() {
  const logos = [
    { name: 'Apple', src: '/svg/apple.svg' },
    { name: 'Samsung', src: '/svg/samsung.svg' },
    { name: 'Dell', src: '/svg/dell-mono.svg' },
    { name: 'Asus', src: '/svg/asus.svg' },
    { name: 'HP', src: '/svg/hp.svg' },
    { name: 'Lenovo', src: '/svg/lenovo-mono.svg' },
    { name: 'MSI', src: '/svg/msi.svg' },
    { name: 'Acer', src: '/svg/acer.svg' }
  ];

  return (
    <section className="relative pt-10 pb-16 bg-[#070912] border-t border-b border-white/8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-amber-500/05 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="container mx-auto px-6 max-w-5xl text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-3 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
          OEM Authorized Partners
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white font-hubot tracking-tight">
          Direct Authorized Sourcing &amp; OEM Standards
        </h3>
        <p className="font-mona text-slate-400 text-sm mt-1.5 font-normal">
          Genuine components sourced directly from verified manufacturer supply chains.
        </p>
      </motion.div>

      {/* Marquee — seamless infinite horizontal scroll */}
      <div className="relative flex w-full max-w-[100vw] overflow-hidden z-10" style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}>
        <div className="flex min-w-full">
          <motion.div
            className="flex gap-6 md:gap-8 pr-6 md:pr-8 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 md:px-10 py-4 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="h-7 md:h-8 w-auto max-w-[120px] object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
