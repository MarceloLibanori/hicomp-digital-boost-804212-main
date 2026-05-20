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
    { question: "Vocês atendem em qual região de SP?", answer: "Atendemos presencialmente toda a Grande São Paulo: capital, Guarulhos, Osasco, ABC Paulista (Santo André, São Bernardo, São Caetano), Campinas, Sorocaba, Jundiaí e região metropolitana. Para interior de SP e outros estados (MG, RJ, PR, SC, RS), oferecemos suporte remoto e recebemos equipamentos para reparo em nossa oficina na Vila Maria Alta. Urgências em SP: atendimento no mesmo dia." },
    { question: "Quanto custa visita técnica industrial?", answer: "Para diagnóstico e inspeção inicial na Grande São Paulo: R$ 300-500 (revertido em crédito se contratar o serviço). Emergências fora do horário comercial ou fins de semana: acréscimo de 50-100%. Para contratos de manutenção preventiva, visitas programadas são incluídas sem custo adicional. Orçamento detalhado após diagnóstico. Deslocamentos acima de 100km: consultar." },
    { question: "Fazem manutenção preventiva programada?", answer: "Sim, oferecemos contratos mensais, trimestrais ou semestrais de manutenção preventiva. Incluem: visitas técnicas agendadas, análise de óleo hidráulico (ISO 4406), inspeção de bombas/válvulas/cilindros, medição de pressão e vazão, troca preventiva de filtros e vedações, relatórios técnicos com fotos e recomendações. Reduz paradas em até 70% e aumenta vida útil dos componentes em 40%. Planos a partir de R$ 800/mês." },
    { question: "Qual o tempo de resposta para emergência?", answer: "Grande São Paulo: atendimento emergencial em até 4-8 horas para paradas críticas de linha, 24 horas para urgências não críticas. Trabalhamos em regime 24/7 para clientes com contrato. Interior de SP: 24-48 horas. Outros estados: suporte remoto imediato + envio de técnico se necessário (48-72h). Priorização por ordem de gravidade e impacto produtivo. Contate (11) 99246-5636 para emergências." },
    { question: "Atendem fins de semana e feriados?", answer: "Sim, para clientes com contrato de manutenção ou emergências de parada de linha. Atendimento fora do horário comercial (seg-sex 8h-18h) tem acréscimo de 50% (sábados) ou 100% (domingos/feriados). Para indústrias com operação contínua (24/7), oferecemos contratos específicos com cobertura integral. Emergências: ligue (11) 99246-5636 a qualquer hora." },
    { question: "Oferecem contrato de manutenção mensal?", answer: "Sim, contratos flexíveis conforme necessidade: (1) Básico - 1 visita/mês, análise visual, ajustes básicos - R$ 800-1.500/mês; (2) Intermediário - 2 visitas/mês, análise de óleo trimestral, relatórios técnicos - R$ 1.800-3.500/mês; (3) Premium - visitas semanais, análise de óleo mensal, atendimento emergencial 24/7 incluso, peças com desconto - R$ 4.000-8.000/mês. Valores variam conforme porte da indústria e número de equipamentos." },
    { question: "Quais equipamentos hidráulicos vocês atendem?", answer: "Atendemos todos os equipamentos hidráulicos industriais: bombas (engrenagem, pistão, palhetas), cilindros (simples/dupla ação, telescópicos), válvulas (direcionais, proporcionais, pressão, vazão), motores hidráulicos, unidades hidráulicas, prensas, injetoras, guindastes, plataformas, sistemas móbiles (retroescavadeiras, pás carregadeiras). Marcas: Parker, Rexroth, Vickers, Denison, Eaton, Casappa, HDA e todas as demais." },
    { question: "Fazem análise de óleo hidráulico?", answer: "Sim, realizamos análise de óleo in loco com kit portátil (contaminação por partículas, água, viscosidade) e enviamos amostras para laboratório certificado para análise completa (ISO 4406, espectroscopia de desgaste, TAN, TBN). Detectamos: degradação do óleo, contaminação por água/partículas, presença de metais de desgaste, saturação de aditivos. Laudo em 3-5 dias úteis. Análise básica: R$ 150. Análise completa: R$ 300-500. Essencial para manutenção preditiva." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Assistência Técnica Hidráulica 24h em SP | Atendimento Emergencial"
        description="Assistência técnica hidráulica industrial 24h em SP. Diagnóstico em 4h, manutenção preventiva, contratos mensais. Atendimento emergencial ☎ (11) 99246-5636"
        keywords="assistência técnica hidráulica, assistência hidráulica industrial, manutenção hidráulica SP, reparo hidráulico industrial, empresa de hidráulica São Paulo, assistência técnica 24 horas, contrato de manutenção hidráulica, análise de óleo hidráulico"
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
                Quando Você Precisa de Assistência Técnica Hidráulica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reconhecer os sinais de que seu sistema hidráulico precisa de assistência técnica pode prevenir
                paradas custosas e acidentes. Sinais críticos que exigem atenção imediata:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Sintomas de Problemas Urgentes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Perda súbita de pressão no sistema</li>
                    <li>• Vazamentos visíveis de óleo nas conexões</li>
                    <li>• Superaquecimento do óleo (acima de 60°C)</li>
                    <li>• Ruídos anormais (cavitação, chiados, batidas)</li>
                    <li>• Cilindros que não seguram carga</li>
                    <li>• Movimentos erráticos ou lentos</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Indicadores de Manutenção Preventiva</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Óleo escuro ou com espuma</li>
                    <li>• Aumento no consumo de energia elétrica</li>
                    <li>• Filtros saturados com frequência</li>
                    <li>• Tempo de ciclo da máquina aumentado</li>
                    <li>• Vibração excessiva em bombas ou motores</li>
                    <li>• Mais de 2000 horas desde última manutenção</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Indústrias metalúrgicas</strong> que operam prensas de grande porte não podem tolerar
                falhas hidráulicas — uma parada na laminação custa R$ 50.000 a R$ 200.000 por dia em perda de
                produção. Sistemas hidráulicos contaminados causam desgaste em cascata: partículas no óleo
                danificam bombas, válvulas e vedações simultaneamente, multiplicando o custo de reparo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No setor de <strong>mineração</strong>, equipamentos móveis trabalham em ambientes severos com
                poeira, umidade e vibrações extremas. Filtros entupidos reduzem vazão e causam cavitação nas
                bombas. Na <strong>indústria de papel e celulose</strong>, máquinas de grande porte operam 24/7 —
                manutenção preventiva programada é essencial para evitar paradas não planejadas que afetam toda
                a cadeia produtiva.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Custo de Ignorar os Sinais</h3>
                <p className="text-sm text-muted-foreground">
                  Operar com óleo contaminado reduz a vida útil de bombas e válvulas em até 80%. Um filtro
                  saturado custa R$ 150-500 para trocar; uma bomba destruída por contaminação custa R$ 5.000-30.000
                  para substituir. Paradas não programadas custam 3-5x mais que manutenção preventiva: além do
                  reparo, há perda de produção, horas extras da equipe, logística de urgência para peças.
                  Estatística: 60% das falhas hidráulicas são causadas por manutenção inadequada, não por
                  desgaste natural.
                </p>
              </div>
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
                Como Funciona Nossa Assistência Técnica Industrial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seguimos um protocolo estruturado para diagnóstico, reparo e validação de sistemas hidráulicos:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Atendimento Inicial e Diagnóstico (2-4 horas)</h3>
                    <p className="text-sm text-muted-foreground">Técnico visita o local, coleta histórico de falhas, realiza inspeção visual completa, mede pressão/vazão/temperatura, coleta amostra de óleo para análise. Identifica componentes críticos e elabora diagnóstico preliminar com fotos e medições documentadas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Orçamento Detalhado (até 24h)</h3>
                    <p className="text-sm text-muted-foreground">Fornecemos orçamento completo com: componentes a substituir, peças necessárias com códigos originais, mão de obra, prazo de execução e condições de pagamento. Cliente aprova escopo antes de iniciarmos qualquer intervenção.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Execução do Reparo (1-5 dias)</h3>
                    <p className="text-sm text-muted-foreground">Desmontamos componentes defeituosos, limpamos sistema hidráulico, substituímos peças danificadas (bombas, válvulas, filtros, mangueiras), trocamos óleo se necessário, remontamos seguindo especificações do fabricante com torques corretos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Testes e Validação (2-4 horas)</h3>
                    <p className="text-sm text-muted-foreground">Religamos o sistema, purgamos ar das linhas, ajustamos pressões de trabalho, testamos todos os circuitos e movimentos, verificamos ausência de vazamentos, medimos temperatura de operação. Operamos a máquina em condições reais de carga.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Relatório Técnico e Follow-up</h3>
                    <p className="text-sm text-muted-foreground">Entregamos relatório completo com: diagnóstico inicial, serviços executados, peças substituídas, fotos antes/depois, parâmetros medidos (pressão, vazão, temperatura), recomendações de manutenção preventiva. Follow-up em 7-15 dias para confirmar funcionamento normal.</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Diferenciais da Assistência Técnica HiComp</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Técnicos certificados com 10+ anos de experiência em hidráulica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Van equipada com ferramentas e instrumentos de medição calibrados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Estoque de peças críticas para reparo imediato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Atendimento 24/7 para emergências com contrato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Garantia de 90 dias em peças e serviços executados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte técnico contínuo por WhatsApp e telefone</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Planos de Manutenção Preventiva | Comparativo
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-sm font-semibold">Serviço</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Básico</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Intermediário</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-border p-3 font-medium">Visitas técnicas/mês</td>
                      <td className="border border-border p-3 text-muted-foreground">1 visita</td>
                      <td className="border border-border p-3 text-muted-foreground">2 visitas</td>
                      <td className="border border-border p-3 text-muted-foreground">4 visitas (semanal)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Análise de óleo</td>
                      <td className="border border-border p-3 text-muted-foreground">Semestral</td>
                      <td className="border border-border p-3 text-muted-foreground">Trimestral</td>
                      <td className="border border-border p-3 text-muted-foreground">Mensal</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Relatórios técnicos</td>
                      <td className="border border-border p-3 text-muted-foreground">Básico (visual)</td>
                      <td className="border border-border p-3 text-muted-foreground">Completo (fotos, medições)</td>
                      <td className="border border-border p-3 text-muted-foreground">Avançado (trending, preditiva)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Atendimento emergencial</td>
                      <td className="border border-border p-3 text-muted-foreground">Horário comercial</td>
                      <td className="border border-border p-3 text-muted-foreground">24h (com acréscimo)</td>
                      <td className="border border-border p-3 text-muted-foreground">24/7 incluso</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Investimento mensal</td>
                      <td className="border border-border p-3 text-muted-foreground">R$ 800-1.500</td>
                      <td className="border border-border p-3 text-muted-foreground">R$ 1.800-3.500</td>
                      <td className="border border-border p-3 text-muted-foreground">R$ 4.000-8.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Retorno sobre investimento:</strong> Clientes com contrato de manutenção preventiva
                relatam redução de 70% em paradas não programadas, aumento de 40% na vida útil de componentes,
                e economia de 50% em custos de manutenção anual comparado com manutenção apenas corretiva.
                O plano se paga em 3-6 meses apenas com a redução de emergências e desperdício de óleo.
              </p>
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
              <h2 className="text-2xl font-bold mb-4">Parada de Linha? Atendimento Emergencial 24h!</h2>
              <p className="text-primary-foreground/90 mb-6">
                Diagnóstico em até 4 horas na Grande SP. Técnicos especializados com van equipada. Contratos de manutenção preventiva a partir de R$ 800/mês.
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
