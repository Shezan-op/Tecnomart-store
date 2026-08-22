"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export function Logo({ className }) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(className, "relative flex items-center justify-center h-8 min-w-[130px] sm:min-w-[145px] overflow-visible select-none")}>
      
      {/* State 1: TECNOMART Typography Brand Name */}
      <motion.div
        animate={{
          opacity: showLogo ? 0 : 1,
          scale: showLogo ? 0.94 : 1,
          filter: showLogo ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="font-hubot text-lg sm:text-xl font-black tracking-tight text-white/95 drop-shadow-[0_0_14px_rgba(255,255,255,0.25)] whitespace-nowrap">
          TECNO<span className="text-[#FDE047]">MART</span>
        </span>
      </motion.div>

      {/* State 2: TecnoMart Official PNG Logo */}
      <motion.div
        animate={{
          opacity: showLogo ? 1 : 0,
          scale: showLogo ? 1 : 0.94,
          filter: showLogo ? "blur(0px)" : "blur(4px)",
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/tecnomart-logo.png"
          alt="TecnoMart Logo"
          width={140}
          height={32}
          priority
          className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_0_14px_rgba(253,224,71,0.3)]"
        />
      </motion.div>

    </div>
  );
}
