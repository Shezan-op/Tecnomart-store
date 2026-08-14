"use client"

import { clsx } from "clsx"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center overflow-visible")}>
      <span className="font-['Orbitron'] text-xl font-bold tracking-tight text-white/90 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
        TECNO<span className="text-[#475BFF]">MART</span>
      </span>
    </div>
  )
}
