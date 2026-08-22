"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MILESTONES = [
  {
    year: '2009',
    subtitle: 'THE SPECTRUM FOUNDATION',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    desc: 'Founded on an uncompromising commitment to diagnostic precision and customer trust, Spectrum set the benchmark for operational excellence in Hyderabad.',
  },
  {
    year: '2016',
    subtitle: 'SPECTRUM GOES DIGITAL',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    desc: 'Took our massive hardware inventory online, multiplying transactions tenfold and pushing monthly turnover to the 5–7 crore mark across India.',
  },
  {
    year: '2021',
    subtitle: 'CHIP-LEVEL LAB EXPANSION',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    desc: "Built Hyderabad's most advanced BGA reballing and motherboard micro-soldering facility for same-day enterprise laptop restorations.",
  },
  {
    year: '2025',
    subtitle: 'THE BIRTH OF TECNOMART',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80',
    desc: 'Launched as a standalone venture with a singular focus — curated flagship hardware, liquid-cooled custom PC rigs, and 90-point certified device grading.',
  },
  {
    year: '2026',
    subtitle: 'THE DIGITAL FRONTIER',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop&q=80',
    desc: 'We brought the curated TecnoMart experience online, offering direct senior technician consultation and doorstep delivery across Hyderabad.',
  },
  {
    year: 'TODAY',
    subtitle: '850+ VERIFIED BUILDS',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    desc: '17+ years of operational legacy powering thousands of creator workstations, flagship phones, and high-performance gaming rigs in Towlichowki.',
  },
];

export default function OurJourney() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Direct smooth horizontal pan (synchronized with Lenis)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Active milestone index derived from scroll
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, MILESTONES.length - 1]
  );

  return (
    <section className="relative text-white overflow-visible" id="journey">

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-amber-500/04 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-yellow-500/04 blur-[140px] rounded-full pointer-events-none" />

      {/* Scroll track container */}
      <div ref={containerRef} className="relative h-[300vh]">

        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center pt-20 pb-8 z-10">

          {/* Section Header */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-6 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-3 flex items-center gap-2">
                <span className="inline-block w-5 h-px bg-[#FDE047]" />
                17-Year Timeline
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-hubot tracking-tight text-white">
                Our <span className="text-[#FDE047]">Journey</span>
              </h2>
              <p className="font-mona text-slate-400 text-xs sm:text-sm mt-2 max-w-xl font-normal">
                TecnoMart is Spectrum's retail technology storefront. Scroll to explore 17 years of engineering milestones.
              </p>
            </motion.div>

            {/* Scroll Progress Track */}
            <div className="mt-5 flex items-center gap-4">
              {/* Thin progress bar */}
              <div className="relative flex-1 max-w-[400px] h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 h-full bg-[#FDE047] rounded-full origin-left"
                  style={{ width: progressWidth }}
                />
              </div>

              {/* Milestone dot indicators */}
              <div className="flex items-center gap-2">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: '#FDE047',
                      opacity: useTransform(scrollYProgress, [
                        Math.max(0, (i / MILESTONES.length) - 0.05),
                        i / MILESTONES.length,
                        Math.min(1, (i + 1) / MILESTONES.length),
                      ], [0.2, 1, 0.5])
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Milestone Strip */}
          <div className="w-full overflow-visible flex-1 flex items-center">
            <motion.div
              style={{ x }}
              className="flex gap-8 sm:gap-10 md:gap-12 px-6 sm:px-10 md:px-16 w-max items-start will-change-transform"
            >
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="w-[300px] sm:w-[340px] md:w-[380px] flex-shrink-0 flex flex-col group"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  {/* Year Label */}
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black font-hubot text-white tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#FDE047]">
                    {m.year}
                  </div>

                  {/* Image Card */}
                  <div className="relative w-full h-[240px] sm:h-[270px] md:h-[300px] rounded-2xl overflow-hidden bg-slate-900/80 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-[#FDE047]/40 group-hover:shadow-[0_0_30px_rgba(253,224,71,0.12)] cursor-pointer">

                    {/* Background image */}
                    <Image
                      src={m.image}
                      alt={m.subtitle}
                      fill
                      unoptimized
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 300px, 380px"
                    />

                    {/* Default vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />

                    {/* Hover reveal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/30 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out">

                      <div className="font-hubot text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FDE047] mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        {m.subtitle}
                      </div>

                      <p className="font-mona text-xs sm:text-sm text-slate-200 leading-relaxed font-normal transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">
                        {m.desc}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
