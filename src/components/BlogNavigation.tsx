import { useState, useEffect, useRef } from "react";
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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determina quale sezione è attiva in base alla route corrente
  const getActiveSection = () => {
    const path = location.pathname;
    const hash = location.hash;

    // Se siamo sulla homepage, guarda l'hash (che viene aggiornato dinamicamente)
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

    // Default: home se siamo sulla homepage senza hash
    if (path === "/") {
      return "hero";
    }

    return "hero";
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());

  // Aggiorna la sezione attiva quando cambia location (incluso l'hash)
  useEffect(() => {
    setActiveSection(getActiveSection());
  }, [location.pathname, location.hash]);

  // Gestione apertura/chiusura con ritardo
  const handleMouseEnter = () => {
    // Cancella qualsiasi timeout di chiusura pendente
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Imposta un ritardo di 200ms prima di chiudere
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Pulisci il timeout quando il componente viene smontato
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Compact Floating Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        className="fixed top-24 right-4 z-50 bg-giolab-blue hover:bg-giolab-blue-dark text-white shadow-lg rounded-full w-12 h-12 p-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Menu navigazione"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Compact Navigation Menu */}
      <nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-24 right-4 z-40 bg-background/80 backdrop-blur-md border border-border rounded-xl shadow-xl transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-[calc(100%+1rem)] opacity-0 pointer-events-none"
        }`}
        style={{ marginTop: '60px' }}
      >
        <div className="p-2 space-y-1 w-48">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 group text-xs relative ${
                  isActive
                    ? "bg-giolab-blue text-white font-semibold shadow-sm"
                    : "hover:bg-giolab-blue/10 hover:text-giolab-blue"
                }`}
              >
                {/* Indicatore visivo compatto per la sezione attiva */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
                )}
                <IconComponent className={`h-3.5 w-3.5 flex-shrink-0 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                <span className="font-medium truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Overlay for closing menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default BlogNavigation;
