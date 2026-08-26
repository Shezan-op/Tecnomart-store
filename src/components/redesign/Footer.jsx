"use client";

import React, { useState } from 'react';
import {
  TecnoMartLogo,
  PaymentMethodsRow,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterXIcon,
} from './Icons';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const shopLinks = [
    { label: 'Mobiles', href: '#mobiles' },
    { label: 'Laptops', href: '#laptops' },
    { label: 'Gaming', href: '#gaming' },
    { label: 'PC Builds', href: '#gaming' },
    { label: 'Refurbished', href: '#refurbished' },
    { label: 'Accessories', href: '#accessories' },
  ];

  const helpLinks = [
    { label: 'Repairs', href: '#repairs' },
    { label: 'Track Order', href: '#track' },
    { label: 'Returns & Refund', href: '#returns' },
    { label: 'Warranty', href: '#warranty' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Stores', href: '#stores' },
    { label: 'Careers', href: '#careers' },
    { label: 'Corporate Sales', href: '#corporate' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-neutral-400 border-t border-neutral-800/80 pt-14 pb-8">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand & Bio (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <TecnoMartLogo textClass="text-white" subtitleClass="text-neutral-500" />
            
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Your one-stop destination for the best tech products, expert repairs and unmatched support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919010667726"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-colors border border-neutral-800"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-colors border border-neutral-800"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-colors border border-neutral-800"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-colors border border-neutral-800"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 text-neutral-400 hover:text-neutral-950 flex items-center justify-center transition-colors border border-neutral-800"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: SHOP (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HELP & SUPPORT (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              HELP & SUPPORT
            </h4>
            <ul className="space-y-2 text-xs">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: COMPANY (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: STAY UPDATED (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-white uppercase">
              STAY UPDATED
            </h4>
            <p className="text-xs text-neutral-400 leading-snug">
              Subscribe to get exclusive offers, new arrivals and tech updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs px-3.5 py-2.5 rounded-lg outline-none focus:border-amber-500 placeholder-neutral-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 rounded-md flex items-center justify-center transition-colors font-bold text-xs"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-500">
            © 2025 Tecno Mart. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-500 font-medium">Secure Payments</span>
            <PaymentMethodsRow />
          </div>
        </div>

      </div>
    </footer>
  );
}
