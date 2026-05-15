import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { topics } from "@/data/topicsData";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/utils/seoSchemas";

const Informacoes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const infoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Informações Técnicas", url: "/informacoes" }
      ]),
      generateWebPageSchema(
        "Enciclopédia de Hidráulica Industrial — Bombas, Cilindros e Válvulas",
        "Central completa de hidráulica industrial: bombas, cilindros, válvulas, motores, filtros. Parker, Rexroth, Vickers, Denison. Manutenção em São Paulo.",
        "/informacoes"
      ),
      {
        "@type": "CollectionPage",
        "name": "Enciclopédia de Hidráulica Industrial — HiComp",
        "description": "Central completa de conhecimento técnico em hidráulica industrial: bombas, cilindros, válvulas, motores, filtros e unidades hidráulicas",
        "url": "https://www.hicomp.com.br/informacoes",
        "isPartOf": { "@id": "https://www.hicomp.com.br/#website" },
        "about": { "@id": "https://www.hicomp.com.br/#organization" },
        "hasPart": [
          { "@type": "WebPage", "name": "Guia Completo de Bombas Hidráulicas", "url": "https://www.hicomp.com.br/informacoes/hub-bombas-hidraulicas" },
          { "@type": "WebPage", "name": "Guia Completo de Válvulas Hidráulicas", "url": "https://www.hicomp.com.br/informacoes/hub-valvulas-hidraulicas" },
          { "@type": "WebPage", "name": "Guia Completo de Cilindros Hidráulicos", "url": "https://www.hicomp.com.br/informacoes/hub-cilindros-hidraulicos" },
          { "@type": "WebPage", "name": "Guia Completo de Atuadores Hidráulicos", "url": "https://www.hicomp.com.br/informacoes/hub-atuadores-hidraulicos" },
          { "@type": "WebPage", "name": "Guia Completo de Filtros Hidráulicos", "url": "https://www.hicomp.com.br/informacoes/hub-filtros-hidraulicos" },
          { "@type": "WebPage", "name": "Guia Completo de Unidades Hidráulicas", "url": "https://www.hicomp.com.br/informacoes/hub-unidades-hidraulicas" }
        ]
      }
    ]
  };

  const categories = [
    { id: "all", name: "Todos" },
    { id: "hubs", name: "Guias Completos" },
    { id: "componentes", name: "Componentes" },
    { id: "sistemas", name: "Sistemas" },
    { id: "manutencao", name: "Manutenção" },
  ];

  const filteredTopics = topics.filter((topic) => {
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularTopics = topics.filter(topic => topic.popular);

  return (
    <>
      <SEOEnhanced
        title="Enciclopédia de Hidráulica Industrial | Bombas, Cilindros, Válvulas SP"
        description="Central completa de hidráulica industrial: bombas, cilindros, válvulas, motores, filtros e unidades hidráulicas. Parker, Rexroth, Vickers, Denison. Manutenção e venda em São Paulo."
        keywords="bombas hidráulicas SP, cilindros hidráulicos São Paulo, válvulas hidráulicas Parker, peças Rexroth, manutenção Vickers, produtos hidráulicos industriais, unidades hidráulicas, filtros hidráulicos HDA, motores hidráulicos industriais"
        canonical="/informacoes"
        structuredData={infoSchema}
        faq={[
          { question: "Quais marcas de bombas hidráulicas vocês trabalham?", answer: "Trabalhamos com Parker, Rexroth, Vickers, Denison, Sauer Danfoss, Eaton e outras marcas líderes do mercado hidráulico." },
          { question: "Vocês vendem peças hidráulicas novas?", answer: "Sim! Vendemos peças novas e recondicionadas. Também fabricamos cilindros e blocos manifold sob medida." },
          { question: "A HiComp faz manutenção de cilindros hidráulicos?", answer: "Sim. Realizamos reforma, reparo e fabricação sob medida de cilindros hidráulicos industriais para todos os tipos de equipamentos." },
          { question: "Qual a diferença entre bomba de pistão e bomba de engrenagem?", answer: "A bomba de pistão axial opera em pressões de até 420 bar com cilindrada variável, ideal para aplicações de alta performance. A bomba de engrenagem é mais simples, mais barata e adequada para pressões até 250 bar em aplicações auxiliares." },
          { question: "Vocês atendem fora de São Paulo?", answer: "Sim. A HiComp atende clientes em todo o Brasil para venda e envio de componentes. O atendimento presencial de manutenção é concentrado na Grande São Paulo." }
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
      <Breadcrumbs />
      
      {/* Banner CTA Fixo */}
      <div className="bg-primary text-primary-foreground py-3 sticky top-[108px] z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/contato">Faça seu orçamento agora mesmo</Link>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                Faça seu orçamento por Whatsapp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          {/* Título e Busca */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 uppercase tracking-wide">
              Enciclopédia de Hidráulica Industrial
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
              Central completa de conhecimento técnico em <strong>hidráulica industrial</strong>: bombas, cilindros, válvulas, motores, filtros e unidades hidráulicas. Guias técnicos, especificações e informações detalhadas sobre componentes das marcas <strong>Parker, Rexroth, Vickers, Denison, Eaton e Sauer Danfoss</strong>.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              A HiComp é especialista em hidráulica industrial em São Paulo desde 1995. Manutenção, reparo e fornecimento de peças para toda a indústria brasileira.
            </p>
            
            {/* Busca Avançada */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar por produto, categoria ou tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 h-12"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="uppercase tracking-wide"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Artigos Mais Lidos */}
          {selectedCategory === "all" && !searchQuery && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide text-center">
                Guias Mais Populares
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularTopics.map((topic) => (
                  <article
                    key={topic.id}
                    className="group overflow-hidden rounded-lg shadow-md hover-lift bg-card"
                    itemScope
                    itemType="https://schema.org/Article"
                  >
                    <Link to={`/informacoes/${topic.id}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={topic.image}
                          alt={`${topic.title} — componentes hidráulicos industriais`}
                          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                          loading="lazy"
                          width="400"
                          height="225"
                          itemProp="image"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-smooth" itemProp="name">
                          {topic.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {topic.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Grade Principal de Tópicos */}
          <div className="mb-12">
            {selectedCategory !== "all" || searchQuery ? (
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide text-center">
                Resultados {searchQuery && `para "${searchQuery}"`}
              </h2>
            ) : (
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide text-center">
                Bombas, Cilindros, Válvulas e Conteúdos Técnicos
              </h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTopics.map((topic) => (
                <article
                  key={topic.id}
                  className="group flex flex-col overflow-hidden rounded-lg shadow-md hover-lift bg-card"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <Link to={`/informacoes/${topic.id}`} tabIndex={-1} aria-hidden="true">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={topic.image}
                        alt={`${topic.title} — informações técnicas sobre hidráulica industrial`}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                        loading="lazy"
                        width="400"
                        height="225"
                        itemProp="image"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-card-foreground mb-3 leading-snug" itemProp="name">
                      <Link to={`/informacoes/${topic.id}`} className="hover:text-primary transition-smooth">
                        {topic.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full mt-auto">
                      <Link to={`/informacoes/${topic.id}`}>
                        Ver informações →
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Nenhum resultado encontrado. Tente outra busca.
                </p>
              </div>
            )}
          </div>

          {/* CTA Final */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
              Não encontrou o que procura?
            </h2>
            <p className="text-lg mb-6">
              Nossa equipe técnica está pronta para ajudar você
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contato">Fale com um Especialista</Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default Informacoes;
