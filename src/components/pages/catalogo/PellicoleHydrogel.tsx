import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hydrogePlellicoleProducts, pellicolaTypes, PellicolaType } from "@/data/catalogo";
import { ArrowLeft, Check, Phone, MessageCircle } from "lucide-react";

const PellicoleHydrogel = () => {
  const [selectedType, setSelectedType] = useState<PellicolaType | 'all'>('all');

  const filteredProducts = selectedType === 'all' 
    ? hydrogePlellicoleProducts 
    : hydrogePlellicoleProducts.filter(p => p.name.toLowerCase().includes(selectedType));

  return (
    <>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 mb-6">
            <Button variant="ghost" asChild className="gap-2">
              <a href="/catalogo/accessori">
                <ArrowLeft className="w-4 h-4" />
                Torna agli Accessori
              </a>
            </Button>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12 mb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-5xl mb-4 block">🛡️</span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Pellicole Hydrogel
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Protezione avanzata auto-rigenerante per il tuo smartphone. 
                  Scegli tra lucide, opache o privacy.
                </p>
                <p className="text-sm text-primary font-medium">
                  ✓ Applicazione professionale inclusa nel prezzo
                </p>
              </div>
            </div>
          </section>

          {/* Type Filter */}
          <section className="container mx-auto px-4 mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedType === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedType('all')}
                className="gap-2"
              >
                Tutte
              </Button>
              {pellicolaTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? 'default' : 'outline'}
                  onClick={() => setSelectedType(type.id)}
                  className="gap-2"
                >
                  <span>{type.icon}</span>
                  {type.name}
                </Button>
              ))}
            </div>
            
            {selectedType !== 'all' && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                {pellicolaTypes.find(t => t.id === selectedType)?.description}
              </p>
            )}
          </section>

          {/* Products Grid */}
          <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    {product.featured && (
                      <Badge className="mb-3 bg-primary">Consigliato</Badge>
                    )}
                    
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-primary">€{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            €{product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.available ? (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Disponibile
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          Esaurito
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        asChild 
                        className="flex-1 gap-2"
                        disabled={!product.available}
                      >
                        <a
                          href={`https://wa.me/393406970686?text=Ciao,%20vorrei%20info%20sulla%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Info
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        asChild
                        className="gap-2"
                        disabled={!product.available}
                      >
                        <a href="tel:+393406970686">
                          <Phone className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="container mx-auto px-4 mt-12">
            <div className="bg-secondary/20 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="font-bold mb-4 text-lg text-center">Tipologie di Pellicole</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {pellicolaTypes.map((type) => (
                  <div key={type.id} className="text-center">
                    <span className="text-3xl mb-2 block">{type.icon}</span>
                    <h4 className="font-semibold mb-1">{type.name}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 mt-12">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Non trovi il tuo modello?</h2>
              <p className="mb-6">
                Tagliamo le pellicole su misura per qualsiasi smartphone. Contattaci!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/393406970686?text=Ciao,%20cerco%20una%20pellicola%20per%20il%20mio%20smartphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+393406970686"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  340 69 70 686
                </a>
              </div>
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

export default PellicoleHydrogel;
