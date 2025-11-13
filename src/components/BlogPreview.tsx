import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredArticles = blogArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section id="blog" ref={ref} className="py-4 md:py-6 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 h-full flex flex-col max-w-6xl py-4">
        <div className="text-center mb-3 md:mb-4 flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-3">
            {blogArticles.length} articoli disponibili
          </p>
          
          {/* Barra di ricerca */}
          <div className="max-w-md mx-auto mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cerca articoli per parola chiave o argomento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            {searchQuery && (
              <p className="text-xs text-muted-foreground mt-2">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'risultato trovato' : 'risultati trovati'}
              </p>
            )}
          </div>
        </div>

        {/* Griglia a 2 colonne con altezza ridotta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 px-4 md:px-8 overflow-y-auto flex-1 max-h-[45vh] mb-3">
          {filteredArticles.map((article, index) => {
            const delayClass = `animation-delay-${(index % 4) * 100}`;
            
            return (
              <Link 
                key={article.slug} 
                to={`/blog/${article.slug}`} 
                className={`group ${isVisible ? 'animate-fade-in' : 'opacity-0'} ${delayClass}`}
              >
                <Card className="border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg bg-card">
                  <CardHeader className="p-2 pb-1">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-sm md:text-base">
                        {article.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="inline-block px-1.5 py-0.5 rounded-full bg-giolab-blue/10 mb-1">
                          <span className="text-[10px] md:text-xs font-medium text-giolab-blue">
                            {article.category}
                          </span>
                        </div>
                        <CardTitle className="text-xs md:text-sm font-bold text-card-foreground group-hover:text-giolab-blue transition-colors line-clamp-2 leading-tight">
                          {article.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-2 pt-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-1 line-clamp-1 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        
        {/* Bottone per vedere tutti gli articoli */}
        <div className="text-center flex-shrink-0 pt-2 pb-4">
          <Link to="/blog">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-giolab-blue hover:bg-giolab-blue/90 text-white rounded-lg transition-all hover:shadow-lg text-xs md:text-sm font-semibold">
              Visualizza tutti i {blogArticles.length} articoli
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </div>
          </Link>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;
