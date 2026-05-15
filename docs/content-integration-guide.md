# Content Integration Technical Guide
## HiComp Hidráulica - Content Strategy Implementation

**Version:** 1.0  
**Last Updated:** May 14, 2026  
**Related:** README-SEO.md, LEE-19 Content Strategy

---

## Table of Contents
1. [Overview](#overview)
2. [Blog Implementation](#blog-implementation)
3. [Case Studies](#case-studies)
4. [FAQ Expansion](#faq-expansion)
5. [Video Content Integration](#video-content-integration)
6. [Content Management Strategy](#content-management-strategy)
7. [SEO Best Practices](#seo-best-practices)
8. [Code Examples](#code-examples)

---

## Overview

This guide provides technical implementation guidance for integrating the content strategy into the HiComp website. The site uses:

- **Framework:** React + TypeScript + Vite
- **Routing:** React Router DOM
- **Content Pattern:** TypeScript data files (currently)
- **SEO:** React Helmet Async + Schema.org structured data
- **Existing Routes:** `/informacoes/:topic` for dynamic content

### Current Architecture Strengths

✅ **Reusable Components:** FAQSection, SEOEnhanced, Breadcrumbs  
✅ **SEO Infrastructure:** Schema markup utilities in `src/utils/seoSchemas.ts` and `src/utils/structuredData.ts`  
✅ **Dynamic Routing:** Already supports parameterized routes  
✅ **Performance:** Lazy loading, image optimization  

---

## Blog Implementation

### Recommended Architecture

**Pattern:** Static content with dynamic routing (scalable without a database)

**Route Structure:**
```
/blog              → Blog listing page
/blog/:slug        → Individual blog post
```

**Alternative Portuguese Route:**
```
/informacoes/blog              → Portuguese route
/informacoes/blog/:slug        → Individual post
```

### Data Structure

#### Option 1: Markdown Files (Recommended for scale)

Create blog posts as markdown files with frontmatter:

```markdown
---
slug: manutencao-preventiva-bombas-hidraulicas
title: Manutenção Preventiva de Bombas Hidráulicas - Guia Completo
description: Aprenda as melhores práticas para manutenção preventiva de bombas hidráulicas Parker, Rexroth e Vickers
author: Equipe HiComp
date: 2026-05-14
category: Manutenção
tags: [bombas-hidráulicas, manutenção, parker, rexroth]
image: /assets/blog/manutencao-bombas-hero.webp
keywords: manutenção bomba hidráulica, manutenção preventiva, bomba parker
---

# Manutenção Preventiva de Bombas Hidráulicas

Manter suas bombas hidráulicas em perfeito estado é essencial...

## Por que a Manutenção Preventiva é Importante?

A manutenção preventiva reduz custos...
```

**Setup:**
```bash
npm install gray-matter remark remark-html
```

**File Structure:**
```
src/
  content/
    blog/
      manutencao-preventiva-bombas-hidraulicas.md
      como-escolher-bomba-hidraulica.md
      ...
```

#### Option 2: TypeScript Files (Current Pattern)

Follow existing pattern like `src/data/topics/`:

```typescript
// src/data/blog/manutencao-preventiva-bombas.ts
import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'manutencao-preventiva-bombas-hidraulicas',
  title: 'Manutenção Preventiva de Bombas Hidráulicas',
  description: 'Guia completo sobre manutenção preventiva...',
  author: 'Equipe HiComp',
  date: '2026-05-14',
  category: 'Manutenção',
  tags: ['bombas-hidráulicas', 'manutenção', 'parker'],
  heroImage: '/assets/blog/manutencao-bombas-hero.webp',
  content: `
    <h2>Por que a Manutenção Preventiva é Importante?</h2>
    <p>A manutenção preventiva de <strong>bombas hidráulicas</strong>...</p>
  `,
  keywords: 'manutenção bomba hidráulica, manutenção preventiva',
  faqs: [
    {
      question: 'Com que frequência devo fazer manutenção preventiva?',
      answer: 'Recomenda-se manutenção a cada 2000 horas de operação...'
    }
  ]
};

export default post;
```

### Component Structure

**Blog Listing Page** (`src/pages/Blog.tsx`):
```tsx
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOEnhanced from '@/components/SEOEnhanced';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blogData';
import { generateBlogListingSchema } from '@/utils/seoSchemas';

const Blog = () => {
  // Filter by category if needed
  const categories = ['Manutenção', 'Produtos', 'Aplicações', 'Tutoriais'];
  
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBlogListingSchema(),
      // Add Blog schema
      {
        "@type": "Blog",
        "name": "Blog HiComp Hidráulica",
        "description": "Artigos técnicos sobre sistemas hidráulicos industriais",
        "url": "https://hicomphidraulica.com.br/blog",
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `https://hicomphidraulica.com.br/blog/${post.slug}`,
          "datePublished": post.date,
          "image": post.heroImage
        }))
      }
    ]
  };

  return (
    <>
      <SEOEnhanced
        title="Blog de Hidráulica Industrial | HiComp"
        description="Artigos técnicos sobre manutenção de bombas hidráulicas, válvulas, cilindros e sistemas industriais."
        keywords="blog hidráulica, artigos técnicos, manutenção hidráulica"
        canonical="/blog"
        structuredData={blogSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
              Blog Técnico
            </h1>
            
            {/* Category Filter */}
            <div className="flex gap-4 mb-8">
              {categories.map(cat => (
                <button key={cat} className="btn">
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <article key={post.slug} className="bg-card rounded-lg overflow-hidden shadow-md hover-lift">
                  <img 
                    src={post.heroImage} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="text-primary text-sm font-semibold">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold mt-2 mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
```

**Individual Blog Post** (`src/pages/blog/BlogPost.tsx`):
```tsx
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOEnhanced from '@/components/SEOEnhanced';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import { blogPosts } from '@/data/blogData';
import { createArticleSchema, createBreadcrumbSchema } from '@/utils/structuredData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${slug}` }
      ]),
      createArticleSchema({
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.dateModified || post.date,
        author: post.author,
        image: post.heroImage,
        url: `/blog/${slug}`
      })
    ]
  };

  return (
    <>
      <SEOEnhanced
        title={`${post.title} | Blog HiComp`}
        description={post.description}
        keywords={post.keywords}
        canonical={`/blog/${slug}`}
        structuredData={articleSchema}
        ogType="article"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Hero Image */}
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="text-primary font-semibold">{post.category}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {post.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* FAQs if available */}
            {post.faqs && post.faqs.length > 0 && (
              <FAQSection faqs={post.faqs} />
            )}

            {/* CTA */}
            <div className="bg-primary/5 rounded-lg p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Precisa de Manutenção ou Assistência Técnica?
              </h2>
              <p className="text-muted-foreground mb-6">
                Entre em contato com a HiComp para soluções profissionais em hidráulica industrial
              </p>
              <Link to="/contato" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Show related posts by category or tags */}
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
```

### Adding Blog Routes

Update `src/App.tsx`:
```tsx
import Blog from "./pages/Blog";
import BlogPost from "./pages/blog/BlogPost";

// In Routes:
<Route path="/blog" element={<S><Blog /></S>} />
<Route path="/blog/:slug" element={<S><BlogPost /></S>} />
```

### SEO Schema for Blog

Already available via `createArticleSchema` in `src/utils/structuredData.ts`. This implements `Article` schema which is perfect for blog posts.

---

## Case Studies

### Recommended Structure

**Route:** `/cases/:slug` or `/casos-sucesso/:slug`

### Data Structure

```typescript
// src/data/caseStudies.ts
export interface CaseStudy {
  slug: string;
  title: string;
  client: string; // Can be "Indústria Metalúrgica" (anonymized)
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: string[];
  productsUsed: string[]; // ["Bomba Parker PV180", "Válvula Rexroth 4WE6"]
  date: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reducao-downtime-industria-metalurgica',
    title: 'Redução de 40% no Downtime em Indústria Metalúrgica',
    client: 'Indústria Metalúrgica - Grande Porte',
    industry: 'Metalurgia',
    challenge: 'Cliente enfrentava paradas frequentes devido a falhas em bombas hidráulicas...',
    solution: 'Implementamos um programa de manutenção preventiva com substituição de bombas Parker...',
    results: [
      '40% redução em tempo de parada',
      '25% economia em custos de manutenção',
      'Aumento de 15% na produtividade'
    ],
    testimonial: {
      quote: 'A HiComp transformou nossa operação...',
      author: 'João Silva',
      position: 'Gerente de Manutenção'
    },
    images: ['/assets/cases/case-01.webp'],
    productsUsed: ['Bomba Parker PV180', 'Válvula Rexroth 4WE6'],
    date: '2026-03-15',
    tags: ['manutenção-preventiva', 'bombas-parker', 'metalurgia']
  }
];
```

### Case Study Page Component

```tsx
// src/pages/cases/CaseStudy.tsx
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOEnhanced from '@/components/SEOEnhanced';
import { caseStudies } from '@/data/caseStudies';

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find(c => c.slug === slug);

  if (!caseStudy) return <div>Case study not found</div>;

  // Use Article schema or custom CaseStudy extension
  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.challenge,
    "datePublished": caseStudy.date,
    "author": {
      "@type": "Organization",
      "name": "HiComp Hidráulica"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HiComp Hidráulica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hicomphidraulica.com.br/logo.png"
      }
    },
    "image": caseStudy.images[0],
    // Add Review/AggregateRating if testimonial exists
    ...(caseStudy.testimonial && {
      "review": {
        "@type": "Review",
        "reviewBody": caseStudy.testimonial.quote,
        "author": {
          "@type": "Person",
          "name": caseStudy.testimonial.author,
          "jobTitle": caseStudy.testimonial.position
        }
      }
    })
  };

  return (
    <>
      <SEOEnhanced
        title={`${caseStudy.title} | Casos de Sucesso HiComp`}
        description={caseStudy.challenge}
        keywords={`caso de sucesso, ${caseStudy.industry}, ${caseStudy.tags.join(', ')}`}
        canonical={`/cases/${slug}`}
        structuredData={caseSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Industry Badge */}
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {caseStudy.industry}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudy.title}
            </h1>

            {/* Client */}
            <p className="text-xl text-muted-foreground mb-8">
              Cliente: {caseStudy.client}
            </p>

            {/* Hero Image */}
            {caseStudy.images[0] && (
              <img
                src={caseStudy.images[0]}
                alt={caseStudy.title}
                className="w-full h-96 object-cover rounded-lg mb-12"
              />
            )}

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                O Desafio
              </h2>
              <p className="text-lg leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                A Solução
              </h2>
              <p className="text-lg leading-relaxed">
                {caseStudy.solution}
              </p>
              
              {/* Products Used */}
              {caseStudy.productsUsed.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Produtos Utilizados:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {caseStudy.productsUsed.map(product => (
                      <li key={product} className="text-lg">{product}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Resultados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="bg-primary/5 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-primary mb-2">✓</p>
                    <p className="text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <section className="bg-muted/30 rounded-lg p-8 mb-12">
                <blockquote className="text-xl italic mb-4">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-muted-foreground">{caseStudy.testimonial.position}</p>
              </section>
            )}

            {/* CTA */}
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Quer Resultados Similares na Sua Empresa?
              </h2>
              <p className="mb-6">
                Entre em contato para descobrir como podemos ajudar
              </p>
              <a href="/contato" className="btn bg-white text-primary hover:bg-gray-100">
                Falar com Especialista
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
```

### Case Studies Listing Page

```tsx
// src/pages/CaseStudies.tsx
const CaseStudies = () => {
  return (
    // Similar to Blog listing, but with case study cards
    // Filter by industry
    // Show results highlights on cards
  );
};
```

---

## FAQ Expansion

### Current Implementation

The `FAQSection` component already exists at `src/components/FAQSection.tsx` and is perfectly reusable.

### How to Add Service-Specific FAQs

#### Pattern 1: Inline in Page Component

```tsx
// src/pages/ManutencaoBombasHidraulicas.tsx
import FAQSection from '@/components/FAQSection';
import { faqSchema } from '@/utils/structuredData';

const ManutencaoBombasHidraulicas = () => {
  const faqs = [
    {
      question: 'Com que frequência deve ser feita a manutenção de bombas hidráulicas?',
      answer: 'Recomenda-se manutenção preventiva a cada 2000 horas de operação ou conforme especificação do fabricante...'
    },
    {
      question: 'Quanto custa a manutenção de uma bomba Parker?',
      answer: 'O custo varia dependendo do modelo e do tipo de serviço necessário...'
    }
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // ... existing schemas
      faqSchema(faqs) // Add FAQ schema
    ]
  };

  return (
    <>
      <SEOEnhanced structuredData={pageSchema} />
      {/* ... page content ... */}
      <FAQSection faqs={faqs} title="Perguntas Frequentes sobre Manutenção" />
    </>
  );
};
```

#### Pattern 2: Centralized FAQ Data

```typescript
// src/data/faqs.ts
export const faqsByCategory = {
  manutencao: [
    {
      question: 'Com que frequência deve ser feita a manutenção?',
      answer: '...'
    }
  ],
  bombas: [
    {
      question: 'Quais marcas de bombas vocês atendem?',
      answer: 'Trabalhamos com Parker, Rexroth, Vickers...'
    }
  ],
  cilindros: [
    // ...
  ]
};
```

Then import where needed:
```tsx
import { faqsByCategory } from '@/data/faqs';

const faqs = [
  ...faqsByCategory.manutencao,
  ...faqsByCategory.bombas
];
```

### Ensuring Correct FAQPage Schema

The `faqSchema` utility in `src/utils/structuredData.ts` already implements FAQPage schema correctly:

```typescript
export function faqSchema(faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
```

**Integration Checklist:**
- ✅ Import FAQSection component
- ✅ Pass array of `{ question, answer }` objects
- ✅ Include `faqSchema(faqs)` in page's `@graph` array
- ✅ Place FAQSection near bottom of page (best for UX)

---

## Video Content Integration

### Current Implementation

The Videos page (`src/pages/Videos.tsx`) currently uses local video files (`.mov`, `.mp4`).

### Recommended: YouTube Embed Strategy

#### Benefits of YouTube
- ✅ No hosting costs
- ✅ Better performance (YouTube CDN)
- ✅ Built-in video player controls
- ✅ Mobile optimized
- ✅ Analytics via YouTube Studio

#### Data Structure

```typescript
// src/data/videos.ts
export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // e.g., "dQw4w9WgXcQ"
  thumbnail?: string; // YouTube provides these automatically
  category: string;
  date: string;
  duration?: string; // ISO 8601 format: "PT10M30S"
  tags: string[];
}

export const videos: Video[] = [
  {
    id: 'manutencao-bomba-parker',
    title: 'Manutenção de Bombas Hidráulicas Parker',
    description: 'Aprenda passo a passo como fazer manutenção preventiva em bombas Parker',
    youtubeId: 'ABC123XYZ',
    category: 'Manutenção',
    date: '2026-05-10',
    duration: 'PT12M45S',
    tags: ['parker', 'manutenção', 'bombas']
  }
];
```

#### YouTube Embed Component

Create a reusable component with lazy loading:

```tsx
// src/components/YouTubeEmbed.tsx
import { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
}

const YouTubeEmbed = ({ videoId, title, autoplay = false }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Thumbnail URL (high quality)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Embed URL with options
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}${
    autoplay ? '?autoplay=1' : ''
  }`;

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      {!isLoaded ? (
        // Show thumbnail with play button (click to load iframe)
        <button
          onClick={() => setIsLoaded(true)}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        // Load iframe when clicked
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default YouTubeEmbed;
```

#### Updated Videos Page

```tsx
// src/pages/Videos.tsx
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { videos } from '@/data/videos';

const Videos = () => {
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // ... breadcrumbs, webpage ...
      {
        "@type": "ItemList",
        "itemListElement": videos.map((video, index) => ({
          "@type": "VideoObject",
          "position": index + 1,
          "name": video.title,
          "description": video.description,
          "thumbnailUrl": `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
          "uploadDate": video.date,
          "duration": video.duration,
          "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
          "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
          "publisher": {
            "@type": "Organization",
            "name": "HiComp Hidráulica"
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOEnhanced structuredData={videoSchema} />
      <div className="container mx-auto px-4">
        <h1>Vídeos Técnicos</h1>
        
        {/* Category Filter */}
        <div className="flex gap-4 mb-8">
          <button>Todos</button>
          <button>Manutenção</button>
          <button>Instalação</button>
          <button>Tutoriais</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <article key={video.id} className="bg-card rounded-lg overflow-hidden shadow-md">
              <YouTubeEmbed
                videoId={video.youtubeId}
                title={video.title}
              />
              <div className="p-6">
                <span className="text-primary text-sm font-semibold">
                  {video.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-2">
                  {video.title}
                </h2>
                <p className="text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};
```

### Performance Considerations

✅ **Lazy Loading:** Thumbnail shown first, iframe loaded on click  
✅ **YouTube No-Cookie Domain:** Uses `youtube-nocookie.com` for privacy  
✅ **Thumbnail Preload:** Uses YouTube's thumbnail service  
✅ **Reduced Bandwidth:** Only loads iframe when user clicks play  

---

## Content Management Strategy

### Current Approach: TypeScript Files

**Pros:**
- ✅ Type-safe
- ✅ Fast (compiled)
- ✅ Version controlled in git
- ✅ No database needed
- ✅ Works well for ~100 pages

**Cons:**
- ❌ Requires technical knowledge to update
- ❌ Requires rebuild to see changes
- ❌ Not ideal for non-technical content editors

### Scaling Decision Matrix

| Content Volume | Recommended Approach |
|----------------|---------------------|
| < 50 pages | TypeScript files (current) |
| 50-200 pages | Markdown + Frontmatter |
| 200+ pages | Headless CMS |
| Frequent updates by non-devs | Headless CMS |

### Option 1: Keep TypeScript (Recommended for Now)

**When to use:** 
- Small team
- Infrequent content updates
- Technical team handles content

**How to make it easier:**
1. Create content templates
2. Document the process clearly
3. Use consistent naming conventions

```bash
# Quick script to create new blog post
npm run create:blog "My New Post Title"
# → creates src/data/blog/my-new-post-title.ts from template
```

### Option 2: Markdown + Frontmatter (Medium Scale)

**When to use:**
- Growing content volume (50-200 pages)
- Semi-technical team
- Want version control
- Need simpler editing

**Setup:**
```bash
npm install gray-matter remark remark-html
```

**Implementation:**
```typescript
// src/utils/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostBySlug(slug: string) {
  const fullPath = path.join('src/content/blog', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  return {
    slug,
    content: processedContent.toString(),
    ...data
  };
}
```

**Workflow:**
1. Writer creates `.md` file in `src/content/blog/`
2. Git commit
3. Deploy triggers rebuild
4. Content goes live

### Option 3: Headless CMS (Large Scale)

**When to use:**
- 200+ pages
- Non-technical content editors
- Need preview before publish
- Multiple content editors
- Want content scheduling

#### Recommended Options

**1. Contentful (Easiest)**
- ✅ Great UI for non-technical users
- ✅ Preview mode
- ✅ Good TypeScript SDK
- ✅ Free tier: 25k records
- ❌ Can get expensive at scale

**Setup:**
```bash
npm install contentful
```

```typescript
// src/lib/contentful.ts
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate'
  });
  
  return entries.items.map(item => ({
    slug: item.fields.slug,
    title: item.fields.title,
    content: item.fields.content,
    // ...
  }));
}
```

**2. Sanity.io (Most Flexible)**
- ✅ Open source
- ✅ Real-time collaboration
- ✅ Customizable studio
- ✅ Free tier: 3 users
- ❌ More setup required

**3. Strapi (Self-hosted)**
- ✅ Open source
- ✅ Self-hosted = no vendor lock-in
- ✅ Full control
- ❌ Need to host it yourself
- ❌ More maintenance

### Recommendation

**For HiComp:**

**Phase 1 (Now - 50 posts):** Keep TypeScript files  
→ Fast, no extra dependencies, type-safe

**Phase 2 (50-100 posts):** Consider Markdown  
→ Easier for semi-technical editors, still version controlled

**Phase 3 (100+ posts or non-tech editors):** Evaluate Contentful  
→ Non-technical friendly, preview mode, scalable

---

## SEO Best Practices

### Meta Tags Checklist (Per Page)

Use `SEOEnhanced` component for all pages:

```tsx
<SEOEnhanced
  title="Page Title | HiComp" // 50-60 chars
  description="Compelling description with keywords" // 150-160 chars
  keywords="keyword1, keyword2, long-tail keyword"
  canonical="/page-url"
  structuredData={schemaObject}
  ogType="article" // or "website"
/>
```

### Structured Data Schema

Always include in `@graph`:
1. **Breadcrumbs** (every page except home)
2. **WebPage** or **Article**
3. **Organization** (main pages)
4. **FAQPage** (if FAQs present)
5. **VideoObject** (if video content)

Example full schema:
```typescript
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: "Article", url: "/blog/slug" }
    ]),
    createArticleSchema({
      headline: "Title",
      description: "Description",
      datePublished: "2026-05-14",
      dateModified: "2026-05-14",
      author: "HiComp",
      image: "/image.webp",
      url: "/blog/slug"
    }),
    faqSchema(faqs)
  ]
};
```

### Internal Linking Strategy

**In blog posts:**
- Link to related products/services
- Link to other blog posts
- Link to case studies
- Link to contact page in CTAs

**Anchor text:**
```tsx
// Good (descriptive)
<Link to="/cilindros-hidraulicos">
  cilindros hidráulicos Parker
</Link>

// Avoid (generic)
<Link to="/cilindros-hidraulicos">
  clique aqui
</Link>
```

### Image Optimization

```tsx
// Use WebP format
<img 
  src="/assets/image.webp"
  alt="Descriptive alt text with keywords"
  loading="lazy" // All images below fold
  width="800"
  height="600"
/>
```

### Performance Tips

1. **Lazy load routes:**
```tsx
const Blog = lazy(() => import('./pages/Blog'));
```

2. **Lazy load images:**
```tsx
loading="lazy"
```

3. **Optimize images:**
```bash
# Convert to WebP
npm install sharp
# Use in build process
```

4. **Code splitting:**
Already done via React.lazy in `App.tsx`

---

## Code Examples

### Complete Type Definitions

```typescript
// src/types/content.ts

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string; // HTML string
  author: string;
  date: string; // ISO 8601
  dateModified?: string;
  category: string;
  tags: string[];
  heroImage: string;
  keywords: string;
  faqs?: FAQ[];
  relatedPosts?: string[]; // slugs
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: string[];
  productsUsed: string[];
  date: string;
  tags: string[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  date: string;
  duration?: string; // ISO 8601: "PT10M30S"
  tags: string[];
}
```

### Reusable Schema Functions

```typescript
// src/utils/contentSchemas.ts

export function createBlogPostingSchema(post: BlogPost) {
  return {
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.heroImage,
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
    "author": {
      "@type": "Organization",
      "name": "HiComp Hidráulica"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HiComp Hidráulica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hicomphidraulica.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hicomphidraulica.com.br/blog/${post.slug}`
    },
    "keywords": post.keywords,
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length
  };
}

export function createVideoObjectSchema(video: Video) {
  return {
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    "uploadDate": video.date,
    "duration": video.duration,
    "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
    "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
    "publisher": {
      "@type": "Organization",
      "name": "HiComp Hidráulica"
    }
  };
}
```

### Content Workflow Documentation

#### How to Add a New Blog Post

**Step 1:** Create new file:
```bash
touch src/data/blog/my-new-post.ts
```

**Step 2:** Use this template:
```typescript
import type { BlogPost } from '@/types/content';

const post: BlogPost = {
  slug: 'my-new-post',
  title: 'Post Title',
  description: 'Short description',
  content: `
    <h2>Section Title</h2>
    <p>Content with <strong>keywords</strong>...</p>
  `,
  author: 'Equipe HiComp',
  date: '2026-05-14',
  category: 'Manutenção',
  tags: ['tag1', 'tag2'],
  heroImage: '/assets/blog/my-new-post-hero.webp',
  keywords: 'keyword1, keyword2, long tail keyword',
  faqs: [
    {
      question: 'Question?',
      answer: 'Answer...'
    }
  ]
};

export default post;
```

**Step 3:** Add to index:
```typescript
// src/data/blogData.ts
import myNewPost from './blog/my-new-post';

export const blogPosts = [
  myNewPost,
  // ... other posts
];
```

**Step 4:** Commit and deploy

#### How to Add a Case Study

Similar to blog post:
```typescript
// src/data/caseStudies/case-slug.ts
const caseStudy: CaseStudy = {
  // ... fields
};

export default caseStudy;
```

Add to `src/data/caseStudiesData.ts`:
```typescript
import caseSlug from './caseStudies/case-slug';

export const caseStudies = [caseSlug, ...];
```

#### How to Add a Video

```typescript
// src/data/videos.ts
export const videos: Video[] = [
  {
    id: 'unique-id',
    title: 'Video Title',
    description: 'Description',
    youtubeId: 'ABC123', // From YouTube URL
    category: 'Tutorial',
    date: '2026-05-14',
    duration: 'PT10M30S', // 10 min 30 sec
    tags: ['tag1', 'tag2']
  },
  // ... more videos
];
```

---

## Implementation Checklist

### Blog System
- [ ] Create type definitions (`src/types/content.ts`)
- [ ] Create blog data structure (`src/data/blog/`)
- [ ] Create Blog listing page (`src/pages/Blog.tsx`)
- [ ] Create BlogPost detail page (`src/pages/blog/BlogPost.tsx`)
- [ ] Add routes to `App.tsx`
- [ ] Create schema utilities (`src/utils/contentSchemas.ts`)
- [ ] Add to sitemap
- [ ] Test SEO with Rich Results Test

### Case Studies
- [ ] Create case study type definitions
- [ ] Create data structure (`src/data/caseStudies/`)
- [ ] Create CaseStudies listing page
- [ ] Create CaseStudy detail page
- [ ] Add routes
- [ ] Add schema markup
- [ ] Test

### FAQ Expansion
- [ ] Identify pages needing FAQs
- [ ] Create FAQ content for each service/product page
- [ ] Add FAQSection components
- [ ] Ensure FAQPage schema included
- [ ] Test with Rich Results Test

### Video Integration
- [ ] Create YouTubeEmbed component
- [ ] Create video data structure
- [ ] Update Videos page to use YouTube embeds
- [ ] Add VideoObject schema
- [ ] Test performance (lazy loading)

### Content Management
- [ ] Document content creation workflow
- [ ] Create content templates
- [ ] (Optional) Set up markdown workflow
- [ ] (Future) Evaluate CMS when needed

---

## Testing & Validation

### SEO Validation Tools

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results
   - Test each content type (blog, case study, FAQ, video)

2. **Schema Markup Validator:**
   https://validator.schema.org/
   - Validate JSON-LD structured data

3. **PageSpeed Insights:**
   https://pagespeed.web.dev/
   - Check Core Web Vitals
   - Test mobile performance

### Content Checklist (Per Page)

- [ ] H1 tag with target keyword
- [ ] Meta title (50-60 chars) with keyword
- [ ] Meta description (150-160 chars) compelling CTA
- [ ] Canonical URL set
- [ ] Structured data (Article/WebPage/FAQ)
- [ ] Breadcrumbs with schema
- [ ] Alt text on all images
- [ ] Internal links (3-5 per page)
- [ ] External CTA (contact, quote)
- [ ] Mobile responsive
- [ ] Fast load time (< 3s)

---

## Next Steps

1. **Phase 1 - Foundation (Week 1-2)**
   - Set up blog structure
   - Create first 5 blog posts
   - Test SEO implementation

2. **Phase 2 - Expansion (Week 3-4)**
   - Add case studies
   - Expand FAQs on service pages
   - Integrate YouTube videos

3. **Phase 3 - Optimization (Week 5-6)**
   - Monitor analytics
   - Optimize based on performance
   - Plan content calendar

4. **Phase 4 - Scale (Month 2+)**
   - Evaluate CMS need
   - Create more content
   - Link building strategy

---

## Support & References

**Documentation:**
- `README-SEO.md` - Current SEO implementation
- `src/utils/seoSchemas.ts` - Schema utilities
- `src/utils/structuredData.ts` - Article/FAQ schemas

**Components:**
- `src/components/SEOEnhanced.tsx` - SEO wrapper
- `src/components/FAQSection.tsx` - FAQ component
- `src/components/Breadcrumbs.tsx` - Breadcrumbs

**Examples:**
- `src/pages/informacoes/InfoDetail.tsx` - Dynamic content page
- `src/pages/Videos.tsx` - Video gallery
- `src/pages/FAQ.tsx` - FAQ page

---

**Questions or Issues?**  
Contact the development team or refer to the project documentation.

**Last Updated:** May 14, 2026  
**Version:** 1.0  
**Maintained by:** Development Team
