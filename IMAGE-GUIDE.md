# 📸 Image Guide - Restaurant Template

## Required Images & Specifications

This document outlines all images needed for the template and their specifications.

---

## 📁 Directory Structure

```
public/
├── images/
│   ├── hero/               # Hero carousel images
│   ├── about/              # About section image
│   ├── gallery/            # Gallery photos
│   ├── specialties/        # Chef's special dishes
│   └── logo.png            # Restaurant logo
├── favicon.ico             # Browser tab icon
├── apple-touch-icon.png    # iOS home screen icon
├── og-image.jpg            # Social media preview
└── site.webmanifest        # PWA manifest
```

---

## 🎨 Image Specifications

### 1. Hero Carousel (3 images minimum)

**Location**: `/public/images/hero/`

**Files**:
- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`

**Specifications**:
- **Size**: 1920x1080px (16:9 ratio)
- **Format**: JPG or WebP
- **File size**: < 300KB each (optimized)
- **Content**: 
  - High-quality photos of restaurant interior, food, or ambiance
  - Avoid text on images (overlay is added by template)
  - Good lighting and composition

**Example Names**:
```
hero-1.jpg  → Restaurant interior with elegant dining setup
hero-2.jpg  → Signature dish close-up
hero-3.jpg  → Bar area or outdoor seating
```

---

### 2. About Section

**Location**: `/public/images/about/`

**File**: `restaurant-story.jpg`

**Specifications**:
- **Size**: 1200x800px (3:2 ratio)
- **Format**: JPG or WebP
- **File size**: < 250KB
- **Content**:
  - Restaurant interior, chef at work, or kitchen
  - Shows the character/story of your restaurant
  - Professional quality

---

### 3. Chef's Specialties (6 images)

**Location**: `/public/images/specialties/`

**Files**:
- `dish-1.jpg` through `dish-6.jpg`

**Specifications**:
- **Size**: 800x600px (4:3 ratio)
- **Format**: JPG or WebP
- **File size**: < 150KB each
- **Content**:
  - Professional food photography
  - Well-plated dishes
  - Good lighting (natural or studio)
  - Clean background

**Tips**:
- Use white or neutral backgrounds
- Show garnishes and details
- Consistent style across all dishes
- Shot from 45-degree angle for best presentation

---

### 4. Gallery (8+ images)

**Location**: `/public/images/gallery/`

**Files**:
- `restaurant-interior-1.jpg`
- `dish-1.jpg`
- `dish-2.jpg`
- `cocktails-1.jpg`
- `dish-3.jpg`
- `pizza-1.jpg`
- `restaurant-interior-2.jpg`
- `dessert-1.jpg`

**Specifications**:
- **Size**: 800x800px (1:1 ratio - square)
- **Format**: JPG or WebP
- **File size**: < 150KB each
- **Content Mix**:
  - 40% food photos
  - 30% restaurant interior/ambiance
  - 20% drinks/cocktails
  - 10% events/happy customers

**Categories**:
```typescript
"food"        → Dishes, desserts, etc.
"restaurant"  → Interior, seating, decor
"drinks"      → Cocktails, wine, beverages
"events"      → Special occasions, parties
```

---

### 5. Logo

**Location**: `/public/images/logo.png`

**Specifications**:
- **Size**: 200x200px (square)
- **Format**: PNG with transparency
- **File size**: < 50KB
- **Content**:
  - Restaurant logo or name
  - Transparent background
  - Works on dark backgrounds
  - Clear and readable at small sizes

---

### 6. Favicon & Icons

**Location**: `/public/`

**Files Required**:
```
favicon.ico          → 16x16, 32x32, 48x48px multi-size
favicon-16x16.png    → 16x16px
favicon-32x32.png    → 32x32px
apple-touch-icon.png → 180x180px
android-chrome-192x192.png → 192x192px
android-chrome-512x512.png → 512x512px
```

**Specifications**:
- **Format**: PNG (except .ico)
- **File size**: < 20KB each
- **Content**: Simplified version of logo
- **Background**: Solid color (matches brand)

**Tools to Generate**:
- [Favicon.io](https://favicon.io/) - Free favicon generator
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Complete favicon package

---

### 7. Social Media (Open Graph)

**Location**: `/public/og-image.jpg`

**Specifications**:
- **Size**: 1200x630px (1.91:1 ratio)
- **Format**: JPG
- **File size**: < 200KB
- **Content**:
  - Restaurant logo + tagline
  - Appetizing food photo
  - Clean, readable text
  - High contrast

**Preview**: Shows when sharing on Facebook, Twitter, LinkedIn

---

## 🎯 Image Optimization Tips

### Before Upload:

1. **Resize** to exact dimensions specified
2. **Compress** using:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)
3. **Convert** to WebP for better compression (optional)
4. **Test** load times

### Target File Sizes:
- Hero images: < 300KB
- Gallery images: < 150KB
- Specialty dishes: < 150KB
- Icons: < 50KB

### Tools:
```bash
# Batch resize (requires ImageMagick)
mogrify -resize 800x600 -quality 85 *.jpg

# Convert to WebP
cwebp -q 80 input.jpg -o output.webp
```

---

## 📐 Aspect Ratios Quick Reference

| Location | Ratio | Pixels | Usage |
|----------|-------|--------|-------|
| Hero | 16:9 | 1920x1080 | Full screen backgrounds |
| About | 3:2 | 1200x800 | Story/content images |
| Specialties | 4:3 | 800x600 | Featured dishes |
| Gallery | 1:1 | 800x800 | Grid layout |
| Logo | 1:1 | 200x200 | Header, footer |
| OG Image | 1.91:1 | 1200x630 | Social media |

---

## 🖼️ Where to Get Stock Images

### Free Options:
- [Unsplash](https://unsplash.com/) - High-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images

### Paid Options (Better Quality):
- [Shutterstock](https://shutterstock.com/)
- [Adobe Stock](https://stock.adobe.com/)
- [iStock](https://istockphoto.com/)

### Food-Specific:
- [Foodiesfeed](https://foodiesfeed.com/) - Free food photos
- [The Stocks](https://thestocks.im/) - Curated food images

---

## ✅ Checklist Before Launch

### Hero Images (3)
- [ ] hero-1.jpg (1920x1080, < 300KB)
- [ ] hero-2.jpg (1920x1080, < 300KB)
- [ ] hero-3.jpg (1920x1080, < 300KB)

### About
- [ ] restaurant-story.jpg (1200x800, < 250KB)

### Specialties (6)
- [ ] dish-1.jpg through dish-6.jpg (800x600, < 150KB each)

### Gallery (8+)
- [ ] Mix of food, interior, drinks (800x800, < 150KB each)

### Branding
- [ ] logo.png (200x200, transparent, < 50KB)
- [ ] favicon.ico
- [ ] apple-touch-icon.png
- [ ] og-image.jpg (1200x630, < 200KB)

---

## 🎨 Photography Best Practices

### Food Photography:
1. **Lighting**: Natural light or soft studio lighting
2. **Angle**: 45-degree angle for most dishes
3. **Styling**: Clean plates, fresh ingredients
4. **Focus**: Sharp focus on main element
5. **Colors**: Vibrant, appetizing colors

### Interior Photography:
1. **Lighting**: Well-lit, avoid harsh shadows
2. **Composition**: Show seating, ambiance
3. **Clean**: Tidy tables, organized space
4. **People**: Optional, adds warmth
5. **Details**: Showcase unique features

---

## 🔄 Updating Images Later

To replace an image:
1. Keep the same filename
2. Match the dimensions
3. Optimize file size
4. Clear browser cache
5. Test on all devices

---

## 📞 Need Help?

If you need help sourcing or editing images:
- Contact support
- Hire a professional food photographer
- Use AI tools (Midjourney, DALL-E) for concepts

---

## 📝 Notes

- All images should be in RGB color mode
- Use sRGB color profile
- Save with moderate JPEG quality (80-85%)
- Test on retina/high-DPI displays
- Consider accessibility (alt text descriptions)

---

**Pro Tip**: Invest in professional photography for best results. High-quality images significantly impact conversion rates and user perception.
