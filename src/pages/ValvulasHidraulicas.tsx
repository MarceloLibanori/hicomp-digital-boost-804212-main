import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Gauge, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ValvulasHidraulicas = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Válvulas Hidráulicas", url: "/valvulas-hidraulicas" },
  ];

  const serviceSchema = createServiceSchema(
    "Válvulas Hidráulicas Industriais",
    "Fornecimento e manutenção de válvulas hidráulicas industriais em São Paulo. Válvulas direcionais, de pressão, de vazão, proporcionais e cartuchos. Parker, Rexroth, Vickers, Denison."
  );

  const faqItems = [
    { question: "Qual a diferença entre válvula direcional e proporcional?", answer: "Válvulas direcionais operam em posições fixas (centro, A, B) controlando apenas a direção do fluxo, como ligar/desligar. Válvulas proporcionais controlam vazão e pressão de forma contínua e proporcional ao sinal elétrico (0-10V ou 4-20mA), permitindo controle preciso de velocidade e força. São usadas em máquinas CNC, injetoras e prensas servo-controladas onde precisão é crítica. Custo: direcionais custam R$ 500-3.000, proporcionais R$ 3.000-25.000." },
    { question: "Quanto custa válvula Parker, Rexroth ou Vickers?", answer: "Válvulas direcionais Parker D1VW custam R$ 800-2.500. Rexroth 4WE6 custam R$ 1.200-3.000. Vickers DG4V custam R$ 900-2.200. Válvulas proporcionais Parker D1FP custam R$ 8.000-18.000. Válvulas de alívio custam R$ 400-1.800. Preços variam conforme vazão, pressão nominal, tipo de acionamento (solenóide, manual, hidráulico) e acessórios. A HiComp fornece orçamento detalhado em 24 horas." },
    { question: "Como regular pressão de válvula de alívio?", answer: "Use manômetro calibrado na saída da bomba. Gire o parafuso de ajuste no sentido horário para aumentar pressão, anti-horário para reduzir. Aumente gradualmente em incrementos de 10 bar. Nunca exceda a pressão nominal do sistema. Válvulas de alívio devem ser ajustadas 10-15% acima da pressão de trabalho normal para proteção. Após ajuste, aplique trava mecânica ou lacre para evitar alterações não autorizadas." },
    { question: "Válvula hidráulica travando: o que fazer?", answer: "Travamento geralmente é causado por contaminação (partículas no carretel), falta de lubrificação, ou componentes desgastados. Primeiro, verifique filtro hidráulico e qualidade do óleo. Se contaminado, drene, limpe reservatório e troque óleo. Para válvulas proporcionais, verifique sinais elétricos e conectores. Se o problema persistir, desmonte a válvula, limpe com solvente adequado, substitua vedações e teste em bancada antes de reinstalar." },
    { question: "Prazo de entrega de válvula importada?", answer: "Válvulas Parker e Vickers em estoque: entrega em 24-48 horas. Rexroth série 4WE: 3-7 dias. Válvulas proporcionais sob encomenda: 15-30 dias. Servoválvulas especiais: 30-60 dias. A HiComp mantém estoque de modelos mais comuns (4WE6, D1VW, DG4V) para entrega imediata. Para modelos específicos, consulte disponibilidade antes de parar a máquina para manutenção." },
    { question: "Vocês reparam válvulas proporcionais?", answer: "Sim, realizamos reparo de válvulas proporcionais Parker, Rexroth e Moog. Serviço inclui: limpeza ultrassônica do carretel, substituição de vedações, calibração do amplificador eletrônico, testes de linearidade e histerese. Equipamentos de teste simulam sinais de 0-10V e medem resposta em vazão e pressão. Prazo: 5-10 dias úteis. Custo do reparo: 40-60% do valor de uma válvula nova. Garantia de 90 dias." },
    { question: "Como escolher válvula para meu sistema?", answer: "Defina: (1) Vazão necessária em L/min - escolha válvula com vazão 20% acima; (2) Pressão de trabalho - válvula deve suportar 1,3x a pressão máxima; (3) Tipo de controle - direcional para on/off, proporcional para controle preciso; (4) Acionamento - manual, solenóide 12/24VDC, 110/220VAC; (5) Configuração - 2/2, 3/2, 4/2, 4/3 vias conforme o circuito. A HiComp oferece consultoria técnica gratuita com análise do circuito hidráulico." },
    { question: "Válvula original vs remanufaturada?", answer: "Válvulas originais novas garantem especificações de fábrica e vida útil completa (2-5 anos ou 10M ciclos), mas custam 100% do valor. Válvulas remanufaturadas por fabricante certificado custam 60-70% e têm garantia de 1 ano, ideais para backup ou retrofit. Válvulas usadas de terceiros (50% do valor) têm risco de falha precoce e não recomendamos para aplicações críticas. Para sistemas de segurança, use sempre originais novas." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Válvulas Hidráulicas em SP | Direcionais, Proporcionais | Parker, Rexroth"
        description="Válvulas direcionais, proporcionais e de pressão em SP. Parker, Rexroth, Vickers. Estoque local, entrega 24h. Orçamento grátis ☎ (11) 2619-5457"
        keywords="válvula hidráulica, válvula direcional hidráulica, válvula de pressão, válvula proporcional, válvulas hidráulicas SP, válvula Parker, válvula Rexroth, válvula direcional 4/3 vias, válvula proporcional parker, válvula de alívio regulável"
        canonical="/valvulas-hidraulicas"
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
                <li className="text-primary-foreground font-medium">Válvulas Hidráulicas</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Válvulas Hidráulicas Industriais em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              Fornecimento e manutenção de válvulas hidráulicas para indústrias. Válvulas direcionais, 
              proporcionais, de pressão e de vazão das marcas Parker, Rexroth e Vickers.
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
                Válvulas Hidráulicas: O Coração do Sistema Hidráulico
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As <strong>válvulas hidráulicas</strong> são componentes essenciais que controlam a direção, 
                a pressão e a vazão do fluido hidráulico dentro de um sistema. Sem válvulas funcionando corretamente, 
                é impossível controlar o movimento de cilindros, motores e outros atuadores hidráulicos. 
                A seleção e manutenção adequada das válvulas são fundamentais para a eficiência e segurança 
                de qualquer sistema hidráulico industrial.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na HiComp, comercializamos e realizamos manutenção em uma ampla linha de <strong>válvulas 
                hidráulicas industriais</strong> em São Paulo. Nossa equipe técnica possui expertise para 
                orientar a seleção correta de válvulas conforme a aplicação, pressão de trabalho, vazão 
                requerida e tipo de acionamento (manual, elétrico, hidráulico ou pneumático).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atendemos indústrias em toda a Grande São Paulo, incluindo Guarulhos, ABC Paulista, 
                Osasco, Campinas, Sorocaba e interior do estado. Para clientes em Minas Gerais, 
                Rio de Janeiro, Paraná, Santa Catarina e demais estados, realizamos envio com 
                garantia e suporte técnico remoto.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quando Você Precisa Substituir ou Reparar Válvulas Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Válvulas hidráulicas defeituosas comprometem todo o sistema. Sintomas comuns que indicam
                necessidade de substituição ou manutenção:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Sintomas de Válvula Defeituosa</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Vazamento externo nas conexões ou corpo</li>
                    <li>• Vazamento interno (perda de controle)</li>
                    <li>• Válvula travando ou não mudando de posição</li>
                    <li>• Ruídos de cavitação ou silvos</li>
                    <li>• Superaquecimento da válvula</li>
                    <li>• Solenóide queimado ou sem acionamento</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Impactos no Sistema</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Perda de pressão no circuito</li>
                    <li>• Movimentos lentos ou erráticos</li>
                    <li>• Impossibilidade de controlar direção</li>
                    <li>• Consumo excessivo de energia</li>
                    <li>• Aquecimento do óleo hidráulico</li>
                    <li>• Cilindros que não seguram carga</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Indústrias de usinagem</strong> com máquinas CNC dependem de válvulas proporcionais
                para controle preciso de velocidade e posicionamento — uma válvula com histerese excessiva
                afeta diretamente a precisão dimensional das peças. Na <strong>indústria de plásticos</strong>,
                válvulas que controlam injetoras devem responder em milissegundos para garantir qualidade de
                moldagem — travamentos causam peças defeituosas e desperdício de material.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em <strong>prensas hidráulicas</strong>, válvulas de alívio mal calibradas podem causar
                sobrepressão e danificar bombas, mangueiras e cilindros. Na <strong>construção civil</strong>,
                válvulas direcionais que controlam guindastes e plataformas devem ter resposta rápida e
                confiável para segurança dos operadores — falhas podem causar acidentes graves.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Consequências de Adiar a Substituição</h3>
                <p className="text-sm text-muted-foreground">
                  Uma válvula com vazamento interno gera calor excessivo, degrada o óleo hidráulico e reduz a
                  eficiência energética do sistema em até 30%. Válvulas travando causam movimentos bruscos que
                  danificam estruturas mecânicas. O custo de uma válvula direcional é de R$ 800-3.000, enquanto
                  o custo de uma parada de linha pode chegar a R$ 15.000/dia. Manutenção preventiva a cada
                  10.000 horas de operação evita 80% das falhas não programadas.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Válvulas Hidráulicas que Fornecemos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Válvulas Direcionais", desc: "Controlam a direção do fluxo hidráulico. Disponíveis em configurações 2/2, 3/2, 4/2, 4/3 e 6/2 vias, com acionamento manual, elétrico (solenóide) ou hidráulico. Essenciais para o controle de cilindros e motores." },
                  { title: "Válvulas de Pressão", desc: "Incluem válvulas de alívio, sequência e redutora de pressão. Protegem o sistema contra sobrepressão e permitem operação segura em diferentes faixas de pressão de trabalho." },
                  { title: "Válvulas de Vazão", desc: "Regulam o volume de fluido que passa pelo sistema, controlando a velocidade dos atuadores. Disponíveis em modelos com compensação de pressão para controle preciso independente da carga." },
                  { title: "Válvulas Proporcionais e Servo", desc: "Oferecem controle contínuo e preciso de pressão, vazão e direção. Ideais para aplicações que exigem alta precisão de posicionamento, como máquinas CNC, injetoras e prensas servo-controladas." },
                ].map((item) => (
                  <div key={item.title} className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Marcas de Válvulas Hidráulicas Disponíveis
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp é distribuidora e fornecedora de válvulas hidráulicas das principais marcas mundiais, 
                reconhecidas pela qualidade e confiabilidade em aplicações industriais exigentes:
              </p>
              <ul className="space-y-3">
                {[
                  "Parker Hannifin – Linha completa de válvulas direcionais, proporcionais e cartuchos",
                  "Bosch Rexroth – Válvulas de alta performance para sistemas industriais e móveis",
                  "Vickers (Eaton) – Válvulas direcionais e de pressão com tradição no mercado brasileiro",
                  "Denison – Válvulas robustas para aplicações de alta pressão e grande vazão",
                  "HDA – Válvulas e componentes hidráulicos para diversas aplicações industriais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Como Funciona a Seleção e Fornecimento de Válvulas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp segue um processo estruturado para garantir que você receba a válvula certa:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Análise Técnica e Especificação</h3>
                    <p className="text-sm text-muted-foreground">Analisamos o circuito hidráulico, definimos vazão necessária (L/min), pressão de trabalho (bar), tipo de controle (direcional, proporcional), acionamento (manual, elétrico) e configuração de vias (2/2, 3/2, 4/3).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Seleção de Marca e Modelo</h3>
                    <p className="text-sm text-muted-foreground">Recomendamos a melhor opção entre Parker, Rexroth, Vickers ou equivalentes com base em disponibilidade, custo-benefício e aplicação específica. Fornecemos datasheet técnico completo para aprovação.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Orçamento e Prazo</h3>
                    <p className="text-sm text-muted-foreground">Orçamento detalhado em até 24 horas com preço, prazo de entrega e condições de pagamento. Válvulas em estoque são enviadas no mesmo dia para Grande SP, demais válvulas em 3-15 dias conforme fabricante.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Suporte na Instalação</h3>
                    <p className="text-sm text-muted-foreground">Fornecemos orientação técnica para instalação correta: torques de aperto, vedações recomendadas, ajustes de pressão e testes de funcionamento. Para instalações complexas, oferecemos serviço técnico in loco.</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Diferenciais HiComp no Fornecimento de Válvulas</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Estoque local de válvulas mais comuns para entrega imediata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consultoria técnica gratuita para seleção correta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Garantia de 12 meses em válvulas novas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte técnico pós-venda via WhatsApp e telefone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Emissão de nota fiscal e envio para todo o Brasil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Opções de pagamento flexíveis para empresas</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Comparativo: Parker vs Rexroth vs Vickers
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
                      <td className="border border-border p-3 font-medium">Válvula Direcional 4/3</td>
                      <td className="border border-border p-3 text-muted-foreground">D1VW, D3W (R$ 800-2.500)</td>
                      <td className="border border-border p-3 text-muted-foreground">4WE6, 4WE10 (R$ 1.200-3.000)</td>
                      <td className="border border-border p-3 text-muted-foreground">DG4V, DG5V (R$ 900-2.200)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Válvula Proporcional</td>
                      <td className="border border-border p-3 text-muted-foreground">D1FP, D1FV (R$ 8.000-18.000)</td>
                      <td className="border border-border p-3 text-muted-foreground">4WRPH, 4WRPE (R$ 10.000-22.000)</td>
                      <td className="border border-border p-3 text-muted-foreground">KDG, KCG (R$ 7.000-16.000)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Disponibilidade</td>
                      <td className="border border-border p-3 text-muted-foreground">Alta - Estoque SP</td>
                      <td className="border border-border p-3 text-muted-foreground">Média - 3-7 dias</td>
                      <td className="border border-border p-3 text-muted-foreground">Média - 5-10 dias</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Aplicações ideais</td>
                      <td className="border border-border p-3 text-muted-foreground">Geral, móvel, industrial</td>
                      <td className="border border-border p-3 text-muted-foreground">Alta pressão, precisão</td>
                      <td className="border border-border p-3 text-muted-foreground">Custo-benefício, retrofit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Recomendações de escolha:</strong> Parker oferece o melhor equilíbrio entre disponibilidade
                e custo para aplicações industriais gerais. Rexroth é preferível em sistemas de alta pressão
                (&gt;250 bar) e aplicações que exigem precisão extrema. Vickers é excelente escolha para retrofit
                de máquinas antigas e quando o fator determinante é custo. Todas as marcas têm qualidade
                comprovada e suporte técnico no Brasil.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Manutenção de Válvulas Hidráulicas em São Paulo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>manutenção de válvulas hidráulicas</strong> é crítica para prevenir falhas no sistema 
                hidráulico. Válvulas com desgaste ou contaminação podem causar perda de controle, 
                vazamentos internos, superaquecimento e até acidentes. A HiComp realiza inspeção, 
                limpeza ultrassônica, substituição de vedações, ajuste de pressão e testes completos 
                de funcionamento.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso laboratório em São Paulo conta com bancada de testes para simular condições reais 
                de operação, garantindo que cada válvula reparada volte a funcionar dentro das 
                especificações do fabricante. Oferecemos garantia em todos os serviços de manutenção.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes sobre Válvulas Hidráulicas
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
              <h2 className="text-2xl font-bold mb-4">Válvula Travando ou Vazando?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Orçamento em 24h. Entrega imediata de modelos em estoque em SP. Consultoria técnica gratuita para seleção correta.
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

export default ValvulasHidraulicas;
