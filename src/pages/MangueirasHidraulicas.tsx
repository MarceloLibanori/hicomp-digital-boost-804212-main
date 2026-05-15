import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MangueirasHidraulicas = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Mangueiras Hidráulicas", url: "/mangueiras-hidraulicas" },
  ];

  const serviceSchema = createServiceSchema(
    "Mangueiras Hidráulicas",
    "Fornecimento e montagem de mangueiras hidráulicas de alta pressão em São Paulo. Mangueiras Parker, Gates, Eaton em todos os tipos e bitolas, com prensagem e certificado de pressão."
  );

  const faqItems = [
    { question: "Quais tipos de mangueira hidráulica vocês fornecem?", answer: "Fornecemos mangueiras de 1 a 4 tramas e espirais, nas classificações SAE R1, R2, R4, R9, R12, R13 e R15, em bitolas de 3/16\" a 2\". Também trabalhamos com mangueiras para baixa pressão e retorno." },
    { question: "Vocês montam mangueiras hidráulicas no mesmo dia?", answer: "Sim, mantemos estoque de mangueiras e terminais para montagem no mesmo dia. Para paradas de produção, atendemos em caráter de urgência — entre em contato pelo WhatsApp ou telefone." },
    { question: "Como solicitar orçamento para mangueiras hidráulicas?", answer: "Envie a especificação (comprimento, bitola, tipo de terminal e pressão de trabalho) via WhatsApp. Para mangueiras sem especificação, envie uma foto da mangueira existente para identificação." },
    { question: "As mangueiras de alta pressão têm certificado de teste?", answer: "Sim, todas as mangueiras de alta pressão montadas pela HiComp acompanham certificado de teste hidrostático a 1,5x a pressão nominal, conforme exigência da NR-12." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Mangueiras Hidráulicas em SP | Alta Pressão | HiComp"
        description="Mangueiras hidráulicas de alta pressão em São Paulo. Montagem no mesmo dia, Parker, Gates, Eaton. Prensagem e certificado NR-12 ☎ (11) 2619-5457"
        keywords="mangueiras hidráulicas, mangueira hidráulica alta pressão, mangueira hidráulica SP, montagem mangueiras hidráulicas, mangueira Parker, mangueira Gates, conexões hidráulicas São Paulo"
        canonical="/mangueiras-hidraulicas"
        ogType="website"
        structuredData={[serviceSchema, createBreadcrumbSchema(breadcrumbs)]}
        faq={faqItems}
      />
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-primary-foreground transition-smooth">Home</Link></li>
                <li>/</li>
                <li className="text-primary-foreground font-medium">Mangueiras Hidráulicas</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Mangueiras Hidráulicas em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp fornece e monta mangueiras hidráulicas de todos os tipos e pressões,
              com terminais prensados, certificado de teste e pronta entrega em São Paulo e Grande SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Grátis
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+551126195457">
                  <Phone className="mr-2 h-5 w-5" /> (11) 2619-5457
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Mangueiras Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A HiComp trabalha com toda a linha de <strong>mangueiras hidráulicas</strong>, desde mangueiras
                para sistemas de baixa pressão até mangueiras de altíssima pressão para britagem e perfuração.
                Montamos com terminais BSP, JIC, ORFS, SAE flangeado e outros padrões.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "1 Trama (R1 / 1SN)", desc: "Pressão até 180 bar. Aplicação em linhas de retorno, pilotagem e baixa pressão. Alta flexibilidade e fácil instalação." },
                  { title: "2 Tramas (R2 / 2SN)", desc: "Pressão até 400 bar. O tipo mais utilizado em sistemas industriais convencionais. Bom equilíbrio entre pressão e flexibilidade." },
                  { title: "4 Tramas (4SP / R9)", desc: "Pressão até 500 bar. Indicada para linhas de alta pressão de bombas de pistão e circuitos principais de prensas." },
                  { title: "Espiral (R12 / R13)", desc: "Pressão de 500 a 1000 bar. Para equipamentos pesados, mineração e britadores. Certificado NR-12 incluso." },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Terminais para Mangueiras Hidráulicas
              </h2>
              <ul className="space-y-3">
                {[
                  "BSP / BSPP — rosca paralela britânica com anel de vedação (padrão europeu)",
                  "JIC (37°) — rosca imperial com cone, alta pressão sem vazamento",
                  "ORFS — face plana com O-ring, ideal para alta pressão e ambientes externos",
                  "SAE Flangeado — para grandes diâmetros e altíssima pressão",
                  "NPT — rosca cônica americana, comum em equipamentos importados",
                  "Swageado — terminal prensado em prensa hidráulica calibrada",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Marcas de Mangueiras Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp trabalha com as principais marcas de <strong>mangueiras hidráulicas</strong> do mercado:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Parker", "Gates", "Eaton / Aeroquip", "Alfagomma"].map((brand) => (
                  <div key={brand} className="bg-muted/50 rounded-lg p-4 text-center">
                    <span className="font-semibold text-foreground">{brand}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que Escolher a HiComp para Mangueiras Hidráulicas?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Prensagem em máquina hidráulica calibrada — sem risco de colapso" },
                  { icon: CheckCircle, text: "Certificado de teste hidrostático NR-12 para mangueiras de alta pressão" },
                  { icon: Clock, text: "Montagem no mesmo dia — pronta entrega para emergências industriais" },
                  { icon: Wrench, text: "Todas as marcas, bitolas e tipos de terminais em estoque" },
                  { icon: MapPin, text: "Localização em São Paulo — entrega na Grande SP e todo o Brasil" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Inspeção e Segurança de Mangueiras Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>manutenção preventiva das mangueiras hidráulicas</strong> é exigida pela NR-12 e
                fundamental para a segurança dos operadores. A HiComp recomenda inspeção visual a cada 250 horas
                de operação e substituição preventiva a cada 3 a 5 anos, independente do estado aparente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nunca utilize mangueiras com abaulamentos, armação danificada visível, manchas de óleo na superfície
                externa ou que tenham sofrido dobramento excessivo. Uma ruptura de mangueira hidráulica representa
                risco grave de acidente e parada de produção.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes sobre Mangueiras Hidráulicas
              </h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="border-b border-border pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Links relacionados */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-4">Serviços Relacionados</h2>
              <div className="flex flex-wrap gap-3">
                <Link to="/informacoes/conexoes-hidraulicas" className="text-primary hover:underline text-sm">Conexões Hidráulicas</Link>
                <Link to="/informacoes/vedacoes-hidraulicas" className="text-primary hover:underline text-sm">Vedações Hidráulicas</Link>
                <Link to="/manutencao-bombas-hidraulicas" className="text-primary hover:underline text-sm">Manutenção de Bombas Hidráulicas</Link>
                <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">Assistência Técnica Industrial</Link>
              </div>
            </section>

            {/* CTA Final */}
            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Mangueiras Hidráulicas?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato e receba orçamento rápido. Montagem no mesmo dia disponível. São Paulo e Grande SP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                    WhatsApp: (11) 99246-5636
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+551126195457">
                    <Phone className="mr-2 h-5 w-5" /> Ligar Agora
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MangueirasHidraulicas;
