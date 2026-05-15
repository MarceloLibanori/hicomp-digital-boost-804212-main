const SITE_URL = 'https://www.hicomp.com.br';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HiComp Hidráulica",
  "alternateName": "HiComp",
  "description": "Comércio de peças e equipamentos hidráulicos, pneumáticos e automação industrial. Cilindros, bombas, válvulas e componentes das marcas Parker, Rexroth, Vickers e Denison.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/og-image.png`,
  "image": `${SITE_URL}/og-image.png`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Zalina Rolim, 647",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "02127-000",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-2619-5457",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": ["Portuguese", "pt-BR"]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/informacoes?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://www.instagram.com/hicomphidraulica/",
    "https://www.facebook.com/hicomphidraulica/",
    "https://wa.me/5511992465636"
  ]
};

export const createProductSchema = (name: string, description: string, brand: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "description": description,
  "brand": { "@type": "Brand", "name": brand },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock"
  }
});

export const createServiceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": { "@type": "Organization", "name": "HiComp Hidráulica" },
  "areaServed": { "@type": "Country", "name": "Brasil" }
});

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${SITE_URL}${item.url}`
  }))
});

export const createArticleSchema = (title: string, description: string, datePublished: string, imageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": datePublished,
  "author": { "@type": "Organization", "name": "HiComp Hidráulica" },
  ...(imageUrl && { "image": imageUrl })
});

export const faqSchema = (questions: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": { "@type": "Answer", "text": q.answer }
  }))
});
