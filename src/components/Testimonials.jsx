"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    author: 'Rahul S.',
    role: 'Software Developer',
    quote: 'Saved ₹30K on my MacBook Pro! The condition was flawless and the warranty gives peace of mind.',
    tag: 'Laptop Deal'
  },
  {
    author: 'Priya M.',
    role: 'Content Creator',
    quote: 'Flawless iPhone 14 Pro Max, genuine warranty. Upgraded my entire setup through TecnoMart.',
    tag: 'Mobile Buy'
  },
  {
    author: 'Arjun K.',
    role: 'Student, BITS',
    quote: 'Best laptop for college — Asus got serviced in 2 days! Incredible after-sales support.',
    tag: 'Repair'
  },
  {
    author: 'Neha R.',
    role: 'Graphic Designer',
    quote: 'The 90-point inspection is legit — refurb iPhone looks brand new. Absolutely stunning.',
    tag: 'Refurb'
  },
  {
    author: 'Vikram P.',
    role: 'Entrepreneur',
    quote: 'Set up 8 laptops for my office in one day from TecnoMart. The bulk pricing is unbeatable.',
    tag: 'Business'
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm min-w-[320px] max-w-[400px] flex-shrink-0 flex flex-col justify-between group transition-all hover:bg-white/10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#475BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div>
      <div className="flex items-center gap-1 mb-4 text-[#475BFF]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" className="opacity-80" />
        ))}
      </div>
      <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
        "{testimonial.quote}"
      </p>
    </div>
    
    <div className="flex items-center justify-between mt-auto">
      <div>
        <h4 className="text-white font-medium font-orbitron">{testimonial.author}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
        {testimonial.tag}
      </span>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050608]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(71,91,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <p className="text-[#475BFF] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Don't Just Take Our Word For It</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-6">
          The Best Tech Community.
        </h2>
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <Star size={16} fill="#475BFF" stroke="none" />
          <span className="text-gray-300 text-sm font-medium">4.8/5 Average Rating from 500+ Reviews</span>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden mask-image-linear">
        {/* Marquee Row 1 */}
        <div className="flex min-w-full">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </motion.div>
        </div>
        
        {/* Marquee Row 2 (Reverse) */}
        <div className="flex min-w-full">
          <motion.div
            className="flex gap-6 pr-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...testimonials, ...testimonials].reverse().map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
      
      <style jsx global>{`
        .mask-image-linear {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
