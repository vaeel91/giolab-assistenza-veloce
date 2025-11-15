import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CosaFareIPhoneCadutoSchermoCrepato() {
  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed text-muted-foreground">
          È successo a tutti almeno una volta: l'iPhone scivola di mano, cade a terra e quando lo raccogli... schermo crepato! Niente panico. In questo articolo ti spieghiamo <strong className="text-giolab-blue">cosa fare immediatamente</strong> per evitare ulteriori danni e come procedere per la <strong className="text-foreground">sostituzione display iPhone ad Assemini</strong> in modo rapido e sicuro.
        </p>
      </section>

      <section>
        <h2 id="primi-passi-dopo-caduta" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Primi Passi Dopo la Caduta
        </h2>
        <p className="text-muted-foreground mb-4">
          Quando il tuo iPhone cade e lo schermo si crepa, è importante agire con calma ma rapidamente. Ecco cosa fare nei primi minuti:
        </p>

        <h3 id="verifica-funzionamento" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          1. Verifica il Funzionamento del Dispositivo
        </h3>
        <p className="text-muted-foreground mb-4">
          Controlla subito se lo schermo risponde al tocco, se il display visualizza correttamente le immagini e se i pulsanti fisici funzionano. Se l'iPhone non risponde o non si accende, <strong className="text-foreground">non tentare riparazioni casalinghe</strong>: portalo subito in assistenza.
        </p>

        <h3 id="proteggi-schermo" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          2. Proteggi lo Schermo con una Pellicola Temporanea
        </h3>
        <p className="text-muted-foreground mb-4">
          Se il vetro è crepato ma ancora funzionante, applica una <strong className="text-foreground">pellicola protettiva trasparente</strong> o anche del nastro adesivo trasparente per evitare che i frammenti di vetro si stacchino e feriscano le dita.
        </p>

        <h3 id="backup-dati" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          3. Fai Subito un Backup dei Dati
        </h3>
        <p className="text-muted-foreground mb-4">
          Anche se lo schermo funziona ancora, è fondamentale fare immediatamente un backup su iCloud o iTunes. In caso di peggioramento del danno, <strong className="text-giolab-blue">i tuoi dati saranno al sicuro</strong>.
        </p>
      </section>

      <section>
        <h2 id="quando-sostituire-display" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Quando è Necessaria la Sostituzione Completa del Display
        </h2>
        <p className="text-muted-foreground mb-4">
          Non tutti i danni richiedono la stessa soluzione. Ecco come capire se serve sostituire solo il vetro o l'intero display:
        </p>

        <h3 id="solo-vetro-danneggiato" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Solo il Vetro è Danneggiato
        </h3>
        <p className="text-muted-foreground mb-4">
          Se il <strong className="text-foreground">touch screen funziona perfettamente</strong> e l'immagine è nitida, ma solo il vetro esterno è crepato, potresti optare per la <Link to="/blog/rigenerazione-vetro-iphone" className="text-giolab-blue hover:underline">rigenerazione del vetro iPhone</Link>, un servizio più economico offerto da Giolab.
        </p>

        <h3 id="display-touch-compromessi" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Display e Touch Compromessi
        </h3>
        <p className="text-muted-foreground mb-4">
          Se noti <strong className="text-foreground">linee colorate, macchie nere, zone dello schermo che non rispondono al tocco o distorsioni nell'immagine</strong>, è necessaria la sostituzione completa del modulo display.
        </p>
      </section>

      <section>
        <h2 id="perche-non-usare-schermo-crepato" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Perché Non Dovresti Usare l'iPhone con lo Schermo Crepato
        </h2>
        <p className="text-muted-foreground mb-4">
          Anche se il telefono funziona ancora, continuare a usarlo con lo schermo danneggiato comporta rischi:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>Rischio di tagli</strong>: i frammenti di vetro possono ferire le dita</li>
          <li><strong>Infiltrazioni di polvere e umidità</strong>: attraverso le crepe possono entrare liquidi che danneggiano la scheda madre</li>
          <li><strong>Peggioramento progressivo</strong>: le crepe tendono ad allargarsi con l'uso quotidiano</li>
          <li><strong>Danni al touch screen</strong>: il digitizer può smettere di funzionare improvvisamente</li>
        </ul>
      </section>

      <section className="bg-giolab-blue/5 p-6 md:p-8 rounded-2xl border-l-4 border-giolab-blue">
        <h2 id="riparazione-display-giolab" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Sostituzione Display iPhone ad Assemini: il Servizio Giolab
        </h2>
        <p className="text-muted-foreground mb-4">
          Da <strong className="text-giolab-blue">Giolab</strong> offriamo un servizio di <strong className="text-foreground">sostituzione display iPhone professionale e rapido</strong>:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">Riparazione in 1-2 ore</Link> per iPhone recenti</li>
          <li>Display originali o compatibili premium certificati</li>
          <li>Garanzia 12 mesi su tutti i ricambi</li>
          <li><Link to="/blog/servizio-telefono-cortesia" className="text-giolab-blue hover:underline">Telefono di cortesia</Link> per riparazioni che richiedono più tempo</li>
          <li>Preventivo trasparente senza sorprese</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button 
            size="lg" 
            className="bg-giolab-blue hover:bg-giolab-blue/90"
            onClick={() => window.open('https://wa.me/393406970686?text=Ciao, vorrei un preventivo per la sostituzione display iPhone', '_blank')}
          >
            💬 Richiedi Preventivo su WhatsApp
          </Button>
        </div>
      </section>

      <section>
        <h2 id="prezzi-tempistiche" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Prezzi e Tempistiche
        </h2>
        <p className="text-muted-foreground mb-4">
          I costi variano in base al modello di iPhone:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>iPhone SE, 6, 7, 8</strong>: 80-120€</li>
          <li><strong>iPhone X, XR, 11</strong>: 120-180€</li>
          <li><strong>iPhone 12, 13, 14</strong>: 180-280€</li>
        </ul>
        <p className="text-muted-foreground">
          Le <strong className="text-foreground">tempistiche medie</strong> sono di 1-2 ore per modelli standard. Per modelli rari potremmo dover ordinare il ricambio (24-48h).
        </p>
      </section>

      <section>
        <h2 id="conclusione" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Conclusione
        </h2>
        <p className="text-muted-foreground">
          Un <strong className="text-foreground">iPhone caduto con lo schermo crepato</strong> non è la fine del mondo. Con i giusti accorgimenti e affidandoti a <strong className="text-giolab-blue">Giolab ad Assemini</strong>, puoi ripristinare il tuo dispositivo rapidamente e in sicurezza. Non aspettare che il danno peggiori: contattaci per una diagnosi gratuita e un preventivo trasparente!
        </p>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Cosa Fare se l'iPhone Cade e lo Schermo si Crepa | Giolab Assemini"
      description="iPhone caduto con schermo crepato? Scopri cosa fare immediatamente, come proteggere i dati e quando è necessaria la sostituzione display ad Assemini."
      keywords="vetro rotto iPhone Cagliari, sostituzione display iPhone Assemini, schermo iPhone crepato cosa fare, riparazione display iPhone veloce"
      slug="cosa-fare-iphone-caduto-schermo-crepato"
      ogImage="https://giolabriparazioni.it/og-images/cosa-fare-iphone-caduto-schermo-crepato.jpg"
      author="Giolab Team"
      datePublished="2025-01-16"
      category="Guide"
      content={articleContent}
      readingTime={6}
    />
  );
}