import { Link } from "react-router-dom";
import { Wrench, Shield, TestTube, Zap, Users, GraduationCap } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Shield,
      title: "Manutenção Preventiva",
      description: "Inspeção programada de bombas, cilindros e válvulas para evitar paradas de produção e reduzir custos operacionais.",
      path: "/servicos/manutencao-preventiva",
    },
    {
      icon: Wrench,
      title: "Manutenção Corretiva",
      description: "Reparo emergencial de equipamentos hidráulicos e pneumáticos com garantia de 1 ano e peças originais.",
      path: "/servicos/manutencao-corretiva",
    },
    {
      icon: TestTube,
      title: "Análise de Óleo Hidráulico",
      description: "Análise laboratorial da qualidade do óleo para identificar contaminação, desgaste e prevenir falhas no sistema.",
      path: "/servicos/analise-oleo",
    },
    {
      icon: Zap,
      title: "Retrofit e Modernização",
      description: "Atualização tecnológica de sistemas hidráulicos antigos para melhorar eficiência, segurança e reduzir consumo energético.",
      path: "/servicos/retrofit",
    },
    {
      icon: Users,
      title: "Consultoria Técnica",
      description: "Assessoria especializada em projetos de sistemas hidráulicos, pneumáticos e automação industrial sob medida.",
      path: "/servicos/consultoria",
    },
    {
      icon: GraduationCap,
      title: "Treinamentos Industriais",
      description: "Capacitação técnica para operadores e equipes de manutenção em hidráulica, pneumática e segurança industrial.",
      path: "/servicos/treinamentos",
    },
  ];

  return (
    <section className="py-16 bg-background" aria-label="Serviços de manutenção hidráulica industrial">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Serviços de Manutenção Hidráulica e Pneumática
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Soluções completas em manutenção industrial — desde inspeção preventiva até retrofit de sistemas hidráulicos e pneumáticos
        </p>
        
        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0"
          itemScope
          itemType="https://schema.org/ItemList"
          aria-label="Lista de serviços hidráulicos industriais"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Service"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <meta itemProp="name" content={service.title} />
                <meta itemProp="description" content={service.description} />
                <Link to={service.path} className="group" itemProp="url">
                  <article className="bg-card rounded-lg p-8 shadow-md hover-lift h-full flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all" aria-hidden="true">
                      <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </article>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ServicesGrid;
