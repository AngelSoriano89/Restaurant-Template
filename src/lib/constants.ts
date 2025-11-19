// src/lib/constants.ts
// 🎨 PLANTILLA - Personaliza estos valores para tu restaurante

// Site Configuration
export const SITE_CONFIG = {
  name: "Gourmet Haven Restaurant",
  description: "Fine Dining & Artisan Cuisine in the Heart of the City",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_PHONE || "+1 (555) 123-4567",
  email: process.env.NEXT_PUBLIC_EMAIL || "contact@gourmethaven.com",
  address: "123 Main Street, Downtown, New York, NY 10001, USA",
  hours: "Mon-Sun: 11:00 AM - 11:00 PM",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/yourrestaurant",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/yourrestaurant",
  tripadvisor: process.env.NEXT_PUBLIC_TRIPADVISOR_URL || "https://www.tripadvisor.com/yourrestaurant",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@yourrestaurant",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#menu", label: "Menu" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
] as const;

// Menu Categories - Personaliza según tu tipo de restaurante
export const MENU_CATEGORIES = [
  { id: "all", label: "Show All" },
  { id: "starters", label: "Appetizers" },
  { id: "pasta", label: "Pasta" },
  { id: "grill", label: "Grill" },
  { id: "wok", label: "Wok" },
  { id: "ceviches", label: "Ceviches" },
  { id: "poke-bowl", label: "Poke Bowl" },
  { id: "pizzas-classic", label: "Classic Pizzas" },
  { id: "pizzas-deluxe", label: "Deluxe Pizzas" },
  { id: "calzone", label: "Calzone" },
  { id: "burger", label: "Burgers" },
  { id: "lobster", label: "Lobster" },
  { id: "shrimp", label: "Shrimp" },
  { id: "grilled", label: "Grilled" },
] as const;

// Operating Hours
export const OPERATING_HOURS = {
  weekday: {
    open: "11:00",
    close: "23:00",
  },
  weekend: {
    open: "11:00",
    close: "23:00",
  },
} as const;

// Reservation Time Slots
export const TIME_SLOTS = [
  "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30"
] as const;

// SEO Metadata
export const SEO_METADATA = {
  title: "Gourmet Haven Restaurant | Fine Dining & Artisan Cuisine",
  description: "Experience exceptional fine dining with our artisan cuisine. Fresh ingredients, innovative recipes, and unforgettable flavors in the heart of the city.",
  keywords: [
    "restaurant",
    "fine dining",
    "artisan cuisine",
    "gourmet food",
    "italian restaurant",
    "seafood restaurant",
    "pizza",
    "pasta",
    "reservations",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gourmet Haven Restaurant",
  },
} as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
} as const;
