import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Search, X, Filter } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import OptimizedImage from "@/components/OptimizedImage";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutte");
  
  // Estrai categorie uniche dagli articoli
  const categories = ["Tutte", ...Array.from(new Set(blogArticles.map(article => article.category)))];

  // Filtra articoli basandosi su ricerca e categoria
  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article => {
      const matchesSearch = searchQuery.trim() === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "Tutte" || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Blog Riparazione iPhone - Giolab Assemini"
        description="Guide e consigli su riparazione iPhone, smartphone e PC ad Assemini. Articoli tecnici e tutorial. Contattaci al 340 69 70 686."
        keywords="blog riparazione iPhone, guide iPhone, consigli batteria iPhone, manutenzione smartphone, assistenza iPhone Assemini"
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Blog" }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-background via-giolab-gray to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Blog Giolab
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Scopri guide tecniche, consigli utili e articoli dedicati al mondo delle riparazioni: iPhone, smartphone, PC e console. Contenuti chiari, utili e aggiornati.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cerca articoli per parola chiave, titolo o contenuto..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-14 text-lg border-2 focus:border-giolab-blue"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Filtri Categoria */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Filter className="h-4 w-4" />
                <span>Categoria:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-giolab-blue hover:bg-giolab-blue-dark" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-6 text-center text-muted-foreground">
              {filteredArticles.length === blogArticles.length ? (
                <p>Mostrando tutti i {blogArticles.length} articoli</p>
              ) : (
                <p>
                  Trovati {filteredArticles.length} articol{filteredArticles.length === 1 ? 'o' : 'i'} su {blogArticles.length}
                </p>
              )}
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Nessun articolo trovato
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prova a modificare i termini di ricerca o i filtri di categoria
                </p>
                <button
                  onClick={handleClearSearch}
                  className="bg-giolab-blue text-white px-6 py-3 rounded-lg hover:bg-giolab-blue-dark transition-colors"
                >
                  Azzera ricerca
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`}>
                    <Card className="h-full border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
                      <CardHeader>
                        {post.image.startsWith('http') || post.image.startsWith('/') ? (
                          <div className="w-full h-48 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-all bg-gray-50">
                            <OptimizedImage
                              src={post.image} 
                              alt={post.title}
                              width={400}
                              height={192}
                              className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-48 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 flex items-center justify-center mb-4 group-hover:from-giolab-blue/20 group-hover:to-giolab-blue-light/20 transition-all">
                            <span className="text-6xl">{post.image}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span className="px-2 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString('it-IT')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl leading-tight group-hover:text-giolab-blue transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-giolab-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai bisogno di assistenza per il tuo iPhone?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vieni a trovarci ad Assemini o contattaci per un preventivo gratuito!
          </p>
          <Link to="/#contatti">
            <button className="bg-white text-giolab-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Contattaci Ora
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
