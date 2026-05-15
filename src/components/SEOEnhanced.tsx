import { Helmet } from "react-helmet-async";

interface SEOEnhancedProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  faq?: { question: string; answer: string }[];
}

const normalizeStructuredData = (data?: object | object[]) => {
  if (!data) return null;

  if (Array.isArray(data)) {
    const flattened = data.flatMap((item) => {
      if (
        item &&
        typeof item === "object" &&
        "@graph" in item &&
        Array.isArray((item as { "@graph": object[] })["@graph"])
      ) {
        return (item as { "@graph": object[] })["@graph"];
      }

      return [item];
    });

    return {
      "@context": "https://schema.org",
      "@graph": flattened.map((item) => {
        if (item && typeof item === "object" && "@context" in item) {
          const { "@context": _context, ...rest } = item as Record<string, unknown>;
          return rest;
        }

        return item;
      }),
    };
  }

  return data;
};

const SEOEnhanced = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://www.hicomp.com.br/og-image.png",
  ogType = "website",
  structuredData,
  noindex = false,
  article,
  faq,
}: SEOEnhancedProps) => {
  const fullTitle = title.includes("HiComp") 
    ? title 
    : `${title} | HiComp - Soluções em Hidráulica`;
  const siteUrl = "https://www.hicomp.com.br";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  
  // Truncate description for SEO (max 160 chars)
  const truncatedDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  // Generate FAQ Schema if faq prop is provided
  const faqSchema = faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Combine all structured data
  const allStructuredData = structuredData 
    ? (faqSchema ? [structuredData, faqSchema] : structuredData)
    : faqSchema;
  const normalizedStructuredData = normalizeStructuredData(allStructuredData);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={truncatedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Googlebot specific */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <link rel="alternate" hrefLang="pt-BR" href={fullCanonical || siteUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical || siteUrl} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo, Vila Maria Alta" />
      <meta name="geo.position" content="-23.4942869;-46.5955974" />
      <meta name="ICBM" content="-23.4942869, -46.5955974" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={truncatedDescription} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="HiComp Hidráulica" />
      <meta property="og:locale" content="pt_BR" />

      {/* Article specific (for blog posts/news) */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Authority signals */}
      <meta name="author" content="HiComp Hidráulica" />
      <meta name="publisher" content="HiComp Hidráulica" />

      {/* Structured Data */}
      {normalizedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(normalizedStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOEnhanced;
