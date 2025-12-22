import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutAndLocation from "@/components/AboutAndLocation";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import BlogPreview from "@/components/BlogPreview";
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        } else {
          entry.target.classList.remove("section-visible");
        }
      });
    }, {
      threshold: 0.3,
      root: null
    });
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  return <>
      <SEOHead title="Riparazione iPhone e Smartphone a Assemini e Cagliari | Giolab" description="Riparazione iPhone e smartphone ad Assemini in 1 ora. Garanzia 12 mesi. Preventivo gratuito ☎️ 340 69 70 686. Contattaci ora!" keywords="riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza iPhone Cagliari, batteria maggiorata iPhone Assemini, riparazione vetro iPhone Assemini, micro-saldature Assemini, riparazione PC Assemini, assistenza console Assemini, centro assistenza iPhone Cagliari, rigenerazione vetro iPhone" breadcrumbs={[{
      name: "Home",
      url: "https://giolabriparazioni.it/"
    }]} />
      <Header />
      
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pb-20 md:pb-0 scroll-pt-16 md:scroll-pt-0">
        <section id="hero" ref={el => sectionsRef.current[0] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <Hero />
        </section>
        <section id="blog" ref={el => sectionsRef.current[1] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <BlogPreview />
        </section>
        
        {/* Sezione CTA Catalogo Accessori */}
        <section id="catalogo-cta" ref={el => sectionsRef.current[2] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-4">
          <div className="container mx-auto py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-giolab-blue/10">
                <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-giolab-blue" />
              </div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Catalogo Accessori
              </h2>
              
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Pellicole hydrogel, cover e accessori di qualità per il tuo smartphone. Applicazione professionale inclusa ad <strong>Assemini</strong>.
              </p>
              
              <div className="flex flex-col gap-3 items-stretch sm:flex-row sm:items-center sm:justify-center pt-4 md:pt-6">
                <Button asChild size="lg" className="bg-giolab-blue hover:bg-giolab-blue/90 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  <Link to="/catalogo">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Scopri il Catalogo
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-giolab-blue text-giolab-blue hover:bg-giolab-blue/10 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  <a href="https://wa.me/393406970686?text=Ciao,%20vorrei%20informazioni%20sugli%20accessori">
                    Contattaci su WhatsApp
                  </a>
                </Button>
              </div>
              
              
            </div>
          </div>
        </section>
        
        <section id="servizi" ref={el => sectionsRef.current[3] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <Services />
        </section>
        <section id="chi-siamo" ref={el => sectionsRef.current[4] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <AboutAndLocation />
        </section>
        <section id="testimonianze" ref={el => sectionsRef.current[5] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <TestimonialsShowcase variant="scroll" />
        </section>
        <section id="faq" ref={el => sectionsRef.current[6] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <FAQ />
        </section>
        <section id="contatti" ref={el => sectionsRef.current[7] = el as HTMLDivElement} className="min-h-screen snap-start snap-always section-animate">
          <Contact />
          <Footer />
        </section>
      </main>
      <StickyMobileActionBar />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>;
};
export default Index;