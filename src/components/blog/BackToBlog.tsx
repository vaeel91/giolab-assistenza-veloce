/**
 * BackToBlog Component
 * Pulsante di navigazione per tornare alla pagina Blog
 * 
 * Varianti:
 * - "top": Sticky in alto, visibile durante lo scroll
 * - "bottom": Static alla fine dell'articolo
 */

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";

interface BackToBlogProps {
  variant?: "top" | "bottom";
  currentSlug?: string;
}

export const BackToBlog = ({ variant = "top", currentSlug }: BackToBlogProps) => {
  // Trova l'articolo corrente, il precedente e il prossimo
  const currentIndex = currentSlug 
    ? blogArticles.findIndex(article => article.slug === currentSlug)
    : -1;
  
  const prevArticle = currentIndex > 0
    ? blogArticles[currentIndex - 1]
    : null;
  
  const nextArticle = currentIndex >= 0 && currentIndex < blogArticles.length - 1
    ? blogArticles[currentIndex + 1]
    : null;
  if (variant === "top") {
    return (
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a href="/blog">
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Torna al Blog</span>
                <span className="sm:hidden">Blog</span>
              </Button>
            </a>
            
            {prevArticle && (
              <a href={`/blog/${prevArticle.slug}`}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-2 hover:bg-muted transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden md:inline">Precedente</span>
                </Button>
              </a>
            )}
          </div>
          
          {nextArticle && (
            <a href={`/blog/${nextArticle.slug}`}>
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2 hover:bg-muted transition-all"
              >
                <span className="hidden md:inline">Prossimo</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    );
  }

  // variant === "bottom"
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <div className="flex flex-col gap-6">
        {/* Navigazione articoli precedente/prossimo */}
        {(prevArticle || nextArticle) && (
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            {prevArticle ? (
              <a href={`/blog/${prevArticle.slug}`} className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full gap-2 hover:bg-muted transition-all h-auto py-4 flex-col items-start"
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <ArrowLeft className="w-4 h-4" />
                    Articolo Precedente
                  </div>
                  <span className="text-left font-semibold line-clamp-2">
                    {prevArticle.title}
                  </span>
                </Button>
              </a>
            ) : (
              <div className="flex-1" />
            )}
            
            {nextArticle ? (
              <a href={`/blog/${nextArticle.slug}`} className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full gap-2 hover:bg-muted transition-all h-auto py-4 flex-col items-end"
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    Prossimo Articolo
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="text-right font-semibold line-clamp-2">
                    {nextArticle.title}
                  </span>
                </Button>
              </a>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        )}
        
        {/* Bottone torna al blog */}
        <a href="/blog">
          <Button 
            variant="default" 
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna agli Articoli del Blog
          </Button>
        </a>
      </div>
    </div>
  );
};
