"use client";
import React from 'react';
import CardNav from './CardNav';

export default function Navigation() {
  const items = [
    {
      label: "Laptops",
      bgColor: "#0d0d0d",
      textColor: "#fff",
      links: [
        { label: "New Laptops", href: "/#laptops", ariaLabel: "Browse New Laptops" },
        { label: "Refurbished Laptops", href: "/#laptops", ariaLabel: "Browse Refurbished Laptops" }
      ]
    },
    {
      label: "Mobiles",
      bgColor: "#141414",
      textColor: "#fff",
      links: [
        { label: "New Mobiles", href: "/#mobiles", ariaLabel: "Browse New Mobiles" },
        { label: "Refurbished Mobiles", href: "/#mobiles", ariaLabel: "Browse Refurbished Mobiles" }
      ]
    },
    {
      label: "Services",
      bgColor: "#1a1a1a",
      textColor: "#fff",
      links: [
        { label: "Location", href: "/#location", ariaLabel: "Store Location in Towlichowki" },
        { label: "Book a Visit", href: "/services", ariaLabel: "Book a Technician Visit" }
      ]
    }
  ];

  return (
    <CardNav
      items={items}
      baseColor="#000000"
      menuColor="#fde047"
      buttonBgColor="#fde047"
      buttonTextColor="#000"
      ease="power3.out"
    />
  );
}

export { Navigation as Navbar };
