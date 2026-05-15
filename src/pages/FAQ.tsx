import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateWebPageSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/utils/seoSchemas";

const FAQ = () => {
  const generalFAQs = [
    {
      question: "Quais marcas de equipamentos hidráulicos vocês trabalham?",
      answer: "Trabalhamos com as principais marcas mundiais do setor hidráulico, incluindo Parker, Rexroth (Bosch Rexroth), Vickers, Denison, Sauer Danfoss, Eaton e HDA. Nossa equipe possui expertise em todos esses fabricantes."
    },
    {
      question: "Vocês fazem manutenção de equipamentos de outras marcas?",
      answer: "Sim! Nossa equipe técnica é capacitada para realizar manutenção, reparo e recondicionamento de equipamentos hidráulicos de qualquer marca, mesmo aquelas não listadas em nosso portfólio principal."
    },
    {
      question: "Qual é o prazo de entrega dos serviços de manutenção?",
      answer: "O prazo varia conforme a complexidade do serviço e disponibilidade de peças. Manutenções simples podem ser concluídas em 5-7 dias úteis, enquanto reformas completas podem levar de 15 a 30 dias. Fornecemos estimativa detalhada após avaliação inicial."
    },
    {
      question: "Vocês oferecem garantia nos serviços e produtos?",
      answer: "Sim! Oferecemos garantia de 1 ano para equipamentos novos e recondicionados, e 90 dias para serviços de manutenção. A garantia cobre defeitos de fabricação e mão de obra, conforme termos do contrato."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "Você pode solicitar orçamento através do nosso site, WhatsApp (11) 99246-5636, telefone (11) 2619-5457 ou email. Para orçamentos mais precisos, forneça informações como marca, modelo, fotos e descrição do problema ou necessidade."
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim, atendemos clientes em todo o território nacional. Para serviços presenciais, nossa base principal está em São Paulo. Para outras regiões, trabalhamos com coleta e entrega via transportadora."
    },
    {
      question: "É possível agendar visita técnica?",
      answer: "Sim, oferecemos serviço de visita técnica para diagnóstico, avaliação de sistemas e suporte especializado. Entre em contato para agendar e verificar disponibilidade em sua região."
    },
    {
      question: "Vocês vendem peças de reposição?",
      answer: "Sim, comercializamos peças originais e de reposição para sistemas hidráulicos, incluindo vedações, filtros, válvulas, pistões, hastes e outros componentes. Consulte nossa equipe de vendas."
    }
  ];

  const technicalFAQs = [
    {
      question: "Como identificar se meu cilindro hidráulico precisa de manutenção?",
      answer: "Os principais sinais são: vazamento de óleo, riscos ou corrosão na haste, movimentos irregulares, perda de força, barulhos anormais e superaquecimento. Se notar qualquer desses sintomas, recomendamos inspeção técnica."
    },
    {
      question: "Qual a diferença entre bomba de engrenagem, palhetas e pistão?",
      answer: "Bombas de engrenagem são simples e robustas, ideais para aplicações básicas. Bombas de palhetas são mais silenciosas e precisas. Bombas de pistão oferecem maior eficiência e trabalham em altas pressões, sendo ideais para aplicações exigentes."
    },
    {
      question: "Com que frequência devo trocar o óleo hidráulico?",
      answer: "Recomenda-se análise do óleo a cada 1.000 horas ou anualmente. A troca completa deve ocorrer quando a análise indicar contaminação excessiva, oxidação ou perda de propriedades, geralmente entre 2.000 a 4.000 horas dependendo das condições de operação."
    },
    {
      question: "Posso usar qualquer tipo de óleo no sistema hidráulico?",
      answer: "Não! É fundamental usar o óleo especificado pelo fabricante do equipamento. Geralmente utiliza-se óleo ISO VG 46 ou 68, mas isso varia conforme temperatura, pressão e tipo de bomba. Usar óleo inadequado pode causar danos severos."
    },
    {
      question: "O que é uma válvula proporcional e quando usá-la?",
      answer: "Válvulas proporcionais permitem controle preciso e progressivo de vazão e pressão através de sinal elétrico variável. São ideais para aplicações que exigem movimentos suaves, precisos e automação, como máquinas CNC, injetoras e prensas de precisão."
    },
    {
      question: "Como dimensionar corretamente um cilindro hidráulico?",
      answer: "É necessário calcular a força requerida, curso necessário, pressão de trabalho disponível e velocidade desejada. A fórmula básica é: Força (kN) = Pressão (bar) x Área do pistão (cm²) / 10. Nossa equipe técnica pode auxiliar no dimensionamento correto."
    }
  ];

  const allFaqs = [...generalFAQs, ...technicalFAQs];
  
  const enhancedFaqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateFAQSchema(allFaqs),
      generateWebPageSchema(
        "FAQ - Perguntas Frequentes sobre Hidráulica",
        "Respostas para dúvidas sobre manutenção de bombas, cilindros e válvulas hidráulicas. Marcas Parker, Rexroth, Vickers.",
        "/faq"
      ),
      generateBreadcrumbSchema([
        { name: "Início", url: "/" },
        { name: "FAQ", url: "/faq" }
      ])
    ]
  };

  return (
    <>
      <SEOEnhanced
        title="FAQ Hidráulica | Dúvidas sobre Bombas, Cilindros e Válvulas"
        description="Respostas para as principais dúvidas sobre manutenção de bombas hidráulicas, cilindros e válvulas. Prazos, garantia, marcas atendidas Parker, Rexroth, Vickers."
        keywords="FAQ hidráulica, dúvidas manutenção bomba hidráulica, perguntas cilindro hidráulico, garantia manutenção hidráulica, como funciona bomba hidráulica"
        canonical="/faq"
        structuredData={enhancedFaqSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 uppercase tracking-wide">
                  Perguntas Frequentes
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Encontre respostas rápidas para as dúvidas mais comuns sobre nossos produtos, 
                  serviços e soluções em sistemas hidráulicos industriais.
                </p>
              </header>

              <div className="space-y-8">
                {/* FAQs Gerais */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide text-primary">
                    Questões Gerais
                  </h2>
                  <FAQSection faqs={generalFAQs} title="" />
                </div>

                {/* FAQs Técnicas */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide text-primary">
                    Questões Técnicas
                  </h2>
                  <FAQSection faqs={technicalFAQs} title="" />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                  Não encontrou sua resposta?
                </h2>
                <p className="text-lg mb-6">
                  Nossa equipe está pronta para ajudar com suas dúvidas específicas
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contato">Entre em Contato</Link>
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                      Fale no WhatsApp
                    </a>
                  </Button>
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

export default FAQ;
