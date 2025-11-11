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
    // Enhanced touch gesture handlers with visual feedback
    const handleTouchStart = (e: TouchEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      touchStartX.current = e.touches[0].clientX;
      initialScrollLeft.current = container.scrollLeft;
      isDragging.current = true;
      container.style.scrollSnapType = "none";
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const container = containerRef.current;
      if (!container) return;

      touchEndX.current = e.touches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      
      // Apply smooth scrolling during drag with resistance
      const resistance = 0.8; // Makes dragging feel more natural
      container.scrollLeft = initialScrollLeft.current + (diff * resistance);
    };

    const handleTouchEnd = () => {
      const container = containerRef.current;
      if (!container) return;

      isDragging.current = false;
      container.style.scrollSnapType = "x mandatory";

      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        const currentIndex = sectionsRef.current.findIndex(
          (section) => section?.id === visibleSection
        );

        if (diff > 0 && currentIndex < sectionsRef.current.length - 1) {
          // Swipe left - next section
          sectionsRef.current[currentIndex + 1]?.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          });
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous section
          sectionsRef.current[currentIndex - 1]?.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          });
        }
      } else {
        // Snap back to current section if swipe wasn't strong enough
        const currentSection = sectionsRef.current.find(
          (section) => section?.id === visibleSection
        );
        currentSection?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
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
      <div ref={containerRef} className="h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scroll-smooth touch-pan-x">
        <div
          id="hero" 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <Hero />
        </div>
        <div 
          id="servizi" 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <Services />
        </div>
        <div 
          id="chi-siamo" 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <About />
        </div>
        <div 
          id="testimonianze" 
          ref={(el) => (sectionsRef.current[3] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <Testimonials />
        </div>
        <div 
          id="dove-siamo" 
          ref={(el) => (sectionsRef.current[4] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <SocialAndLocation />
        </div>
        <div 
          id="faq" 
          ref={(el) => (sectionsRef.current[5] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <FAQ />
        </div>
        <div 
          id="contatti" 
          ref={(el) => (sectionsRef.current[6] = el)}
          className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto section-animate"
        >
          <Contact />
          <Footer />
        </div>
      </div>
      <FloatingWhatsApp />
      
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
