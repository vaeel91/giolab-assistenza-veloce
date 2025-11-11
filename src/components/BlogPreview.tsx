import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";
import { useState, useEffect } from "react";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const cardsPerPage = 3;
  const totalPages = Math.ceil(blogArticles.length / cardsPerPage);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
        setIsTransitioning(false);
      }, 500); // Durata della transizione di dissolvenza
    }, 4000); // Cambia ogni 4 secondi
    
    return () => clearInterval(interval);
  }, [totalPages]);
  
  const currentArticles = blogArticles.slice(
    currentIndex * cardsPerPage,
    (currentIndex * cardsPerPage) + cardsPerPage
  );
  
  return (
    <section id="blog" ref={ref} className="py-2 md:py-3 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-2">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs text-muted-foreground">
            Mostrando {currentArticles.length} di {blogArticles.length} articoli
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto flex-1 overflow-hidden">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}
          >
          {currentArticles.map((article, index) => {
            
            return (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group">
                <Card 
                  className="h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg"
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
          </div>
          
          {/* Indicatori di pagina */}
          <div className="flex justify-center gap-2 mt-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-giolab-blue w-6' 
                    : 'bg-muted-foreground/40 hover:bg-giolab-blue/60'
                }`}
                aria-label={`Vai alla pagina ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Bottone per vedere tutti gli articoli */}
        <div className="text-center mt-3">
          <Link to="/blog">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-giolab-blue hover:bg-giolab-blue/90 text-white rounded-lg transition-all hover:shadow-lg text-xs md:text-sm font-semibold">
              Scopri tutti i {blogArticles.length} articoli
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
