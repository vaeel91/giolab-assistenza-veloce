import { Button } from "@/components/ui/button";
import { Smartphone, Phone, FileText } from "lucide-react";
import giolabLogo from "@/assets/giolab-logo.png";
import { QuoteRequestDialog } from "./QuoteRequestDialog";

const Hero = () => {
  const whatsappNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Vorrei richiedere informazioni sui vostri servizi.");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = "tel:+393406970686";
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-giolab-gray to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-giolab-blue opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-giolab-blue-light opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src={giolabLogo} alt="Giolab" className="h-32 md:h-48 lg:h-56 w-auto" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            Assistenza e vendita
            <span className="block text-giolab-blue mt-2">Smartphone, PC e Console</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Riparazioni professionali con garanzia fino a 12 mesi. Ricambi di alta qualità e preventivo gratuito.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-row gap-2 justify-center items-center pt-6 animate-fade-in-up delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-2 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto"
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              Prenota su WhatsApp
            </Button>
            <QuoteRequestDialog>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-2 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue"
              >
                <FileText className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Richiedi Preventivo
              </Button>
            </QuoteRequestDialog>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-2 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue"
            >
              <Smartphone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              Chiama Ora
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-3xl mx-auto animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-giolab-blue">10+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Anni di esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-giolab-blue">12</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Mesi di garanzia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-giolab-blue">1h</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Riparazioni rapide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-giolab-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-giolab-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
