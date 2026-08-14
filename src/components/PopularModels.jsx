"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Smartphone, Monitor, Headphones } from "lucide-react";
import Link from 'next/link';

const products = [
  { 
    id: 1, 
    name: 'MacBook Pro (M3)', 
    desc: 'Crush compile times and render 4K without dropping a single frame.', 
    color: 'from-[#475BFF]/20 to-transparent',
    icon: Laptop,
    colSpan: 'col-span-1 md:col-span-2'
  },
  { 
    id: 2, 
    name: 'Galaxy S24 Ultra', 
    desc: 'A literal supercomputer in your pocket.', 
    color: 'from-gray-700/50 to-transparent',
    icon: Smartphone,
    colSpan: 'col-span-1'
  },
  { 
    id: 3, 
    name: 'Dell UltraSharp 4K', 
    desc: 'True color accuracy for creatives who care.', 
    color: 'from-blue-500/10 to-transparent',
    icon: Monitor,
    colSpan: 'col-span-1'
  },
  { 
    id: 4, 
    name: 'Sony WH-1000XM5', 
    desc: 'Turn off the office. Industry-best noise cancellation.', 
    color: 'from-zinc-800/80 to-transparent',
    icon: Headphones,
    colSpan: 'col-span-1 md:col-span-2'
  }
];

export default function PopularModels() {
  return (
    <section className="relative py-32 bg-[#050608]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#475BFF] uppercase tracking-[0.2em] text-sm font-semibold mb-3">Trending</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron">
              The Gear Everyone's Buying.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/services">
              <button className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium">
                View Full Catalog
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 cursor-pointer ${product.colSpan} min-h-[300px] flex flex-col justify-between hover:bg-white/[0.07] transition-colors`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white mb-8">
                <product.icon size={24} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-bold text-white font-orbitron mb-3">{product.name}</h3>
                <p className="text-gray-400 font-light max-w-sm">{product.desc}</p>
                
                <div className="mt-8 flex items-center gap-2 text-sm text-[#475BFF] font-medium opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Check Specs <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
