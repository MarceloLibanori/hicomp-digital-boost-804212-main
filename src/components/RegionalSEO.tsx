import { Link } from "react-router-dom";

// SEO component targeting regional + national searches across Brazil
const RegionalSEO = () => {
  const spRegions = [
    { name: "Vila Maria", description: "Atendimento rápido na região" },
    { name: "Zona Norte SP", description: "Manutenção hidráulica especializada" },
    { name: "Guarulhos", description: "Serviços para indústrias" },
    { name: "ABC Paulista", description: "Suporte técnico completo" },
    { name: "Osasco", description: "Peças e reparos" },
    { name: "Campinas", description: "Atendimento industrial" }
  ];

  const nationalRegions = [
    { state: "MG", cities: "Belo Horizonte, Uberlândia, Contagem" },
    { state: "RJ", cities: "Rio de Janeiro, Duque de Caxias, Nova Iguaçu" },
    { state: "PR", cities: "Curitiba, Londrina, Maringá" },
    { state: "SC", cities: "Joinville, Blumenau, Florianópolis" },
    { state: "RS", cities: "Porto Alegre, Caxias do Sul, Canoas" },
    { state: "BA", cities: "Salvador, Camaçari, Feira de Santana" },
    { state: "GO", cities: "Goiânia, Anápolis, Aparecida de Goiânia" },
    { state: "PE", cities: "Recife, Jaboatão, Cabo de Santo Agostinho" },
    { state: "ES", cities: "Vitória, Serra, Vila Velha" },
    { state: "MT", cities: "Cuiabá, Rondonópolis, Sinop" },
    { state: "PA", cities: "Belém, Ananindeua, Marabá" },
    { state: "AM", cities: "Manaus, Distrito Industrial" },
  ];

  // Structured data for national service coverage
  const nationalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comércio e Manutenção de Peças Hidráulicas e Pneumáticas",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.hicomp.com.br/#organization",
      "name": "HiComp Hidráulica"
    },
    "areaServed": [
      { "@type": "Country", "name": "Brasil" },
      { "@type": "State", "name": "São Paulo" },
      { "@type": "State", "name": "Minas Gerais" },
      { "@type": "State", "name": "Rio de Janeiro" },
      { "@type": "State", "name": "Paraná" },
      { "@type": "State", "name": "Santa Catarina" },
      { "@type": "State", "name": "Rio Grande do Sul" },
      { "@type": "State", "name": "Bahia" },
      { "@type": "State", "name": "Goiás" },
      { "@type": "State", "name": "Pernambuco" },
      { "@type": "State", "name": "Espírito Santo" },
      { "@type": "State", "name": "Mato Grosso" },
      { "@type": "State", "name": "Pará" },
      { "@type": "State", "name": "Amazonas" }
    ],
    "serviceType": "Comércio e Manutenção de Equipamentos Hidráulicos e Pneumáticos",
    "description": "Comércio de cilindros, bombas, válvulas hidráulicas e pneumáticas. Automação industrial. Parker, Rexroth, Vickers, Denison. Envio para todo o Brasil.",
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+55-11-2619-5457",
      "serviceUrl": "https://www.hicomp.com.br/contato"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nationalServiceSchema) }}
      />
      <section className="py-16 bg-muted/30" aria-label="Áreas de atendimento hidráulica Brasil">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Manutenção Hidráulica em Todo o Brasil
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-lg">
            A <strong>HiComp Hidráulica</strong> atende <strong>indústrias em todo o Brasil</strong> com serviços de 
            <strong> manutenção de bombas hidráulicas</strong>, <strong>reparo de cilindros</strong> e 
            <strong> venda de peças hidráulicas</strong>. Enviamos peças para todos os estados. Orçamento grátis em até 24 horas.
          </p>

          {/* SP region grid */}
          <h3 className="text-xl font-bold mb-4 text-foreground">
            📍 São Paulo e Grande SP — Atendimento Presencial
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {spRegions.map((region, idx) => (
              <div 
                key={idx} 
                className="bg-card p-4 rounded-lg text-center shadow-sm border border-border hover:border-primary transition-colors"
              >
                <h4 className="font-bold text-foreground mb-1">{region.name}</h4>
                <p className="text-xs text-muted-foreground">{region.description}</p>
              </div>
            ))}
          </div>

          {/* National coverage */}
          <h3 className="text-xl font-bold mb-4 text-foreground">
            🇧🇷 Atendimento Nacional — Envio de Peças e Equipamentos
          </h3>
          <p className="text-muted-foreground mb-6">
            Enviamos <strong>bombas hidráulicas</strong>, <strong>cilindros</strong>, <strong>válvulas</strong> e 
            <strong> peças hidráulicas</strong> para todos os estados do Brasil. Recebemos equipamentos para 
            manutenção via transportadora.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {nationalRegions.map((region, idx) => (
              <div 
                key={idx} 
                className="bg-card p-3 rounded-lg shadow-sm border border-border hover:border-primary transition-colors"
              >
                <h4 className="font-bold text-foreground text-sm">{region.state}</h4>
                <p className="text-xs text-muted-foreground">{region.cities}</p>
              </div>
            ))}
          </div>

          {/* Call to Action with phone */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de Manutenção Hidráulica? Atendemos Todo o Brasil!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Atendimento presencial em São Paulo e envio de peças para todo o país
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+551126195457" 
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-bold hover:bg-background/90 transition-colors"
              >
                <span>☎</span> (11) 2619-5457
              </a>
              <a 
                href="https://wa.me/5511992465636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,71%,35%)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[hsl(142,71%,30%)] transition-colors"
              >
                <span>💬</span> WhatsApp
              </a>
              <Link 
                to="/contato"
                className="inline-flex items-center gap-2 border-2 border-background text-background px-6 py-3 rounded-lg font-bold hover:bg-background/10 transition-colors"
              >
                Orçamento Online
              </Link>
            </div>
          </div>

          {/* Long-tail keyword content for Brazilian search intent */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <article className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Como Funciona a Manutenção de Bombas Hidráulicas?
              </h3>
              <p className="text-muted-foreground mb-4">
                O processo de <strong>manutenção de bombas hidráulicas</strong> na HiComp segue um 
                protocolo rigoroso: diagnóstico técnico, orçamento detalhado, desmontagem, troca 
                de peças danificadas, testes de pressão e garantia de 1 ano. Atendemos clientes 
                de <strong>São Paulo</strong>, <strong>Minas Gerais</strong>, <strong>Rio de Janeiro</strong>, 
                <strong>Paraná</strong> e todos os estados brasileiros.
              </p>
              <Link to="/faq" className="text-primary hover:underline font-medium">
                Ver perguntas frequentes →
              </Link>
            </article>

            <article className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Enviamos Peças Hidráulicas para Todo o Brasil
              </h3>
              <p className="text-muted-foreground mb-4">
                Precisa de <strong>peças hidráulicas Parker, Rexroth ou Vickers</strong>? 
                A HiComp envia para qualquer cidade do Brasil via transportadora. 
                <strong> Bombas hidráulicas</strong>, <strong>cilindros</strong>, <strong>válvulas</strong>, 
                vedações e kits de reparo com <strong>nota fiscal e garantia</strong>.
              </p>
              <Link to="/contato" className="text-primary hover:underline font-medium">
                Solicitar orçamento grátis →
              </Link>
            </article>
          </div>

          {/* Additional Brazilian industry keywords */}
          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-foreground">
              Setores Industriais que Atendemos em Todo o Brasil
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mineração</h4>
                <p>Bombas e cilindros para <strong>mineração</strong> em MG, PA e MT</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Siderurgia</h4>
                <p>Sistemas hidráulicos para <strong>siderúrgicas</strong> e metalúrgicas</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Agronegócio</h4>
                <p>Cilindros para <strong>máquinas agrícolas</strong> em GO, MT e PR</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Construção Civil</h4>
                <p>Hidráulica para <strong>escavadeiras</strong> e <strong>retroescavadeiras</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegionalSEO;
