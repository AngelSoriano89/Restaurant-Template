# 🎨 Customization Guide - Restaurant Template

Complete guide to customize the restaurant template for your business.

---

## Table of Contents

1. [Restaurant Information](#1-restaurant-information)
2. [Menu Customization](#2-menu-customization)
3. [Chef's Specialties](#3-chefs-specialties)
4. [Gallery Images](#4-gallery-images)
5. [Colors & Branding](#5-colors--branding)
6. [Fonts](#6-fonts)
7. [Navigation Menu](#7-navigation-menu)
8. [Social Media Links](#8-social-media-links)
9. [Contact Information](#9-contact-information)
10. [SEO & Metadata](#10-seo--metadata)

---

## 1. Restaurant Information

### Location: `src/lib/constants.ts`

Update your restaurant's basic information:

```typescript
export const SITE_CONFIG = {
  name: "Your Restaurant Name",
  tagline: "Authentic Italian Cuisine",
  description: "Experience the finest Italian dining in the heart of the city",
  
  // Contact Information
  phone: "+1 (555) 123-4567",
  email: "contact@yourrestaurant.com",
  address: "123 Main Street, Downtown",
  city: "New York",
  state: "NY",
  zip: "10001",
  
  // Operating Hours
  hours: "Mon-Sun: 11:00 AM - 11:00 PM",
  
  // Social Media
  social: {
    facebook: "https://facebook.com/yourrestaurant",
    instagram: "https://instagram.com/yourrestaurant",
    tripadvisor: "https://tripadvisor.com/yourrestaurant",
    tiktok: "https://tiktok.com/@yourrestaurant",
  },
};
```

---

## 2. Menu Customization

### Location: `src/data/menu.ts`

### Add New Menu Item

```typescript
{
  id: "unique-id-123",
  name: "Dish Name",
  description: "Delicious description of your dish",
  price: 18.99,
  category: "starters", // or pasta, grill, desserts, drinks
  isVegetarian: false,
  isSpicy: true,
  isGlutenFree: false,
  featured: true, // Shows in featured section
  image: "/images/menu/dish-name.jpg", // optional
}
```

### Menu Categories

Edit categories in `src/lib/constants.ts`:

```typescript
export const MENU_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "starters", label: "Starters" },
  { id: "pasta", label: "Pasta" },
  { id: "grill", label: "Grill" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
  // Add your own categories here
];
```

### Bulk Menu Update

Replace the entire `menuItems` array with your menu. Example structure:

```typescript
export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "starter-1",
    name: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic, and basil",
    price: 8.99,
    category: "starters",
    isVegetarian: true,
  },
  // ... more items
];
```

---

## 3. Chef's Specialties

### Location: `src/data/specialties.ts`

Update featured dishes:

```typescript
{
  id: "special-1",
  name: "Signature Dish Name",
  description: "Detailed description highlighting what makes it special",
  longDescription: "Extended description with history or preparation details",
  price: 34.99,
  image: "/images/specialties/dish-1.jpg",
  ingredients: [
    "Fresh ingredient 1",
    "Premium ingredient 2",
    "Special ingredient 3",
  ],
  featured: true,
  isNew: false,
  prepTime: "30-45 minutes",
}
```

**Image Requirements:**
- Size: 800x600px (4:3 ratio)
- Format: JPG or WebP
- File size: < 150KB
- Location: `/public/images/specialties/`

---

## 4. Gallery Images

### Location: `src/data/gallery.ts`

Add your restaurant photos:

```typescript
{
  id: 1,
  src: "/images/gallery/photo-1.jpg",
  alt: "Description for SEO and accessibility",
  category: "food", // food, restaurant, drinks, events
  featured: true,
}
```

**Categories:**
- `food` - Dishes, desserts, plates
- `restaurant` - Interior, ambiance, seating
- `drinks` - Cocktails, wine, beverages
- `events` - Special occasions, celebrations

**Image Requirements:**
- Size: 800x800px (1:1 ratio - square)
- Format: JPG or WebP
- File size: < 150KB each
- Location: `/public/images/gallery/`

---

## 5. Colors & Branding

### Location: `tailwind.config.ts`

### Primary Colors

```typescript
colors: {
  primary: {
    DEFAULT: "#ffb03b",  // Main brand color
    hover: "#ffa012",    // Hover state
    light: "#ffc969",    // Light variant
    dark: "#e69823",     // Dark variant
  },
}
```

### Color Variables

You can also use CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 39 100% 61%;      /* Orange */
  --secondary: 215 25% 27%;    /* Dark Blue */
  --accent: 38 92% 50%;        /* Gold */
  
  /* Update these to match your brand */
}
```

### Common Color Schemes

**Elegant Restaurant:**
```typescript
primary: "#1a1a1a",  // Black
secondary: "#d4af37", // Gold
```

**Modern Cafe:**
```typescript
primary: "#6b4423",  // Coffee brown
secondary: "#f5e6d3", // Cream
```

**Italian Restaurant:**
```typescript
primary: "#bb2f2f",  // Red
secondary: "#228b22", // Green
```

---

## 6. Fonts

### Location: `src/app/layout.tsx`

### Change Fonts

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

### Popular Restaurant Fonts

**Elegant/Fine Dining:**
- Playfair Display
- Cormorant Garamond
- Libre Baskerville

**Modern/Casual:**
- Inter
- Poppins
- Montserrat

**Italian/Traditional:**
- Lora
- Merriweather
- Crimson Text

### Apply Font

```typescript
<body className={yourFont.className}>
  {children}
</body>
```

---

## 7. Navigation Menu

### Location: `src/lib/constants.ts`

Add or remove navigation items:

```typescript
export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  // Add new pages here
  { label: "About", href: "/about" },
  { label: "Reservations", href: "/reservations" },
];
```

### Add New Page

1. Create new page: `src/app/(marketing)/your-page/page.tsx`
2. Add to navigation
3. Create page component

Example:
```typescript
// src/app/(marketing)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container py-20">
      <h1>About Us</h1>
      {/* Your content */}
    </div>
  );
}
```

---

## 8. Social Media Links

### Location: `.env.local`

Update social media URLs:

```env
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/yourrestaurant
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/yourrestaurant
NEXT_PUBLIC_TRIPADVISOR_URL=https://www.tripadvisor.com/yourrestaurant
NEXT_PUBLIC_TIKTOK_URL=https://www.tiktok.com/@yourrestaurant
```

### Add New Social Platform

1. Add to `.env.local`:
```env
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourrestaurant
```

2. Update `src/lib/constants.ts`:
```typescript
social: {
  // ... existing
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
}
```

3. Add icon to Footer component

---

## 9. Contact Information

### Update Contact Details

**File:** `src/lib/constants.ts`

```typescript
export const CONTACT_INFO = {
  phone: "+1 (555) 123-4567",
  email: "contact@yourrestaurant.com",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  hours: {
    weekdays: "11:00 AM - 10:00 PM",
    weekends: "10:00 AM - 11:00 PM",
  },
};
```

### Google Maps

Update in `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

**How to get your map URL:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the `src` URL from the iframe

---

## 10. SEO & Metadata

### Location: `src/app/layout.tsx`

Update meta tags:

```typescript
export const metadata: Metadata = {
  title: "Your Restaurant Name | Authentic Italian Cuisine",
  description: "Experience the finest Italian dining...",
  keywords: ["restaurant", "italian food", "dining", "your city"],
  
  openGraph: {
    title: "Your Restaurant Name",
    description: "Experience the finest Italian dining...",
    url: "https://yourrestaurant.com",
    siteName: "Your Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Your Restaurant Name",
    description: "Experience the finest Italian dining...",
    images: ["/og-image.jpg"],
  },
};
```

### Structured Data (Schema.org)

**File:** `src/lib/metadata.ts`

Update restaurant structured data:

```typescript
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Your Restaurant Name",
  "image": "https://yourrestaurant.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "telephone": "+1-555-123-4567",
  "servesCuisine": "Italian",
  "priceRange": "$$",
  "openingHours": "Mo-Su 11:00-23:00",
}
```

---

## Quick Customization Checklist

### Essential (30 minutes)
- [ ] Update restaurant name and description
- [ ] Change contact information
- [ ] Update operating hours
- [ ] Add social media links
- [ ] Replace hero images (3)
- [ ] Update Google Maps location

### Menu & Content (1-2 hours)
- [ ] Customize menu items
- [ ] Add/update chef's specialties
- [ ] Upload gallery photos
- [ ] Update About section content

### Branding (1 hour)
- [ ] Change primary colors
- [ ] Update fonts (optional)
- [ ] Replace logo
- [ ] Create favicon set
- [ ] Add OG image for social sharing

### Advanced (2+ hours)
- [ ] Add new pages
- [ ] Customize sections
- [ ] Add custom features
- [ ] Optimize images
- [ ] Set up analytics

---

## Common Customizations

### Change Hero Section Text

**File:** `src/components/sections/Hero.tsx`

```typescript
<h1>Your Custom Headline</h1>
<p>Your custom tagline or description</p>
```

### Modify Footer Content

**File:** `src/components/layout/Footer.tsx`

Update footer sections, links, and copyright information.

### Add Custom Section

1. Create component in `src/components/sections/`
2. Import in main page
3. Add to page layout

```typescript
import { CustomSection } from "@/components/sections/CustomSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CustomSection />
      {/* ... other sections */}
    </>
  );
}
```

---

## Need Help?

- Check [README.md](./README.md) for technical documentation
- See [FAQ.md](./FAQ.md) for common questions
- Contact support: support@example.com

---

**Pro Tip:** Make changes incrementally and test after each change to ensure everything works correctly.
