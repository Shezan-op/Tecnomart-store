"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TecnoMartLogo } from './Icons';
import { Search, ShoppingBag, Wrench, Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onOpenRepairModal, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Mobiles', href: '/mobiles' },
    { label: 'Laptops', href: '/laptops' },
    { label: 'Gaming', href: '/gaming' },
    { label: 'PC Builds', href: '/pc-builds' },
    { label: 'Refurbished', href: '/refurbished' },
    { label: 'Repairs', href: '/repairs' },
    { label: 'Accessories', href: '/accessories' },
    { label: 'Corporate', href: '/corporate' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
          isScrolled
            ? 'shadow-sm border-b border-neutral-200/80 py-2.5'
            : 'border-b border-neutral-100 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="inline-block" aria-label="TecnoMart Home">
                <TecnoMartLogo />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[13.5px] font-semibold transition-colors tracking-tight ${
                      isActive
                        ? 'text-amber-500 font-bold'
                        : 'text-neutral-700 hover:text-amber-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Button */}
            <div className="flex items-center gap-1.5 sm:gap-4">
              
              {/* Search Toggle / Input */}
              <div className="relative flex items-center">
                {searchOpen ? (
                  <div className="flex items-center bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-300">
                    <input
                      type="text"
                      placeholder="Search devices, parts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="bg-transparent text-sm sm:text-xs text-neutral-800 outline-none w-32 sm:w-48 placeholder-neutral-400"
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-neutral-500 hover:text-neutral-700 ml-1 p-1"
                      aria-label="Close search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    aria-label="Search products"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 hover:text-amber-500 transition-colors rounded-full hover:bg-neutral-100 active:scale-95"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Shopping Cart Icon */}
              <Link
                href="/#popular"
                aria-label="Cart"
                className="min-w-[44px] min-h-[44px] relative flex items-center justify-center text-neutral-700 hover:text-amber-500 transition-colors rounded-full hover:bg-neutral-100 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-amber-500 text-neutral-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Desktop Book A Repair Button */}
              <button
                onClick={onOpenRepairModal}
                className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase shadow-sm transition-all duration-200 hover:shadow active:scale-95 cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Book A Repair</span>
              </button>

              {/* Mobile Hamburger Toggle Button (min 44x44px touch target) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-800 hover:text-amber-500 transition-colors rounded-xl active:bg-neutral-100 cursor-pointer"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto flex flex-col justify-between shadow-2xl border-t border-neutral-200"
              onClick={(e) => e.stopPropagation()}
              style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <TecnoMartLogo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-w-[44px] min-h-[44px] rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 active:scale-95 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories & Links List */}
                <div className="py-4 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 px-3 block mb-1">
                    Explore Storefront
                  </span>
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all min-h-[48px] ${
                          isActive
                            ? 'bg-amber-500/15 text-amber-600'
                            : 'text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                      </Link>
                    );
                  })}
                </div>

                {/* Secondary Pages Links */}
                <div className="py-2 border-t border-neutral-100 grid grid-cols-2 gap-2 text-xs font-semibold text-neutral-600">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-neutral-50"
                  >
                    About TecnoMart
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-neutral-50"
                  >
                    Contact &amp; Store
                  </Link>
                  <Link
                    href="/privacy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-neutral-50"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-neutral-50"
                  >
                    Terms &amp; Warranty
                  </Link>
                </div>
              </div>

              {/* Bottom Quick Contact Strip */}
              <div className="pt-4 border-t border-neutral-100 space-y-2.5 mt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenRepairModal) onOpenRepairModal();
                  }}
                  className="w-full min-h-[48px] bg-amber-500 active:bg-amber-600 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book A Repair Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/919010667726?text=Hi%20TecnoMart!%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] bg-[#25D366] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919010667726"
                    className="min-h-[44px] bg-neutral-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
