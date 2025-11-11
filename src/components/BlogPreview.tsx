import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Mostra i primi 9 articoli più recenti
  const displayedArticles = blogArticles.slice(0, 9);
  
  return (
    <section id="blog" ref={ref} className="py-4 md:py-6 bg-background h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
            Articoli e Guide
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-2">
            Consigli utili per la cura dei tuoi dispositivi
          </p>
          <p className="text-xs text-muted-foreground">
            Mostrando {displayedArticles.length} di {blogArticles.length} articoli disponibili
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 max-w-7xl mx-auto">
          {displayedArticles.map((article, index) => {
            const delay = index * 100;
            
            return (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group">
                <Card 
                  className={`h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <CardHeader className="p-3 md:p-4 pb-2 md:pb-3">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-xl md:text-2xl">
                        {article.image}
                      </div>
                      <span className="px-2 py-0.5 bg-giolab-blue/10 text-giolab-blue rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-sm md:text-base leading-tight line-clamp-2 group-hover:text-giolab-blue transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0 md:p-4 md:pt-0">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-4 md:mt-6 space-y-2">
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-giolab-blue hover:bg-giolab-blue/90 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl transition-all"
            >
              Scopri tutti i {blogArticles.length} articoli
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground">
            Guide complete, tutorial e consigli per i tuoi dispositivi
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
