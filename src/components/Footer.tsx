import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

const Footer = () => {
  return (
  <footer className="bg-primary text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="HiComp Hidráulica - Soluções em Sistemas Hidráulicos Industriais" className="h-10 w-auto mb-4" loading="lazy" width="120" height="40" />
            </picture>
            <p className="text-white/90 text-sm leading-relaxed">
              Empresa especializada em comércio e manutenção de produtos óleo-hidráulicos com anos de experiência no mercado.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white hover:text-white/90 transition-smooth">Home</Link></li>
              <li><Link to="/empresa" className="text-white hover:text-white/90 transition-smooth">Empresa</Link></li>
              <li><Link to="/produtos/vickers" className="text-white hover:text-white/90 transition-smooth">Produtos</Link></li>
              <li><Link to="/servicos/manutencao-preventiva" className="text-white hover:text-white/90 transition-smooth">Serviços</Link></li>
              <li><Link to="/informacoes" className="text-white hover:text-white/90 transition-smooth">Informações</Link></li>
              <li><Link to="/faq" className="text-white hover:text-white/90 transition-smooth">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="text-white hover:text-white/90 transition-smooth">Contato</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-3 mt-6 uppercase tracking-wide">Serviços Especializados</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/manutencao-bombas-hidraulicas" className="text-white hover:text-white/90 transition-smooth">Manutenção de Bombas Hidráulicas</Link></li>
              <li><Link to="/cilindros-hidraulicos" className="text-white hover:text-white/90 transition-smooth">Cilindros Hidráulicos</Link></li>
              <li><Link to="/valvulas-hidraulicas" className="text-white hover:text-white/90 transition-smooth">Válvulas Hidráulicas</Link></li>
              <li><Link to="/assistencia-tecnica-industrial" className="text-white hover:text-white/90 transition-smooth">Assistência Técnica Industrial</Link></li>
              <li><Link to="/hidraulica-industrial" className="text-white hover:text-white/90 transition-smooth">Hidráulica Industrial SP</Link></li>
              <li><Link to="/unidade-hidraulica-industrial" className="text-white hover:text-white/90 transition-smooth">Unidades Hidráulicas</Link></li>
              <li><Link to="/bomba-de-pistao-hidraulica" className="text-white hover:text-white/90 transition-smooth">Bomba de Pistão Hidráulica</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-3 mt-6 uppercase tracking-wide">Guias Técnicos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/informacoes/hub-bombas-hidraulicas" className="text-white hover:text-white/90 transition-smooth">Guia de Bombas Hidráulicas</Link></li>
              <li><Link to="/informacoes/hub-valvulas-hidraulicas" className="text-white hover:text-white/90 transition-smooth">Guia de Válvulas Hidráulicas</Link></li>
              <li><Link to="/informacoes/hub-cilindros-hidraulicos" className="text-white hover:text-white/90 transition-smooth">Guia de Cilindros Hidráulicos</Link></li>
              <li><Link to="/informacoes/hub-unidades-hidraulicas" className="text-white hover:text-white/90 transition-smooth">Guia de Unidades Hidráulicas</Link></li>
              <li><Link to="/informacoes/hub-filtros-hidraulicos" className="text-white hover:text-white/90 transition-smooth">Guia de Filtros Hidráulicos</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <meta itemProp="name" content="HiComp Hidráulica" />
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white">
                  <span itemProp="streetAddress">Rua Zalina Rolim, 647</span> -{" "}
                  <span itemProp="addressNeighborhood">Vila Maria Alta</span>,{" "}
                  <span itemProp="addressLocality">São Paulo</span> -{" "}
                  <span itemProp="addressRegion">SP</span>{" "}
                  <meta itemProp="postalCode" content="02127-000" />
                  <meta itemProp="addressCountry" content="BR" />
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                <a href="tel:+551126195457" className="text-white transition-smooth" itemProp="telephone">
                  (11) 2619-5457
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                <a href="tel:+551126195482" className="text-white transition-smooth">
                  (11) 2619-5482
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer" className="text-white transition-smooth" aria-label="WhatsApp HiComp Hidráulica">
                  (11) 99246-5636 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                <a href="mailto:contato@hicomp.com.br" className="text-white transition-smooth" itemProp="email">
                  contato@hicomp.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
            <p>© {new Date().getFullYear()} HiComp Hidráulica. Todos os direitos reservados.</p>
            <nav aria-label="Links legais e institucionais" className="flex gap-4">
              <Link to="/sitemap" className="hover:text-white transition-colors">Mapa do site</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
