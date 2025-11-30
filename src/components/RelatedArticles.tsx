import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { findRelatedArticles } from "@/utils/articleKeywordMatcher";
import { BlogArticle } from "@/types/blogArticle";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
  maxArticles?: number;
}

const RelatedArticles = ({ currentSlug, category, maxArticles = 3 }: RelatedArticlesProps) => {
  // Trova l'articolo corrente
  const currentArticle = blogArticles.find(article => article.slug === currentSlug);
  
  if (!currentArticle) {
    return null;
  }

  // Usa il sistema intelligente di matching
  const matches = findRelatedArticles(currentArticle, blogArticles, maxArticles);
  
  // Estrai solo gli articoli dai match
  const relatedArticles = matches.map(match => match.article);

  // Don't render if no related articles found
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 py-12 border-t-2 border-giolab-blue/20">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Articoli Correlati
          </h2>
          <Sparkles className="h-6 w-6 text-giolab-blue" />
        </div>
        <p className="text-muted-foreground">
          Selezionati automaticamente in base a categoria e keywords comuni
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <Link 
            key={article.slug} 
            to={`/blog/${article.slug}`}
            className="group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="h-full border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-giolab-blue transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm line-clamp-2 mb-3">
                  {article.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-giolab-blue text-sm font-medium group-hover:gap-3 transition-all">
                  Leggi articolo
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
