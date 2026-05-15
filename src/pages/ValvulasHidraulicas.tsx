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
    { question: "Quais tipos de válvulas hidráulicas vocês vendem?", answer: "Fornecemos válvulas direcionais, válvulas de pressão (alívio, sequência, redutora), válvulas de vazão, válvulas proporcionais, servoválvulas e válvulas cartucho das marcas Parker, Rexroth, Vickers e Denison." },
    { question: "Qual a diferença entre válvula direcional e proporcional?", answer: "A válvula direcional controla a direção do fluxo hidráulico em posições fixas (aberta ou fechada). A válvula proporcional permite controle variável e preciso do fluxo e pressão, sendo ideal para aplicações que exigem posicionamento e velocidade controlados." },
    { question: "Vocês fazem manutenção em válvulas hidráulicas?", answer: "Sim, realizamos manutenção preventiva e corretiva em todos os tipos de válvulas hidráulicas, incluindo limpeza, substituição de vedações, ajuste de pressão e testes de funcionamento." },
    { question: "Qual o prazo de entrega de válvulas hidráulicas?", answer: "Válvulas em estoque são enviadas em até 24 horas. Para modelos sob encomenda, o prazo varia de 5 a 15 dias úteis conforme o fabricante e modelo." },
  ];

  return (
    <>
      <SEOEnhanced
        title="Válvulas Hidráulicas Industriais em SP"
        description="Válvulas hidráulicas industriais em São Paulo. Direcionais, proporcionais, de pressão. Parker, Rexroth, Vickers. Orçamento grátis ☎ (11) 2619-5457"
        keywords="válvula hidráulica, válvula direcional hidráulica, válvula de pressão, válvula proporcional, válvulas hidráulicas SP, válvula Parker, válvula Rexroth"
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
              <h2 className="text-2xl font-bold mb-4">Precisa de Válvulas Hidráulicas?</h2>
              <p className="text-primary-foreground/90 mb-6">
                Solicite um orçamento gratuito. Fornecimento e manutenção em São Paulo e todo o Brasil.
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
