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
    { question: "O que é hidráulica industrial?", answer: "Hidráulica industrial é a tecnologia que utiliza fluidos pressurizados (óleo mineral, sintético ou biodegradável) para transmitir energia, força e movimento controlado em máquinas e equipamentos. Sistema hidráulico típico inclui: reservatório de óleo, bomba hidráulica (converte energia mecânica em hidráulica), válvulas (controlam direção/pressão/vazão), atuadores (cilindros e motores que realizam trabalho), filtros, mangueiras e instrumentação. Vantagens: alta densidade de potência, controle preciso, multiplicação de força, movimento suave e reversível." },
    { question: "Quais serviços de hidráulica industrial a HiComp oferece?", answer: "Oferecemos serviços completos: (1) Manutenção preventiva e preditiva com análise de óleo; (2) Reparo e recondicionamento de bombas, cilindros, válvulas e motores; (3) Fornecimento de componentes Parker, Rexroth, Vickers; (4) Projeto e fabricação de unidades hidráulicas sob medida; (5) Retrofit e modernização de sistemas antigos; (6) Diagnóstico técnico com medição de pressão/vazão/temperatura; (7) Treinamento de operadores e mantenedores; (8) Contratos de manutenção programada." },
    { question: "Qual a importância da manutenção hidráulica preventiva?", answer: "Manutenção preventiva programada reduz paradas não planejadas em 70%, aumenta vida útil de componentes em 40%, melhora eficiência energética em 15-25%, previne acidentes (ruptura de mangueiras, cilindros falhando), reduz custo total de propriedade em 50% comparado com manutenção apenas corretiva. Inclui: análise de óleo (detecta contaminação e desgaste precoce), inspeção de vedações, medição de pressão/vazão, troca de filtros, ajustes de válvulas. Custo típico: R$ 800-3.500/mês. Retorno: economiza R$ 10.000-50.000/ano em reparos emergenciais." },
    { question: "Vocês atendem indústrias fora de São Paulo?", answer: "Sim, atendemos todo o Brasil. Grande São Paulo e capital: atendimento presencial com técnico in loco. Interior de SP (Campinas, Sorocaba, Ribeirão Preto, Santos): técnico desloca conforme demanda. Outros estados (MG, RJ, PR, SC, RS, BA, GO): (1) Suporte remoto via vídeo-chamada; (2) Envio de peças/componentes com frete expresso; (3) Recebimento de equipamentos para reparo em SP; (4) Técnico desloca para projetos grandes (mínimo 3 dias). Exportamos componentes para América Latina via importadores parceiros." },
    { question: "Quanto tempo leva para reparar um sistema hidráulico?", answer: "Depende da complexidade: (1) Troca de mangueira/filtro/vedação simples: 2-4 horas in loco; (2) Reparo de cilindro (desmontagem, troca de vedações, remontagem): 1-2 dias; (3) Recondicionamento de bomba hidráulica: 3-7 dias úteis; (4) Reparo de válvula proporcional: 5-10 dias (inclui calibração eletrônica); (5) Retrofit completo de unidade hidráulica: 15-30 dias. Emergências: priorizamos e reduzimos prazos em 50% quando há estoque de peças. Grande SP: técnico chega em 4-8 horas para diagnóstico inicial." },
    { question: "Quanto custa uma unidade hidráulica completa?", answer: "Varia conforme potência, pressão e controle: (1) Micro unidade (5-10 L, até 5 HP, 100-150 bar, manual): R$ 3.000-8.000; (2) Pequena (20-50 L, 7,5-15 HP, 150-210 bar, válvulas on/off): R$ 12.000-25.000; (3) Média (100-200 L, 20-40 HP, 210-280 bar, controle proporcional): R$ 35.000-80.000; (4) Grande (500+ L, 75-150 HP, sistema redundante, automação): R$ 120.000-350.000. Inclui: motor elétrico, bomba, reservatório, filtração, válvulas, manifold, instrumentação. Prazo fabricação: 15-45 dias." },
    { question: "Como dimensionar central hidráulica?", answer: "Processo de dimensionamento: (1) Defina força necessária nos cilindros (kN) e velocidade (mm/s); (2) Calcule vazão total: Q (L/min) = Área cilindro (cm²) × Velocidade (cm/s) × 0,06; (3) Adicione 20% de margem; (4) Defina pressão de trabalho (bar) conforme força e área; (5) Calcule potência do motor: P (kW) = (Q × p) / 600 × η; (6) Dimensione reservatório: 3-5× vazão da bomba em litros; (7) Especifique filtração (ISO 4406: 18/16/13 para sistemas industriais). A HiComp oferece dimensionamento técnico gratuito com análise de aplicação." },
    { question: "Óleo mineral vs sintético: qual usar?", answer: "Óleo mineral (ISO VG 46-68): mais econômico (R$ 15-25/L), adequado para aplicações gerais até 60°C, vida útil 2000-4000h. Recomendado para: prensas, cilindros, sistemas simples. Óleo sintético (PAO, éster): custo maior (R$ 40-80/L), opera -40°C a +90°C, vida útil 8000-12000h, melhor proteção contra desgaste e oxidação. Recomendado para: sistemas de alta pressão (>250 bar), ambiente agressivo, ciclos intensivos, redução de manutenção. Biodegradável (éster vegetal): R$ 60-120/L, para aplicações eco-sensíveis (florestas, agricultura). ROI do sintético: compensa após 2 anos em sistemas que operam >4000h/ano." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Hidráulica Industrial em SP | Projetos, Manutenção e Retrofit | HiComp"
        description="Soluções completas em hidráulica industrial: projetos sob medida, retrofit, manutenção preventiva em SP. Parker, Rexroth, Vickers. 25 anos ☎ (11) 2619-5457"
        keywords="hidráulica industrial, hidráulica industrial São Paulo, empresa de hidráulica industrial, manutenção hidráulica industrial, assistência hidráulica SP, projeto de unidade hidráulica, retrofit hidráulico, sistema hidráulico vs pneumático"
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

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quando Você Precisa de Soluções em Hidráulica Industrial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reconhecer os sinais de que seu sistema hidráulico necessita intervenção profissional pode
                prevenir paradas custosas e acidentes. Situações que exigem atenção especializada:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Problemas Operacionais Críticos</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Sistema perdendo pressão progressivamente</li>
                    <li>• Óleo hidráulico aquecendo acima de 60°C</li>
                    <li>• Vazamentos múltiplos em conexões e componentes</li>
                    <li>• Ruídos de cavitação ou vibrações anormais</li>
                    <li>• Cilindros não seguram carga ou se movem sozinhos</li>
                    <li>• Consumo de energia elétrica acima do normal</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Projetos e Modernizações</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Expansão da linha de produção</li>
                    <li>• Retrofit de máquinas antigas</li>
                    <li>• Automação de processos manuais</li>
                    <li>• Substituição de sistemas pneumáticos por hidráulicos</li>
                    <li>• Adequação a novas normas de segurança</li>
                    <li>• Redução de consumo energético do sistema</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Indústrias de grande porte</strong> frequentemente enfrentam desafios com sistemas
                hidráulicos obsoletos projetados há 20-30 anos. Esses sistemas consomem 30-50% mais energia
                que tecnologias modernas e têm taxas de falha 3-4× maiores. Modernizar com bombas de deslocamento
                variável, válvulas proporcionais e controles eletrônicos pode reduzir custos operacionais em
                R$ 50.000-200.000/ano em grandes plantas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No setor de <strong>manufatura automotiva</strong>, prensas e linhas de estamparia exigem
                sistemas hidráulicos de alta precisão e repetibilidade. Qualquer oscilação de pressão afeta
                dimensões das peças e gera refugo. Na <strong>indústria alimentícia</strong>, sistemas
                hidráulicos devem usar fluidos atóxicos (H1) e ter proteção contra contaminação — a HiComp
                especifica componentes certificados para ambientes sanitários.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">ROI da Modernização Hidráulica</h3>
                <p className="text-sm text-muted-foreground">
                  Investir em modernização de sistemas hidráulicos retorna em 18-36 meses através de: (1) Redução
                  de 25-40% no consumo de energia elétrica com bombas de velocidade variável; (2) Diminuição de
                  60-80% em vazamentos de óleo (menos desperdício e impacto ambiental); (3) Aumento de 50-70%
                  na confiabilidade com componentes modernos; (4) Redução de 40% em custos de manutenção com
                  sistemas modulares. Caso real: cliente siderúrgico economizou R$ 120.000/ano após retrofit
                  de 4 unidades hidráulicas (investimento: R$ 180.000, payback: 18 meses).
                </p>
              </div>
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

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Processo de Projeto de Sistemas Hidráulicos Sob Medida
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp desenvolve soluções hidráulicas customizadas seguindo metodologia de engenharia estruturada:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Levantamento de Requisitos e Especificação</h3>
                    <p className="text-sm text-muted-foreground">Entrevista técnica para entender: forças necessárias, velocidades de trabalho, ciclo de operação, ambiente (temperatura, umidade, vibração), espaço disponível, alimentação elétrica, nível de automação desejado. Definimos: pressão nominal, vazão total, potência instalada, tipo de controle.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Projeto Hidráulico e Seleção de Componentes</h3>
                    <p className="text-sm text-muted-foreground">Elaboramos circuito hidráulico completo (ISO 1219-1), calculamos perdas de carga, dimensionamos tubulações e mangueiras, selecionamos bomba (engrenagem/pistão/palhetas), válvulas (direcionais, pressão, vazão), filtração (ISO 4406), instrumentação (manômetros, sensores). Fornecemos memorial de cálculo justificando cada escolha.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Orçamento e Prazo de Fabricação</h3>
                    <p className="text-sm text-muted-foreground">Orçamento detalhado com especificação de todos os componentes (marcas, modelos, quantidades), mão de obra de montagem, testes de aceitação e startup. Prazo típico: 20-45 dias para unidades customizadas. Aprovação do cliente antes de iniciar fabricação.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fabricação, Testes e Comissionamento</h3>
                    <p className="text-sm text-muted-foreground">Fabricamos reservatório, montamos manifolds, instalamos componentes, realizamos testes de estanqueidade e funcionamento em bancada. No cliente: instalamos unidade, conectamos ao sistema, realizamos startup, ajustamos pressões, treinamos operadores. Entregamos desenhos as-built e manual de operação/manutenção.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Sistema Hidráulico vs Pneumático: Quando Usar Cada Um?
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-sm font-semibold">Característica</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Hidráulico</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Pneumático</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-border p-3 font-medium">Força disponível</td>
                      <td className="border border-border p-3 text-muted-foreground">Muito alta (50-500 kN)</td>
                      <td className="border border-border p-3 text-muted-foreground">Baixa-média (1-10 kN)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Controle de velocidade</td>
                      <td className="border border-border p-3 text-muted-foreground">Preciso e constante</td>
                      <td className="border border-border p-3 text-muted-foreground">Difícil (ar compressível)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Custo inicial</td>
                      <td className="border border-border p-3 text-muted-foreground">Alto (R$ 15k-200k)</td>
                      <td className="border border-border p-3 text-muted-foreground">Baixo (R$ 3k-30k)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Custo operacional</td>
                      <td className="border border-border p-3 text-muted-foreground">Baixo (eficiência 80-90%)</td>
                      <td className="border border-border p-3 text-muted-foreground">Alto (eficiência 10-30%)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Aplicações ideais</td>
                      <td className="border border-border p-3 text-muted-foreground">Prensas, injetoras, grandes forças</td>
                      <td className="border border-border p-3 text-muted-foreground">Automação leve, pick-and-place</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Decisão de projeto:</strong> Use hidráulica quando precisar de forças >5 kN, controle
                preciso de velocidade, paradas em qualquer posição, ou ciclos intensivos. Use pneumática para
                movimentos rápidos de pequena força, ambiente limpo (indústria alimentícia, farmacêutica),
                ou quando simplicidade é mais importante que eficiência. Para aplicações híbridas, sistemas
                hidropneumáticos combinam vantagens de ambos.
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
              <h2 className="text-2xl font-bold mb-4">Modernize Seu Sistema Hidráulico e Reduza Custos!</h2>
              <p className="text-primary-foreground/90 mb-6">
                Diagnóstico técnico gratuito. Projetos sob medida, retrofit e manutenção preventiva. 25 anos de experiência em SP e Brasil. Economize até 40% em energia.
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
