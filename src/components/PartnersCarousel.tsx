import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vickersLogo from "@/assets/logos/vickers.webp";
import parkerLogo from "@/assets/logos/parker.webp";
import hdaLogo from "@/assets/logos/hda.webp";
import sauerDanfossLogo from "@/assets/logos/sauer-danfoss.webp";
import denisonLogo from "@/assets/logos/denison-hydraulics.webp";
import eatonLogo from "@/assets/logos/eaton.webp";
import rexrothLogo from "@/assets/logos/rexroth.webp";

const PartnersCarousel = () => {
  const partners = [
    { name: "Vickers", logo: vickersLogo, slug: "vickers" },
    { name: "Parker", logo: parkerLogo, slug: "parker" },
    { name: "HDA", logo: hdaLogo, slug: "hda" },
    { name: "Sauer Danfoss", logo: sauerDanfossLogo, slug: "sauer-danfoss" },
    { name: "Denison", logo: denisonLogo, slug: "denison" },
    { name: "Eaton", logo: eatonLogo, slug: "eaton" },
    { name: "Rexroth", logo: rexrothLogo, slug: "rexroth" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
          Nossos Fabricantes
        </h2>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner) => (
                  <Link
                    key={partner.name}
                    to={`/produtos/${partner.slug}`}
                    className="bg-card rounded-lg p-8 flex items-center justify-center shadow-md hover-lift transition-smooth"
                  >
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="h-16 w-auto object-contain"
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;