import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ComeCabireBatteriaIPhone() {
  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed text-muted-foreground">
          La <strong className="text-foreground">batteria dell'iPhone</strong> è uno dei componenti che si deteriora più rapidamente con l'uso quotidiano. Se ultimamente noti che il tuo iPhone si scarica troppo velocemente o si comporta in modo strano, potrebbe essere arrivato il momento di <strong className="text-giolab-blue">sostituire la batteria</strong>. In questa guida ti spieghiamo tutti i segnali da tenere d'occhio.
        </p>
      </section>

      <section>
        <h2 id="controlla-stato-batteria" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          1. Controlla lo Stato della Batteria nelle Impostazioni
        </h2>
        <p className="text-muted-foreground mb-4">
          Il primo passo è verificare la <strong className="text-foreground">salute della batteria</strong> direttamente dalle impostazioni del tuo iPhone. Ecco come fare:
        </p>
        <ol className="space-y-2 text-muted-foreground mb-4 list-decimal list-inside ml-4">
          <li>Apri l'app <strong className="text-foreground">Impostazioni</strong></li>
          <li>Vai su <strong className="text-foreground">Batteria</strong></li>
          <li>Seleziona <strong className="text-foreground">Stato Batteria e Ricarica</strong></li>
          <li>Controlla il valore di <strong className="text-foreground">Capacità Massima</strong></li>
        </ol>
        <p className="text-muted-foreground">
          Se la capacità massima è <strong className="text-foreground">sotto l'80%</strong>, è fortemente consigliato sostituire la batteria. Anche tra l'80% e l'85%, se noti problemi di autonomia, una sostituzione può migliorare notevolmente l'esperienza d'uso.
        </p>
      </section>

      <section>
        <h2 id="spegnimenti-improvvisi" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          2. Il Telefono si Spegne Improvvisamente
        </h2>
        <p className="text-muted-foreground mb-4">
          Uno dei segnali più evidenti di una <strong className="text-foreground">batteria danneggiata</strong> è quando l'iPhone si spegne all'improvviso, anche con il 20%, 30% o perfino 50% di carica residua. Questo accade perché la batteria non riesce più a fornire la potenza necessaria in modo stabile.
        </p>
        <p className="text-muted-foreground">
          Se ti capita spesso di vedere il tuo iPhone spegnersi senza preavviso, è il momento di <strong className="text-giolab-blue">prenotare una sostituzione batteria</strong> presso Giolab ad Assemini.
        </p>
      </section>

      <section>
        <h2 id="scarica-veloce" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          3. La Batteria si Scarica Velocissimamente
        </h2>
        <p className="text-muted-foreground mb-4">
          Se la mattina parti con il 100% di carica e a metà pomeriggio sei già sotto il 20%, senza aver usato il telefono più del solito, è probabile che la <strong className="text-foreground">batteria sia degradata</strong>. Con il tempo, le batterie perdono la capacità di trattenere la carica, e l'autonomia si riduce drasticamente.
        </p>
        <p className="text-muted-foreground">
          Una batteria in buone condizioni dovrebbe garantire almeno una giornata intera di utilizzo normale. Se non riesci più a raggiungere questo obiettivo, valuta una <Link to="/servizi/batteria-maggiorata-iphone" className="text-giolab-blue hover:underline">batteria maggiorata</Link> per iPhone, che ti darà fino al 40% di autonomia in più.
        </p>
      </section>

      <section>
        <h2 id="surriscaldamento" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          4. Il Telefono si Surriscalda
        </h2>
        <p className="text-muted-foreground mb-4">
          Un iPhone che si <strong className="text-foreground">surriscalda durante la ricarica</strong> o anche durante l'uso normale è un segnale di allarme. Le batterie deteriorate possono sviluppare problemi interni che causano un aumento anomalo della temperatura.
        </p>
        <p className="text-muted-foreground">
          Questo non è solo un problema di comfort, ma anche di sicurezza. Una batteria che si surriscalda può <strong className="text-foreground">rigonfiarsi</strong> e, nei casi peggiori, causare danni permanenti al dispositivo. <strong className="text-giolab-blue">Non ignorare questo segnale e contattaci subito.</strong>
        </p>
      </section>

      <section>
        <h2 id="rigonfiamento" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          5. Batteria Gonfia o Display Sollevato
        </h2>
        <p className="text-muted-foreground mb-4">
          Se noti che lo <strong className="text-foreground">schermo del tuo iPhone si è sollevato leggermente</strong> o che la scocca posteriore non è più piatta, potrebbe esserci una <strong className="text-foreground">batteria rigonfia</strong>. Questo accade quando i gas interni alla batteria si accumulano a causa del degrado chimico.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-giolab-blue">Questo è un problema serio</strong>: non continuare a usare l'iPhone e portalo immediatamente in assistenza. Una batteria gonfia può esplodere o prendere fuoco.
        </p>
      </section>

      <section>
        <h2 id="prestazioni-ridotte" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          6. Prestazioni Ridotte e Rallentamenti
        </h2>
        <p className="text-muted-foreground mb-4">
          Apple ha introdotto una funzione che <strong className="text-foreground">riduce le prestazioni dell'iPhone</strong> quando la batteria è molto degradata, per evitare spegnimenti improvvisi. Se il tuo iPhone è diventato lento, potrebbe essere colpa della batteria.
        </p>
        <p className="text-muted-foreground">
          Vai in <strong>Impostazioni → Batteria → Stato Batteria</strong> e controlla se appare un messaggio come "La batteria dell'iPhone non è in grado di fornire le prestazioni di picco necessarie".
        </p>
      </section>

      <section className="bg-giolab-blue/5 p-6 md:p-8 rounded-2xl border-l-4 border-giolab-blue">
        <h2 id="sostituzione-giolab" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Sostituzione Batteria iPhone da Giolab Assemini
        </h2>
        <p className="text-muted-foreground mb-4">
          Se riconosci uno o più di questi segnali, è il momento di <strong className="text-giolab-blue">sostituire la batteria del tuo iPhone</strong>. Da Giolab ad Assemini offriamo:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li>Sostituzione batteria in <strong>30 minuti - 1 ora</strong></li>
          <li>Batterie originali o maggiorate con <strong>garanzia 12 mesi</strong></li>
          <li>Telefono di cortesia per riparazioni più lunghe</li>
          <li>Prezzi trasparenti e competitivi</li>
          <li>Diagnosi gratuita dello stato batteria</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button 
            size="lg" 
            className="bg-giolab-blue hover:bg-giolab-blue/90"
            onClick={() => window.open('https://wa.me/393406970686?text=Ciao, vorrei un preventivo per la sostituzione batteria iPhone', '_blank')}
          >
            💬 Richiedi Preventivo su WhatsApp
          </Button>
        </div>
      </section>

      <section>
        <h2 id="conclusione" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Conclusione
        </h2>
        <p className="text-muted-foreground">
          Riconoscere i segnali di una <strong className="text-foreground">batteria iPhone da sostituire</strong> è fondamentale per mantenere il dispositivo efficiente e sicuro. Se hai notato uno o più dei sintomi descritti, <strong className="text-giolab-blue">non aspettare che la situazione peggiori</strong>: contatta Giolab ad Assemini per una diagnosi gratuita e un preventivo senza impegno.
        </p>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Come Capire se la Batteria dell'iPhone va Sostituita | Giolab Assemini"
      description="Scopri i segnali che indicano quando è il momento di sostituire la batteria del tuo iPhone. Guida completa con consigli pratici dal centro assistenza Giolab di Assemini."
      keywords="batteria iPhone da sostituire, segnali batteria iPhone, salute batteria iPhone, quando cambiare batteria iPhone, batteria iPhone scarica veloce"
      slug="come-capire-batteria-iphone-da-sostituire"
      ogImage="https://giolabriparazioni.it/og-images/come-capire-batteria-iphone-da-sostituire.jpg"
      author="Giolab Team"
      datePublished="2025-01-15"
      category="Guide"
      content={articleContent}
      readingTime={5}
    />
  );
}
