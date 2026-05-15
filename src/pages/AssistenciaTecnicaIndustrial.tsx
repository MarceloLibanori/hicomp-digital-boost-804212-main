import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin, Factory, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AssistenciaTecnicaIndustrial = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Assistência Técnica Industrial", url: "/assistencia-tecnica-industrial" },
  ];

  const serviceSchema = createServiceSchema(
    "Assistência Técnica Industrial em Hidráulica",
    "Assistência técnica especializada em sistemas hidráulicos industriais em São Paulo. Diagnóstico, reparo, manutenção preventiva e corretiva de equipamentos hidráulicos, pneumáticos e automação."
  );

  const faqItems = [
    { question: "Vocês fazem assistência técnica in loco?", answer: "Sim, nossa equipe técnica realiza atendimento in loco em indústrias na Grande São Paulo e região metropolitana. Para outras localidades, oferecemos suporte técnico remoto e recebemos equipamentos para reparo em nossa oficina." },
    { question: "Qual o tempo de resposta para atendimento emergencial?", answer: "Para clientes na Grande São Paulo, o tempo de resposta para atendimentos emergenciais é de até 24 horas. Para situações críticas de parada de linha, priorizamos o atendimento mais rápido possível." },
    { question: "Vocês atendem quais setores industriais?", answer: "Atendemos todos os setores: siderurgia, mineração, papel e celulose, plásticos, automobilístico, alimentício, farmacêutico, construção civil, agronegócio e energia." },
    { question: "Oferecem contrato de manutenção preventiva?", answer: "Sim, oferecemos contratos de manutenção preventiva programada com visitas periódicas, análise de óleo, inspeção de componentes e relatórios técnicos detalhados. Reduza paradas e aumente a vida útil dos seus equipamentos." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Assistência Técnica Hidráulica Industrial SP"
        description="Assistência técnica em hidráulica industrial em São Paulo. Diagnóstico, reparo e manutenção de sistemas hidráulicos. Atendimento emergencial ☎ (11) 2619-5457"
        keywords="assistência técnica hidráulica, assistência hidráulica industrial, manutenção hidráulica SP, reparo hidráulico industrial, empresa de hidráulica São Paulo"
        canonical="/assistencia-tecnica-industrial"
        structuredData={[serviceSchema, createBreadcrumbSchema(breadcrumbs)]}
        faq={faqItems}
      />
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-primary-foreground transition-smooth">Home</Link></li>
                <li>/</li>
                <li className="text-primary-foreground font-medium">Assistência Técnica Industrial</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Assistência Técnica em Hidráulica Industrial em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp oferece assistência técnica completa para sistemas hidráulicos industriais, 
              com diagnóstico especializado, reparo e manutenção preventiva. Atendimento em São Paulo e todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">Solicitar Atendimento</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+551126195457"><Phone className="mr-2 h-5 w-5" /> (11) 2619-5457</a>
              </Button>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Assistência Técnica Especializada em Hidráulica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>assistência técnica em hidráulica industrial</strong> é um serviço essencial para 
                manter a produtividade e segurança das operações industriais. Sistemas hidráulicos são complexos 
                e exigem profissionais qualificados para diagnóstico, reparo e manutenção. Uma falha não 
                identificada pode escalar rapidamente, causando danos em cascata em bombas, válvulas, cilindros 
                e demais componentes do circuito.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp é referência em <strong>assistência hidráulica em São Paulo</strong>, com mais de 
                25 anos de experiência atendendo indústrias de todos os portes. Nossa equipe técnica é 
                capacitada para trabalhar com sistemas das marcas Parker, Rexroth, Vickers, Denison e Eaton, 
                realizando desde diagnósticos simples até projetos completos de retrofit e modernização.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com sede na Vila Maria Alta, São Paulo, oferecemos atendimento presencial na capital e 
                Grande São Paulo, além de suporte técnico remoto e recebimento de equipamentos de todo o Brasil. 
                Nossa estrutura inclui oficina equipada com bancada de testes, ferramental especializado e 
                estoque de peças das principais marcas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nossos Serviços de Assistência Técnica
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Wrench, title: "Diagnóstico Técnico", desc: "Análise completa do sistema hidráulico para identificar falhas, desgastes e oportunidades de melhoria. Inclui medição de pressão, vazão, temperatura e análise de contaminação do fluido." },
                  { icon: Shield, title: "Manutenção Preventiva", desc: "Programa de manutenção planejada com inspeções periódicas, troca de vedações, análise de óleo, ajustes de pressão e substituição preventiva de componentes desgastados." },
                  { icon: Zap, title: "Manutenção Corretiva", desc: "Atendimento emergencial para reparos em bombas, cilindros, válvulas e unidades hidráulicas. Prioridade para situações de parada de linha com impacto na produção." },
                  { icon: Factory, title: "Retrofit e Modernização", desc: "Atualização de sistemas hidráulicos obsoletos com tecnologias modernas. Melhoria de eficiência energética, controle e automação de circuitos hidráulicos existentes." },
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
                Setores Industriais que Atendemos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A experiência da HiComp abrange todos os principais setores da indústria brasileira. 
                Cada setor possui particularidades e exigências específicas que nossa equipe conhece profundamente:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Siderurgia e Metalurgia",
                  "Mineração e Extração",
                  "Papel e Celulose",
                  "Indústria de Plásticos e Borrachas",
                  "Setor Automobilístico",
                  "Indústria Alimentícia",
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

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que a HiComp é a Melhor Escolha em São Paulo?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência em hidráulica industrial no Brasil" },
                  { icon: CheckCircle, text: "Equipe técnica especializada e constantemente atualizada" },
                  { icon: Clock, text: "Atendimento emergencial com tempo de resposta de até 24 horas em SP" },
                  { icon: Wrench, text: "Oficina completa com bancada de testes e ferramental especializado" },
                  { icon: MapPin, text: "Localização estratégica em São Paulo com acesso rápido às principais vias" },
                  { icon: Factory, text: "Estoque de peças Parker, Rexroth, Vickers e Denison para reparos ágeis" },
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
                Perguntas Frequentes sobre Assistência Técnica
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

            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Assistência Técnica Hidráulica?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato agora. Diagnóstico, reparo e manutenção em São Paulo e todo o Brasil.
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

export default AssistenciaTecnicaIndustrial;
