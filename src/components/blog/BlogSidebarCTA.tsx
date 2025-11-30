import { Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Sidebar CTA per articoli blog
 * Mostra un box fisso con invito all'azione per contattare Giolab
 */
export const BlogSidebarCTA = () => {
  const phoneNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Ho letto il vostro articolo e vorrei informazioni sulla riparazione.");

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <aside className="hidden lg:block w-80 flex-shrink-0">
      <div className="sticky top-24 z-40 space-y-6">
        {/* CTA Card */}
        <Card className="border-2 border-giolab-blue/20 bg-gradient-to-br from-giolab-blue/5 to-giolab-blue-light/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl text-giolab-blue flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Hai bisogno di questa riparazione?
            </CardTitle>
            <CardDescription className="text-base">
              Contattaci subito per un preventivo gratuito e senza impegno!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleCall}
              className="w-full bg-giolab-blue hover:bg-giolab-blue-dark text-white font-semibold py-6 text-base"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Chiamaci Ora
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-6 text-base"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Scrivici su WhatsApp
            </Button>
            
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Giolab Assemini</strong>
                <br />
                Via Carmine 20, 09032 Assemini (CA)
                <br />
                <a href="tel:+393406970686" className="text-giolab-blue hover:underline">
                  340 69 70 686
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Info rapide */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Perché scegliere Giolab?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-giolab-blue">✓</span>
              <span>Riparazioni rapide in 1 ora</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-giolab-blue">✓</span>
              <span>Garanzia 12 mesi</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-giolab-blue">✓</span>
              <span>Ricambi certificati</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-giolab-blue">✓</span>
              <span>Preventivo gratuito</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};
