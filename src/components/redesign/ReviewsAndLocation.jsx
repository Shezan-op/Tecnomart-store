"use client";

import React from 'react';
import { Star, MapPin, Navigation as NavIcon, ExternalLink } from 'lucide-react';
import { ASSETS } from '@/data/redesignAssets';
import { GoogleIcon } from './Icons';

export default function ReviewsAndLocation() {
  const openGoogleMaps = () => {
    const query = encodeURIComponent("Tecno Mart Road No 36 Jubilee Hills Hyderabad");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Google Reviews (Col 5) */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-neutral-50/80 p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300">
            <div>
              {/* Google Reviews Header */}
              <div className="flex items-center gap-2 mb-4">
                <GoogleIcon className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-black tracking-wider text-neutral-800 uppercase">
                  GOOGLE REVIEWS
                </span>
              </div>

              {/* Rating & Stars */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-neutral-950">
                  4.8
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
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={ASSETS.avatar4}
                    alt="Customer avatar"
                  />
                </div>
                <span className="text-xs font-bold text-neutral-700">
                  +1.2k happy tech buyers
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white p-4 rounded-xl border border-neutral-200/80 shadow-xs">
              <p className="text-xs sm:text-sm font-medium text-neutral-700 italic">
                "Great products, genuine parts and amazing service! Got my custom gaming PC built and delivered the same day."
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-900">
                  — Rahul M., Hyderabad
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  ✓ Verified Buyer
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Visit Our Store (Col 7) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-neutral-50/80 p-6 sm:p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Address Info (Col 6) */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <h3 className="text-sm sm:text-base font-black tracking-wider text-neutral-900 uppercase">
                    VISIT OUR STORE
                  </h3>
                </div>

                <div className="space-y-1 text-xs sm:text-sm text-neutral-700 font-medium">
                  <p className="font-bold text-neutral-950 text-base">Tecno Mart</p>
                  <p>H.No: 8-2-293/82/A/1287,</p>
                  <p>Road No. 36, Jubilee Hills,</p>
                  <p>Hyderabad, Telangana – 500033</p>
                  <p className="text-neutral-500 text-xs pt-1">
                    Open: Mon - Sun (10:00 AM – 9:30 PM)
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openGoogleMaps}
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <NavIcon className="w-3.5 h-3.5" />
                    <span>GET DIRECTIONS</span>
                  </button>
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
                    alt="Tecno Mart Store Location Map Jubilee Hills"
                    className="w-full h-full object-cover group-hover/map:scale-105 transition-transform duration-500"
                  />
                  {/* Map Overlay & Marker */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover/map:bg-neutral-950/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-lg border border-neutral-200 flex items-center gap-2 transform group-hover/map:scale-110 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                      <span className="text-xs font-black text-neutral-900">Tecno Mart</span>
                      <ExternalLink className="w-3 h-3 text-neutral-500" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
