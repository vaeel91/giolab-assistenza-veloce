import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, FileText, Image, Link as LinkIcon, Search } from "lucide-react";

const SEODocumentation = () => {
  return (
    <>
      <SEOHead
        title="Documentazione SEO | Giolab Assemini"
        description="Guida completa alla struttura SEO del sito Giolab: meta tags, schema markup, breadcrumbs e best practices per l'ottimizzazione sui motori di ricerca."
        keywords="documentazione seo, meta tags, schema markup, breadcrumbs, ottimizzazione seo"
        ogUrl="https://giolabriparazioni.it/seo-docs"
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it" },
          { name: "Documentazione SEO", url: "https://giolabriparazioni.it/seo-docs" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-24 max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📚 Documentazione SEO Giolab
            </h1>
            <p className="text-xl text-muted-foreground">
              Guida completa alla struttura SEO implementata sul sito per garantire la massima visibilità sui motori di ricerca.
            </p>
          </div>

          {/* Meta Tags Section */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Meta Tags</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Title Tag
                </h3>
                <p className="text-muted-foreground mb-2">
                  Il title tag è il fattore SEO on-page più importante. Ogni pagina deve avere un title unico, descrittivo e contenente la keyword principale.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                  <code>&lt;title&gt;Keyword Principale | Giolab Assemini&lt;/title&gt;</code>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Lunghezza consigliata: 50-60 caratteri</li>
                  <li>• Include sempre la località (Assemini/Cagliari)</li>
                  <li>• La keyword principale all'inizio</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Meta Description
                </h3>
                <p className="text-muted-foreground mb-2">
                  Descrizione concisa che appare nei risultati di ricerca. Deve invogliare al click e contenere le keyword principali.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                  <code>&lt;meta name="description" content="Descrizione accattivante che include keyword principali e località. Max 160 caratteri." /&gt;</code>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Lunghezza massima: 160 caratteri</li>
                  <li>• Include call-to-action (es. "Prenota ora", "Scopri di più")</li>
                  <li>• Keyword naturalmente integrate</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Meta Keywords
                </h3>
                <p className="text-muted-foreground mb-2">
                  Lista di parole chiave separate da virgola. Anche se meno rilevante per Google, utile per altri motori di ricerca.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                  <code>&lt;meta name="keywords" content="keyword1, keyword2, keyword locale, servizio specifico" /&gt;</code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Open Graph Tags
                </h3>
                <p className="text-muted-foreground mb-2">
                  Meta tag per la condivisione ottimizzata sui social media (Facebook, LinkedIn, etc.).
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm space-y-1">
                  <div><code>&lt;meta property="og:title" content="Titolo" /&gt;</code></div>
                  <div><code>&lt;meta property="og:description" content="Descrizione" /&gt;</code></div>
                  <div><code>&lt;meta property="og:image" content="URL immagine" /&gt;</code></div>
                  <div><code>&lt;meta property="og:url" content="URL pagina" /&gt;</code></div>
                  <div><code>&lt;meta property="og:type" content="website" /&gt;</code></div>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Immagine OG: 1200x630px (ratio 1.91:1)</li>
                  <li>• Include logo Giolab nell'immagine</li>
                  <li>• Testo leggibile e professionale</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Schema Markup Section */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Schema Markup (JSON-LD)</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Structured data che aiuta i motori di ricerca a comprendere meglio il contenuto e mostrare rich snippets nei risultati.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🏢 Organization Schema</h3>
                <p className="text-muted-foreground mb-2">Presente in tutte le pagine per identificare Giolab come organizzazione.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Giolab - Centro Assistenza iPhone",
  "description": "Centro assistenza specializzato...",
  "url": "https://giolabriparazioni.it",
  "logo": "https://giolabriparazioni.it/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Carmine 20",
    "addressLocality": "Assemini",
    "postalCode": "09032",
    "addressCountry": "IT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39-340-697-0686",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.instagram.com/giolab_iphonefix/",
    "https://www.facebook.com/giolab_iphonefix/"
  ]
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🍞 BreadcrumbList Schema</h3>
                <p className="text-muted-foreground mb-2">Mostra la gerarchia di navigazione nei risultati di ricerca Google.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://giolabriparazioni.it"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://giolabriparazioni.it/blog"
    }
  ]
}`}</pre>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Presente in tutte le pagine del sito</li>
                  <li>• Massimo 3-4 livelli di profondità</li>
                  <li>• Migliora la navigazione nei SERP</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">📝 Article Schema</h3>
                <p className="text-muted-foreground mb-2">Per gli articoli del blog, permette rich snippet con data, autore e immagine.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titolo dell'articolo",
  "description": "Descrizione breve",
  "image": "URL immagine featured",
  "author": {
    "@type": "Person",
    "name": "Giolab Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Giolab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://giolabriparazioni.it/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">❓ FAQPage Schema</h3>
                <p className="text-muted-foreground mb-2">Per la sezione FAQ, mostra domande/risposte direttamente nei risultati Google.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Domanda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Risposta dettagliata..."
      }
    }
  ]
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🛠️ Service Schema</h3>
                <p className="text-muted-foreground mb-2">Per le pagine dei servizi, descrive il servizio offerto.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nome Servizio",
  "description": "Descrizione dettagliata",
  "provider": {
    "@type": "Organization",
    "name": "Giolab"
  },
  "areaServed": {
    "@type": "City",
    "name": "Assemini"
  },
  "serviceType": "Riparazione iPhone"
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">⭐ Review/AggregateRating Schema</h3>
                <p className="text-muted-foreground mb-2">Mostra le stelle di rating direttamente nei risultati di ricerca.</p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}</pre>
                </div>
              </div>
            </div>
          </Card>

          {/* Canonical and Links Section */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <LinkIcon className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Canonical URL e Link Structure</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🔗 Canonical Tag</h3>
                <p className="text-muted-foreground mb-2">
                  Previene problemi di contenuto duplicato indicando a Google qual è la versione principale della pagina.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                  <code>&lt;link rel="canonical" href="https://giolabriparazioni.it/pagina" /&gt;</code>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Sempre URL assoluto, mai relativo</li>
                  <li>• Include https://</li>
                  <li>• Una sola canonical per pagina</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🔤 URL Structure</h3>
                <p className="text-muted-foreground mb-2">Le URL devono essere keyword-friendly, leggibili e semantiche.</p>
                <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <code className="text-green-600">/servizi/riparazione-display-iphone-assemini</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <code className="text-green-600">/blog/come-capire-batteria-iphone-da-sostituire</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-500">✗</span>
                    <code className="text-red-600">/page?id=123&ref=abc</code>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">🔄 Internal Linking</h3>
                <p className="text-muted-foreground mb-2">Link interni per distribuire link equity e migliorare la navigazione.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ogni articolo deve linkare almeno 1-2 articoli correlati</li>
                  <li>• Link alle pagine servizi rilevanti</li>
                  <li>• Anchor text descrittivo e naturale</li>
                  <li>• Evitare anchor text generici come "clicca qui"</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Images Section */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Image className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Ottimizzazione Immagini</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Alt Text</h3>
                <p className="text-muted-foreground mb-2">
                  Testo alternativo descrittivo per ogni immagine. Importante per accessibilità e SEO immagini.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <code className="text-green-600">alt="Tecnico Giolab ripara display iPhone 13 ad Assemini"</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-red-500">✗</span>
                    <code className="text-red-600">alt="img001" o alt=""</code>
                  </div>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Descrizione accurata e concisa (max 125 caratteri)</li>
                  <li>• Include keyword quando pertinente</li>
                  <li>• Evitare "immagine di" o "foto di"</li>
                  <li>• Mai lasciare alt vuoto (tranne immagini decorative)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Formati e Compressione</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>WebP</strong> preferito per foto (migliore compressione)</li>
                  <li>• <strong>PNG</strong> per loghi e grafiche con trasparenza</li>
                  <li>• <strong>JPG</strong> compresso (80-85% qualità) per foto grandi</li>
                  <li>• Lazy loading per immagini below-the-fold</li>
                  <li>• Dimensioni responsive (srcset) per diverse risoluzioni</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Open Graph Image</h3>
                <p className="text-muted-foreground mb-2">Immagine specifica per condivisioni social:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Dimensione: 1200x630px (ratio 1.91:1)</li>
                  <li>• Formato: JPG o PNG</li>
                  <li>• Peso max: 8MB (ideale &lt; 300KB)</li>
                  <li>• Include logo Giolab</li>
                  <li>• Testo grande e leggibile</li>
                  <li>• Safe zone: margini di 40px dai bordi</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Content Best Practices */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Content Best Practices</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Struttura Heading (H1-H6)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Un solo H1</strong> per pagina (titolo principale)</li>
                  <li>• H2 per sezioni principali</li>
                  <li>• H3 per sottosezioni</li>
                  <li>• Gerarchia logica senza salti (no H2 → H4)</li>
                  <li>• Include keyword naturalmente negli heading</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Densità Keyword</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Keyword principale: 2-3% del testo totale</li>
                  <li>• Keyword secondarie sparse naturalmente</li>
                  <li>• Long-tail keyword nei sottotitoli e paragrafi</li>
                  <li>• Evitare keyword stuffing (ripetizione eccessiva)</li>
                  <li>• Sinonimi e variazioni per naturalezza</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lunghezza Contenuti</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Homepage:</strong> 500-800 parole</li>
                  <li>• <strong>Pagine servizi:</strong> 400-600 parole minimo</li>
                  <li>• <strong>Articoli blog:</strong> 600-1200 parole (ideale 800+)</li>
                  <li>• Contenuto di qualità &gt; lunghezza fine a sé stessa</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Localizzazione SEO</h3>
                <p className="text-muted-foreground mb-2">Ottimizzazione per ricerche locali Assemini/Cagliari:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Località in title, description e H1</li>
                  <li>• NAP (Name, Address, Phone) identico ovunque</li>
                  <li>• Schema LocalBusiness con indirizzo completo</li>
                  <li>• Menzione naturale di "Assemini" e "Cagliari" nel testo</li>
                  <li>• Google My Business ottimizzato e aggiornato</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Call-to-Action (CTA)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CTA visibile e chiara in ogni pagina</li>
                  <li>• Azioni specifiche: "Prenota ora", "Richiedi preventivo"</li>
                  <li>• Link diretto a WhatsApp o form contatti</li>
                  <li>• Colori contrastanti per visibilità</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Technical SEO */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Technical SEO</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sitemap.xml</h3>
                <p className="text-muted-foreground mb-2">
                  File XML che elenca tutte le pagine del sito per facilitare il crawling di Google.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Generata dinamicamente (include nuovi articoli automaticamente)</li>
                  <li>• Posizione: <code className="bg-muted/30 px-2 py-1 rounded">https://giolabriparazioni.it/sitemap.xml</code></li>
                  <li>• Inviata a Google Search Console</li>
                  <li>• Aggiornata ad ogni nuovo contenuto</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Robots.txt</h3>
                <p className="text-muted-foreground mb-2">
                  File che istruisce i crawler su quali pagine possono essere indicizzate.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <pre>{`User-agent: *
Allow: /
Allow: /blog/
Allow: /servizi/
Disallow: /admin/
Disallow: *.json$

Sitemap: https://giolabriparazioni.it/sitemap.xml`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Performance & Core Web Vitals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>LCP (Largest Contentful Paint):</strong> &lt; 2.5s</li>
                  <li>• <strong>FID (First Input Delay):</strong> &lt; 100ms</li>
                  <li>• <strong>CLS (Cumulative Layout Shift):</strong> &lt; 0.1</li>
                  <li>• Immagini lazy-loaded e ottimizzate</li>
                  <li>• CSS e JS minificati</li>
                  <li>• Font precaricati</li>
                  <li>• CDN per asset statici</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mobile-First</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Design responsive con breakpoint appropriati</li>
                  <li>• Viewport meta tag configurato</li>
                  <li>• Touch target di almeno 48x48px</li>
                  <li>• Font leggibili su mobile (min 16px)</li>
                  <li>• Google mobile-friendly test superato</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">HTTPS & Security</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certificato SSL attivo (HTTPS)</li>
                  <li>• Redirect da HTTP a HTTPS</li>
                  <li>• Security headers configurati</li>
                  <li>• Nessun mixed content (HTTP in pagina HTTPS)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Monitoring */}
          <Card className="p-8 mb-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Monitoraggio e Testing</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tool Consigliati</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Google Search Console:</strong> monitoraggio indicizzazione e performance</li>
                  <li>• <strong>Google Analytics 4:</strong> traffico e comportamento utenti</li>
                  <li>• <strong>PageSpeed Insights:</strong> performance e Core Web Vitals</li>
                  <li>• <strong>Rich Results Test:</strong> verifica schema markup</li>
                  <li>• <strong>Mobile-Friendly Test:</strong> compatibilità mobile</li>
                  <li>• <strong>Schema.org Validator:</strong> validazione JSON-LD</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">SEO Monitor Dev Tool</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  In modalità sviluppo, il sito include un monitor SEO automatico (visibile solo in dev) che verifica:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Presenza e lunghezza di title e meta description</li>
                  <li>• Open Graph tags completi</li>
                  <li>• Schema markup JSON-LD valido</li>
                  <li>• Alt text su tutte le immagini</li>
                  <li>• Canonical URL presente</li>
                  <li>• Struttura heading corretta (H1, H2, etc.)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  💡 Il monitor assegna un punteggio SEO da 0 a 100 e segnala errori/warning da risolvere.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Checklist Pre-Pubblicazione</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Title tag unico e ottimizzato (&lt;60 caratteri)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Meta description presente (&lt;160 caratteri)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Open Graph tags completi (title, description, image, url)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Canonical URL impostato correttamente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Schema markup JSON-LD presente e valido</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">BreadcrumbList implementato</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Tutte le immagini hanno alt text descrittivo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">H1 unico e keyword-rich</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Link interni ad articoli/servizi correlati</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Immagini ottimizzate (WebP, compressi)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">URL keyword-friendly e leggibile</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Mobile-friendly (test superato)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">PageSpeed &gt; 90 (desktop) e &gt; 70 (mobile)</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Reference */}
          <Card className="p-8 border-primary/20 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">📌 Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Meta Tags Essenziali</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>✓ Title (&lt;60 char)</li>
                  <li>✓ Description (&lt;160 char)</li>
                  <li>✓ Keywords</li>
                  <li>✓ Viewport</li>
                  <li>✓ Canonical</li>
                  <li>✓ OG tags (5 principali)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Schema da Includere</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>✓ Organization (tutte le pagine)</li>
                  <li>✓ BreadcrumbList (tutte le pagine)</li>
                  <li>✓ Article (articoli blog)</li>
                  <li>✓ Service (pagine servizi)</li>
                  <li>✓ FAQPage (sezione FAQ)</li>
                  <li>✓ LocalBusiness (homepage)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Keyword Target Principali</h3>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li>• riparazione iPhone Assemini</li>
                  <li>• batteria maggiorata iPhone Cagliari</li>
                  <li>• sostituzione display iPhone</li>
                  <li>• centro assistenza smartphone</li>
                  <li>• recupero dati iPhone</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Località Prioritarie</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>🎯 Assemini (primaria)</li>
                  <li>🎯 Cagliari (secondaria)</li>
                  <li>• Zona metropolitana Cagliari</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-center text-muted-foreground">
              📘 Questa documentazione è un riferimento vivo e deve essere aggiornata ad ogni modifica SEO significativa.
              <br />
              <span className="text-sm">Ultimo aggiornamento: Gennaio 2025</span>
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SEODocumentation;