import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const Servizi = () => {
  return (
    <>
      <SEOHead
        title="Servizi Riparazione - Giolab Assemini"
        description="Riparazione display, batterie maggiorate, recupero dati, micro-saldature. Garanzia 12 mesi. Giolab Assemini. ☎️ 340 69 70 686."
        keywords="servizi riparazione iPhone Assemini, riparazione smartphone Cagliari, assistenza iPhone, batteria maggiorata, micro-saldature, recupero dati, riparazione display"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Servizi", url: "https://giolabriparazioni.it/servizi/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-2 md:px-4 pt-20 md:pt-32 pb-8 md:pb-16">
          <Services />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default Servizi;
