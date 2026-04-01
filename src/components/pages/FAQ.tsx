import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const FAQPage = () => {
  return (
    <>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Domande Frequenti sulla Riparazione Smartphone ad Assemini
          </h1>
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
