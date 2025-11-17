import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

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
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="container mx-auto px-4 pt-40 pb-16">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Riparazione iPhone, Smartphone, PC e Console ad Assemini — I Servizi Professionali di Giolab
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Affidati a Giolab per riparazioni professionali di iPhone, smartphone, PC e console ad Assemini e provincia di Cagliari. 
              Offriamo interventi rapidi anche in 1 ora, ricambi certificati, micro-saldature avanzate e batterie maggiorate. 
              Dalla sostituzione display al recupero dati, dalla rigenerazione vetro all'assistenza B2B: il nostro laboratorio specializzato 
              garantisce precisione, trasparenza e garanzia 12 mesi su ogni servizio.
            </p>
          </div>
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
