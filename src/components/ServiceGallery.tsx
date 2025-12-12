import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    alt: "Riparazione display iPhone completata - Giolab Assemini",
    caption: "Display iPhone 14 Pro"
  },
  {
    src: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
    alt: "Sostituzione schermo smartphone - Giolab Assemini",
    caption: "Schermo Samsung S23"
  },
  {
    src: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop",
    alt: "Riparazione vetro iPhone - Giolab Assemini",
    caption: "Vetro iPhone 13"
  },
  {
    src: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
    alt: "Lavoro di riparazione completato - Giolab Assemini",
    caption: "iPhone 12 Pro Max"
  },
];

const ServiceGallery = () => {
  const instagramHandle = "giolab_iphonefix";

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-giolab-gray/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              I Nostri Lavori
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guarda alcuni dei nostri lavori recenti. Seguici su Instagram per vedere tutti gli aggiornamenti!
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={handleInstagramClick}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  aspectRatio="square"
                  imgClassName="group-hover:scale-110 transition-transform duration-500"
                  rootMargin="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                    <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                      <ExternalLink className="h-3 w-3" />
                      <span>Vedi su Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-semibold border-0 shadow-lg"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Vedi tutti i lavori su @{instagramHandle}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
