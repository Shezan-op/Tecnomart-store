"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-heading text-center">Common Questions</h2>
        <div className={styles.faqList}>
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <ChevronDown className={styles.icon} />
              </button>
              <div 
                className={styles.answerWrapper}
                style={{ height: openIndex === i ? 'auto' : 0 }}
              >
                <div className={styles.answerInner}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
