import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, Tag, CheckCircle } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { topics } from "@/data/topicsData";
import type { TopicContent } from "@/data/topicContents";
import { useEffect } from "react";
import { createArticleSchema, createBreadcrumbSchema, faqSchema } from "@/utils/structuredData";

const seoOverrides: Record<string, { title: string; description: string; keywords: string }> = {
  "motor-hidraulico-rexroth": {
    title: "Motor Hidráulico Rexroth em São Paulo",
    description: "Motor hidráulico Rexroth para aplicações industriais, fornecimento, manutenção e suporte técnico em São Paulo com a HiComp.",
    keywords: "motor hidráulico rexroth, motor hidráulico rexroth são paulo, peças hidráulicas rexroth, manutenção rexroth, componentes hidráulicos são paulo",
  },
  "valvula-direcional-parker": {
    title: "Válvula Direcional Parker em São Paulo",
    description: "Válvula direcional Parker para sistemas hidráulicos industriais, fornecimento e suporte técnico em São Paulo com a HiComp.",
    keywords: "válvula direcional parker, valvula direcional parker são paulo, válvula hidráulica parker, peças hidráulicas parker, componentes hidráulicos são paulo",
  },
  "valvula-hidraulica-rexroth": {
    title: "Válvula Hidráulica Rexroth em São Paulo",
    description: "Válvula hidráulica Rexroth com atendimento técnico, fornecimento e manutenção para indústria em São Paulo com a HiComp.",
    keywords: "válvula hidráulica rexroth, valvula hidraulica rexroth são paulo, peças hidráulicas rexroth, componentes hidráulicos são paulo, manutenção hidráulica rexroth",
  },
  "valvula-hidraulica-vickers": {
    title: "Válvula Hidráulica Vickers em São Paulo",
    description: "Válvula hidráulica Vickers para aplicações industriais, manutenção e fornecimento técnico em São Paulo com a HiComp.",
    keywords: "válvula hidráulica vickers, valvula hidraulica vickers são paulo, válvula vickers, peças hidráulicas vickers, componentes hidráulicos são paulo",
  },
};

type TopicContentsModule = {
  topicContents: Record<string, TopicContent>;
};

type FormState = "idle" | "submitting" | "success";

const InfoDetail = () => {
  const { topic } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detailedContent, setDetailedContent] = useState<TopicContent | null>(null);
  const [hasFAQ, setHasFAQ] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [sidebarForm, setSidebarForm] = useState({ name: "", phone: "", message: "" });
  const [sidebarErrors, setSidebarErrors] = useState<Partial<typeof sidebarForm>>({});

  // Find current topic from data
  const currentTopicData = topics.find(t => t.id === topic);

  // Resolve relatedTopics IDs to full Topic objects
  const relatedTopicObjects = useMemo(() => {
    if (!currentTopicData?.relatedTopics?.length) return [];
    return currentTopicData.relatedTopics
      .map(id => topics.find(t => t.id === id))
      .filter(Boolean) as typeof topics;
  }, [currentTopicData]);

  // Resolve hashed asset URLs at build time; eager so image paths from topicContents resolve instantly
  const imageMap = useMemo(() => {
    const modules = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,webp,svg}", { eager: true }) as Record<string, { default: string } | string>;
    const resolved: Record<string, string> = {};
    for (const path in modules) {
      const mod = modules[path];
      resolved[path] = typeof mod === "string" ? mod : mod.default;
    }
    return resolved;
  }, []);

  useEffect(() => {
    if (!currentTopicData) {
      setDetailedContent(null);
      setHasFAQ(false);
      return;
    }

    let mounted = true;
    const topicId = currentTopicData.id;
    (async () => {
      try {
        // Try individual topic file first (smaller, faster); fall back to full bundle
        let content: TopicContent | null = null;
        try {
          const individualFiles = import.meta.glob("/src/data/topics/*.ts") as Record<string, () => Promise<{ content: TopicContent }>>;
          const filePath = `/src/data/topics/${topicId}.ts`;
          if (individualFiles[filePath]) {
            const mod = await individualFiles[filePath]();
            content = mod.content ?? null;
          }
        } catch {}

        if (!content) {
          const mod = await import("@/data/topicContents");
          const contents = (mod as TopicContentsModule).topicContents;
          content = contents[topicId] ?? null;
        }

        if (!mounted) return;
        setDetailedContent(content);
        setHasFAQ(!!(content?.faq && content.faq.length > 0));
      } catch (e) {
        console.warn("Failed to load topic content:", e);
      }
    })();

    return () => { mounted = false; };
  }, [currentTopicData]);

  if (!currentTopicData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Tópico não encontrado</h1>
            <Link to="/informacoes" className="text-primary hover:underline">
              Voltar para Informações
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related topics: prefer explicit relatedTopics field, fallback to category/tag matching
  const relatedTopics = useMemo(() => {
    if (!currentTopicData) return [];
    if (currentTopicData.relatedTopics?.length) {
      return currentTopicData.relatedTopics
        .map(id => topics.find(t => t.id === id))
        .filter(Boolean) as typeof topics;
    }
    return topics
      .filter(t =>
        t.id !== currentTopicData.id &&
        (t.category === currentTopicData.category ||
          t.tags.some(tag => currentTopicData.tags.includes(tag)))
      )
      .slice(0, 6);
  }, [currentTopicData]);

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Partial<typeof sidebarForm> = {};
    if (!sidebarForm.phone.trim()) errs.phone = "Informe seu telefone";
    if (!sidebarForm.message.trim()) errs.message = "Descreva sua necessidade";
    if (Object.keys(errs).length > 0) { setSidebarErrors(errs); return; }
    setFormState("submitting");
    const topicTitle = currentTopicData?.title || "hidráulica";
    const msg = `Olá! Vi o artigo sobre *${topicTitle}* no site.%0ANome: ${sidebarForm.name || "Não informado"}.%0ATelefone: ${sidebarForm.phone}.%0A${sidebarForm.message}`;
    window.open(`https://wa.me/5511992465636?text=${msg}`, "_blank");
    setFormState("success");
  };

  const handleSidebarChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSidebarForm(prev => ({ ...prev, [name]: value }));
    if (sidebarErrors[name as keyof typeof sidebarErrors]) {
      setSidebarErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Generate SEO data
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Informações", url: "/informacoes" },
    { name: currentTopicData.title, url: `/informacoes/${currentTopicData.id}` }
  ]);

  const articleData = createArticleSchema(
    currentTopicData.title,
    detailedContent?.introduction || `Informações completas sobre ${currentTopicData.title}`,
    "2025-01-01",
    currentTopicData.image
  );

  const faqSchemaData = hasFAQ ? faqSchema(detailedContent.faq!) : null;
  const seoOverride = seoOverrides[currentTopicData.id];
  const seoTitle = seoOverride?.title || currentTopicData.title;
  const seoDescription =
    seoOverride?.description ||
    detailedContent?.introduction ||
    `Informações completas sobre ${currentTopicData.title}. Especialistas em sistemas hidráulicos industriais.`;
  const seoKeywords =
    seoOverride?.keywords ||
    `${currentTopicData.title}, ${currentTopicData.tags.join(", ")}, hidráulica, manutenção, ${detailedContent?.brands?.join(", ") || ""}`;

  return (
    <>
      <SEOEnhanced
        title={seoTitle}
        description={typeof seoDescription === "string" ? seoDescription.substring(0, 160) : seoDescription}
        keywords={seoKeywords}
        canonical={`/informacoes/${currentTopicData.id}`}
        ogImage={currentTopicData.image}
        ogType="article"
        structuredData={faqSchemaData ? [breadcrumbData, articleData, faqSchemaData] : [breadcrumbData, articleData]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Banner CTA Fixo */}
        <div className="bg-primary text-primary-foreground py-3 sticky top-[108px] z-40 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="secondary" size="sm" asChild>
                <Link to="/contato">Faça seu orçamento agora mesmo</Link>
              </Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href="https://wa.me/5511992465636" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp">
                  <FaWhatsapp className="mr-2 inline h-4 w-4" />
                  Faça seu orçamento por Whatsapp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <main className="flex-1 py-16">
          <article className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-smooth flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <span>»</span>
              <Link to="/informacoes" className="hover:text-primary transition-smooth">
                Informações
              </Link>
              <span>»</span>
              <span className="text-foreground">{currentTopicData.title}</span>
            </nav>

            {/* Botão Voltar */}
            <div className="mb-6">
              <Link to="/informacoes">
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Voltar para Centro de Recursos
                </Button>
              </Link>
            </div>

            {/* Imagem Principal */}
            <div className="mb-8">
              <img
                src={currentTopicData.image}
                alt={`${currentTopicData.title} — componentes hidráulicos industriais HiComp São Paulo`}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-md"
                loading="eager"
                width="1200"
                height="400"
                itemProp="image"
              />
            </div>

            {/* Galeria de Imagens Adicionais */}
            {detailedContent?.images && detailedContent.images.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {detailedContent.images.map((imagePath, idx) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-zoom-in group relative"
                      onClick={() => setSelectedImage(encodeURI(imageMap[imagePath] || imagePath))}
                    >
                      <img
                        src={encodeURI(imageMap[imagePath] || imagePath)}
                        alt={`${currentTopicData.title} - Imagem ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        loading="lazy"
                        width="300"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  aria-label="Fechar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <img
                  src={encodeURI(selectedImage)}
                  alt={currentTopicData.title}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Conteúdo principal - 70% */}
              <div className="lg:col-span-2 space-y-8">
                <header>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wide text-primary">
                    {currentTopicData.title}
                  </h1>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentTopicData.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                {/* Introdução */}
                {detailedContent?.introduction && (
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <p
                      className="text-lg leading-relaxed text-foreground font-medium"
                      dangerouslySetInnerHTML={{ __html: detailedContent.introduction }}
                    />
                  </div>
                )}

                {/* Conteúdo Principal — totalmente visível para SEO e leitores */}
                {detailedContent?.mainContent && detailedContent.mainContent.length > 0 && (
                  <section className="space-y-5" aria-label="Conteúdo técnico detalhado">
                    {detailedContent.mainContent.map((paragraph, idx) => (
                      <div
                        key={idx}
                        className="text-lg leading-relaxed text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </section>
                )}

                {/* Especificações Técnicas */}
                {detailedContent?.technicalSpecs && (
                  <section className="bg-card rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
                      Especificações Técnicas
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {detailedContent.technicalSpecs}
                    </p>
                  </section>
                )}

                {/* Aplicações */}
                {detailedContent?.applications && (
                  <section>
                    <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                      Principais Aplicações
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {detailedContent.applications.map((app, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <span className="text-primary font-bold text-xl">✓</span>
                          <span className="text-muted-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Marcas Trabalhadas */}
                {detailedContent?.brands && (
                  <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                      Marcas com as quais Trabalhamos
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {detailedContent.brands.map((brand, idx) => (
                        <Link
                          key={idx}
                          to={`/produtos/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                          className="px-4 py-2 bg-background border-2 border-primary/20 rounded-lg font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-all"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Manutenção */}
                {detailedContent?.maintenance && (
                  <section className="bg-card rounded-lg p-6 shadow-md border-l-4 border-primary">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                      Serviços de Manutenção
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {detailedContent.maintenance}
                    </p>
                    <Link to="/contato">
                      <Button className="w-full md:w-auto">
                        Solicitar Orçamento de Manutenção
                      </Button>
                    </Link>
                  </section>
                )}

                {/* FAQs */}
                {hasFAQ && <FAQSection faqs={detailedContent.faq!} />}

                {/* Links Internos Estratégicos */}
                <section className="bg-primary/5 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                    Conteúdos Relacionados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {relatedTopics.slice(0, 4).map((t) => (
                      <Link key={t.id} to={`/informacoes/${t.id}`} className="text-primary hover:underline text-sm">
                        → {t.title}
                      </Link>
                    ))}
                    {relatedTopics.length === 0 && (
                      <>
                        <Link to="/manutencao-bombas-hidraulicas" className="text-primary hover:underline text-sm">
                          → Manutenção de Bombas Hidráulicas
                        </Link>
                        <Link to="/valvulas-hidraulicas" className="text-primary hover:underline text-sm">
                          → Válvulas Hidráulicas em São Paulo
                        </Link>
                        <Link to="/cilindros-hidraulicos" className="text-primary hover:underline text-sm">
                          → Cilindros Hidráulicos Industriais
                        </Link>
                        <Link to="/assistencia-tecnica-industrial" className="text-primary hover:underline text-sm">
                          → Assistência Técnica Industrial
                        </Link>
                      </>
                    )}
                  </div>
                </section>

                {/* Publicações Relacionadas */}
                {relatedTopics.length > 0 && (
                  <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                      Outros Tópicos Relacionados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedTopics.map((related) => (
                        <Link
                          key={related.id}
                          to={`/informacoes/${related.id}`}
                          className="block bg-card hover:shadow-lg transition-smooth rounded-lg overflow-hidden group"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={related.image}
                              alt={`${related.title} - Informações técnicas`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                              loading="lazy"
                              width="400"
                              height="225"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">
                              {related.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {related.tags.slice(0, 3).map((tag, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar - 30% */}
              <aside className="lg:col-span-1 space-y-6">

                {/* Formulário de Contato Rápido */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-md sticky top-36">
                  {formState === "success" ? (
                    <div className="text-center py-4">
                      <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-300" />
                      <h4 className="text-lg font-bold mb-2">Mensagem enviada!</h4>
                      <p className="text-sm opacity-90">Continue a conversa pelo WhatsApp que acabou de abrir.</p>
                      <button
                        onClick={() => { setFormState("idle"); setSidebarForm({ name: "", phone: "", message: "" }); }}
                        className="mt-4 text-sm underline opacity-80 hover:opacity-100"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-lg font-bold mb-1 uppercase tracking-wide">
                        Solicite um Orçamento
                      </h4>
                      <p className="text-sm opacity-80 mb-4">
                        Fale com nossos especialistas sobre {currentTopicData.title.toLowerCase()}.
                      </p>
                      <form onSubmit={handleSidebarSubmit} noValidate className="space-y-3">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={sidebarForm.name}
                            onChange={handleSidebarChange}
                            placeholder="Seu nome (opcional)"
                            className="w-full rounded-md px-3 py-2 text-sm text-foreground bg-background/90 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={sidebarForm.phone}
                            onChange={handleSidebarChange}
                            placeholder="Seu telefone *"
                            aria-invalid={!!sidebarErrors.phone}
                            className={`w-full rounded-md px-3 py-2 text-sm text-foreground bg-background/90 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background ${sidebarErrors.phone ? "ring-2 ring-red-400" : ""}`}
                          />
                          {sidebarErrors.phone && (
                            <p role="alert" className="text-xs text-red-300 mt-1">{sidebarErrors.phone}</p>
                          )}
                        </div>
                        <div>
                          <textarea
                            name="message"
                            value={sidebarForm.message}
                            onChange={handleSidebarChange}
                            placeholder="Descreva sua necessidade *"
                            rows={3}
                            aria-invalid={!!sidebarErrors.message}
                            className={`w-full rounded-md px-3 py-2 text-sm text-foreground bg-background/90 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background resize-none ${sidebarErrors.message ? "ring-2 ring-red-400" : ""}`}
                          />
                          {sidebarErrors.message && (
                            <p role="alert" className="text-xs text-red-300 mt-1">{sidebarErrors.message}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          disabled={formState === "submitting"}
                          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] disabled:opacity-70 text-white font-semibold py-2.5 rounded-md transition-colors text-sm"
                        >
                          <FaWhatsapp className="h-4 w-4" />
                          {formState === "submitting" ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                        </button>
                      </form>
                    </>
                  )}
                </div>

                {/* Links Rápidos */}
                <div className="bg-card rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-wide">
                    Links Rápidos
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/produtos/parker" className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-1">
                        → Produtos Parker
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/rexroth" className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-1">
                        → Produtos Rexroth
                      </Link>
                    </li>
                    <li>
                      <Link to="/manutencao-bombas-hidraulicas" className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-1">
                        → Manutenção de Bombas Hidráulicas
                      </Link>
                    </li>
                    <li>
                      <Link to="/valvulas-hidraulicas" className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-1">
                        → Válvulas Hidráulicas
                      </Link>
                    </li>
                    <li>
                      <Link to="/empresa" className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-1">
                        → Sobre a HiComp
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InfoDetail;
