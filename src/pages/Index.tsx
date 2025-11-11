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
import { useEffect } from "react";

const Index = () => {
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

  return (
    <>
      <SEOHead 
        title="Riparazione iPhone Assemini | Smartphone, PC, Console | Giolab"
        description="Centro assistenza specializzato ad Assemini e Cagliari. Riparazione iPhone, smartphone, PC e console. Riparazioni in 1 ora, garanzia 12 mesi, batterie maggiorate iPhone. Preventivo gratuito ☎️ 340 69 70 686"
        keywords="riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza iPhone Cagliari, batteria maggiorata iPhone Assemini, riparazione vetro iPhone Assemini, micro-saldature Assemini, riparazione PC Assemini, assistenza console Assemini, centro assistenza iPhone Cagliari, rigenerazione vetro iPhone"
      />
      <Header />
      <div className="h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex">
        <div id="hero" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <Hero />
        </div>
        <div id="servizi" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <Services />
        </div>
        <div id="chi-siamo" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <About />
        </div>
        <div id="testimonianze" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <Testimonials />
        </div>
        <div id="dove-siamo" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <SocialAndLocation />
        </div>
        <div id="faq" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <FAQ />
        </div>
        <div id="contatti" className="w-screen h-screen flex-shrink-0 snap-start overflow-y-auto">
          <Contact />
          <Footer />
        </div>
      </div>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
