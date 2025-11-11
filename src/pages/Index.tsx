import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import SocialAndLocation from "@/components/SocialAndLocation";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [visibleSection, setVisibleSection] = useState<string>("hero");
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const initialScrollLeft = useRef<number>(0);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "servizi", label: "Servizi" },
    { id: "chi-siamo", label: "Chi Siamo" },
    { id: "testimonianze", label: "Testimonianze" },
    { id: "dove-siamo", label: "Dove Siamo" },
    { id: "faq", label: "FAQ" },
    { id: "contatti", label: "Contatti" },
  ];

  const navigateToSection = (sectionId: string) => {
    const section = sectionsRef.current.find((s) => s?.id === sectionId);
    section?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  useEffect(() => {
    // Smooth horizontal scroll for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = id ? document.getElementById(id) : null;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animation triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            setVisibleSection(entry.target.id);
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      {
        threshold: 0.5,
        root: null,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    // Simplified touch gesture handlers - let native snap handle positioning
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      isDragging.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      touchEndX.current = e.touches[0].clientX;
      // Don't interfere with native scrolling - just track for swipe detection
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      // Only navigate on deliberate swipes, otherwise let snap handle it
      if (Math.abs(diff) > swipeThreshold) {
        const currentIndex = sectionsRef.current.findIndex(
          (section) => section?.id === visibleSection
        );

        if (diff > 0 && currentIndex < sectionsRef.current.length - 1) {
          // Swipe left - next section
          setTimeout(() => {
            sectionsRef.current[currentIndex + 1]?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }, 50);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous section
          setTimeout(() => {
            sectionsRef.current[currentIndex - 1]?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }, 50);
        }
      }

      touchStartX.current = 0;
      touchEndX.current = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: true });
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [visibleSection]);

  return (
    <>
      <SEOHead 
        title="Riparazione iPhone Assemini | Smartphone, PC, Console | Giolab"
        description="Centro assistenza specializzato ad Assemini e Cagliari. Riparazione iPhone, smartphone, PC e console. Riparazioni in 1 ora, garanzia 12 mesi, batterie maggiorate iPhone. Preventivo gratuito ☎️ 340 69 70 686"
        keywords="riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza iPhone Cagliari, batteria maggiorata iPhone Assemini, riparazione vetro iPhone Assemini, micro-saldature Assemini, riparazione PC Assemini, assistenza console Assemini, centro assistenza iPhone Cagliari, rigenerazione vetro iPhone"
      />
      <Header />
      <div ref={containerRef} className="h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scroll-smooth touch-pan-x overscroll-x-contain">
        <div 
          id="hero" 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <Hero />
        </div>
        <div 
          id="servizi" 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <Services />
        </div>
        <div 
          id="chi-siamo" 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <About />
        </div>
        <div 
          id="testimonianze" 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <Testimonials />
        </div>
        <div 
          id="dove-siamo" 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <SocialAndLocation />
        </div>
        <div 
          id="faq" 
          ref={(el) => (sectionsRef.current[5] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <FAQ />
        </div>
        <div 
          id="contatti" 
          ref={(el) => (sectionsRef.current[6] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start snap-always overflow-y-auto section-animate"
        >
          <Contact />
          <Footer />
        </div>
      </div>
      <FloatingWhatsApp />
      
      {/* Navigation Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-background/80 backdrop-blur-md rounded-full shadow-lg border border-border">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigateToSection(section.id)}
            className="group relative flex items-center justify-center"
            aria-label={`Vai a ${section.label}`}
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                visibleSection === section.id
                  ? "w-2.5 h-2.5 md:w-3 md:h-3 bg-giolab-blue shadow-lg shadow-giolab-blue/50"
                  : "w-1.5 h-1.5 md:w-2 md:h-2 bg-muted-foreground/40 hover:bg-giolab-blue/60 hover:w-2 hover:h-2 md:hover:w-2.5 md:hover:h-2.5"
              }`}
            />
            {/* Tooltip - only on desktop */}
            <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 text-xs font-medium text-foreground bg-background border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </button>
        ))}
      </div>
      
      <style>{`
        .section-animate {
          opacity: 0.3;
          transform: translateX(50px) scale(0.95);
          filter: blur(3px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-visible {
          opacity: 1 !important;
          transform: translateX(0) scale(1) !important;
          filter: blur(0) !important;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Magnetic snap effect - force centering */
        .snap-always {
          scroll-snap-stop: always;
          scroll-snap-align: start;
        }
        
        /* Enhanced scroll snap with centering */
        @supports (scroll-snap-type: x mandatory) {
          .snap-x {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-padding: 0;
          }
          .snap-always {
            scroll-margin: 0;
          }
        }
        
        /* Ensure sections are exactly viewport width */
        .w-screen {
          width: 100vw;
          min-width: 100vw;
          max-width: 100vw;
        }
        
        /* Parallax effect on scroll */
        @media (prefers-reduced-motion: no-preference) {
          .section-animate {
            will-change: transform, opacity, filter;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
