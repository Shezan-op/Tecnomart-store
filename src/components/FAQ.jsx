"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: "Are the refurbished phones actually reliable?",
    a: "Yes. Every device is tested by our technicians before it ever hits the shelf. We check the battery cycles, screen clarity, and internal board health. If it doesn't pass our 90-point checklist, we don't sell it."
  },
  {
    q: "What if it breaks after I buy it?",
    a: "We back our hardware. Every refurbished device comes with a 12-month hardware warranty. If it fails under normal use, bring it in and we'll fix it."
  },
  {
    q: "Can I return it if I change my mind?",
    a: "Absolutely. You have 7 days to test drive your new device. If it's not the right fit, bring it back for a full refund or exchange, no questions asked."
  },
  {
    q: "Do you offer EMI or financing?",
    a: "We do. We partner with all major banks to offer flexible EMI, including No-Cost options on most flagship models. We'll set it up for you at the counter."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for better UX

  return (
    <section className="relative py-32 bg-[#050608]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#475BFF] uppercase tracking-[0.2em] text-sm font-semibold mb-3">Support</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron">
              Common Questions.
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/10 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-4 rounded-full p-2 transition-colors duration-300 ${isOpen ? 'bg-[#475BFF] text-white' : 'bg-white/5 text-gray-400'}`}
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
