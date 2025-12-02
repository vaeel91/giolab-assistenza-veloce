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
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import SEOHead from "@/components/SEOHead";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { calculateAggregateRating, getReviewsForSchema } from "@/data/reviews";
import { Link } from "react-router-dom";
import { Smartphone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pb-20 md:pb-0">
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
        
        {/* Nuova sezione CTA Dispositivi */}
        <section 
          id="dispositivi-cta" 
          ref={(el) => (sectionsRef.current[2] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20"
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-giolab-blue/10 mb-6">
                <Smartphone className="w-10 h-10 text-giolab-blue" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Dispositivi Nuovi, Usati e Ricondizionati
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                iPhone, Samsung, Xiaomi, OPPO e Huawei. Certificati, garantiti e pronti alla vendita. 
                Acquista con sicurezza ad <strong>Assemini</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-giolab-blue hover:bg-giolab-blue/90 text-white px-8 py-6 text-lg"
                >
                  <Link to="/dispositivi">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Scopri il Catalogo
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-giolab-blue text-giolab-blue hover:bg-giolab-blue/10 px-8 py-6 text-lg"
                >
                  <a href="https://wa.me/393406970686?text=Ciao,%20vorrei%20informazioni%20sui%20dispositivi%20in%20vendita">
                    Contattaci su WhatsApp
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-giolab-blue mb-2">12 mesi</div>
                  <div className="text-sm text-muted-foreground">Garanzia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-giolab-blue mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Certificati</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-giolab-blue mb-2">5 Brand</div>
                  <div className="text-sm text-muted-foreground">Disponibili</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-giolab-blue mb-2">3 Stati</div>
                  <div className="text-sm text-muted-foreground">Nuovo/Usato/Ricondizionato</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section 
          id="servizi" 
          ref={(el) => (sectionsRef.current[3] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <Services />
        </section>
        <section 
          id="chi-siamo" 
          ref={(el) => (sectionsRef.current[4] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <About />
        </section>
        <section 
          id="testimonianze" 
          ref={(el) => (sectionsRef.current[5] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <TestimonialsShowcase variant="scroll" />
        </section>
        <section 
          id="dove-siamo" 
          ref={(el) => (sectionsRef.current[6] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <SocialAndLocation />
        </section>
        <section 
          id="faq" 
          ref={(el) => (sectionsRef.current[7] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <FAQ />
        </section>
        <section 
          id="contatti" 
          ref={(el) => (sectionsRef.current[8] = el as HTMLDivElement)}
          className="min-h-screen snap-start snap-always section-animate"
        >
          <Contact />
          <Footer />
        </section>
      </main>
      <StickyMobileActionBar />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default Index;
