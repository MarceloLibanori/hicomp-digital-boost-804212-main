# Performance Recommendations

**Date:** 2026-05-14  
**Project:** HiComp Hidráulica Industrial

## Current State Assessment

The site already implements most performance best practices. This document captures remaining opportunities ranked by ROI.

## Implemented (No Action Needed)

- ✅ React.lazy + Suspense for all routes
- ✅ Manual vendor chunks (react, query, ui, forms, icons)
- ✅ Service worker with offline support
- ✅ CDN caching with immutable headers for assets
- ✅ WebP images with fallback
- ✅ Preconnect hints for Google Fonts/Analytics
- ✅ Core Web Vitals monitoring via PerformanceObserver
- ✅ HSTS with preload
- ✅ Individual topic file loading (implemented this session)
- ✅ Source maps disabled in production (implemented this session)

## High Priority Recommendations

### 1. Complete Individual Topic File Migration
**Impact:** High | **Effort:** Medium

43 of 124 topics still rely on the full `topicContents.ts` bundle as fallback. Creating individual files for the remaining topics would eliminate this 444 KB fallback entirely.

**Action:** Generate individual `.ts` files in `src/data/topics/` for each remaining topic ID found in `topicContents.ts`.

### 2. Optimize React Icons Usage
**Impact:** Medium | **Effort:** Low

`react-icons` ships icons from many icon families. Currently only `FaWhatsapp` from `react-icons/fa` is visible in `InfoDetail.tsx`. If only a few icons are used, replacing with lucide-react (already a dependency) or inline SVGs would save 16 KB+ from the vendor-icons chunk.

**Audit command:**
```bash
grep -r "from 'react-icons" src/ | grep -oP "from 'react-icons/\w+'" | sort | uniq
```

### 3. Font Weight Reduction
**Impact:** Medium | **Effort:** Low

Google Fonts loads Montserrat with weights 400, 500, 600, 700, 800. Audit actual CSS usage:

```bash
grep -r "font-weight\|font-[5-9]00\|font-bold\|font-semibold\|font-medium\|font-extrabold" src/ | wc -l
```

If weights 500 or 800 are unused, removing them saves ~15-20 KB per weight in font downloads.

## Medium Priority Recommendations

### 4. Add `@radix-ui/react-navigation-menu` to vendor-ui Chunk
**Impact:** Low | **Effort:** Very Low

The `vendor-ui` chunk in `vite.config.ts` includes 5 Radix UI components. `react-navigation-menu` is likely also used in `Header.tsx`. Adding it ensures consistent caching.

### 5. Lazy Load Videos Section
**Impact:** Medium | **Effort:** Low

The Videos page (`/videos`) likely embeds iframes or video tags. Ensure video embeds use `loading="lazy"` attribute and that the Videos route chunk is already lazy-loaded (it is via React.lazy ✅).

### 6. Review useEffect Dependencies in Header/Footer
**Impact:** Low | **Effort:** Medium

Header and Footer render on every page. Any `useEffect` with missing dependencies or heavy computation in these components adds overhead to every route. Run React DevTools Profiler to identify unnecessary re-renders.

## Low Priority Recommendations

### 7. Prerender Additional Routes
**Impact:** Medium for SEO | **Effort:** Medium

The `scripts/prerender-seo.cjs` generates prerendered HTML for specific routes. Expanding prerendering to all 81+ informações topics would improve:
- First Contentful Paint for topic pages (server-rendered HTML vs JS-rendered)
- SEO crawlability

### 8. Consider Workbox for Service Worker
**Impact:** Low | **Effort:** High

Current `sw.js` is hand-crafted and functional. Migrating to Workbox would add:
- Automatic precache manifest generation on each build
- More sophisticated caching strategies
- Background sync for form submissions

**Recommendation:** Keep current implementation unless specific offline gaps are identified.

### 9. HTTP/2 Push (Low Value)
Vercel supports HTTP/2 by default. Explicit push hints via `Link: <url>; rel=preload` headers are rarely needed with modern module bundling and browser prefetch.

## Runtime Performance Notes

### React.lazy Coverage
All routes use `React.lazy` ✅. No inline-imported heavy components identified.

### QueryClient Configuration
```typescript
defaultOptions: {
  queries: {
    staleTime: 5 * 60 * 1000,  // 5 min — good
    retry: 1,                    // Low retry count — good
    refetchOnWindowFocus: false, // Prevents unnecessary refetches — good
  }
}
```
No changes needed.

### Memory Leaks
The `import.meta.glob` pattern in `InfoDetail.tsx` runs `useMemo` to build an image map — this is fine as it runs once per component mount. The `useEffect` cleanup (`mounted = false`) prevents state updates after unmount. No memory leak risks identified.

## Monitoring

Core Web Vitals are tracked via `PerformanceObserver` in `main.tsx` and sent to GA4 as custom events. To review performance trends:
1. Google Analytics → Reports → Custom events (LCP, CLS, INP, FCP, TTFB)
2. Google Search Console → Core Web Vitals report

## Summary

| Priority | Recommendation | Bundle Impact |
|----------|---------------|---------------|
| High | Complete individual topic files (43 remaining) | -440 KB |
| Medium | Audit react-icons usage | -10-16 KB |
| Medium | Reduce font weights | -30-60 KB |
| Low | Prerender all topic pages | SEO only |
| Low | Workbox migration | No size change |
