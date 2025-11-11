import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PercheFaceIDSmetteFunzionare = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Face ID Non Funziona Dopo una Caduta? Ecco Come Risolvere | Giolab"
        description="Face ID non funziona più dopo una caduta dell'iPhone? Scopri le cause e come riparare il sensore Face ID presso Giolab ad Assemini."
        keywords="face id non funziona dopo caduta, riparazione sensore iPhone, face id rotto, sensore faciale iPhone Assemini, riparazione face id Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Face ID non funziona dopo caduta" }
        ]}
        articleData={{
          headline: "Perché il Face ID smette di funzionare dopo una caduta",
          description: "Face ID non funziona più dopo una caduta? Scopri le cause e come riparare il sensore Face ID ad Assemini.",
          author: "Giolab Team",
          datePublished: "2025-01-17",
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
                <li className="text-foreground font-medium">Face ID non funziona dopo caduta</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Tecnologia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                17 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                7 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Perché il Face ID smette di funzionare dopo una caduta (e come risolvere)
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🔐</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hai fatto cadere il tuo iPhone e ora <strong className="text-giolab-blue">il Face ID non funziona più</strong>? È un problema più comune di quanto pensi. Quando l'iPhone subisce un urto violento, i delicati sensori del sistema Face ID possono danneggiarsi o disallinearsi. In questa guida ti spiegheremo le cause e come <strong className="text-foreground">risolvere il problema presso Giolab ad Assemini</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Funziona il Face ID e Perché è Così Delicato
              </h2>
              <p className="leading-relaxed">
                Il sistema <strong className="text-foreground">Face ID</strong> degli iPhone utilizza una tecnologia sofisticata chiamata <strong className="text-foreground">TrueDepth</strong>, composta da diversi sensori situati nella parte superiore dello schermo (notch):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Fotocamera a infrarossi</strong>: scansiona il tuo volto in 3D</li>
                <li><strong>Proiettore di punti</strong>: proietta 30.000 punti invisibili sul viso</li>
                <li><strong>Sensore di prossimità</strong>: rileva quando avvicini il telefono al viso</li>
                <li><strong>Illuminatore</strong>: permette il funzionamento anche al buio</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Questi componenti sono estremamente <strong className="text-foreground">sensibili agli urti</strong> e anche una caduta apparentemente innocua può causarne il malfunzionamento.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Le Cause Principali del Malfunzionamento Face ID
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Disallineamento dei Sensori
              </h3>
              <p className="leading-relaxed">
                Anche se il display sembra intatto, l'impatto può causare un <strong className="text-foreground">leggero spostamento</strong> dei sensori Face ID. Anche millimetri di differenza sono sufficienti per compromettere il riconoscimento facciale.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Danneggiamento del Flex Cable
              </h3>
              <p className="leading-relaxed">
                Il cavo flat che collega i sensori Face ID alla scheda madre può <strong className="text-foreground">rompersi o danneggiarsi</strong> in seguito a una caduta, interrompendo la comunicazione tra i componenti.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Rottura del Proiettore di Punti
              </h3>
              <p className="leading-relaxed">
                Il proiettore di punti infrarossi è uno dei componenti più fragili. Se danneggiato, il Face ID non sarà più in grado di mappare correttamente il tuo volto.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Danni alla Scheda Madre
              </h3>
              <p className="leading-relaxed">
                In casi più gravi, la caduta può causare <strong className="text-foreground">micro-rotture sulla scheda madre</strong> nel punto in cui sono collegati i sensori Face ID. Questo richiede una riparazione specializzata con micro-saldature.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Messaggi di Errore Comuni del Face ID
              </h2>
              <p className="leading-relaxed">
                Quando il Face ID smette di funzionare, potresti vedere uno di questi messaggi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>"Face ID non disponibile"</strong></li>
                <li><strong>"Impossibile attivare Face ID su questo iPhone"</strong></li>
                <li><strong>"Problema rilevato con Face ID"</strong></li>
                <li><strong>"Face ID non configurato"</strong> (anche se lo era prima)</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Provare Prima di Portare l'iPhone in Assistenza
              </h2>
              <p className="leading-relaxed">
                Prima di recarti da un tecnico, puoi tentare alcune soluzioni software:
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Riavvia l'iPhone
              </h3>
              <p className="leading-relaxed">
                A volte un semplice riavvio può risolvere problemi temporanei del Face ID.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Ripristina le Impostazioni di Face ID
              </h3>
              <p className="leading-relaxed">
                Vai su <strong>Impostazioni → Face ID e codice</strong> e prova a eliminare e riconfigurare il Face ID.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Aggiorna iOS
              </h3>
              <p className="leading-relaxed">
                Assicurati di avere l'<strong className="text-foreground">ultima versione di iOS</strong> installata, in quanto alcuni bug possono essere risolti con gli aggiornamenti.
              </p>

              <p className="leading-relaxed mt-4">
                Se nessuna di queste soluzioni funziona, il problema è <strong className="text-giolab-blue">hardware e richiede una riparazione professionale</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Riparazione Face ID ad Assemini: il Servizio Giolab
              </h2>
              <p className="leading-relaxed">
                Da <strong className="text-giolab-blue">Giolab in Via Carmine 20A ad Assemini</strong>, i nostri tecnici specializzati possono diagnosticare e riparare i problemi Face ID con precisione. Il servizio include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Diagnosi gratuita del sistema Face ID</li>
                <li>Sostituzione sensori danneggiati con componenti certificati</li>
                <li>Micro-saldature su scheda madre se necessario</li>
                <li>Test completo del funzionamento Face ID</li>
                <li>Garanzia 12 mesi sulla riparazione</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">Scopri come funziona il nostro servizio di riparazione rapida</Link>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quanto Costa Riparare il Face ID?
              </h2>
              <p className="leading-relaxed">
                Il costo della riparazione Face ID varia in base alla causa del problema. Se si tratta di una semplice sostituzione del flex cable, il costo è contenuto. Se invece sono necessarie <strong className="text-foreground">micro-saldature sulla scheda madre</strong>, il prezzo sarà leggermente più alto.
              </p>
              <p className="leading-relaxed">
                Vieni da Giolab per una <strong className="text-giolab-blue">diagnosi gratuita e un preventivo trasparente</strong>!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Se il tuo <strong className="text-foreground">Face ID ha smesso di funzionare dopo una caduta</strong>, non rassegnarti a usare solo il codice di sblocco. La maggior parte dei problemi Face ID può essere risolta con una riparazione professionale. Contatta Giolab ad Assemini per riportare il tuo iPhone alla piena funzionalità!
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Face ID non funziona? Risolvilo da Giolab!
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita e riparazione professionale con garanzia 12 mesi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Il Face ID del mio iPhone non funziona più");
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
              currentSlug="perche-face-id-smette-funzionare"
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

export default PercheFaceIDSmetteFunzionare;