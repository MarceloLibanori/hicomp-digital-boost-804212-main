import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/utils/seoSchemas";

const Sitemap = () => {
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Mapa do site", url: "/sitemap" }
      ]),
      generateWebPageSchema(
        "Mapa do site - HiComp Hidráulica",
        "O mapa do site com todos os atalhos para todas as páginas da HiComp Hidráulica.",
        "/sitemap"
      )
    ]
  };

  const mainPages = [
    { title: "Manutenção Hidráulica SP", url: "/", description: "Bombas, cilindros e válvulas - Parker, Rexroth, Vickers" },
    { title: "Empresa de Hidráulica", url: "/empresa", description: "Especialistas em sistemas óleo-hidráulicos industriais" },
    { title: "Produtos Hidráulicos", url: "/informacoes", description: "Bombas, cilindros, válvulas e unidades hidráulicas" },
    { title: "Orçamento Grátis", url: "/contato", description: "Solicite avaliação técnica sem compromisso" },
    { title: "Perguntas Frequentes", url: "/faq", description: "Dúvidas sobre manutenção hidráulica" },
    { title: "Vídeos Técnicos", url: "/videos", description: "Tutoriais de manutenção hidráulica" },
    { title: "Manutenção de Bombas Hidráulicas", url: "/manutencao-bombas-hidraulicas", description: "Reparo e manutenção de bombas hidráulicas em SP" },
    { title: "Cilindros Hidráulicos", url: "/cilindros-hidraulicos", description: "Fornecimento e reparo de cilindros hidráulicos" },
    { title: "Válvulas Hidráulicas", url: "/valvulas-hidraulicas", description: "Manutenção e venda de válvulas hidráulicas" },
    { title: "Assistência Técnica Industrial", url: "/assistencia-tecnica-industrial", description: "Suporte técnico em hidráulica industrial" },
    { title: "Hidráulica Industrial SP", url: "/hidraulica-industrial", description: "Soluções completas em hidráulica industrial" },
  ];

  const productPages = [
    { title: "Bomba hidráulica Parker", url: "/informacoes/bomba-hidraulica-parker" },
    { title: "Bomba hidráulica Rexroth", url: "/informacoes/bomba-hidraulica-rexroth" },
    { title: "Bomba hidráulica Vickers", url: "/informacoes/bomba-hidraulica-vickers" },
    { title: "Cilindro hidráulico industrial", url: "/informacoes/cilindro-hidraulico-industrial" },
    { title: "Motor hidráulico Rexroth", url: "/informacoes/motor-hidraulico-rexroth" },
    { title: "Válvula hidráulica Rexroth", url: "/informacoes/valvula-hidraulica-rexroth" },
  ];

  return (
    <>
      <SEOEnhanced
        title="Mapa do site | HiComp Hidráulica"
        description="O mapa do site com todos os atalhos para todas as páginas da HiComp Hidráulica. Encontre rapidamente produtos, serviços e informações técnicas."
        keywords="mapa do site, sitemap, navegação, páginas hicomp"
        canonical="/sitemap"
        structuredData={sitemapSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-8 uppercase tracking-wide text-center">
                Mapa do Site
              </h1>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                O mapa do site com todos os atalhos para todas as páginas da HiComp Hidráulica
              </p>

              {/* Páginas Principais */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b border-border pb-2">
                  Páginas Principais
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mainPages.map((page) => (
                    <li key={page.url}>
                      <Link
                        to={page.url}
                        className="block p-4 rounded-lg bg-card hover:bg-accent transition-colors"
                      >
                        <span className="text-lg font-semibold text-primary">{page.title}</span>
                        <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Produtos e Informações Técnicas */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b border-border pb-2">
                  Produtos e Informações Técnicas
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productPages.map((page) => (
                    <li key={page.url}>
                      <Link
                        to={page.url}
                        className="block p-4 rounded-lg bg-card hover:bg-accent transition-colors"
                      >
                        <span className="text-primary font-medium">{page.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Não encontrou o que procura?
                </h2>
                <p className="mb-6">
                  Entre em contato com nossa equipe técnica
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
