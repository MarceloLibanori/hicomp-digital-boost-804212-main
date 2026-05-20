import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOEnhanced from "@/components/SEOEnhanced";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";

const ServiceDetail = () => {
  const { service } = useParams();

  const serviceData: Record<string, {
    name: string;
    title: string;
    description: string;
    metaDescription: string;
    keywords: string;
    benefits: string[];
    applications: string[];
  }> = {
    "manutencao-preventiva": {
      name: "Manutenção Preventiva",
      title: "Manutenção Preventiva Hidráulica em São Paulo",
      description: "A manutenção preventiva é essencial para garantir o funcionamento contínuo e eficiente dos seus sistemas hidráulicos. Nossa equipe realiza inspeções programadas e ajustes necessários para prevenir falhas e prolongar a vida útil dos equipamentos.",
      metaDescription: "Manutenção preventiva hidráulica em São Paulo para bombas, cilindros e válvulas. Inspeções programadas para reduzir falhas e paradas de produção.",
      keywords: "manutenção preventiva hidráulica, manutenção hidráulica são paulo, manutenção preventiva bombas hidráulicas, inspeção de sistemas hidráulicos",
      benefits: [
        "Redução de paradas não programadas",
        "Aumento da vida útil dos equipamentos",
        "Economia com reparos emergenciais",
        "Maior eficiência operacional",
      ],
      applications: [
        "Sistemas industriais",
        "Máquinas pesadas",
        "Equipamentos móveis",
        "Linhas de produção",
      ],
    },
    "manutencao-corretiva": {
      name: "Manutenção Corretiva",
      title: "Manutenção Corretiva Hidráulica em São Paulo",
      description: "Quando problemas ocorrem, nossa equipe está pronta para realizar reparos rápidos e eficientes. Contamos com estoque de peças e profissionais qualificados para minimizar o tempo de parada.",
      metaDescription: "Manutenção corretiva hidráulica em São Paulo com reparo rápido de bombas, cilindros e válvulas. Atendimento técnico para indústrias e emergências.",
      keywords: "manutenção corretiva hidráulica, reparo hidráulico industrial, conserto de bombas hidráulicas, assistência técnica hidráulica são paulo",
      benefits: [
        "Atendimento rápido e eficiente",
        "Diagnóstico preciso de falhas",
        "Peças originais em estoque",
        "Equipe técnica especializada",
      ],
      applications: [
        "Emergências em sistemas hidráulicos",
        "Substituição de componentes",
        "Reparos em bombas e válvulas",
        "Correção de vazamentos",
      ],
    },
    "analise-oleo": {
      name: "Análise de Óleo",
      title: "Análise de Óleo Hidráulico em São Paulo",
      description: "A análise de óleo é fundamental para monitorar a saúde dos seus sistemas hidráulicos. Identificamos contaminantes, desgaste e deterioração antes que causem danos maiores.",
      metaDescription: "Análise de óleo hidráulico em São Paulo para identificar contaminação, desgaste e falhas antes da parada do equipamento.",
      keywords: "análise de óleo hidráulico, análise de fluido hidráulico, manutenção preditiva hidráulica, análise de contaminação hidráulica",
      benefits: [
        "Detecção precoce de problemas",
        "Otimização de trocas de óleo",
        "Redução de custos de manutenção",
        "Aumento da confiabilidade do sistema",
      ],
      applications: [
        "Monitoramento de condição",
        "Programas de manutenção preditiva",
        "Validação de filtração",
        "Diagnóstico de contaminação",
      ],
    },
    retrofit: {
      name: "Retrofit de Sistemas Hidráulicos",
      title: "Retrofit de Sistemas Hidráulicos em São Paulo",
      description: "Modernize seus sistemas hidráulicos existentes com tecnologias atuais. Aumentamos a eficiência, reduzimos o consumo de energia e melhoramos o desempenho geral.",
      metaDescription: "Retrofit de sistemas hidráulicos em São Paulo para modernizar máquinas, melhorar eficiência energética e aumentar a produtividade industrial.",
      keywords: "retrofit hidráulico, modernização de sistemas hidráulicos, retrofit industrial são paulo, atualização de máquinas hidráulicas",
      benefits: [
        "Aumento de eficiência energética",
        "Redução de custos operacionais",
        "Modernização tecnológica",
        "Melhoria de performance",
      ],
      applications: [
        "Atualização de sistemas antigos",
        "Substituição de componentes obsoletos",
        "Integração de automação",
        "Adequação a novas normas",
      ],
    },
    consultoria: {
      name: "Consultoria Técnica",
      title: "Consultoria Técnica em Hidráulica Industrial",
      description: "Nossa equipe de especialistas oferece consultoria completa em sistemas hidráulicos, desde o projeto até a otimização de instalações existentes.",
      metaDescription: "Consultoria técnica em hidráulica industrial para projeto, especificação de componentes e otimização de sistemas em São Paulo.",
      keywords: "consultoria técnica hidráulica, projeto hidráulico industrial, consultoria em sistemas hidráulicos, especificação de componentes hidráulicos",
      benefits: [
        "Expertise técnica especializada",
        "Soluções customizadas",
        "Otimização de processos",
        "Redução de custos",
      ],
      applications: [
        "Projeto de novos sistemas",
        "Análise de performance",
        "Troubleshooting complexo",
        "Especificação de componentes",
      ],
    },
    treinamentos: {
      name: "Treinamentos Técnicos",
      title: "Treinamentos Técnicos em Hidráulica Industrial",
      description: "Capacite sua equipe com nossos treinamentos especializados em sistemas hidráulicos. Oferecemos cursos práticos e teóricos personalizados.",
      metaDescription: "Treinamentos técnicos em hidráulica industrial para operadores e manutenção. Capacitação prática e teórica para equipes industriais.",
      keywords: "treinamento hidráulica industrial, curso de hidráulica industrial, capacitação manutenção hidráulica, treinamento técnico industrial",
      benefits: [
        "Equipe mais qualificada",
        "Redução de erros operacionais",
        "Manutenção mais eficiente",
        "Conhecimento atualizado",
      ],
      applications: [
        "Operação de sistemas",
        "Manutenção básica",
        "Diagnóstico de falhas",
        "Segurança operacional",
      ],
    },
  };

  const currentService = service ? serviceData[service] : null;
  const breadcrumbs = currentService ? [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos/manutencao-preventiva" },
    { name: currentService.name, url: `/servicos/${service}` },
  ] : [];

  if (!currentService) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
            <Link to="/" className="text-primary hover:underline">
              Voltar para Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOEnhanced
        title={currentService.title}
        description={currentService.metaDescription}
        keywords={currentService.keywords}
        canonical={`/servicos/${service}`}
        structuredData={[
          createServiceSchema(currentService.title, currentService.description),
          createBreadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-8 uppercase tracking-wide">
                {currentService.title}
              </h1>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                {currentService.description}
              </p>
              <p className="text-lg leading-relaxed mb-12 text-muted-foreground">
                A HiComp atende indústrias em São Paulo, Grande São Paulo e outras regiões do Brasil com suporte técnico,
                manutenção programada e fornecimento de componentes para bombas, cilindros, válvulas e unidades hidráulicas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                    Benefícios
                  </h2>
                  <ul className="space-y-3">
                    {currentService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-xl" aria-hidden="true">+</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-8 shadow-md">
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                    Aplicações
                  </h2>
                  <ul className="space-y-3">
                    {currentService.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-xl" aria-hidden="true">•</span>
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-muted/40 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                  Soluções Relacionadas
                </h2>
                <nav aria-label="Serviços relacionados" className="grid gap-3 md:grid-cols-2">
                  <Link to="/manutencao-bombas-hidraulicas" className="text-primary hover:underline">
                    Manutenção de Bombas Hidráulicas em São Paulo
                  </Link>
                  <Link to="/cilindros-hidraulicos" className="text-primary hover:underline">
                    Cilindros Hidráulicos Industriais
                  </Link>
                  <Link to="/valvulas-hidraulicas" className="text-primary hover:underline">
                    Válvulas Hidráulicas Industriais
                  </Link>
                  <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline">
                    Assistência Técnica Hidráulica Industrial
                  </Link>
                </nav>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                  Solicite um Orçamento
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Entre em contato para receber atendimento técnico, avaliação e prazo para execução deste serviço.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contato">
                    <button className="bg-background text-foreground hover:bg-background/90 font-semibold h-11 rounded-md px-8 transition-smooth uppercase tracking-wide">
                      Formulário de Contato
                    </button>
                  </Link>
                  <a
                    href="https://wa.me/5511992465636?text=Olá! Gostaria de um orçamento para o serviço de hidráulica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold h-11 rounded-md px-8 transition-colors"
                    aria-label="Solicitar orçamento pelo WhatsApp"
                  >
                    <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
