import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-16 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-wide">
            Faça um Orçamento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para seus produtos e serviços
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <span className="rounded-full border border-primary-foreground/30 px-4 py-2">Base em São Paulo</span>
            <span className="rounded-full border border-primary-foreground/30 px-4 py-2">Atendimento para todo o Brasil</span>
            <span className="rounded-full border border-primary-foreground/30 px-4 py-2">Bombas, cilindros, válvulas e unidades hidráulicas</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato">
              <Button variant="secondary" size="lg" className="hover-lift">
                Solicite um Orçamento
              </Button>
            </Link>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/5511992465636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa no WhatsApp"
                className="flex items-center"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Fale conosco pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
