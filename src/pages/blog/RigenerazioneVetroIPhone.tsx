import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RigenerazioneVetroIPhone = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Rigenerazione Vetro iPhone: Risparmia Senza Compromessi | Giolab Assemini"
        description="Scopri la rigenerazione del vetro iPhone: ripariamo solo il vetro rotto senza sostituire l'intero display. Servizio rapido, economico e di qualità presso Giolab ad Assemini."
        keywords="rigenerazione vetro iPhone, riparazione vetro iPhone, cambio vetro iPhone Assemini, sostituzione solo vetro iPhone, vetro iPhone rotto Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Rigenerazione vetro iPhone" }
        ]}
      />
      <Header />
      
      {/* Article Header */}
      <article className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-giolab-blue">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-giolab-blue">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">Rigenerazione vetro iPhone</li>
              </ol>
            </nav>

            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Servizi
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                12 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 minuti di lettura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Rigenerazione vetro iPhone: risparmia senza compromettere la qualità
            </h1>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">✨</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hai rotto solo il <strong className="text-foreground">vetro esterno del tuo iPhone</strong> ma il display funziona perfettamente? Non devi per forza sostituire l'intero schermo! Con il servizio di <strong className="text-giolab-blue">rigenerazione del vetro</strong> presso Giolab ad Assemini, ripariamo solo il vetro danneggiato mantenendo il tuo display originale, risparmiando tempo e denaro.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cos'è la Rigenerazione del Vetro?
              </h2>
              <p className="leading-relaxed">
                La <strong className="text-foreground">rigenerazione del vetro</strong> è una tecnica avanzata che permette di <strong className="text-foreground">sostituire solo il vetro protettivo esterno</strong> dell'iPhone, senza toccare il display LCD o OLED sottostante.
              </p>
              <p className="leading-relaxed">
                Questo intervento è possibile quando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Il vetro è rotto o scheggiato, ma il <strong className="text-foreground">touchscreen funziona perfettamente</strong></li>
                <li>Il <strong className="text-foreground">display mostra immagini nitide</strong> senza macchie, linee o pixel morti</li>
                <li>Non ci sono <strong className="text-foreground">danni al pannello LCD/OLED</strong> sottostante</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Utilizzando macchinari professionali e tecniche specializzate, <strong className="text-giolab-blue">separiamo delicatamente il vetro rotto dal display originale</strong>, lo puliamo accuratamente e applichiamo un nuovo vetro di alta qualità.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                I Vantaggi della Rigenerazione del Vetro
              </h2>
              
              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Risparmio Economico Fino al 40%
              </h3>
              <p className="leading-relaxed">
                La rigenerazione del vetro costa <strong className="text-foreground">significativamente meno</strong> rispetto alla sostituzione dell'intero display assemblato. Puoi risparmiare dal 30% al 40% del costo, senza rinunciare alla qualità.
              </p>
              <p className="leading-relaxed">
                Questo è particolarmente vantaggioso per i modelli di iPhone più recenti (iPhone 13, 14, 15), dove la sostituzione completa del display può essere molto costosa.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Mantieni il Display Originale Apple
              </h3>
              <p className="leading-relaxed">
                Uno dei maggiori vantaggi della rigenerazione è che <strong className="text-foreground">conservi il tuo display originale Apple</strong>, con tutte le sue caratteristiche:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>True Tone funzionante al 100%</li>
                <li>Luminosità e fedeltà dei colori originali</li>
                <li>HDR e contrasto perfetti</li>
                <li>ProMotion 120Hz (sui modelli Pro)</li>
                <li>Nessun messaggio di avviso da iOS</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Con la sostituzione di display non originali, spesso si perdono queste funzionalità o compaiono <strong className="text-foreground">messaggi di avviso fastidiosi</strong> sul telefono.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Rispetto dell'Ambiente
              </h3>
              <p className="leading-relaxed">
                Rigenerare il vetro anziché buttare via l'intero display è una scelta <strong className="text-foreground">ecologica e sostenibile</strong>. Riduci i rifiuti elettronici e contribuisci alla salvaguardia dell'ambiente, riparando invece di sostituire.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Tempi di Riparazione Rapidi
              </h3>
              <p className="leading-relaxed">
                La rigenerazione del vetro presso Giolab viene completata in <strong className="text-foreground">2-4 ore</strong> nella maggior parte dei casi. Puoi lasciare il tuo iPhone al mattino e ritirarlo nel pomeriggio, oppure prenotare un appuntamento e tornare quando è pronto.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Funziona il Processo di Rigenerazione
              </h2>
              
              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Passo 1: Diagnosi Accurata
              </h3>
              <p className="leading-relaxed">
                Il primo step è una <strong className="text-foreground">valutazione completa</strong> del tuo iPhone. I nostri tecnici verificano:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lo stato del vetro e l'estensione dei danni</li>
                <li>Il funzionamento del touchscreen su tutta la superficie</li>
                <li>La qualità dell'immagine del display (colori, pixel, linee)</li>
                <li>La presenza di eventuali danni interni</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Solo se il display sottostante è <strong className="text-foreground">perfettamente funzionante</strong>, procediamo con la rigenerazione. Altrimenti ti consiglieremo la sostituzione completa del display.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Passo 2: Separazione del Vetro
              </h3>
              <p className="leading-relaxed">
                Utilizziamo <strong className="text-foreground">macchinari professionali a controllo termico</strong> per separare delicatamente il vetro rotto dal display, senza danneggiare i delicati componenti LCD/OLED e il digitalizzatore touch.
              </p>
              <p className="leading-relaxed">
                Questa fase richiede <strong className="text-foreground">massima precisione ed esperienza</strong>, ed è proprio qui che la competenza dei nostri tecnici fa la differenza.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Passo 3: Pulizia e Preparazione
              </h3>
              <p className="leading-relaxed">
                Una volta rimosso il vetro danneggiato, puliamo accuratamente il display originale da <strong className="text-foreground">residui di colla, polvere e micro-frammenti</strong>. La superficie deve essere perfettamente pulita per garantire un'adesione ottimale del nuovo vetro.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Passo 4: Applicazione del Nuovo Vetro
              </h3>
              <p className="leading-relaxed">
                Applichiamo un <strong className="text-foreground">vetro temperato di alta qualità</strong> con:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Resistenza agli urti superiore</li>
                <li>Trattamento oleofobico (anti-impronte)</li>
                <li>Trasparenza e sensibilità ottimali</li>
                <li>Precisione millimetrica nell'allineamento</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Il vetro viene sigillato con <strong className="text-foreground">adesivi professionali</strong> che garantiscono la stessa tenuta dell'assemblaggio originale Apple.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Passo 5: Test Finale e Controllo Qualità
              </h3>
              <p className="leading-relaxed">
                Prima di riconsegnarti l'iPhone, eseguiamo <strong className="text-foreground">test approfonditi</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Test del touchscreen su ogni zona</li>
                <li>Verifica della sensibilità e precisione</li>
                <li>Controllo di colori, luminosità e contrasto</li>
                <li>Test delle funzionalità True Tone e Face ID</li>
                <li>Ispezione visiva per imperfezioni</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando NON è Possibile la Rigenerazione?
              </h2>
              <p className="leading-relaxed">
                La rigenerazione del vetro non è sempre possibile. <strong className="text-foreground">Non possiamo rigenerare</strong> quando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Il <strong className="text-foreground">display LCD/OLED è danneggiato</strong> (macchie, linee, pixel morti)</li>
                <li>Il <strong className="text-foreground">touchscreen non risponde</strong> o funziona parzialmente</li>
                <li>Ci sono <strong className="text-foreground">infiltrazioni di liquidi</strong> sotto il display</li>
                <li>Il vetro è talmente frantumato che ha danneggiato il pannello sottostante</li>
              </ul>
              <p className="leading-relaxed mt-4">
                In questi casi, la <strong className="text-foreground">sostituzione completa del display</strong> è l'unica opzione. I nostri tecnici ti consiglieranno sempre la soluzione migliore dopo la diagnosi gratuita.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Garanzia e Affidabilità
              </h2>
              <p className="leading-relaxed">
                Ogni rigenerazione del vetro effettuata da Giolab è coperta da <strong className="text-giolab-blue">garanzia di 6 mesi</strong> sul vetro e sulla manodopera. Se dovesse verificarsi qualsiasi problema legato alla riparazione, interveniamo immediatamente senza costi aggiuntivi.
              </p>
              <p className="leading-relaxed">
                Utilizziamo solo <strong className="text-foreground">materiali di qualità certificata</strong> e tecniche professionali testate nel tempo. La tua soddisfazione e la sicurezza del tuo iPhone sono la nostra priorità.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa la Rigenerazione del Vetro?
              </h2>
              <p className="leading-relaxed">
                Il costo della rigenerazione varia in base al modello di iPhone, ma è sempre <strong className="text-foreground">molto più conveniente</strong> rispetto alla sostituzione completa del display:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">iPhone 11, 12, 13</strong>: risparmio medio di €60-80</li>
                <li><strong className="text-foreground">iPhone 14, 15</strong>: risparmio medio di €80-120</li>
                <li><strong className="text-foreground">iPhone Pro e Pro Max</strong>: risparmio ancora maggiore</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-giolab-blue">Contattaci per un preventivo gratuito</strong> specifico per il tuo modello di iPhone!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione: La Scelta Intelligente
              </h2>
              <p className="leading-relaxed">
                Se il tuo iPhone ha solo il vetro rotto ma il display funziona perfettamente, la <strong className="text-giolab-blue">rigenerazione del vetro</strong> è la scelta più intelligente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Risparmi denaro mantenendo la qualità</li>
                <li>Conservi il display originale Apple e tutte le sue funzionalità</li>
                <li>Riparazione rapida in poche ore</li>
                <li>Contribuisci alla sostenibilità ambientale</li>
              </ul>
              <p className="leading-relaxed mt-6">
                <strong className="text-foreground">Vieni da Giolab ad Assemini per una diagnosi gratuita!</strong> Ti diremo subito se la rigenerazione è possibile per il tuo iPhone e ti forniremo un preventivo trasparente.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vuoi rigenerare il vetro del tuo iPhone?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contattaci per una diagnosi gratuita e un preventivo personalizzato. Risparmia senza compromessi!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Vorrei rigenerare il vetro del mio iPhone");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Richiedi Preventivo su WhatsApp
                </Button>
                <Link to="/servizi/riparazione-display-iphone-assemini">
                  <Button variant="outline" size="lg" className="border-2 hover:border-giolab-blue hover:text-giolab-blue">
                    Scopri i Servizi Display
                  </Button>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12">
              <Link to="/blog">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Torna al Blog
                </Button>
              </Link>
            </div>

            <RelatedArticles 
              currentSlug="rigenerazione-vetro-iphone"
              category="Servizi"
              maxArticles={3}
            />
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
      <BlogNavigation />
    </div>
  );
};

export default RigenerazioneVetroIPhone;
