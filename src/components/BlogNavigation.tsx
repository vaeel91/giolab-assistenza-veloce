import { useState, useEffect } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0);
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

  // Calcola la percentuale di scroll della pagina
  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calcola la percentuale: (scroll corrente / scroll totale possibile) * 100
      const totalScrollable = documentHeight - windowHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Calcola all'inizio
    calculateScrollProgress();

    // Aggiungi listener per lo scroll
    window.addEventListener('scroll', calculateScrollProgress);
    window.addEventListener('resize', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

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
        <div className="p-3 space-y-1">
          {/* Scroll Progress Indicator */}
          <div className="mb-3 px-2">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-muted-foreground hidden lg:block">
                Navigazione Rapida
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-giolab-blue">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="relative h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-giolab-blue to-giolab-blue-dark transition-all duration-300 ease-out rounded-full"
                style={{ width: `${scrollProgress}%` }}
              >
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]" />
              </div>
            </div>
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
