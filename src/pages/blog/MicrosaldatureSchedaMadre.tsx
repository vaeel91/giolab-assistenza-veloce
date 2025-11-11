import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MicrosaldatureSchedaMadre = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Micro-saldature su Scheda Madre iPhone: Quando Servono | Giolab"
        description="Scopri quando sono necessarie le micro-saldature sulla scheda madre iPhone e perché affidarsi a un professionista. Servizio specializzato ad Assemini."
        keywords="microsaldature iPhone Assemini, riparazione scheda madre iPhone, micro-saldature iPhone, riparazione logica iPhone Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Micro-saldature scheda madre" }
        ]}
        articleData={{
          headline: "Micro-saldature su scheda madre: quando servono e perché rivolgersi a un professionista",
          description: "Scopri quando sono necessarie le micro-saldature sulla scheda madre iPhone e perché affidarsi a un professionista ad Assemini.",
          author: "Giolab Team",
          datePublished: "2025-01-19",
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
                <li className="text-foreground font-medium">Micro-saldature scheda madre</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Tecnologia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                19 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Micro-saldature su scheda madre: quando servono e perché rivolgersi a un professionista
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🔬</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Le <strong className="text-giolab-blue">micro-saldature sulla scheda madre</strong> rappresentano uno degli interventi più delicati e complessi nel mondo della riparazione smartphone. Non tutti i centri assistenza sono in grado di eseguirle, perché richiedono attrezzature professionali e competenze tecniche avanzate. In questo articolo scoprirai quando sono necessarie e perché <strong className="text-foreground">Giolab ad Assemini è il tuo punto di riferimento</strong> per questo tipo di riparazioni.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Sono le Micro-saldature?
              </h2>
              <p className="leading-relaxed">
                Le micro-saldature sono <strong className="text-foreground">riparazioni a livello microscopico</strong> sui componenti della scheda madre (motherboard) dell'iPhone. Si tratta di intervenire su:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Circuiti integrati (IC)</strong>: chip responsabili di funzioni specifiche</li>
                <li><strong>Connettori e piste</strong>: collegamenti elettrici microscopici</li>
                <li><strong>Condensatori e resistenze</strong>: componenti elettronici minuscoli</li>
                <li><strong>Socket e connettori</strong>: punti di collegamento tra componenti</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Questi interventi richiedono l'uso di <strong className="text-foreground">microscopi stereoscopici</strong> e stazioni di saldatura a temperatura controllata, oltre a una grande esperienza nel settore.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando Sono Necessarie le Micro-saldature?
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. iPhone Non Si Accende (No Power)
              </h3>
              <p className="leading-relaxed">
                Se il tuo iPhone <strong className="text-foreground">non dà segni di vita</strong>, nemmeno quando lo colleghi al caricatore, potrebbe esserci un problema ai circuiti di alimentazione sulla scheda madre. Le cause più comuni sono:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cortocircuiti causati da cadute o liquidi</li>
                <li>Danneggiamento del chip di gestione dell'alimentazione (PMIC)</li>
                <li>Rottura di resistenze o condensatori nel circuito di ricarica</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Problemi di Ricarica o Batteria
              </h3>
              <p className="leading-relaxed">
                Se l'iPhone non carica correttamente, si scarica velocemente anche con batteria nuova, o mostra percentuali di carica errate, il problema potrebbe risiedere nei <strong className="text-foreground">circuiti di gestione della batteria</strong> sulla scheda madre, non nella batteria stessa.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Problemi Audio o Microfono
              </h3>
              <p className="leading-relaxed">
                Se durante le chiamate non si sente la tua voce o non riesci a sentire l'interlocutore, e hai già escluso problemi ai componenti audio, potrebbe essere necessaria una micro-saldatura sui <strong className="text-foreground">circuiti audio della scheda madre</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. iPhone Caduto in Acqua
              </h3>
              <p className="leading-relaxed">
                Anche se gli iPhone recenti hanno una certa resistenza all'acqua, quando i liquidi penetrano all'interno causano <strong className="text-foreground">ossidazione e corrosione</strong> sui componenti. Le micro-saldature possono essere necessarie per:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rimuovere l'ossidazione dai connettori</li>
                <li>Riparare piste danneggiate dalla corrosione</li>
                <li>Sostituire componenti ossidati</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                5. Touch Screen o Display Non Funzionano (problema logico)
              </h3>
              <p className="leading-relaxed">
                Se hai sostituito lo schermo ma il touch o il display continuano a non funzionare, il problema potrebbe essere sul <strong className="text-foreground">connettore della scheda madre</strong> o sul chip che gestisce il display.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Perché Non Puoi Fare le Micro-saldature da Solo
              </h2>
              <p className="leading-relaxed">
                Le micro-saldature richiedono:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Attrezzature professionali</strong>: microscopi stereoscopici ad alta risoluzione</li>
                <li><strong>Stazioni di saldatura ad aria calda</strong>: con controllo preciso della temperatura</li>
                <li><strong>Multimetri e oscilloscopi</strong>: per diagnosticare i guasti elettrici</li>
                <li><strong>Ricambi specifici</strong>: chip, condensatori e resistenze originali</li>
                <li><strong>Anni di esperienza</strong>: un errore può danneggiare irreparabilmente la scheda</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Tentare riparazioni fai-da-te su una scheda madre può <strong className="text-giolab-blue">rendere il dispositivo inutilizzabile definitivamente</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Il Processo di Micro-saldatura da Giolab
              </h2>
              <p className="leading-relaxed">
                Presso <strong className="text-giolab-blue">Giolab ad Assemini</strong>, seguiamo un processo rigoroso per le micro-saldature:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Diagnosi approfondita</strong>: identifichiamo il componente o circuito difettoso</li>
                <li><strong>Test elettrici</strong>: utilizziamo multimetri e oscilloscopi per confermare il guasto</li>
                <li><strong>Rimozione componente</strong>: con aria calda controllata rimuoviamo il componente danneggiato</li>
                <li><strong>Pulizia e preparazione</strong>: puliamo le piste e prepariamo la superficie per la saldatura</li>
                <li><strong>Saldatura nuovo componente</strong>: installiamo il ricambio con precisione millimetrica</li>
                <li><strong>Test funzionale completo</strong>: verifichiamo che tutto funzioni correttamente</li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa una Micro-saldatura?
              </h2>
              <p className="leading-relaxed">
                Il costo varia in base alla <strong className="text-foreground">complessità dell'intervento</strong> e ai componenti da sostituire. Una semplice riparazione di un connettore ha un costo inferiore rispetto alla sostituzione di un chip complesso come il PMIC.
              </p>
              <p className="leading-relaxed">
                <strong className="text-giolab-blue">Offriamo sempre una diagnosi gratuita</strong> e un preventivo trasparente prima di procedere con l'intervento.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Tempi di Riparazione
              </h2>
              <p className="leading-relaxed">
                Le micro-saldature richiedono <strong className="text-foreground">da 2 a 5 giorni lavorativi</strong>, a seconda della complessità del problema. Non si tratta di riparazioni che possono essere completate in un'ora, data la delicatezza e precisione richieste.
              </p>
              <p className="leading-relaxed">
                Durante l'attesa, se disponibile, possiamo fornirti un <Link to="/blog/telefono-cortesia-giolab" className="text-giolab-blue hover:underline">telefono di cortesia</Link>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Le <strong className="text-foreground">micro-saldature sulla scheda madre</strong> sono interventi di alta specializzazione che possono salvare iPhone apparentemente irrecuperabili. Se il tuo dispositivo ha problemi complessi che una semplice sostituzione di componenti non risolve, <strong className="text-giolab-blue">contatta Giolab ad Assemini</strong>. Con oltre 10 anni di esperienza e attrezzature professionali, possiamo affrontare anche i casi più difficili.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                iPhone con problemi complessi alla scheda madre?
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita e micro-saldature professionali. Contattaci per valutare il tuo caso!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho un iPhone con problemi alla scheda madre");
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
              currentSlug="microsaldature-scheda-madre"
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

export default MicrosaldatureSchedaMadre;