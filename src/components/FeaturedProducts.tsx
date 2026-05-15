import { Link } from "react-router-dom";
import { Wrench, Settings, Gauge, Cylinder } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      icon: Wrench,
      title: "Bombas Hidráulicas",
      description: "Manutenção, reparo e suporte técnico para bombas hidráulicas industriais Parker, Rexroth e Vickers.",
      path: "/manutencao-bombas-hidraulicas",
      label: "Ver serviço →",
    },
    {
      icon: Settings,
      title: "Válvulas Hidráulicas",
      description: "Venda, manutenção e especificação de válvulas hidráulicas direcionais e proporcionais em São Paulo.",
      path: "/valvulas-hidraulicas",
      label: "Ver serviço →",
    },
    {
      icon: Gauge,
      title: "Assistência Técnica",
      description: "Assistência técnica para motores e componentes de sistemas hidráulicos com garantia de 1 ano.",
      path: "/assistencia-tecnica-industrial",
      label: "Ver serviço →",
    },
    {
      icon: Cylinder,
      title: "Cilindros Hidráulicos",
      description: "Fabricação, reparo e manutenção de cilindros hidráulicos industriais sob medida para qualquer aplicação.",
      path: "/cilindros-hidraulicos",
      label: "Ver serviço →",
    },
  ];

  return (
    <section className="py-16 bg-muted/30" aria-label="Serviços hidráulicos em destaque">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 uppercase tracking-wide">
          Serviços em Destaque
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Soluções especializadas em hidráulica industrial para manter sua linha de produção em operação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                to={product.path}
                className="group"
                aria-label={`${product.title} — ${product.description}`}
              >
                <article className="bg-card rounded-lg overflow-hidden shadow-md hover-lift h-full flex flex-col">
                  <div className="h-40 gradient-primary flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary-foreground opacity-90" aria-hidden="true" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <span className="mt-4 text-primary font-semibold text-sm group-hover:underline">
                      {product.label}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
