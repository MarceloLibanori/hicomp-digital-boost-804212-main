# SEO & Performance Audit Report
**Date:** 2026-05-14
**Issue:** LEE-28
**Project:** HiComp Hidráulica — hicomp.com.br

---

## Executive Summary

The HiComp website has a strong SEO foundation already in place. This report documents the improvements implemented in this session and identifies remaining opportunities.

---

## Improvements Implemented (This Session)

### 1. Security Headers — HSTS Added
**File:** `vercel.json`
**Change:** Added `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
**Impact:** HIGH — Enforces HTTPS and enables HSTS preload list eligibility. Prevents protocol downgrade attacks and improves trust signals.

**Existing headers (already in place):**
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: camera=(), microphone=(), geolocation=()
- ✅ Content-Security-Policy (report-only mode)
- ✅ **NEW** Strict-Transport-Security (max-age=31536000; includeSubDomains; preload)

### 2. Core Web Vitals Monitoring
**File:** `src/main.tsx`
**Change:** Implemented native PerformanceObserver-based monitoring for all 5 key metrics
**Impact:** HIGH — Enables data-driven performance optimization via GA4

**Metrics tracked:**
| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | < 2500ms | 2500–4000ms | > 4000ms |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.1–0.25 | > 0.25 |
| INP (Interaction to Next Paint) | < 200ms | 200–500ms | > 500ms |
| FCP (First Contentful Paint) | < 1800ms | 1800–3000ms | > 3000ms |
| TTFB (Time to First Byte) | < 800ms | 800–1800ms | > 1800ms |

Data is sent as GA4 custom events (`LCP`, `CLS`, `INP`, `FCP`, `TTFB`) with `metric_rating` property. No external dependency needed.

---

## Existing Implementation — Already Solid

### Performance (Already Implemented)
- ✅ Hero image uses `<picture>` with WebP + responsive srcset (480w/1024w)
- ✅ Hero has `loading="eager"`, `decoding="sync"`, `fetchPriority="high"` — correct LCP optimization
- ✅ Hero image preloaded via `<link rel="preload">` in HTML head
- ✅ Image has explicit `width="1440" height="700"` — prevents CLS
- ✅ Vite manual chunks: vendor-react, vendor-query, vendor-ui, vendor-seo, vendor-forms
- ✅ CSS minification enabled
- ✅ Service worker registered for PWA offline support
- ✅ React.lazy + Suspense for all route-level code splitting

### SEO (Already Implemented)
- ✅ Complete meta tags: title, description, keywords, author, robots
- ✅ Open Graph: og:type, og:locale, og:site_name, og:title, og:description, og:url, og:image (1200x630)
- ✅ Twitter Cards: summary_large_image with all fields
- ✅ Geo tags for local SEO (São Paulo coordinates)
- ✅ hreflang for pt-BR and x-default
- ✅ Canonical URL
- ✅ JSON-LD schemas: LocalBusiness, BreadcrumbList, WebPage, Service, FAQPage, Article
- ✅ Prerender pipeline: all 105 routes get static HTML with injected schemas
- ✅ Sitemap.xml with 105 routes
- ✅ robots.txt with permissions for GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- ✅ llms.txt for LLM indexing
- ✅ Breadcrumbs on all subpages
- ✅ Google Analytics 4 configured (G-V27X8HHR8R)

### Caching (Already Implemented)
- ✅ `/assets/` → Cache-Control: public, max-age=31536000, immutable
- ✅ Images → public, max-age=2592000 (30 days), stale-while-revalidate=86400
- ✅ sitemap.xml → max-age=86400
- ✅ manifest.json → max-age=86400

---

## Current Bundle Analysis

| Chunk | Size | Status |
|-------|------|--------|
| InfoDetail | 568KB | ⚠️ Large — see recommendation below |
| topicContents | 440KB | ⚠️ Large — dynamic data for 80+ topics |
| vendor-react | 162KB | ✅ Acceptable |
| vendor-ui | 87KB | ✅ Acceptable |
| index (main) | 84KB | ✅ Acceptable |
| topicsData | 100KB | ✅ Acceptable |
| Home | 77KB | ✅ Acceptable |

**Root Cause of InfoDetail size:** `import.meta.glob` with `{ eager: true }` generates URL mappings for all 718 images in `/src/assets/`. This is required to resolve dynamic image paths from `topicContents` data.

**Recommendation for further optimization:**
- Move images from `/src/assets/` to `/public/` for topic content pages (use stable URLs without hashing)
- Or restructure topicContents to use public-directory image paths directly
- This would allow removing the 718-image eager glob entirely, reducing InfoDetail by ~400KB

---

## PWA Status

- ✅ `manifest.json` — fully configured (name, icons 48/192/512px, categories, screenshots)
- ✅ `sw.js` — service worker with cache-first for static assets
- ✅ Service worker registered in `main.tsx` (production-only)
- ✅ `theme-color` and `apple-mobile-web-app-*` meta tags

**Note:** PWA is functional and installable. For a B2B industrial site, PWA ROI is limited — current implementation is appropriate.

---

## Estimated Performance Scores (Based on Code Review)

| Metric | Estimated | Basis |
|--------|-----------|-------|
| Lighthouse Performance (mobile) | 75–85 | Hero preload + LCP optimization present |
| Lighthouse SEO | 95–100 | All meta, schema, canonical present |
| Lighthouse Accessibility | 85–92 | Alt text present, ARIA labels used |
| Lighthouse Best Practices | 90–95 | HTTPS, security headers |
| LCP | ~1.5–2.5s | Hero WebP preloaded, fetchPriority=high |
| CLS | ~0.05–0.1 | Images have explicit width/height |
| FID/INP | ~100–200ms | Multiple chunk splitting reduces TBT |

> ⚠️ These are estimates. Run actual Lighthouse via Chrome DevTools or PageSpeed Insights against the live deployment for real numbers.

---

## Recommended Next Steps (Prioritized)

### HIGH IMPACT (do next)

1. **Submit to Google Search Console**
   - Verify ownership (add meta tag to index.html)
   - Submit sitemap.xml
   - Monitor index coverage for all 105 routes

2. **Google My Business**
   - Register or claim the listing for Hicomp
   - Add photos, hours, and link to website
   - This is the #1 local SEO action for a B2B company

3. **Real Lighthouse audit**
   - Run PageSpeed Insights: https://pagespeed.web.dev/
   - Capture baseline scores
   - Use web vitals data (now implemented) after 1 week of traffic

### MEDIUM IMPACT

4. **Open Graph image**
   - Current: `/og-image.png` — verify this file exists and is 1200×630
   - Recommend a branded image with HiComp logo and tagline

5. **Content expansion (coordinate with CMO from LEE-19)**
   - Service pages need: "symptoms" section, brand-specific FAQs, Schema FAQPage
   - `/informacoes/*` topic pages are good for long-tail but need more internal links

6. **Apple touch icon**
   - Currently points to `favicon.ico` — should be 180×180 PNG
   - Icons 192×192 and 512×512 are already in `/public/`

### LOWER IMPACT

7. **InfoDetail bundle optimization**
   - Move topic content images to `/public/` to remove eager image glob
   - Would reduce InfoDetail from 568KB to ~100KB

8. **Upgrade CSP from report-only to enforcing**
   - Currently `Content-Security-Policy-Report-Only` — doesn't block anything
   - After validating no violations, switch to `Content-Security-Policy`

---

## Content Integration Guide (for CMO from LEE-19)

### Adding a Blog Post
The existing `/informacoes/:topic` pattern handles 80+ topics already. New blog posts follow the same pattern:

1. Add entry to `src/data/topicsData.ts`
2. Add content to `src/data/topicContents.ts` (or a separate topic file in `src/data/topics/`)
3. Add route to `public/sitemap.xml`
4. Run `npm run build` (prerender generates static HTML automatically)

**Schema markup:** Use `createArticleSchema()` from `src/utils/structuredData.ts` — already implemented in InfoDetail.

### Adding Case Studies
Recommended approach: extend the InfoDetail pattern with a `type: 'case-study'` field in topicsData. This allows reusing all existing SEO infrastructure.

Schema: Use `Article` schema type (already available in structuredData.ts).

### Adding FAQs to Service Pages
The `FAQSection` component (`src/components/FAQSection.tsx`) and `FAQPage` schema are already implemented. For each service page:

1. Add a `faqs` array to the page component's data
2. Render `<FAQSection faqs={faqs} />`
3. Schema is injected automatically by prerender-seo.cjs

### Video Content
`src/pages/Videos.tsx` already exists. For new videos:
- Add to the Videos page with `loading="lazy"` on iframes
- Consider thumbnail-first approach (click to load iframe) for performance
- Schema: Use `VideoObject` from schema.org (not yet implemented — add to structuredData.ts)

---

*Report generated by CTO agent as part of LEE-28.*
