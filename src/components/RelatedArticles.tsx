import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
  maxArticles?: number;
}

const RelatedArticles = ({ currentSlug, category, maxArticles = 3 }: RelatedArticlesProps) => {
  // Filter articles by same category, excluding current article
  const relatedArticles = blogArticles
    .filter(article => article.category === category && article.slug !== currentSlug)
    .slice(0, maxArticles);

  // If not enough articles in same category, add articles from other categories
  if (relatedArticles.length < maxArticles) {
    const additionalArticles = blogArticles
      .filter(article => article.slug !== currentSlug && !relatedArticles.includes(article))
      .slice(0, maxArticles - relatedArticles.length);
    relatedArticles.push(...additionalArticles);
  }

  // Don't render if no related articles found
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 py-12 border-t-2 border-giolab-blue/20">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Articoli Correlati
        </h2>
        <p className="text-muted-foreground">
          Continua a leggere altri articoli che potrebbero interessarti
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
                <div className="w-full h-32 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 flex items-center justify-center mb-4 group-hover:from-giolab-blue/20 group-hover:to-giolab-blue-light/20 transition-all">
                  <span className="text-5xl">{article.image}</span>
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
