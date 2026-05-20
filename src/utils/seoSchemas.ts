// Enhanced SEO Schemas for better Google Search visibility

const SITE_URL = 'https://www.hicomp.com.br';

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  "name": "HiComp Hidráulica",
  "alternateName": ["HiComp", "HiComp SP", "HiComp Hidraulica", "Hicomp Hidráulica São Paulo"],
  "description": "Comércio, fabricação e manutenção de peças hidráulicas, pneumáticas e automação industrial. Cilindros, bombas, válvulas das marcas Parker, Rexroth, Vickers, Denison. Desde 1995 em São Paulo.",
  "url": SITE_URL,
  "foundingDate": "1995",
  "slogan": "Soluções completas em sistemas óleo-hidráulicos",
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/og-image.png`,
    "width": 200,
    "height": 200
  },
  "image": [`${SITE_URL}/og-image.png`],
  "telephone": ["+55-11-2619-5457", "+55-11-2619-5482", "+55-11-99246-5636"],
  "email": "contato@hicomp.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Zalina Rolim, 647",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02127-000",
    "addressCountry": "BR",
    "addressNeighborhood": "Vila Maria Alta"
  },
  "areaServed": [
    { "@type": "Country", "name": "Brasil" },
    { "@type": "State", "name": "São Paulo" },
    { "@type": "State", "name": "Minas Gerais" },
    { "@type": "State", "name": "Rio de Janeiro" },
    { "@type": "City", "name": "São Paulo" },
    { "@type": "City", "name": "Campinas" },
    { "@type": "City", "name": "Guarulhos" }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.4942869,
    "longitude": -46.5955974
  },
  "hasMap": "https://www.google.com/maps/place/Hicomp+Hidr%C3%A1ulica/@-23.4942869,-46.5955974,17z",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -23.4942869,
      "longitude": -46.5955974
    },
    "geoRadius": "3000000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, Transferência Bancária, PIX, Boleto",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Peças e Equipamentos Hidráulicos, Pneumáticos e Automação",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Cilindros Hidráulicos e Pneumáticos", "description": "Fabricação, venda e manutenção de cilindros hidráulicos e pneumáticos industriais" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Manutenção de Bombas Hidráulicas", "description": "Reparo de bombas hidráulicas Parker, Rexroth, Vickers" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Válvulas Hidráulicas e Pneumáticas", "description": "Válvulas direcionais, proporcionais, de pressão e pneumáticas" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Componentes de Automação Industrial", "description": "Peças e acessórios para automação hidráulica e pneumática" }
      }
    ]
  },
  "knowsAbout": [
    "Cilindros Hidráulicos", "Bombas Hidráulicas", "Válvulas Hidráulicas",
    "Componentes Pneumáticos", "Automação Industrial", "Sistemas Óleo-Hidráulicos",
    "Manutenção Industrial", "Parker Hannifin", "Bosch Rexroth", "Eaton Vickers", "Denison Hydraulics"
  ],
  "sameAs": [
    "https://www.instagram.com/hicomphidraulica/",
    "https://www.facebook.com/hicomphidraulica/",
    "https://wa.me/5511992465636"
  ]
});

export const generateWebPageSchema = (title: string, description: string, url: string, dateModified?: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${url}#webpage`,
  "url": `${SITE_URL}${url}`,
  "name": title,
  "description": description,
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "about": { "@id": `${SITE_URL}/#organization` },
  "dateModified": dateModified || new Date().toISOString(),
  "inLanguage": "pt-BR",
  "potentialAction": { "@type": "ReadAction", "target": [`${SITE_URL}${url}`] }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "HiComp Hidráulica",
  "description": "Comércio de peças hidráulicas, pneumáticas e automação industrial",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "potentialAction": [{
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/informacoes?search={search_term_string}` },
    "query-input": "required name=search_term_string"
  }],
  "inLanguage": "pt-BR"
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${SITE_URL}${item.url}`
  }))
});

export const generateProductSchema = (name: string, description: string, brand: string, imageUrl?: string, url?: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "brand": { "@type": "Brand", "name": brand },
  "image": imageUrl || `${SITE_URL}/og-image.png`,
  "url": url ? `${SITE_URL}${url}` : undefined,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "BRL",
    "seller": { "@type": "Organization", "name": "HiComp Hidráulica" }
  },
  "manufacturer": { "@type": "Organization", "name": brand }
});

export const generateServiceSchema = (name: string, description: string, url?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": url ? `${SITE_URL}${url}` : undefined,
  "provider": { "@type": "LocalBusiness", "name": "HiComp Hidráulica", "@id": `${SITE_URL}/#organization` },
  "areaServed": [{ "@type": "Country", "name": "Brasil" }, { "@type": "State", "name": "São Paulo" }],
  "serviceType": "Comércio e Manutenção de Equipamentos Hidráulicos e Pneumáticos"
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contato - HiComp Hidráulica",
  "description": "Solicite orçamento de peças hidráulicas, pneumáticas e automação industrial",
  "url": `${SITE_URL}/contato`,
  "mainEntity": { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization` }
});

export const generateHowToSchema = (name: string, description: string, steps: { name: string; text: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  "step": steps.map((step, index) => ({ "@type": "HowToStep", "position": index + 1, "name": step.name, "text": step.text }))
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "HiComp Hidráulica",
  "url": SITE_URL,
  "logo": `${SITE_URL}/og-image.png`,
  "description": "Comércio de peças e equipamentos hidráulicos, pneumáticos e automação industrial desde 1995",
  "foundingDate": "1995",
  "knowsAbout": [
    "Bombas hidráulicas",
    "Cilindros hidráulicos",
    "Válvulas hidráulicas",
    "Automação industrial",
    "Manutenção hidráulica industrial"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Zalina Rolim, 647",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02127-000",
    "addressCountry": "BR"
  },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+55-11-2619-5457", "contactType": "customer service", "areaServed": "BR", "availableLanguage": "Portuguese" },
    { "@type": "ContactPoint", "telephone": "+55-11-99246-5636", "contactType": "sales", "areaServed": "BR", "availableLanguage": "Portuguese" }
  ],
  "sameAs": ["https://www.instagram.com/hicomphidraulica/", "https://www.facebook.com/hicomphidraulica/"]
});

export const generateSiteNavigationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "SiteNavigationElement", "position": 1, "name": "Produtos Hidráulicos e Pneumáticos", "description": "Cilindros, bombas, válvulas e componentes industriais", "url": `${SITE_URL}/informacoes` },
    { "@type": "SiteNavigationElement", "position": 2, "name": "Cilindros Hidráulicos", "description": "Fabricação e manutenção de cilindros hidráulicos industriais", "url": `${SITE_URL}/cilindros-hidraulicos` },
    { "@type": "SiteNavigationElement", "position": 3, "name": "Bombas Hidráulicas", "description": "Venda e manutenção de bombas hidráulicas Parker, Rexroth, Vickers", "url": `${SITE_URL}/manutencao-bombas-hidraulicas` },
    { "@type": "SiteNavigationElement", "position": 4, "name": "Mapa do Site", "description": "Navegação completa do site HiComp", "url": `${SITE_URL}/sitemap` },
    { "@type": "SiteNavigationElement", "position": 5, "name": "Sobre a Empresa", "description": "HiComp - Desde 1995 em peças hidráulicas e pneumáticas", "url": `${SITE_URL}/empresa` },
    { "@type": "SiteNavigationElement", "position": 6, "name": "Contato e Orçamento", "description": "Orçamento grátis de peças hidráulicas e pneumáticas em SP", "url": `${SITE_URL}/contato` },
    { "@type": "SiteNavigationElement", "position": 7, "name": "Perguntas Frequentes", "description": "FAQ sobre peças hidráulicas, pneumáticas e manutenção industrial", "url": `${SITE_URL}/faq` }
  ]
});

export const generateHomePageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateOrganizationSchema(),
    generateSiteNavigationSchema(),
    generateWebPageSchema(
      "HiComp – Peças Hidráulicas, Pneumáticas e Automação Industrial SP",
      "Comércio de cilindros, bombas, válvulas hidráulicas e pneumáticas. Automação industrial. Parker, Rexroth, Vickers. Orçamento grátis em São Paulo.",
      "/"
    ),
    {
      "@type": "Service",
      "serviceType": "Comércio e Manutenção de Equipamentos Hidráulicos e Pneumáticos",
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": { "@type": "Country", "name": "Brasil" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Peças e Serviços Hidráulicos e Pneumáticos",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cilindros Hidráulicos e Pneumáticos" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção de Bombas Hidráulicas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Válvulas Hidráulicas e Pneumáticas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projeto de Unidades Hidráulicas" } }
        ]
      }
    }
  ]
});
