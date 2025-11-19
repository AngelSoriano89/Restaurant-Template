# 🍽️ Restaurant Website Template

## Premium Restaurant & Food Business Website Template

A modern, fully responsive restaurant website template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for restaurants, cafes, bars, pizzerias, and any food-related business.

---

## ✨ Features

### 🎨 Design & UX
- ✅ Modern, elegant design with smooth animations
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Hero section with image carousel
- ✅ Interactive menu with search & filters
- ✅ Gallery with lightbox
- ✅ Smooth scroll animations
- ✅ Dark/light color schemes

### 🚀 Functionality
- ✅ Online reservation system with email notifications
- ✅ Contact form with validation
- ✅ Dynamic menu management
- ✅ Chef's specialties showcase
- ✅ Google Maps integration
- ✅ Social media links
- ✅ SEO optimized with structured data

### 🛠️ Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Icons**: Lucide React

---

## 📦 What's Included

```
restaurant-template/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (marketing)/        # Marketing pages layout
│   │   ├── api/                # API routes (contact, reservations)
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Page sections (Hero, Menu, etc.)
│   │   ├── shared/             # Reusable components
│   │   └── ui/                 # UI components (shadcn/ui)
│   ├── data/                   # Menu, specialties, gallery data
│   ├── lib/                    # Utilities, constants, validations
│   ├── hooks/                  # Custom React hooks
│   └── types/                  # TypeScript type definitions
├── public/
│   ├── images/                 # Image assets
│   │   ├── hero/               # Hero carousel images
│   │   ├── gallery/            # Gallery images
│   │   ├── specialties/        # Chef's specials images
│   │   └── about/              # About section images
│   └── favicon.ico             # Favicon and meta images
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies
```

---

## 🚀 Quick Start

### 1. Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Configuration

#### A. Copy environment variables
```bash
cp .env.example .env.local
```

#### B. Configure your restaurant details

Edit `src/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Restaurant Name",
  description: "Your restaurant description",
  phone: "+1 (555) 123-4567",
  email: "contact@yourrestaurant.com",
  address: "123 Main Street, City, State, ZIP",
  hours: "Mon-Sun: 11:00 AM - 11:00 PM",
}
```

#### C. Set up email service (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev  # For development
RESEND_TO_EMAIL=your-restaurant@email.com
```

#### D. Configure Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant address
3. Click "Share" → "Embed a map"
4. Copy the URL from the iframe
5. Add to `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

---

## 📝 Customization Guide

### 1. Update Restaurant Information

**File**: `src/lib/constants.ts`

Update all restaurant details:
- Name, description, contact info
- Operating hours
- Social media links
- Navigation menu items

### 2. Customize Menu

**File**: `src/data/menu.ts`

Add/edit menu items:
```typescript
{
  id: "unique-id",
  name: "Dish Name",
  description: "Dish description",
  price: 15,
  category: "starters",  // or pasta, grill, etc.
  isVegetarian: true,    // optional
  isSpicy: false,        // optional
  featured: true,        // optional
}
```

**Categories**: Edit `MENU_CATEGORIES` in `constants.ts`

### 3. Add Chef's Specialties

**File**: `src/data/specialties.ts`

```typescript
{
  id: "special-1",
  name: "Special Dish Name",
  description: "Detailed description",
  price: 35,
  image: "/images/specialties/dish-1.jpg",
  ingredients: ["ingredient1", "ingredient2"],
  featured: true,
}
```

### 4. Update Gallery

**File**: `src/data/gallery.ts`

Add your restaurant photos:
```typescript
{
  id: 1,
  src: "/images/gallery/photo-1.jpg",
  alt: "Description of photo",
  category: "food",  // or restaurant, drinks, events
}
```

### 5. Replace Images

#### Required Images:

**Hero Carousel** (1920x1080px):
- `/public/images/hero/hero-1.jpg`
- `/public/images/hero/hero-2.jpg`
- `/public/images/hero/hero-3.jpg`

**About Section** (1200x800px):
- `/public/images/about/restaurant-story.jpg`

**Specialties** (800x600px):
- `/public/images/specialties/dish-1.jpg` through `dish-6.jpg`

**Gallery** (800x800px):
- `/public/images/gallery/` - 8+ images

**Logo**:
- `/public/images/logo.png` (200x200px)

**Favicon**:
- `/public/favicon.ico`
- `/public/apple-touch-icon.png` (180x180px)

### 6. Customize Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: "#ffb03b",  // Your brand color
    hover: "#ffa012",
    // ...
  },
}
```

### 7. Update SEO

**File**: `src/lib/metadata.ts`

Edit meta tags, Open Graph, and Schema.org structured data.

---

## 📧 Email Configuration

### Option 1: Resend (Recommended)

**For Development**:
```env
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**For Production**:
1. Verify your domain in Resend
2. Update:
```env
RESEND_FROM_EMAIL=reservations@yourdomain.com
```

### Option 2: Nodemailer with Gmail

1. Install: `npm install nodemailer`
2. Generate Gmail App Password
3. Configure `.env.local`:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Works with:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

---

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

---

## 📊 Performance

- ✅ Lighthouse Score: 90+ (all categories)
- ✅ Core Web Vitals optimized
- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ SEO friendly with structured data

---

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This is a commercial template. One license = one website.

**Allowed**:
- ✅ Use for one client project
- ✅ Modify code and design
- ✅ Deploy to production

**Not Allowed**:
- ❌ Resell or redistribute template
- ❌ Use for multiple projects with one license
- ❌ Share with others

---

## 💡 Customization Tips

### Adding New Pages

1. Create in `src/app/(marketing)/new-page/page.tsx`
2. Add to navigation in `constants.ts`

### Adding New Menu Categories

1. Update type in `src/types/menu.ts`
2. Add to `MENU_CATEGORIES` in `constants.ts`
3. Add items to `src/data/menu.ts`

### Changing Fonts

Edit `src/app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

---

## 🐛 Common Issues

### Issue: Google Maps not showing
**Solution**: Check that `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` is set correctly in `.env.local`

### Issue: Emails not sending
**Solution**: Verify `RESEND_API_KEY` is correct and `RESEND_FROM_EMAIL` uses a verified domain

### Issue: Images not loading
**Solution**: Ensure images are in `/public/images/` and paths don't include `/public/`

---

## 📞 Support

For support and questions:
- Email: support@restauranttemplate.com
- Documentation: Check all included .md files
- GitHub: https://github.com/AngelSoriano89

---

## 🎉 Thank You!

Thank you for purchasing this template! We hope it helps you create an amazing website for your restaurant.

**Rate this template** and leave a review if you enjoyed it!

---

## 🔄 Updates

Check for updates regularly to get:
- New features
- Bug fixes
- Security patches
- Performance improvements

---

Made with ❤️ by AngelSoriano89 | https://github.com/AngelSoriano89
