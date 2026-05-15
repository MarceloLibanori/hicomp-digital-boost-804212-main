import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BombaDePistaoHidraulica = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bomba de Pistão Hidráulica", url: "/bomba-de-pistao-hidraulica" },
  ];

  const serviceSchema = createServiceSchema(
    "Bomba de Pistão Hidráulica",
    "Reparo e manutenção de bombas de pistão hidráulicas em São Paulo. Parker, Rexroth, Eaton, Sauer Danfoss, Denison. Diagnóstico gratuito, garantia de 6 meses."
  );

  const faqItems = [
    { question: "Qual a diferença entre bomba de pistão axial e radial?", answer: "A bomba de pistão axial tem pistões dispostos paralelamente ao eixo e é mais comum em aplicações industriais e móveis, operando com pressões até 420 bar. A bomba radial tem pistões perpendiculares ao eixo, sendo utilizada em pressões extremas (acima de 400 bar) onde a eficiência volumétrica máxima é exigida." },
    { question: "Quanto tempo leva o reparo de uma bomba de pistão?", answer: "O prazo médio é de 3 a 7 dias úteis, dependendo da disponibilidade de peças e do nível de desgaste. Para emergências com parada de produção, oferecemos atendimento prioritário com prazo de 24 a 48 horas." },
    { question: "Quais marcas de bomba de pistão vocês reparam?", answer: "Reparamos bombas de pistão Parker, Rexroth, Eaton (Vickers), Sauer Danfoss, Denison, Bosch e outras marcas. Possuímos peças de reposição para as linhas mais populares em estoque." },
    { question: "Como saber se minha bomba de pistão precisa de reparo?", answer: "Os principais sinais são: queda de pressão no sistema, aquecimento excessivo do óleo, ruído de cavitação, vibração anormal e queda de vazão. A HiComp realiza diagnóstico gratuito com laudo técnico." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Bomba de Pistão Hidráulica em SP | Reparo e Manutenção"
        description="Reparo de bomba de pistão hidráulica em São Paulo. Parker, Rexroth, Eaton, Sauer Danfoss. Diagnóstico grátis, garantia 6 meses ☎ (11) 2619-5457"
        keywords="bomba de pistão hidráulica, reparo bomba pistão, bomba pistão axial, bomba pistão hidráulica Parker, bomba pistão Rexroth, manutenção bomba pistão SP"
        canonical="/bomba-de-pistao-hidraulica"
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
                <li className="text-primary-foreground font-medium">Bomba de Pistão Hidráulica</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Bomba de Pistão Hidráulica em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp é especializada em reparo, manutenção e fornecimento de componentes para
              bombas de pistão hidráulicas. Atendemos todas as marcas com diagnóstico gratuito
              e garantia de 6 meses em todos os serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                  Solicitar Diagnóstico Gratuito
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
                O que é uma Bomba de Pistão Hidráulica?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>bomba de pistão hidráulica</strong> é o tipo de bomba mais utilizado em aplicações
                industriais que exigem alta pressão, controle preciso de vazão e longa vida útil. Ao contrário
                das bombas de engrenagem ou palhetas, a bomba de pistão oferece cilindrada variável, tornando-a
                ideal para sistemas de alta eficiência energética.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Com pressões de trabalho de até 420 bar e eficiência volumétrica superior a 95%, as bombas de
                pistão são encontradas nas aplicações industriais mais exigentes: prensas de alta tonelagem,
                injetoras de plástico, máquinas-ferramenta CNC e centrais hidráulicas de grande porte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A HiComp possui mais de 25 anos de experiência no reparo de <strong>bombas de pistão
                hidráulicas</strong>, com equipe técnica especializada e estoque de peças das principais marcas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Bomba de Pistão que Reparamos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Pistão Axial Variável", desc: "Modelos com compensador de pressão, controle de cilindrada variável por servo pistão. Parker PV/PVP, Rexroth A10VSO/A4VSO, Eaton PVH/PVQ, Sauer Danfoss Série 40/90." },
                  { title: "Pistão Axial Fixo", desc: "Cilindrada fixa, construção simples e robusta. Rexroth A2FO, Parker F11/F12, Eaton PVM. Utilizados como motores ou bombas em circuitos abertos de alta pressão." },
                  { title: "Pistão Radial", desc: "Pistões dispostos radialmente ao eixo, altíssima pressão até 700 bar. Utilizados em prensas isostáticas, máquinas de ensaio e equipamentos especiais." },
                  { title: "Pistão Tandem", desc: "Dois conjuntos de pistão em um mesmo corpo, fornecendo dois circuitos independentes a partir de um único eixo. Parker PV Plus, Rexroth A10VSO dupla." },
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
                Processo de Reparo de Bomba de Pistão Hidráulica
              </h2>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Recebimento e Diagnóstico", desc: "A bomba é recebida, identificada e submetida a diagnóstico completo. Medimos a eficiência volumétrica e pressão de saída. Laudo técnico emitido em até 24h." },
                  { step: "2", title: "Desmontagem e Inspeção", desc: "Desmontagem completa em ambiente limpo. Inspeção visual e dimensional de todos os componentes: pistões, bloco de cilindros, placa de distribuição, sapatas e prato oscilante." },
                  { step: "3", title: "Substituição de Componentes", desc: "Troca de retentores, rolamentos, conjunto rotativo e demais peças desgastadas. Utilizamos peças originais ou de alta qualidade equivalente, informando a procedência." },
                  { step: "4", title: "Montagem e Teste", desc: "Remontagem em bancada com controle de torques. Teste completo com medição de pressão máxima, eficiência volumétrica e verificação de temperatura em operação." },
                  { step: "5", title: "Garantia e Entrega", desc: "Garantia de 6 meses no serviço e nas peças substituídas. Laudo de reparo completo com os valores medidos antes e após o reparo." },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">{item.step}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Marcas de Bomba de Pistão Atendidas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { brand: "Parker", models: "PV, PVP, PVB, F11, F12" },
                  { brand: "Rexroth", models: "A10VSO, A4VSO, A7VO, A2FO" },
                  { brand: "Eaton / Vickers", models: "PVH, PVQ, PVE, PVB" },
                  { brand: "Sauer Danfoss", models: "Série 20, 40, 42, 51, 90" },
                  { brand: "Denison", models: "T6, T7, Gold Cup" },
                  { brand: "Bosch", models: "A10VO, A11VO, A15VSO" },
                ].map((item) => (
                  <div key={item.brand} className="bg-muted/50 rounded-lg p-4">
                    <p className="font-semibold text-foreground">{item.brand}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.models}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que Escolher a HiComp para Reparo de Bomba de Pistão?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência em bombas de pistão hidráulicas" },
                  { icon: CheckCircle, text: "Diagnóstico gratuito com laudo técnico detalhado" },
                  { icon: Clock, text: "Prazo de 3 a 7 dias úteis — atendimento emergencial em 24h" },
                  { icon: Wrench, text: "Garantia de 6 meses em todos os serviços e peças" },
                  { icon: MapPin, text: "São Paulo — atendemos Grande SP e enviamos para todo o Brasil" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes sobre Bomba de Pistão Hidráulica
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
                <Link to="/manutencao-bombas-hidraulicas" className="text-primary hover:underline text-sm">Manutenção de Bombas Hidráulicas</Link>
                <Link to="/informacoes/bomba-hidraulica-parker" className="text-primary hover:underline text-sm">Bomba Hidráulica Parker</Link>
                <Link to="/informacoes/bomba-hidraulica-rexroth" className="text-primary hover:underline text-sm">Bomba Hidráulica Rexroth</Link>
                <Link to="/informacoes/reparo-de-bomba-hidraulica" className="text-primary hover:underline text-sm">Reparo de Bomba Hidráulica</Link>
                <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">Assistência Técnica Industrial</Link>
              </div>
            </section>

            {/* CTA Final */}
            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Sua Bomba de Pistão com Problema?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato agora para diagnóstico técnico gratuito. Respondemos em até 2 horas.
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

export default BombaDePistaoHidraulica;
