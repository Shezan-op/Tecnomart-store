"use client";

import React from "react";

export function NoiseEffect({
  opacity = 0.05,
  className = "",
  patternSize = 250,
  baseFrequency = 0.85,
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-[1] select-none mix-blend-overlay ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 ${patternSize} ${patternSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

export default NoiseEffect;
