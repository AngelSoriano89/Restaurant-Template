# ❓ Frequently Asked Questions (FAQ)

Common questions and answers about the Restaurant Template.

---

## Table of Contents

1. [General Questions](#general-questions)
2. [Installation & Setup](#installation--setup)
3. [Customization](#customization)
4. [Email & Forms](#email--forms)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)
7. [Licensing](#licensing)
8. [Support](#support)

---

## General Questions

### What is this template?

This is a professional restaurant website template built with Next.js 14, TypeScript, and Tailwind CSS. It includes all features needed for a modern restaurant website: menu display, online reservations, contact forms, gallery, and more.

### What technologies does it use?

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Icons:** Lucide React

### Do I need coding knowledge to use this?

**Basic customization** (changing text, menu items, images): No coding needed, just edit JSON-like files.

**Advanced customization** (adding features, changing layout): Basic React/Next.js knowledge recommended.

### Is this template responsive?

Yes! Fully responsive and tested on:
- Mobile phones (all sizes)
- Tablets
- Desktops
- Large screens (4K)

### What browsers are supported?

All modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Can I use this for multiple restaurants?

No, one license = one website. To use for multiple restaurants, you need multiple licenses.

---

## Installation & Setup

### How do I install this template?

```bash
1. Extract the ZIP file
2. Open terminal in the folder
3. Run: npm install
4. Copy .env.example to .env.local
5. Run: npm run dev
6. Open http://localhost:3000
```

See [QUICK-SETUP.md](./QUICK-SETUP.md) for detailed instructions.

### What are the system requirements?

- **Node.js:** Version 18.0 or higher
- **npm:** Version 9.0 or higher (comes with Node.js)
- **Operating System:** Windows, macOS, or Linux
- **RAM:** 4GB minimum, 8GB recommended
- **Disk Space:** 500MB for project + dependencies

### How do I check my Node.js version?

```bash
node --version
```

If you need to install or update Node.js, download from [nodejs.org](https://nodejs.org)

### The installation is taking forever, is this normal?

Yes, `npm install` can take 2-5 minutes depending on your internet speed. This is normal for Next.js projects as they have many dependencies.

### I get "command not found: npm" error

You need to install Node.js first. Download from [nodejs.org](https://nodejs.org) and install it.

---

## Customization

### How do I change the restaurant name?

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Restaurant Name",
  // ...
}
```

See [CUSTOMIZATION-GUIDE.md](./CUSTOMIZATION-GUIDE.md) for complete instructions.

### How do I update the menu?

Edit `src/data/menu.ts`. Add, remove, or modify menu items in the `menuItems` array.

### How do I change the colors?

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#your-color",
    // ...
  }
}
```

### How do I add my restaurant's images?

1. Optimize images first (< 300KB each)
2. Place in `/public/images/` folder
3. Update references in data files

See [IMAGE-GUIDE.md](./IMAGE-GUIDE.md) for specifications.

### Can I add more pages?

Yes! Create a new file in `src/app/(marketing)/your-page/page.tsx` and add it to the navigation in `src/lib/constants.ts`.

### How do I change the fonts?

Edit `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

All Google Fonts are available.

### Can I remove sections I don't need?

Yes, simply delete or comment out the section components in your page files.

---

## Email & Forms

### Why do I need Resend API?

Resend handles sending emails for:
- Reservation confirmations
- Contact form submissions
- Customer notifications

### Is Resend free?

Yes, free tier includes:
- 100 emails/day
- 3,000 emails/month

Paid plans start at $20/month for higher volume.

### How do I get a Resend API key?

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create new key
4. Copy and add to `.env.local`

See [API-SETUP.md](./API-SETUP.md) for detailed instructions.

### Can I use Gmail instead of Resend?

Yes, but it's more complex. You need to:
1. Enable 2FA on Gmail
2. Generate app password
3. Modify email code to use Nodemailer

Resend is much easier and more reliable for production.

### Do I need to verify my domain?

**For development:** No, use `onboarding@resend.dev`
**For production:** Yes, verify your domain in Resend dashboard

### Where are the email templates?

In `src/emails/` folder. You can customize the HTML templates to match your branding.

### Emails go to spam, how do I fix this?

1. Verify your domain in Resend
2. Set up SPF, DKIM, and DMARC records
3. Use a real business email as sender
4. Avoid spam trigger words

---

## Deployment

### Where should I deploy this?

**Recommended:** Vercel (free tier available)

**Alternatives:** Netlify, Railway, DigitalOcean

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for all options.

### How much does hosting cost?

**Vercel/Netlify:** FREE for most small restaurants
**Paid options:** $5-20/month

Only cost is usually the domain name (~$10/year).

### Do I need a custom domain?

No, you can use free subdomains:
- Vercel: `yoursite.vercel.app`
- Netlify: `yoursite.netlify.app`

But a custom domain looks more professional.

### How do I add environment variables in production?

Each platform has a settings section where you can add environment variables. See deployment guide for your specific platform.

### Can I deploy without using Git?

Yes, but not recommended. Vercel and Netlify support ZIP uploads, but you lose automatic deployments.

### How long does deployment take?

First deployment: 3-5 minutes
Subsequent deployments: 1-2 minutes

---

## Troubleshooting

### npm install fails with errors

**Common solutions:**
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Make sure you're using Node.js 18+
4. Try `npm cache clean --force`

### Images don't show up

**Check:**
- Images are in `/public/images/` folder
- Paths don't include `/public/` (correct: `/images/hero.jpg`)
- File names match exactly (case-sensitive)
- Images are JPG, PNG, or WebP format

### Google Maps doesn't load

**Check:**
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` is set in `.env.local`
- URL starts with `https://www.google.com/maps/embed?pb=`
- No typos in environment variable name
- Restart dev server after changing `.env.local`

### Forms don't send emails

**Check:**
1. Resend API key is correct
2. `RESEND_FROM_EMAIL` is set
3. For development, use `onboarding@resend.dev`
4. Check Resend dashboard logs
5. Check browser console for errors

### Build fails with TypeScript errors

Fix TypeScript errors shown in terminal. Common issues:
- Missing imports
- Type mismatches
- Undefined variables

Run `npm run build` locally to see all errors.

### "Module not found" errors

**Solutions:**
1. Run `npm install`
2. Check import paths are correct
3. Restart dev server
4. Delete `.next` folder and rebuild

### Site is slow to load

**Optimize:**
- Compress images (use TinyPNG or Squoosh)
- Enable caching (automatic on Vercel/Netlify)
- Check your internet connection
- Use a CDN (included with most hosts)

### Changes don't show up

**Try:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart development server
4. Check you're editing the right file

---

## Licensing

### What can I do with this template?

✅ **Allowed:**
- Use for one client project
- Use for your own restaurant
- Modify code and design
- Deploy to production

❌ **Not Allowed:**
- Resell or redistribute
- Use for multiple projects (need multiple licenses)
- Share with others
- Create derivative templates to sell

### Can I use this for a client project?

Yes! One license covers one end product (one website).

### Can I sell websites made with this template?

Yes, you can charge for your services (design, development, maintenance). But you can't resell the template itself.

### Do I need to keep the "Made by [Author]" credit?

No, you can remove it. Though we appreciate if you keep it! 😊

### Can I refund if I don't like it?

Refunds are available if:
- Item is fundamentally broken
- Item doesn't match description
- Technical issues prevent use

Contact support within 7 days of purchase.

---

## Support

### How do I get support?

1. **Documentation:** Check all included guides first
2. **Email Support:** support@example.com
3. **Item Comments:** Q&A section on marketplace

### What's included in support?

✅ **Included:**
- Installation help
- Configuration guidance
- Bug fixes
- Usage questions

❌ **Not Included:**
- Custom development
- Third-party service issues
- Server/hosting problems

### How long is support provided?

**6 months included** with purchase
**Extended support** available for purchase

### Response time?

We aim to respond within 24 hours (weekdays).

### Can you customize the template for me?

Custom development is available for an additional fee. Contact us for a quote.

---

## Additional Questions

### Is there a demo site?

Yes! Live demo at: [your-demo-url.vercel.app]

### Can I see the code before buying?

Screenshots and feature list are available on the marketplace. Full code access after purchase.

### Does this include a backend/database?

No, this is a frontend template. It uses API routes for form submissions but doesn't include a database. You can add one if needed.

### Can I integrate with a POS system?

Not out of the box, but you can integrate any API. Technical knowledge required.

### Does it support multiple languages?

Not by default, but you can add i18n (internationalization) support with Next.js's built-in features.

### Is there a WordPress version?

No, this is a Next.js (React) template only.

### Can I convert this to another framework?

The template is built specifically for Next.js. Converting to another framework would require significant development work.

### Do you offer updates?

Yes! Free updates include:
- Bug fixes
- Security patches
- Minor feature updates
- Compatibility updates

### How do I update the template?

Updates are announced via email. Download the latest version from your marketplace account.

### Can I request features?

Yes! While we can't guarantee implementation, we appreciate feedback and consider popular requests for future updates.

### Is the code commented?

Yes, all major functions and components include helpful comments.

### Can I remove TypeScript?

Not recommended. TypeScript provides type safety and better development experience. But technically yes, you can rename `.tsx` to `.jsx` and remove types.

### Does it work with npm, yarn, and pnpm?

Yes! All three package managers work. Instructions use npm, but you can use:
- `npm install` → `yarn` or `pnpm install`
- `npm run dev` → `yarn dev` or `pnpm dev`

---

## Still Have Questions?

**Can't find your answer?**

1. Check other documentation files:
   - [README.md](./README.md) - Complete documentation
   - [QUICK-SETUP.md](./QUICK-SETUP.md) - Quick start guide
   - [CUSTOMIZATION-GUIDE.md](./CUSTOMIZATION-GUIDE.md) - Customization help
   - [API-SETUP.md](./API-SETUP.md) - API configuration
   - [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - Deployment help
   - [IMAGE-GUIDE.md](./IMAGE-GUIDE.md) - Image specifications

2. Contact support: support@example.com

3. Check marketplace item comments for Q&A

---

**Pro Tip:** Most questions are answered in the documentation. Use Ctrl+F (Cmd+F) to search for keywords!
