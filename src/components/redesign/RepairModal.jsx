"use client";

import React, { useState } from 'react';
import { X, Wrench, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function RepairModal({ isOpen, onClose }) {
  const [deviceType, setDeviceType] = useState('Smartphone / iPhone');
  const [issue, setIssue] = useState('Screen Replacement');
  const [modelName, setModelName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello TecnoMart Service Center! 🛠️\nI would like to book a repair:\n- Name: ${customerName}\n- Phone: ${phone}\n- Device: ${deviceType} (${modelName || 'Not specified'})\n- Issue: ${issue}\n\nPlease confirm my repair slot & estimate.`
    );
    window.open(`https://wa.me/919010667726?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-neutral-950 uppercase tracking-tight">
              Book A Repair Slot
            </h3>
            <p className="text-xs text-neutral-500 font-medium">
              Free diagnosis • 100% Genuine parts • 90-day warranty
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Device Type
            </label>
            <select
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="w-full h-10 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg outline-none focus:border-amber-500 font-medium"
            >
              <option value="Smartphone / iPhone">Smartphone / iPhone</option>
              <option value="Laptop / MacBook">Laptop / MacBook</option>
              <option value="Gaming PC / Desktop">Gaming PC / Desktop</option>
              <option value="iPad / Tablet">iPad / Tablet</option>
              <option value="Smartwatch">Smartwatch</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Device Model Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. iPhone 14 Pro, Dell XPS 15..."
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="w-full h-10 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Problem / Issue
            </label>
            <select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full h-10 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg outline-none focus:border-amber-500 font-medium"
            >
              <option value="Screen Replacement">Screen Replacement & Broken Glass</option>
              <option value="Battery Drain / Replacement">Battery Replacement & Health Drain</option>
              <option value="No Power / Motherboard Issue">No Power / Dead Device / IC Repair</option>
              <option value="Liquid / Water Damage">Liquid / Water Damage Treatment</option>
              <option value="Charging Port / Mic / Speaker">Charging Port / Mic / Speaker</option>
              <option value="Software / OS / Virus Clean">Software / OS Re-installation / Virus Clean</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Rahul"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full h-10 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-10 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Confirm & Book On WhatsApp</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-neutral-400 font-medium">
            Doorstep pickup & drop available across Hyderabad!
          </p>
        </form>

      </div>
    </div>
  );
}
