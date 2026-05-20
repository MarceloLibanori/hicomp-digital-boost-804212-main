import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.png";
import logo150 from "@/assets/logo-150.webp";
import logo300 from "@/assets/logo-300.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);

  const productsLinks = [
    { name: "Vickers", path: "/produtos/vickers" },
    { name: "Parker", path: "/produtos/parker" },
    { name: "HDA", path: "/produtos/hda" },
    { name: "Denison", path: "/produtos/denison" },
    { name: "Eaton", path: "/produtos/eaton" },
    { name: "Rexroth", path: "/produtos/rexroth" },
  ];

  const servicesLinks = [
    { name: "Manutenção Preventiva", path: "/servicos/manutencao-preventiva" },
    { name: "Manutenção Corretiva", path: "/servicos/manutencao-corretiva" },
    { name: "Análise de Óleo", path: "/servicos/analise-oleo" },
    { name: "Retrofit", path: "/servicos/retrofit" },
    { name: "Consultoria Técnica", path: "/servicos/consultoria" },
    { name: "Treinamentos", path: "/servicos/treinamentos" },
  ];

  const infoLinks = [
    { name: "Centro de Recursos", path: "/informacoes" },
    { name: "Atuadores Hidráulicos", path: "/informacoes/atuadores" },
    { name: "Bombas Hidráulicas", path: "/informacoes/bombas" },
    { name: "Válvulas", path: "/informacoes/valvulas" },
    { name: "Filtros", path: "/informacoes/filtros" },
    { name: "Sistemas Hidráulicos", path: "/informacoes/sistemas" },
    { name: "Mangueiras e Conexões", path: "/informacoes/mangueiras" },
  ];

  return (
    <header className="w-full bg-background shadow-md sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4 mx-auto">
              <a href="tel:+551126195457" className="flex items-center gap-2 transition-smooth text-primary-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 2619-5457</span>
              </a>
              <a href="tel:+551126195482" className="flex items-center gap-2 transition-smooth text-primary-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 2619-5482</span>
              </a>
              <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-smooth text-primary-foreground font-semibold" aria-label="Abrir conversa no WhatsApp">
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                <span>(11) 99246-5636 - WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <picture>
              <source
                type="image/webp"
                srcSet={`${logo150} 150w, ${logo300} 300w`}
                sizes="(max-width: 640px) 120px, 150px"
              />
              <img src={logo} alt="HiComp Hidráulica - Logo" className="h-12 w-auto" width="150" height="48" />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/empresa" className="text-foreground hover:text-primary transition-smooth font-medium">
              Empresa
            </Link>
            
            <DropdownMenu open={openDropdown === 'produtos'} onOpenChange={(open) => setOpenDropdown(open ? 'produtos' : null)}>
              <DropdownMenuTrigger 
                className="flex items-center gap-1 text-foreground hover:text-primary transition-smooth font-medium outline-none"
                onMouseEnter={() => setOpenDropdown('produtos')}
              >
                Produtos <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-popover border border-border shadow-lg z-50"
                onMouseEnter={() => setOpenDropdown('produtos')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {productsLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer" onClick={() => setOpenDropdown(null)}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu open={openDropdown === 'servicos'} onOpenChange={(open) => setOpenDropdown(open ? 'servicos' : null)}>
              <DropdownMenuTrigger 
                className="flex items-center gap-1 text-foreground hover:text-primary transition-smooth font-medium outline-none"
                onMouseEnter={() => setOpenDropdown('servicos')}
              >
                Serviços <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-popover border border-border shadow-lg z-50"
                onMouseEnter={() => setOpenDropdown('servicos')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer" onClick={() => setOpenDropdown(null)}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/informacoes" className="text-foreground hover:text-primary transition-smooth font-medium">
              Informações
            </Link>

            <Link to="/videos" className="text-foreground hover:text-primary transition-smooth font-medium">
              Nossos Vídeos
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contato
            </Link>
          </nav>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4 max-h-[70vh] overflow-y-auto animate-slide-in">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/empresa" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Empresa
              </Link>
              
              <Collapsible open={produtosOpen} onOpenChange={setProdutosOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-foreground hover:text-primary transition-smooth font-medium py-2">
                  Produtos
                  <ChevronDown className={`h-4 w-4 transition-transform ${produtosOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 flex flex-col gap-2 pt-2">
                  {productsLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className="text-muted-foreground hover:text-primary transition-smooth py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={servicosOpen} onOpenChange={setServicosOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-foreground hover:text-primary transition-smooth font-medium py-2">
                  Serviços
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicosOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 flex flex-col gap-2 pt-2">
                  {servicesLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      className="text-muted-foreground hover:text-primary transition-smooth py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Link 
                to="/informacoes" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Informações
              </Link>
              <Link 
                to="/videos" 
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nossos Vídeos
              </Link>
              <Link
                to="/contato"
                className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <a
                href="https://wa.me/5511992465636?text=Olá! Gostaria de um orçamento para manutenção hidráulica."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-2"
                aria-label="Falar pelo WhatsApp"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                Falar pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
