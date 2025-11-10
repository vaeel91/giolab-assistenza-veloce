import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const instagramHandle = "giolab_iphonefix";
  
  // Array di foto placeholder - queste andrebbero sostituite con foto reali dal profilo Instagram
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=800&fit=crop",
      alt: "Riparazione iPhone in corso",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1592286927505-0fd2b1491e26?w=800&h=800&fit=crop",
      alt: "Smartphone riparato",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=800&fit=crop",
      alt: "Riparazione display",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&h=800&fit=crop",
      alt: "Laboratorio Giolab",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&h=800&fit=crop",
      alt: "Componenti e ricambi",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
      alt: "Telefoni ricondizionati",
    },
  ];

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank");
  };

  return (
    <section id="galleria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Galleria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Scopri il nostro lavoro attraverso le foto del nostro laboratorio e delle riparazioni
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleInstagramClick}
            className="border-2 hover:bg-giolab-blue hover:text-white hover:border-giolab-blue transition-all"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Seguici su Instagram
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Instagram Embed Widget */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-2 border-border">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
              <div className="bg-background p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">@{instagramHandle}</p>
                      <p className="text-sm text-muted-foreground">Giolab</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={handleInstagramClick}
                    className="bg-giolab-blue hover:bg-giolab-blue-dark text-white"
                  >
                    Segui
                  </Button>
                </div>

                {/* Grid di immagini */}
                <div className="grid grid-cols-3 gap-1">
                  {galleryImages.map((image) => (
                    <Card
                      key={image.id}
                      className="aspect-square overflow-hidden border-0 cursor-pointer group"
                      onClick={handleInstagramClick}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <Button
                    variant="ghost"
                    onClick={handleInstagramClick}
                    className="text-giolab-blue hover:text-giolab-blue-dark"
                  >
                    Vedi altre foto su Instagram →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA per Instagram */}
          <div className="text-center bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Resta aggiornato sui nostri lavori</h3>
            <p className="text-muted-foreground mb-6">
              Seguici su Instagram per vedere le nostre ultime riparazioni, novità e offerte speciali
            </p>
            <Button
              size="lg"
              onClick={handleInstagramClick}
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-semibold border-0"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Seguici su @{instagramHandle}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
