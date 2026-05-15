import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register service worker for PWA support
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration.scope);
      })
      .catch((error) => {
        console.error('SW registration failed:', error);
      });
  });
}

// Core Web Vitals monitoring via PerformanceObserver
function reportVital(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') {
  if (import.meta.env.DEV) {
    console.log(`[CWV] ${name}: ${Math.round(value)}ms — ${rating}`);
  }
  // Send to GA4 as custom event
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      metric_rating: rating,
      non_interaction: true,
    });
  }
}

if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  // LCP — Largest Contentful Paint (good < 2500ms, poor > 4000ms)
  try {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      const lcp = last.startTime;
      reportVital('LCP', lcp, lcp < 2500 ? 'good' : lcp < 4000 ? 'needs-improvement' : 'poor');
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {}

  // CLS — Cumulative Layout Shift (good < 0.1, poor > 0.25)
  try {
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const e = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!e.hadRecentInput) clsValue += e.value;
      }
      reportVital('CLS', clsValue, clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor');
    }).observe({ type: 'layout-shift', buffered: true });
  } catch {}

  // INP — Interaction to Next Paint (good < 200ms, poor > 500ms)
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const e = entry as PerformanceEntry & { duration: number };
        reportVital('INP', e.duration, e.duration < 200 ? 'good' : e.duration < 500 ? 'needs-improvement' : 'poor');
      }
    }).observe({ type: 'event', buffered: true, durationThreshold: 16 } as PerformanceObserverInit);
  } catch {}

  // FCP — First Contentful Paint (good < 1800ms, poor > 3000ms)
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          reportVital('FCP', fcp, fcp < 1800 ? 'good' : fcp < 3000 ? 'needs-improvement' : 'poor');
        }
      }
    }).observe({ type: 'paint', buffered: true });
  } catch {}

  // TTFB — Time to First Byte (good < 800ms, poor > 1800ms)
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const e = entry as PerformanceEntry & { responseStart: number; requestStart: number };
        if ('responseStart' in e) {
          const ttfb = e.responseStart - e.requestStart;
          reportVital('TTFB', ttfb, ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor');
        }
      }
    }).observe({ type: 'navigation', buffered: true });
  } catch {}
}
