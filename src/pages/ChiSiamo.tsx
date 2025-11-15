import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import LabGallery from "@/components/LabGallery";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const ChiSiamo = () => {
  return (
    <>
      <SEOHead
        title="Chi Siamo | Giolab - Centro Assistenza iPhone Assemini"
        description="Scopri Giolab: oltre 10 anni di esperienza nella riparazione iPhone e smartphone ad Assemini e Cagliari. Tecnici certificati, formazione continua e passione per la tecnologia."
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

        {/* Galleria Laboratorio */}
        <LabGallery />
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default ChiSiamo;
