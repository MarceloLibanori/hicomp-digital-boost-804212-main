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
    { question: "Quais tipos de cilindros hidráulicos vocês fornecem?", answer: "Fornecemos cilindros hidráulicos de simples ação, dupla ação, telescópicos, diferenciais e especiais sob medida. Trabalhamos com marcas como Parker, Rexroth e Vickers." },
    { question: "Vocês fabricam cilindros hidráulicos sob medida?", answer: "Sim, fabricamos e recondicionamos cilindros hidráulicos sob medida para atender especificações técnicas específicas de cada aplicação industrial." },
    { question: "Qual o prazo de entrega de um cilindro hidráulico?", answer: "Cilindros em estoque são enviados em até 24 horas. Para cilindros sob medida ou recondicionados, o prazo médio é de 5 a 10 dias úteis." },
    { question: "Como saber se meu cilindro hidráulico precisa de manutenção?", answer: "Sinais comuns incluem: vazamento de óleo nas vedações, movimento lento ou irregular do pistão, ruídos anormais e perda de força. Recomendamos inspeção técnica ao menor sinal de falha." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Cilindros Hidráulicos Industriais em SP"
        description="Cilindros hidráulicos industriais em São Paulo. Venda, manutenção e reparo. Parker, Rexroth, Vickers. Orçamento grátis ☎ (11) 2619-5457"
        keywords="cilindro hidráulico, cilindro hidráulico industrial, conserto de cilindro hidráulico, cilindro hidráulico para prensa, cilindro hidráulico SP"
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
              <h2 className="text-2xl font-bold mb-4">Precisa de Cilindros Hidráulicos?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Solicite um orçamento gratuito. Fornecimento, manutenção e reparo em São Paulo e todo o Brasil.
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
