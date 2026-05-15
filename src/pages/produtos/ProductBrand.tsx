import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOEnhanced from "@/components/SEOEnhanced";
import { FaWhatsapp } from "react-icons/fa";
import { createBreadcrumbSchema, createServiceSchema } from "@/utils/structuredData";

type BrandCategory = {
  name: string;
  products: string[];
};

type BrandContent = {
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  supportPath: string;
  supportLabel: string;
  categories: BrandCategory[];
};

const ProductBrand = () => {
  const { brand } = useParams();

  const brandData: Record<string, BrandContent> = {
    vickers: {
      name: "Vickers",
      title: "Componentes Hidráulicos Vickers em São Paulo",
      description:
        "Linha de componentes hidráulicos Vickers para manutenção industrial, reposição técnica e aplicações em sistemas óleo-hidráulicos.",
      metaDescription:
        "Bombas, válvulas e componentes hidráulicos Vickers em São Paulo com suporte técnico, manutenção e fornecimento industrial.",
      keywords:
        "vickers são paulo, bomba hidráulica vickers, válvula hidráulica vickers, componentes hidráulicos vickers",
      intro:
        "A HiComp atende demandas por componentes Vickers com foco em manutenção industrial, substituição de peças e suporte técnico para linhas de produção em São Paulo e Grande SP.",
      supportPath: "/valvulas-hidraulicas",
      supportLabel: "Válvulas Hidráulicas em São Paulo",
      categories: [
        {
          name: "Bombas Hidráulicas",
          products: ["Bomba V10", "Bomba V20", "Bomba VQ", "Bomba PVB", "Bomba PVQ"],
        },
        {
          name: "Motores Hidráulicos",
          products: ["Motor M4", "Motor M7", "Motor MFE", "Motor MFB"],
        },
        {
          name: "Válvulas",
          products: ["Válvula DG4V", "Válvula DG5V", "Válvula CG2V", "Válvula KBFDG4V"],
        },
      ],
    },
    parker: {
      name: "Parker",
      title: "Componentes Hidráulicos Parker em São Paulo",
      description:
        "Bombas, válvulas, filtros e peças Parker para manutenção hidráulica industrial com apoio técnico especializado.",
      metaDescription:
        "Componentes Parker em São Paulo com foco em bombas hidráulicas, válvulas direcionais, filtros e manutenção industrial.",
      keywords:
        "parker são paulo, bomba hidráulica parker, válvula direcional parker, componentes parker hidráulica",
      intro:
        "Trabalhamos com linhas Parker para manutenção, reposição e especificação técnica de componentes aplicados em sistemas hidráulicos industriais de alta exigência.",
      supportPath: "/manutencao-bombas-hidraulicas",
      supportLabel: "Manutenção de Bombas Hidráulicas",
      categories: [
        {
          name: "Bombas Hidráulicas",
          products: ["PV Series", "PVP Series", "T6 Series", "P2 Series"],
        },
        {
          name: "Válvulas Direcionais",
          products: ["D1VW", "D3W", "D41VW", "D91VW"],
        },
        {
          name: "Filtros",
          products: ["Filtro 9", "Filtro 12", "Filtro 15", "Filtro 20"],
        },
      ],
    },
    eaton: {
      name: "Eaton",
      title: "Componentes Hidráulicos Eaton em São Paulo",
      description:
        "Soluções Eaton para bombas, motores e válvulas hidráulicas em manutenção industrial e reposição de componentes.",
      metaDescription:
        "Bombas, motores e válvulas Eaton em São Paulo com suporte técnico para manutenção hidráulica industrial.",
      keywords:
        "eaton hidráulica são paulo, motor hidráulico eaton, bombas eaton, válvulas eaton",
      intro:
        "A linha Eaton atende aplicações industriais e móveis que exigem confiabilidade, com suporte para seleção de componentes e manutenção corretiva ou preventiva.",
      supportPath: "/assistencia-tecnica-industrial",
      supportLabel: "Assistência Técnica Hidráulica Industrial",
      categories: [
        {
          name: "Bombas de Pistão",
          products: ["PVE Series", "PVQ Series", "PVH Series", "PVM Series"],
        },
        {
          name: "Motores Hidráulicos",
          products: ["2K Series", "4K Series", "6K Series"],
        },
        {
          name: "Válvulas de Controle",
          products: ["CG Series", "DG Series", "CMA Series"],
        },
      ],
    },
    rexroth: {
      name: "Rexroth",
      title: "Componentes Hidráulicos Rexroth em São Paulo",
      description:
        "Bombas, válvulas e cilindros Rexroth para manutenção, reposição e especificação de sistemas hidráulicos industriais.",
      metaDescription:
        "Componentes Rexroth em São Paulo com foco em bombas hidráulicas, válvulas e cilindros para indústria.",
      keywords:
        "rexroth são paulo, bomba hidráulica rexroth, válvula hidráulica rexroth, cilindro rexroth",
      intro:
        "A HiComp oferece apoio técnico para componentes Rexroth em sistemas industriais, com atendimento a reparos, reposição de peças e análise de aplicação.",
      supportPath: "/hidraulica-industrial",
      supportLabel: "Hidráulica Industrial em São Paulo",
      categories: [
        {
          name: "Bombas",
          products: ["A10VSO", "A4VSO", "A7VO", "A2FO"],
        },
        {
          name: "Válvulas",
          products: ["4WE6", "4WE10", "4WRA", "4WRPH"],
        },
        {
          name: "Cilindros",
          products: ["CDT3", "CDM1", "CDH1", "CSH1"],
        },
      ],
    },
    hda: {
      name: "HDA",
      title: "Componentes Hidráulicos HDA em São Paulo",
      description:
        "Bombas de engrenagem, válvulas e itens HDA para reposição técnica e manutenção hidráulica industrial.",
      metaDescription:
        "Componentes HDA em São Paulo com suporte técnico para bombas de engrenagem, válvulas e manutenção industrial.",
      keywords: "hda são paulo, filtro hda, bombas hda, válvulas hda",
      intro:
        "Atendemos indústrias que buscam componentes HDA para manutenção, reposição e melhoria de desempenho em circuitos hidráulicos.",
      supportPath: "/manutencao-bombas-hidraulicas",
      supportLabel: "Reparo de Bombas Hidráulicas",
      categories: [
        {
          name: "Bombas de Engrenagem",
          products: ["Série GP", "Série GPM", "Série GHPM"],
        },
        {
          name: "Válvulas",
          products: ["Válvulas Direcionais", "Válvulas de Alívio", "Válvulas de Retenção"],
        },
      ],
    },
    denison: {
      name: "Denison",
      title: "Componentes Hidráulicos Denison em São Paulo",
      description:
        "Bombas e cartuchos Denison para manutenção industrial, reparo de equipamentos e reposição de componentes hidráulicos.",
      metaDescription:
        "Componentes Denison em São Paulo para sistemas hidráulicos industriais, com apoio técnico e manutenção especializada.",
      keywords:
        "denison são paulo, bomba denison, cartucho denison, manutenção denison hidráulica",
      intro:
        "A linha Denison é amplamente usada em sistemas industriais de alto desempenho, e a HiComp apoia tanto o fornecimento quanto a manutenção desses componentes.",
      supportPath: "/assistencia-tecnica-industrial",
      supportLabel: "Assistência Técnica Industrial",
      categories: [
        {
          name: "Bombas",
          products: ["T6 Series", "T7 Series", "Gold Cup"],
        },
        {
          name: "Cartuchos",
          products: ["LC Series", "HC Series", "MC Series"],
        },
      ],
    },
    "sauer-danfoss": {
      name: "Sauer Danfoss",
      title: "Componentes Hidráulicos Sauer Danfoss em São Paulo",
      description:
        "Bombas, motores, válvulas e transmissões Sauer Danfoss para manutenção e suporte técnico em sistemas hidráulicos.",
      metaDescription:
        "Componentes Sauer Danfoss em São Paulo para aplicações hidráulicas com manutenção, reposição e suporte técnico.",
      keywords:
        "sauer danfoss são paulo, bombas sauer danfoss, motores hidráulicos sauer danfoss, válvulas sauer danfoss",
      intro:
        "Atendemos demandas por componentes Sauer Danfoss em aplicações industriais e móveis, com orientação técnica para seleção e manutenção.",
      supportPath: "/hidraulica-industrial",
      supportLabel: "Soluções em Hidráulica Industrial",
      categories: [
        {
          name: "Bombas e Motores",
          products: ["Série 20", "Série 40", "Série 42", "Série 51"],
        },
        {
          name: "Válvulas",
          products: ["PVG Series", "PVEA Series", "PVE Series"],
        },
        {
          name: "Transmissões",
          products: ["Série 90", "Série 51", "Série H1"],
        },
      ],
    },
  };

  const currentBrand = brand ? brandData[brand.toLowerCase()] : null;
  const otherBrands = Object.keys(brandData).filter((item) => item !== brand?.toLowerCase());
  const breadcrumbs = currentBrand
    ? [
        { name: "Home", url: "/" },
        { name: "Produtos", url: "/informacoes" },
        { name: currentBrand.name, url: `/produtos/${brand}` },
      ]
    : [];

  if (!currentBrand) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Marca não encontrada</h1>
            <Link to="/" className="text-primary hover:underline">
              Voltar para Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOEnhanced
        title={currentBrand.title}
        description={currentBrand.metaDescription}
        keywords={currentBrand.keywords}
        canonical={`/produtos/${brand}`}
        structuredData={[
          createServiceSchema(currentBrand.title, currentBrand.description),
          createBreadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-64 flex-shrink-0" aria-label="Outras marcas de componentes hidráulicos">
                <div className="bg-card rounded-lg p-6 shadow-md sticky top-24">
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
                    Outras Marcas
                  </h3>
                  <ul className="space-y-2">
                    {otherBrands.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/produtos/${item}`}
                          className="text-muted-foreground hover:text-primary transition-smooth capitalize"
                        >
                          {brandData[item].name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
                  {currentBrand.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {currentBrand.description}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  {currentBrand.intro}
                </p>

                <div className="space-y-12">
                  {currentBrand.categories.map((category, index) => (
                    <section key={index} aria-labelledby={`cat-${index}`}>
                      <h2
                        id={`cat-${index}`}
                        className="text-3xl font-bold mb-6 uppercase tracking-wide text-primary"
                      >
                        {category.name} {currentBrand.name}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.products.map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className="bg-card rounded-lg p-6 shadow-md hover-lift"
                          >
                            <div className="text-lg font-semibold text-card-foreground">
                              {product}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Suporte técnico, manutenção e especificação para aplicações industriais em São Paulo.
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="bg-primary text-primary-foreground rounded-lg p-8 mt-12">
                  <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                    Atendimento Técnico {currentBrand.name}
                  </h2>
                  <p className="opacity-90 mb-6">
                    Se você procura manutenção, reposição de peças ou diagnóstico para a linha {currentBrand.name}, a HiComp pode apoiar sua operação com atendimento técnico especializado.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={currentBrand.supportPath}
                      className="inline-flex items-center justify-center bg-background text-foreground hover:bg-background/90 font-semibold h-11 rounded-md px-6 transition-smooth"
                    >
                      {currentBrand.supportLabel}
                    </Link>
                    <a
                      href="https://wa.me/5511992465636?text=Olá! Preciso de suporte técnico para componentes hidráulicos."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold h-11 rounded-md px-6 transition-colors"
                      aria-label="Solicitar orçamento pelo WhatsApp"
                    >
                      <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                      Orçamento pelo WhatsApp
                    </a>
                  </div>
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

export default ProductBrand;
