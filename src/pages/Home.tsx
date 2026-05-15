import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import CTASection from "@/components/CTASection";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import SEOEnhanced from "@/components/SEOEnhanced";
import { generateHomePageSchema } from "@/utils/seoSchemas";
import { generateRelatedLinks } from "@/utils/seoHelpers";
import InternalLinks from "@/components/InternalLinks";
import KeywordRichContent from "@/components/KeywordRichContent";
import LocalSEO from "@/components/LocalSEO";
import RegionalSEO from "@/components/RegionalSEO";

const Home = () => {
  const relatedLinks = generateRelatedLinks('product', '/');
  
  // FAQ para Rich Snippets — baseado em buscas reais no Google Brasil (intenção de compra + técnica)
  const homeFAQs = [
    { 
      question: "Quanto custa um cilindro hidráulico industrial?", 
      answer: "O valor depende do diâmetro, curso e pressão de trabalho. Na HiComp, fazemos orçamento grátis e sem compromisso para cilindros novos e reformados. Ligue (11) 2619-5457 ou WhatsApp (11) 99246-5636." 
    },
    { 
      question: "Onde comprar peças hidráulicas em São Paulo?", 
      answer: "A HiComp Hidráulica vende e fabrica peças hidráulicas em São Paulo, na Vila Maria Alta. Trabalhamos com cilindros, bombas, válvulas, mangueiras, vedações e conexões. Enviamos para todo o Brasil." 
    },
    { 
      question: "Qual o prazo de entrega para reparo de bomba hidráulica?", 
      answer: "Reparos simples de 5 a 7 dias úteis. Reformas completas de 15 a 30 dias. Oferecemos regime de urgência para parada de linha industrial. Solicite avaliação técnica gratuita." 
    },
    {
      question: "Quais marcas de componentes hidráulicos a HiComp trabalha?",
      answer: "Trabalhamos com Parker Hannifin, Bosch Rexroth, Eaton Vickers, Denison Hydraulics, Sauer Danfoss, Festo, SMC e Kawasaki. Bombas, cilindros, válvulas e componentes pneumáticos."
    },
    {
      question: "A HiComp trabalha com componentes pneumáticos e automação?",
      answer: "Sim. Fornecemos cilindros pneumáticos, válvulas pneumáticas, conexões, mangueiras, reguladores de pressão e soluções de automação industrial. Orçamento grátis."
    },
    {
      question: "Vocês enviam peças hidráulicas para outros estados?",
      answer: "Sim. Enviamos bombas, cilindros, válvulas e peças hidráulicas e pneumáticas para todos os 27 estados do Brasil via transportadora. Também recebemos equipamentos para manutenção."
    },
    {
      question: "Qual a diferença entre bomba hidráulica de pistão e de engrenagem?",
      answer: "A bomba de pistão axial trabalha com pressões mais altas (até 400 bar) e é usada em máquinas pesadas. A bomba de engrenagem é mais simples, econômica e ideal para pressões até 250 bar. A HiComp trabalha com ambos os tipos das marcas Parker, Rexroth e Vickers."
    },
    {
      question: "A HiComp fabrica cilindros hidráulicos sob medida?",
      answer: "Sim. Fabricamos cilindros hidráulicos e pneumáticos sob medida para qualquer aplicação industrial: prensas, injetoras, máquinas agrícolas, equipamentos de mineração e construção civil. Orçamento em 24 horas."
    },
    {
      question: "Como funciona a manutenção preventiva hidráulica?",
      answer: "A manutenção preventiva inclui análise de óleo, troca de vedações, verificação de pressão, inspeção de mangueiras e filtros. Evita paradas não programadas e reduz custos em até 70%. A HiComp atende indústrias em SP e todo o Brasil."
    },
    {
      question: "Quanto tempo dura um cilindro hidráulico?",
      answer: "Com manutenção adequada, cilindros hidráulicos podem durar de 5 a 15 anos. Fatores que influenciam: qualidade das vedações, limpeza do óleo, temperatura de operação e frequência de uso. A HiComp oferece kits de vedação e reparo com garantia."
    }
  ];
  
  // Links internos estratégicos para SEO — silo linking
  const seoLinks = [
    { title: "Cilindros Hidráulicos", url: "/cilindros-hidraulicos", description: "Fabricação, venda e manutenção de cilindros industriais" },
    { title: "Bombas Hidráulicas", url: "/manutencao-bombas-hidraulicas", description: "Reparo e venda de bombas Parker, Rexroth e Vickers" },
    { title: "Válvulas Hidráulicas", url: "/valvulas-hidraulicas", description: "Válvulas direcionais, proporcionais e de pressão" },
    { title: "Unidades Hidráulicas", url: "/assistencia-tecnica-industrial", description: "Projeto, reparo e suporte técnico para sistemas completos" },
    { title: "Perguntas Frequentes", url: "/faq", description: "Tire suas dúvidas sobre hidráulica e pneumática" },
    { title: "Solicitar Orçamento", url: "/contato", description: "Orçamento grátis em até 24h" }
  ];
  
  return (
    <>
      <SEOEnhanced
        title="Peças Hidráulicas e Hidráulica Industrial em São Paulo | HiComp"
        description="Peças hidráulicas, componentes hidráulicos e manutenção de bombas, cilindros e válvulas em São Paulo. Atendimento técnico especializado com a HiComp."
        keywords="peças hidráulicas são paulo, componentes hidráulicos são paulo, hidráulica industrial são paulo, cilindro hidráulico, bomba hidráulica, válvula hidráulica, componentes pneumáticos, automação industrial, manutenção hidráulica SP, bomba Parker, válvula Rexroth, cilindro pneumático, unidade hidráulica"
        canonical="/"
        structuredData={generateHomePageSchema()}
        faq={homeFAQs}
      />
      <LocalSEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <PartnersCarousel />
          <CTASection />

          <section className="container mx-auto px-4 py-10">
            <div className="max-w-5xl">
              <h2 className="text-3xl font-bold mb-4">Peças Hidráulicas e Componentes Hidráulicos em São Paulo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp atua com <strong>peças hidráulicas em São Paulo</strong>, fornecendo
                <strong> componentes hidráulicos</strong>, manutenção industrial e suporte técnico para empresas que precisam
                de bombas, cilindros, válvulas, filtros, unidades hidráulicas e peças pneumáticas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se a sua busca é por <strong>componentes hidráulicos em São Paulo</strong> com atendimento técnico,
                prazo rápido e marcas como Parker, Rexroth, Vickers e Denison, a HiComp concentra venda, reparo
                e fabricação sob medida em um só lugar.
              </p>
            </div>
          </section>
          
          {/* Conteúdo SEO profundo — 800+ palavras com E-E-A-T */}
          <KeywordRichContent />
          
          {/* SEO Regional — busca local e nacional */}
          <RegionalSEO />
          
          <ServicesGrid />
          <TestimonialsSection />
          <FeaturedProducts />
          
          {/* Links internos estratégicos — silo linking */}
          <nav className="container mx-auto px-4 py-12" aria-label="Links para produtos e serviços">
            <InternalLinks 
              links={seoLinks}
              title="Produtos e Serviços Hidráulicos e Pneumáticos"
              columns={3}
            />
          </nav>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
