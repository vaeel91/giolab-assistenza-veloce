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

const SicurezzaDigitale = () => {
  // Filtra articoli correlati a sicurezza digitale
  const categoryArticles = useMemo(() => {
    return blogArticles.filter(article => 
      article.title.toLowerCase().includes('sicurezza') ||
      article.title.toLowerCase().includes('dati') ||
      article.title.toLowerCase().includes('privacy') ||
      article.title.toLowerCase().includes('backup') ||
      article.title.toLowerCase().includes('password') ||
      article.description.toLowerCase().includes('sicurezza') ||
      article.description.toLowerCase().includes('recupero dati')
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
        "name": "Sicurezza Digitale"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sicurezza Digitale e Recupero Dati Assemini Cagliari | Guide – Giolab</title>
        <meta name="description" content="Guide sulla sicurezza digitale, recupero dati e protezione privacy ad Assemini e Cagliari. Backup, protezione e assistenza professionale da Giolab." />
        <meta name="keywords" content="sicurezza digitale Assemini, recupero dati Cagliari, backup smartphone, protezione dati, privacy digitale, recupero dati iPhone" />
        <link rel="canonical" href="https://giolabriparazioni.it/blog/sicurezza-digitale" />
        <meta property="og:title" content="Sicurezza Digitale e Recupero Dati Assemini Cagliari | Giolab" />
        <meta property="og:description" content="Guide sulla sicurezza digitale e recupero dati ad Assemini e Cagliari." />
        <meta property="og:image" content="https://giolabriparazioni.it/og-images/categoria-sicurezza-digitale.jpg" />
        <meta property="og:url" content="https://giolabriparazioni.it/blog/sicurezza-digitale" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sicurezza Digitale e Recupero Dati Assemini Cagliari | Giolab" />
        <meta name="twitter:description" content="Guide sulla sicurezza digitale e recupero dati." />
        <meta name="twitter:image" content="https://giolabriparazioni.it/og-images/categoria-sicurezza-digitale.jpg" />
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
              <span className="text-foreground">Sicurezza Digitale</span>
            </nav>

            {/* Banner Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/og-images/categoria-sicurezza-digitale.jpg" 
                alt="Sicurezza Digitale e Recupero Dati Assemini - Protezione dati e backup Giolab"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Title & Description */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sicurezza Digitale e Recupero Dati Assemini e Cagliari
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Benvenuto nella sezione dedicata alla <strong>sicurezza digitale e al recupero dati ad Assemini e Cagliari</strong>. 
                In un'epoca in cui i nostri dispositivi contengono informazioni preziose - foto, documenti di lavoro, 
                contatti, messaggi - la protezione e il recupero dei dati diventano fondamentali. <strong>Giolab Assemini</strong> 
                offre servizi professionali di recupero dati da dispositivi danneggiati, consulenza sulla sicurezza 
                digitale e supporto per la protezione della tua privacy.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Questa sezione raccoglie articoli su tematiche cruciali: come recuperare dati da un iPhone rotto o 
                danneggiato dall'acqua, le migliori strategie di backup per smartphone e PC, come proteggere i tuoi 
                dati personali, procedure di trasferimento dati sicure tra dispositivi, e consigli per prevenire la 
                perdita di informazioni importanti. Troverai anche guide sulla protezione da malware, gestione sicura 
                delle password e best practices per mantenere i tuoi dispositivi al sicuro. Il nostro team presso 
                <strong> Giolab a Cagliari e provincia</strong> ti aiuta a proteggere ciò che conta davvero: i tuoi dati.
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
              Hai perso dati importanti o vuoi proteggere il tuo dispositivo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Recupero dati professionale e consulenza sulla sicurezza digitale presso Giolab Assemini. Diagnosi gratuita.
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

export default SicurezzaDigitale;
