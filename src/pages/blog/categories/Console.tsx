import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";

const Console = () => {
  // Filtra articoli correlati a console
  const categoryArticles = useMemo(() => {
    return blogArticles.filter(article => 
      article.title.toLowerCase().includes('ps5') ||
      article.title.toLowerCase().includes('ps4') ||
      article.title.toLowerCase().includes('playstation') ||
      article.title.toLowerCase().includes('xbox') ||
      article.title.toLowerCase().includes('nintendo') ||
      article.title.toLowerCase().includes('console') ||
      article.description.toLowerCase().includes('console')
    );
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://giolabriparazioni.it/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://giolabriparazioni.it/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Console"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Riparazione Console Gaming Assemini e Cagliari | Guide PS5 Xbox – Giolab</title>
        <meta name="description" content="Articoli e guide sulla riparazione console gaming PS5, PS4, Xbox e Nintendo ad Assemini e Cagliari. Assistenza professionale e consigli da Giolab." />
        <meta name="keywords" content="riparazione PS5 Assemini, riparazione console Cagliari, assistenza PlayStation, riparazione Xbox, Nintendo Switch riparazione Sardegna" />
        <link rel="canonical" href="https://giolabriparazioni.it/blog/console" />
        <meta property="og:title" content="Riparazione Console Gaming Assemini e Cagliari | Guide – Giolab" />
        <meta property="og:description" content="Guide sulla riparazione console gaming PS5, PS4, Xbox e Nintendo." />
        <meta property="og:image" content="https://giolabriparazioni.it/og-images/categoria-console.jpg" />
        <meta property="og:url" content="https://giolabriparazioni.it/blog/console" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Riparazione Console Gaming Assemini e Cagliari | Guide – Giolab" />
        <meta name="twitter:description" content="Guide sulla riparazione console gaming." />
        <meta name="twitter:image" content="https://giolabriparazioni.it/og-images/categoria-console.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section con Banner */}
      <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-br from-background via-giolab-gray to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-giolab-blue transition-colors">Home</Link>
              <span className="mx-2">→</span>
              <Link to="/blog" className="hover:text-giolab-blue transition-colors">Blog</Link>
              <span className="mx-2">→</span>
              <span className="text-foreground">Console</span>
            </nav>

            {/* Banner Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/og-images/categoria-console.jpg" 
                alt="Riparazione Console Gaming Assemini - Centro assistenza PS5 Xbox Nintendo Giolab"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Riparazione Console Gaming Assemini e Cagliari
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Benvenuto nella sezione dedicata alla <strong>riparazione console gaming ad Assemini e Cagliari</strong>. 
                Qui troverai articoli specializzati su PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, 
                Nintendo Switch e altre console da gioco. <strong>Giolab Assemini</strong> è il punto di riferimento 
                in Sardegna per l'assistenza e la riparazione di console gaming, con tecnici esperti e attrezzature 
                professionali per ogni tipo di intervento.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Copriamo tutti gli aspetti della riparazione console: dal surriscaldamento alle ventole rumorose, 
                dalla sostituzione di lettori ottici ai problemi di connettività, dalla pulizia profonda con pasta 
                termica alla riparazione di controller. Troverai guide dettagliate su come mantenere in salute la 
                tua console, consigli per il posizionamento ottimale (verticale vs orizzontale per PS5), procedure 
                di diagnosi per problemi comuni e soluzioni professionali per guasti hardware. Ogni articolo è scritto 
                dal nostro team con esperienza decennale nell'<strong>assistenza console gaming a Cagliari e provincia</strong>.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Badge variant="default" className="text-sm">
                {categoryArticles.length} articoli disponibili
              </Badge>
              <span>📍 Giolab Assemini - Via Carmine 20</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryArticles.map((article) => (
                <Link 
                  key={article.slug} 
                  to={`/blog/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full border hover:border-giolab-blue transition-all duration-300 hover:shadow-xl bg-card">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-giolab-blue transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 line-clamp-3">
                        {article.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} di lettura</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {categoryArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Nessun articolo disponibile in questa categoria al momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-giolab-blue/10 via-background to-giolab-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              La tua console ha problemi?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Riparazione professionale di tutte le console da gioco presso Giolab Assemini. Diagnosi gratuita e preventivo immediato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contatti#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-giolab-blue text-white font-semibold hover:bg-giolab-blue/90 transition-all shadow-lg hover:shadow-xl"
              >
                Contattaci Ora
              </Link>
              <Link 
                to="/dove-siamo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-giolab-blue text-giolab-blue font-semibold hover:bg-giolab-blue/10 transition-all"
              >
                Vieni in Negozio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Console;
