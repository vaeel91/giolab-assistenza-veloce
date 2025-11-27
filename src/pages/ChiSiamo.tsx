import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const ChiSiamo = () => {
  return (
    <>
      <SEOHead 
        title="Chi Siamo - Giolab Assemini"
        description="Centro assistenza iPhone e smartphone ad Assemini. 10 anni di esperienza, tecnici certificati. Preventivo gratuito ☎️ 340 69 70 686."
        keywords="chi siamo Giolab, centro assistenza iPhone Assemini, tecnici certificati Cagliari, riparazione iPhone esperienza, assistenza smartphone professionale"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Chi Siamo", url: "https://giolabriparazioni.it/chi-siamo/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <About />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default ChiSiamo;
