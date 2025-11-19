# 🚀 Deployment Guide - Restaurant Template

Complete guide to deploy your restaurant website to production.

---

## Table of Contents

1. [Pre-Deployment Checklist](#1-pre-deployment-checklist)
2. [Vercel (Recommended)](#2-vercel-recommended)
3. [Netlify](#3-netlify)
4. [Railway](#4-railway)
5. [DigitalOcean App Platform](#5-digitalocean-app-platform)
6. [Custom Server (VPS)](#6-custom-server-vps)
7. [Domain Configuration](#7-domain-configuration)
8. [Post-Deployment](#8-post-deployment)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Pre-Deployment Checklist

### Before You Deploy

- [ ] Project builds successfully locally (`npm run build`)
- [ ] All environment variables configured in `.env.local`
- [ ] Resend domain verified (for production emails)
- [ ] Restaurant information updated in `src/lib/constants.ts`
- [ ] Menu and specialties customized
- [ ] Images optimized and uploaded
- [ ] Google Maps configured with your location
- [ ] Test all forms (reservation, contact)
- [ ] SEO metadata updated
- [ ] Social media links added
- [ ] Remove all test/placeholder data

### Required Environment Variables

Make sure you have these ready:

```env
RESEND_API_KEY=re_your_key
RESEND_FROM_EMAIL=reservations@yourdomain.com
RESEND_TO_EMAIL=manager@yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_EMAIL=contact@yourrestaurant.com
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

---

## 2. Vercel (Recommended)

**Best for:** Next.js projects (built by the creators of Next.js)

**Pros:** 
- Free tier available
- Zero configuration for Next.js
- Automatic deployments from Git
- CDN included
- Excellent performance

**Pricing:** Free for small projects, $20/month for Pro

### Step-by-Step Deployment

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings (no changes needed)
6. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

#### 3. Add Environment Variables

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Key: `RESEND_API_KEY`
   - Value: `re_your_actual_key`
   - Environment: Production, Preview, Development (select all)
3. Click "Save"
4. Redeploy for variables to take effect

#### 4. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain: `yourdomain.com`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)

### Automatic Deployments

Every push to `main` branch automatically deploys to production!

```bash
git add .
git commit -m "Update menu"
git push
```

Watch deployment progress in Vercel dashboard.

---

## 3. Netlify

**Best for:** Alternative to Vercel, also excellent for Next.js

**Pros:**
- Free tier available
- Simple deployment
- Form handling built-in
- CDN included

**Pricing:** Free for small projects, $19/month for Pro

### Step-by-Step Deployment

#### 1. Push to GitHub

Same as Vercel (see above)

#### 2. Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`
6. Click "Deploy site"

#### 3. Add Environment Variables

1. Go to Site Settings → Environment Variables
2. Click "Add a variable"
3. Add each environment variable
4. Save and redeploy

#### 4. Configure for Next.js

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install Netlify plugin:
```bash
npm install --save-dev @netlify/plugin-nextjs
```

Commit and push changes.

---

## 4. Railway

**Best for:** Full-stack apps with databases

**Pros:**
- Easy to use
- Database hosting included
- Automatic HTTPS
- $5 free credit monthly

**Pricing:** Pay-as-you-go, starts at ~$5/month

### Step-by-Step Deployment

#### 1. Push to GitHub

Same as Vercel (see above)

#### 2. Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway auto-detects Next.js

#### 3. Add Environment Variables

1. Click on your project
2. Go to "Variables" tab
3. Add each environment variable
4. Save

#### 4. Get Domain

1. Go to "Settings" tab
2. Click "Generate Domain"
3. Your site is live at `your-app.up.railway.app`

#### 5. Custom Domain (Optional)

1. Click "Add Custom Domain"
2. Enter your domain
3. Configure DNS records as shown

---

## 5. DigitalOcean App Platform

**Best for:** Scalable production apps

**Pros:**
- Robust infrastructure
- Easy scaling
- $200 free credit for new users

**Pricing:** Starts at $5/month

### Step-by-Step Deployment

#### 1. Push to GitHub

Same as above

#### 2. Deploy to DigitalOcean

1. Go to [digitalocean.com/products/app-platform](https://www.digitalocean.com/products/app-platform)
2. Click "Create App"
3. Connect GitHub
4. Select repository
5. Choose branch: `main`
6. Configure:
   - Name: `restaurant-website`
   - Environment: Node.js
   - Build command: `npm run build`
   - Run command: `npm start`
7. Click "Next"

#### 3. Add Environment Variables

1. Add environment variables in "Environment Variables" section
2. Choose plan (Basic $5/month recommended)
3. Click "Create Resources"

#### 4. Custom Domain

1. Go to "Settings" → "Domains"
2. Add custom domain
3. Configure DNS

---

## 6. Custom Server (VPS)

**Best for:** Full control, advanced users

**Requirements:** VPS (DigitalOcean Droplet, AWS EC2, Linode, etc.)

### Step-by-Step Deployment

#### 1. Set Up Server

```bash
# SSH into your server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2 (process manager)
npm install -g pm2
```

#### 2. Clone Repository

```bash
# Create app directory
mkdir -p /var/www
cd /var/www

# Clone your repo
git clone https://github.com/yourusername/your-repo.git restaurant
cd restaurant

# Install dependencies
npm install

# Copy environment variables
nano .env.local
# Paste your environment variables, save and exit
```

#### 3. Build Application

```bash
npm run build
```

#### 4. Start with PM2

```bash
# Start app
pm2 start npm --name "restaurant" -- start

# Save PM2 config
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

#### 5. Configure Nginx

```bash
# Install Nginx
apt install -y nginx

# Create Nginx config
nano /etc/nginx/sites-available/restaurant
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
ln -s /etc/nginx/sites-available/restaurant /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

#### 6. Set Up SSL with Let's Encrypt

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

### Updating Your App

```bash
cd /var/www/restaurant
git pull
npm install
npm run build
pm2 restart restaurant
```

---

## 7. Domain Configuration

### Using Vercel/Netlify/Railway

Your hosting provider will give you DNS records. Typically:

**A Record:**
```
Type: A
Name: @
Value: [IP provided by host]
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: [domain provided by host]
```

### Popular Domain Registrars

**GoDaddy:**
1. Go to DNS Management
2. Add/Edit A record and CNAME
3. Save changes

**Namecheap:**
1. Go to Advanced DNS
2. Add new records
3. Save changes

**Cloudflare:**
1. Go to DNS
2. Add records
3. Ensure proxy (orange cloud) is ON for security

### DNS Propagation

- Takes 5 minutes to 48 hours
- Check status: [dnschecker.org](https://dnschecker.org)

---

## 8. Post-Deployment

### Essential Tasks

#### 1. Verify Everything Works

- [ ] Visit your website
- [ ] Test navigation
- [ ] Submit reservation form
- [ ] Submit contact form
- [ ] Check emails arrive
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Verify Google Maps shows

#### 2. Set Up Monitoring

**Vercel Analytics (Free on Pro plan):**
- Automatic, no setup needed

**Google Analytics:**
1. Add GA4 property
2. Get Measurement ID
3. Add to `.env` variables
4. Redeploy

**UptimeRobot (Free):**
1. Sign up at [uptimerobot.com](https://uptimerobot.com)
2. Add monitor for your domain
3. Get alerts if site goes down

#### 3. Performance Optimization

**Test with:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

**Optimize:**
- Image sizes (already optimized by Next.js)
- Add caching headers
- Enable compression

#### 4. Security

**Add Security Headers** (in `next.config.js`):

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
  }
}
```

#### 5. Backup

**Automated Git Backups:**
```bash
# Set up daily commits (on server)
crontab -e

# Add this line (runs daily at 2 AM):
0 2 * * * cd /var/www/restaurant && git add . && git commit -m "Auto backup" && git push
```

**Database Backups:**
If you add a database later, set up automated backups.

---

## 9. Troubleshooting

### Build Failures

**Problem:** Build fails with TypeScript errors
- **Solution:** Run `npm run build` locally first
- Fix all TypeScript errors before deploying

**Problem:** "Module not found" error
- **Solution:** 
  - Delete `node_modules` and `package-lock.json`
  - Run `npm install` again
  - Push `package-lock.json` to Git

### Environment Variable Issues

**Problem:** Environment variables not working
- **Solution:**
  - Check spelling and formatting
  - Restart/redeploy after adding variables
  - Make sure `NEXT_PUBLIC_` prefix is used for client-side variables

### Email Issues

**Problem:** Emails not sending in production
- **Solution:**
  - Verify domain in Resend
  - Use verified `FROM` email address
  - Check Resend dashboard logs

### Map Not Loading

**Problem:** Google Maps doesn't show
- **Solution:**
  - Check `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` is set
  - Verify URL starts with `https://www.google.com/maps/embed?pb=`
  - Check for CORS errors in browser console

### Domain Not Working

**Problem:** Domain shows "404" or doesn't load
- **Solution:**
  - Check DNS records are correct
  - Wait for DNS propagation (up to 48 hours)
  - Clear browser cache
  - Try incognito mode

### Performance Issues

**Problem:** Slow page load times
- **Solution:**
  - Optimize images (already done with Next.js)
  - Enable caching
  - Use CDN (included with Vercel/Netlify)
  - Check database queries (if applicable)

---

## Quick Deployment Comparison

| Platform | Difficulty | Cost | Best For |
|----------|-----------|------|----------|
| **Vercel** | ⭐ Easy | Free - $20/mo | Next.js apps (Recommended) |
| **Netlify** | ⭐ Easy | Free - $19/mo | Alternative to Vercel |
| **Railway** | ⭐⭐ Medium | $5/mo | Apps with databases |
| **DigitalOcean** | ⭐⭐ Medium | $5/mo | Scalable production |
| **VPS** | ⭐⭐⭐ Hard | $5-20/mo | Full control |

---

## Recommended Setup for Restaurant

**For Most Users:**
1. **Hosting:** Vercel (free tier)
2. **Domain:** Namecheap or Cloudflare (~$10/year)
3. **Email:** Resend (free tier, 3,000 emails/month)
4. **Analytics:** Google Analytics (free)
5. **Total Cost:** ~$10/year for domain only!

---

## Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Template Support:** support@example.com

---

**Congratulations!** 🎉 Your restaurant website is now live!
