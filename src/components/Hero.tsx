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
    <header className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background image with gradient overlay - LCP optimized with picture element */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* WebP for modern browsers - Mobile */}
          <source
            srcSet="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=80&w=800&auto=format&fit=crop&fm=webp"
            media="(max-width: 768px)"
            type="image/webp"
          />
          {/* JPEG fallback - Mobile */}
          <source
            srcSet="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=80&w=800&auto=format&fit=crop"
            media="(max-width: 768px)"
            type="image/jpeg"
          />
          {/* WebP for modern browsers - Desktop */}
          <source
            srcSet="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=75&w=1440&auto=format&fit=crop&fm=webp"
            media="(min-width: 769px)"
            type="image/webp"
          />
          {/* JPEG fallback - Desktop */}
          <source
            srcSet="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=75&w=1440&auto=format&fit=crop"
            media="(min-width: 769px)"
            type="image/jpeg"
          />
          <img
            src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?q=75&w=1440&auto=format&fit=crop"
            alt="Laboratorio Giolab Assemini - Centro assistenza riparazione smartphone"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1440"
            height="810"
          />
        </picture>
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
              width="256"
              height="256"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Main heading - Mobile First UX */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-up">
            Riparazione iPhone e Smartphone ad Assemini e Cagliari in 1 Ora
            <span className="block text-giolab-blue mt-2 md:mt-3 text-xl md:text-3xl lg:text-4xl">Assistenza PC, Notebook e Console</span>
          </h1>

          {/* Subheading - Ottimizzato per leggibilità mobile */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Centro assistenza specializzato ad Assemini (CA) e Cagliari. Riparazioni rapide anche in 1 ora con garanzia 12 mesi. Ricambi certificati e preventivo gratuito.
          </p>

          {/* CTA buttons - Mobile compatto affiancato */}
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:gap-4 justify-center items-center pt-4 md:pt-6 px-2 sm:px-0 animate-fade-in-up delay-300 max-w-2xl mx-auto">
            {/* CTA PRINCIPALE - Richiedi Preventivo */}
            <QuoteRequestDialog>
              <Button
                variant="hero"
                size="sm"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6 h-auto flex items-center justify-center w-full font-semibold shadow-xl"
              >
                <FileText className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="hidden sm:inline">Richiedi </span>Preventivo
              </Button>
            </QuoteRequestDialog>
            
            {/* CTA secondari */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue flex items-center justify-center w-full"
            >
              <Phone className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
              WhatsApp
            </Button>

            {/* Bottone Servizi */}
            <Link to="/servizi" className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 h-auto border-2 hover:border-giolab-blue hover:text-giolab-blue flex items-center justify-center w-full"
              >
                <Search className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                Servizi
              </Button>
            </Link>
          </div>
          
          {/* Link secondari - visibili solo su desktop */}
          <div className="hidden md:flex flex-row gap-3 justify-center items-center pt-3 animate-fade-in-up delay-400">
            <Link to="/trova-modello-dispositivo">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm px-4 py-2 hover:text-giolab-blue"
              >
                <Search className="mr-2 h-4 w-4" />
                Trova Modello
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const element = document.getElementById('blog');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
              }}
              className="text-sm px-4 py-2 hover:text-giolab-blue"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Leggi Articoli
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
    </header>
  );
};

export default Hero;
