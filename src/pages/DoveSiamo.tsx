import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialAndLocation from "@/components/SocialAndLocation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const DoveSiamo = () => {
  return (
    <>
      <SEOHead
        title="Dove Siamo | Giolab - Via Carmine 20, 09032 Assemini (CA)"
        description="Vieni a trovarci! Giolab si trova in Via Carmine 20, 09032 Assemini (CA). Aperto dal lunedì al sabato. Vicino a Cagliari e facilmente raggiungibile. Seguici su Instagram e Facebook!"
        keywords="dove siamo Giolab, indirizzo Giolab Assemini, Via Carmine 20, 09032 Assemini, centro assistenza iPhone Cagliari posizione, come raggiungere Giolab"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Dove Siamo", url: "https://giolabriparazioni.it/dove-siamo/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <SocialAndLocation />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default DoveSiamo;
