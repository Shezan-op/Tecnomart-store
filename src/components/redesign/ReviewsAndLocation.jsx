"use client";

import React from 'react';
import { Star, MapPin, ExternalLink, Navigation } from 'lucide-react';
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
    <section className="py-8 sm:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: Visit Our Store */}
          <BlurRevealBox duration={0.6} yOffset={20}>
            <div className="h-full rounded-2xl bg-white p-4 sm:p-6 border border-neutral-200 shadow-2xs flex flex-col justify-between">
              
              <div>
                {/* Header */}
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin className="w-4 h-4 text-neutral-800" />
                  <span className="text-xs sm:text-sm font-black tracking-wider text-neutral-900 uppercase">
                    VISIT OUR STORE
                  </span>
                </div>

                {/* Address */}
                <div className="space-y-0.5 text-xs text-neutral-700 font-medium mb-3">
                  <p className="font-bold text-neutral-950 text-sm">Tecno Mart</p>
                  <p>Opposite Fortune Toyota Service Center,</p>
                  <p>7 Tombs Road, Tolichowki,</p>
                  <p>Hyderabad, Telangana – 500008</p>
                </div>

                {/* Get Directions Link */}
                <div className="mb-3">
                  <button
                    onClick={openGoogleMaps}
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 cursor-pointer"
                  >
                    <span>GET DIRECTIONS</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Map Preview Box */}
              <div
                onClick={openGoogleMaps}
                className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden border border-neutral-200 cursor-pointer bg-neutral-100 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                  alt="Tecno Mart Location Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-neutral-950/20 flex items-center justify-center">
                  <div className="bg-white/95 px-2.5 py-1 rounded-md shadow-md border border-neutral-200 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[11px] font-black text-neutral-900">Tecno Mart</span>
                  </div>
                </div>
              </div>

            </div>
          </BlurRevealBox>

          {/* Card 2: Google Reviews */}
          <BlurRevealBox duration={0.6} delay={0.1} yOffset={20}>
            <div className="h-full rounded-2xl bg-white p-4 sm:p-6 border border-neutral-200 shadow-2xs flex flex-col justify-between">
              
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <GoogleIcon className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-black tracking-wider text-neutral-900 uppercase">
                    GOOGLE REVIEWS
                  </span>
                </div>

                {/* Rating & Stars Row */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-950">
                    4.8
                  </span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mb-4">
                  Based on 1,250+ reviews
                </p>

                {/* Overlapping Avatars Cluster matching Screenshot */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={ASSETS.avatar1}
                      alt="Reviewer"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={ASSETS.avatar2}
                      alt="Reviewer"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={ASSETS.avatar3}
                      alt="Reviewer"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src={ASSETS.avatar4}
                      alt="Reviewer"
                    />
                  </div>
                </div>

                {/* Quote matching Screenshot */}
                <p className="text-xs text-neutral-700 font-medium italic">
                  &ldquo;Great products, genuine parts and amazing service!&rdquo;
                </p>
              </div>

              {/* View on Google Link */}
              <div className="pt-3 mt-2 border-t border-neutral-100">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tecno+Mart+Opposite+Fortune+Toyota+Service+Center+7+Tombs+Road+Tolichowki+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-neutral-500 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <span>View all reviews on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </BlurRevealBox>

        </div>
      </div>
    </section>
  );
}
