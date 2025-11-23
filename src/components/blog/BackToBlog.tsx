/**
 * BackToBlog Component
 * Pulsante di navigazione per tornare alla pagina Blog
 * 
 * Varianti:
 * - "top": Sticky in alto, visibile durante lo scroll
 * - "bottom": Static alla fine dell'articolo
 */

import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";

interface BackToBlogProps {
  variant?: "top" | "bottom";
  currentSlug?: string;
}

export const BackToBlog = ({ variant = "top", currentSlug }: BackToBlogProps) => {
  // Trova l'articolo corrente e il prossimo
  const currentIndex = currentSlug 
    ? blogArticles.findIndex(article => article.slug === currentSlug)
    : -1;
  
  const nextArticle = currentIndex >= 0 && currentIndex < blogArticles.length - 1
    ? blogArticles[currentIndex + 1]
    : null;
  if (variant === "top") {
    return (
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link to="/blog">
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Torna al Blog</span>
              <span className="sm:hidden">Blog</span>
            </Button>
          </Link>
          
          {nextArticle && (
            <Link to={`/blog/${nextArticle.slug}`}>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <span className="hidden sm:inline">Prossimo Articolo</span>
                <span className="sm:hidden">Prossimo</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  }

  // variant === "bottom"
  return (
    <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      <Link to="/blog" className="flex-1 sm:flex-initial">
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna agli Articoli del Blog
        </Button>
      </Link>
      
      {nextArticle && (
        <Link to={`/blog/${nextArticle.slug}`} className="flex-1 sm:flex-initial">
          <Button 
            variant="default" 
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            Prossimo Articolo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};
