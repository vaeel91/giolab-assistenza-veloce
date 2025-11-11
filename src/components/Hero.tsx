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
    <section className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-giolab-gray to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-giolab-blue opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-giolab-blue-light opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-2 md:mb-4 animate-fade-in">
            <img 
              src={giolabLogo} 
              alt="Giolab Assemini - Centro assistenza riparazione iPhone, smartphone, PC e console" 
              className="h-20 md:h-28 lg:h-32 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-up">
            Riparazione iPhone e Smartphone ad Assemini
            <span className="block text-giolab-blue mt-1 md:mt-2">Assistenza PC, Notebook e Console</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Centro assistenza specializzato ad Assemini (CA) e Cagliari. Riparazioni rapide anche in 1 ora con garanzia 12 mesi. Ricambi certificati e preventivo gratuito.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-row gap-1 sm:gap-4 justify-center items-center pt-3 md:pt-4 px-2 sm:px-0 animate-fade-in-up delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsApp}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-1.5 py-2.5 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto"
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              <span className="hidden xs:inline sm:inline">Prenota su </span>WhatsApp
            </Button>
            <QuoteRequestDialog>
              <Button
                variant="outline"
                size="lg"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-1.5 py-2.5 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue"
              >
                <FileText className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="hidden xs:inline sm:inline">Richiedi </span>Preventivo
              </Button>
            </QuoteRequestDialog>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-1.5 py-2.5 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue"
            >
              <Smartphone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              Chiama<span className="hidden xs:inline sm:inline"> Ora</span>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4 md:pt-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-giolab-blue">10+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">Anni di esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-giolab-blue">12</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">Mesi di garanzia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-giolab-blue">1h</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">Riparazioni rapide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce hidden lg:block">
        <div className="w-10 h-6 border-2 border-giolab-blue rounded-full flex items-center justify-center rotate-90">
          <div className="w-3 h-1 bg-giolab-blue rounded-full ml-2 animate-pulse"></div>
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
