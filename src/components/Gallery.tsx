import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const instagramHandle = "giolab_iphonefix";

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="galleria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <Instagram className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Seguici su Instagram</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Scopri il nostro lavoro quotidiano, le riparazioni che effettuiamo e resta aggiornato su novità e offerte speciali
            </p>
          </div>
          
          <Button
            size="lg"
            onClick={handleInstagramClick}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-semibold border-0 shadow-lg text-lg px-8 py-6"
          >
            <Instagram className="mr-3 h-6 w-6" />
            Visita @{instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
