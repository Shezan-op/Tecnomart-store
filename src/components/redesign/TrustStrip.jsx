"use client";

import React from 'react';
import { PriceTagIcon, ExpertEngineerIcon, GenuinePartsIcon, WarrantyBadgeIcon } from './Icons';

export default function TrustStrip() {
  const items = [
    {
      title: "Best Prices",
      subtitle: "Guaranteed",
      icon: <PriceTagIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Expert Engineers",
      subtitle: "Certified Pros",
      icon: <ExpertEngineerIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Genuine Parts",
      subtitle: "100% Original",
      icon: <GenuinePartsIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Warranty",
      subtitle: "Upto 2 Years",
      icon: <WarrantyBadgeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 flex-shrink-0" />,
    },
  ];

  return (
    <section className="bg-white py-5 sm:py-7 border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 sm:gap-3.5 p-2 sm:p-3 rounded-2xl bg-neutral-50/60 md:bg-transparent border border-neutral-100 md:border-none group"
            >
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50 group-hover:bg-amber-100 transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-neutral-900 leading-tight truncate">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 font-medium truncate">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
