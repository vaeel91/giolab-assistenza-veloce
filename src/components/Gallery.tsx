import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const instagramHandle = "giolab_iphonefix";

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="galleria" className="py-8 md:py-12">
      <div className="h-full flex flex-col justify-center">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <Instagram className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Seguici su Instagram</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 px-4">
              Scopri il nostro lavoro e resta aggiornato su novità e offerte
            </p>
          </div>
          
          <Button
            size="lg"
            onClick={handleInstagramClick}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-semibold border-0 shadow-lg px-6 py-5"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Visita @{instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
