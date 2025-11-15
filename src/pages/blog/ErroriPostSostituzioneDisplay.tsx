import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ErroriPostSostituzioneDisplay() {
  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Hai appena <strong className="text-foreground">sostituito il display del tuo iPhone</strong> e vuoi che duri il più a lungo possibile? Molti utenti commettono errori banali subito dopo la riparazione che compromettono la qualità e la durata del nuovo schermo. In questo articolo ti spieghiamo i <strong className="text-giolab-blue">5 errori più comuni</strong> e come evitarli per mantenere il tuo iPhone perfetto.
        </p>
      </section>

      <section>
        <h2 id="errore-1-pellicola-protettiva" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          1. Non Applicare (o Applicare Male) la Pellicola Protettiva
        </h2>
        <p className="text-muted-foreground mb-4">
          Uno degli <strong className="text-foreground">errori più frequenti</strong> è pensare che il nuovo vetro sia già protetto. Anche se hai sostituito il display con uno di alta qualità, <strong className="text-foreground">il vetro nuovo è comunque soggetto a graffi</strong>.
        </p>
        
        <h3 id="cosa-fare-pellicola" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Cosa fare
        </h3>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li>Applica subito una <strong>pellicola in vetro temperato</strong> di qualità</li>
          <li>Pulisci accuratamente lo schermo prima di applicarla</li>
          <li>Rimuovi tutte le bolle d'aria con una spatola morbida</li>
          <li>Evita pellicole troppo economiche che non offrono protezione reale</li>
        </ul>
      </section>

      <section>
        <h2 id="errore-2-acqua-umidita" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          2. Esporre Subito l'iPhone all'Acqua o all'Umidità
        </h2>
        <p className="text-muted-foreground mb-4">
          Anche se molti iPhone sono <strong className="text-foreground">certificati IP68</strong>, dopo una sostituzione del display è fondamentale <strong className="text-giolab-blue">evitare l'acqua per almeno 24-48 ore</strong>.
        </p>
        <p className="text-muted-foreground mb-4">
          Durante la riparazione, le <strong className="text-foreground">guarnizioni impermeabili</strong> vengono rimosse e rimontate. Servono alcune ore affinché gli adesivi speciali facciano presa correttamente.
        </p>
        
        <h3 id="cosa-evitare-prime-48h" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Cosa evitare nelle prime 48 ore
        </h3>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li>Doccia con l'iPhone in bagno (vapore)</li>
          <li>Lavare i piatti o fare attività vicino all'acqua</li>
          <li>Andare in piscina o al mare</li>
          <li>Esposizione a pioggia intensa</li>
        </ul>
      </section>

      <section>
        <h2 id="errore-3-non-calibrare-touch" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          3. Non Calibrare il Touch dopo la Sostituzione
        </h2>
        <p className="text-muted-foreground mb-4">
          Anche se il nuovo display funziona correttamente, potrebbe necessitare di una <strong className="text-foreground">calibrazione del touch</strong> per una precisione perfetta.
        </p>
        
        <h3 id="come-calibrare-touch" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Come calibrare il touch su iPhone
        </h3>
        <p className="text-muted-foreground mb-4">
          Su iPhone non esiste una calibrazione manuale come su Android, ma puoi:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>Riavviare l'iPhone</strong> dopo la sostituzione</li>
          <li><strong>Testare il touch</strong> aprendo note e scrivendo in tutti gli angoli</li>
          <li><strong>Verificare i tap e gli swipe</strong> in tutte le aree dello schermo</li>
        </ul>
        <p className="text-muted-foreground">
          Se noti <strong className="text-foreground">zone morte o touch impreciso</strong>, contatta immediatamente il centro assistenza. Potrebbe essere un problema del connettore o del display stesso.
        </p>
      </section>

      <section>
        <h2 id="errore-4-custodie-strette" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          4. Usare Custodie Troppo Strette Subito Dopo la Riparazione
        </h2>
        <p className="text-muted-foreground mb-4">
          Molti utenti rimontano subito la custodia, ma se questa è <strong className="text-foreground">troppo rigida o stretta</strong>, può esercitare pressione sul nuovo display e causare:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li>Distacco parziale del vetro</li>
          <li>Infiltrazioni di polvere</li>
          <li>Pressione sui bordi che compromette la tenuta</li>
        </ul>
        <p className="text-muted-foreground">
          <strong className="text-giolab-blue">Consiglio</strong>: aspetta almeno 24 ore prima di montare custodie rigide o molto aderenti.
        </p>
      </section>

      <section>
        <h2 id="errore-5-non-controllare-garanzia" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          5. Non Controllare Subito se Tutto Funziona (e Non Sfruttare la Garanzia)
        </h2>
        <p className="text-muted-foreground mb-4">
          Molti utenti ritirano l'iPhone riparato e <strong className="text-foreground">non verificano immediatamente</strong> che tutto funzioni correttamente. Questo è un errore, perché se ci sono problemi è meglio accorgersene subito mentre sei ancora in assistenza.
        </p>
        
        <h3 id="cosa-testare-subito" className="text-xl md:text-2xl font-bold text-foreground mb-3 mt-6">
          Cosa testare subito alla riconsegna
        </h3>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><strong>Touch screen</strong>: verifica che risponda in tutti i punti</li>
          <li><strong>Luminosità e colori</strong>: controlla che lo schermo sia uniforme</li>
          <li><strong>Face ID</strong>: prova lo sblocco facciale</li>
          <li><strong>Fotocamera frontale</strong>: scatta una foto per verificare</li>
          <li><strong>Sensore di prossimità</strong>: testa durante una chiamata</li>
        </ul>
        <p className="text-muted-foreground">
          Da <strong className="text-giolab-blue">Giolab</strong> offriamo sempre <strong>garanzia 12 mesi</strong> su tutte le sostituzioni display. Se noti problemi, ricontattaci immediatamente!
        </p>
      </section>

      <section className="bg-giolab-blue/5 p-6 md:p-8 rounded-2xl border-l-4 border-giolab-blue">
        <h2 id="sostituzione-display-giolab" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Sostituzione Display Professionale da Giolab Assemini
        </h2>
        <p className="text-muted-foreground mb-4">
          Se hai bisogno di sostituire il display del tuo iPhone, affidati a <strong className="text-giolab-blue">Giolab ad Assemini</strong>:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside ml-4">
          <li><Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">Riparazione rapida in 1-2 ore</Link></li>
          <li><Link to="/blog/display-originali-vs-compatibili" className="text-giolab-blue hover:underline">Display originali o compatibili premium</Link></li>
          <li><strong>Garanzia 12 mesi</strong> su tutti i ricambi</li>
          <li><strong>Test completo</strong> prima della riconsegna</li>
          <li><strong>Consigli post-riparazione</strong> personalizzati</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button 
            size="lg" 
            className="bg-giolab-blue hover:bg-giolab-blue/90"
            onClick={() => window.open('https://wa.me/393406970686?text=Ciao, vorrei sostituire il display del mio iPhone', '_blank')}
          >
            💬 Prenota Riparazione su WhatsApp
          </Button>
        </div>
      </section>

      <section>
        <h2 id="conclusione" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Conclusione
        </h2>
        <p className="text-muted-foreground">
          Evitare questi <strong className="text-foreground">5 errori comuni</strong> dopo la sostituzione del display ti permetterà di mantenere il tuo iPhone perfetto più a lungo. Ricorda: una riparazione di qualità inizia con ricambi certificati, ma si mantiene nel tempo solo con le giuste attenzioni. <strong className="text-giolab-blue">Contatta Giolab per una sostituzione display professionale e consigli personalizzati!</strong>
        </p>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="I 5 Errori Più Comuni dopo la Sostituzione del Display iPhone | Giolab Assemini"
      description="Scopri i 5 errori più comuni che gli utenti commettono dopo aver sostituito il display dell'iPhone e come evitarli. Consigli pratici da Giolab."
      keywords="display iPhone problemi post riparazione, vetro nuovo non funziona, errori sostituzione schermo iPhone, consigli display iPhone Assemini"
      slug="errori-post-sostituzione-display"
      ogImage="https://giolabriparazioni.it/og-images/errori-post-sostituzione-display.jpg"
      author="Giolab Team"
      datePublished="2025-01-24"
      category="Guide"
      content={articleContent}
      readingTime={6}
    />
  );
}
