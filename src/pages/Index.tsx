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
import SEOHead from "@/components/SEOHead";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { calculateAggregateRating, getReviewsForSchema } from "@/data/reviews";

const Index = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // 📊 Calcola aggregate rating unificato da tutte le recensioni
  const aggregateRating = calculateAggregateRating();
  const reviews = getReviewsForSchema(10);

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
      <SEOHead 
        title="Riparazione iPhone e Smartphone a Assemini e Cagliari | Giolab"
        description="Riparazione iPhone e smartphone ad Assemini in 1 ora. Garanzia 12 mesi. Preventivo gratuito ☎️ 340 69 70 686. Contattaci ora!"
        keywords="riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza iPhone Cagliari, batteria maggiorata iPhone Assemini, riparazione vetro iPhone Assemini, micro-saldature Assemini, riparazione PC Assemini, assistenza console Assemini, centro assistenza iPhone Cagliari, rigenerazione vetro iPhone"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://giolabriparazioni.it/#localbusiness",
          "name": "Giolab Riparazioni Smartphone e PC",
          "description": "Centro assistenza specializzato in riparazione iPhone, smartphone, PC e console ad Assemini (Cagliari)",
          "url": "https://giolabriparazioni.it",
          "telephone": "+39 340 69 70 686",
          "email": "giolabassemini@gmail.com",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Carmine 20",
            "addressLocality": "Assemini",
            "postalCode": "09032",
            "addressRegion": "CA",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.2891",
            "longitude": "8.9947"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "16:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "12:30"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating.ratingValue,
            "reviewCount": aggregateRating.reviewCount,
            "bestRating": aggregateRating.bestRating,
            "worstRating": aggregateRating.worstRating
          },
          "review": reviews
        }}
      />
      <Header />
      
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
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
      </main>
      <FloatingWhatsApp />
      <ScrollToTop />
      
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
