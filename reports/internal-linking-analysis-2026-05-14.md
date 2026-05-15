# Internal Linking Analysis

**Date:** May 14, 2026
**Project:** HiComp Hidráulica Website
**Auditor:** Engineer1

## Executive Summary

The HiComp website has a **strong breadcrumb implementation** across all subpages (31 usages) but **limited use of the `InternalLinks` component** (only 1 page). The navigation structure is logical and all key pages are reachable within 2–3 clicks from the homepage.

**Overall Grade:** B+
**Critical Issues:** 0
**Warnings:** 2
**Strengths:** 5

---

## 1. Breadcrumbs Audit

### Implementation

```tsx
// src/components/Breadcrumbs.tsx
// Used in 31 page files
```

### Pages with Breadcrumbs

All service, product, and informational subpages include the `Breadcrumbs` component:

| Category | Pages | Breadcrumbs |
|----------|-------|-------------|
| Service pages | CilindrosHidraulicos, ManutencaoBombas, ValvulasHidraulicas, AssistenciaTecnica, HidraulicaIndustrial, MangueirasHidraulicas, BombaDePistao, UnidadeHidraulica | ✅ All |
| Product pages | ProductBrand, produtos/* | ✅ All |
| Informational | Informacoes, InfoDetail, informacoes/* | ✅ All |
| Institutional | Empresa, FAQ, Contato, Videos | ✅ All |
| Landing pages | 2026-05-13 new pages | ✅ All |

**Total:** 31/31 subpages checked — 100% breadcrumb coverage.

### JSON-LD BreadcrumbList Schema

- ✅ Every breadcrumb renders a `BreadcrumbList` JSON-LD schema via `prerender-seo.cjs`
- ✅ Schemas are crawler-readable in static HTML
- ✅ Consistent format: Home > [Category] > [Page]

---

## 2. InternalLinks Component Audit

### Usage

```bash
grep -rn "InternalLinks" src/pages/ --include="*.tsx"
# Result: used only in Home.tsx
```

⚠️ **Warning:** The `InternalLinks` component exists and is well-implemented but is only used on the homepage.

### Current Usage (Home.tsx)

The homepage uses `InternalLinks` to link to main service pages from the home page — this is correct for the primary hub page.

### Missing InternalLinks Opportunities

| Page | Suggested Cross-Links |
|------|----------------------|
| `CilindrosHidraulicos.tsx` | Link to ManutencaoBombas, ValvulasHidraulicas |
| `ManutencaoBombas.tsx` | Link to CilindrosHidraulicos, AssistenciaTecnica |
| `ValvulasHidraulicas.tsx` | Link to CilindrosHidraulicos, ManutencaoBombas |
| `AssistenciaTecnica.tsx` | Link to all service pages |
| `FAQ.tsx` | Link to relevant service pages from FAQ answers |

**Recommendation:** Add `InternalLinks` to service pages to create a hub-and-spoke link structure between related services.

---

## 3. Navigation Structure Analysis

### Main Navigation Links

```
Home (/)
├── Serviços
│   ├── Cilindros Hidráulicos (/cilindros-hidraulicos)
│   ├── Manutenção de Bombas (/manutencao-bombas-hidraulicas)
│   ├── Válvulas Hidráulicas (/valvulas-hidraulicas)
│   ├── Assistência Técnica (/assistencia-tecnica-industrial)
│   └── Hidráulica Industrial (/hidraulica-industrial)
├── Produtos
│   ├── Parker (/produtos/parker)
│   └── [other brands]
├── Informações (/informacoes)
├── Empresa (/empresa)
├── FAQ (/faq)
└── Contato (/contato)
```

### Click Depth from Homepage

| Page Type | Max Clicks from Home | Status |
|-----------|---------------------|--------|
| Main service pages | 1 click | ✅ Excellent |
| Product brand pages | 2 clicks | ✅ Good |
| Informações topics | 2 clicks | ✅ Good |
| InfoDetail articles | 3 clicks | ✅ Acceptable |
| Servicos/* landing pages | 2 clicks | ✅ Good |
| Produtos/Parker/* | 3 clicks | ✅ Acceptable |

**Result:** All important pages are within 3 clicks of home. ✅

---

## 4. Anchor Text Analysis

### Navigation Anchor Text

Navigation uses descriptive, keyword-rich anchor text:
- ✅ "Cilindros Hidráulicos" (not "click here")
- ✅ "Manutenção de Bombas Hidráulicas"
- ✅ "Válvulas Hidráulicas Industriais"

### InternalLinks Anchor Text

```tsx
// Home.tsx — InternalLinks usage
links={[
  { title: "Cilindros Hidráulicos", url: "/cilindros-hidraulicos", description: "..." },
  { title: "Bombas Hidráulicas", url: "/manutencao-bombas-hidraulicas", description: "..." },
  // ...
]}
```

- ✅ Descriptive titles used as anchor text
- ✅ Descriptions add context for crawlers
- ✅ No generic "click here" or "read more" text

---

## 5. Site Hierarchy Assessment

The site follows a logical hierarchy:

```
Homepage (authority hub)
  └── Service pages (main conversion pages)
        └── Related services + InternalLinks (limited)
  └── Product pages (brand/catalog)
  └── Informações (content/SEO)
        └── Topic articles (long-tail content)
  └── Institutional pages (trust signals)
```

**Assessment:**
- ✅ Flat hierarchy — no page more than 3 clicks deep
- ✅ Breadcrumbs reinforce hierarchy for crawlers
- ⚠️ InternalLinks underused — service pages don't cross-link each other
- ✅ Footer provides global links to all main sections

---

## 6. Footer Internal Links

The footer provides links to all main sections, acting as a global internal link hub:
- ✅ Main services
- ✅ Institutional pages
- ✅ Contact
- ✅ Sitemap link

---

## 7. Recommendations

### Priority 1: HIGH

**Add InternalLinks to service pages**

Each service page should link to 3–4 related services:

```tsx
// Example for CilindrosHidraulicos.tsx
<InternalLinks
  title="Serviços Relacionados"
  links={[
    {
      title: "Manutenção de Bombas Hidráulicas",
      url: "/manutencao-bombas-hidraulicas",
      description: "Reparo e manutenção de bombas hidráulicas industriais"
    },
    {
      title: "Válvulas Hidráulicas",
      url: "/valvulas-hidraulicas",
      description: "Válvulas industriais Parker, Rexroth e Vickers"
    },
    {
      title: "Assistência Técnica Industrial",
      url: "/assistencia-tecnica-industrial",
      description: "Diagnóstico e reparo de sistemas hidráulicos"
    }
  ]}
/>
```

### Priority 2: MEDIUM

**Add contextual in-content links in FAQ answers**

FAQ answers should link to relevant service pages when mentioning services.

### Priority 3: LOW

**Consider a "Related Articles" section in InfoDetail**

The InfoDetail page already has a "related topics" section — ensure it uses `InternalLinks` component for consistency.

---

## 8. Summary

| Area | Score | Notes |
|------|-------|-------|
| Breadcrumbs coverage | 10/10 | 100% of subpages |
| Navigation structure | 9/10 | Logical hierarchy |
| Click depth | 10/10 | All pages ≤ 3 clicks |
| InternalLinks usage | 5/10 | Only on homepage |
| Anchor text quality | 9/10 | Descriptive throughout |
| Schema (BreadcrumbList) | 10/10 | All subpages |

**Overall:** B+ — Strong foundation; adding InternalLinks to service pages would elevate to A.
