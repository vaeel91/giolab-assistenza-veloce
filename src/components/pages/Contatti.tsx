import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const Contatti = () => {
  return (
    <>
      <SEOHead 
        title="Contatti Giolab Assemini | Prenota Riparazione Smartphone e PC"
        description="Contatta Giolab ad Assemini (Via Carmine 20). Aperto Lun-Ven 10:00-12:30 / 16:00-19:00 | Sab 10:00-12:30. WhatsApp, telefono o preventivo online."
        keywords="contatti Giolab, telefono Giolab Assemini, email Giolab, preventivo riparazione iPhone, assistenza clienti smartphone Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Contatti", url: "https://giolabriparazioni.it/contatti/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <Contact />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default Contatti;
