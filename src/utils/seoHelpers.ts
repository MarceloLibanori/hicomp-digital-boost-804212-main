const SITE_URL = 'https://www.hicomp.com.br';

// SEO Helper Functions

/**
 * Generate optimized title with keyword placement
 */
export const generateTitle = (pageTitle: string, includeCompanyName = true): string => {
  if (includeCompanyName) {
    return `${pageTitle} | HiComp - Peças Hidráulicas e Pneumáticas`;
  }
  return pageTitle;
};

/**
 * Generate SEO-friendly meta description
 */
export const generateDescription = (description: string, maxLength = 155): string => {
  if (description.length <= maxLength) return description;
  const truncated = description.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

/**
 * Generate keyword-rich canonical URL
 */
export const generateCanonicalUrl = (path: string): string => {
  return `${SITE_URL}${path}`;
};

/**
 * Generate OpenGraph image URL
 */
export const generateOgImage = (imagePath?: string): string => {
  return imagePath ? `${SITE_URL}${imagePath}` : `${SITE_URL}/og-image.png`;
};

/**
 * Generate JSON-LD for LocalBusiness
 */
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "HiComp Hidráulica",
  "image": `${SITE_URL}/og-image.png`,
  "url": SITE_URL,
  "telephone": "+55-11-2619-5457",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Zalina Rolim, 647",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02127-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.4942869",
    "longitude": "-46.5955974"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ]
});

/**
 * Generate JSON-LD for WebSite with SearchAction
 */
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "HiComp Hidráulica",
  "description": "Comércio de peças hidráulicas, pneumáticas e automação industrial em São Paulo",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/informacoes?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

/**
 * Generate keyword-rich alt text for images
 */
export const generateAltText = (productName: string, brand?: string, context?: string): string => {
  const parts = [productName];
  if (brand) parts.push(brand);
  if (context) parts.push(context);
  parts.push('HiComp');
  return parts.join(' - ');
};

/**
 * Format product name for SEO
 */
export const formatProductName = (name: string, brand: string): string => {
  return `${name} ${brand} | Peças e Manutenção`;
};

/**
 * Generate internal links suggestions based on page type
 */
export const generateRelatedLinks = (pageType: 'product' | 'service' | 'info', currentPage: string) => {
  const links = {
    product: [
      { title: "Bombas Hidráulicas", url: "/manutencao-bombas-hidraulicas", description: "Venda e manutenção de bombas" },
      { title: "Informações Técnicas", url: "/informacoes", description: "Guias e especificações" },
      { title: "FAQ", url: "/faq", description: "Perguntas frequentes" }
    ],
    service: [
      { title: "Produtos Parker", url: "/produtos/parker", description: "Linha completa Parker" },
      { title: "Produtos Rexroth", url: "/produtos/rexroth", description: "Linha completa Rexroth" },
      { title: "Entre em Contato", url: "/contato", description: "Fale com especialistas" }
    ],
    info: [
      { title: "Nossos Serviços", url: "/empresa", description: "Conheça nossos serviços" },
      { title: "Produtos", url: "/produtos/vickers", description: "Veja nossos produtos" },
      { title: "Vídeos Técnicos", url: "/videos", description: "Tutoriais em vídeo" }
    ]
  };
  return links[pageType].filter(link => link.url !== currentPage);
};
