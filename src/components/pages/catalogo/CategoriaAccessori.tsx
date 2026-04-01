import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileActionBar from "@/components/StickyMobileActionBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { catalogCategories } from "@/data/catalogo";
import { ArrowLeft, Shield, Smartphone, Zap } from "lucide-react";

const CategoriaAccessori = () => {
  const category = catalogCategories.find(c => c.slug === 'accessori');
  
  if (!category) return null;

  const subcategoryIcons: Record<string, React.ReactNode> = {
    'pellicole-hydrogel': <Shield className="w-8 h-8" />,
    'cover-custodie': <Smartphone className="w-8 h-8" />,
    'caricatori-cavi': <Zap className="w-8 h-8" />
  };

  return (
    <>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 mb-6">
            <Button variant="ghost" asChild className="gap-2">
              <a href="/catalogo">
                <ArrowLeft className="w-4 h-4" />
                Torna al Catalogo
              </a>
            </Button>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 py-12 mb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  {category.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          </section>

          {/* Subcategories Grid */}
          <section className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Scegli una Sottocategoria</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {category.subcategories.map((subcategory) => (
                <a key={subcategory.id} href={`/catalogo/accessori/${subcategory.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {subcategoryIcons[subcategory.slug] || <Shield className="w-8 h-8" />}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {subcategory.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {subcategory.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* Info Box */}
          <section className="container mx-auto px-4 mt-12">
            <div className="bg-secondary/20 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="font-bold mb-3 text-lg">Perché scegliere i nostri accessori?</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Qualità professionale garantita
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Applicazione inclusa nel prezzo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Compatibilità verificata
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Assistenza in negozio
                </li>
              </ul>
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

export default CategoriaAccessori;
