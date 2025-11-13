import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import BlogPreview from "@/components/BlogPreview";
import SocialAndLocation from "@/components/SocialAndLocation";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          } else {
            entry.target.classList.remove("section-visible");
          }
        });
      },
      {
        threshold: 0.3,
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


  return (
    <>
      <h1 className="sr-only">Giolab Assemini - Riparazione iPhone, Smartphone, PC e Console in 1 Ora con Garanzia 12 Mesi</h1>
      <SEOHead
        title="Riparazione iPhone Assemini | Smartphone, PC, Console | Giolab"
        description="Centro assistenza specializzato ad Assemini e Cagliari. Riparazione iPhone, smartphone, PC e console. Riparazioni in 1 ora, garanzia 12 mesi, batterie maggiorate iPhone. Preventivo gratuito ☎️ 340 69 70 686"
        keywords="riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza iPhone Cagliari, batteria maggiorata iPhone Assemini, riparazione vetro iPhone Assemini, micro-saldature Assemini, riparazione PC Assemini, assistenza console Assemini, centro assistenza iPhone Cagliari, rigenerazione vetro iPhone"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://giolabriparazioni.it/#organization",
          "name": "Giolab",
          "url": "https://giolabriparazioni.it",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Marco Piras"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Servizio eccellente! iPhone riparato in meno di un'ora, display perfetto come nuovo. Tecnici competenti e prezzi onesti. Super consigliato!",
              "datePublished": "2025-01-15"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Giulia Melis"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Batteria maggiorata installata sul mio iPhone 13, autonomia triplicata! Finalmente arrivo a sera. Giolab è davvero il top ad Assemini.",
              "datePublished": "2025-01-10"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Andrea Murgia"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Professionali e veloci. Mi hanno recuperato tutte le foto da un iPhone che non si accendeva più. Prezzo corretto e garanzia di 12 mesi.",
              "datePublished": "2025-01-05"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sara Carta"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Consigliato da un'amica, non me ne pento. Schermo sostituito in 40 minuti mentre aspettavo. Qualità ottima e prezzo giusto.",
              "datePublished": "2024-12-28"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Luca Sanna"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Centro assistenza serio e competente. Mi hanno riparato la PS5 in pochi giorni. Finalmente posso giocare di nuovo! Grazie Giolab.",
              "datePublished": "2024-12-20"
            }
          ]
        }}
      />
      <Header />
      
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section 
          id="hero" 
          ref={(el) => (sectionsRef.current[0] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <Hero />
        </section>
        <section 
          id="blog" 
          ref={(el) => (sectionsRef.current[1] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <BlogPreview />
        </section>
        <section 
          id="servizi" 
          ref={(el) => (sectionsRef.current[2] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <Services />
        </section>
        <section 
          id="chi-siamo" 
          ref={(el) => (sectionsRef.current[3] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <About />
        </section>
        <section 
          id="testimonianze" 
          ref={(el) => (sectionsRef.current[4] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <TestimonialsShowcase variant="scroll" />
        </section>
        <section 
          id="dove-siamo" 
          ref={(el) => (sectionsRef.current[5] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <SocialAndLocation />
        </section>
        <section 
          id="faq" 
          ref={(el) => (sectionsRef.current[6] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <FAQ />
        </section>
        <section 
          id="contatti" 
          ref={(el) => (sectionsRef.current[7] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <Contact />
          <Footer />
        </section>
      </div>
      <FloatingWhatsApp />
      <BlogNavigation />
      
      <style>{`
        .section-animate {
          opacity: 0.6;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .snap-y {
          scroll-snap-type: y mandatory;
          -webkit-overflow-scrolling: touch;
        }
        
        .snap-start {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .section-animate {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
