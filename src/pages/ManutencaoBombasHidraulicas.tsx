import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";
import { Phone, CheckCircle, Wrench, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ManutencaoBombasHidraulicas = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Manutenção de Bombas Hidráulicas", url: "/manutencao-bombas-hidraulicas" },
  ];

  const serviceSchema = createServiceSchema(
    "Manutenção de Bombas Hidráulicas",
    "Serviço especializado em manutenção preventiva e corretiva de bombas hidráulicas industriais em São Paulo. Reparo de bombas de engrenagem, pistão e palhetas das marcas Parker, Rexroth, Vickers e Denison."
  );

  const faqItems = [
    { question: "Quanto custa a manutenção de uma bomba hidráulica?", answer: "O custo varia conforme o modelo, marca e tipo de reparo necessário. Bombas de engrenagem geralmente têm reparo mais simples, enquanto bombas de pistão axial exigem serviços mais especializados. A HiComp realiza diagnóstico técnico gratuito para fornecer um orçamento preciso antes de qualquer serviço. Entre em contato pelo (11) 2619-5457 ou WhatsApp (11) 99246-5636." },
    { question: "Qual o prazo para reparo de bomba Parker ou Rexroth?", answer: "Para bombas Parker e Rexroth, o prazo médio é de 3 a 7 dias úteis, dependendo da complexidade do reparo e disponibilidade de peças. Nosso estoque próprio permite reparos mais ágeis. Em casos de parada de linha ou emergência industrial, oferecemos atendimento prioritário com prazo reduzido." },
    { question: "Quando devo trocar o óleo da bomba hidráulica?", answer: "A troca de óleo hidráulico deve ser feita a cada 2000 horas de operação ou conforme recomendação do fabricante. Sinais de óleo degradado incluem mudança de cor, presença de partículas metálicas, aquecimento excessivo e perda de viscosidade. A HiComp realiza análise de óleo para determinar o momento ideal de troca." },
    { question: "Como identificar vazamento em bomba de pistão?", answer: "Vazamentos em bombas de pistão são identificados por: óleo aparecendo no eixo de acionamento, manchas de óleo na carcaça externa, perda gradual de pressão no sistema, e presença de óleo no respiro da bomba. Se identificar qualquer desses sinais, suspenda a operação e solicite inspeção técnica para evitar danos maiores." },
    { question: "Vale a pena reformar ou comprar bomba nova?", answer: "A reforma é viável quando o custo é inferior a 60% do valor de uma bomba nova e o bloco da bomba não apresenta trincas ou desgaste excessivo. A HiComp avalia cada caso individualmente e apresenta ambas as opções com análise de custo-benefício transparente. Em muitos casos, a reforma com peças originais entrega desempenho equivalente a uma bomba nova." },
    { question: "Vocês oferecem garantia na manutenção de bombas?", answer: "Sim, oferecemos garantia de 90 dias para serviços de manutenção e reparo de bombas hidráulicas. A garantia cobre defeitos de mão de obra e peças substituídas. Além disso, fornecemos laudo técnico completo com especificações de pressão, vazão e testes realizados." },
    { question: "Atendem regime de urgência para parada de linha?", answer: "Sim, temos atendimento emergencial 24 horas para casos de parada de linha industrial. Nossa equipe técnica mobiliza recursos prioritários e, quando possível, disponibiliza bombas de backup enquanto o reparo definitivo é realizado. Entre em contato pelo (11) 99246-5636 para emergências." },
    { question: "Quais marcas de bombas hidráulicas vocês reparam?", answer: "Realizamos manutenção especializada em bombas das principais marcas: Parker Hannifin, Bosch Rexroth, Vickers (Eaton), Denison, HDA, Casappa e Hydromatic. Trabalhamos com todos os tipos: bombas de engrenagem externa e interna, pistão axial de deslocamento fixo e variável, pistão radial e palhetas simples e duplas." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Manutenção de Bombas Hidráulicas em SP"
        description="Manutenção e reparo de bombas hidráulicas industriais em São Paulo. Parker, Rexroth, Vickers. Diagnóstico grátis ☎ (11) 2619-5457"
        keywords="manutenção de bombas hidráulicas, conserto de bomba hidráulica, reparo bomba hidráulica SP, manutenção bomba Parker, bomba hidráulica industrial"
        canonical="/manutencao-bombas-hidraulicas"
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
                <li className="text-primary-foreground font-medium">Manutenção de Bombas Hidráulicas</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Manutenção de Bombas Hidráulicas em São Paulo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-8">
              A HiComp é especializada em manutenção preventiva e corretiva de bombas hidráulicas industriais, 
              atendendo indústrias em São Paulo e em todo o Brasil com soluções rápidas e confiáveis.
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
                Serviços de Manutenção de Bombas Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>manutenção de bombas hidráulicas</strong> é essencial para garantir o funcionamento contínuo 
                de sistemas industriais. Uma bomba hidráulica com defeito pode comprometer toda a linha de produção, 
                gerando paradas não programadas e prejuízos significativos. Na HiComp, realizamos diagnóstico técnico 
                completo, identificando falhas antes que causem danos maiores ao sistema.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nossos técnicos especializados atuam com <strong>bombas hidráulicas de engrenagem, pistão axial, 
                pistão radial e palhetas</strong>, das principais marcas do mercado: Parker, Rexroth (Bosch Rexroth), 
                Vickers (Eaton), Denison e HDA. Realizamos desde a substituição de vedações e rolamentos até a 
                retífica completa de componentes internos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com sede em São Paulo, na região da Vila Maria Alta, a HiComp atende indústrias em toda a 
                Grande São Paulo, Guarulhos, Osasco, ABC Paulista, Campinas e demais cidades do interior. 
                Para clientes em outros estados, realizamos o recebimento e envio de equipamentos com segurança e agilidade.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Quando Você Precisa de Manutenção de Bomba Hidráulica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Identificar os sinais de falha em uma bomba hidráulica pode evitar paradas não programadas e
                prejuízos significativos. Os principais sintomas que indicam necessidade de manutenção incluem:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Sintomas Mecânicos</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ruídos anormais (cavitação, rangidos, batidas)</li>
                    <li>• Vibração excessiva no acoplamento ou carcaça</li>
                    <li>• Vazamento de óleo pelo eixo ou juntas</li>
                    <li>• Superaquecimento da bomba ou do óleo</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Sintomas de Performance</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Perda de pressão no sistema hidráulico</li>
                    <li>• Redução de vazão ou velocidade dos cilindros</li>
                    <li>• Tempo de ciclo da máquina aumentado</li>
                    <li>• Consumo energético acima do normal</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Indústrias de transformação plástica</strong> que operam injetoras e extrusoras não podem
                tolerar oscilações de pressão — uma bomba desgastada afeta diretamente a qualidade das peças produzidas.
                Na <strong>siderurgia e metalurgia</strong>, bombas de pistão que alimentam prensas de grande porte
                exigem vazão e pressão constantes para garantir conformação adequada do material.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No setor de <strong>mineração</strong>, onde equipamentos pesados operam em condições severas,
                a contaminação do óleo por partículas é comum e acelera o desgaste interno das bombas. Já na
                <strong> construção civil</strong>, guindastes e plataformas elevatórias dependem de bombas
                hidráulicas confiáveis para segurança dos operadores.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  Consequências de Não Agir
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ignorar sintomas iniciais de falha pode resultar em danos em cascata: uma bomba com vazamento
                  interno gera calor excessivo, degradando o óleo e danificando válvulas e vedações de cilindros.
                  O custo de reparo pode aumentar em até 300% quando a falha se agrava. Além disso, paradas não
                  programadas custam em média R$ 5.000 a R$ 50.000 por dia em grandes indústrias, sem contar
                  riscos à segurança dos colaboradores.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Tipos de Bombas Hidráulicas que Reparamos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Bombas de Engrenagem", desc: "Manutenção e reparo de bombas de engrenagem externa e interna, utilizadas em sistemas de baixa e média pressão. Substituição de engrenagens, placas de desgaste e vedações." },
                  { title: "Bombas de Pistão Axial", desc: "Reparo completo de bombas de pistão axial de deslocamento fixo e variável. Retífica de pistões, substituição de sapatas e ajuste de compensadores de pressão." },
                  { title: "Bombas de Palhetas", desc: "Manutenção de bombas de palhetas simples e duplas. Substituição de palhetas, anéis de came e cartuchos, com testes de performance após o reparo." },
                  { title: "Bombas de Pistão Radial", desc: "Serviço especializado em bombas de pistão radial para aplicações de alta pressão. Diagnóstico completo e recondicionamento de componentes internos." },
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
                Por que Escolher a HiComp para Manutenção Hidráulica?
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: Shield, text: "Mais de 25 anos de experiência em hidráulica industrial" },
                  { icon: CheckCircle, text: "Peças originais e compatíveis Parker, Rexroth, Vickers e Denison" },
                  { icon: Clock, text: "Diagnóstico técnico rápido com orçamento gratuito" },
                  { icon: Wrench, text: "Testes de bancada e certificação de qualidade após o reparo" },
                  { icon: MapPin, text: "Atendimento em São Paulo, Grande SP e envio para todo o Brasil" },
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
                Como Funciona o Serviço de Manutenção de Bombas Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O processo de manutenção de bombas hidráulicas na HiComp segue uma metodologia estruturada
                que garante diagnóstico preciso e reparo de qualidade:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Recebimento e Inspeção Inicial (1 hora)</h3>
                    <p className="text-sm text-muted-foreground">Recebemos a bomba, registramos modelo e número de série, e realizamos inspeção visual para identificar danos externos, vazamentos e sinais de operação inadequada.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Desmontagem e Diagnóstico Técnico (2-4 horas)</h3>
                    <p className="text-sm text-muted-foreground">Desmontamos completamente a bomba, medimos desgastes internos com micrômetros e relógios comparadores, identificamos componentes danificados e elaboramos o orçamento detalhado com fotos e medições.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Aprovação e Execução do Reparo (2-5 dias)</h3>
                    <p className="text-sm text-muted-foreground">Após aprovação do orçamento, iniciamos a substituição de vedações, rolamentos, retentores e peças desgastadas. Realizamos retífica de placas de desgaste quando necessário e limpeza ultrassônica de todos os componentes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Montagem e Testes de Bancada (4-8 horas)</h3>
                    <p className="text-sm text-muted-foreground">Montamos a bomba com torques especificados pelo fabricante, realizamos testes de pressão, vazão e temperatura em bancada hidráulica. Verificamos ausência de vazamentos e ruídos anormais em diferentes condições de carga.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Laudo Técnico e Entrega</h3>
                    <p className="text-sm text-muted-foreground">Emitimos laudo técnico completo com curvas de pressão x vazão, fotos do antes e depois, peças substituídas e recomendações de uso. A bomba é embalada adequadamente e está pronta para retirada ou envio.</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Diferenciais HiComp no Reparo de Bombas</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bancada de testes calibrada para bombas até 350 bar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Estoque próprio de kits de vedação Parker e Rexroth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Técnicos com certificação em hidráulica industrial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Garantia de 90 dias em peças e mão de obra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Orçamento gratuito em até 24 horas após recebimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Atendimento prioritário para paradas de linha</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Marcas e Modelos de Bombas Atendidos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A HiComp trabalha com as principais marcas de bombas hidráulicas do mercado global. Nossa equipe
                técnica possui treinamento específico e acesso a documentação técnica original para cada fabricante:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-sm font-semibold">Marca</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Tipos Atendidos</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Disponibilidade de Peças</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold">Prazo Médio</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-border p-3 font-medium">Parker Hannifin</td>
                      <td className="border border-border p-3 text-muted-foreground">PV, PAVC, PVP, Série F, Série P</td>
                      <td className="border border-border p-3 text-muted-foreground">Alta - Estoque local</td>
                      <td className="border border-border p-3 text-muted-foreground">3-5 dias</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Bosch Rexroth</td>
                      <td className="border border-border p-3 text-muted-foreground">A10VSO, A4VG, A7VO, A10VNO</td>
                      <td className="border border-border p-3 text-muted-foreground">Alta - Estoque local</td>
                      <td className="border border-border p-3 text-muted-foreground">3-5 dias</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Vickers (Eaton)</td>
                      <td className="border border-border p-3 text-muted-foreground">PVH, PVB, PVQ, PFB, GPM</td>
                      <td className="border border-border p-3 text-muted-foreground">Média - 2-7 dias</td>
                      <td className="border border-border p-3 text-muted-foreground">4-7 dias</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Denison</td>
                      <td className="border border-border p-3 text-muted-foreground">T6, T7, PV, Série Gold Cup</td>
                      <td className="border border-border p-3 text-muted-foreground">Média - 3-10 dias</td>
                      <td className="border border-border p-3 text-muted-foreground">5-10 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Garantia oferecida:</strong> Todos os reparos incluem garantia de 90 dias contra defeitos
                de mão de obra e peças substituídas. Para bombas reformadas com kits originais completos (pistões,
                placas, vedações e rolamentos), oferecemos garantia estendida de 6 meses. A garantia cobre
                retrabalho e substituição de componentes defeituosos, mas não cobre danos causados por operação
                inadequada, contaminação do óleo ou uso fora das especificações técnicas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Manutenção Preventiva vs. Corretiva de Bombas Hidráulicas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>manutenção preventiva de bombas hidráulicas</strong> é a estratégia mais eficiente para 
                evitar paradas não programadas. Consiste em inspeções periódicas, troca de vedações, análise de óleo 
                hidráulico e verificação de pressão e vazão. Com um plano de manutenção preventiva, a vida útil da 
                bomba pode ser prolongada em até 40%.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Já a <strong>manutenção corretiva</strong> é realizada quando a bomba apresenta falhas, como 
                ruídos anormais, perda de pressão, superaquecimento ou vazamentos. A HiComp oferece atendimento 
                emergencial para minimizar o tempo de parada da sua operação industrial. Nosso estoque de peças 
                para bombas Parker, Rexroth e Vickers permite reparos ágeis mesmo em situações urgentes.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Perguntas Frequentes sobre Manutenção de Bombas Hidráulicas
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
                <Link to="/bomba-de-pistao-hidraulica" className="text-primary hover:underline text-sm">Bomba de Pistão Hidráulica</Link>
                <Link to="/hidraulica-industrial" className="text-primary hover:underline text-sm">Hidráulica Industrial</Link>
                <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">Assistência Técnica Industrial</Link>
                <Link to="/unidade-hidraulica-industrial" className="text-primary hover:underline text-sm">Unidade Hidráulica Industrial</Link>
                <Link to="/valvulas-hidraulicas" className="text-primary hover:underline text-sm">Válvulas Hidráulicas</Link>
                <Link to="/informacoes/bomba-hidraulica-parker" className="text-primary hover:underline text-sm">Bomba Hidráulica Parker</Link>
                <Link to="/informacoes/bomba-hidraulica-rexroth" className="text-primary hover:underline text-sm">Bomba Hidráulica Rexroth</Link>
              </div>
            </section>

            {/* CTA Final */}
            <section className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Precisa de Manutenção em Bombas Hidráulicas?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Entre em contato agora e receba um diagnóstico técnico gratuito. Atendemos em São Paulo e todo o Brasil.
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

export default ManutencaoBombasHidraulicas;
