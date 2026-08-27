// Local high-resolution transparent assets & fallback assets for 100% reliable rendering across all preview & production environments

export const ASSETS = {
  // Brand Logo
  logoGold: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><path d="M50 15L62 38H78L65 52L70 75L50 62L30 75L35 52L22 38H38L50 15Z" fill="%23F59E0B"/><path d="M50 25L58 41H70L60 52L64 70L50 60L36 70L40 52L30 41H42L50 25Z" fill="%23D97706"/><path d="M12 28C22 28 32 35 38 45L34 50C29 42 21 36 12 36V28Z" fill="%23F59E0B"/><path d="M88 28C78 28 68 35 62 45L66 50C71 42 79 36 88 36V28Z" fill="%23F59E0B"/><path d="M5 40C18 40 28 48 34 58L30 62C25 54 16 47 5 47V40Z" fill="%23D97706"/><path d="M95 40C82 40 72 48 66 58L70 62C75 54 84 47 95 47V40Z" fill="%23D97706"/></svg>`,

  // Hero Pedestal Products (High-res transparent cutouts from public/)
  heroPc: "/bento-grid-images/pc.png",
  heroLaptop: "/bento-grid-images/mackbook.png",
  heroPhone: "/bento-grid-images/samsungs24.png",

  // Category Visuals (Clean transparent PNGs)
  catMobile: "/bento-grid-images/samsungs24.png",
  catLaptop: "/bento-grid-images/mackbook.png",
  catGamingPc: "/bento-grid-images/pc.png",
  catAccessories: "/bento-grid-images/headsetoverthehead.png",

  // Gaming Banner Visual
  gamingBannerPc: "/white-setup.jpg",

  // Popular Picks Products
  productSmartwatch: "/bento-grid-images/headsetoverthehead.png",
  productHeadphones: "/bento-grid-images/headsetoverthehead.png",
  productGpu: "/GPU-4050.png",
  productGamingLaptop: "/bento-grid-images/mackbook.png",
  productIphone15: "/bento-grid-images/samsungs24.png",

  // Highlight Cards
  refurbishedLaptop: "/bento-grid-images/mackbook.png",
  repairTechnician: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",

  // Review Avatars
  avatar1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  avatar2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  avatar3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
  avatar4: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",

  // Map Imagery
  mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
};

export const CATEGORIES = [
  {
    id: "mobiles",
    name: "Mobiles",
    subtitle: "Latest Smartphones",
    image: ASSETS.catMobile,
    isImage: true,
  },
  {
    id: "laptops",
    name: "Laptops",
    subtitle: "For Work & Play",
    image: ASSETS.catLaptop,
    isImage: true,
  },
  {
    id: "gaming-pcs",
    name: "Gaming PCs",
    subtitle: "Built to Perform",
    image: ASSETS.catGamingPc,
    isImage: true,
  },
  {
    id: "refurbished",
    name: "Refurbished",
    subtitle: "Smart Savings",
    iconType: "refurbished",
    isImage: false,
  },
  {
    id: "repairs",
    name: "Repairs",
    subtitle: "Fast & Reliable",
    iconType: "repairs",
    isImage: false,
  },
  {
    id: "accessories",
    name: "Accessories",
    subtitle: "Complete Your Tech",
    image: ASSETS.catAccessories,
    isImage: true,
  },
];

export const TRUST_BADGES = [
  {
    id: 1,
    title: "Best Prices",
    subtitle: "Guaranteed",
    iconType: "price",
  },
  {
    id: 2,
    title: "Expert Engineers",
    subtitle: "Certified Professionals",
    iconType: "engineer",
  },
  {
    id: 3,
    title: "Genuine Parts",
    subtitle: "100% Original",
    iconType: "parts",
  },
  {
    id: 4,
    title: "Warranty",
    subtitle: "Upto 2 Years",
    iconType: "warranty",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "Trusted Since 2016",
    subtitle: "Serving Thousands of Happy Customers",
    iconType: "trusted",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    subtitle: "Best Value for Your Money",
    iconType: "affordable",
  },
  {
    id: 3,
    title: "Fast Delivery",
    subtitle: "Pan India Safe & Secure",
    iconType: "delivery",
  },
  {
    id: 4,
    title: "Easy Returns",
    subtitle: "Hassle-Free Experience",
    iconType: "returns",
  },
  {
    id: 5,
    title: "Secure Payments",
    subtitle: "100% Safe Transactions",
    iconType: "secure",
  },
  {
    id: 6,
    title: "After Sales Support",
    subtitle: "We're Here For You",
    iconType: "support",
  },
];

export const POPULAR_PRODUCTS = [
  {
    id: "p1",
    name: "boAt Wave Ultima",
    subtitle: "Smartwatch",
    price: "₹1,499",
    rawPrice: 1499,
    badge: "HOT",
    badgeType: "red",
    image: ASSETS.productSmartwatch,
  },
  {
    id: "p2",
    name: "Sony WH-1000XM5",
    subtitle: "Wireless Headphones",
    price: "₹24,990",
    rawPrice: 24990,
    badge: "NEW",
    badgeType: "green",
    image: ASSETS.productHeadphones,
  },
  {
    id: "p3",
    name: "Zotac Gaming RTX 4060",
    subtitle: "8GB Dedicated GPU",
    price: "₹32,999",
    rawPrice: 32999,
    badge: "BESTSELLER",
    badgeType: "gold",
    image: ASSETS.productGpu,
  },
  {
    id: "p4",
    name: "Asus TUF F15",
    subtitle: "Gaming Laptop",
    price: "₹79,990",
    rawPrice: 79990,
    badge: "HOT",
    badgeType: "red",
    image: ASSETS.productGamingLaptop,
  },
  {
    id: "p5",
    name: "iPhone 15 (128GB)",
    subtitle: "Black",
    price: "₹69,900",
    rawPrice: 69900,
    badge: "NEW",
    badgeType: "green",
    image: ASSETS.productIphone15,
  },
];
