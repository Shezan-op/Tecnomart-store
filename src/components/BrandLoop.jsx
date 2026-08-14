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
    <section className="relative py-24 bg-[#050608] border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl text-center mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">Trusted hardware from industry leaders</p>
      </div>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden mask-image-linear">
        <div className="flex min-w-full">
          <motion.div
            className="flex gap-16 md:gap-32 pr-16 md:pr-32 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {/* Duplicated for seamless scrolling */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 md:h-12 w-auto object-contain filter invert opacity-80" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .mask-image-linear {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
