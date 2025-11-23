import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Instagram } from "lucide-react";

const RigenerazioneVetroIphoneIpadAppleWatch = () => {
  const articleUrl = "https://giolabriparazioni.it/blog/rigenerazione-vetro-iphone-ipad-apple-watch";
  
  const tableOfContents = [
    { id: "cosa-e-rigenerazione", title: "Cos'è la rigenerazione del vetro" },
    { id: "come-funziona", title: "Come funziona il processo" },
    { id: "vantaggi", title: "Vantaggi della rigenerazione" },
    { id: "iphone", title: "Rigenerazione vetro iPhone" },
    { id: "ipad", title: "Rigenerazione vetro iPad" },
    { id: "apple-watch", title: "Rigenerazione vetro Apple Watch" },
    { id: "quando-conviene", title: "Quando conviene rigenerare" },
    { id: "faq", title: "Domande frequenti" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Rigenerazione Vetro iPhone, iPad e Apple Watch | GioLab Assemini</title>
        <meta name="description" content="Rigenerazione del vetro per iPhone, iPad e Apple Watch ad Assemini (Cagliari). Risparmio fino al 50%, qualità certificata e tempi rapidi. Scopri come funziona." />
        <meta name="keywords" content="rigenerazione vetro iPhone, rigenerazione schermo iPad, cambio vetro Apple Watch, riparazione display iPhone Assemini, rigenerazione vetro Cagliari, GioLab" />
        <link rel="canonical" href={articleUrl} />
        
        <meta property="og:title" content="Rigenerazione Vetro iPhone, iPad e Apple Watch | GioLab Assemini" />
        <meta property="og:description" content="Rigenerazione del vetro per iPhone, iPad e Apple Watch ad Assemini (Cagliari). Risparmio fino al 50%, qualità certificata e tempi rapidi." />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://giolabriparazioni.it/og-images/rigenerazione-vetro.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rigenerazione Vetro iPhone, iPad e Apple Watch | GioLab Assemini" />
        <meta name="twitter:description" content="Rigenerazione del vetro per iPhone, iPad e Apple Watch ad Assemini (Cagliari). Risparmio fino al 50%, qualità certificata." />
        <meta name="twitter:image" content="https://giolabriparazioni.it/og-images/rigenerazione-vetro.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Rigenerazione del vetro per iPhone, iPad e Apple Watch: guida completa",
            "description": "Scopri come funziona la rigenerazione del vetro su iPhone, iPad e Apple Watch ad Assemini (Cagliari): vantaggi, processo tecnico e perché conviene.",
            "author": {
              "@type": "Organization",
              "name": "Giolab"
            },
            "datePublished": "2025-01-01",
            "image": "https://giolabriparazioni.it/og-images/rigenerazione-vetro.jpg",
            "publisher": {
              "@type": "Organization",
              "name": "GioLab Riparazioni",
              "logo": {
                "@type": "ImageObject",
                "url": "https://giolabriparazioni.it/og-image-giolab.jpg"
              }
            }
          })}
        </script>
      </Helmet>

      <ReadingProgress />
      <Header />
      
      <main className="min-h-screen bg-white pt-32 pb-16">
        <article className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/blog" className="hover:text-primary">Blog</a></li>
              <li>/</li>
              <li className="text-foreground">Rigenerazione vetro</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
              <time dateTime="2025-01-01">1 gennaio 2025</time>
              <span>8 min di lettura</span>
            </div>
            
            <h1 className="blog-h1 mb-6">
              Rigenerazione del Vetro per iPhone, iPad e Apple Watch: Guida Completa
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Scopri come funziona la rigenerazione del solo vetro per dispositivi Apple ad Assemini (Cagliari): 
              vantaggi economici, processo tecnico professionale e quando conviene davvero.
            </p>
          </header>

          {/* Social Share Top */}
          <div className="mb-8">
            <SocialShare url={articleUrl} title="Rigenerazione Vetro iPhone, iPad e Apple Watch" />
          </div>

          {/* Table of Contents */}
          <Card className="p-6 mb-12 bg-secondary/30">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              📑 Indice dell'articolo
            </h2>
            <nav>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-primary hover:underline text-left"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </Card>

          {/* Article Content */}
          <div className="blog-content">
            
            <section id="cosa-e-rigenerazione" className="mb-12">
              <h2 className="blog-h2">Cos'è la Rigenerazione del Vetro</h2>
              
              <p className="blog-paragraph">
                La <strong>rigenerazione del vetro</strong> è un processo tecnico avanzato che permette di 
                sostituire solo il vetro protettivo rotto di iPhone, iPad o Apple Watch, mantenendo intatto 
                il pannello OLED o LCD originale sottostante.
              </p>

              <p className="blog-paragraph">
                A differenza della sostituzione completa del display, questo intervento specializzato 
                consente di <strong>riparare solo ciò che è danneggiato</strong>, con un risparmio economico 
                significativo e mantenendo la qualità originale Apple.
              </p>

              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop" 
                alt="Processo di rigenerazione vetro iPhone con macchinari professionali"
                className="w-full max-w-full h-auto rounded-lg my-8 shadow-md"
              />

              <div className="blog-highlight-box blog-highlight-info">
                <strong>💡 Importante:</strong> La rigenerazione è possibile solo quando il display 
                funziona perfettamente e il danno riguarda esclusivamente il vetro esterno.
              </div>
            </section>

            <section id="come-funziona" className="mb-12">
              <h2 className="blog-h2">Come Funziona il Processo di Rigenerazione</h2>
              
              <p className="blog-paragraph">
                Il processo di rigenerazione richiede attrezzature specializzate e competenze tecniche 
                elevate. Ecco le fasi principali:
              </p>

              <ol className="blog-list-numbered">
                <li>
                  <strong>Diagnosi iniziale:</strong> Verifica che il display funzioni correttamente 
                  (touchscreen, luminosità, colori) e che solo il vetro sia danneggiato
                </li>
                <li>
                  <strong>Separazione vetro-display:</strong> Utilizzo di macchinari professionali 
                  (laminatrice) per separare delicatamente il vetro rotto dal pannello OLED/LCD
                </li>
                <li>
                  <strong>Pulizia microtecnica:</strong> Rimozione completa di residui di colla e 
                  vetro dal display originale con solventi specifici
                </li>
                <li>
                  <strong>Applicazione vetro nuovo:</strong> Installazione di un vetro di ricambio 
                  di alta qualità con colla ottica OCA professionale
                </li>
                <li>
                  <strong>Laminazione in autoclave:</strong> Pressione e temperatura controllate 
                  per garantire adesione perfetta senza bolle
                </li>
                <li>
                  <strong>Test finale:</strong> Verifica completa di touch, display e funzionalità
                </li>
              </ol>

              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop" 
                alt="Macchinario professionale per rigenerazione vetro display"
                className="w-full max-w-full h-auto rounded-lg my-8 shadow-md"
              />

              <p className="blog-paragraph">
                Da <strong>GioLab ad Assemini</strong> utilizziamo esclusivamente macchinari professionali 
                certificati e vetri di grado premium, garantendo risultati identici allo standard Apple.
              </p>
            </section>

            <section id="vantaggi" className="mb-12">
              <h2 className="blog-h2">Vantaggi della Rigenerazione del Vetro</h2>
              
              <p className="blog-paragraph">
                Scegliere la rigenerazione invece della sostituzione completa offre numerosi benefici:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="p-4">
                  <h3 className="font-semibold text-primary mb-2">💰 Risparmio Economico</h3>
                  <p className="text-sm">
                    Fino al 50% in meno rispetto alla sostituzione display completo, 
                    mantenendo qualità originale Apple
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold text-primary mb-2">🔧 Display Originale</h3>
                  <p className="text-sm">
                    Mantieni il pannello OLED/LCD originale Apple con tutte le sue caratteristiche
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold text-primary mb-2">⚡ Tempi Rapidi</h3>
                  <p className="text-sm">
                    Intervento completato in giornata presso il nostro centro di Assemini
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold text-primary mb-2">🌱 Sostenibilità</h3>
                  <p className="text-sm">
                    Riduzione rifiuti elettronici riparando solo il componente danneggiato
                  </p>
                </Card>
              </div>

              <div className="blog-highlight-box blog-highlight-success">
                <strong>✅ Garanzia GioLab:</strong> Tutti gli interventi di rigenerazione vetro 
                includono 12 mesi di garanzia contro difetti di lavorazione.
              </div>
            </section>

            <section id="iphone" className="mb-12">
              <h2 className="blog-h2">Rigenerazione Vetro iPhone</h2>
              
              <p className="blog-paragraph">
                La rigenerazione del vetro per <strong>iPhone</strong> è tra i servizi più richiesti 
                nel nostro centro di Assemini. È particolarmente indicata per modelli recenti:
              </p>

              <ul className="blog-list-bulleted">
                <li>iPhone 15 Pro Max, 15 Pro, 15 Plus, 15</li>
                <li>iPhone 14 Pro Max, 14 Pro, 14 Plus, 14</li>
                <li>iPhone 13 Pro Max, 13 Pro, 13, 13 Mini</li>
                <li>iPhone 12 Pro Max, 12 Pro, 12, 12 Mini</li>
                <li>iPhone 11 Pro Max, 11 Pro, 11</li>
              </ul>

              <img 
                src="https://images.unsplash.com/photo-1592286927505-f0e6ff706c5c?w=800&h=500&fit=crop" 
                alt="iPhone con vetro rotto pronto per rigenerazione"
                className="w-full max-w-full h-auto rounded-lg my-8 shadow-md"
              />

              <p className="blog-paragraph">
                Il processo di rigenerazione per iPhone preserva tutte le funzionalità avanzate del 
                display originale: <strong>True Tone, Haptic Touch, ProMotion 120Hz</strong> (sui modelli Pro), 
                e la calibrazione colore perfetta Apple.
              </p>

              <div className="blog-highlight-box blog-highlight-warning">
                <strong>⚠️ Attenzione:</strong> Se il touchscreen non risponde o il display presenta 
                macchie/righe, la rigenerazione non è possibile. Contattaci per una diagnosi gratuita.
              </div>
            </section>

            <section id="ipad" className="mb-12">
              <h2 className="blog-h2">Rigenerazione Vetro iPad</h2>
              
              <p className="blog-paragraph">
                Per gli <strong>iPad</strong>, la rigenerazione del vetro rappresenta un'opzione 
                economicamente vantaggiosa, considerando l'alto costo dei display completi Apple:
              </p>

              <div className="table-responsive">
                <table className="blog-table">
                  <thead>
                    <tr>
                      <th>Modello iPad</th>
                      <th>Display Completo</th>
                      <th>Rigenerazione Vetro</th>
                      <th>Risparmio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>iPad Pro 12.9"</td>
                      <td>€450-600</td>
                      <td>€220-280</td>
                      <td>~50%</td>
                    </tr>
                    <tr>
                      <td>iPad Pro 11"</td>
                      <td>€350-450</td>
                      <td>€180-230</td>
                      <td>~48%</td>
                    </tr>
                    <tr>
                      <td>iPad Air</td>
                      <td>€280-350</td>
                      <td>€150-190</td>
                      <td>~46%</td>
                    </tr>
                    <tr>
                      <td>iPad (standard)</td>
                      <td>€220-280</td>
                      <td>€120-160</td>
                      <td>~43%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="blog-paragraph">
                I prezzi sono indicativi e possono variare in base al modello specifico e alla 
                disponibilità dei ricambi. <strong>Contattaci per un preventivo personalizzato</strong> 
                per il tuo iPad ad Assemini o Cagliari.
              </p>
            </section>

            <section id="apple-watch" className="mb-12">
              <h2 className="blog-h2">Rigenerazione Vetro Apple Watch</h2>
              
              <p className="blog-paragraph">
                L'<strong>Apple Watch</strong>, per le sue dimensioni ridotte e la curvatura del vetro, 
                richiede particolare precisione nella rigenerazione. Interveniamo su:
              </p>

              <ul className="blog-list-bulleted">
                <li>Apple Watch Series 9, 8, 7, 6, SE</li>
                <li>Apple Watch Ultra 2, Ultra</li>
                <li>Modelli in alluminio, acciaio e titanio</li>
              </ul>

              <img 
                src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=500&fit=crop" 
                alt="Apple Watch con vetro danneggiato"
                className="w-full max-w-full h-auto rounded-lg my-8 shadow-md"
              />

              <p className="blog-paragraph">
                La rigenerazione su Apple Watch preserva la <strong>certificazione di resistenza all'acqua</strong> 
                grazie all'utilizzo di sigillanti originali e test di tenuta post-riparazione.
              </p>

              <div className="blog-highlight-box blog-highlight-info">
                <strong>💡 Nota tecnica:</strong> Per gli Apple Watch Ultra con vetro zaffiro, 
                valutiamo caso per caso la fattibilità della rigenerazione in base al tipo di danno.
              </div>
            </section>

            <section id="quando-conviene" className="mb-12">
              <h2 className="blog-h2">Quando Conviene Rigenerare il Vetro</h2>
              
              <p className="blog-paragraph">
                La rigenerazione del vetro è la scelta ideale quando:
              </p>

              <ul className="blog-list-bulleted">
                <li>✅ Il vetro è rotto ma il display funziona perfettamente</li>
                <li>✅ Il touchscreen risponde correttamente a tutti i tocchi</li>
                <li>✅ Non ci sono macchie, righe o aree nere sul display</li>
                <li>✅ La luminosità e i colori sono perfetti</li>
                <li>✅ Vuoi risparmiare mantenendo la qualità originale</li>
                <li>✅ Il dispositivo ha valore (modello recente o di fascia alta)</li>
              </ul>

              <p className="blog-paragraph mt-6">
                <strong>Non conviene rigenerare quando:</strong>
              </p>

              <ul className="blog-list-bulleted">
                <li>❌ Il display presenta macchie o non funziona</li>
                <li>❌ Il touchscreen non risponde in alcune aree</li>
                <li>❌ Ci sono righe verticali o orizzontali</li>
                <li>❌ Il dispositivo è molto vecchio (oltre 5-6 anni)</li>
                <li>❌ Il costo della rigenerazione supera il 70% del valore del device</li>
              </ul>

              <p className="blog-paragraph">
                Da <strong>GioLab Assemini</strong> offriamo sempre una <strong>diagnosi gratuita</strong> per 
                valutare la fattibilità della rigenerazione e consigliarti la soluzione più conveniente.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="blog-h2">Domande Frequenti sulla Rigenerazione Vetro</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="blog-h3">Quanto tempo richiede la rigenerazione del vetro?</h3>
                  <p className="blog-paragraph">
                    Normalmente completiamo l'intervento in <strong>giornata</strong>. Per dispositivi 
                    particolarmente complessi o con problematiche specifiche, potrebbero essere necessari 
                    1-2 giorni lavorativi. Ti comunicheremo i tempi precisi dopo la diagnosi.
                  </p>
                </div>

                <div>
                  <h3 className="blog-h3">La rigenerazione invalida la garanzia Apple?</h3>
                  <p className="blog-paragraph">
                    Se il dispositivo è ancora in garanzia Apple o AppleCare+, qualsiasi riparazione 
                    presso centri non autorizzati può invalidarla. Valutiamo sempre insieme la soluzione 
                    migliore per la tua situazione specifica.
                  </p>
                </div>

                <div>
                  <h3 className="blog-h3">Il vetro rigenerato è resistente come l'originale?</h3>
                  <p className="blog-paragraph">
                    Utilizziamo <strong>vetri premium di alta qualità</strong> con caratteristiche 
                    molto simili all'originale Apple. La resistenza ai graffi e agli urti è paragonabile, 
                    ma consigliamo sempre l'uso di una protezione aggiuntiva.
                  </p>
                </div>

                <div>
                  <h3 className="blog-h3">Dopo la rigenerazione funzionano ancora Face ID e True Tone?</h3>
                  <p className="blog-paragraph">
                    Assolutamente sì. La rigenerazione del solo vetro <strong>non influisce</strong> su 
                    Face ID, True Tone, Haptic Touch o altre funzionalità avanzate, che dipendono dal 
                    display e dai sensori interni, che rimangono originali.
                  </p>
                </div>

                <div>
                  <h3 className="blog-h3">Quanto costa rigenerare il vetro ad Assemini?</h3>
                  <p className="blog-paragraph">
                    I costi variano in base al modello specifico. In generale, la rigenerazione costa 
                    dal <strong>40% al 50% in meno</strong> rispetto alla sostituzione del display completo. 
                    Contattaci per un preventivo gratuito personalizzato.
                  </p>
                </div>

                <div>
                  <h3 className="blog-h3">Coprite la provincia di Cagliari?</h3>
                  <p className="blog-paragraph">
                    Sì, il nostro centro <strong>GioLab è situato ad Assemini</strong>, facilmente 
                    raggiungibile da Cagliari, Elmas, Decimomannu, Capoterra e tutta l'area metropolitana. 
                    Offriamo anche consulenza telefonica e via WhatsApp.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA finale */}
            <Card className="p-8 bg-primary/5 border-primary/20 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Hai bisogno di rigenerare il vetro del tuo dispositivo Apple?
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Diagnosi gratuita e preventivo immediato presso il nostro centro di Assemini
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button asChild size="lg" className="gap-2">
                    <a href="https://wa.me/393792097678" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Contattaci su WhatsApp
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <a href="/contatti">
                      <MapPin className="w-5 h-5" />
                      Vieni in negozio
                    </a>
                  </Button>
                </div>

                <div className="text-sm space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Via Roma 123, Assemini (CA)
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <a href="https://instagram.com/giolabriparazioni" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      @giolabriparazioni
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Share Bottom */}
          <div className="mt-12 mb-8">
            <h3 className="text-lg font-semibold mb-4">Condividi questo articolo</h3>
            <SocialShare url={articleUrl} title="Rigenerazione Vetro iPhone, iPad e Apple Watch" />
          </div>

          {/* Back to Blog */}
          <BackToBlog />
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RigenerazioneVetroIphoneIpadAppleWatch;