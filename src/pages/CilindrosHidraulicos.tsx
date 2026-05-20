import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Settings, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CilindrosHidraulicos = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Cilindros Hidráulicos", url: "/cilindros-hidraulicos" },
  ];

  const serviceSchema = createServiceSchema(
    "Cilindros Hidráulicos Industriais",
    "Fornecimento, manutenção e reparo de cilindros hidráulicos industriais em São Paulo. Cilindros de simples e dupla ação, telescópicos e especiais para prensas, injetoras e máquinas industriais."
  );

  const faqItems = [
    { question: "Quanto custa fabricação de cilindro sob medida?", answer: "O custo de um cilindro sob medida varia conforme diâmetro do êmbolo, curso, pressão de trabalho e tipo de montagem. Cilindros de simples ação custam entre R$ 800 e R$ 3.500, enquanto cilindros de dupla ação para aplicações especiais podem variar de R$ 1.500 a R$ 15.000. A HiComp fornece orçamento detalhado sem compromisso em até 24 horas após receber as especificações técnicas." },
    { question: "Qual o prazo de entrega de cilindro hidráulico?", answer: "Cilindros padrão em estoque são enviados em até 24 horas após aprovação do pedido. Para cilindros sob medida, o prazo de fabricação é de 5 a 10 dias úteis, incluindo usinagem, cromagem da haste, montagem e testes. Em casos urgentes de parada de linha, priorizamos a produção para entrega em 3 a 5 dias úteis com acréscimo de urgência." },
    { question: "Como escolher diâmetro e curso do cilindro?", answer: "O diâmetro do cilindro é determinado pela força necessária e pela pressão de trabalho do sistema. Use a fórmula: Força (kN) = (Pressão × Área do êmbolo) / 100. O curso deve corresponder ao deslocamento linear desejado, acrescido de margem de segurança de 10-15%. A HiComp oferece consultoria técnica gratuita para dimensionamento correto." },
    { question: "Quando trocar vedação do cilindro?", answer: "Vedações devem ser trocadas preventivamente a cada 10.000 ciclos ou 12 meses de operação, o que ocorrer primeiro. Troca imediata é necessária quando há: vazamento externo visível, vazamento interno (perda de força), desgaste da haste cromada, ou operação em temperaturas extremas. A HiComp mantém kits de vedação Parker, Rexroth e Vickers em estoque." },
    { question: "Cilindro vazando: reforma ou troca?", answer: "A reforma é recomendada quando apenas vedações e guias estão desgastadas e a haste cromada pode ser recuperada por polimento. Troca total é necessária quando há: trincas no corpo, desgaste severo da camisa interna, empenamento da haste, ou danos no roscamento das tampas. A reforma custa 40-60% do valor de um cilindro novo e tem garantia de 6 meses." },
    { question: "Vocês fabricam cilindro para prensa industrial?", answer: "Sim, fabricamos cilindros especiais para prensas hidráulicas de até 500 toneladas. Trabalhamos com pressões de 50 a 350 bar, diâmetros de 40mm a 300mm, e cursos de até 3000mm. Cilindros para prensas incluem hastes cromadas temperadas, vedações de alta performance e montagem reforçada. Fornecemos certificado de testes de carga e estanqueidade." },
    { question: "Qual pressão máxima do cilindro?", answer: "Cilindros hidráulicos industriais operam tipicamente entre 100 e 250 bar. Cilindros Parker e Rexroth suportam até 350 bar em aplicações especiais. A pressão máxima depende da construção (solda vs. tubo trefilado), diâmetro, e fator de segurança. Operar acima da pressão nominal danifica vedações e pode causar ruptura. Consulte sempre a placa de identificação do cilindro." },
    { question: "Cilindro original vs compatível: qual escolher?", answer: "Cilindros originais Parker, Rexroth e Vickers garantem especificações exatas e suporte técnico do fabricante, mas custam 40-80% mais. Cilindros compatíveis de qualidade (como os fabricados pela HiComp) oferecem desempenho equivalente com economia significativa, desde que fabricados conforme normas ISO 6020 e ISO 6022. Para aplicações críticas, recomendamos originais; para aplicações gerais, compatíveis são excelente custo-benefício." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Cilindros Hidráulicos em SP | Fabricação Sob Medida | Parker, Rexroth"
        description="Cilindros hidráulicos sob medida e padrão em SP. Fabricação, reparo e venda. Parker, Rexroth, Vickers. Garantia 6 meses. Orçamento 24h ☎ (11) 2619-5457"
        keywords="cilindro hidráulico, cilindro hidráulico industrial, conserto de cilindro hidráulico, cilindro hidráulico para prensa, cilindro dupla ação parker, fabricação de cilindro sob medida, vedação de cilindro rexroth, reforma de cilindro industrial"
        canonical="/cilindros-hidraulicos"
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
                <li className="text-primary-foreground font-medium">Cilindros Hidráulicos</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Cilindros Hidráulicos Industriais em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              Fornecimento, manutenção e reparo de cilindros hidráulicos para indústrias em São Paulo e todo o Brasil. 
              Cilindros de simples e dupla ação, telescópicos e especiais sob medida.
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
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                O que São Cilindros Hidráulicos e Para que Servem?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O <strong>cilindro hidráulico</strong> é um atuador mecânico que converte energia hidráulica em 
                força linear e movimento. É um dos componentes mais utilizados em máquinas industriais, equipamentos 
                de construção civil, prensas, injetoras de plástico, guindastes e sistemas de automação. 
                Sem cilindros hidráulicos em perfeito funcionamento, a operação industrial fica comprometida.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp atua há mais de 25 anos no mercado de <strong>componentes hidráulicos em São Paulo</strong>, 
                oferecendo cilindros novos, recondicionados e sob medida para atender as necessidades específicas 
                de cada cliente. Trabalhamos com cilindros das marcas Parker, Rexroth, Vickers e outras referências 
                do mercado industrial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa localização estratégica na Vila Maria Alta, em São Paulo, permite atendimento rápido para 
                indústrias na capital, Grande São Paulo, ABC Paulista, Guarulhos, Campinas, Sorocaba e todo o 
                interior do estado. Para outros estados, realizamos envio com embalagem industrial segura.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quando Você Precisa de Cilindros Hidráulicos Novos ou Recondicionados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Identificar o momento certo para substituir ou recondicionar um cilindro hidráulico evita acidentes
                e paradas não programadas. Sintomas comuns que indicam necessidade de ação:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Sinais de Falha Iminente</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Vazamento de óleo pelo retentor da haste</li>
                    <li>• Perda gradual de força ou velocidade</li>
                    <li>• Haste cromada riscada, corroída ou descascando</li>
                    <li>• Movimento irregular (stick-slip) do pistão</li>
                    <li>• Ruídos metálicos durante operação</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Situações que Exigem Substituição</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Vazamento interno (haste não segura carga)</li>
                    <li>• Deformação da haste por impacto ou sobrecarga</li>
                    <li>• Trincas no corpo do cilindro</li>
                    <li>• Superaquecimento constante do cilindro</li>
                    <li>• Roscas das tampas espanadas</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Indústrias de manufatura</strong> que operam prensas, dobradeiras e guilhotinas dependem
                de cilindros com força precisa e repetível. Um cilindro com vazamento interno reduz a força
                disponível e compromete a qualidade das peças conformadas. Na <strong>construção civil</strong>,
                equipamentos como guindastes e plataformas elevatórias exigem cilindros em perfeito estado para
                segurança dos operadores — vazamentos ou perda de força podem causar acidentes graves.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No setor de <strong>siderurgia</strong>, cilindros de grandes diâmetros operam sob cargas extremas
                em prensas de milhares de toneladas. Falhas nesses cilindros resultam em paradas custosas e riscos
                operacionais. Já na <strong>indústria de plásticos</strong>, cilindros de injetoras devem manter
                velocidade e pressão consistentes para garantir a qualidade das peças moldadas — vazamentos internos
                afetam diretamente o tempo de ciclo e a produtividade.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Riscos de Operar com Cilindro Defeituoso</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Um cilindro com vazamento interno consome mais energia, gera calor excessivo e danifica o óleo
                  hidráulico. Operar com haste danificada destrói vedações rapidamente, aumentando o custo de
                  reparo em até 200%. Além disso, cilindros com força reduzida podem causar acidentes em
                  aplicações de elevação, onde a carga pode cair se o cilindro não suportar o peso.
                </p>
                <p className="text-sm text-muted-foreground">
                  Tempo de parada: uma prensa industrial parada custa em média R$ 3.000 a R$ 15.000 por dia em
                  perda de produção. Trocar vedações preventivamente custa R$ 300 a R$ 1.500, enquanto um
                  cilindro novo pode custar R$ 3.000 a R$ 30.000 dependendo do tamanho.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Cilindros Hidráulicos Disponíveis
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Cilindro de Simples Ação", desc: "Ideal para aplicações onde a força é necessária em apenas uma direção. Utilizado em prensas, macacos hidráulicos e sistemas de fixação industrial." },
                  { title: "Cilindro de Dupla Ação", desc: "O mais utilizado na indústria. Permite movimento controlado em ambas as direções, sendo essencial em máquinas CNC, injetoras e linhas de produção automatizadas." },
                  { title: "Cilindro Telescópico", desc: "Projetado para aplicações que exigem grande curso de trabalho em espaços reduzidos. Comum em caminhões basculantes, plataformas elevatórias e equipamentos de mineração." },
                  { title: "Cilindro Especial Sob Medida", desc: "Fabricados conforme projeto e especificações técnicas do cliente. A HiComp projeta e fabrica cilindros para aplicações específicas que exigem dimensões ou características especiais." },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Aplicações Industriais dos Cilindros Hidráulicos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os cilindros hidráulicos são peças fundamentais em diversos setores da indústria brasileira. 
                Na <strong>siderurgia</strong>, atuam em laminadores e prensas de grande porte. Na <strong>mineração</strong>, 
                equipam escavadeiras, carregadeiras e britadores. No <strong>agronegócio</strong>, estão presentes em 
                colheitadeiras, tratores e implementos agrícolas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A indústria de <strong>construção civil</strong> utiliza cilindros em guindastes, retroescavadeiras 
                e plataformas. Já o setor de <strong>plásticos e borrachas</strong> depende de cilindros para injetoras 
                e extrusoras. Em todos esses segmentos, a HiComp fornece cilindros hidráulicos com qualidade 
                e assistência técnica completa em São Paulo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Manutenção e Reparo de Cilindros Hidráulicos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O <strong>reparo de cilindros hidráulicos</strong> é um serviço essencial para manter a produtividade 
                industrial. A HiComp realiza retífica de camisas, cromagem de hastes, substituição de vedações, 
                reparo de êmbolos e testes de estanqueidade. Cada cilindro reparado passa por teste de bancada 
                para garantir o funcionamento dentro das especificações originais.
              </p>
              <ul className="space-y-3">
                {[
                  "Retífica e brunimento de camisas",
                  "Cromagem e polimento de hastes",
                  "Substituição de kits de vedação",
                  "Reparo e substituição de êmbolos e pistões",
                  "Teste de estanqueidade e pressão",
                  "Laudo técnico completo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Processo de Fabricação e Recondicionamento de Cilindros
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp utiliza processos certificados para fabricação e recondicionamento de cilindros hidráulicos,
                garantindo qualidade e durabilidade:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Projeto e Dimensionamento (1-2 dias)</h3>
                    <p className="text-sm text-muted-foreground">Para cilindros sob medida, elaboramos projeto técnico com cálculo de força, pressão de trabalho, seleção de materiais e definição de tolerâncias dimensionais conforme normas ISO 6020 e ISO 6022.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Usinagem e Preparação (2-4 dias)</h3>
                    <p className="text-sm text-muted-foreground">Corpo do cilindro é usinado em tubo sem costura trefilado (NBR 11133), hastes são torneadas e preparadas para cromagem, tampas e êmbolos são usinados com tolerâncias de ±0,05mm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cromagem e Brunimento (1-2 dias)</h3>
                    <p className="text-sm text-muted-foreground">Hastes recebem cromagem dura (dureza mínima 900 HV), polimento espelhado (Ra 0,2 μm) e tratamento anticorrosivo. Internamente, realizamos brunimento para acabamento superficial ideal às vedações.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Montagem e Testes (1 dia)</h3>
                    <p className="text-sm text-muted-foreground">Montamos com vedações Parker ou Rexroth, aplicando torques especificados. Realizamos testes de estanqueidade a 1,5x a pressão nominal por 10 minutos, testes de força e verificação de alinhamento.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Marcas e Modelos de Cilindros | Comparativo Técnico
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-sm font-semibold">Característica</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Parker</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Rexroth</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Vickers</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-border p-3 font-medium">Pressão máxima</td>
                      <td className="border border-border p-3 text-muted-foreground">250-350 bar</td>
                      <td className="border border-border p-3 text-muted-foreground">250-400 bar</td>
                      <td className="border border-border p-3 text-muted-foreground">210-280 bar</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Vedações</td>
                      <td className="border border-border p-3 text-muted-foreground">Polypack®, NBR</td>
                      <td className="border border-border p-3 text-muted-foreground">Turcon®, FKM</td>
                      <td className="border border-border p-3 text-muted-foreground">PU, NBR</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Disponibilidade peças</td>
                      <td className="border border-border p-3 text-muted-foreground">Imediata (estoque SP)</td>
                      <td className="border border-border p-3 text-muted-foreground">2-7 dias úteis</td>
                      <td className="border border-border p-3 text-muted-foreground">5-10 dias úteis</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Custo relativo</td>
                      <td className="border border-border p-3 text-muted-foreground">Médio-Alto</td>
                      <td className="border border-border p-3 text-muted-foreground">Alto</td>
                      <td className="border border-border p-3 text-muted-foreground">Médio</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Garantia HiComp</td>
                      <td className="border border-border p-3 text-muted-foreground">6 meses</td>
                      <td className="border border-border p-3 text-muted-foreground">6 meses</td>
                      <td className="border border-border p-3 text-muted-foreground">6 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Recomendações de uso:</strong> Parker oferece o melhor equilíbrio custo-benefício para
                aplicações industriais gerais. Rexroth é ideal para alta pressão e ciclos intensivos (>1M ciclos).
                Vickers tem excelente custo em aplicações de médio porte. A HiComp também fabrica cilindros
                compatíveis com padrões ISO, oferecendo economia de até 40% com desempenho equivalente para
                aplicações não críticas.
              </p>
            </section>

            {/* Por que Escolher */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que Escolher a HiComp para Cilindros Hidráulicos?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência em cilindros e componentes hidráulicos" },
                  { icon: CheckCircle, text: "Fabricação sob medida com laudo técnico e garantia de qualidade" },
                  { icon: Wrench, text: "Retífica, cromagem e recondicionamento completo de cilindros" },
                  { icon: MapPin, text: "Atendimento em São Paulo, Grande SP e envio para todo o Brasil" },
                  { icon: Settings, text: "Kits de vedação para cilindros de qualquer marca em estoque" },
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
                Perguntas Frequentes sobre Cilindros Hidráulicos
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
                <Link to="/valvulas-hidraulicas" className="text-primary hover:underline text-sm">Válvulas Hidráulicas</Link>
                <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">Assistência Técnica Industrial</Link>
                <Link to="/hidraulica-industrial" className="text-primary hover:underline text-sm">Hidráulica Industrial</Link>
                <Link to="/informacoes/cilindro-hidraulico-industrial" className="text-primary hover:underline text-sm">Cilindro Hidráulico Industrial</Link>
                <Link to="/informacoes/conserto-cilindro-hidraulico" className="text-primary hover:underline text-sm">Conserto de Cilindro Hidráulico</Link>
              </div>
            </section>

            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Cilindro Sob Medida ou Reparo Urgente?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Orçamento gratuito em 24 horas. Fabricação em 5-10 dias. Atendimento prioritário para paradas de linha em São Paulo e Brasil.
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

export default CilindrosHidraulicos;
