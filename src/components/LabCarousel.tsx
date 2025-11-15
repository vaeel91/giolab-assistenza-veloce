/**
 * LabCarousel Component
 * Carousel automatico delle immagini del laboratorio GioLab per homepage
 * 
 * Features:
 * - Autoplay con loop infinito
 * - Controlli prev/next
 * - Indicatori di navigazione
 * - Responsive e ottimizzato per performance
 */

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

// Immagini del laboratorio - sostituire con foto reali
const labImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
    alt: "Banco di lavoro tecnico GioLab Assemini",
    title: "Postazione Tecnica Professionale"
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
    alt: "Strumenti di precisione per riparazione iPhone",
    title: "Strumentazione di Precisione"
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop",
    alt: "Area diagnosi smartphone GioLab",
    title: "Area Diagnosi e Testing"
  },
  {
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=600&fit=crop",
    alt: "Magazzino ricambi certificati iPhone",
    title: "Magazzino Ricambi Certificati"
  },
  {
    src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&h=600&fit=crop",
    alt: "Laboratorio riparazione iPhone Assemini Cagliari",
    title: "Laboratorio GioLab Assemini"
  }
];

const LabCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Il Nostro Laboratorio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scopri dove ripariamo il tuo iPhone con tecnologie all'avanguardia ad Assemini
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {labImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none shadow-2xl overflow-hidden">
                    <CardContent className="p-0 relative">
                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay con titolo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                          <div>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                              {image.title}
                            </h3>
                            <p className="text-white/90 text-sm md:text-base">
                              GioLab Assemini - Centro Riparazione iPhone Certificato
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Controlli */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            📍 Via Carmine 20, Assemini (Cagliari) • ☎️ 340 69 70 686
          </p>
        </div>
      </div>
    </section>
  );
};

export default LabCarousel;
