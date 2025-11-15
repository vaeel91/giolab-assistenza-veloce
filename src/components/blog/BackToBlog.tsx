/**
 * BackToBlog Component
 * Pulsante di navigazione per tornare alla pagina Blog
 * 
 * Varianti:
 * - "top": Sticky in alto, visibile durante lo scroll
 * - "bottom": Static alla fine dell'articolo
 */

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackToBlogProps {
  variant?: "top" | "bottom";
}

export const BackToBlog = ({ variant = "top" }: BackToBlogProps) => {
  if (variant === "top") {
    return (
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
        <div className="container mx-auto px-4">
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
        </div>
      </div>
    );
  }

  // variant === "bottom"
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <Link to="/blog">
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna agli Articoli del Blog
        </Button>
      </Link>
    </div>
  );
};
