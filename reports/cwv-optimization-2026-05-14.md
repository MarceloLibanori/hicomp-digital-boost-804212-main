# Core Web Vitals — Optimization Report
**Date:** 2026-05-14  
**Issue:** LEE-30  
**Engineer:** Engineer1 (Agent 37eaaac7)

---

## Baseline vs Target

| Metric | Baseline | Target | Status |
|--------|----------|--------|--------|
| Performance Score (mobile) | 61/100 | > 90 | 🔄 Optimized |
| LCP | 8.0s | < 2.5s | 🔄 Optimized |
| CLS | 0.035 | < 0.1 | ✅ Already passing |
| FID/INP | 160ms | < 100ms | 🔄 Optimized |
| FCP | 3.5s | < 1.8s | 🔄 Optimized |

---

## Optimizations Implemented

### 1. Google Fonts — Render Blocking Eliminated ✅

**File:** `index.html`  
**Impact:** HIGH — Was the primary cause of 3.5s+ FCP and contributed heavily to 8.0s LCP.

**Before:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:..." rel="stylesheet" />
```
This is render-blocking: the browser halts HTML parsing until the CSS is downloaded and parsed.

**After:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:..." rel="stylesheet"
      media="print" onload="this.media='all'" />
<noscript><link href="..." rel="stylesheet" /></noscript>
```
The `media="print"` trick loads the font asynchronously. The `onload` handler swaps it to `all` when ready. `font-display: swap` in the CSS ensures text remains visible with system fonts while Montserrat loads.

**Expected improvement:** FCP -1.5s to -2.0s, LCP -2.0s to -3.0s

---

### 2. Hero Image Preload with Responsive srcset ✅

**File:** `index.html`  
**Impact:** HIGH — Mobile users were loading the full 86KB WebP instead of the 14KB 480px variant.

**Before:**
```html
<link rel="preload" as="image" href="/hero-hydraulic.webp" type="image/webp" fetchpriority="high" />
```

**After:**
```html
<link rel="preload" as="image" href="/hero-hydraulic.webp" type="image/webp" fetchpriority="high"
      imagesrcset="/hero-hydraulic-480.webp 480w, /hero-hydraulic.webp 1024w"
      imagesizes="(max-width: 640px) 480px, 1024px" />
```
The browser now preloads the correct variant based on viewport width — 14KB for mobile vs 86KB for desktop.

**Expected improvement:** LCP on mobile -1.0s to -2.0s (smaller file = faster load)

---

### 3. Font-Display Swap in CSS ✅

**File:** `src/index.css`  
**Impact:** MEDIUM — Prevents FOIT (Flash of Invisible Text) which can block LCP.

Added `font-display: swap` and proper system font fallback to the `body` rule so text is always visible while web fonts load.

---

### 4. React Icons — Separate Chunk ✅

**File:** `vite.config.ts`  
**Impact:** MEDIUM — `react-icons` was bundled into vendor-ui or main chunk.

Added `"vendor-icons": ["react-icons"]` to manual chunks. This allows the browser to cache the icon library independently and load it in parallel with other chunks.

---

### 5. Build Asset Inlining ✅

**File:** `vite.config.ts`  
**Impact:** LOW — Assets ≤ 4KB are now inlined as data URIs, reducing HTTP requests.

Set `assetsInlineLimit: 4096`.

---

### 6. JSX Bug Fix ✅

**File:** `src/components/KeywordRichContent.tsx:187`  
**Impact:** BLOCKER — Pre-existing JSX syntax error (`>` and `<` inside JSX text) that prevented production build.

Fixed unescaped `>70°C ou <0°C` → `&gt;70°C ou &lt;0°C`.

---

## Pre-existing Optimizations Confirmed

These were already in place and correct:

- ✅ Hero `<picture>` element with WebP + srcset + fallback JPG (HeroSection.tsx)
- ✅ Hero img with `loading="eager"`, `decoding="sync"`, `fetchPriority="high"`, explicit `width`/`height`
- ✅ `preconnect` to Google Fonts domains
- ✅ `dns-prefetch` for analytics domains
- ✅ All routes lazy-loaded with `React.lazy` + `Suspense`
- ✅ Manual chunks in vite config (react, react-dom, router, query, ui, seo, forms)
- ✅ Core Web Vitals monitoring via PerformanceObserver in main.tsx (LCP, CLS, INP, FCP, TTFB)
- ✅ GA4 integration for CWV reporting
- ✅ Service Worker for PWA caching
- ✅ CLS=0.035 already in "Good" range
- ✅ Lazy loading for below-fold images

---

## Performance Budget Recommendations

| Metric | Budget | Enforcement |
|--------|--------|-------------|
| LCP | < 2.5s | Lighthouse CI in deployment |
| CLS | < 0.1 | Already passing |
| INP | < 200ms | Monitor via GA4 CWV events |
| FCP | < 1.8s | Lighthouse CI |
| Main bundle (index.js) | < 100KB gzip | vite build warning |
| Per-route chunk | < 50KB | Code review |
| Hero image (mobile) | < 20KB | Manual audit |
| Hero image (desktop) | < 100KB | Manual audit |

---

## Remaining Opportunities (Future)

1. **Critical CSS inlining** — Extract and inline above-the-fold CSS to eliminate render-blocking stylesheet. Requires vite-plugin-critical or manual extraction.
2. **Self-hosted fonts** — Move Montserrat to `/public/fonts/` to eliminate Google Fonts round-trip latency (~100-300ms saved on cold load).
3. **topicContents data splitting** — The 440KB topicContents chunk loads on `/informacoes/:topic` routes. Could be split per-topic to avoid loading all content at once.
4. **Image CDN** — Serve hero images via Vercel Image Optimization for automatic format/size negotiation.

---

## Build Output (Post-Optimization)

```
✓ built in 1.95s
dist/assets/vendor-react-*.js     162 KB
dist/assets/index-*.js            84 KB
dist/assets/vendor-ui-*.js        87 KB
dist/assets/topicContents-*.js   440 KB  (lazy — only loads on /informacoes routes)
dist/assets/vendor-icons-*.js    (new separate chunk)
dist/assets/Home-*.js            77 KB   (main landing page chunk)
```
