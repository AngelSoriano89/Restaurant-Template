# ⚡ Quick Setup Guide - 5 Minutes

Get your restaurant website running in 5 minutes!

---

## Step 1: Install Dependencies (1 min)

```bash
npm install
```

---

## Step 2: Download Images (2 min)

**Option A: Automatic (Recommended)**
```bash
chmod +x download-images.sh
./download-images.sh
```

**Option B: Manual**
Download these images to `public/images/`:

### Hero (3 images):
- [Hero 1](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop) → `hero/hero-1.jpg`
- [Hero 2](https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop) → `hero/hero-2.jpg`
- [Hero 3](https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop) → `hero/hero-3.jpg`

### About:
- [About](https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&h=800&fit=crop) → `about/restaurant-story.jpg`

### Specialties (6 images):
- [Dish 1](https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop) → `specialties/dish-1.jpg`
- [Dish 2](https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop) → `specialties/dish-2.jpg`
- [Dish 3](https://images.unsplash.com/photo-1580959375944-8f8070e7aa34?w=800&h=600&fit=crop) → `specialties/dish-3.jpg`
- [Dish 4](https://images.unsplash.com/photo-1476124369491-c4b7efb99d7b?w=800&h=600&fit=crop) → `specialties/dish-4.jpg`
- [Dish 5](https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&h=600&fit=crop) → `specialties/dish-5.jpg`
- [Dish 6](https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop) → `specialties/dish-6.jpg`

### Gallery (8 images):
- [Interior 1](https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=800&fit=crop) → `gallery/restaurant-interior-1.jpg`
- [Burger](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop) → `gallery/dish-1.jpg`
- [Pizza](https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=800&fit=crop) → `gallery/pizza-1.jpg`
- [Cocktails](https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop) → `gallery/cocktails-1.jpg`
- [Salad](https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop) → `gallery/dish-2.jpg`
- [Pasta](https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=800&fit=crop) → `gallery/dish-3.jpg`
- [Interior 2](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop) → `gallery/restaurant-interior-2.jpg`
- [Dessert](https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=800&fit=crop) → `gallery/dessert-1.jpg`

---

## Step 3: Configure Environment (1 min)

```bash
cp .env.example .env.local
```

**Edit `.env.local`:**
```env
# Email (Use this for testing)
RESEND_API_KEY=your_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_EMAIL=contact@yourrestaurant.com

# Google Maps (Example location included)
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968505959!3d40.75889097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus
```

---

## Step 4: Run Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## Step 5: Customize (Optional)

### Change Restaurant Name
Edit `src/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Restaurant Name",
  // ...
}
```

### Update Menu
Edit `src/data/menu.ts` - Add/remove menu items

### Update Specialties
Edit `src/data/specialties.ts` - Add your chef's specials

---

## 🚀 Ready to Deploy?

### Get Resend API Key:
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys
3. Create a new key
4. Add to `.env.local`

### Deploy to Vercel:
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

---

## 🆘 Troubleshooting

### Images not showing?
- Check paths don't include `/public/`
- Correct: `/images/hero/hero-1.jpg`
- Wrong: `/public/images/hero/hero-1.jpg`

### Map not working?
- Get your own embed URL from Google Maps
- Make sure it starts with `https://www.google.com/maps/embed?pb=`

### Emails not sending?
- For testing, use `RESEND_FROM_EMAIL=onboarding@resend.dev`
- For production, verify your domain in Resend

---

## 📚 Full Documentation

See [README.md](./README.md) for complete documentation.

---

**Need Help?** Check the documentation or contact support.
