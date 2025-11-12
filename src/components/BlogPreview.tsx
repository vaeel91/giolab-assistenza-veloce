import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();
  
  // Duplica gli articoli per creare l'effetto infinito
  const duplicatedArticles = [...blogArticles, ...blogArticles];


  // Auto-scroll con pausa al tocco su mobile
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const container = scrollContainerRef.current;
    let animationId: number;
    
    const scroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += 1;
        
        // Reset quando raggiunge metà (primo set di articoli completato)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  return (
    <section id="blog" ref={ref} className="py-4 md:py-6 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            {blogArticles.length} articoli disponibili
          </p>
        </div>

        {/* Contenitore con overflow nascosto */}
        <div className="relative flex-shrink-0 mb-4">
          {/* Gradiente sfumato sinistro */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradiente sfumato destro */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Track dello scorrimento */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide relative cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              touchAction: 'pan-x'
            }}
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex gap-3 md:gap-4 px-4 md:px-8 py-2">
            {duplicatedArticles.map((article, index) => {
            
            return (
              <Link 
                key={`${article.slug}-${index}`} 
                to={`/blog/${article.slug}`} 
                className="group flex-shrink-0 w-[280px] md:w-80"
                style={{ scrollSnapAlign: 'center' }}
              >
                <Card className="h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg bg-card">
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
            </div>
          </div>
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
