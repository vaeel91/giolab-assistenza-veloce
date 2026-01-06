import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Percent, 
  Filter, 
  Smartphone, 
  Tablet, 
  Gamepad2,
  Check,
  X,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Tag,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SaleCountdown from "@/components/SaleCountdown";
import { saleProducts, brands, categories, conditions, getSaleEndDate, type SaleProduct } from "@/data/saleProducts";
import { getCanonicalUrl } from "@/config/seoConfig";

const Saldi = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const saleEndDate = getSaleEndDate();
  const pageUrl = getCanonicalUrl("/saldi");

  const maxPrice = Math.max(...saleProducts.map(p => p.salePrice));

  const filteredProducts = useMemo(() => {
    return saleProducts.filter(product => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedConditions.length > 0 && !selectedConditions.includes(product.condition)) return false;
      if (product.salePrice < priceRange[0] || product.salePrice > priceRange[1]) return false;
      if (showOnlyAvailable && !product.available) return false;
      return true;
    });
  }, [selectedBrands, selectedCategories, selectedConditions, priceRange, showOnlyAvailable]);

  const featuredProducts = filteredProducts.filter(p => p.featured && p.available);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedConditions([]);
    setPriceRange([0, maxPrice]);
    setShowOnlyAvailable(false);
  };

  const hasActiveFilters = selectedBrands.length > 0 || selectedCategories.length > 0 || selectedConditions.length > 0 || showOnlyAvailable || priceRange[0] > 0 || priceRange[1] < maxPrice;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "smartphone": return <Smartphone className="w-4 h-4" />;
      case "tablet": return <Tablet className="w-4 h-4" />;
      case "console": return <Gamepad2 className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Brands */}
      <div>
        <h4 className="font-semibold mb-3 text-foreground">Marca</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox 
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <span className="text-sm text-muted-foreground">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-semibold mb-3 text-foreground">Categoria</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <Checkbox 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <span className="text-sm text-muted-foreground capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h4 className="font-semibold mb-3 text-foreground">Condizione</h4>
        <div className="space-y-2">
          {conditions.map(condition => (
            <label key={condition} className="flex items-center gap-2 cursor-pointer">
              <Checkbox 
                checked={selectedConditions.includes(condition)}
                onCheckedChange={() => toggleCondition(condition)}
              />
              <span className="text-sm text-muted-foreground capitalize">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-3 text-foreground">Prezzo</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={0}
            max={maxPrice}
            step={50}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]}€</span>
            <span>{priceRange[1]}€</span>
          </div>
        </div>
      </div>

      {/* Available only */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox 
            checked={showOnlyAvailable}
            onCheckedChange={(checked) => setShowOnlyAvailable(checked as boolean)}
          />
          <span className="text-sm text-muted-foreground">Solo disponibili</span>
        </label>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
          <X className="w-4 h-4 mr-2" />
          Rimuovi filtri
        </Button>
      )}
    </div>
  );

  const ProductCard = ({ product }: { product: SaleProduct }) => (
    <Card className={`relative overflow-hidden transition-all hover:shadow-lg ${!product.available ? 'opacity-60' : ''}`}>
      {/* Discount badge */}
      <div className="absolute top-3 right-3 z-10">
        <Badge className="bg-red-500 text-white font-bold">
          -{product.discount}%
        </Badge>
      </div>

      {product.featured && product.available && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="secondary" className="bg-amber-500/90 text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            Top
          </Badge>
        </div>
      )}

      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          {getCategoryIcon(product.category)}
          <span className="capitalize">{product.category}</span>
          <span>•</span>
          <span className="capitalize">{product.condition}</span>
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Specs */}
        <div className="flex flex-wrap gap-1.5">
          {product.memory && (
            <Badge variant="outline" className="text-xs">{product.memory}</Badge>
          )}
          {product.grade && (
            <Badge variant="outline" className="text-xs">{product.grade}</Badge>
          )}
          {product.batteryHealth && (
            <Badge variant="outline" className="text-xs">🔋 {product.batteryHealth}</Badge>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{product.salePrice}€</span>
          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}€</span>
        </div>

        {/* Warranty */}
        <p className="text-xs text-muted-foreground">
          Garanzia: {product.warranty}
        </p>

        {/* CTA */}
        {product.available ? (
          <Button 
            className="w-full" 
            onClick={() => window.open(`https://wa.me/393406970686?text=Ciao! Sono interessato a ${product.name} ${product.memory || ''} in saldo a ${product.salePrice}€. È ancora disponibile?`, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Richiedi info
          </Button>
        ) : (
          <Button className="w-full" variant="secondary" disabled>
            Non disponibile
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEOHead
        title="Saldi Dispositivi Nuovi e Ricondizionati | Giolab Assemini"
        description="Saldi su iPhone, Samsung, Xiaomi e console nuovi e ricondizionati. Sconti fino al 40% con garanzia. Assemini ☎️ 340 69 70 686"
        keywords="saldi iphone, saldi smartphone, dispositivi ricondizionati saldi, iphone scontati, samsung saldi, console saldi, offerte smartphone assemini"
        ogUrl={pageUrl}
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Saldi", url: pageUrl }
        ]}
      />

      <Header />
      <FloatingWhatsApp />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Percent className="w-7 h-7" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 text-sm">
                  Offerta a tempo limitato
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Saldi Dispositivi
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                iPhone, Samsung, Xiaomi e console nuovi e ricondizionati con <strong>sconti fino al 40%</strong>. Garanzia inclusa e assistenza locale.
              </p>

              {/* Countdown */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Termina tra:</span>
                <SaleCountdown endDate={saleEndDate} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured products */}
        {featuredProducts.length > 0 && (
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl font-bold">Offerte in evidenza</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredProducts.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main content */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar filters - Desktop */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24 bg-card rounded-xl border p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filtri
                    </h3>
                    {hasActiveFilters && (
                      <Badge variant="secondary">{filteredProducts.length}</Badge>
                    )}
                  </div>
                  <FiltersContent />
                </div>
              </aside>

              {/* Mobile filter button */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtri
                      {hasActiveFilters && (
                        <Badge variant="secondary" className="ml-2">{filteredProducts.length}</Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filtri</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FiltersContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Products grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    {filteredProducts.length} prodott{filteredProducts.length === 1 ? 'o' : 'i'} trovat{filteredProducts.length === 1 ? 'o' : 'i'}
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">Nessun prodotto trovato con i filtri selezionati.</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Rimuovi filtri
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Non trovi quello che cerchi?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contattaci su WhatsApp per richiedere un dispositivo specifico o per avere informazioni su disponibilità e permute.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/393406970686?text=Ciao! Sto cercando un dispositivo specifico. Potete aiutarmi?", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contattaci su WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Saldi;
