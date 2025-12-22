import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { catalogCategories } from "@/data/catalogo";
import { ShoppingBag, Shield, MapPin, Phone } from "lucide-react";

const CatalogoHub = () => {
  return (
    <>
      <SEOHead
        title="Catalogo Accessori Smartphone – Giolab Assemini"
        description="Pellicole hydrogel, cover, caricatori e accessori per iPhone, Samsung, Xiaomi. Qualità professionale ad Assemini. ☎️ 340 69 70 686"
        keywords="accessori smartphone assemini, pellicole hydrogel cagliari, cover iphone assemini, caricatori originali assemini"
        ogUrl="https://giolabriparazioni.it/catalogo"
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16 mb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <ShoppingBag className="w-8 h-8 text-primary" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Catalogo Accessori
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Pellicole, Cover e Accessori di Qualità
                </p>
                <p className="text-lg mb-8 text-muted-foreground">
                  Scopri la nostra selezione di accessori professionali per smartphone e tablet. 
                  Qualità garantita, applicazione inclusa nel prezzo.
                </p>
                
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-xs font-semibold">Qualità Pro</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-xs font-semibold">Assemini</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-xs font-semibold">340 69 70 686</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Categorie</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {catalogCategories.map((category) => (
                <Link key={category.id} to={`/catalogo/${category.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary h-full">
                    <CardContent className="p-6">
                      <div className={`w-full h-24 mb-4 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <span className="text-4xl">{category.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="space-y-1">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <span key={sub.id} className="text-xs text-primary/80 block">
                            • {sub.name}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 mt-16">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Cerchi un Accessorio Specifico?</h2>
              <p className="mb-6">
                Contattaci per verificare disponibilità e prezzi. Applicazione professionale inclusa!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/393406970686?text=Ciao,%20vorrei%20informazioni%20sugli%20accessori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+393406970686"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  Chiama Ora
                </a>
              </div>
              <p className="mt-4 text-sm opacity-90">
                📍 Via Carmine 20, 09032 Assemini (CA)
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

export default CatalogoHub;
