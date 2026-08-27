"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TecnoMartLogo,
  PaymentMethodsRow,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from './Icons';
import { Mail, Send, Check } from 'lucide-react';

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
    { label: 'Mobiles', href: '/mobiles' },
    { label: 'Laptops', href: '/laptops' },
    { label: 'Gaming', href: '/gaming' },
    { label: 'PC Builds', href: '/pc-builds' },
    { label: 'Refurbished', href: '/refurbished' },
    { label: 'Accessories', href: '/accessories' },
  ];

  const helpLinks = [
    { label: 'Repairs', href: '/repairs' },
    { label: 'Track Order', href: '/contact' },
    { label: 'Returns & Refunds', href: '/terms' },
    { label: 'Warranty', href: '/terms' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Stores', href: '/contact' },
    { label: 'Careers', href: '/about' },
    { label: 'Corporate Sales', href: '/corporate' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-white text-neutral-600 border-t border-neutral-200 pt-8 pb-8">
      <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8">
        
        {/* STAY UPDATED (Newsletter Card) matching Screenshot */}
        <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-7 border border-amber-200/70 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Icon & Copy */}
            <div className="flex items-center gap-3 w-full sm:w-auto text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-100/70 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-neutral-950 uppercase tracking-tight">
                  STAY UPDATED
                </h4>
                <p className="text-xs text-neutral-500 font-medium">
                  Subscribe to get exclusive offers, new arrivals and tech updates.
                </p>
              </div>
            </div>

            {/* Right: Email Input with Gold Paper Airplane Button */}
            <form onSubmit={handleSubscribe} className="w-full sm:w-80 flex-shrink-0">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-300 text-neutral-800 text-xs px-3.5 py-2.5 pr-11 rounded-lg outline-none focus:border-amber-500 shadow-2xs placeholder-neutral-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-amber-500 hover:bg-amber-600 active:bg-amber-600 text-neutral-950 rounded-md flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-semibold mt-1">
                  <Check className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </form>

          </div>
        </div>

        {/* Brand & Socials Header Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-neutral-100">
          <Link href="/">
            <TecnoMartLogo />
          </Link>

          {/* Social Icons matching Screenshot */}
          <div className="flex items-center gap-3 text-neutral-700">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/tecnomart_hyd"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919010667726"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            </a>
          </div>
        </div>

        {/* 3 Column Links (SHOP, HELP & SUPPORT, COMPANY) */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-left py-2">
          
          {/* Column 1: SHOP */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-black tracking-wider text-neutral-950 uppercase">
              SHOP
            </h5>
            <ul className="space-y-1.5 text-xs font-medium">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HELP & SUPPORT */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-black tracking-wider text-neutral-950 uppercase">
              HELP & SUPPORT
            </h5>
            <ul className="space-y-1.5 text-xs font-medium">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-black tracking-wider text-neutral-950 uppercase">
              COMPANY
            </h5>
            <ul className="space-y-1.5 text-xs font-medium">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© 2025 Tecno Mart. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            <span className="font-medium">Secure Payments</span>
            <PaymentMethodsRow />
          </div>
        </div>

      </div>
    </footer>
  );
}
