import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Gallery = () => {
  const instagramHandle = "giolab_iphonefix";

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
          {/* Instagram Feed Widget - SnapWidget */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-background">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
              <div className="bg-background p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">@{instagramHandle}</p>
                      <p className="text-sm text-muted-foreground">Giolab - Assistenza Smartphone</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={handleInstagramClick}
                    className="bg-giolab-blue hover:bg-giolab-blue-dark text-white font-semibold"
                  >
                    Segui
                  </Button>
                </div>

                {/* Instagram Feed Embed */}
                <div className="w-full rounded-xl overflow-hidden bg-muted/30">
                  <iframe
                    src={`https://snapwidget.com/embed/${instagramHandle}`}
                    className="snapwidget-widget w-full border-0"
                    style={{ minHeight: "500px" }}
                    title="Instagram Feed"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 text-center">
                  <Button
                    variant="ghost"
                    onClick={handleInstagramClick}
                    className="text-giolab-blue hover:text-giolab-blue-dark font-medium"
                  >
                    Vedi tutte le foto su Instagram →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA per Instagram */}
          <div className="text-center bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-3">Resta aggiornato sui nostri lavori</h3>
            <p className="text-muted-foreground mb-6">
              Seguici su Instagram per vedere le nostre ultime riparazioni, novità e offerte speciali
            </p>
            <Button
              size="lg"
              onClick={handleInstagramClick}
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-semibold border-0 shadow-lg"
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
