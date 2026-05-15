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
    { question: "Quanto custa a manutenção de uma bomba hidráulica?", answer: "O custo varia conforme o modelo, marca e tipo de reparo necessário. A HiComp realiza diagnóstico técnico gratuito para fornecer um orçamento preciso. Entre em contato pelo (11) 2619-5457." },
    { question: "Qual o prazo para manutenção de bombas hidráulicas?", answer: "O prazo médio é de 3 a 7 dias úteis, dependendo da complexidade do reparo e disponibilidade de peças. Em casos urgentes, oferecemos atendimento prioritário." },
    { question: "Quais marcas de bombas hidráulicas vocês consertam?", answer: "Realizamos manutenção em bombas das principais marcas: Parker, Rexroth, Vickers, Denison, Eaton e HDA. Trabalhamos com bombas de engrenagem, pistão axial, pistão radial e palhetas." },
    { question: "Vocês atendem em toda São Paulo?", answer: "Sim, atendemos em toda a Grande São Paulo e região metropolitana. Também realizamos envio e recebimento de equipamentos para todo o Brasil." },
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
