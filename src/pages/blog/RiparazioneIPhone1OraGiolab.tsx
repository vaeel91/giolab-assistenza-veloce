import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RiparazioneIPhone1OraGiolab = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Riparazione iPhone in 1 Ora: Come Funziona il Servizio Giolab | Assemini"
        description="Scopri come riusciamo a riparare il tuo iPhone in tempi record senza compromettere la qualità. Il metodo Giolab spiegato passo passo dal nostro centro di Assemini."
        keywords="riparazione iPhone veloce, riparazione iPhone 1 ora, riparazione rapida iPhone Assemini, servizio express iPhone, riparazione iPhone in giornata"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Riparazione iPhone 1 ora" }
        ]}
        articleData={{
          headline: "Riparazione iPhone in 1 ora: come funziona il servizio Giolab",
          description: "Scopri come riusciamo a riparare il tuo iPhone in tempi record senza compromettere la qualità. Il nostro metodo spiegato passo passo.",
          author: "Giolab Team",
          datePublished: "2025-01-13",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Servizi"
        }}
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
                <li className="text-foreground font-medium">Riparazione iPhone in 1 ora</li>
              </ol>
            </nav>

            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Servizi
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                13 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                4 minuti di lettura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Riparazione iPhone in 1 ora: come funziona il servizio Giolab
            </h1>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">⏱️</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Quando il tuo iPhone si danneggia, l'ultima cosa che vuoi è rimanere senza per giorni. Da <strong className="text-giolab-blue">Giolab ad Assemini</strong> abbiamo sviluppato un metodo che ci permette di completare <strong className="text-foreground">la maggior parte delle riparazioni in 30-60 minuti</strong>, senza mai compromettere la qualità del lavoro. In questo articolo ti spieghiamo passo passo come funziona il nostro servizio express.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quali Riparazioni Possiamo Fare in 1 Ora?
              </h2>
              <p className="leading-relaxed">
                Il nostro <strong className="text-foreground">servizio di riparazione rapida</strong> copre la maggior parte degli interventi più comuni:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Sostituzione display</strong> (vetro e LCD) per iPhone da 6 a 15</li>
                <li><strong className="text-foreground">Cambio batteria</strong> standard o maggiorata</li>
                <li><strong className="text-foreground">Riparazione fotocamera</strong> anteriore e posteriore</li>
                <li><strong className="text-foreground">Sostituzione altoparlanti</strong> e microfoni</li>
                <li><strong className="text-foreground">Cambio tasti</strong> volume, accensione e home button</li>
                <li><strong className="text-foreground">Riparazione jack audio</strong> e porta di ricarica</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Per interventi più complessi come <strong className="text-foreground">micro-saldature</strong> o <strong className="text-foreground">recupero dati</strong>, i tempi possono essere leggermente più lunghi (1-3 giorni lavorativi), ma ti informeremo sempre con precisione sui tempi necessari.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Funziona il Nostro Metodo: Passo per Passo
              </h2>
              
              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Diagnosi Immediata e Preventivo Trasparente
              </h3>
              <p className="leading-relaxed">
                Quando arrivi da Giolab con il tuo iPhone danneggiato, il primo passo è una <strong className="text-foreground">diagnosi accurata</strong>. I nostri tecnici esperti analizzano il problema nel dettaglio e ti forniscono immediatamente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Una spiegazione chiara del problema riscontrato</li>
                <li>Un preventivo dettagliato e trasparente</li>
                <li>I tempi esatti di riparazione</li>
                <li>Le opzioni disponibili (ricambi originali, maggiorati, ecc.)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-giolab-blue">La diagnosi è sempre gratuita</strong> e senza impegno. Decidi tu se procedere con la riparazione.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Ricambi Certificati Sempre Disponibili
              </h3>
              <p className="leading-relaxed">
                Il segreto della nostra rapidità sta nell'<strong className="text-foreground">avere sempre in stock</strong> i ricambi più comuni per tutti i modelli di iPhone. Non dobbiamo ordinare pezzi da fornitori esterni e farti aspettare giorni: abbiamo tutto in sede, pronto all'uso.
              </p>
              <p className="leading-relaxed">
                Utilizziamo solo <strong className="text-foreground">componenti certificati e testati</strong>, mai ricambi economici o di bassa qualità. La tua sicurezza e la durata della riparazione sono la nostra priorità.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Tecnici Specializzati e Formati Continuamente
              </h3>
              <p className="leading-relaxed">
                Il nostro team ha <strong className="text-foreground">oltre 10 anni di esperienza</strong> nel settore e partecipa regolarmente a <strong className="text-foreground">corsi di aggiornamento</strong> per essere sempre al passo con le ultime tecnologie Apple.
              </p>
              <p className="leading-relaxed">
                Questo ci permette di lavorare con <strong className="text-foreground">precisione e velocità</strong>, completando anche le riparazioni più delicate in tempi rapidi senza mai compromettere la qualità.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                4. Strumenti Professionali e Ambiente Dedicato
              </h3>
              <p className="leading-relaxed">
                Disponiamo di un <strong className="text-foreground">laboratorio attrezzato</strong> con strumentazione professionale specifica per iPhone:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Stazione di dissaldatura e saldatura di precisione</li>
                <li>Microscopi per micro-saldature</li>
                <li>Strumenti di diagnostica avanzata</li>
                <li>Banco di lavoro antistatico</li>
                <li>Tester per verificare ogni componente</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Ogni riparazione viene eseguita in un <strong className="text-foreground">ambiente controllato</strong> per garantire la massima precisione.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                5. Test Finale e Controllo Qualità
              </h3>
              <p className="leading-relaxed">
                Prima di riconsegnarti l'iPhone, eseguiamo sempre un <strong className="text-foreground">test completo</strong> di tutte le funzioni:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Test del touchscreen e della sensibilità</li>
                <li>Verifica fotocamere e flash</li>
                <li>Controllo audio e microfoni</li>
                <li>Test di connettività (Wi-Fi, Bluetooth, rete)</li>
                <li>Verifica ricarica e batteria</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Solo quando siamo certi che <strong className="text-foreground">tutto funzioni perfettamente</strong>, ti restituiamo il tuo iPhone.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Succede Se Non Puoi Aspettare?
              </h2>
              <p className="leading-relaxed">
                Se hai fretta o non puoi aspettare in negozio, ti forniamo un <strong className="text-foreground">telefono di cortesia gratuito</strong> per restare sempre connesso. Puoi lasciare il tuo iPhone da riparare e tornare a ritirarlo quando è pronto, senza stress.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Garanzia 12 Mesi su Tutte le Riparazioni
              </h2>
              <p className="leading-relaxed">
                Ogni riparazione effettuata da Giolab è coperta da <strong className="text-giolab-blue">garanzia di 12 mesi</strong> su componenti e manodopera. Se dovesse verificarsi qualsiasi problema legato alla riparazione, interveniamo immediatamente senza costi aggiuntivi.
              </p>
              <p className="leading-relaxed">
                Questa garanzia dimostra la nostra fiducia nella <strong className="text-foreground">qualità del nostro lavoro</strong> e dei componenti che utilizziamo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come Prenotare la Tua Riparazione Rapida
              </h2>
              <p className="leading-relaxed">
                Prenotare è semplicissimo:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Contattaci su WhatsApp</strong> al 340-69-70-686</li>
                <li>Descrivi brevemente il problema del tuo iPhone</li>
                <li>Fissa un appuntamento (oppure vieni direttamente in negozio)</li>
                <li>Porta il tuo iPhone e in circa 1 ora sarà riparato!</li>
              </ol>
              <p className="leading-relaxed mt-6">
                <strong className="text-giolab-blue">Ci trovi in Via Carmine 20A ad Assemini</strong>, a pochi minuti da Cagliari. Siamo aperti dal lunedì al sabato con orari flessibili per venire incontro alle tue esigenze.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione: Velocità e Qualità Insieme
              </h2>
              <p className="leading-relaxed">
                La rapidità non deve mai andare a discapito della qualità. Da Giolab abbiamo investito in <strong className="text-foreground">formazione, strumenti e organizzazione</strong> per offrirti il meglio di entrambi i mondi: riparazioni rapide in 30-60 minuti con la stessa qualità di un intervento che richiederebbe giorni.
              </p>
              <p className="leading-relaxed">
                <strong className="text-giolab-blue">Vieni a trovarci e scopri la differenza del servizio Giolab!</strong>
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hai bisogno di riparare il tuo iPhone in tempi rapidi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Prenota ora e ti restituiremo il tuo iPhone riparato in circa 1 ora. Telefono di cortesia disponibile!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho bisogno di riparare il mio iPhone");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Prenota su WhatsApp
                </Button>
                <Link to="/#servizi">
                  <Button variant="outline" size="lg" className="border-2 hover:border-giolab-blue hover:text-giolab-blue">
                    Scopri Tutti i Servizi
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12">
              <SocialShare
                url="/blog/riparazione-iphone-1-ora-giolab"
                title="Riparazione iPhone in 1 ora: come funziona il servizio Giolab"
                description="Scopri come riusciamo a riparare il tuo iPhone in tempi record senza compromettere la qualità."
              />
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
              currentSlug="riparazione-iphone-1-ora-giolab"
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

export default RiparazioneIPhone1OraGiolab;
