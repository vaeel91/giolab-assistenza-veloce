import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import SocialAndLocation from "@/components/SocialAndLocation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const ChiSiamo = () => {
  return (
    <>
      <SEOHead 
        title="Chi Siamo e Dove Siamo - Giolab Assemini"
        description="Centro assistenza iPhone e smartphone in Via Carmine 20, Assemini. 10 anni di esperienza, tecnici certificati. ☎️ 340 69 70 686."
        keywords="chi siamo Giolab, dove siamo Giolab, centro assistenza iPhone Assemini, Via Carmine 20, tecnici certificati Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Chi Siamo", url: "https://giolabriparazioni.it/chi-siamo/" }
        ]}
      />
      
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
