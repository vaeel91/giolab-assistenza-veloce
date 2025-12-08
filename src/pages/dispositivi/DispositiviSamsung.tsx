import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { useAvailableProducts } from "@/hooks/useProducts";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

const DispositiviSamsung = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [condition, setCondition] = useState<string>("all");
  const [sortBy, setSortBy] = useState("featured");

  const { data: products, isLoading } = useAvailableProducts('samsung');

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    let filtered = [...products];

    if (condition !== 'all') {
      filtered = filtered.filter(p => p.condition === condition);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return Number(a.price) - Number(b.price);
        case 'price-desc':
          return Number(b.price) - Number(a.price);
        case 'model':
          return a.model.localeCompare(b.model);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [products, searchQuery, condition, sortBy]);

  return (
    <>
      <Helmet>
        <title>Samsung Galaxy Ricondizionati e Nuovi – Giolab Assemini</title>
        <meta 
          name="description" 
          content="Samsung Galaxy ricondizionati certificati e nuovi ad Assemini. S23, A54 e altri modelli. Garanzia 12 mesi. ☎️ 340 69 70 686" 
        />
        <meta 
          name="keywords" 
          content="samsung ricondizionati assemini, galaxy usati cagliari, samsung nuovi assemini, galaxy certificati garanzia" 
        />
        <link rel="canonical" href="https://giolabriparazioni.it/dispositivi/samsung" />
        
        <meta property="og:title" content="Samsung Galaxy Ricondizionati e Nuovi – Giolab Assemini" />
        <meta property="og:description" content="Samsung Galaxy ricondizionati certificati e nuovi ad Assemini. Garanzia 12 mesi." />
        <meta property="og:url" content="https://giolabriparazioni.it/dispositivi/samsung" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/dispositivi">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Torna al catalogo
                </Button>
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Samsung Galaxy in Vendita</h1>
              <p className="text-lg text-muted-foreground">
                Nuovi, usati e ricondizionati certificati con garanzia
              </p>
            </div>

            <ProductFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              condition={condition}
              onConditionChange={setCondition}
              sortBy={sortBy}
              onSortByChange={setSortBy}
              resultCount={filteredProducts.length}
            />

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  Nessun dispositivo trovato con i filtri selezionati
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setCondition('all');
                  }}
                >
                  Cancella filtri
                </Button>
              </div>
            )}

            <section className="mt-16 bg-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Gradi Estetici</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">A+ Eccellente</h3>
                  <p className="text-sm text-muted-foreground">
                    Come nuovo, senza segni visibili di usura
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">A Buono</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimi segni d'uso, schermo e scocca perfetti
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">B Accettabile</h3>
                  <p className="text-sm text-muted-foreground">
                    Segni d'uso visibili ma perfettamente funzionante
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <StickyMobileActionBar />
      </div>
    </>
  );
};

export default DispositiviSamsung;
