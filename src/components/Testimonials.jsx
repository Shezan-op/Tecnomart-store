"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const sectionRef = React.useRef(null);

  useEffect(() => {
    let googleScript = null;
    let instaScript = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Dynamically inject Google Review Jotform widget script
          googleScript = document.createElement("script");
          googleScript.src = "https://www.jotform.com/website-widgets/embed/01a0240cfc90700086e1a72675e90ce033e1";
          googleScript.async = true;
          document.body.appendChild(googleScript);

          // Dynamically inject Instagram Jotform widget script
          instaScript = document.createElement("script");
          instaScript.src = "https://www.jotform.com/website-widgets/embed/01a02410d8d870008295c40edbeaf3eaa9f1";
          instaScript.async = true;
          document.body.appendChild(instaScript);

          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      try {
        if (googleScript && googleScript.parentNode) googleScript.parentNode.removeChild(googleScript);
        if (instaScript && instaScript.parentNode) instaScript.parentNode.removeChild(instaScript);
      } catch (e) {
        // cleanup safety
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-20 pb-16 overflow-hidden bg-[var(--bg-base)]" id="reviews">
      {/* Ambient background glow meshes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-amber-500/06 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-yellow-500/05 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-4 flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-px bg-[#FDE047]" />
            Social Proof
            <span className="inline-block w-5 h-px bg-[#FDE047]" />
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-hubot tracking-tight mb-4">
            What Hyderabad Says About Us
          </h2>

          {/* Rating Strip */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 font-mona text-sm">
            <div className="flex gap-0.5 text-[#FDE047]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#FDE047" stroke="none" />
              ))}
            </div>
            <span className="font-semibold text-white">4.8 / 5.0</span>
            <span className="text-slate-400">· 850+ verified customer ratings on Google</span>
          </div>
        </motion.div>

        {/* Google Reviews Widget Card */}
        <motion.div
          className="mb-6 rounded-2xl bg-[var(--bg-elevated)]/80 border border-white/8 p-4 md:p-6 shadow-2xl backdrop-blur-xl min-h-[160px] overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/8">
            <div className="w-7 h-7 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="font-hubot text-xs font-bold uppercase tracking-wider text-white/70">Google Reviews</span>
          </div>
          <div id="JFWebsiteWidget-01a0240cfc90700086e1a72675e90ce033e1" className="w-full" />
        </motion.div>

        {/* Instagram Section Header */}
        <motion.div
          className="flex items-center justify-between flex-wrap gap-4 mb-4 px-1"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center text-pink-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <span className="text-base sm:text-lg font-bold font-hubot text-white tracking-tight">
              Real Client Builds &amp; Unboxings
            </span>
          </div>
          <a
            href="https://instagram.com/tecnomart_hyd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#FDE047]/10 border border-white/10 hover:border-[#FDE047]/40 text-xs font-hubot font-bold uppercase tracking-wider text-slate-300 hover:text-[#FDE047] transition-all duration-200 group"
          >
            <span>Follow @tecnomart_hyd</span>
            <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Instagram Widget Card */}
        <motion.div
          className="rounded-2xl bg-[var(--bg-elevated)]/80 border border-white/8 p-4 md:p-6 shadow-2xl backdrop-blur-xl min-h-[160px] overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div id="JFWebsiteWidget-01a02410d8d870008295c40edbeaf3eaa9f1" className="w-full" />
        </motion.div>

      </div>
    </section>
  );
}
