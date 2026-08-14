"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MILESTONES = [
  {
    year: '2009',
    title: 'The Spectrum Foundation',
    desc: 'It all began with Spectrum. Founded on a commitment to quality technology and unmatched customer service, Spectrum set the benchmark for operational excellence and deep industry expertise.',
  },
  {
    year: '2016',
    title: 'Spectrum Goes Digital',
    desc: 'Spectrum took its massive inventory online, triggering explosive growth. This strategic leap multiplied sales tenfold, pushing monthly turnover to the 5–7 crore mark and proving the power of digital commerce.',
  },
  {
    year: '2025',
    title: 'The Birth of TecnoMart',
    desc: 'TecnoMart launched as a standalone venture with a singular focus — premium hardware and expert service. Backed by Spectrum’s veteran operational guidance and extensive inventory network, a new standard was born.',
  },
  {
    year: '2026',
    title: 'August: The Digital Frontier',
    desc: 'We brought the TecnoMart experience online. Guided by the exact same minds that scaled Spectrum, we now offer our curated tech ecosystem directly to your doorstep, combining standalone agility with legacy expertise.',
  },
];

export default function OurJourney() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 bg-[#050608] overflow-hidden" id="journey">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(71,91,255,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={containerRef}>
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#475BFF] uppercase tracking-[0.2em] text-sm font-semibold mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-6">
              Our Journey.
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto">
              Every milestone reflects our commitment to delivering trusted technology solutions.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {/* Glowing Animated Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-transparent via-[#475BFF] to-[#475BFF] shadow-[0_0_15px_#475BFF] md:-translate-x-[1.5px] rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-32">
            {MILESTONES.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={m.year} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050608] border-2 border-[#475BFF] md:-translate-x-1/2 z-10" />

                  {/* Desktop Layout - Left Side */}
                  <motion.div 
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-[#475BFF]/10 text-[#475BFF] text-sm font-bold tracking-widest mb-4 border border-[#475BFF]/20">
                      {m.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-orbitron mb-4">
                      {m.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </motion.div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
