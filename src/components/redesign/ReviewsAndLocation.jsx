"use client";

import React from 'react';
import { Star, MapPin, Navigation as NavIcon, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/redesignAssets';
import { GoogleIcon } from './Icons';
import { BlurRevealText, BlurRevealBox } from './BlurReveal';

export default function ReviewsAndLocation() {
  const openGoogleMaps = () => {
    const query = encodeURIComponent("Tecno Mart Opposite Fortune Toyota Service Center 7 Tombs Road Tolichowki Hyderabad");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Google Reviews (Col 5) */}
          <div className="lg:col-span-5">
            <BlurRevealBox duration={0.7} yOffset={25} className="h-full">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-neutral-50/90 p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 hover:shadow-md transition-all duration-300">
                <div>
                  {/* Google Reviews Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <GoogleIcon className="w-5 h-5" />
                    <BlurRevealText
                      text="GOOGLE REVIEWS"
                      className="text-xs sm:text-sm font-black tracking-wider text-neutral-800 uppercase"
                      delay={0.1}
                    />
                  </div>

                  {/* Rating & Stars */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-neutral-950">
                      4.9
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400 stroke-[1.5]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 font-medium mb-6">
                    Based on 1,250+ verified customer reviews
                  </p>

                  {/* Avatar Cluster */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex -space-x-2.5 overflow-hidden">
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                        src={ASSETS.avatar1}
                        alt="Customer avatar"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                        src={ASSETS.avatar2}
                        alt="Customer avatar"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                        src={ASSETS.avatar3}
                        alt="Customer avatar"
                      />
                      <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-white bg-amber-500 text-neutral-950 font-black text-xs items-center justify-center">
                        +1.2k
                      </div>
                    </div>
                  </div>

                  {/* Recent Customer Quote */}
                  <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80 mb-6">
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-700 font-medium italic">
                      &ldquo;Best place in Hyderabad for custom PC builds and fast screen repairs. Honest diagnostics and genuine parts.&rdquo;
                    </p>
                    <p className="text-[11px] text-neutral-500 font-bold mt-1.5">
                      — Mohammed Fahad (Verified Local Guide)
                    </p>
                  </div>
                </div>

                {/* View on Google Link */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tecno+Mart+Opposite+Fortune+Toyota+Service+Center+7+Tombs+Road+Tolichowki+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-neutral-700 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>Read all 1,250+ reviews on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </BlurRevealBox>
          </div>

          {/* Card 2: Visit Our Store (Col 7) */}
          <div className="lg:col-span-7">
            <BlurRevealBox duration={0.7} delay={0.15} yOffset={25} className="h-full">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-neutral-50/90 p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Address Info (Col 6) */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-500" />
                      <BlurRevealText
                        text="VISIT OUR STORE"
                        className="text-sm sm:text-base font-black tracking-wider text-neutral-900 uppercase"
                        delay={0.1}
                      />
                    </div>

                    <div className="space-y-1 text-xs sm:text-sm text-neutral-700 font-medium">
                      <p className="font-bold text-neutral-950 text-base">Tecno Mart</p>
                      <p>Opposite Fortune Toyota Service Center,</p>
                      <p>7 Tombs Road, Tolichowki,</p>
                      <p>Hyderabad, Telangana – 500008</p>
                      <p className="text-neutral-500 text-xs pt-1">
                        Open: Mon - Sun (10:00 AM – 9:30 PM)
                      </p>
                    </div>

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={openGoogleMaps}
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                      >
                        <NavIcon className="w-3.5 h-3.5" />
                        <span>GET DIRECTIONS</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Map Visual Preview (Col 6) */}
                  <div className="md:col-span-6 relative">
                    <div
                      onClick={openGoogleMaps}
                      className="group/map relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-neutral-300 cursor-pointer shadow-inner bg-neutral-200"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                        alt="Tecno Mart Store Location Map Tolichowki"
                        className="w-full h-full object-cover group-hover/map:scale-105 transition-transform duration-500"
                      />
                      {/* Map Overlay & Marker */}
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover/map:bg-neutral-950/10 transition-colors flex items-center justify-center">
                        <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-lg border border-neutral-200 flex items-center gap-2 transform group-hover/map:scale-110 transition-transform">
                          <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                          <span className="text-xs font-black text-neutral-900">Tecno Mart Tolichowki</span>
                          <ExternalLink className="w-3 h-3 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </BlurRevealBox>
          </div>

        </div>
      </div>
    </section>
  );
}
