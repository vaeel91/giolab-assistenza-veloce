import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComeCabireBatteriaIPhone = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Come Capire se la Batteria dell'iPhone va Sostituita | Giolab Assemini"
        description="Scopri i segnali che indicano quando è il momento di sostituire la batteria del tuo iPhone. Guida completa con consigli pratici dal centro assistenza Giolab di Assemini."
        keywords="batteria iPhone da sostituire, segnali batteria iPhone, salute batteria iPhone, quando cambiare batteria iPhone, batteria iPhone scarica veloce"
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
                <li className="text-foreground font-medium">Come capire se la batteria va sostituita</li>
              </ol>
            </nav>

            {/* Category and Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                15 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 minuti di lettura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Come capire se la batteria del tuo iPhone va sostituita
            </h1>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🔋</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                La <strong className="text-foreground">batteria dell'iPhone</strong> è uno dei componenti che si deteriora più rapidamente con l'uso quotidiano. Se ultimamente noti che il tuo iPhone si scarica troppo velocemente o si comporta in modo strano, potrebbe essere arrivato il momento di <strong className="text-giolab-blue">sostituire la batteria</strong>. In questa guida ti spieghiamo tutti i segnali da tenere d'occhio.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                1. Controlla lo Stato della Batteria nelle Impostazioni
              </h2>
              <p className="leading-relaxed">
                Il primo passo è verificare la <strong className="text-foreground">salute della batteria</strong> direttamente dalle impostazioni del tuo iPhone. Ecco come fare:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Apri l'app <strong className="text-foreground">Impostazioni</strong></li>
                <li>Vai su <strong className="text-foreground">Batteria</strong></li>
                <li>Seleziona <strong className="text-foreground">Stato Batteria e Ricarica</strong></li>
                <li>Controlla il valore di <strong className="text-foreground">Capacità Massima</strong></li>
              </ol>
              <p className="leading-relaxed mt-4">
                Se la capacità massima è <strong className="text-foreground">sotto l'80%</strong>, è fortemente consigliato sostituire la batteria. Anche tra l'80% e l'85%, se noti problemi di autonomia, una sostituzione può migliorare notevolmente l'esperienza d'uso.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                2. Il Telefono si Spegne Improvvisamente
              </h2>
              <p className="leading-relaxed">
                Uno dei segnali più evidenti di una <strong className="text-foreground">batteria danneggiata</strong> è quando l'iPhone si spegne all'improvviso, anche con il 20%, 30% o perfino 50% di carica residua. Questo accade perché la batteria non riesce più a fornire la potenza necessaria in modo stabile.
              </p>
              <p className="leading-relaxed">
                Se ti capita spesso di vedere il tuo iPhone spegnersi senza preavviso, è il momento di <strong className="text-giolab-blue">prenotare una sostituzione batteria</strong> presso Giolab ad Assemini.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                3. La Batteria si Scarica Velocissimamente
              </h2>
              <p className="leading-relaxed">
                Se la mattina parti con il 100% di carica e a metà pomeriggio sei già sotto il 20%, senza aver usato il telefono più del solito, è probabile che la <strong className="text-foreground">batteria sia degradata</strong>. Con il tempo, le batterie perdono la capacità di trattenere la carica, e l'autonomia si riduce drasticamente.
              </p>
              <p className="leading-relaxed">
                Una batteria in buone condizioni dovrebbe garantire almeno una giornata intera di utilizzo normale. Se non riesci più a raggiungere questo obiettivo, valuta una <strong className="text-foreground">batteria maggiorata</strong> per iPhone, che ti darà fino al 30% di autonomia in più.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                4. Il Telefono si Surriscalda
              </h2>
              <p className="leading-relaxed">
                Un iPhone che si <strong className="text-foreground">surriscalda durante la ricarica</strong> o anche durante l'uso normale è un segnale di allarme. Le batterie deteriorate possono sviluppare problemi interni che causano un aumento anomalo della temperatura.
              </p>
              <p className="leading-relaxed">
                Questo non è solo un problema di comfort, ma anche di sicurezza. Una batteria che si surriscalda può <strong className="text-foreground">rigonfiarsi</strong> e, nei casi peggiori, causare danni permanenti al dispositivo. <strong className="text-giolab-blue">Non ignorare questo segnale e contattaci subito.</strong>
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                5. Noti un Rigonfiamento sul Retro del Telefono
              </h2>
              <p className="leading-relaxed">
                Se noti che il retro del tuo iPhone appare <strong className="text-foreground">leggermente sollevato</strong> o che lo schermo non aderisce più perfettamente alla scocca, potrebbe essere un segno che la batteria si sta <strong className="text-foreground">rigonfiando</strong>.
              </p>
              <p className="leading-relaxed">
                Questo è un problema serio che richiede un intervento immediato. <strong className="text-foreground">Non continuare a usare il dispositivo</strong> e portalo subito nel nostro centro assistenza di Assemini. Una batteria rigonfia può danneggiare altri componenti interni e rappresenta un rischio per la sicurezza.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                6. Le Prestazioni sono Rallentate
              </h2>
              <p className="leading-relaxed">
                Apple ha implementato una funzione che <strong className="text-foreground">riduce automaticamente le prestazioni</strong> degli iPhone con batterie degradate, per evitare spegnimenti improvvisi. Se noti che il tuo iPhone è diventato più lento, potrebbe essere proprio a causa della batteria.
              </p>
              <p className="leading-relaxed">
                Sostituendo la batteria, il tuo iPhone tornerà alle prestazioni originali, con app che si aprono più velocemente e un'esperienza d'uso fluida.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione: Non Aspettare, Sostituisci la Batteria!
              </h2>
              <p className="leading-relaxed">
                Se riconosci uno o più di questi segnali nel tuo iPhone, è il momento di <strong className="text-giolab-blue">sostituire la batteria</strong>. Da Giolab ad Assemini offriamo un servizio di <strong className="text-foreground">sostituzione batteria rapido</strong>, con possibilità di installare anche batterie maggiorate per aumentare l'autonomia fino al 30%.
              </p>
              <p className="leading-relaxed">
                Il servizio viene completato in <strong className="text-foreground">30-45 minuti</strong>, con garanzia di 12 mesi su tutte le batterie installate. <strong className="text-giolab-blue">Contattaci su WhatsApp o vieni a trovarci in Via Carmine 20A ad Assemini!</strong>
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hai bisogno di sostituire la batteria del tuo iPhone?
              </h3>
              <p className="text-muted-foreground mb-6">
                Prenota ora il tuo intervento presso Giolab ad Assemini. Sostituzione rapida in 30-45 minuti con garanzia 12 mesi!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Vorrei sostituire la batteria del mio iPhone");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Prenota su WhatsApp
                </Button>
                <Link to="/servizi/batteria-maggiorata-iphone">
                  <Button variant="outline" size="lg" className="border-2 hover:border-giolab-blue hover:text-giolab-blue">
                    Scopri le Batterie Maggiorate
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
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
      <BlogNavigation />
    </div>
  );
};

export default ComeCabireBatteriaIPhone;
