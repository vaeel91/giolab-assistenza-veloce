import { useState, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { products } from "@/data/products";
import { Gamepad2 } from "lucide-react";

const DispositiviConsole = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [condition, setCondition] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => p.brand === 'console')
      .filter(p => {
        if (condition !== "all" && p.condition !== condition) return false;
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return p.model.toLowerCase().includes(query) || 
                 p.description?.toLowerCase().includes(query);
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc": return a.price - b.price;
          case "price-desc": return b.price - a.price;
          case "model": return a.model.localeCompare(b.model);
          default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        }
      });
  }, [searchQuery, condition, sortBy]);

  return (
    <>
      <SEOHead
        title="Console Ricondizionate | PlayStation, Nintendo, Xbox - Giolab Assemini"
        description="Console ricondizionate e usate con garanzia: PS5, PS4, Nintendo Switch, Xbox. Testate e certificate ad Assemini (Cagliari). Garanzia fino a 12 mesi."
        keywords="console ricondizionate, PS5 usata, PlayStation ricondizionata, Nintendo Switch usata, Xbox ricondizionata, console Assemini, console Cagliari, PS4 usata"
        ogUrl="https://giolabriparazioni.it/dispositivi/console"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Dispositivi", url: "https://giolabriparazioni.it/dispositivi" },
          { name: "Console", url: "https://giolabriparazioni.it/dispositivi/console" }
        ]}
      />

      <Header />
      
      <main className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800">
              <Gamepad2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Console Ricondizionate e Usate
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              PlayStation, Nintendo Switch e Xbox ricondizionate e usate con garanzia. 
              Tutte le console sono testate, pulite internamente e certificate dal nostro laboratorio.
            </p>
          </div>

          {/* Filters */}
          <ProductFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            condition={condition}
            onConditionChange={setCondition}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            resultCount={filteredProducts.length}
          />

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nessuna console trovata con i filtri selezionati.</p>
              <button 
                onClick={() => { setSearchQuery(""); setCondition("all"); }}
                className="text-primary hover:underline"
              >
                Rimuovi filtri
              </button>
            </div>
          )}

          {/* Info Section */}
          <div className="bg-giolab-gray/30 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Gradi Estetici Console</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <span className="font-bold text-green-600">Grado A+</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Console in condizioni eccellenti, praticamente nuova. Nessun segno visibile.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <span className="font-bold text-blue-600">Grado A</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Ottime condizioni con minimi segni di usura, non visibili durante l'uso.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <span className="font-bold text-orange-600">Grado B</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Segni di usura visibili ma funzionamento perfetto. Ottimo rapporto qualità/prezzo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <StickyMobileActionBar />
    </>
  );
};

export default DispositiviConsole;
