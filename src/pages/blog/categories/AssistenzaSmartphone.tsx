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

const AssistenzaSmartphone = () => {
  // Filtra articoli correlati ad assistenza smartphone
  const categoryArticles = useMemo(() => {
    return blogArticles.filter(article => 
      article.category === 'Assistenza' ||
      article.title.toLowerCase().includes('smartphone') ||
      article.description.toLowerCase().includes('smartphone') ||
      article.title.toLowerCase().includes('android')
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
        "name": "Assistenza Smartphone"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Assistenza Smartphone Assemini e Cagliari | Guide e Soluzioni – Giolab</title>
        <meta name="description" content="Guide complete sull'assistenza smartphone Android e iOS ad Assemini e Cagliari. Riparazioni, manutenzione e consigli professionali da Giolab." />
        <meta name="keywords" content="assistenza smartphone Assemini, assistenza smartphone Cagliari, riparazione Android, riparazione Samsung, assistenza telefoni, centro assistenza Cagliari" />
        <link rel="canonical" href="https://giolabriparazioni.it/blog/assistenza-smartphone" />
        <meta property="og:title" content="Assistenza Smartphone Assemini e Cagliari | Guide – Giolab" />
        <meta property="og:description" content="Guide complete sull'assistenza smartphone Android e iOS ad Assemini e Cagliari." />
        <meta property="og:image" content="https://giolabriparazioni.it/og-images/categoria-assistenza-smartphone.jpg" />
        <meta property="og:url" content="https://giolabriparazioni.it/blog/assistenza-smartphone" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Assistenza Smartphone Assemini e Cagliari | Guide – Giolab" />
        <meta name="twitter:description" content="Guide complete sull'assistenza smartphone ad Assemini e Cagliari." />
        <meta name="twitter:image" content="https://giolabriparazioni.it/og-images/categoria-assistenza-smartphone.jpg" />
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
              <span className="text-foreground">Assistenza Smartphone</span>
            </nav>

            {/* Banner Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/og-images/categoria-assistenza-smartphone.jpg" 
                alt="Assistenza Smartphone Assemini - Centro riparazione multimarca Giolab"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Assistenza Smartphone Assemini e Cagliari
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Benvenuto nella sezione dedicata all'<strong>assistenza smartphone ad Assemini e Cagliari</strong>. 
                Questa categoria raccoglie articoli specializzati su tutti i tipi di smartphone: iPhone, Samsung, 
                Xiaomi, Huawei e molti altri brand. Presso <strong>Giolab Assemini</strong>, offriamo assistenza 
                multimarca completa con tecnici certificati e ricambi originali.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Dai problemi software alle riparazioni hardware, dal trasferimento dati alla diagnostica avanzata, 
                troverai guide dettagliate scritte dai nostri esperti. Ogni articolo è pensato per aiutarti a 
                comprendere meglio il tuo dispositivo e scoprire le soluzioni più efficaci disponibili presso il 
                nostro <strong>centro assistenza smartphone a Cagliari e provincia</strong>. Copriamo riparazioni 
                display, sostituzione batterie, problemi di ricarica, fotocamere difettose, recupero dati e molto altro.
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
              Il tuo smartphone ha bisogno di assistenza?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Assistenza multimarca presso Giolab Assemini. Diagnosi gratuita e preventivo immediato per tutti i dispositivi.
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

export default AssistenzaSmartphone;
