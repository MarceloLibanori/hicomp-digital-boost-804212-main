import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateLocalBusinessSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/seoSchemas";
import { Link } from "react-router-dom";

const Empresa = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateWebPageSchema(
        "Empresa de Hidráulica Industrial em São Paulo - HiComp",
        "Especialistas em manutenção de bombas hidráulicas Parker, Rexroth, Vickers. Mais de 15 anos de experiência em São Paulo.",
        "/empresa"
      ),
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Empresa", url: "/empresa" }
      ]),
      {
        "@type": "AboutPage",
        "name": "Sobre a HiComp Hidráulica",
        "url": "https://www.hicomp.com.br/empresa",
        "mainEntity": {
          "@id": "https://www.hicomp.com.br/#organization"
        }
      }
    ]
  };

  return (
    <>
      <SEOEnhanced
        title="Sobre a HiComp - 29 Anos em Hidráulica Industrial SP | Empresa"
        description="HiComp Hidráulica: 29 anos de experiência em manutenção de bombas Parker, Rexroth, Vickers. +15.000 equipamentos reparados. Garantia 1 ano. São Paulo e todo Brasil."
        keywords="empresa de hidráulica industrial, empresa hidráulica são paulo, peças hidráulicas são paulo, componentes hidráulicos são paulo, manutenção hidráulica SP, hidráulica industrial Vila Maria, história hicomp, sobre hicomp"
        canonical="/empresa"
        structuredData={aboutSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide text-center">
                Empresa de Hidráulica Industrial em São Paulo
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  A <strong className="text-foreground">HiComp Hidráulica</strong> é referência em
                  <strong className="text-foreground"> hidráulica industrial em São Paulo</strong>,
                  <strong className="text-foreground"> manutenção de bombas hidráulicas</strong> e
                  <strong className="text-foreground"> reparo de cilindros</strong>. Atendemos indústrias em todo o Brasil
                  com foco em suporte técnico, fornecimento de peças e manutenção especializada.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Nossa missão é fornecer soluções completas em <strong className="text-foreground">sistemas hidráulicos industriais</strong>,
                  desde a comercialização de <strong className="text-foreground">peças hidráulicas e componentes hidráulicos em São Paulo</strong>
                  até serviços especializados de
                  manutenção preventiva e corretiva.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Nossa História e Experiência
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  <strong className="text-foreground">Fundada em 1995</strong>, a HiComp acumula mais de <strong className="text-foreground">29 anos de experiência</strong> no fornecimento de soluções hidráulicas para a indústria brasileira. Nossa trajetória começou na <strong className="text-foreground">Zona Norte de São Paulo</strong>, atendendo inicialmente pequenas e médias indústrias da região metropolitana. Com o passar dos anos, expandimos nossa atuação para todo o território nacional, mantendo sempre o compromisso com qualidade técnica e atendimento especializado.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Ao longo de quase três décadas, acumulamos expertise em setores industriais críticos como <strong className="text-foreground">mineração, siderurgia, agronegócio, construção civil e manufatura</strong>. Nosso portfólio inclui desde o reparo de uma única bomba hidráulica até o projeto completo de unidades hidráulicas customizadas para linhas de produção automatizadas.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Principais Conquistas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Mais de <strong className="text-foreground">15.000 equipamentos</strong> reparados desde 1995</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Parceria técnica com <strong className="text-foreground">Parker Hannifin</strong>, <strong className="text-foreground">Bosch Rexroth</strong> e <strong className="text-foreground">Eaton Vickers</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Índice de satisfação superior a <strong className="text-foreground">95%</strong> em pesquisas com clientes industriais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Tempo médio de resposta de <strong className="text-foreground">24 horas</strong> para orçamentos técnicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Garantia de 1 ano</strong> em todos os reparos com certificação técnica</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Expertise Técnica e Certificações
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Nossa equipe técnica é formada por <strong className="text-foreground">engenheiros mecânicos</strong>, <strong className="text-foreground">técnicos especializados em hidráulica industrial</strong> e <strong className="text-foreground">projetistas com certificações internacionais</strong>. Investimos continuamente em capacitação técnica para acompanhar as inovações tecnológicas das principais marcas do setor.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-lg mb-3">Qualificações Técnicas</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Certificação em análise de falhas hidráulicas</li>
                      <li>• Treinamento Parker Hydraulics</li>
                      <li>• Especialização Rexroth Service</li>
                      <li>• Projeto de circuitos hidráulicos ISO 1219</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-lg mb-3">Equipamentos de Teste</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Bancada de teste até 350 bar</li>
                      <li>• Análise de óleo por espectrofotometria</li>
                      <li>• Teste de vazão e pressão calibrado</li>
                      <li>• Inspeção dimensional micrométrica</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-lg mb-3">Normas e Padrões</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• ISO 9001 (gestão de qualidade)</li>
                      <li>• ISO 4406 (limpeza de fluidos)</li>
                      <li>• ABNT NBR 8098 (cilindros)</li>
                      <li>• NR-12 (segurança em máquinas)</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Marcas que Trabalhamos
                </h2>
                
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Somos especialistas nas principais marcas do mercado mundial de hidráulica:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Parker Hannifin:</strong> Bombas, válvulas e cilindros
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Bosch Rexroth:</strong> Sistemas hidráulicos de alta performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Eaton Vickers:</strong> Bombas de pistão e palhetas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Denison Hydraulics:</strong> Válvulas e unidades hidráulicas
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Nossos Serviços
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Manutenção de Bombas</h3>
                    <p className="text-muted-foreground text-sm">
                      Reparo e reforma de bombas hidráulicas de pistão, engrenagem e palhetas.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Reparo de Cilindros</h3>
                    <p className="text-muted-foreground text-sm">
                      Conserto e fabricação de cilindros hidráulicos industriais sob medida.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Válvulas Hidráulicas</h3>
                    <p className="text-muted-foreground text-sm">
                      Manutenção de válvulas direcionais, proporcionais e de pressão.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Unidades Completas</h3>
                    <p className="text-muted-foreground text-sm">
                      Projeto, fabricação e manutenção de unidades hidráulicas.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Setores Industriais Atendidos
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  A HiComp atende diversos segmentos industriais com soluções hidráulicas específicas para cada aplicação:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Mineração e Siderurgia</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Cilindros e bombas para equipamentos de grande porte: britadores, escavadeiras, caminhões fora-de-estrada, laminadores e pontes rolantes. Atendimento em Minas Gerais, Pará e Mato Grosso.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Pressões até 420 bar • Fabricação sob medida • Suporte emergencial
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Agronegócio</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Manutenção de cilindros hidráulicos para colheitadeiras, pulverizadores, plantadeiras e implementos agrícolas. Forte presença em Goiás, Mato Grosso e Paraná.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Reposição rápida • Kits de vedação • Cromagem de hastes
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Manufatura e Plásticos</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Reparo de bombas e válvulas para injetoras de plástico, prensas hidráulicas, dobradeiras e máquinas-ferramenta CNC. Contratos de manutenção preventiva disponíveis.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Garantia de 1 ano • Diagnóstico gratuito • Urgência 24-48h
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Construção Civil</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Hidráulica para retroescavadeiras, guindastes, plataformas elevatórias, betoneiras e equipamentos de terraplenagem. Peças de reposição em estoque.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Parker • Rexroth • Vickers • Denison • Sauer Danfoss
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 uppercase tracking-wide">
                  Compromisso com Qualidade e Confiança
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Localização e Estrutura Física</h3>
                    <p className="text-muted-foreground text-sm">
                      Sede própria na Vila Maria Alta, São Paulo, com oficina equipada, estoque de peças e sala técnica para projetos customizados. Endereço comercial validado no Google Maps e órgãos reguladores.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Transparência e Documentação</h3>
                    <p className="text-muted-foreground text-sm">
                      Todo serviço acompanha nota fiscal, laudo técnico, certificado de garantia e rastreabilidade das peças aplicadas. Orçamentos detalhados com prazo e descrição técnica completa.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Atendimento Nacional</h3>
                    <p className="text-muted-foreground text-sm">
                      Enviamos peças hidráulicas para todos os 27 estados via transportadora com rastreamento. Também recebemos equipamentos de clientes de todo o Brasil para reparo em nossa oficina.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="font-bold text-xl mb-2">Parceria com Marcas Premium</h3>
                    <p className="text-muted-foreground text-sm">
                      Relacionamento técnico-comercial com Parker Hannifin, Bosch Rexroth, Eaton Vickers, Denison e outras marcas mundiais. Acesso a manuais técnicos e especificações originais.
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Depoimentos de Clientes Industriais</h3>
                  <div className="space-y-6">
                    <blockquote className="border-l-4 border-primary pl-4">
                      <p className="text-muted-foreground italic mb-2">
                        "A HiComp resolveu um problema crítico na nossa linha de injetoras que já tinha parado 3 vezes. Diagnosticaram uma falha que ninguém tinha visto e entregaram em 48 horas. Desde então fazemos manutenção preventiva com eles."
                      </p>
                      <cite className="text-sm text-foreground font-semibold">— Gerente de Manutenção, Indústria de Plásticos (SP)</cite>
                    </blockquote>
                    <blockquote className="border-l-4 border-primary pl-4">
                      <p className="text-muted-foreground italic mb-2">
                        "Precisávamos de um cilindro customizado para uma prensa hidráulica de 250 toneladas. A HiComp projetou, fabricou e instalou em 20 dias. Funcionamento impecável há 2 anos."
                      </p>
                      <cite className="text-sm text-foreground font-semibold">— Diretor Industrial, Metalúrgica (MG)</cite>
                    </blockquote>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-lg p-8 mt-12">
                  <h2 className="text-2xl font-bold mb-4">
                    Solicite um Orçamento Grátis
                  </h2>
                  <p className="mb-6 opacity-90">
                    Entre em contato com nossa equipe técnica para uma avaliação sem compromisso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+551126195457" 
                      className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-bold hover:bg-background/90 transition-colors"
                    >
                      ☎ (11) 2619-5457
                    </a>
                    <Link 
                      to="/contato"
                      className="inline-flex items-center justify-center gap-2 border-2 border-background text-background px-6 py-3 rounded-lg font-bold hover:bg-background/10 transition-colors"
                    >
                      Contato Online
                    </Link>
                  </div>
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

export default Empresa;
