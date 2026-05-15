# Security Headers Audit Report

**Date:** 2026-05-14  
**Project:** HiComp Hidráulica Industrial  
**Environment:** Vercel Edge Network

## Summary

All critical security headers are configured in `vercel.json`. The site implements defense-in-depth with 6 security headers plus HTTPS enforcement via HSTS.

## Headers Audit

| Header | Status | Value | Assessment |
|--------|--------|-------|------------|
| X-Content-Type-Options | ✅ Present | `nosniff` | Prevents MIME-type sniffing attacks |
| X-Frame-Options | ✅ Present | `SAMEORIGIN` | Prevents clickjacking |
| Referrer-Policy | ✅ Present | `strict-origin-when-cross-origin` | Limits referrer data leakage |
| Permissions-Policy | ✅ Present | `camera=(), microphone=(), geolocation=()` | Disables unneeded browser features |
| Strict-Transport-Security | ✅ Present | `max-age=31536000; includeSubDomains; preload` | Forces HTTPS, preload-ready |
| Content-Security-Policy | ✅ Present (Report-Only) | See below | Monitoring mode |

## Content-Security-Policy Analysis

**Current Mode:** `Content-Security-Policy-Report-Only`  
**Rationale for Report-Only:** Google Analytics and GTM require `unsafe-inline` and `unsafe-eval`. Using enforcement mode would block legitimate analytics functionality without additional refactoring.

**CSP Directives:**
```
default-src 'self'
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com data:
img-src 'self' data: https: blob:
connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com
manifest-src 'self'
worker-src 'self'
frame-ancestors 'self'
base-uri 'self'
form-action 'self'
```

**Assessment:** Well-formed CSP. The `unsafe-inline` and `unsafe-eval` directives are a known trade-off for analytics. Monitoring mode is appropriate for a B2B site where analytics continuity is critical.

## HTTPS Enforcement

**HSTS Configuration:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
- 1-year max-age ✅
- includeSubDomains ✅
- preload flag ✅ (eligible for browser HSTS preload list)
- Vercel enforces HTTPS by default at the platform level ✅

## Permissions Policy

```
camera=(), microphone=(), geolocation=()
```
Denies access to camera, microphone, and geolocation for all frames. Appropriate for a B2B industrial catalog site with no media capture requirements.

## Recommendations

### Immediate (No Action Required)
All critical headers are in place and correctly configured. No changes needed.

### Future Consideration: Enforce CSP
When/if Google Analytics is replaced with a privacy-first analytics solution (e.g., Plausible, Fathom), `unsafe-inline` can be removed and CSP can be switched from Report-Only to enforcement mode:
```json
{ "key": "Content-Security-Policy", "value": "..." }
```

### Future Consideration: Add nonce-based CSP
If inline scripts are needed in the future, consider nonce-based CSP to eliminate `unsafe-inline` while retaining inline script capability.

## Test Commands

```bash
# Verify headers on production
curl -I https://www.hicomp.com.br/

# Expected headers:
# x-content-type-options: nosniff
# x-frame-options: SAMEORIGIN
# referrer-policy: strict-origin-when-cross-origin
# permissions-policy: camera=(), microphone=(), geolocation=()
# strict-transport-security: max-age=31536000; includeSubDomains; preload
# content-security-policy-report-only: default-src 'self'; ...
```

## Score Assessment

Using [securityheaders.com](https://securityheaders.com) criteria:
- X-Content-Type-Options ✅
- X-Frame-Options ✅
- Referrer-Policy ✅
- Permissions-Policy ✅
- Strict-Transport-Security ✅
- Content-Security-Policy ⚠️ (Report-Only counts partial credit)

**Expected Grade: A- to A** (CSP in Report-Only mode typically reduces from A+ to A)
