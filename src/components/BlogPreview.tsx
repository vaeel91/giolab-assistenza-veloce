import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogArticles } from "@/data/blogArticles";

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  // Duplica gli articoli per creare l'effetto infinito
  const duplicatedArticles = [...blogArticles, ...blogArticles];
  
  return (
    <section id="blog" ref={ref} className="py-2 md:py-3 pt-20 md:pt-24 bg-background h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-2">
          <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1">
            Articoli e Guide
          </h2>
          <p className="text-xs text-muted-foreground">
            {blogArticles.length} articoli disponibili
          </p>
        </div>

        {/* Contenitore con overflow nascosto */}
        <div className="relative max-w-6xl mx-auto flex-1 overflow-hidden">
          {/* Track dello scorrimento infinito */}
          <div className="flex gap-2 md:gap-3 animate-scroll-infinite hover:pause">
            {duplicatedArticles.map((article, index) => {
            
            return (
              <Link key={`${article.slug}-${index}`} to={`/blog/${article.slug}`} className="group flex-shrink-0 w-64 md:w-80">
                <Card className="h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg">
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
