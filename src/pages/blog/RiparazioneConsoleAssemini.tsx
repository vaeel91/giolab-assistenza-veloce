import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RiparazioneConsoleAssemini = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Riparazione Console PS5, Xbox e Nintendo ad Assemini | Giolab"
        description="Assistenza e riparazione professionale per PS5, Xbox Series X/S e Nintendo Switch ad Assemini. Giolab risolve problemi tecnici su tutte le console."
        keywords="riparazione console Cagliari, assistenza PS5 Assemini, riparazione Xbox Assemini, riparazione Nintendo Switch, centro assistenza console"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Riparazione console Assemini" }
        ]}
        articleData={{
          headline: "Riparazione console: cosa possiamo fare per la tua PS5, Xbox o Nintendo",
          description: "Assistenza completa per console PS5, Xbox Series e Nintendo Switch. Scopri tutti i servizi di riparazione disponibili ad Assemini.",
          author: "Giolab Team",
          datePublished: "2025-01-21",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Servizi"
        }}
      />
      <Header />
      
      <article className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-giolab-blue">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-giolab-blue">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">Riparazione console</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Servizi
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                22 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Riparazione console: cosa possiamo fare per la tua PS5, Xbox o Nintendo
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🎮</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                La tua <strong className="text-foreground">PS5 non si accende</strong>? La Xbox ha problemi di surriscaldamento? Il Nintendo Switch non carica più? <strong className="text-giolab-blue">Giolab ad Assemini</strong> è il centro assistenza specializzato anche nella <strong className="text-foreground">riparazione console</strong> di tutte le marche. Con oltre 10 anni di esperienza, interveniamo su PlayStation, Xbox e Nintendo con competenza e ricambi certificati.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Riparazione PlayStation 5 e PS4 ad Assemini
              </h2>
              <p className="leading-relaxed">
                Le <strong className="text-foreground">console PlayStation</strong> sono tra le più diffuse, ma possono presentare diversi problemi tecnici. Ecco cosa possiamo fare per te:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Problemi Comuni PS5
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>PS5 non si accende</strong>: problema all'alimentatore o alla scheda madre</li>
                <li><strong>Surriscaldamento e spegnimenti improvvisi</strong>: pasta termica secca o ventola difettosa</li>
                <li><strong>Problemi al lettore disco</strong>: difficoltà a leggere o espellere i giochi</li>
                <li><strong>HDMI non funziona</strong>: porta HDMI danneggiata o chip video difettoso</li>
                <li><strong>Ventola rumorosa</strong>: polvere accumulata o cuscinetti usurati</li>
                <li><strong>Controller DualSense con drift analogico</strong>: stick che si muovono da soli</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Riparazioni PS4 e PS4 Pro
              </h3>
              <p className="leading-relaxed">
                Anche le <strong className="text-foreground">PlayStation 4</strong> necessitano di manutenzione periodica:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pulizia interna completa e cambio pasta termica</li>
                <li>Sostituzione hard disk o upgrade a SSD</li>
                <li>Riparazione porta HDMI</li>
                <li>Sostituzione alimentatore</li>
                <li>Riparazione o sostituzione lettore Blu-ray</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Assistenza Xbox Series X/S e Xbox One
              </h2>
              <p className="leading-relaxed">
                Le <strong className="text-foreground">console Xbox</strong> presentano problematiche specifiche che richiedono competenze tecniche avanzate:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Problemi Comuni Xbox Series X/S
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Console che non si avvia</strong>: luce arancione fissa o lampeggiante</li>
                <li><strong>Surriscaldamento</strong>: spegnimenti durante il gioco</li>
                <li><strong>Problemi WiFi o Bluetooth</strong>: connessione instabile o assente</li>
                <li><strong>Lettore disco difettoso</strong> (Xbox Series X)</li>
                <li><strong>Rumorosità eccessiva della ventola</strong></li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Riparazioni Xbox One
              </h3>
              <p className="leading-relaxed">
                Per le <strong className="text-foreground">Xbox One, One S e One X</strong> offriamo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sostituzione alimentatore interno o esterno</li>
                <li>Riparazione porta HDMI</li>
                <li>Pulizia profonda e manutenzione</li>
                <li>Sostituzione hard disk</li>
                <li>Riparazione controller con drift o pulsanti non funzionanti</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Riparazione Nintendo Switch e Switch OLED
              </h2>
              <p className="leading-relaxed">
                Il <strong className="text-foreground">Nintendo Switch</strong> è una console ibrida molto apprezzata, ma delicata. I problemi più frequenti sono:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Problemi Comuni Nintendo Switch
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Joy-Con drift</strong>: analogici che si muovono da soli (problema diffusissimo)</li>
                <li><strong>Porta USB-C non carica</strong>: necessaria sostituzione del connettore</li>
                <li><strong>Schermo rotto o rigato</strong>: sostituzione display</li>
                <li><strong>Switch non si accende</strong>: problema alla batteria o alla scheda madre</li>
                <li><strong>Problemi di connessione dock</strong>: Switch non si connette al TV</li>
                <li><strong>Batteria che dura poco</strong>: necessaria sostituzione</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Riparazione Joy-Con
              </h3>
              <p className="leading-relaxed">
                Il <strong className="text-foreground">drift degli analogici Joy-Con</strong> è uno dei problemi più comuni. Lo risolviamo con:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pulizia profonda del meccanismo analogico</li>
                <li>Sostituzione completa stick analogico</li>
                <li>Riparazione pulsanti L/R non funzionanti</li>
                <li>Sostituzione batteria Joy-Con</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Servizi Aggiuntivi per Console
              </h2>
              <p className="leading-relaxed">
                Oltre alle riparazioni, <strong className="text-giolab-blue">Giolab</strong> offre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pulizia interna profonda</strong>: rimozione polvere e sostituzione pasta termica</li>
                <li><strong>Upgrade hardware</strong>: installazione SSD su PS4/Xbox per velocizzare caricamenti</li>
                <li><strong>Controllo preventivo</strong>: diagnosi completa prima che i problemi peggiorino</li>
                <li><strong>Riparazione controller</strong>: DualShock 4, DualSense, controller Xbox e Joy-Con</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Perché Scegliere Giolab per la Riparazione Console
              </h2>
              <p className="leading-relaxed">
                Riparare una console richiede <strong className="text-foreground">competenze specifiche e attrezzature professionali</strong>. Ecco perché affidarti a Giolab:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Oltre 10 anni di esperienza</strong> nel settore riparazioni elettroniche</li>
                <li><strong>Diagnosi gratuita</strong>: valutiamo il problema senza impegno</li>
                <li><strong>Ricambi originali o certificati</strong>: garanzia di qualità</li>
                <li><strong>Tempi rapidi</strong>: la maggior parte delle riparazioni in 2-5 giorni</li>
                <li><strong>Garanzia 12 mesi</strong> su tutte le riparazioni</li>
                <li><strong>Preventivi trasparenti</strong>: nessun costo nascosto</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa Riparare una Console?
              </h2>
              <p className="leading-relaxed">
                I costi variano in base al <strong className="text-foreground">tipo di console e problema</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pulizia e manutenzione</strong>: 30-50€</li>
                <li><strong>Sostituzione pasta termica</strong>: 40-60€</li>
                <li><strong>Riparazione porta HDMI</strong>: 60-100€</li>
                <li><strong>Sostituzione alimentatore</strong>: 50-120€</li>
                <li><strong>Riparazione Joy-Con drift</strong>: 25-40€ per controller</li>
                <li><strong>Sostituzione display Switch</strong>: 80-150€</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-giolab-blue">Contattaci per un preventivo gratuito</strong> specifico per il tuo problema!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Prevenire Problemi alle Console
              </h2>
              <p className="leading-relaxed">
                Ecco alcuni consigli per <strong className="text-foreground">mantenere la tua console in salute</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posiziona la console in un <strong>luogo ventilato</strong>, lontano da fonti di calore</li>
                <li>Pulisci regolarmente le <strong>griglie di ventilazione</strong> dalla polvere</li>
                <li>Non coprire la console durante l'uso</li>
                <li>Evita di spostare la console mentre è accesa (soprattutto con disco inserito)</li>
                <li>Fai una <strong>manutenzione professionale ogni 1-2 anni</strong></li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Se la tua <strong className="text-foreground">PS5, Xbox o Nintendo Switch</strong> ha problemi, non rassegnarti a comprarne una nuova. Nella maggior parte dei casi, la riparazione è conveniente e veloce. <strong className="text-giolab-blue">Vieni da Giolab ad Assemini</strong> in Via Carmine 20A per una diagnosi gratuita: riporteremo la tua console al massimo delle prestazioni!
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                La tua console ha problemi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita per PS5, Xbox e Nintendo Switch. Riparazioni rapide con garanzia!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho problemi con la mia console da gioco");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Richiedi Diagnosi Gratuita
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/blog">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Torna al Blog
                </Button>
              </Link>
            </div>

            <RelatedArticles 
              currentSlug="riparazione-console-assemini"
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

export default RiparazioneConsoleAssemini;