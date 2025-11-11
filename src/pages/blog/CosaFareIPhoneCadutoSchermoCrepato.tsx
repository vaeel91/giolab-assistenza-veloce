import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CosaFareIPhoneCadutoSchermoCrepato = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cosa Fare se l'iPhone Cade e lo Schermo si Crepa | Giolab Assemini"
        description="iPhone caduto con schermo crepato? Scopri cosa fare immediatamente, come proteggere i dati e quando è necessaria la sostituzione display ad Assemini."
        keywords="vetro rotto iPhone Cagliari, sostituzione display iPhone Assemini, schermo iPhone crepato cosa fare, riparazione display iPhone veloce"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "iPhone caduto con schermo crepato" }
        ]}
        articleData={{
          headline: "Cosa fare se l'iPhone cade e lo schermo si crepa",
          description: "iPhone caduto con schermo crepato? Scopri cosa fare immediatamente e come procedere per la riparazione ad Assemini.",
          author: "Giolab Team",
          datePublished: "2025-01-16",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Guide"
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
                <li className="text-foreground font-medium">iPhone caduto schermo crepato</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                16 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                6 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Cosa fare se l'iPhone cade e lo schermo si crepa
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">📱</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                È successo a tutti almeno una volta: l'iPhone scivola di mano, cade a terra e quando lo raccogli... schermo crepato! Niente panico. In questo articolo ti spieghiamo <strong className="text-giolab-blue">cosa fare immediatamente</strong> per evitare ulteriori danni e come procedere per la <strong className="text-foreground">sostituzione display iPhone ad Assemini</strong> in modo rapido e sicuro.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Primi Passi Dopo la Caduta
              </h2>
              <p className="leading-relaxed">
                Quando il tuo iPhone cade e lo schermo si crepa, è importante agire con calma ma rapidamente. Ecco cosa fare nei primi minuti:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Verifica il Funzionamento del Dispositivo
              </h3>
              <p className="leading-relaxed">
                Controlla subito se lo schermo risponde al tocco, se il display visualizza correttamente le immagini e se i pulsanti fisici funzionano. Se l'iPhone non risponde o non si accende, <strong className="text-foreground">non tentare riparazioni casalinghe</strong>: portalo subito in assistenza.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Proteggi lo Schermo con una Pellicola Temporanea
              </h3>
              <p className="leading-relaxed">
                Se il vetro è crepato ma ancora funzionante, applica una <strong className="text-foreground">pellicola protettiva trasparente</strong> o anche del nastro adesivo trasparente per evitare che i frammenti di vetro si stacchino e feriscano le dita.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Fai Subito un Backup dei Dati
              </h3>
              <p className="leading-relaxed">
                Anche se lo schermo funziona ancora, è fondamentale fare immediatamente un backup su iCloud o iTunes. In caso di peggioramento del danno, <strong className="text-giolab-blue">i tuoi dati saranno al sicuro</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando è Necessaria la Sostituzione Completa del Display
              </h2>
              <p className="leading-relaxed">
                Non tutti i danni richiedono la stessa soluzione. Ecco come capire se serve sostituire solo il vetro o l'intero display:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Solo il Vetro è Danneggiato
              </h3>
              <p className="leading-relaxed">
                Se il <strong className="text-foreground">touch screen funziona perfettamente</strong> e l'immagine è nitida, ma solo il vetro esterno è crepato, potresti optare per la <Link to="/blog/rigenerazione-vetro-iphone" className="text-giolab-blue hover:underline">rigenerazione del vetro iPhone</Link>, un servizio più economico offerto da Giolab.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Display e Touch Compromessi
              </h3>
              <p className="leading-relaxed">
                Se noti <strong className="text-foreground">linee colorate, macchie nere, zone dello schermo che non rispondono al tocco o distorsioni nell'immagine</strong>, è necessaria la sostituzione completa del modulo display.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Perché Non Dovresti Usare l'iPhone con lo Schermo Crepato
              </h2>
              <p className="leading-relaxed">
                Anche se il telefono funziona ancora, continuare a usarlo con lo schermo danneggiato comporta rischi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Rischio di tagli</strong>: i frammenti di vetro possono ferire le dita</li>
                <li><strong>Infiltrazioni di polvere e umidità</strong>: attraverso le crepe possono entrare liquidi che danneggiano la scheda madre</li>
                <li><strong>Peggioramento progressivo</strong>: le crepe tendono ad allargarsi con l'uso quotidiano</li>
                <li><strong>Danni al touch screen</strong>: il digitizer può smettere di funzionare improvvisamente</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Riparazione Display iPhone ad Assemini: il Servizio Giolab
              </h2>
              <p className="leading-relaxed">
                Da <strong className="text-giolab-blue">Giolab in Via Carmine 20A ad Assemini</strong>, vicino Cagliari, offriamo un servizio di <strong className="text-foreground">sostituzione display iPhone rapido e di qualità</strong>. Ecco cosa ti offriamo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Riparazione in 1 ora per la maggior parte dei modelli</li>
                <li>Display originali o compatibili di alta qualità</li>
                <li>Garanzia 12 mesi sulla riparazione</li>
                <li>Telefono di cortesia durante l'intervento</li>
                <li>Preventivo gratuito e trasparente</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">Scopri come funziona il nostro servizio di riparazione iPhone in 1 ora</Link>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa la Sostituzione del Display iPhone?
              </h2>
              <p className="leading-relaxed">
                Il costo varia in base al modello di iPhone. Per i modelli più recenti come iPhone 14 e iPhone 15, la sostituzione si aggira tra i 150€ e i 300€, mentre per modelli più vecchi come iPhone 11 o iPhone 12, i prezzi sono più contenuti.
              </p>
              <p className="leading-relaxed">
                Da Giolab offriamo <strong className="text-foreground">preventivi gratuiti</strong> e prezzi trasparenti. Contattaci per conoscere il costo esatto per il tuo modello!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione: Agisci Subito per Evitare Danni Maggiori
              </h2>
              <p className="leading-relaxed">
                Se il tuo iPhone è caduto e lo schermo si è crepato, <strong className="text-giolab-blue">non aspettare</strong>. Prima intervieni, minori saranno i rischi di danni permanenti alla scheda madre o ad altri componenti. Vieni da Giolab ad Assemini per una diagnosi gratuita e una riparazione rapida con garanzia.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Schermo iPhone crepato? Riparalo subito!
              </h3>
              <p className="text-muted-foreground mb-6">
                Sostituzione display in 1 ora con garanzia 12 mesi. Preventivo gratuito!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho lo schermo iPhone crepato, vorrei un preventivo");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Richiedi Preventivo WhatsApp
                </Button>
                <Link to="/servizi/riparazione-display-iphone">
                  <Button variant="outline" size="lg" className="border-2 hover:border-giolab-blue hover:text-giolab-blue">
                    Scopri il Servizio Display
                  </Button>
                </Link>
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
              currentSlug="cosa-fare-iphone-caduto-schermo-crepato"
              category="Guide"
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

export default CosaFareIPhoneCadutoSchermoCrepato;