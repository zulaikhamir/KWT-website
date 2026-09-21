# SEO Metadata Implementation

## Overview

This document describes the SEO metadata implementation using `react-helmet-async` for the KWT website.

## Implementation Summary

### 1. Core SEO Component

**Location:** `src/components/shared/SEO.tsx`

A reusable TypeScript component that handles all page metadata including:
- Page titles with automatic KWT branding suffix
- Meta descriptions
- Open Graph (OG) metadata for Facebook/LinkedIn sharing
- Twitter/X Card metadata
- Canonical URLs
- Article-specific metadata for event pages
- Keywords optimization

### 2. Configuration

**Setup:** `src/App.tsx`
- Wrapped the entire app with `<HelmetProvider>` from `react-helmet-async`
- This enables the SEO component to work across all pages

### 3. Pages with SEO Metadata

All important pages now include unique, relevant metadata:

| Page | Title | Special Features |
|------|-------|------------------|
| **Home** | "Home \| KWT" | Custom keywords for community discovery |
| **About** | "About Us \| KWT" | Mission and story focused |
| **Events** | "Events \| KWT" | Event and workshop keywords |
| **Event Detail** | `{event.title} \| KWT` | Dynamic metadata per event, article schema |
| **Get Involved** | "Get Involved \| KWT" | Membership and partnership keywords |
| **FAQ** | "Frequently Asked Questions \| KWT" | Support-focused keywords |
| **Privacy** | "Privacy Policy \| KWT" | Legal document metadata |
| **404** | "404 - Page Not Found" | No KWT suffix (using `noTitleSuffix`) |

### 4. Event Detail Pages (Dynamic Metadata)

Event detail pages use dynamic metadata based on the event data:
- Title: Uses the event's actual title
- Description: Uses the event's description
- Type: Set to `"article"` for better social sharing
- Article metadata includes:
  - Published time (event date)
  - Section (event category)
  - Tags (category, format, and generic KWT tags)

### 5. Open Graph & Twitter Cards

Every page includes:
- **OG Image:** Uses `/images/og-image.png` by default (KWT branded image)
- **OG Type:** "website" for most pages, "article" for event details
- **Twitter Card:** "summary_large_image" for rich previews
- **OG Site Name:** "Kashmiri Women in Tech (KWT)"

## Usage Examples

### Basic Usage
```tsx
import SEO from "@/components/shared/SEO";

export default function MyPage() {
  return (
    <>
      <SEO
        title="My Page"
        description="A description of my page for search engines."
        url="https://kashmiriwomenintech.org/my-page"
      />
      {/* Page content */}
    </>
  );
}
```

### Advanced Usage (Event Detail)
```tsx
<SEO
  title={event.title}
  description={event.description}
  url={`https://kashmiriwomenintech.org/events/${event.slug}`}
  type="article"
  article={{
    publishedTime: event.dateISO,
    section: event.category,
    tag: ["Community Session", "Virtual", "KWT Events"],
  }}
  keywords="AI career, community Q&A, women in tech"
/>
```

### Disable Title Suffix
```tsx
<SEO
  title="404 - Page Not Found"
  description="Page not found."
  noTitleSuffix // Disables " | KWT" suffix
/>
```

## SEO Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | Yes | Page title (auto-appends " \| KWT" unless `noTitleSuffix` is true) |
| `description` | string | Yes | Meta description for search engines and social sharing |
| `url` | string | No | Canonical URL (should be full absolute URL) |
| `image` | string | No | OG image URL (defaults to `/images/og-image.png`) |
| `type` | "website" \| "article" \| "profile" | No | OG type (defaults to "website") |
| `article` | object | No | Article-specific metadata (publishedTime, section, tags, etc.) |
| `twitterCard` | string | No | Twitter card type (defaults to "summary_large_image") |
| `noTitleSuffix` | boolean | No | Disable " \| KWT" suffix (defaults to false) |
| `keywords` | string | No | Additional keywords (appended to default KWT keywords) |

## Default Keywords

Every page includes these default keywords:
- Kashmiri women in tech
- women in technology
- tech community
- Kashmir
- mentorship
- jobs
- internships
- networking

Page-specific keywords are appended to these defaults.

## How to Verify Metadata Locally

### Method 1: Browser DevTools
1. Run the dev server: `npm run dev`
2. Open the page in your browser
3. Right-click → "Inspect" or press F12
4. Go to the Elements tab (Chrome) or Inspector tab (Firefox)
5. Look at the `<head>` section
6. You should see all the meta tags rendered by react-helmet-async

### Method 2: View Page Source
1. Run the dev server: `npm run dev`
2. Open the page in your browser
3. Right-click → "View Page Source" (or Ctrl+U)
4. Search for `<meta` tags in the source
5. **Note:** In development, some meta tags might only appear after JavaScript loads

### Method 3: Social Media Preview Tools

Test how your pages will appear when shared on social media:

- **Facebook/LinkedIn Debugger:** https://developers.facebook.com/tools/debug/
  - Paste your page URL
  - Click "Scrape Again" to fetch latest metadata
  - See the preview card

- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
  - Paste your page URL
  - See the Twitter card preview
  - Note: May require Twitter developer access

- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
  - Paste your page URL
  - See the LinkedIn sharing preview

### Method 4: Browser Extensions
- **Meta SEO Inspector** (Chrome/Firefox)
- **SEO Meta in 1 Click** (Chrome)
- **HeadingsMap** (Firefox)

### Method 5: Production Build
For the most accurate test (especially for pre-rendering):
```bash
npm run build
npm run preview
```
Then use any of the above methods on the preview server.

## Important Notes

1. **Absolute URLs:** The component automatically converts relative image paths to absolute URLs for OG images
2. **No Pre-rendering:** Since this is a client-side React app, meta tags are injected by JavaScript. For better SEO, consider:
   - Server-Side Rendering (SSR) with a framework like Next.js
   - Static Site Generation (SSG)
   - Pre-rendering service like Prerender.io
3. **Production URLs:** Update all `https://kashmiriwomenintech.org` URLs when deploying to production
4. **OG Image Requirements:**
   - Recommended size: 1200x630px
   - Format: PNG or JPG
   - Max size: 8MB
   - Current image: `/images/og-image.png` (KWT branded)

## Files Changed

1. `src/components/shared/SEO.tsx` - New SEO component
2. `src/App.tsx` - Added HelmetProvider wrapper
3. `src/pages/Home.tsx` - Added SEO metadata
4. `src/pages/About.tsx` - Added SEO metadata
5. `src/pages/Events.tsx` - Added SEO metadata
6. `src/pages/EventDetail.tsx` - Added dynamic SEO metadata
7. `src/pages/GetInvolved.tsx` - Added SEO metadata
8. `src/pages/FAQ.tsx` - Added SEO metadata
9. `src/pages/Privacy.tsx` - Added SEO metadata
10. `src/pages/NotFound.tsx` - Added SEO metadata
11. `src/components/sections/events/PastEventCard.tsx` - Fixed unused import

## Future Enhancements

Consider these improvements for better SEO:
1. Add structured data (JSON-LD) for events using schema.org
2. Implement dynamic sitemap.xml generation
3. Add robots.txt configuration
4. Set up Google Analytics and Search Console
5. Implement server-side rendering for better crawlability
6. Add breadcrumb structured data
7. Optimize image alt texts across the site
