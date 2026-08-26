"use client";

import React, { useState, useEffect } from 'react';
import { TecnoMartLogo } from './Icons';
import { Search, ShoppingBag, Wrench, Menu, X } from 'lucide-react';

export default function Header({ onOpenRepairModal, cartCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mobiles', href: '#mobiles' },
    { label: 'Laptops', href: '#laptops' },
    { label: 'Gaming', href: '#gaming' },
    { label: 'PC Builds', href: '#gaming' },
    { label: 'Refurbished', href: '#refurbished' },
    { label: 'Repairs', href: '#repairs' },
    { label: 'Accessories', href: '#accessories' },
    { label: 'Corporate', href: '#corporate' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'shadow-sm border-b border-neutral-200/80 py-2.5'
          : 'border-b border-neutral-100 py-3.5'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="inline-block">
              <TecnoMartLogo />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-medium text-neutral-700 hover:text-amber-500 transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input / Icon */}
            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="flex items-center bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-300">
                  <input
                    type="text"
                    placeholder="Search devices, parts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="bg-transparent text-xs text-neutral-800 outline-none w-36 sm:w-48 placeholder-neutral-400"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-neutral-500 hover:text-neutral-700 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 text-neutral-700 hover:text-amber-500 transition-colors rounded-full hover:bg-neutral-100"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Shopping Cart Icon with Badge */}
            <a
              href="#cart"
              aria-label="Cart"
              className="relative p-2 text-neutral-700 hover:text-amber-500 transition-colors rounded-full hover:bg-neutral-100"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-neutral-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Book A Repair Button */}
            <button
              onClick={onOpenRepairModal}
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase shadow-sm transition-all duration-200 hover:shadow active:scale-95"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Book A Repair</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-amber-500 transition-colors rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-200 pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-sm font-medium text-neutral-800 hover:text-amber-500 hover:bg-neutral-50 rounded"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenRepairModal) onOpenRepairModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 text-neutral-950 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book A Repair</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
