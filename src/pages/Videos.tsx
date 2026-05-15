import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOEnhanced from "@/components/SEOEnhanced";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/seoSchemas";

const Videos = () => {
  const videos = [
    {
      title: "Manutenção de Bombas Hidráulicas",
      description: "Aprenda as melhores práticas para manutenção de bombas hidráulicas Parker, Rexroth e Vickers",
      file: "/videos/videos-01.mov",
    },
    {
      title: "Instalação de Válvulas Direcionais",
      description: "Passo a passo completo para instalação correta de válvulas hidráulicas industriais",
      file: "/videos/videos-02.mp4",
    },
  ];

  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Vídeos Técnicos", url: "/videos" }
      ]),
      generateWebPageSchema(
        "Vídeos Técnicos de Hidráulica - HiComp",
        "Vídeos educativos sobre manutenção de bombas hidráulicas, instalação de válvulas e reparo de cilindros.",
        "/videos"
      ),
      {
        "@type": "VideoGallery",
        "name": "Vídeos Técnicos HiComp Hidráulica",
        "description": "Tutoriais e demonstrações de manutenção de sistemas hidráulicos industriais",
        "numberOfItems": videos.length
      }
    ]
  };

  return (
    <>
      <SEOEnhanced
        title="Vídeos de Manutenção Hidráulica | HiComp SP"
        description="Vídeos técnicos sobre manutenção de bombas hidráulicas Parker, Rexroth. Aprenda instalação de válvulas e reparo de cilindros industriais."
        keywords="vídeo manutenção bomba hidráulica, tutorial válvula hidráulica, como reparar cilindro hidráulico, vídeo hidráulica industrial"
        canonical="/videos"
        structuredData={videoSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-center">
              Vídeos Técnicos de Hidráulica
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              Confira nossos vídeos educativos sobre <strong>manutenção de bombas hidráulicas</strong>, 
              instalação de válvulas e reparo de cilindros para sistemas industriais
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video, index) => (
                <article
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover-lift"
                >
                  <div className="aspect-video bg-black">
                    {video.file && (
                      <video
                        src={video.file}
                        controls
                        className="w-full h-full object-cover"
                        title={video.title}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* SEO content section */}
            <div className="mt-16 max-w-4xl mx-auto bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Aprenda Manutenção de Sistemas Hidráulicos
              </h2>
              <p className="text-muted-foreground mb-4">
                Nossos vídeos técnicos foram desenvolvidos para ajudar profissionais e empresas 
                a entenderem melhor o funcionamento e a manutenção de <strong>bombas hidráulicas</strong>, 
                <strong> cilindros</strong> e <strong>válvulas</strong> das principais marcas do mercado.
              </p>
              <p className="text-muted-foreground">
                Para manutenção profissional, entre em contato com a HiComp Hidráulica: 
                <a href="tel:+551126195457" className="text-primary hover:underline ml-1">
                  (11) 2619-5457
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Videos;
