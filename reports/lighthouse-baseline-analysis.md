# Core Web Vitals Baseline Analysis
**Date:** 2026-05-14  
**Project:** HiComp Hidráulica  
**Engineer:** Engineer1  
**Task:** LEE-30

---

## Executive Summary

Baseline Lighthouse audits reveal **critical performance issues**, particularly with Largest Contentful Paint (LCP). The site scores 61/100 on mobile performance, well below the target of 90+.

### Critical Findings
- ❌ **LCP: 8.0s** (Target: < 2.5s) - **FAILING** by 320%
- ✅ **CLS: 0.035** (Target: < 0.1) - PASSING
- ⚠️ **FID/INP: 160ms** (Target: < 100ms) - Borderline

---

## Baseline Metrics

### Mobile Performance (Throttled 4x CPU)
| Metric | Value | Score | Target | Status |
|--------|-------|-------|--------|--------|
| **Performance Score** | 61/100 | - | > 90 | ❌ FAIL |
| First Contentful Paint (FCP) | 3.5s | 34% | < 1.8s | ❌ FAIL |
| Largest Contentful Paint (LCP) | 8.0s | 2% | < 2.5s | ❌ **CRITICAL** |
| Speed Index (SI) | 7.0s | 32% | < 3.4s | ❌ FAIL |
| Time to Interactive (TTI) | 7.1s | 51% | < 3.8s | ❌ FAIL |
| Total Blocking Time (TBT) | 120ms | - | < 200ms | ⚠️ Warning |
| Cumulative Layout Shift (CLS) | 0.035 | - | < 0.1 | ✅ PASS |
| Max Potential FID | 160ms | 80% | < 100ms | ⚠️ Warning |

### Desktop Performance
*(Full report: `lighthouse-baseline-desktop.html`)*

---

## Root Cause Analysis

### 1. LCP - Largest Contentful Paint (8.0s)
**Severity:** CRITICAL  
**Impact:** 5/5

The LCP of 8.0 seconds is **320% over the target**. This indicates:
- Slow hero image loading
- Render-blocking resources delaying paint
- Suboptimal resource prioritization
- Possible missing preload hints

**Likely culprits:**
- Hero section background/image not preloaded
- CSS blocking initial render
- JavaScript executing before LCP element paints
- Font loading blocking text render (FOIT/FOUT)

### 2. First Contentful Paint (3.5s)
**Severity:** HIGH  
**Impact:** 4/5

FCP at 3.5s indicates slow initial render:
- Render-blocking CSS/JS
- Server response time issues
- Lack of critical CSS inlining
- Missing resource hints (dns-prefetch, preconnect)

### 3. Speed Index & TTI (7.0s / 7.1s)
**Severity:** HIGH  
**Impact:** 4/5

Both metrics indicate slow progressive rendering:
- Large JavaScript bundles blocking main thread
- Suboptimal code splitting
- Possible long tasks (> 50ms)
- Unoptimized images loading above the fold

### 4. Total Blocking Time (120ms)
**Severity:** MEDIUM  
**Impact:** 3/5

TBT is acceptable but could be improved:
- JavaScript execution time
- Main thread work during page load
- React hydration overhead

---

## Optimization Priorities

### Priority 1: Fix LCP (8.0s → < 2.5s)
**Target Improvement:** -5.5s minimum

Actions:
1. Identify exact LCP element (hero image/text)
2. Add preload for LCP image resource
3. Optimize image format (WebP with fallback)
4. Ensure hero image uses srcset for responsive loading
5. Eliminate render-blocking resources above the fold
6. Implement critical CSS inlining
7. Add resource hints (preconnect to CDNs/fonts)

### Priority 2: Reduce FCP (3.5s → < 1.8s)
**Target Improvement:** -1.7s minimum

Actions:
1. Audit render-blocking CSS and defer non-critical styles
2. Inline critical CSS for above-the-fold content
3. Optimize font loading with font-display: swap
4. Add dns-prefetch/preconnect for external domains
5. Review server response time

### Priority 3: Optimize JavaScript Execution
**Target:** Reduce TBT to < 100ms, improve TTI

Actions:
1. Analyze bundle size and identify large chunks
2. Implement aggressive code splitting
3. Defer non-critical JavaScript
4. Review React.lazy usage for route-based splitting
5. Check for unnecessary re-renders or hydration issues

### Priority 4: Image Optimization
**Target:** Ensure all images optimized for Web Vitals

Actions:
1. Verify all images converted to WebP (scripts/convert-images.js)
2. Ensure responsive images with srcset
3. Confirm lazy loading for below-fold images
4. Add explicit width/height to prevent CLS
5. Consider using `<picture>` element for art direction

### Priority 5: Performance Monitoring
**Target:** Real-time Core Web Vitals tracking

Actions:
1. Install web-vitals library
2. Implement measurement for LCP, FID/INP, CLS
3. Add console logging or analytics integration
4. Set up performance budget alerts

---

## Success Criteria

- ✅ Lighthouse Performance Score > 90 (mobile)
- ✅ LCP < 2.5s
- ✅ CLS < 0.1 (already passing)
- ✅ FID/INP < 100ms
- ✅ All Core Web Vitals in "Good" range (green)

---

## Reports Generated

- `lighthouse-baseline-mobile.html` - Full mobile audit report
- `lighthouse-baseline-mobile.json` - Mobile metrics (JSON)
- `lighthouse-baseline-desktop.html` - Full desktop audit report

---

## Next Steps

1. **Immediate:** Analyze LCP element and implement preload
2. **High Priority:** Optimize render-blocking resources
3. **Medium Priority:** Add web-vitals monitoring
4. **Final:** Run post-optimization audits and compare

---

## Notes

- Previous SEO/UX optimizations documented in `multi-agent-optimization-2026-05-13.md`
- Vite config already has manual chunks configured
- Image conversion script exists at `scripts/convert-images.js`
- Site uses React 18 SPA with Vite (SWC) + TypeScript
