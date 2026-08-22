"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import InfoBelt from '../components/InfoBelt';
import ScrollStackSection from '../components/ScrollStackSection';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main>
      <Navigation />
      <InfoBelt direction="left" text="PREMIUM DEVICES •" />
      <ScrollStackSection />
      <Footer />
    </main>
  );
}
