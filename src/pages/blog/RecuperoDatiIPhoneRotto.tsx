import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import ReadingProgress from "@/components/ReadingProgress";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecuperoDatiIPhoneRotto = () => {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <SEOHead
        title="Recupero Dati da iPhone Rotto: Cosa Si Può Fare Davvero | Giolab"
        description="iPhone rotto e dati importanti da salvare? Scopri cosa è possibile recuperare da un iPhone danneggiato e come Giolab può aiutarti con il recupero dati ad Assemini."
        keywords="recupero dati iPhone Cagliari, iPhone non si accende recuperare foto, recupero dati iPhone rotto, salvataggio dati iPhone, backup iPhone danneggiato"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Recupero dati iPhone rotto" }
        ]}
        articleData={{
          headline: "Recupero dati da iPhone rotto: cosa si può fare davvero",
          description: "iPhone rotto e dati importanti da salvare? Scopri cosa è possibile recuperare e come Giolab può aiutarti.",
          author: "Giolab Team",
          datePublished: "2025-01-18",
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
                <li className="text-foreground font-medium">Recupero dati iPhone rotto</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                18 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                7 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Recupero dati da iPhone rotto: cosa si può fare davvero
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">💾</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Il tuo iPhone è caduto, si è rotto e ora non si accende più? Hai foto, messaggi e contatti importanti che non vuoi perdere? Il <strong className="text-giolab-blue">recupero dati da iPhone rotto</strong> è spesso possibile, ma è fondamentale affidarsi a tecnici specializzati per evitare di peggiorare la situazione. In questo articolo ti spieghiamo cosa si può fare realmente e come <strong className="text-foreground">Giolab ad Assemini può aiutarti</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Si Può Recuperare da un iPhone Danneggiato
              </h2>
              <p className="leading-relaxed">
                La possibilità di recuperare i dati dipende dal <strong className="text-foreground">tipo e gravità del danno</strong>. Ecco cosa è possibile salvare nella maggior parte dei casi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Foto e video</strong> salvati nella memoria interna</li>
                <li><strong>Contatti e rubrica telefonica</strong></li>
                <li><strong>Messaggi SMS e conversazioni WhatsApp</strong></li>
                <li><strong>Note e documenti</strong></li>
                <li><strong>Email e calendari</strong></li>
                <li><strong>App e relativi dati</strong></li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                I Diversi Tipi di Danno e le Possibilità di Recupero
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Schermo Rotto ma iPhone Acceso
              </h3>
              <p className="leading-relaxed">
                Se l'iPhone si accende ma lo schermo è danneggiato, il <strong className="text-foreground">recupero dati è semplice</strong>. Basta collegare il dispositivo a un computer con iTunes o Finder e fare un backup completo. In alternativa, possiamo <Link to="/blog/cosa-fare-iphone-caduto-schermo-crepato" className="text-giolab-blue hover:underline">sostituire lo schermo</Link> rapidamente e poi procedere con il salvataggio.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. iPhone Non Si Accende per Batteria Scarica
              </h3>
              <p className="leading-relaxed">
                Se l'iPhone non si accende semplicemente perché la batteria è esaurita o danneggiata, il recupero è garantito. Dopo aver sostituito la batteria, il dispositivo tornerà funzionante e i dati saranno intatti.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. iPhone Non Si Accende: Problema alla Scheda Madre
              </h3>
              <p className="leading-relaxed">
                Se l'iPhone non si accende a causa di <strong className="text-foreground">danni alla scheda madre</strong>, la situazione è più complessa ma non impossibile. Con tecniche di <strong className="text-foreground">micro-saldatura</strong> è spesso possibile riparare temporaneamente il dispositivo per permettere il backup dei dati.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. iPhone Caduto in Acqua
              </h3>
              <p className="leading-relaxed">
                Il danno da liquidi è tra i più insidiosi. Se l'iPhone ha subito <strong className="text-foreground">ossidazione</strong>, è fondamentale intervenire rapidamente. Più tempo passa, minori sono le possibilità di recupero. <strong className="text-giolab-blue">Non tentare di accendere il dispositivo</strong> e portalo subito in assistenza.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa NON Fare con un iPhone Rotto
              </h2>
              <p className="leading-relaxed">
                Prima di portare l'iPhone in assistenza, evita questi errori che potrebbero compromettere definitivamente i dati:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Non tentare riparazioni casalinghe</strong>: rischi di danneggiare ulteriormente la scheda madre</li>
                <li><strong>Non forzare l'accensione ripetutamente</strong>: potrebbe causare cortocircuiti</li>
                <li><strong>Non mettere in riso un iPhone bagnato</strong>: è un mito che non funziona e fa perdere tempo prezioso</li>
                <li><strong>Non aprire il dispositivo senza esperienza</strong>: i componenti interni sono estremamente delicati</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Funziona il Servizio di Recupero Dati Giolab
              </h2>
              <p className="leading-relaxed">
                Da <strong className="text-giolab-blue">Giolab in Via Carmine 20A ad Assemini</strong>, offriamo un servizio professionale di recupero dati iPhone:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Diagnosi gratuita</strong>: analizziamo il tipo e l'entità del danno</li>
                <li><strong>Preventivo trasparente</strong>: ti spieghiamo cosa è possibile recuperare e a che costo</li>
                <li><strong>Riparazione o recupero</strong>: interveniamo con le tecniche più appropriate</li>
                <li><strong>Backup sicuro</strong>: salviamo i tuoi dati su iTunes, iCloud o hard disk esterno</li>
                <li><strong>Consegna e verifica</strong>: ti consegnamo i dati recuperati e verifichiamo insieme che tutto sia ok</li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Prevenzione: L'Importanza del Backup Regolare
              </h2>
              <p className="leading-relaxed">
                Il modo migliore per <strong className="text-foreground">proteggere i tuoi dati</strong> è fare backup regolari. Ecco i nostri consigli:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Attiva il <strong>backup automatico su iCloud</strong></li>
                <li>Fai backup mensili su computer con iTunes o Finder</li>
                <li>Usa servizi come Google Foto per le immagini</li>
                <li>Sincronizza i contatti con iCloud o Gmail</li>
              </ul>
              <p className="leading-relaxed mt-4">
                In questo modo, anche in caso di danno irreparabile al dispositivo, i tuoi dati saranno al sicuro.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa il Recupero Dati?
              </h2>
              <p className="leading-relaxed">
                Il costo del recupero dati varia in base alla complessità dell'intervento. Una riparazione semplice dello schermo o della batteria ha costi standard, mentre un recupero da scheda madre danneggiata richiede micro-saldature e ha costi più elevati.
              </p>
              <p className="leading-relaxed">
                <strong className="text-giolab-blue">Contattaci per una diagnosi gratuita</strong> e un preventivo personalizzato. Non perderai nulla per verificare se i tuoi dati possono essere salvati!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Il <strong className="text-foreground">recupero dati da iPhone rotto</strong> è spesso possibile, ma è fondamentale affidarsi a professionisti esperti. Da Giolab ad Assemini abbiamo gli strumenti e le competenze per gestire anche i casi più complessi. <strong className="text-giolab-blue">Non aspettare: prima interveniamo, maggiori sono le possibilità di successo!</strong>
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hai bisogno di recuperare dati da un iPhone rotto?
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita e preventivo senza impegno. Contattaci subito!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho un iPhone rotto e devo recuperare i dati");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Richiedi Diagnosi Gratuita
                </Button>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12">
              <SocialShare
                url="/blog/recupero-dati-iphone-rotto"
                title="Recupero dati da iPhone rotto: cosa si può fare davvero"
                description="iPhone rotto e dati importanti da salvare? Scopri cosa è possibile recuperare."
              />
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
              currentSlug="recupero-dati-iphone-rotto"
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

export default RecuperoDatiIPhoneRotto;