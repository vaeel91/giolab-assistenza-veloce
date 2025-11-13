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

const Guide = () => {
  // Filtra articoli di tipo Guide e Consigli
  const categoryArticles = useMemo(() => {
    return blogArticles.filter(article => 
      article.category === 'Guide' ||
      article.category === 'Consigli' ||
      article.title.toLowerCase().includes('guida') ||
      article.title.toLowerCase().includes('come')
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
        "name": "Guide e Consigli"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Guide e Consigli Smartphone PC Console Assemini Cagliari | Giolab</title>
        <meta name="description" content="Guide pratiche e consigli professionali su smartphone, iPhone, PC e console ad Assemini e Cagliari. Articoli tutorial e how-to da Giolab." />
        <meta name="keywords" content="guide smartphone, consigli iPhone, tutorial riparazione, how to, guide tecniche Assemini, consigli manutenzione Cagliari" />
        <link rel="canonical" href="https://giolabriparazioni.it/blog/guide" />
        <meta property="og:title" content="Guide e Consigli Smartphone PC Console Assemini | Giolab" />
        <meta property="og:description" content="Guide pratiche e consigli professionali su smartphone, iPhone, PC e console." />
        <meta property="og:image" content="https://giolabriparazioni.it/og-images/categoria-guide-consigli.jpg" />
        <meta property="og:url" content="https://giolabriparazioni.it/blog/guide" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide e Consigli Smartphone PC Console Assemini | Giolab" />
        <meta name="twitter:description" content="Guide pratiche e consigli professionali." />
        <meta name="twitter:image" content="https://giolabriparazioni.it/og-images/categoria-guide-consigli.jpg" />
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
              <span className="text-foreground">Guide e Consigli</span>
            </nav>

            {/* Banner Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/og-images/categoria-guide-consigli.jpg" 
                alt="Guide e Consigli Tecnologia Assemini - Tutorial e how-to Giolab"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Guide e Consigli Assemini e Cagliari
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Benvenuto nella sezione <strong>Guide e Consigli di Giolab Assemini</strong>, il tuo punto di riferimento 
                per articoli pratici, tutorial e how-to su smartphone, iPhone, PC, notebook e console. Qui troverai guide 
                dettagliate scritte dai nostri tecnici esperti, pensate per aiutarti a capire meglio i tuoi dispositivi, 
                risolvere problemi comuni, prendere decisioni informate sulle riparazioni e mantenere i tuoi device in 
                perfette condizioni.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Dalla scelta tra display originali e compatibili ai consigli su come evitare che la batteria si rovini, 
                dalle guide su quando conviene riparare un iPhone vecchio ai tutorial sul trasferimento dati, ogni articolo 
                è pensato per fornirti informazioni chiare, pratiche e immediatamente applicabili. Copriamo domande 
                frequenti come "Come capire se la batteria iPhone va sostituita?", "Cosa fare se l'iPhone cade e lo schermo 
                si crepa?", "Conviene riparare un iPhone vecchio?" e molte altre. Il nostro obiettivo è darti gli strumenti 
                per prenderti cura dei tuoi dispositivi e fare scelte consapevoli presso il nostro <strong>centro assistenza 
                a Cagliari e provincia</strong>.
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
              Hai bisogno di assistenza personalizzata?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Il nostro team di esperti è pronto ad aiutarti presso Giolab Assemini. Diagnosi gratuita e consulenza professionale.
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

export default Guide;
