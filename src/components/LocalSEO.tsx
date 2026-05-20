// Microdata anchor for Local SEO — schema injected server-side via generateLocalBusinessSchema()
// This component provides invisible semantic HTML attributes for crawlers that parse microdata
// rather than JSON-LD (e.g. older scrapers, some LLM indexers).
// JSON-LD duplication is intentionally avoided: the canonical schema lives in SEOEnhanced via generateHomePageSchema().
const LocalSEO = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hicomp.com.br/#organization",
    "name": "HiComp Hidráulica",
    "alternateName": ["HiComp", "HiComp SP", "HiComp Hidraulica", "Hicomp Hidráulica São Paulo"],
    "description": "Comércio de peças e equipamentos hidráulicos, pneumáticos e automação industrial. Cilindros, bombas, válvulas das marcas Parker, Rexroth, Vickers, Denison. Atendimento em São Paulo e envio para todo o Brasil.",
    "url": "https://www.hicomp.com.br",
    "telephone": "+55-11-2619-5457",
    "email": "contato@hicomp.com.br",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": ["Dinheiro", "Cartão de Crédito", "Cartão de Débito", "PIX", "Boleto", "Transferência Bancária"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Zalina Rolim, 647",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "02127-000",
      "addressCountry": "BR",
      "addressNeighborhood": "Vila Maria Alta"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.4942869,
      "longitude": -46.5955974
    },
    "hasMap": "https://www.google.com/maps/place/Hicomp+Hidr%C3%A1ulica/@-23.4942869,-46.5955974,17z",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
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
      { "@type": "State", "name": "Mato Grosso" },
      { "@type": "State", "name": "Pará" },
      { "@type": "State", "name": "Amazonas" },
      { "@type": "State", "name": "Pernambuco" },
      { "@type": "State", "name": "Espírito Santo" },
      { "@type": "City", "name": "São Paulo" },
      { "@type": "City", "name": "Belo Horizonte" },
      { "@type": "City", "name": "Rio de Janeiro" },
      { "@type": "City", "name": "Curitiba" },
      { "@type": "City", "name": "Porto Alegre" },
      { "@type": "City", "name": "Salvador" },
      { "@type": "City", "name": "Goiânia" },
      { "@type": "City", "name": "Manaus" },
      { "@type": "City", "name": "Recife" },
      { "@type": "City", "name": "Joinville" },
      { "@type": "City", "name": "Campinas" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -23.4942869,
        "longitude": -46.5955974
      },
      "geoRadius": "3000000"
    },
    "slogan": "Soluções completas em sistemas óleo-hidráulicos",
    "foundingDate": "1995",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-2619-5457",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-2619-5482",
        "contactType": "technical support",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-99246-5636",
        "contactType": "sales",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/hicomphidraulica/",
      "https://www.facebook.com/hicomphidraulica/",
      "https://wa.me/5511992465636"
    ]
  };

  // Render as hidden microdata for alternative parsers.
  // JSON-LD is handled by SEOEnhanced to avoid duplicate schemas in the same page.
  return (
    <div
      itemScope
      itemType="https://schema.org/LocalBusiness"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <span itemProp="name">{localBusinessData.name}</span>
      <span itemProp="telephone">{localBusinessData.telephone}</span>
      <span itemProp="email">{localBusinessData.email}</span>
      <span itemProp="url">{localBusinessData.url}</span>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">{localBusinessData.address.streetAddress}</span>
        <span itemProp="addressLocality">{localBusinessData.address.addressLocality}</span>
        <span itemProp="addressRegion">{localBusinessData.address.addressRegion}</span>
        <span itemProp="postalCode">{localBusinessData.address.postalCode}</span>
        <span itemProp="addressCountry">{localBusinessData.address.addressCountry}</span>
      </div>
    </div>
  );
};

export default LocalSEO;
