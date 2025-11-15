import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

/**
 * Componente Scroll To Top
 * 
 * Due funzionalità:
 * 1. Scrolla automaticamente in cima alla pagina quando cambia route
 * 2. Mostra un pulsante floating per tornare in cima quando si scrolla in basso
 * 
 * Features:
 * - Appare dopo 300px di scroll
 * - Animazione smooth fade-in/out
 * - Posizionamento responsive:
 *   * Mobile: centrato in basso per migliore accessibilità touch
 *   * Desktop: in basso a sinistra (per non sovrapporsi al WhatsApp)
 * - Scroll animato verso l'alto
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scrolla in cima quando cambia la route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Mostra/nascondi il pulsante in base allo scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Funzione per scrollare verso l'alto
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-40 bg-giolab-blue hover:bg-giolab-blue-dark text-white shadow-lg rounded-full w-14 h-14 md:w-12 md:h-12 p-0 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Torna su"
      title="Torna su"
    >
      <ArrowUp className="h-6 w-6 md:h-5 md:w-5" />
    </Button>
  );
};

export default ScrollToTop;
