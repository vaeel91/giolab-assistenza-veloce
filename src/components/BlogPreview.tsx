import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="blog" ref={ref} className="py-4 md:py-6 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center overflow-y-auto">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            {blogArticles.length} articoli disponibili
          </p>
        </div>

        {/* Griglia a 2 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-4 md:px-8 overflow-y-auto max-h-[70vh]">
          {blogArticles.map((article, index) => {
            const delayClass = `animation-delay-${(index % 4) * 100}`;
            
            return (
              <Link 
                key={article.slug} 
                to={`/blog/${article.slug}`} 
                className={`group ${isVisible ? 'animate-fade-in' : 'opacity-0'} ${delayClass}`}
              >
                <Card className="h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg bg-card">
                  <CardHeader className="p-2 md:p-3 pb-1 md:pb-2">
                    <div className="flex items-start gap-2 mb-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-base md:text-xl">
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
                  <CardContent className="p-2 md:p-3 pt-0">
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2 line-clamp-2 leading-relaxed">
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
        
        {/* Bottone per vedere tutti gli articoli - posizionato subito sotto le cards */}
        <div className="text-center flex-shrink-0">
          <Link to="/blog">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-giolab-blue hover:bg-giolab-blue/90 text-white rounded-lg transition-all hover:shadow-lg text-sm md:text-base font-semibold">
              Scopri tutti i {blogArticles.length} articoli
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
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
