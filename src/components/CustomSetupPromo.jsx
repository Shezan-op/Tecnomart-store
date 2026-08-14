"use client";
import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, PenTool } from "lucide-react";

export default function CustomSetupPromo() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050608]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#475BFF]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Zap size={16} className="text-[#475BFF]" />
              <span className="text-gray-300 text-sm font-medium tracking-wide">Build Your Dream Rig</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white font-orbitron leading-tight mb-6">
              Stop Settling For <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Pre-Builts.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl">
              Whether you need a high-FPS gaming rig, a quiet editing workstation, or a massive compile-server, handpick the parts that matter. We handle the expert assembly.
            </p>
            
            <Link href="/build-your-setup">
              <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
                Start Your Custom Build
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/50 ring-offset-2 ring-offset-black scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
              </button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-32 bg-gradient-to-bl from-[#475BFF]/30 to-transparent blur-[60px]" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-full bg-[#475BFF]/20 flex items-center justify-center text-[#475BFF]">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Any CPU & GPU Combo</h4>
                    <p className="text-sm text-gray-400">Zero bottlenecks</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md translate-x-8">
                  <div className="w-12 h-12 rounded-full bg-[#475BFF]/20 flex items-center justify-center text-[#475BFF]">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Expert Cable Management</h4>
                    <p className="text-sm text-gray-400">Clean & beautiful aesthetics</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 relative z-10">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#475BFF] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-3 text-right">Optimization Complete</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
