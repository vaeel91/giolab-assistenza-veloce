import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Servizi = () => {
  return (
    <>
      <SEOHead
        title="Servizi di Riparazione iPhone e Smartphone | Giolab Assemini"
        description="Scopri tutti i servizi di riparazione iPhone, smartphone, PC e console di Giolab ad Assemini. Riparazioni in 1 ora, batterie maggiorate, micro-saldature, recupero dati e molto altro."
        keywords="servizi riparazione iPhone Assemini, riparazione smartphone Cagliari, assistenza iPhone, batteria maggiorata, micro-saldature, recupero dati, riparazione display"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Servizi", url: "https://giolabriparazioni.it/servizi/" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-32 pb-16">
          <Services />
        </main>
        
        <Footer />
      </div>
      
      <FloatingWhatsApp />
    </>
  );
};

export default Servizi;
