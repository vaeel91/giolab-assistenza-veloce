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

const ServizioTelefonoCortesia = () => {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <SEOHead
        title="Come Funziona il Servizio di Telefono di Cortesia Giolab | Assemini"
        description="Scopri come funziona il servizio di telefono sostitutivo durante la riparazione del tuo iPhone. Giolab ti fornisce un dispositivo di cortesia gratuito."
        keywords="telefono sostitutivo riparazione iPhone, assistenza smartphone Assemini, telefono di cortesia Cagliari, servizio sostituzione temporanea"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Telefono di cortesia" }
        ]}
        articleData={{
          headline: "Come funziona il servizio di telefono di cortesia Giolab",
          description: "Scopri come funziona il servizio di telefono sostitutivo durante la riparazione del tuo iPhone. Dispositivo di cortesia gratuito.",
          author: "Giolab Team",
          datePublished: "2025-01-24",
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
                <li className="text-foreground font-medium">Telefono di cortesia</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Servizi
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                24 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Come funziona il servizio di telefono di cortesia Giolab
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">📱</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Una delle preoccupazioni principali quando si porta l'iPhone in assistenza è <strong className="text-foreground">rimanere senza telefono</strong> per giorni. Per questo motivo, <strong className="text-giolab-blue">Giolab ad Assemini</strong> offre un servizio di <strong className="text-foreground">telefono di cortesia gratuito</strong> per tutte le riparazioni che richiedono più di qualche ora. Scopri come funziona e quando puoi richiederlo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cos'è il Telefono di Cortesia?
              </h2>
              <p className="leading-relaxed">
                Il <strong className="text-foreground">telefono di cortesia</strong> è uno smartphone che ti forniamo <strong className="text-giolab-blue">gratuitamente in prestito</strong> mentre il tuo iPhone è in riparazione. Non rimarrai mai senza telefono, potrai continuare a chiamare, inviare messaggi e utilizzare le app essenziali.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando Puoi Richiedere il Telefono di Cortesia?
              </h2>
              <p className="leading-relaxed">
                Il servizio è disponibile per riparazioni che richiedono <strong className="text-foreground">più di 2 ore di lavorazione</strong>, come:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Riparazioni complesse alla scheda madre</strong> (micro-saldature, chip audio, chip ricarica)</li>
                <li><strong>Recupero dati da iPhone danneggiati</strong> che non si accendono</li>
                <li><strong>Riparazioni che richiedono parti da ordinare</strong> (1-3 giorni lavorativi)</li>
                <li><strong>Sostituzioni display per modelli rari</strong> non disponibili a magazzino</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Per riparazioni rapide come <Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">sostituzione batteria o display in 1 ora</Link>, generalmente non è necessario, ma puoi comunque richiederlo se ne hai bisogno.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Funziona il Servizio?
              </h2>
              <p className="leading-relaxed">
                Il processo è semplice e veloce:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Richiedi il Telefono di Cortesia
              </h3>
              <p className="leading-relaxed">
                Quando lasci il tuo iPhone in riparazione, <strong className="text-foreground">comunica al nostro tecnico</strong> che desideri un telefono di cortesia. Verificheremo la disponibilità e te ne forniremo uno immediatamente.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Trasferisci la SIM
              </h3>
              <p className="leading-relaxed">
                Rimuoviamo la <strong className="text-foreground">scheda SIM</strong> dal tuo iPhone e la inseriamo nel telefono di cortesia. Così potrai <strong className="text-giolab-blue">continuare a ricevere chiamate e messaggi</strong> sul tuo numero abituale.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Accesso Limitato alle Tue App
              </h3>
              <p className="leading-relaxed">
                Il telefono di cortesia è <strong className="text-foreground">un dispositivo base</strong> e non avrà le tue app, foto o dati personali. Puoi però:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Effettuare e ricevere chiamate</li>
                <li>Inviare SMS</li>
                <li>Installare WhatsApp temporaneamente (con backup cloud)</li>
                <li>Navigare su internet</li>
                <li>Usare app essenziali come email e mappe</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Restituzione alla Consegna
              </h3>
              <p className="leading-relaxed">
                Quando la riparazione è completata e vieni a ritirare il tuo iPhone, <strong className="text-foreground">restituisci il telefono di cortesia</strong>. Rimettiamo la SIM nel tuo iPhone e sei di nuovo pronto all'uso!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quali Telefoni Forniamo?
              </h2>
              <p className="leading-relaxed">
                I telefoni di cortesia sono <strong className="text-foreground">smartphone funzionanti e testati</strong>, generalmente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>iPhone ricondizionati</strong> (modelli meno recenti, ma perfettamente funzionanti)</li>
                <li><strong>Smartphone Android entry-level</strong> (Samsung, Xiaomi, ecc.)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Non possiamo garantire un modello specifico, ma tutti i dispositivi sono <strong className="text-giolab-blue">puliti, igienizzati e con batteria carica</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Il Servizio È Gratuito?
              </h2>
              <p className="leading-relaxed">
                Sì, il servizio di telefono di cortesia è <strong className="text-foreground">completamente gratuito</strong> per i clienti Giolab che effettuano riparazioni nel nostro centro ad Assemini.
              </p>
              <p className="leading-relaxed">
                Richiediamo solo un <strong className="text-foreground">documento di identità</strong> come garanzia al momento del prestito, che ti verrà restituito quando riconsegnerai il telefono di cortesia.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Succede in Caso di Danneggiamento?
              </h2>
              <p className="leading-relaxed">
                Il telefono di cortesia è un <strong className="text-foreground">prestito gratuito</strong>, quindi ti chiediamo di trattarlo con cura. In caso di:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Danni accidentali lievi</strong> (graffi normali): nessun addebito</li>
                <li><strong>Danni gravi</strong> (schermo rotto, danni da liquidi): potremmo richiedere un rimborso per la riparazione</li>
                <li><strong>Smarrimento o furto</strong>: è necessario pagare il valore del dispositivo</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Prenotare il Telefono di Cortesia?
              </h2>
              <p className="leading-relaxed">
                Per assicurarti la disponibilità del telefono di cortesia, ti consigliamo di <strong className="text-giolab-blue">prenotarlo in anticipo</strong> quando fissi l'appuntamento per la riparazione.
              </p>
              <p className="leading-relaxed mt-4">
                Puoi contattarci via <strong>WhatsApp al 340-69-70-686</strong> o venire direttamente in negozio in <strong>Via Carmine 20, Assemini</strong>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Il <strong className="text-foreground">servizio di telefono di cortesia</strong> è uno dei nostri punti di forza: vogliamo che tu possa continuare la tua giornata senza interruzioni, anche mentre il tuo iPhone è in riparazione. <strong className="text-giolab-blue">Giolab ad Assemini</strong> si prende cura dei tuoi dispositivi e della tua tranquillità!
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Prenota la tua riparazione con telefono di cortesia
              </h3>
              <p className="text-muted-foreground mb-6">
                Non rimanere senza telefono! Richiedi subito il nostro servizio gratuito di telefono di cortesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Vorrei prenotare una riparazione con telefono di cortesia");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Prenota con Telefono di Cortesia
                </Button>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12">
              <SocialShare
                url="/blog/servizio-telefono-cortesia"
                title="Come funziona il servizio di telefono di cortesia Giolab"
                description="Scopri come funziona il servizio di telefono sostitutivo durante la riparazione del tuo iPhone."
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
              currentSlug="servizio-telefono-cortesia"
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

export default ServizioTelefonoCortesia;
