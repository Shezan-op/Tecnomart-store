"use client";

import React from 'react';
import {
  StarBadgeIcon,
  PriceTagIcon,
  DeliveryBoxIcon,
  ReturnArrowIcon,
  SecureLockIcon,
  SupportHeadsetIcon,
} from './Icons';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Trusted Since 2016",
      subtitle: "Serving Thousands of Happy Customers",
      icon: <StarBadgeIcon className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Affordable Pricing",
      subtitle: "Best Value for Your Money",
      icon: <PriceTagIcon className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Fast Delivery",
      subtitle: "Pan India Safe & Secure",
      icon: <DeliveryBoxIcon className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Easy Returns",
      subtitle: "Hassle-Free Experience",
      icon: <ReturnArrowIcon className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Secure Payments",
      subtitle: "100% Safe Transactions",
      icon: <SecureLockIcon className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "After Sales Support",
      subtitle: "We're Here For You",
      icon: <SupportHeadsetIcon className="w-8 h-8 text-amber-500" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight inline-flex items-center gap-2">
            WHY CHOOSE TECNO MART?
          </h2>
          <div className="flex justify-center mt-2">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M7 10L0.937822 0.25L13.0622 0.250001L7 10Z" fill="#F59E0B" />
            </svg>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-7 text-center">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group p-3 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-amber-50/70 group-hover:bg-amber-100/80 flex items-center justify-center mb-3.5 transition-colors">
                {item.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
