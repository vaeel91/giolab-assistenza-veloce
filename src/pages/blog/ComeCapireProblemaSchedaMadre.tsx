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

const ComeCapireProblemaSchedaMadre = () => {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <SEOHead
        title="Come Capire se il tuo iPhone ha un Problema alla Scheda Madre | Giolab"
        description="Scopri i sintomi di un problema alla scheda madre iPhone: segnali, cause e soluzioni. Diagnosi e riparazione professionale presso Giolab Assemini."
        keywords="sintomi scheda madre iPhone, iPhone non si accende Giolab, problema logica iPhone, riparazione motherboard iPhone Assemini"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Problema scheda madre iPhone" }
        ]}
        articleData={{
          headline: "Come capire se il tuo iPhone ha un problema alla scheda madre",
          description: "Scopri i sintomi di un problema alla scheda madre iPhone e quando è necessario un intervento professionale ad Assemini.",
          author: "Giolab Team",
          datePublished: "2025-01-21",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Tecnologia"
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
                <li className="text-foreground font-medium">Problema scheda madre iPhone</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Tecnologia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                21 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                7 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Come capire se il tuo iPhone ha un problema alla scheda madre
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🔧</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                La <strong className="text-giolab-blue">scheda madre (o motherboard)</strong> è il cuore del tuo iPhone: collega tutti i componenti e permette al dispositivo di funzionare. Quando ha un problema, i sintomi possono essere vari e spesso confusi con altri guasti. In questo articolo ti spieghiamo come riconoscere i <strong className="text-foreground">segnali di un problema alla scheda madre</strong> e cosa fare per risolverlo presso <strong className="text-foreground">Giolab ad Assemini</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                I Sintomi Principali di un Problema alla Scheda Madre
              </h2>
              <p className="leading-relaxed">
                Riconoscere un <strong className="text-foreground">guasto alla logica dell'iPhone</strong> non è sempre semplice. Ecco i sintomi più comuni:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. iPhone Non Si Accende Completamente
              </h3>
              <p className="leading-relaxed">
                Se il tuo <strong className="text-foreground">iPhone non si accende</strong> nemmeno quando lo colleghi al caricatore, e hai già escluso problemi alla batteria o al connettore di ricarica, il problema potrebbe essere sulla scheda madre. Specificamente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Il telefono non dà alcun segno di vita</li>
                <li>Lo schermo rimane completamente nero</li>
                <li>Non vibra e non emette suoni</li>
                <li>Il computer non lo rileva quando connesso</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Riavvii Continui e Loop di Avvio
              </h3>
              <p className="leading-relaxed">
                Se l'iPhone <strong className="text-foreground">si riavvia continuamente</strong> mostrando il logo Apple in loop senza mai completare l'avvio, potrebbe esserci un problema ai circuiti di alimentazione o al chip di gestione dell'energia (PMIC) sulla scheda madre.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Surriscaldamento Anomalo
              </h3>
              <p className="leading-relaxed">
                Un iPhone che <strong className="text-foreground">si scalda eccessivamente</strong> anche a riposo o durante operazioni semplici come navigare su internet può avere un cortocircuito sulla scheda madre. Questo è un segnale da non sottovalutare.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Funzioni Hardware Non Funzionanti
              </h3>
              <p className="leading-relaxed">
                Se hai sostituito componenti come fotocamera, microfono, altoparlante o <Link to="/blog/perche-face-id-smette-funzionare" className="text-giolab-blue hover:underline">sensori Face ID</Link> ma continuano a non funzionare, il problema è probabilmente nei <strong className="text-foreground">circuiti della scheda madre</strong> che gestiscono questi componenti.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                5. Schermo Nero con iPhone Acceso
              </h3>
              <p className="leading-relaxed">
                Se senti vibrazioni, notifiche o il suono quando ti chiamano, ma <strong className="text-foreground">lo schermo resta nero</strong> anche dopo aver sostituito il display, il problema è nel circuito di gestione del display sulla motherboard.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                6. Problemi di Connettività (WiFi, Bluetooth, Rete)
              </h3>
              <p className="leading-relaxed">
                Se WiFi, Bluetooth o segnale cellulare sono <strong className="text-foreground">costantemente assenti o instabili</strong>, e il problema persiste anche dopo reset di fabbrica, potrebbe esserci un danno ai chip di connettività sulla scheda madre.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Le Cause Più Comuni di Danni alla Scheda Madre
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Cadute e Urti Violenti
              </h3>
              <p className="leading-relaxed">
                Le cadute possono causare <strong className="text-foreground">micro-fratture sui circuiti</strong> o il distacco di componenti saldati, compromettendo il funzionamento della scheda.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Danni da Liquidi e Ossidazione
              </h3>
              <p className="leading-relaxed">
                Anche se gli iPhone recenti resistono agli schizzi, l'<strong className="text-foreground">immersione in acqua o l'esposizione prolungata all'umidità</strong> possono causare ossidazione e corrosione sui componenti della motherboard.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Cortocircuiti da Caricatori Non Originali
              </h3>
              <p className="leading-relaxed">
                L'uso di <strong className="text-foreground">caricatori non certificati</strong> può provocare sbalzi di tensione che danneggiano i circuiti di ricarica sulla scheda madre.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Riparazioni Sbagliate
              </h3>
              <p className="leading-relaxed">
                Tentare riparazioni fai-da-te o affidarsi a tecnici inesperti può causare <strong className="text-foreground">danni irreversibili</strong> alla scheda madre, come piste bruciate o componenti strappati.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Distinguere un Problema di Scheda Madre da Altri Guasti
              </h2>
              <p className="leading-relaxed">
                Prima di concludere che il problema sia la motherboard, è importante escludere altre cause:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Batteria scarica o gonfia</strong>: prova a <Link to="/blog/come-capire-batteria-iphone-da-sostituire" className="text-giolab-blue hover:underline">sostituire la batteria</Link></li>
                <li><strong>Display danneggiato</strong>: verifica con un display di test</li>
                <li><strong>Software corrotto</strong>: tenta un ripristino tramite iTunes/Finder</li>
                <li><strong>Connettori allentati</strong>: fai verificare i collegamenti interni</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Solo dopo aver escluso queste possibilità, un tecnico esperto potrà diagnosticare con certezza un problema alla scheda madre.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Giolab Diagnostica i Problemi alla Scheda Madre
              </h2>
              <p className="leading-relaxed">
                Presso <strong className="text-giolab-blue">Giolab in Via Carmine 20 ad Assemini</strong>, utilizziamo strumenti professionali per diagnosticare con precisione i guasti alla motherboard:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Test visivo al microscopio</strong>: identifichiamo componenti danneggiati, bruciati o ossidati</li>
                <li><strong>Misurazioni elettriche</strong>: con multimetri verifichiamo tensioni e correnti anomale</li>
                <li><strong>Test dei circuiti</strong>: isoliamo il guasto specifico (alimentazione, display, audio, ecc.)</li>
                <li><strong>Analisi termica</strong>: individuiamo cortocircuiti tramite termo-camera</li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Riparazione della Scheda Madre: È Possibile?
              </h2>
              <p className="leading-relaxed">
                Sì, nella maggior parte dei casi i problemi alla scheda madre <strong className="text-foreground">possono essere riparati</strong> con <Link to="/blog/microsaldature-scheda-madre" className="text-giolab-blue hover:underline">micro-saldature</Link> e sostituzione di componenti specifici. Giolab è specializzata in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sostituzione chip di alimentazione (PMIC)</li>
                <li>Riparazione circuiti di ricarica</li>
                <li>Sostituzione chip audio e connettività</li>
                <li>Ricostruzione piste danneggiate</li>
                <li>Pulizia profonda da ossidazione</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa Riparare la Scheda Madre?
              </h2>
              <p className="leading-relaxed">
                Il costo varia in base al <strong className="text-foreground">tipo e gravità del danno</strong>. Una riparazione semplice può costare 80-150€, mentre interventi più complessi con sostituzione di chip possono arrivare a 200-300€.
              </p>
              <p className="leading-relaxed">
                Offriamo sempre una <strong className="text-giolab-blue">diagnosi gratuita</strong> e un preventivo trasparente prima di procedere.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Se riconosci uno o più sintomi descritti nel tuo iPhone, <strong className="text-foreground">non aspettare</strong>. I problemi alla scheda madre tendono a peggiorare nel tempo. <strong className="text-giolab-blue">Contatta Giolab ad Assemini</strong> per una diagnosi professionale gratuita: con oltre 10 anni di esperienza e attrezzature all'avanguardia, possiamo risolvere anche i casi più complessi.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                iPhone con possibili problemi alla scheda madre?
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita e professionale. Scopri subito se è riparabile!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Il mio iPhone ha problemi, vorrei una diagnosi");
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
                url="/blog/come-capire-problema-scheda-madre"
                title="Come capire se il tuo iPhone ha un problema alla scheda madre"
                description="Scopri i sintomi di un problema alla scheda madre iPhone e quando è necessario un intervento professionale."
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
              currentSlug="come-capire-problema-scheda-madre"
              category="Tecnologia"
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

export default ComeCapireProblemaSchedaMadre;