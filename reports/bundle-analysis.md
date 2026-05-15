# Bundle Analysis Report

**Date:** 2026-05-14  
**Project:** HiComp Hidráulica Industrial

## Executive Summary

Total JavaScript bundle size: **1.74 MB** (uncompressed)

This report identifies significant optimization opportunities, particularly in data loading strategies that could reduce initial bundle size by up to 60%.

## Bundle Breakdown

### Top 15 Largest JavaScript Files

| File | Size | Category | Priority |
|------|------|----------|----------|
| InfoDetail-CqcmYJDF.js | 556 KB | Page Component | 🔴 Critical |
| topicContents-DswAo07H.js | 444 KB | Static Data | 🔴 Critical |
| vendor-react-cjcUiRjz.js | 160 KB | Framework | ✅ Optimal |
| topicsData-tsmvX7bc.js | 112 KB | Static Data | 🟡 High |
| vendor-ui-CNEOdEtL.js | 88 KB | UI Components | ✅ Optimal |
| index-Dx4Mn9ir.js | 84 KB | Main Entry | ✅ Optimal |
| Home-FRIERfkK.js | 48 KB | Page Component | ✅ Optimal |
| vendor-query-BR5VEH67.js | 28 KB | Query Library | ✅ Optimal |
| SEOEnhanced-BjQiCeFj.js | 28 KB | SEO Component | ✅ Optimal |
| Dashboard-CaavMe1E.js | 28 KB | Page Component | ✅ Optimal |
| rexroth-DE6qqXoj.js | 24 KB | Brand Page | ✅ Optimal |
| vendor-seo-C7sbRYse.js | 16 KB | SEO Library | ✅ Optimal |
| HidraulicaIndustrial-BTTw4DjV.js | 16 KB | Page Component | ✅ Optimal |
| Contato-CEM73il0.js | 16 KB | Page Component | ✅ Optimal |
| BombaDePistaoHidraulica-vJLY_iD6.js | 16 KB | Page Component | ✅ Optimal |

## Critical Issues Identified

### 1. **Static Data Bundling (Critical Priority)**

**Problem:** Two large data files are being bundled into JavaScript:
- `topicContents-DswAo07H.js` (444 KB) - Contains 5,189 lines of static content
- `topicsData-tsmvX7bc.js` (112 KB) - Contains 1,134 lines of topic metadata

**Impact:** 
- These files account for 556 KB (32% of total bundle)
- All content is loaded upfront, even if user only visits one topic page
- Initial page load is significantly slower

**Current Implementation:**
```typescript
// src/pages/informacoes/InfoDetail.tsx (line 81)
const mod = await import("@/data/topicContents");
```

While dynamic import is used, the entire topicContents file (all topics) is still loaded.

### 2. **InfoDetail Component Size (High Priority)**

**Problem:** The InfoDetail page component is 556 KB, likely including embedded content or large SEO overrides.

**Source Files:**
- `src/pages/informacoes/InfoDetail.tsx` (28 KB source)
- `src/data/topicContents.ts` (468 KB source) - bundled together

## Optimization Recommendations

### High-Impact Optimizations (Recommended)

#### 1. Split Topic Content into Individual Files
**Estimated Impact:** Reduce initial bundle by ~400-500 KB

**Implementation:**
```
Before:
src/data/topicContents.ts (468 KB, 5,189 lines)

After:
src/data/topics/
  ├── atuadores-hidraulicos.json
  ├── bomba-hidraulica-rexroth.json
  ├── valvula-direcional-parker.json
  └── ... (100+ individual files)
```

**Loading Strategy:**
```typescript
// Load only the specific topic needed
const content = await import(`@/data/topics/${topicId}.json`);
```

**Benefits:**
- Initial bundle size reduced by 25-30%
- Faster initial page load
- Only load content when specific topic is viewed
- Better browser caching (unchanged topics remain cached)

#### 2. Convert Static Data to JSON
**Estimated Impact:** Additional 10-15% size reduction via compression

Current TypeScript files include:
- Type definitions (overhead)
- JavaScript object syntax (more verbose than JSON)

**Before:** `topicContents.ts` (468 KB)  
**After:** Individual JSON files (~350-400 KB total, better compressed)

#### 3. Implement Code Splitting for Topic Pages
**Estimated Impact:** Reduce initial bundle by 100-150 KB

**Current:** All InfoDetail logic loaded upfront  
**Recommended:** Lazy load InfoDetail component

```typescript
// src/App.tsx
const InfoDetail = lazy(() => import('@/pages/informacoes/InfoDetail'));
```

### Medium-Impact Optimizations

#### 4. Enable Compression Reporting
Update `vite.config.ts`:
```typescript
build: {
  reportCompressedSize: true, // Currently false
}
```

This will show gzip/brotli sizes, which are typically 70-80% smaller.

#### 5. Optimize Vendor Chunks
Current manual chunks are well-configured. Consider adding:
```typescript
manualChunks: {
  'vendor-icons': ['lucide-react', 'react-icons'],
  // Existing chunks are good
}
```

#### 6. Tree Shaking Audit
Check for unused exports in:
- UI components (Radix UI imports)
- React icons (use specific imports)

### Low-Priority Optimizations

#### 7. Image Optimization
- Hero images already use WebP format ✅
- Consider responsive images for mobile

#### 8. Font Optimization
- Currently loading Montserrat with 5 weights (400, 500, 600, 700, 800)
- Audit actual usage and remove unused weights

## Current Configuration Analysis

### vite.config.ts
```typescript
build: {
  target: "es2020",              // ✅ Good modern target
  cssMinify: true,               // ✅ CSS minification enabled
  reportCompressedSize: false,   // ⚠️ Disable for faster builds, but hide true size
  rollupOptions: {
    output: {
      manualChunks: { ... }      // ✅ Well-configured vendor splitting
    }
  }
}
```

**Assessment:** Configuration is good. Main issue is data bundling strategy, not build config.

## Estimated Impact Summary

| Optimization | Effort | Impact | Bundle Reduction |
|--------------|--------|--------|------------------|
| Split topic content files | High | Critical | ~400-500 KB (25-30%) |
| Convert to JSON | Medium | High | ~50-100 KB (5-8%) |
| Code split InfoDetail | Low | Medium | ~100-150 KB (6-9%) |
| Enable gzip/brotli | Low | Visual | N/A (compression only) |
| Optimize vendor chunks | Low | Low | ~10-20 KB (1-2%) |

**Total Potential Reduction:** 550-770 KB (32-44% of current 1.74 MB)

## Before/After Projections

### Current State
- **Total Bundle:** 1.74 MB uncompressed
- **Estimated Gzipped:** ~500-600 KB
- **Initial Load:** All data loaded upfront

### After Optimizations
- **Total Bundle:** ~1.0-1.2 MB uncompressed
- **Estimated Gzipped:** ~300-400 KB
- **Initial Load:** Only homepage + framework
- **Topic Page Load:** +50-100 KB per topic (on-demand)

## Implementation Priority

### Phase 1 (Immediate - High ROI)
1. ✅ Enable `reportCompressedSize: true` in vite.config.ts
2. Split topicContents.ts into individual JSON files
3. Update InfoDetail.tsx to load specific topic JSON

### Phase 2 (Short-term)
4. Code split InfoDetail component
5. Audit and optimize font weights
6. Review and remove unused UI component imports

### Phase 3 (Long-term)
7. Implement CDN for static topic content
8. Consider API endpoint for dynamic content loading
9. Implement service worker caching (✅ Already done)

## Notes

- B2B site context: Initial load performance is critical for SEO and user experience
- Mobile users: Large bundles significantly impact load time on slower connections
- Current implementation already uses React.lazy for routes (good foundation)
- Service worker implementation (✅ completed) will help with repeat visits

## Testing Recommendations

1. **Before implementing:** Run Lighthouse audit and record metrics
2. **Use bundle analyzer:** 
   ```bash
   npm install -D rollup-plugin-visualizer
   # Add to vite.config.ts plugins
   ```
3. **After each optimization:** Re-run Lighthouse and compare
4. **Monitor:** Real user metrics post-deployment

## Conclusion

The primary bottleneck is the static data bundling strategy. Implementing Phase 1 optimizations alone could reduce initial bundle size by 30-40%, significantly improving:
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Lighthouse Performance score

The current build configuration is already well-optimized; the focus should be on data loading architecture rather than build tooling.
