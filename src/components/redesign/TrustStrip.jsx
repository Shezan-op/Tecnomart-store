"use client";

import React from 'react';
import { PriceTagIcon, ExpertEngineerIcon, GenuinePartsIcon, WarrantyBadgeIcon } from './Icons';

export default function TrustStrip() {
  const items = [
    {
      title: "Best Prices",
      subtitle: "Guaranteed",
      icon: <PriceTagIcon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Expert Engineers",
      subtitle: "Certified Pros",
      icon: <ExpertEngineerIcon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Genuine Parts",
      subtitle: "100% Original",
      icon: <GenuinePartsIcon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Warranty",
      subtitle: "Upto 2 Years",
      icon: <WarrantyBadgeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />,
    },
  ];

  return (
    <section className="bg-white py-3 sm:py-6 border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-6 items-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1 sm:gap-3 p-1 sm:p-2 rounded-xl group"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-50 group-hover:bg-amber-100 transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-sm font-bold text-neutral-900 leading-tight truncate">
                  {item.title}
                </span>
                <span className="text-[9px] sm:text-xs text-neutral-500 font-medium truncate">
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
