import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, Search, X } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Estrai categorie uniche
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogArticles.map(article => article.category)));
    return uniqueCategories.sort();
  }, []);

  // Filtra articoli basandosi sulla ricerca e categoria
  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article => {
      const matchesSearch = searchQuery.trim() === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Blog Giolab | Guide e Consigli su Riparazione iPhone e Smartphone | Assemini"
        description="Articoli, guide e consigli su riparazione iPhone, batterie maggiorate, manutenzione smartphone e molto altro. Blog del centro assistenza Giolab di Assemini."
        keywords="blog riparazione iPhone, guide iPhone, consigli batteria iPhone, manutenzione smartphone, assistenza iPhone Assemini"
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
              Guide, consigli e approfondimenti su riparazione iPhone, batterie maggiorate, manutenzione e assistenza smartphone ad Assemini e Cagliari.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cerca articoli per parola chiave, titolo o contenuto..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-14 text-lg border-2 focus:border-giolab-blue"
                />
                {(searchQuery || selectedCategory) && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-giolab-blue text-white"
                      : "bg-background text-muted-foreground hover:bg-giolab-blue/10 hover:text-giolab-blue border-2"
                  }`}
                >
                  Tutti
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-giolab-blue text-white"
                        : "bg-background text-muted-foreground hover:bg-giolab-blue/10 hover:text-giolab-blue border-2"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
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
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 flex items-center justify-center mb-4 group-hover:from-giolab-blue/20 group-hover:to-giolab-blue-light/20 transition-all">
                        <span className="text-6xl">{post.image}</span>
                      </div>
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
    </div>
  );
};

export default Blog;
