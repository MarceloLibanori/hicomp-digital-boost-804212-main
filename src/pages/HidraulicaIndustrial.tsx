import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin, Factory, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HidraulicaIndustrial = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Hidráulica Industrial", url: "/hidraulica-industrial" },
  ];

  const serviceSchema = createServiceSchema(
    "Hidráulica Industrial em São Paulo",
    "Soluções completas em hidráulica industrial em São Paulo. Manutenção, reparo e suporte técnico especializado em bombas, cilindros, válvulas e unidades hidráulicas. Parker, Rexroth, Vickers."
  );

  const faqItems = [
    { question: "O que é hidráulica industrial?", answer: "Hidráulica industrial é a aplicação de sistemas que utilizam fluidos pressurizados (geralmente óleo hidráulico) para transmitir força e movimento em máquinas e equipamentos industriais. Envolve bombas, cilindros, válvulas, motores e unidades hidráulicas que operam em conjunto para realizar trabalho mecânico com alta precisão e potência." },
    { question: "Quais serviços de hidráulica industrial a HiComp oferece?", answer: "A HiComp oferece manutenção preventiva e corretiva, reparo de bombas, cilindros e válvulas hidráulicas, fornecimento de peças e componentes, retrofit de sistemas, diagnóstico técnico, análise de óleo e projetos de unidades hidráulicas sob medida." },
    { question: "Qual a importância da manutenção hidráulica preventiva?", answer: "A manutenção preventiva reduz em até 70% o risco de paradas não programadas, aumenta a vida útil dos componentes em até 40%, melhora a eficiência energética do sistema e previne acidentes de trabalho causados por falhas hidráulicas." },
    { question: "Vocês atendem indústrias fora de São Paulo?", answer: "Sim, atendemos indústrias em todo o Brasil. Para clientes fora de São Paulo, oferecemos suporte técnico remoto, envio de peças e componentes, e recebemos equipamentos para reparo em nossa oficina na Vila Maria Alta, SP." },
    { question: "Quanto tempo leva para reparar um sistema hidráulico?", answer: "O prazo depende da complexidade do reparo. Diagnósticos simples e troca de vedações podem ser realizados em 1 a 2 dias. Reparos completos de bombas ou cilindros levam de 3 a 7 dias úteis. Em emergências, oferecemos atendimento prioritário." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Hidráulica Industrial em São Paulo | Assistência Técnica | HiComp"
        description="Soluções completas em hidráulica industrial em São Paulo. Manutenção, reparo e suporte técnico especializado. Parker, Rexroth, Vickers. Orçamento grátis ☎ (11) 2619-5457"
        keywords="hidráulica industrial, hidráulica industrial São Paulo, empresa de hidráulica industrial, manutenção hidráulica industrial, assistência hidráulica SP"
        canonical="/hidraulica-industrial"
        structuredData={[serviceSchema, createBreadcrumbSchema(breadcrumbs)]}
        faq={faqItems}
      />
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-primary-foreground transition-smooth">Home</Link></li>
                <li>/</li>
                <li className="text-primary-foreground font-medium">Hidráulica Industrial</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Hidráulica Industrial em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp oferece soluções completas em hidráulica industrial, atendendo empresas com serviços 
              técnicos especializados e confiáveis. Manutenção, reparo e suporte técnico em São Paulo e todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">Solicitar Orçamento Grátis</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+551126195457"><Phone className="mr-2 h-5 w-5" /> (11) 2619-5457</a>
              </Button>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* O que é hidráulica industrial */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                O que é Hidráulica Industrial?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>hidráulica industrial</strong> é o ramo da engenharia que utiliza fluidos pressurizados 
                para transmitir energia, força e movimento em máquinas e equipamentos de grande porte. Os sistemas 
                hidráulicos são compostos por <strong>bombas, cilindros, válvulas, motores, filtros e unidades 
                hidráulicas</strong> que trabalham em conjunto para realizar operações de alta potência com 
                precisão e controle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No Brasil, a hidráulica industrial está presente nos principais setores produtivos: 
                <strong>siderurgia, mineração, papel e celulose, indústria automobilística, construção civil, 
                agronegócio e petroquímica</strong>. Sem sistemas hidráulicos em perfeito funcionamento, 
                essas indústrias sofrem com paradas não programadas, perda de produtividade e riscos à 
                segurança dos operadores.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A HiComp atua há mais de 25 anos no mercado de hidráulica industrial em São Paulo, 
                oferecendo desde a venda de componentes até a assistência técnica completa. Nossa 
                localização na Vila Maria Alta, zona norte de São Paulo, permite atendimento rápido 
                na capital, Grande São Paulo, Guarulhos, ABC Paulista, Campinas, Sorocaba e todo o 
                interior do estado.
              </p>
            </section>

            {/* Nossos Serviços */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nossos Serviços de Hidráulica Industrial
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Wrench, title: "Manutenção Hidráulica", desc: "Manutenção preventiva e corretiva de sistemas hidráulicos completos. Diagnóstico técnico, troca de vedações, análise de óleo, ajustes de pressão e testes de performance." },
                  { icon: Settings, title: "Reparo de Componentes", desc: "Reparo especializado de bombas, cilindros, válvulas e motores hidráulicos. Retífica, recondicionamento e substituição de peças com garantia de qualidade." },
                  { icon: Factory, title: "Fornecimento de Peças", desc: "Venda de componentes hidráulicos das marcas Parker, Rexroth, Vickers, Denison e Eaton. Peças originais e compatíveis com entrega rápida em São Paulo e todo o Brasil." },
                  { icon: Zap, title: "Projetos e Retrofit", desc: "Projetos de unidades hidráulicas sob medida e modernização de sistemas existentes. Melhoria de eficiência energética, automação e controle de circuitos hidráulicos." },
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

            {/* Componentes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Componentes Hidráulicos: Bombas, Cilindros e Válvulas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os três componentes fundamentais de qualquer sistema hidráulico industrial são as 
                <strong> bombas, cilindros e válvulas</strong>. Cada um desempenha uma função específica 
                e indispensável para o funcionamento correto do circuito:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Bombas Hidráulicas</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Responsáveis por converter energia mecânica em energia hidráulica, gerando o fluxo 
                    de fluido pressurizado que alimenta todo o sistema. A HiComp trabalha com bombas de 
                    engrenagem, pistão axial, pistão radial e palhetas.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Cilindros Hidráulicos</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Atuadores que convertem a energia hidráulica em força linear e movimento. Utilizados 
                    em prensas, injetoras, guindastes e máquinas de construção. Disponíveis em simples ação, 
                    dupla ação e telescópicos.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Válvulas Hidráulicas</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Controlam a direção, pressão e vazão do fluido no circuito. Incluem válvulas direcionais, 
                    de pressão, de vazão e proporcionais. São essenciais para o controle preciso de qualquer 
                    sistema hidráulico.
                  </p>
                </div>
              </div>
            </section>

            {/* Setores */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Setores Industriais Atendidos em São Paulo e Brasil
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp atende os principais setores produtivos do Brasil com soluções em hidráulica 
                industrial adaptadas às necessidades de cada segmento:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Siderurgia e Metalurgia",
                  "Mineração e Extração",
                  "Papel e Celulose",
                  "Indústria de Plásticos e Borrachas",
                  "Setor Automobilístico",
                  "Indústria Alimentícia e Farmacêutica",
                  "Construção Civil e Terraplanagem",
                  "Agronegócio e Implementos Agrícolas",
                  "Energia e Petroquímica",
                  "Naval e Portuário",
                ].map((setor) => (
                  <div key={setor} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{setor}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Atuação regional */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Atuação Regional: São Paulo e Todo o Brasil
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Com sede em São Paulo, na Vila Maria Alta, a HiComp atende presencialmente indústrias 
                na capital paulista, Grande São Paulo, Guarulhos, Osasco, ABC Paulista (Santo André, 
                São Bernardo do Campo, São Caetano do Sul), Campinas, Sorocaba, Jundiaí e todo o 
                interior do estado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para clientes em Minas Gerais, Rio de Janeiro, Paraná, Santa Catarina, Rio Grande do Sul, 
                Bahia, Goiás e demais estados, oferecemos envio de peças e componentes com embalagem 
                industrial segura, além de suporte técnico remoto e recebimento de equipamentos para 
                reparo em nossa oficina.
              </p>
            </section>

            {/* Por que escolher */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que Escolher a HiComp para Hidráulica Industrial?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência no mercado de hidráulica industrial" },
                  { icon: CheckCircle, text: "Peças originais e compatíveis Parker, Rexroth, Vickers e Denison" },
                  { icon: Clock, text: "Diagnóstico técnico rápido com orçamento gratuito e sem compromisso" },
                  { icon: Wrench, text: "Oficina completa com bancada de testes e ferramental especializado" },
                  { icon: MapPin, text: "Atendimento em São Paulo, Grande SP e envio para todo o Brasil" },
                  { icon: Factory, text: "Equipe técnica qualificada e constantemente atualizada" },
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
                Perguntas Frequentes sobre Hidráulica Industrial
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

            {/* CTA */}
            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Soluções em Hidráulica Industrial?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato agora e receba um diagnóstico técnico gratuito. Atendemos em São Paulo e todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">WhatsApp: (11) 99246-5636</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+551126195457"><Phone className="mr-2 h-5 w-5" /> Ligar Agora</a>
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

export default HidraulicaIndustrial;
