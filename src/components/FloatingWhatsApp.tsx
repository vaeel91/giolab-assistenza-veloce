import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Vorrei richiedere informazioni sui vostri servizi.");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-35 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 p-0"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white" />
    </Button>
  );
};

export default FloatingWhatsApp;
