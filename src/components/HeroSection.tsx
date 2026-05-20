import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

// Hero images servidas de /public/ para permitir <link rel="preload"> estático no HTML
const HERO_WEBP_480 = "/hero-hydraulic-480.webp";
const HERO_WEBP = "/hero-hydraulic.webp";
const HERO_JPG = "/hero-hydraulic.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Peças hidráulicas, pneumáticas e automação industrial em São Paulo"
    >
      {/* Background Image — LCP element, eager + high priority */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          type="image/webp"
          srcSet={`${HERO_WEBP_480} 480w, ${HERO_WEBP} 1024w`}
          sizes="(max-width: 640px) 480px, 1024px"
        />
        <img
          src={HERO_JPG}
          alt="Peças hidráulicas e pneumáticas industriais - Cilindros, bombas e válvulas - HiComp São Paulo"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          width="1440"
          height="700"
        />
      </picture>
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 uppercase tracking-tight">
          Peças Hidráulicas,<br className="hidden md:block" /> Pneumáticas e Automação
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light">
          Cilindros, bombas e válvulas das melhores marcas — Comércio, fabricação e manutenção industrial
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
          <strong>Parker</strong> • <strong>Rexroth</strong> • <strong>Vickers</strong> • <strong>Denison</strong> | Envio para todo o Brasil
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm sm:text-base">
          <span className="rounded-full bg-black/20 px-4 py-2">Desde 1995 em São Paulo</span>
          <span className="rounded-full bg-black/20 px-4 py-2">Suporte técnico para indústria</span>
          <span className="rounded-full bg-black/20 px-4 py-2">Orçamento rápido por WhatsApp</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contato">
            <Button variant="hero" size="xl" className="hover-lift">
              Orçamento Grátis
            </Button>
          </Link>
          <a
            href="https://wa.me/5511992465636?text=Olá! Gostaria de um orçamento para manutenção hidráulica."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg px-6 py-3 rounded-lg transition-colors hover-lift"
            aria-label="Falar com especialista pelo WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
