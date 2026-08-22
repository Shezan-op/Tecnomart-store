"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProKeyboard.module.css';
import Keyboard from './Keyboard';
import { motion } from 'framer-motion';
import { Zap, Settings, MessageCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const KEYBOARD_SPECS = [
  { icon: Zap, label: 'Hot-Swap Switches', desc: 'Change feel without soldering' },
  { icon: Settings, label: 'Custom RGB Zones', desc: 'Per-key lighting control' },
  { icon: MessageCircle, label: 'PBT Keycaps', desc: 'Durable, non-shiny finish' },
];

export default function ProKeyboard() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const keyboardRef = useRef(null);
  const [isPowered, setIsPowered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom bottom',
          onEnter: () => setIsPowered(true),
          onLeaveBack: () => setIsPowered(false),
        }
      })
      .to(textRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .to(keyboardRef.current, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }, 0.2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pro-keyboard" className={styles.keyboardSection} ref={sectionRef}>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/06 blur-[150px] rounded-full pointer-events-none pointer-events-none" />

      {/* Section text */}
      <div className={styles.accessoriesText} ref={textRef}>
        <p className="font-hubot text-[11px] font-bold uppercase tracking-[0.18em] text-[#FDE047] mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
          Studio &amp; Gaming Peripherals
          <span className="inline-block w-5 h-px bg-[#FDE047]" />
        </p>
        <h2>Stop Typing On Mushy Keys.</h2>
        <p>Upgrade to tactile, responsive mechanical boards. Your fingers will thank you.</p>

        {/* Spec chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {KEYBOARD_SPECS.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FDE047]/30 transition-colors group"
            >
              <Icon size={14} className="text-[#FDE047] shrink-0" />
              <div className="text-left">
                <div className="font-hubot text-xs font-semibold text-white">{label}</div>
                <div className="font-mona text-[10px] text-slate-400 font-normal">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className={styles.keyboardContainer} ref={keyboardRef}>
        <Keyboard isPowered={isPowered} />
      </div>

      {/* CTA */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href={`https://wa.me/919010667726?text=${encodeURIComponent('Hi TecnoMart, I want to explore mechanical keyboards and accessories.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-[#FDE047] to-[#FACC15] text-black font-hubot font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber-500/20"
        >
          <MessageCircle size={15} />
          Browse Keyboards
        </a>
        <p className="font-mona text-xs text-slate-500 mt-3">In stock at our Towlichowki store • Mon–Sun 10AM–9PM</p>
      </motion.div>

    </section>
  );
}
