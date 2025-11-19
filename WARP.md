# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Nombre de Proyecto is a Next.js 16 restaurant website template, featuring a single-page marketing site with sections for menu, specialties, gallery, reservations, and contact. The site uses TypeScript, React 19, Tailwind CSS, and Framer Motion for animations.

## Essential Commands

### Development
```powershell
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

### Testing Changes
After making code changes, always run:
```powershell
pnpm lint         # Check for linting errors
pnpm build        # Verify build succeeds
```

## Architecture

### Route Structure
- Uses Next.js App Router with route groups
- `src/app/(marketing)/` - Main marketing layout group with shared Header/Footer
  - `page.tsx` - Homepage with all sections
  - `contact/page.tsx` - Standalone contact page
  - `gallery/page.tsx` - Standalone gallery page
  - `menu/page.tsx` - Standalone menu page
- `src/app/api/` - API routes
  - `reservation/route.ts` - Handles reservation submissions via Resend
  - `contact/route.ts` - Handles contact form submissions via Resend

### Component Organization
```
src/components/
├── layout/        # Header, Footer, ScrollProgress
├── sections/      # Page sections (Hero, About, Menu, Specialties, Gallery, Reservation, Contact, Map)
├── shared/        # Reusable components (BackToTop, etc.)
└── ui/            # shadcn/ui components (Button, Card, Dialog, Form, Input, Label, Select, Tabs, Textarea)
```

### Data Management
All content is defined in `src/data/`:
- `menu.ts` - Menu items with categories, prices, descriptions
- `specialties.ts` - Featured specialty dishes with images
- `gallery.ts` - Gallery image data

Configuration in `src/lib/`:
- `constants.ts` - Site config, nav links, social links, menu categories, time slots, animation variants
- `validations.ts` - Zod schemas for forms
- `utils.ts` - Utility functions (cn, etc.)
- `metadata.ts` - SEO metadata helpers

### Path Aliases
Uses `@/*` alias mapping to `src/*` (configured in `tsconfig.json`)

### Email Integration
- Uses Resend for transactional emails
- API routes send both admin notifications and customer confirmations
- Requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` environment variables

## Key Technologies

- **Next.js 16** - App Router, React Server Components
- **React 19** - Latest features including React Compiler (babel-plugin-react-compiler)
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Animations (with optimization via Next.js experimental.optimizePackageImports)
- **shadcn/ui** - Radix UI components with Tailwind
- **React Hook Form + Zod** - Form validation
- **Resend** - Email service
- **Husky + lint-staged** - Git hooks for code quality

## Development Notes

### Image Management
- Static images stored in `public/images/` with subdirectories:
  - `hero/` - Carousel images (1920x1080px recommended)
  - `about/` - About section images
  - `gallery/` - Gallery images (1200x800px recommended)
  - `specialties/` - Specialty dish images (800x600px recommended)
  - `logo.png` - Restaurant logo
- Next.js Image component configured for webp/avif formats
- Remote image support for Cloudinary and Unsplash

### Styling Conventions
- Uses Tailwind CSS utilities exclusively
- Custom theme colors defined in `tailwind.config.ts` (primary: #ffb03b)
- Responsive design with mobile-first approach
- Framer Motion variants defined in `constants.ts` for consistent animations

### Environment Variables
Required for core functionality (see `.env.example`):
- `NEXT_PUBLIC_SITE_URL` - Site URL
- `RESEND_API_KEY` - Email service API key
- `RESEND_FROM_EMAIL` - Sender email address
- `RESEND_TO_EMAIL` - Admin notification email

Optional:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - For map integration
- Supabase variables (if using database)
- Cloudinary variables (if using cloud images)
- Google Analytics measurement ID

### Code Quality
- Prettier with Tailwind plugin sorts classes automatically
- ESLint with Next.js and Prettier configs
- lint-staged configured to run on staged files: `*.{js,jsx,ts,tsx}` → eslint + prettier, `*.{json,md,yml,yaml}` → prettier
- Production builds remove console logs except error/warn

### Form Handling Pattern
Forms use React Hook Form + Zod validation:
1. Define schema in `src/lib/validations.ts`
2. Create form with `useForm` and `zodResolver`
3. Submit to API route (e.g., `/api/reservation`)
4. API validates with same Zod schema
5. Return success/error response

## Common Modifications

### Adding Menu Items
Edit `src/data/menu.ts` - add new items with category, price, description, dietary flags

### Adding Specialties
Edit `src/data/specialties.ts` - add image path, ingredients, description

### Changing Restaurant Info
Edit `src/lib/constants.ts` - update SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS, TIME_SLOTS

### Modifying Colors
Edit `tailwind.config.ts` - update primary color values and custom theme

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/(marketing)/page.tsx`
3. Add navigation link to NAV_LINKS in `constants.ts` if needed

## Known Issues Fixed

### ESLint Configuration
- Removed conflicting `eslint.config.mjs` - use only `.eslintrc.json`
- ESLint now works correctly with Next.js 16

### TypeScript Errors Resolved
- Fixed NAV_LINKS usage in components - use `link.label` not `link.name`
- Fixed MENU_CATEGORIES iteration - use `category.id` and `category.label`
- All TypeScript checks pass without errors

### Build Verification
- Project builds successfully with `next build`
- No type errors in production build
- All routes compile correctly
