import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UnidadeHidraulicaIndustrial = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Unidade Hidráulica Industrial", url: "/unidade-hidraulica-industrial" },
  ];

  const serviceSchema = createServiceSchema(
    "Unidade Hidráulica Industrial",
    "Fabricação, manutenção e reparo de unidades hidráulicas industriais em São Paulo. Centrais hidráulicas sob medida com bomba, motor, reservatório e painel de controle para qualquer aplicação industrial."
  );

  const faqItems = [
    { question: "Qual o prazo para fabricar uma unidade hidráulica industrial?", answer: "Depende da complexidade. Unidades simples de até 30 kW podem ser entregues em 10 a 20 dias. Unidades complexas com automação CLP levam de 30 a 60 dias. Entre em contato para consulta." },
    { question: "Vocês fazem manutenção de unidades hidráulicas de qualquer marca?", answer: "Sim, realizamos manutenção e reparo de unidades hidráulicas de qualquer marca e porte, incluindo Parker, Rexroth, Vickers, Eaton e fabricantes nacionais." },
    { question: "O que está incluso na manutenção preventiva da unidade hidráulica?", answer: "A manutenção preventiva inclui análise do óleo hidráulico, troca de filtros, verificação e ajuste de válvulas, inspeção de bomba e motor, verificação de mangueiras e conexões, e relatório técnico completo." },
    { question: "Vocês atendem paradas de emergência em unidades hidráulicas?", answer: "Sim, oferecemos atendimento emergencial com SLA de 4 horas para a Grande São Paulo. Para clientes com contrato, o atendimento tem prioridade máxima e equipe dedicada." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Unidade Hidráulica Industrial em SP | Fabricação e Manutenção"
        description="Fabricação e manutenção de unidades hidráulicas industriais em São Paulo. Centrais hidráulicas sob medida 1 a 200kW. Parker, Rexroth, Vickers ☎ (11) 2619-5457"
        keywords="unidade hidráulica industrial, central hidráulica industrial, fabricação unidade hidráulica, manutenção central hidráulica SP, grupo hidráulico industrial, unidade hidráulica São Paulo"
        canonical="/unidade-hidraulica-industrial"
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
                <li className="text-primary-foreground font-medium">Unidade Hidráulica Industrial</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Unidade Hidráulica Industrial em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp projeta, fabrica e mantém unidades hidráulicas industriais sob medida,
              de 1 a 200 kW, para qualquer aplicação industrial. Atendemos São Paulo, Grande SP e todo o Brasil.
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
                O que é uma Unidade Hidráulica Industrial?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>unidade hidráulica industrial</strong> (também chamada de central hidráulica ou grupo
                hidráulico) é o conjunto integrado composto por reservatório de óleo, bomba hidráulica, motor
                elétrico, bloco de válvulas, filtros e painel de controle elétrico. É o "coração" de qualquer
                sistema hidráulico industrial, responsável por gerar, controlar e distribuir a potência hidráulica
                para todos os atuadores.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp projeta e fabrica <strong>unidades hidráulicas industriais</strong> de acordo com
                as especificações de cada cliente, desde grupos hidráulicos simples de 1 kW até centrais de alta
                potência com 200 kW, controle proporcional e automação por CLP.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Também realizamos manutenção preventiva, reparo e modernização (retrofit) de unidades existentes
                de qualquer marca, com relatório técnico e garantia de serviço.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Componentes da Unidade Hidráulica Industrial
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Reservatório de Óleo", icon: Settings, desc: "Fabricado em aço carbono ou inox, dimensionado para 3 a 5 vezes a vazão nominal. Com tampa removível para limpeza e indicador de nível visual." },
                  { title: "Conjunto Moto-Bomba", icon: Wrench, desc: "Motor elétrico WEG ou Weg/Siemens + bomba Parker, Rexroth ou Vickers, acoplados por acoplamento elástico em flange SAE ou suporte de alumínio." },
                  { title: "Bloco de Válvulas (Manifold)", icon: Settings, desc: "Válvulas de alívio, direcionais e de controle integradas em bloco usinado, eliminando tubulações externas e pontos de vazamento." },
                  { title: "Sistema de Filtração", icon: Shield, desc: "Filtros de sucção, retorno e ventilação com indicadores visuais de colmatagem. Filtragem 3 a 25 µm conforme especificação." },
                  { title: "Painel Elétrico", icon: CheckCircle, desc: "Painel de controle com partida direta ou inversor de frequência, intertravamentos de temperatura e nível, IHM e comunicação CLP." },
                  { title: "Trocador de Calor", icon: Shield, desc: "Resfriador a água ou ar para sistemas com operação contínua, mantendo temperatura do óleo abaixo de 55°C." },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Aplicações da Unidade Hidráulica Industrial
              </h2>
              <ul className="space-y-3">
                {[
                  "Prensas hidráulicas e estampagem",
                  "Injetoras de plástico e borracha",
                  "Máquinas-ferramenta CNC com servos hidráulicos",
                  "Guilhotinas e dobradeiras industriais",
                  "Linhas de montagem automatizadas",
                  "Fundição sob pressão (injetoras de alumínio e zinco)",
                  "Equipamentos de elevação e içamento",
                  "Sistemas de testes e bancadas hidráulicas",
                ].map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que Escolher a HiComp para sua Unidade Hidráulica?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência em hidráulica industrial" },
                  { icon: CheckCircle, text: "Projeto completo: cálculo hidráulico, especificação e fabricação" },
                  { icon: Clock, text: "Comissionamento e treinamento de operadores incluso" },
                  { icon: Wrench, text: "Contratos de manutenção preventiva com SLA garantido" },
                  { icon: MapPin, text: "Atendimento em São Paulo, Grande SP e todo o Brasil" },
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
                Manutenção de Unidade Hidráulica Industrial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>manutenção preventiva da unidade hidráulica industrial</strong> é fundamental para
                garantir a disponibilidade do equipamento e evitar paradas não planejadas. A HiComp recomenda
                manutenção preventiva anual ou a cada 2.000 horas de operação.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso serviço de manutenção inclui: análise laboratorial do óleo hidráulico, troca de filtros,
                verificação e ajuste de todas as válvulas, inspeção da bomba e motor elétrico, verificação de
                mangueiras e conexões, e emissão de relatório técnico detalhado com recomendações.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes sobre Unidade Hidráulica Industrial
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
                <Link to="/cilindros-hidraulicos" className="text-primary hover:underline text-sm">Cilindros Hidráulicos</Link>
                <Link to="/valvulas-hidraulicas" className="text-primary hover:underline text-sm">Válvulas Hidráulicas</Link>
                <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">Assistência Técnica Industrial</Link>
              </div>
            </section>

            {/* CTA Final */}
            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Unidade Hidráulica Industrial?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Solicite orçamento para fabricação, manutenção ou reparo. Atendemos em São Paulo e todo o Brasil.
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

export default UnidadeHidraulicaIndustrial;
