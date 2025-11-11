import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Sparkles, Zap, BatteryCharging } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blogArticles = [
  {
    id: "rigenerazione-vetro-iphone",
    title: "Rigenerazione Vetro iPhone: Risparmia Senza Compromessi",
    excerpt: "Scopri la rigenerazione del vetro iPhone: ripariamo solo il vetro rotto senza sostituire l'intero display. Servizio rapido, economico e di qualità.",
    category: "Servizi",
    date: "12 Gennaio 2025",
    readTime: "5 min",
    link: "/blog/rigenerazione-vetro-iphone",
    icon: Sparkles,
    iconColor: "text-purple-500",
  },
  {
    id: "riparazione-iphone-1-ora",
    title: "Riparazione iPhone in 1 Ora: Come Funziona il Servizio Giolab",
    excerpt: "Scopri come riusciamo a riparare il tuo iPhone in tempi record senza compromettere la qualità. Il metodo Giolab spiegato passo passo.",
    category: "Servizi",
    date: "13 Gennaio 2025",
    readTime: "4 min",
    link: "/blog/riparazione-iphone-1-ora-giolab",
    icon: Zap,
    iconColor: "text-yellow-500",
  },
  {
    id: "vantaggi-batteria-maggiorata",
    title: "Vantaggi della Batteria Maggiorata per iPhone: Più Autonomia",
    excerpt: "Scopri tutti i vantaggi di installare una batteria maggiorata sul tuo iPhone: più autonomia, migliori prestazioni e meno stress da ricarica.",
    category: "Guide",
    date: "14 Gennaio 2025",
    readTime: "6 min",
    link: "/blog/vantaggi-batteria-maggiorata-iphone",
    icon: BatteryCharging,
    iconColor: "text-green-500",
  },
];

const BlogPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="blog" ref={ref} className="py-4 md:py-6 bg-background h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
            Articoli e Guide
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Consigli utili per la cura dei tuoi dispositivi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 max-w-7xl mx-auto">
          {blogArticles.map((article, index) => {
            const IconComponent = article.icon;
            const delay = index * 100;
            
            return (
              <Link key={article.id} to={article.link} className="group">
                <Card 
                  className={`h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <CardHeader className="p-3 md:p-4 pb-2 md:pb-3">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-5 w-5 md:h-6 md:w-6 ${article.iconColor}`} />
                      </div>
                      <span className="px-2 py-0.5 bg-giolab-blue/10 text-giolab-blue rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-sm md:text-base leading-tight line-clamp-2 group-hover:text-giolab-blue transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0 md:p-4 md:pt-0">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-3 md:mt-4">
          <Link to="/blog">
            <Button variant="outline" size="sm" className="border-giolab-blue text-giolab-blue hover:bg-giolab-blue hover:text-white text-xs md:text-sm">
              Vedi tutti gli articoli
              <ArrowRight className="ml-1.5 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
