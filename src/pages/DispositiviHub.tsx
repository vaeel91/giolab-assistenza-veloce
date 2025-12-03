import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrandCard } from "@/components/BrandCard";
import { products, brandInfo } from "@/data/products";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import SEOHead from "@/components/SEOHead";
import { Smartphone, Shield, Clock, MapPin } from "lucide-react";

const DispositiviHub = () => {
  // Count products per brand
  const brandCounts = products.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <SEOHead
        title="Vendita Smartphone Nuovi, Usati e Ricondizionati – Giolab Assemini"
        description="iPhone, Samsung, Xiaomi, OPPO e Huawei. Nuovi, usati e ricondizionati certificati. Garanzia 12 mesi. Prezzi trasparenti. ☎️ 340 69 70 686"
        keywords="vendita smartphone assemini, iphone ricondizionati cagliari, samsung usati certificati, xiaomi nuovi assemini, vendita dispositivi assemini"
        ogUrl="https://giolabriparazioni.it/dispositivi"
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
      />

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 mb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Dispositivi in Vendita
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Nuovi, Usati e Ricondizionati Certificati
                </p>
                <p className="text-lg mb-8">
                  Scegli tra iPhone, Samsung, Xiaomi, OPPO e Huawei. Tutti i nostri dispositivi ricondizionati sono certificati con garanzia di 12 mesi. Prezzi trasparenti e assistenza professionale ad Assemini e Cagliari.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-sm font-semibold">Garanzia 12 mesi</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="h-8 w-8 text-primary" />
                    <span className="text-sm font-semibold">Pronto consegna</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Smartphone className="h-8 w-8 text-primary" />
                    <span className="text-sm font-semibold">Certificati</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-8 w-8 text-primary" />
                    <span className="text-sm font-semibold">Assemini</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Selection Grid */}
          <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Scegli la Marca</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Object.entries(brandInfo).map(([brand, info]) => (
                <BrandCard
                  key={brand}
                  brand={brand}
                  name={info.name}
                  description={info.description}
                  slug={info.slug}
                  productCount={brandCounts[brand] || 0}
                  gradient={info.color}
                />
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="container mx-auto px-4 mt-16">
            <div className="bg-secondary/10 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">Perché Acquistare da GioLab?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">✓ Certificati e Garantiti</h3>
                  <p className="text-sm text-muted-foreground">
                    Ogni dispositivo ricondizionato è testato e certificato con garanzia di 12 mesi
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">✓ Prezzi Trasparenti</h3>
                  <p className="text-sm text-muted-foreground">
                    Nessun costo nascosto. Il prezzo che vedi è quello che paghi
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">✓ Assistenza Locale</h3>
                  <p className="text-sm text-muted-foreground">
                    Vieni in negozio ad Assemini per vedere e provare i dispositivi
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 mt-16">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Hai Dubbi? Contattaci!</h2>
              <p className="mb-6">
                Il nostro team è pronto ad aiutarti a scegliere il dispositivo perfetto per le tue esigenze
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/393406970686?text=Ciao, vorrei informazioni sui dispositivi in vendita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+393406970686"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Chiama Ora
                </a>
              </div>
              <p className="mt-4 text-sm">
                📍 Via Carmine 20, 09032 Assemini (CA) | ☎️ 340 69 70 686
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <StickyMobileActionBar />
      </div>
    </>
  );
};

export default DispositiviHub;
