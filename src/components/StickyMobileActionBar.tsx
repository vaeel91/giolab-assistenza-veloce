import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Barra d'azione flottante mobile-only
 * Visibile SOLO su dispositivi mobile (<768px)
 * Posizionata in basso con due CTA principali
 */
const StickyMobileActionBar = () => {
  const phoneNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Ho il telefono rotto e vorrei un preventivo.");

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-lg"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleCall}
            size="lg"
            className="w-full bg-giolab-blue hover:bg-giolab-blue/90 text-white font-semibold text-base py-6 shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Chiama Ora
          </Button>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base py-6 shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileActionBar;
