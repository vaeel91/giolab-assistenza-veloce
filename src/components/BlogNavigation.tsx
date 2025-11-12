import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Wrench, Users, Star, BookOpen, MapPin, HelpCircle, Phone, Menu, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: "hero", label: "Home", icon: Home, link: "/" },
  { id: "servizi", label: "Servizi", icon: Wrench, link: "/servizi" },
  { id: "chi-siamo", label: "Chi Siamo", icon: Users, link: "/chi-siamo" },
  { id: "testimonianze", label: "Recensioni", icon: Star, link: "/#testimonianze" },
  { id: "blog", label: "Blog", icon: BookOpen, link: "/blog" },
  { id: "dove-siamo", label: "Dove Siamo", icon: MapPin, link: "/dove-siamo" },
  { id: "faq", label: "FAQ", icon: HelpCircle, link: "/faq" },
  { id: "contatti", label: "Contatti", icon: Phone, link: "/contatti" },
];

const BlogNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPulsing, setIsPulsing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    // Leggi la preferenza dal localStorage
    const saved = localStorage.getItem('navigationSoundEnabled');
    return saved ? JSON.parse(saved) : false;
  });

  // Salva la preferenza quando cambia
  useEffect(() => {
    localStorage.setItem('navigationSoundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  // Determina quale sezione è attiva in base alla route corrente
  const getActiveSection = () => {
    const path = location.pathname;
    const hash = location.hash;

    // Mappa diretta path -> sezione
    if (path === "/servizi" || path.startsWith("/servizi/")) return "servizi";
    if (path === "/chi-siamo") return "chi-siamo";
    if (path === "/faq") return "faq";
    if (path === "/dove-siamo") return "dove-siamo";
    if (path === "/contatti") return "contatti";
    if (path.startsWith("/blog")) return "blog";
    
    // Se siamo sulla homepage, guarda l'hash (che viene aggiornato dinamicamente)
    if (path === "/" && hash) {
      const sectionId = hash.replace("#", "");
      return sectionId;
    }

    // Default: home
    return "hero";
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());

  // Funzione per riprodurre un suono sottile
  const playTransitionSound = () => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Imposta un suono piacevole (nota C5 - 523.25 Hz)
      oscillator.frequency.value = 523.25;
      oscillator.type = 'sine';
      
      // Fade in/out per rendere il suono morbido
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.02);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  // Aggiorna la sezione attiva quando cambia location (incluso l'hash)
  useEffect(() => {
    const newSection = getActiveSection();
    if (newSection !== activeSection) {
      setActiveSection(newSection);
      // Attiva l'effetto pulse quando cambia sezione
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
      // Riproduce il suono se abilitato
      playTransitionSound();
    }
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
    // Imposta un ritardo di 300ms prima di chiudere
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      // Ritarda l'applicazione di pointer-events-none fino a dopo l'animazione di chiusura (400ms)
      setIsTransitioning(true);
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 300);
  };

  // Pulisci i timeout quando il componente viene smontato
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Gestione dello scroll con la rotellina per permettere lo scorrimento orizzontale
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    // Trova il contenitore principale con scroll orizzontale (ha le classi snap-x e snap-mandatory)
    const mainContainer = document.querySelector('.snap-x.snap-mandatory');
    if (mainContainer) {
      // Propaga l'evento di scroll al contenitore principale
      mainContainer.scrollBy({
        left: e.deltaY,
        behavior: 'auto'
      });
    }
  };

  return (
    <>
      {/* Compact Floating Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleMouseEnter}
        onWheel={handleWheel}
        className={`fixed top-24 right-4 z-30 bg-giolab-blue hover:bg-giolab-blue-dark text-white shadow-lg rounded-full w-12 h-12 p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isPulsing ? "animate-pulse" : ""
        }`}
        aria-label="Menu navigazione"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Compact Navigation Menu */}
      <nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        className={`fixed top-24 right-4 z-25 bg-background/70 backdrop-blur-lg border border-border rounded-xl transition-all duration-400 ${
          isOpen || isTransitioning ? "translate-x-0 opacity-100 pointer-events-auto shadow-[0_0_30px_rgba(59,130,246,0.5)]" : "translate-x-[calc(100%+1rem)] opacity-0 pointer-events-none shadow-2xl"
        }`}
        style={{ 
          marginTop: '60px'
        }}
      >
        <div className="p-2 space-y-1 w-48">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 hover:bg-giolab-blue/10 text-xs w-full mb-2 border-b border-border pb-2"
            aria-label={soundEnabled ? "Disattiva suono" : "Attiva suono"}
          >
            {soundEnabled ? (
              <Volume2 className="h-3.5 w-3.5 text-giolab-blue" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-muted-foreground" />
            )}
            <span className={`font-medium ${soundEnabled ? "text-giolab-blue" : "text-muted-foreground"}`}>
              Suono {soundEnabled ? "ON" : "OFF"}
            </span>
          </button>
          
          {navigationItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const IconComponent = item.icon;
            
            const handleNavigation = () => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
              }
              
              // Se il link inizia con /#, è una sezione della homepage
              if (item.link.startsWith("/#")) {
                const sectionId = item.link.replace("/#", "");
                const element = document.getElementById(sectionId);
                
                if (element) {
                  // Scroll alla sezione usando scrollIntoView con smooth behavior
                  element.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
              } else {
                // Altrimenti naviga alla pagina dedicata
                navigate(item.link);
              }
              
              setIsOpen(false);
              setIsTransitioning(true);
              transitionTimeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
              }, 400);
            };
            
            return (
              <button
                key={item.id}
                onClick={handleNavigation}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 group text-xs relative pointer-events-auto w-full text-left ${
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
              </button>
            );
           })}
        </div>
      </nav>
    </>
  );
};

export default BlogNavigation;
