"use client";
import React from 'react';
import TextAnimation from './ui/scroll-text';

export default function ScrollTextAnimation() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-16 px-6">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/05 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[350px] bg-yellow-500/04 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid line overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Intro Scroll Hook */}
        <div className="min-h-[40vh] md:min-h-[50vh] grid place-content-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDE047]/10 border border-[#FDE047]/25 text-[#FDE047] font-hubot text-xs font-bold tracking-widest uppercase mb-4 shadow-sm mx-auto">
            <span>⚡</span> Engineering Manifesto
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-hubot text-white tracking-tight">
            Scroll to Experience <span className="text-[#FDE047]">Performance</span>
          </h2>
          <p className="font-mona text-slate-400 text-sm sm:text-base mt-2">
            Precision hardware engineered for Hyderabad&apos;s power users.
          </p>
        </div>

        {/* 1. Creative ideas start here */}
        <div className="min-h-[60vh] md:min-h-[75vh] flex flex-col justify-center items-center text-center">
          <TextAnimation
            text="Creative ideas start here."
            variants={{
              hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            classname="text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl mx-auto font-hubot font-bold capitalize tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
          />
        </div>

        {/* 2. Let's team up and turn ideas into reality */}
        <div className="min-h-[60vh] md:min-h-[75vh] flex items-center text-left">
          <TextAnimation
            as="p"
            letterAnime={true}
            text="Let's team up and turn ideas into reality ✨"
            classname="text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl font-hubot font-bold lowercase text-white tracking-tight leading-tight"
            variants={{
              hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
        </div>

        {/* 3. Turning concepts into reality */}
        <div className="min-h-[60vh] md:min-h-[75vh] flex justify-end items-center text-right">
          <TextAnimation
            text="Turning concepts into reality"
            direction="right"
            classname="text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl ml-auto font-hubot font-bold capitalize tracking-tight bg-gradient-to-l from-[#FDE047] via-amber-200 to-white bg-clip-text text-transparent"
          />
        </div>

        {/* 4. Dream big, work hard & achieve greatness */}
        <div className="min-h-[60vh] md:min-h-[75vh] flex justify-center items-center text-center">
          <TextAnimation
            text="Dream big, work hard & achieve greatness"
            direction="down"
            lineAnime={true}
            classname="text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto font-hubot font-bold capitalize tracking-tight text-white leading-tight"
          />
        </div>

      </div>
    </section>
  );
}
