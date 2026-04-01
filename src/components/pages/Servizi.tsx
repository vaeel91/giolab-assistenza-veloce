import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const Servizi = () => {
  return (
    <>
      
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
