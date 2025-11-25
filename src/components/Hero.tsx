import { Button } from "@/components/ui/button";
import { Phone, FileText, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";
import giolabLogo from "@/assets/giolab-logo-new.png";
import { QuoteRequestDialog } from "./QuoteRequestDialog";

const Hero = () => {
  const whatsappNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Vorrei richiedere informazioni sui vostri servizi.");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=80&w=2070&auto=format&fit=crop"
          alt="Laboratorio Giolab Assemini"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-giolab-blue opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-giolab-blue-light opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-1 md:space-y-2">
          {/* Logo */}
          <div className="flex justify-center -mb-8 md:-mb-24">
            <img
              src={giolabLogo} 
              alt="Giolab Assemini - Centro assistenza riparazione iPhone, smartphone, PC e console" 
              className="h-40 md:h-52 lg:h-64 w-auto animate-zoom-in"
              loading="eager"
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
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center pt-3 md:pt-4 px-2 sm:px-0 animate-fade-in-up delay-300">
            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsApp}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto flex items-center justify-center"
            >
              <Phone className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="hidden xs:inline sm:inline">Prenota su </span>WhatsApp
            </Button>
            <QuoteRequestDialog>
              <Button
                variant="outline"
                size="lg"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue flex items-center justify-center"
              >
                <FileText className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="hidden xs:inline sm:inline">Richiedi </span>Preventivo
              </Button>
            </QuoteRequestDialog>
            <Link to="/trova-modello-dispositivo">
              <Button
                variant="outline"
                size="lg"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue flex items-center justify-center"
              >
                <Search className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="hidden xs:inline sm:inline">Trova </span>Modello
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('blog');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
              }}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue flex items-center justify-center"
            >
              <BookOpen className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span className="hidden xs:inline sm:inline">Leggi </span>Articoli
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
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-zoom-in {
          animation: zoom-in 1s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-fill-mode: both;
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
