import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PercheFaceIDSmetteFunzionare() {
  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Hai fatto cadere il tuo iPhone e ora <strong className="text-giolab-blue">il Face ID non funziona più</strong>? È un problema più comune di quanto pensi. Quando l'iPhone subisce un urto violento, i delicati sensori del sistema Face ID possono danneggiarsi o disallinearsi. In questa guida ti spiegheremo le cause e come <strong className="text-foreground">risolvere il problema presso Giolab ad Assemini</strong>.
        </p>
      </section>

      <section>
        <h2 id="come-funziona-face-id" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Come Funziona il Face ID e Perché è Così Delicato
        </h2>
        <p className="text-muted-foreground mb-4">
          Il sistema <strong className="text-foreground">Face ID</strong> degli iPhone utilizza una tecnologia sofisticata chiamata <strong className="text-foreground">TrueDepth</strong>, composta da diversi sensori situati nella parte superiore dello schermo (notch):
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>Fotocamera a infrarossi</strong>: scansiona il tuo volto in 3D</li>
          <li><strong>Proiettore di punti</strong>: proietta 30.000 punti invisibili sul viso</li>
          <li><strong>Sensore di prossimità</strong>: rileva quando avvicini il telefono al viso</li>
          <li><strong>Illuminatore</strong>: permette il funzionamento anche al buio</li>
        </ul>
        <p className="text-muted-foreground">
          Questi componenti sono estremamente <strong className="text-foreground">sensibili agli urti</strong> e anche una caduta apparentemente innocua può causarne il malfunzionamento.
        </p>
      </section>

      <section>
        <h2 id="cause-principali-malfunzionamento" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Le Cause Principali del Malfunzionamento Face ID
        </h2>

        <h3 id="disallineamento-sensori" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          1. Disallineamento dei Sensori
        </h3>
        <p className="text-muted-foreground mb-4">
          Anche se il display sembra intatto, l'impatto può causare un <strong className="text-foreground">leggero spostamento</strong> dei sensori Face ID. Anche millimetri di differenza sono sufficienti per compromettere il riconoscimento facciale.
        </p>

        <h3 id="danneggiamento-flex-cable" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          2. Danneggiamento del Flex Cable
        </h3>
        <p className="text-muted-foreground mb-4">
          Il cavo flat che collega i sensori Face ID alla scheda madre può <strong className="text-foreground">rompersi o danneggiarsi</strong> in seguito a una caduta, interrompendo la comunicazione tra i componenti.
        </p>

        <h3 id="rottura-proiettore-punti" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          3. Rottura del Proiettore di Punti
        </h3>
        <p className="text-muted-foreground mb-4">
          Il proiettore di punti infrarossi è uno dei componenti più fragili. Se danneggiato, il Face ID non sarà più in grado di mappare correttamente il tuo volto.
        </p>

        <h3 id="danni-scheda-madre" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          4. Danni alla Scheda Madre
        </h3>
        <p className="text-muted-foreground mb-4">
          In casi più gravi, la caduta può causare <strong className="text-foreground">micro-rotture sulla scheda madre</strong> nel punto in cui sono collegati i sensori Face ID. Questo richiede una riparazione specializzata con <Link to="/blog/microsaldature-scheda-madre" className="text-giolab-blue hover:underline">micro-saldature</Link>.
        </p>
      </section>

      <section>
        <h2 id="messaggi-errore-comuni" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Messaggi di Errore Comuni del Face ID
        </h2>
        <p className="text-muted-foreground mb-4">
          Quando il Face ID smette di funzionare, potresti vedere uno di questi messaggi:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>"Face ID non disponibile"</strong></li>
          <li><strong>"Impossibile attivare Face ID su questo iPhone"</strong></li>
          <li><strong>"Problema rilevato con Face ID"</strong></li>
          <li><strong>"Face ID non configurato"</strong> (anche se lo era prima)</li>
        </ul>
      </section>

      <section>
        <h2 id="cosa-provare-prima" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Cosa Provare Prima di Portare l'iPhone in Assistenza
        </h2>
        <p className="text-muted-foreground mb-4">
          Prima di recarti da un tecnico, puoi tentare alcune soluzioni software:
        </p>

        <h3 id="riavvia-iphone" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          1. Riavvia l'iPhone
        </h3>
        <p className="text-muted-foreground mb-4">
          Un semplice riavvio può risolvere problemi temporanei. Premi e rilascia velocemente il tasto Volume Su, poi Volume Giù, poi tieni premuto il tasto laterale finché non appare il logo Apple.
        </p>

        <h3 id="resetta-face-id" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          2. Resetta il Face ID
        </h3>
        <p className="text-muted-foreground mb-4">
          Vai in <strong>Impostazioni → Face ID e codice → Inizializza Face ID</strong>, poi prova a riconfigurarlo da zero.
        </p>

        <h3 id="aggiorna-ios" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          3. Aggiorna iOS all'Ultima Versione
        </h3>
        <p className="text-muted-foreground mb-4">
          Alcuni problemi di Face ID possono essere risolti con aggiornamenti software. Vai in <strong>Impostazioni → Generali → Aggiornamento Software</strong>.
        </p>
      </section>

      <section className="bg-giolab-blue/5 p-6 md:p-8 rounded-2xl border-l-4 border-giolab-blue">
        <h2 id="riparazione-face-id-giolab" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Riparazione Face ID da Giolab Assemini
        </h2>
        <p className="text-muted-foreground mb-4">
          Se le soluzioni software non hanno funzionato, il problema è <strong className="text-foreground">hardware</strong>. Da <strong className="text-giolab-blue">Giolab ad Assemini</strong> possiamo:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>Diagnosi gratuita</strong> del sistema Face ID</li>
          <li><strong>Sostituzione sensori danneggiati</strong></li>
          <li><strong>Riallineamento preciso</strong> dei componenti TrueDepth</li>
          <li><strong>Riparazione flex cable</strong> se danneggiato</li>
          <li><strong>Micro-saldature sulla scheda madre</strong> se necessario</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button 
            size="lg" 
            className="bg-giolab-blue hover:bg-giolab-blue/90"
            onClick={() => window.open('https://wa.me/393406970686?text=Ciao, il Face ID del mio iPhone non funziona più', '_blank')}
          >
            💬 Richiedi Diagnosi Gratuita
          </Button>
        </div>
      </section>

      <section>
        <h2 id="conclusione" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Conclusione
        </h2>
        <p className="text-muted-foreground">
          Il <strong className="text-foreground">malfunzionamento del Face ID</strong> dopo una caduta è un problema comune ma risolvibile nella maggior parte dei casi. Se hai provato tutte le soluzioni software senza successo, <strong className="text-giolab-blue">contatta Giolab ad Assemini</strong> per una diagnosi professionale. I nostri tecnici hanno l'esperienza e gli strumenti necessari per ripristinare il Face ID del tuo iPhone!
        </p>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Face ID Non Funziona Dopo una Caduta? Ecco Come Risolvere | Giolab"
      description="Face ID non funziona più dopo una caduta dell'iPhone? Scopri le cause e come riparare il sensore Face ID presso Giolab ad Assemini."
      keywords="face id non funziona dopo caduta, riparazione sensore iPhone, face id rotto, sensore faciale iPhone Assemini, riparazione face id Cagliari"
      slug="perche-face-id-smette-funzionare"
      ogImage="https://giolabriparazioni.it/og-images/perche-face-id-smette-funzionare.jpg"
      author="Giolab Team"
      datePublished="2025-01-17"
      category="Riparazione"
      content={articleContent}
      readingTime={7}
    />
  );
}