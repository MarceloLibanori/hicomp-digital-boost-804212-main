import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const PageFallback = () => (
  <div
    style={{ minHeight: "100vh", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
    aria-label="Carregando..."
    aria-live="polite"
  >
    <div style={{ width: 40, height: 40, border: "3px solid #1d4e89", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </div>
);

// Lazy-loaded route components to reduce initial bundle
const Home = lazy(() => import("./pages/Home"));
const Empresa = lazy(() => import("./pages/Empresa"));
const Contato = lazy(() => import("./pages/Contato"));
const Informacoes = lazy(() => import("./pages/Informacoes"));
const ProductBrand = lazy(() => import("./pages/produtos/ProductBrand"));
const ServiceDetail = lazy(() => import("./pages/servicos/ServiceDetail"));
const InfoDetail = lazy(() => import("./pages/informacoes/InfoDetail"));
const Videos = lazy(() => import("./pages/Videos"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const ManutencaoBombasHidraulicas = lazy(() => import("./pages/ManutencaoBombasHidraulicas"));
const CilindrosHidraulicos = lazy(() => import("./pages/CilindrosHidraulicos"));
const ValvulasHidraulicas = lazy(() => import("./pages/ValvulasHidraulicas"));
const AssistenciaTecnicaIndustrial = lazy(() => import("./pages/AssistenciaTecnicaIndustrial"));
const HidraulicaIndustrial = lazy(() => import("./pages/HidraulicaIndustrial"));
const UnidadeHidraulicaIndustrial = lazy(() => import("./pages/UnidadeHidraulicaIndustrial"));
const MangueirasHidraulicas = lazy(() => import("./pages/MangueirasHidraulicas"));
const BombaDePistaoHidraulica = lazy(() => import("./pages/BombaDePistaoHidraulica"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

// Lazy-load Analytics to avoid adding to initial bundle
const Analytics = lazy(() => import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const S = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageFallback />}>{children}</Suspense>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
          <ScrollToTop />
          <WhatsAppFloatingButton />
          <Routes>
            <Route path="/" element={<S><Home /></S>} />
            <Route path="/empresa" element={<S><Empresa /></S>} />
            <Route path="/contato" element={<S><Contato /></S>} />
            <Route path="/informacoes" element={<S><Informacoes /></S>} />
            <Route path="/produtos/:brand" element={<S><ProductBrand /></S>} />
            <Route path="/servicos/:service" element={<S><ServiceDetail /></S>} />
            <Route path="/informacoes/:topic" element={<S><InfoDetail /></S>} />
            <Route path="/videos" element={<S><Videos /></S>} />
            <Route path="/faq" element={<S><FAQ /></S>} />
            <Route path="/sitemap" element={<S><Sitemap /></S>} />
            <Route path="/manutencao-bombas-hidraulicas" element={<S><ManutencaoBombasHidraulicas /></S>} />
            <Route path="/cilindros-hidraulicos" element={<S><CilindrosHidraulicos /></S>} />
            <Route path="/valvulas-hidraulicas" element={<S><ValvulasHidraulicas /></S>} />
            <Route path="/assistencia-tecnica-industrial" element={<S><AssistenciaTecnicaIndustrial /></S>} />
            <Route path="/hidraulica-industrial" element={<S><HidraulicaIndustrial /></S>} />
            <Route path="/unidade-hidraulica-industrial" element={<S><UnidadeHidraulicaIndustrial /></S>} />
            <Route path="/mangueiras-hidraulicas" element={<S><MangueirasHidraulicas /></S>} />
            <Route path="/bomba-de-pistao-hidraulica" element={<S><BombaDePistaoHidraulica /></S>} />
            <Route path="/login" element={<S><Login /></S>} />
            <Route path="/dashboard" element={<ProtectedRoute><S><Dashboard /></S></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<S><NotFound /></S>} />
          </Routes>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;