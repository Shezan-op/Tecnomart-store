"use client";

import React from 'react';
import { PriceTagIcon, ExpertEngineerIcon, GenuinePartsIcon, WarrantyBadgeIcon } from './Icons';

export default function TrustStrip() {
  const items = [
    {
      title: "Best Prices",
      subtitle: "Guaranteed",
      icon: <PriceTagIcon className="w-7 h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Expert Engineers",
      subtitle: "Certified Professionals",
      icon: <ExpertEngineerIcon className="w-7 h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Genuine Parts",
      subtitle: "100% Original",
      icon: <GenuinePartsIcon className="w-7 h-7 text-amber-500 flex-shrink-0" />,
    },
    {
      title: "Warranty",
      subtitle: "Upto 2 Years",
      icon: <WarrantyBadgeIcon className="w-7 h-7 text-amber-500 flex-shrink-0" />,
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 sm:gap-4 ${
                idx !== 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''
              } group`}
            >
              <div className="p-2.5 rounded-full bg-amber-50/80 group-hover:bg-amber-100 transition-colors">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-neutral-900 leading-tight">
                  {item.title}
                </span>
                <span className="text-xs sm:text-[13px] text-neutral-500 font-medium">
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
