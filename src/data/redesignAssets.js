// Premium studio-quality tech product assets with transparent / clean seamless backgrounds matching the screenshot

export const ASSETS = {
  // Brand Logo
  logoGold: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><path d="M50 15L62 38H78L65 52L70 75L50 62L30 75L35 52L22 38H38L50 15Z" fill="%23F59E0B"/><path d="M50 25L58 41H70L60 52L64 70L50 60L36 70L40 52L30 41H42L50 25Z" fill="%23D97706"/><path d="M12 28C22 28 32 35 38 45L34 50C29 42 21 36 12 36V28Z" fill="%23F59E0B"/><path d="M88 28C78 28 68 35 62 45L66 50C71 42 79 36 88 36V28Z" fill="%23F59E0B"/><path d="M5 40C18 40 28 48 34 58L30 62C25 54 16 47 5 47V40Z" fill="%23D97706"/><path d="M95 40C82 40 72 48 66 58L70 62C75 54 84 47 95 47V40Z" fill="%23D97706"/></svg>`,

  // Hero Pedestal Products (Studio / Clean transparent & cutout styles)
  heroPc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
  heroLaptop: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
  heroPhone: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",

  // Category Visuals (Clean transparent / studio-lit)
  catMobile: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80",
  catLaptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
  catGamingPc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
  catAccessories: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",

  // Gaming Banner Visual
  gamingBannerPc: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",

  // Popular Picks Products
  productSmartwatch: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
  productHeadphones: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
  productGpu: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
  productGamingLaptop: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
  productIphone15: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80",

  // Highlight Cards
  refurbishedLaptop: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
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
    subtitle: "8GB",
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
