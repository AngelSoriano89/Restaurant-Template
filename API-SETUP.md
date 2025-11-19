# 🔑 API Setup Guide - Restaurant Template

Complete guide to configure all required APIs for your restaurant website.

---

## Table of Contents

1. [Resend API (Email Service)](#1-resend-api-email-service)
2. [Google Maps](#2-google-maps)
3. [Optional APIs](#3-optional-apis)
4. [Environment Variables](#4-environment-variables)
5. [Testing APIs](#5-testing-apis)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Resend API (Email Service)

Resend is used to send emails for reservations and contact form submissions.

### Step 1: Create Account

1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" 
3. Create account with email or GitHub
4. Verify your email address

### Step 2: Get API Key

1. Once logged in, go to **API Keys** section
2. Click "Create API Key"
3. Give it a name (e.g., "Restaurant Template")
4. Select permissions: **Full Access** (or "Sending access" minimum)
5. Click "Create"
6. **Copy the API key** (you won't see it again!)

### Step 3: Configure in Project

Add to `.env.local`:

```env
RESEND_API_KEY=re_123456789_your_actual_key_here
```

### Development vs Production

**For Development/Testing:**
```env
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-personal-email@example.com
```

This will work immediately without domain verification.

**For Production:**

You need to verify your domain:

1. Go to **Domains** in Resend dashboard
2. Click "Add Domain"
3. Enter your domain: `yourdomain.com`
4. Add DNS records to your domain provider:
   - TXT record for verification
   - MX, DKIM, DMARC records for email authentication
5. Wait for verification (can take up to 48 hours)
6. Once verified, update `.env.local`:

```env
RESEND_FROM_EMAIL=reservations@yourdomain.com
RESEND_TO_EMAIL=manager@yourdomain.com
```

### Email Templates

The template includes pre-built email templates:
- `src/emails/reservation-email.tsx` - Customer confirmation
- `src/emails/contact-email.tsx` - Contact form submission

You can customize these files to match your branding.

### Pricing

**Free Tier:**
- 100 emails/day
- 3,000 emails/month
- Perfect for development and small restaurants

**Paid Plans:**
- Starting at $20/month
- 50,000 emails/month
- More volume available

---

## 2. Google Maps

Display your restaurant location on the Contact page.

### Option A: Embed Map (Recommended - Free)

**No API key needed!**

#### Step 1: Get Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your restaurant address
3. Click "Share" button
4. Click "Embed a map" tab
5. Select size: "Medium" or "Large"
6. Copy the **URL from the iframe** `src` attribute

Example iframe:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12..." ...></iframe>
```

Copy only the URL part:
```
https://www.google.com/maps/embed?pb=!1m18!1m12...
```

#### Step 2: Add to Environment Variables

```env
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=!1m18!1m12...
```

**That's it!** The map will show on your Contact page.

### Option B: Google Maps JavaScript API (Advanced)

Only use this if you need advanced features like custom markers or directions.

#### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable **Maps JavaScript API**
4. Enable **Geocoding API** (if needed)

#### Step 2: Create API Key

1. Go to **Credentials**
2. Click "Create Credentials" → "API Key"
3. Copy the API key
4. Click "Restrict Key" (important for security!)
5. Under "API restrictions":
   - Select "Restrict key"
   - Check "Maps JavaScript API"
   - Check "Geocoding API" (if using)
6. Under "Website restrictions":
   - Add your domain: `yourdomain.com/*`
   - Add localhost for development: `localhost/*`
7. Save

#### Step 3: Configure in Project

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC_your_actual_api_key_here
NEXT_PUBLIC_LATITUDE=40.7489
NEXT_PUBLIC_LONGITUDE=-73.9857
```

#### Step 4: Update Map Component

You'll need to modify `src/components/sections/Contact.tsx` to use the JavaScript API instead of the embed.

### Pricing

**Embed Map (Option A):** FREE - Unlimited
**Maps JavaScript API (Option B):** 
- $200 free credit per month
- $7 per 1,000 requests after that
- Most restaurants stay within free tier

---

## 3. Optional APIs

### Google Analytics (Website Analytics)

#### Setup:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account and property
3. Get Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Add tracking code to `src/app/layout.tsx`:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Meta Pixel (Facebook Ads)

#### Setup:

1. Go to [Meta Business Suite](https://business.facebook.com/)
2. Go to Events Manager
3. Create Pixel
4. Get Pixel ID
5. Add to `.env.local`:

```env
NEXT_PUBLIC_META_PIXEL_ID=123456789
```

### OpenTable / Resy Integration

For real-time table reservations:

1. Sign up for [OpenTable](https://www.opentable.com/) or [Resy](https://resy.com/)
2. Get widget/API credentials
3. Embed widget in Reservation section

---

## 4. Environment Variables

### Complete `.env.local` Template

```env
# ================================
# REQUIRED - EMAIL SERVICE
# ================================
RESEND_API_KEY=re_your_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=manager@yourrestaurant.com

# ================================
# REQUIRED - SITE CONFIGURATION
# ================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_EMAIL=contact@yourrestaurant.com

# ================================
# REQUIRED - GOOGLE MAPS (Choose ONE option)
# ================================
# Option A: Embed (Recommended - No API key needed)
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...

# Option B: JavaScript API (Advanced - Requires API key)
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC...
# NEXT_PUBLIC_LATITUDE=40.7489
# NEXT_PUBLIC_LONGITUDE=-73.9857

# ================================
# OPTIONAL - SOCIAL MEDIA
# ================================
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourrestaurant
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourrestaurant
NEXT_PUBLIC_TRIPADVISOR_URL=https://tripadvisor.com/yourrestaurant
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@yourrestaurant

# ================================
# OPTIONAL - ANALYTICS
# ================================
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_META_PIXEL_ID=123456789
```

### Important Notes

- **Never commit `.env.local`** to version control (it's in `.gitignore`)
- Always use `.env.example` as template
- Variables starting with `NEXT_PUBLIC_` are exposed to browser
- Other variables are server-side only (more secure)

---

## 5. Testing APIs

### Test Email (Resend)

#### Method 1: Using the Website

1. Start development server: `npm run dev`
2. Go to reservation form
3. Fill out and submit
4. Check email (both sender and recipient)
5. Check Resend dashboard → Logs

#### Method 2: Using API Route Directly

Create test file `test-email.js`:

```javascript
const { Resend } = require('resend');

const resend = new Resend('your_api_key_here');

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: 'Test Email',
      html: '<p>This is a test email!</p>',
    });
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testEmail();
```

Run: `node test-email.js`

### Test Google Maps

1. Start development server
2. Go to `/contact` page
3. Map should load and show your location
4. Check browser console for errors

**Common issues:**
- Map not showing: Check embed URL is complete
- "For development purposes only" watermark: Normal for testing
- Map loads but wrong location: Update coordinates or address

---

## 6. Troubleshooting

### Resend Issues

**Problem:** "Invalid API key"
- **Solution:** Check API key is correct in `.env.local`
- Make sure no extra spaces
- Restart development server after changing `.env.local`

**Problem:** "Domain not verified"
- **Solution:** For development, use `onboarding@resend.dev` as FROM email
- For production, verify your domain in Resend dashboard

**Problem:** Emails not arriving
- **Solution:** 
  - Check spam folder
  - Verify TO email address
  - Check Resend dashboard → Logs for delivery status
  - Make sure you're not on free tier limits (100/day)

### Google Maps Issues

**Problem:** Map not showing
- **Solution:** 
  - Check embed URL is complete (starts with `https://www.google.com/maps/embed?pb=`)
  - Check for typos in `.env.local`
  - Restart development server

**Problem:** "This page can't load Google Maps correctly"
- **Solution:** 
  - If using JavaScript API: Check API key restrictions
  - Make sure Maps JavaScript API is enabled
  - Check billing is enabled (even for free tier)

**Problem:** Wrong location showing
- **Solution:** 
  - Get new embed URL from Google Maps
  - Make sure you selected correct location when embedding

### General API Issues

**Problem:** Changes not reflecting
- **Solution:** 
  - Restart development server after changing `.env.local`
  - Clear browser cache
  - Check you're editing `.env.local` not `.env.example`

**Problem:** API works locally but not in production
- **Solution:** 
  - Add environment variables to hosting platform (Vercel, Netlify, etc.)
  - Check API key restrictions allow production domain
  - Verify domain is verified (for Resend)

---

## Security Best Practices

### 1. API Keys
- ✅ Never commit API keys to Git
- ✅ Use different keys for development and production
- ✅ Restrict API keys by domain/IP when possible
- ✅ Rotate keys regularly
- ❌ Never expose server-side keys in browser

### 2. Environment Variables
- ✅ Use `NEXT_PUBLIC_` prefix only when needed in browser
- ✅ Keep sensitive keys server-side only
- ✅ Document required variables in `.env.example`

### 3. Rate Limiting
- Consider implementing rate limiting on API routes
- Monitor usage in API dashboards
- Set up alerts for unusual activity

---

## Quick Start Checklist

### Minimum Required (5 minutes)
- [ ] Get Resend API key
- [ ] Add to `.env.local`
- [ ] Get Google Maps embed URL
- [ ] Add to `.env.local`
- [ ] Test reservation form
- [ ] Test contact form

### Recommended (10 minutes)
- [ ] Verify domain in Resend
- [ ] Set up production email addresses
- [ ] Configure API key restrictions
- [ ] Add social media links
- [ ] Test all forms in production

### Optional (30+ minutes)
- [ ] Set up Google Analytics
- [ ] Configure Meta Pixel
- [ ] Add OpenTable/Resy widget
- [ ] Set up monitoring/alerts
- [ ] Configure custom email templates

---

## Need Help?

- **Resend Docs:** [resend.com/docs](https://resend.com/docs)
- **Google Maps Docs:** [developers.google.com/maps](https://developers.google.com/maps)
- **Template Support:** support@example.com

---

**Pro Tip:** Set up development and production API keys separately. This helps track usage and debug issues more easily.
