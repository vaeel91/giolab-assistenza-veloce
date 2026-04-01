import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import SocialAndLocation from "@/components/SocialAndLocation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const ChiSiamo = () => {
  return (
    <>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16 space-y-16">
          <About />
          <SocialAndLocation />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default ChiSiamo;
