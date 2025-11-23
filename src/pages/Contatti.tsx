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
        title="Contatti | Giolab Assemini - ☎️ 340 69 70 686"
        description="Contatta Giolab per riparazioni iPhone e smartphone ad Assemini. Telefono: 340 69 70 686 | Email: giolabassemini@gmail.com | Via Carmine 20, 09032 Assemini (CA). Preventivo gratuito!"
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
