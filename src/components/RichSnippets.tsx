import { Helmet } from "react-helmet-async";

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface RichSnippetsProps {
  type: "product" | "service" | "organization";
  name: string;
  description?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
  };
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  reviews?: Review[];
}

const RichSnippets = ({
  type,
  name,
  description,
  aggregateRating,
  offers,
  reviews,
}: RichSnippetsProps) => {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type === "product" ? "Product" : type === "service" ? "Service" : "Organization",
      name,
      description,
    };

    if (aggregateRating) {
      Object.assign(baseSchema, {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: aggregateRating.ratingValue,
          reviewCount: aggregateRating.reviewCount,
          bestRating: aggregateRating.bestRating || 5,
          worstRating: 1,
        },
      });
    }

    if (offers && (type === "product" || type === "service")) {
      Object.assign(baseSchema, {
        offers: {
          "@type": "Offer",
          priceCurrency: offers.priceCurrency || "BRL",
          price: offers.price || "0",
          availability: offers.availability || "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "HiComp Hidráulica",
          },
        },
      });
    }

    if (reviews && reviews.length > 0) {
      Object.assign(baseSchema, {
        review: reviews.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.author,
          },
          datePublished: review.datePublished,
          reviewBody: review.reviewBody,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: 5,
            worstRating: 1,
          },
        })),
      });
    }

    return baseSchema;
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(generateSchema())}</script>
    </Helmet>
  );
};

export default RichSnippets;
