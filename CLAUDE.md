# Laundry & Linen - Project Documentation

## Overview
Marketing website for a laundry pickup/delivery service using CleanCloud as the operational backend. Built with Next.js 15 (App Router), Tailwind CSS v4, and shadcn/ui components.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (CSS-based config)
- **UI Components:** shadcn/ui style components
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Backend:** CleanCloud API (orders, payments, customers)
- **B2B Leads:** Web3Forms

## Project Structure
```
laundryandlinen/
├── app/
│   ├── layout.tsx              # Root layout, fonts, meta
│   ├── page.tsx                # Homepage
│   ├── (marketing)/            # Marketing pages (route group)
│   │   ├── services/
│   │   ├── pricing/
│   │   ├── areas/
│   │   ├── how-it-works/
│   │   ├── about/
│   │   └── contact/
│   ├── order/                  # Order flow
│   │   ├── page.tsx           # Multi-step order form
│   │   ├── confirmation/
│   │   └── track/[orderId]/
│   ├── commercial/             # B2B funnel
│   │   ├── page.tsx           # Commercial landing
│   │   └── quote/             # B2B lead form
│   └── api/                    # API routes
│       ├── cleancloud/        # CleanCloud proxy routes
│       └── b2b-leads/         # Web3Forms integration
├── components/
│   ├── layout/                # Navbar, Footer, MobileCTA
│   ├── marketing/             # Hero, Features, HowItWorks, etc.
│   ├── order/                 # OrderForm, ServiceSelector, etc.
│   ├── b2b/                   # B2BHero, LeadCaptureForm
│   └── ui/                    # shadcn-style components
├── lib/
│   ├── cleancloud/            # CleanCloud API client
│   ├── constants/             # Service areas, pricing
│   └── utils.ts               # Helper functions (cn, etc.)
└── public/                    # Static assets
```

## Key Files
- `lib/constants/service-areas.ts` - ZIP code validation for Phoenix Metro
- `lib/constants/pricing.ts` - Display pricing (actual pricing from CleanCloud)
- `lib/cleancloud/client.ts` - CleanCloud API client with rate limiting

## CleanCloud Integration
CleanCloud handles:
- Customer management (addCustomer, loginCustomer)
- Order creation and tracking
- Payment processing
- Driver dispatch
- Notifications

API endpoints proxy through Next.js API routes to keep credentials secure.

## Environment Variables
```
CLEANCLOUD_API_KEY=         # CleanCloud API key (Grow subscription)
CLEANCLOUD_STORE_ID=        # Store/location ID
WEB3FORMS_KEY=              # For B2B lead submissions
NEXT_PUBLIC_GA_ID=          # Google Analytics
SENTRY_DSN=                 # Error monitoring
NEXT_PUBLIC_SITE_URL=       # Production URL
```

## Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Service Areas
Phoenix Metro Area covering:
- West Valley (Glendale, Peoria, Surprise, etc.)
- North Phoenix (Paradise Valley, Scottsdale North, etc.)
- Central Phoenix (Downtown, Arcadia, Biltmore, etc.)
- East Valley (Tempe, Mesa, Chandler, Gilbert, etc.)

## Design System
- **Primary:** Teal/Cyan (#0891b2) - Clean, fresh
- **Accent:** Orange (#f97316) - CTAs, highlights
- **Font (Body):** DM Sans
- **Font (Display):** Lexend

## Notes
- CleanCloud Grow subscription required for API access
- No database needed - CleanCloud stores all data
- B2B leads submitted via Web3Forms
- Order tracking pulls from CleanCloud API
