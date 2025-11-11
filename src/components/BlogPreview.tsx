import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Mostra i primi 8 articoli più recenti (il 9° posto sarà il bottone)
  const displayedArticles = blogArticles.slice(0, 8);
  
  return (
    <section id="blog" ref={ref} className="py-2 md:py-3 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-2">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs text-muted-foreground">
            {displayedArticles.length} di {blogArticles.length} articoli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2 max-w-6xl mx-auto flex-1 overflow-hidden">
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
                  <CardHeader className="p-2 md:p-3 pb-1 md:pb-2">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-base md:text-xl">
                        {article.image}
                      </div>
                      <span className="px-1.5 py-0.5 bg-giolab-blue/10 text-giolab-blue rounded text-[10px] font-medium">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xs md:text-sm leading-tight line-clamp-2 group-hover:text-giolab-blue transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 pt-0 md:p-3 md:pt-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-[9px] md:text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="flex items-center gap-0.5">
                          <Clock className="h-2.5 w-2.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-2.5 w-2.5 md:h-3 md:w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
          
          {/* Card speciale con bottone per vedere tutti gli articoli */}
          <Link to="/blog" className="group">
            <Card 
              className={`h-full border-2 border-giolab-blue bg-gradient-to-br from-giolab-blue/5 to-giolab-blue/10 hover:from-giolab-blue/10 hover:to-giolab-blue/20 transition-all duration-300 hover:shadow-xl flex items-center justify-center ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${800}ms` }}
            >
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-giolab-blue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-giolab-blue mb-2">
                  Scopri tutti gli articoli
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {blogArticles.length} guide e tutorial disponibili
                </p>
                <div className="text-xs font-semibold text-giolab-blue group-hover:underline">
                  Vai al blog completo →
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
