import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const FAQPage = () => {
  return (
    <>
      <SEOHead 
        title="FAQ Riparazione iPhone - Giolab Assemini"
        description="Risposte su riparazione iPhone e smartphone: tempi, costi, garanzia, sicurezza dati. Giolab Assemini ti aiuta. ☎️ 340 69 70 686."
        keywords="faq riparazione iPhone, domande frequenti assistenza smartphone, costi riparazione iPhone Assemini, garanzia riparazione, tempi riparazione iPhone"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "FAQ", url: "https://giolabriparazioni.it/faq/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <FAQ />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default FAQPage;
