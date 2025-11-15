/**
 * LabGallery Component
 * Galleria fotografica responsive del laboratorio GioLab
 * 
 * Features:
 * - Griglia responsive (mobile: 1 col, tablet: 2 col, desktop: 3 col)
 * - Lightbox per visualizzare immagini a schermo intero
 * - Animazioni smooth on hover
 * - Lazy loading per performance
 */

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

// Placeholder images - sostituire con foto reali del laboratorio
const labImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    alt: "Banco di lavoro tecnico GioLab",
    title: "Postazione Tecnica Professionale"
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    alt: "Strumenti di precisione per riparazione iPhone",
    title: "Strumentazione di Precisione"
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    alt: "Area diagnosi smartphone GioLab",
    title: "Area Diagnosi e Testing"
  },
  {
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    alt: "Magazzino ricambi certificati",
    title: "Magazzino Ricambi Certificati"
  },
  {
    src: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
    alt: "Laboratorio riparazione iPhone Assemini",
    title: "Laboratorio GioLab Assemini"
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    alt: "Team tecnici GioLab al lavoro",
    title: "Il Nostro Team al Lavoro"
  }
];

const LabGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Il Nostro Laboratorio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scopri l'ambiente professionale dove ripariamo il tuo iPhone con attrezzature all'avanguardia
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <ZoomIn className="w-4 h-4" />
                    <span>Clicca per ingrandire</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Vuoi visitare il nostro laboratorio di persona?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="/#contatti">
                Prenota una Visita
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/dove-siamo">
                Come Raggiungerci
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-black/95 border-none">
          <DialogTitle className="sr-only">
            {selectedImage?.title || "Immagine galleria"}
          </DialogTitle>
          
          {selectedImage && (
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="relative w-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain animate-scale-in"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LabGallery;
