"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: "What does 'Certified Refurbished' mean?",
    a: "Every device undergoes a strict 90-point inspection by our certified technicians. We check everything from battery health and screen clarity to internal components and connectivity. Only devices that pass 100% of these tests are sold as Certified Refurbished."
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes, all our refurbished devices come with a standard 12-month hardware warranty. This covers any manufacturing defects or hardware failures that occur during normal use."
  },
  {
    q: "Can I return a device if I don't like it?",
    a: "Absolutely. We offer a 7-day no-questions-asked return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange."
  },
  {
    q: "Do you offer EMI or financing options?",
    a: "Yes, we partner with major banks to offer flexible EMI options, including No-Cost EMI on select models. You can see available options at checkout."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-heading text-center">Frequently Asked Questions</h2>
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
