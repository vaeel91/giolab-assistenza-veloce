import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wrench, Users, Star, BookOpen, MapPin, HelpCircle, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: "home", label: "Home", icon: Home, link: "/#hero" },
  { id: "servizi", label: "Servizi", icon: Wrench, link: "/#servizi" },
  { id: "chi-siamo", label: "Chi Siamo", icon: Users, link: "/#chi-siamo" },
  { id: "testimonianze", label: "Recensioni", icon: Star, link: "/#testimonianze" },
  { id: "blog", label: "Blog", icon: BookOpen, link: "/#blog" },
  { id: "dove-siamo", label: "Dove Siamo", icon: MapPin, link: "/#dove-siamo" },
  { id: "faq", label: "FAQ", icon: HelpCircle, link: "/#faq" },
  { id: "contatti", label: "Contatti", icon: Phone, link: "/#contatti" },
];

const BlogNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determina quale sezione è attiva in base alla route corrente
  const getActiveSection = () => {
    const path = location.pathname;
    const hash = location.hash;

    // Se siamo sulla homepage, guarda l'hash
    if (path === "/" && hash) {
      const sectionId = hash.replace("#", "");
      return sectionId;
    }

    // Se siamo su una pagina blog, evidenzia "blog"
    if (path.startsWith("/blog")) {
      return "blog";
    }

    // Se siamo su una pagina servizi, evidenzia "servizi"
    if (path.startsWith("/servizi")) {
      return "servizi";
    }

    // Default: home
    return "home";
  };

  const activeSection = getActiveSection();

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-50 lg:hidden bg-giolab-blue hover:bg-giolab-blue-dark text-white shadow-lg rounded-full w-12 h-12 p-0 flex items-center justify-center"
        aria-label="Menu navigazione"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Navigation Menu */}
      <nav
        className={`fixed top-24 right-4 z-40 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0 lg:translate-x-0 lg:opacity-100"
        }`}
      >
        {/* Mini-mappa visiva delle sezioni */}
        <div className="p-3 border-b border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-giolab-blue animate-pulse" />
            Mappa del Sito
          </div>
          <div className="relative">
            {/* Linea di connessione */}
            <div className="absolute top-3 left-3 right-3 h-0.5 bg-gradient-to-r from-muted via-giolab-blue/20 to-muted" />
            
            {/* Indicatori delle sezioni */}
            <div className="relative flex items-center justify-between gap-1">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const IconComponent = item.icon;
                
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="group relative"
                    title={item.label}
                  >
                    {/* Punto indicatore */}
                    <div
                      className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-giolab-blue text-white scale-125 shadow-lg shadow-giolab-blue/50 ring-2 ring-white ring-offset-2 ring-offset-background"
                          : "bg-muted text-muted-foreground hover:bg-giolab-blue/20 hover:text-giolab-blue hover:scale-110"
                      }`}
                    >
                      <IconComponent className="h-3 w-3" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {item.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground" />
                    </div>
                    
                    {/* Pulse effect per sezione attiva */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-giolab-blue animate-ping opacity-20" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Legenda */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-giolab-blue" />
                <span>Attuale</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-muted" />
                <span>Altre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu navigazione esistente */}
        <div className="p-3 space-y-1">
          <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 hidden lg:block">
            Navigazione Rapida
          </div>
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group text-sm relative ${
                  isActive
                    ? "bg-giolab-blue text-white font-semibold shadow-md"
                    : "hover:bg-giolab-blue/10 hover:text-giolab-blue"
                }`}
              >
                {/* Indicatore visivo per la sezione attiva */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}
                <IconComponent className={`h-4 w-4 flex-shrink-0 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    Qui
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default BlogNavigation;
