import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
}

const normalizeStructuredData = (data?: object | object[]) => {
  if (!data) return null;

  if (Array.isArray(data)) {
    return {
      "@context": "https://schema.org",
      "@graph": data.map((item) => {
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

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://www.hicomp.com.br/og-image.png",
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = `${title} | HiComp - Soluções em Hidráulica`;
  const siteUrl = "https://www.hicomp.com.br";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const normalizedStructuredData = normalizeStructuredData(structuredData);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HiComp" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {normalizedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(normalizedStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
