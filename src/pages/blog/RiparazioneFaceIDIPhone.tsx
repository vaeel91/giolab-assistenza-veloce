import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import faceIdComponents from "@/assets/face-id-truedepth-components.jpg";
import laboratorioRepair from "@/assets/riparazione-face-id-laboratorio.jpg";
import strumentiMicrosaldatura from "@/assets/strumenti-microsaldatura-face-id.jpg";

export default function RiparazioneFaceIDIPhone() {
  const articleContent = (
    <>
      <section className="blog-section">
        <p className="blog-paragraph text-lg">
          Il Face ID è uno dei sistemi più avanzati integrati negli iPhone e, quando smette di funzionare, può creare disagi immediati: accesso al dispositivo, app bancarie, pagamenti, tutto diventa meno pratico. 🔧
        </p>
        <p className="blog-paragraph">
          I malfunzionamenti possono avere diverse cause, ma nella maggior parte dei casi è possibile intervenire in modo efficace. Nel nostro <strong>laboratorio riparazioni professionali Assemini</strong> ci occupiamo regolarmente della riparazione del Face ID, con procedure tecniche mirate e strumenti dedicati.
        </p>
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Perché il Face ID può smettere di funzionare</h2>

        <p className="blog-paragraph">
          Il sistema di riconoscimento facciale si basa sul <strong>modulo TrueDepth</strong>, un insieme di componenti estremamente delicati:
        </p>

        <ul className="blog-list-bulleted">
          <li><strong>Dot Projector</strong></li>
          <li><strong>Flood Illuminator</strong></li>
          <li><strong>Sensore a infrarossi</strong></li>
          <li><strong>Fotocamera frontale TrueDepth</strong></li>
          <li><strong>Cavo flessibile di collegamento</strong></li>
        </ul>

        <img 
          src={faceIdComponents} 
          alt="Componenti del sistema TrueDepth iPhone: Dot Projector, Flood Illuminator, sensore IR"
          className="w-full h-auto rounded-lg shadow-md my-8"
          loading="lazy"
        />

        <p className="blog-paragraph">
          Questi elementi lavorano insieme per creare la mappa tridimensionale del volto. Cadute, urti, infiltrazioni di liquidi o interventi non eseguiti correttamente (come una sostituzione display effettuata senza accortezza) possono danneggiare uno o più elementi del sistema.
        </p>

        <div className="blog-box-warning">
          <strong>⚠️ I sintomi più comuni:</strong>
          <ul className="blog-list-bulleted mt-3">
            <li>"Face ID non è disponibile"</li>
            <li>"Impossibile attivare Face ID su questo iPhone"</li>
            <li>Il Face ID non risponde o non permette una nuova configurazione</li>
            <li>Riconoscimento lento o impreciso</li>
          </ul>
        </div>
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">I problemi più frequenti che riscontriamo</h2>

        <p className="blog-paragraph">
          Nel nostro laboratorio vediamo spesso le stesse casistiche:
        </p>

        <h3 className="blog-h3">🔴 Face ID non disponibile</h3>
        <p className="blog-paragraph">
          Spesso legato a un danno del <strong>Dot Projector</strong> o del flex TrueDepth.
        </p>

        <h3 className="blog-h3">🔴 Face ID non funzionante dopo un cambio display</h3>
        <p className="blog-paragraph">
          Può accadere quando i sensori vengono trasferiti in modo scorretto o subiscono una micro-lesione.
        </p>

        <h3 className="blog-h3">🔴 Face ID che non riconosce il volto</h3>
        <p className="blog-paragraph">
          Possibile guasto alla <strong>fotocamera IR</strong> o interruzioni nelle linee dati.
        </p>

        <h3 className="blog-h3">🔴 Configurazione impossibile</h3>
        <p className="blog-paragraph">
          Tipico nei casi di ossidazione o flessibile compromesso. Questi problemi, pur essendo delicati, sono generalmente risolvibili. ✔️
        </p>
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Si può riparare il Face ID?</h2>

        <p className="blog-paragraph">
          <strong>Sì.</strong> Il Face ID può essere riparato nella maggior parte dei casi, purché venga eseguito da un laboratorio attrezzato.
        </p>

        <p className="blog-paragraph">
          Non è un intervento che si può affrontare sostituendo un componente generico: i sensori del sistema TrueDepth sono collegati in modo univoco alla scheda logica e richiedono procedure mirate.
        </p>

        <img 
          src={laboratorioRepair} 
          alt="Tecnico specializzato che ripara il Face ID iPhone sotto microscopio nel laboratorio Giolab"
          className="w-full h-auto rounded-lg shadow-md my-8"
          loading="lazy"
        />
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Come avviene la riparazione del Face ID da Giolab</h2>

        <p className="blog-paragraph">
          Il nostro metodo di lavoro è strutturato e professionale:
        </p>

        <ol className="blog-list-numbered">
          <li>
            <strong>🔍 Diagnosi tecnica</strong><br />
            Analizziamo il modulo TrueDepth per individuare con precisione il componente difettoso.
          </li>
          <li>
            <strong>⚡ Test dei sensori principali</strong><br />
            Verifichiamo Dot Projector, Flood Illuminator, sensore IR e fotocamera, controllando potenza, continuità e risposte elettroniche.
          </li>
          <li>
            <strong>🔧 Interventi di micro-saldatura</strong><br />
            Quando necessario, ripristiniamo linee interrotte o flessibili lesionati con strumenti professionali.
          </li>
          <li>
            <strong>🛠️ Ripristino del Dot Projector</strong><br />
            In caso di danni a questo componente, utilizziamo procedure avanzate che mantengono l'abbinamento originale con la scheda logica.
          </li>
          <li>
            <strong>✅ Calibrazione finale</strong><br />
            Terminata la riparazione, eseguiamo una serie di test per assicurarci che il sistema funzioni in modo corretto e stabile.
          </li>
        </ol>

        <img 
          src={strumentiMicrosaldatura} 
          alt="Strumenti professionali per microsaldatura e riparazione Face ID: microscopio e stazione saldante"
          className="w-full h-auto rounded-lg shadow-md my-8"
          loading="lazy"
        />
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Costi della riparazione</h2>

        <p className="blog-paragraph">
          Il prezzo varia in base al tipo di guasto rilevato:
        </p>

        <div className="table-responsive my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border border-border p-3 text-left">Tipo di intervento</th>
                <th className="border border-border p-3 text-left">Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Danni al flessibile</td>
                <td className="border border-border p-3">Costo contenuto</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3">Linee interrotte o micro-saldature</td>
                <td className="border border-border p-3">Costo medio</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Ripristino Dot Projector o sensore IR</td>
                <td className="border border-border p-3">Intervento più complesso</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="blog-box-tip">
          <strong>💼 Diagnosi gratuita:</strong> Prima di procedere eseguiamo sempre una diagnosi gratuita, così da proporre solo la soluzione realmente necessaria.
        </div>
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Tempistiche</h2>

        <p className="blog-paragraph">
          Generalmente l'intervento richiede:
        </p>

        <ul className="blog-list-bulleted">
          <li><strong>1–3 giorni lavorativi</strong> per la maggior parte delle riparazioni</li>
          <li>Nei casi più semplici è possibile eseguire la riparazione anche <strong>in giornata</strong></li>
        </ul>
      </section>

      <section className="blog-section">
        <h2 className="blog-h2">Perché rivolgersi a noi per la riparazione del Face ID</h2>

        <p className="blog-paragraph">
          La riparazione del Face ID richiede competenze specifiche e strumenti adatti all'analisi dei sensori TrueDepth. Nel nostro <strong>laboratorio riparazioni professionali Assemini</strong> trattiamo regolarmente problemi legati a questo sistema, il che ci consente di individuare con precisione la causa del guasto e intervenire con la procedura più adeguata.
        </p>

        <p className="blog-paragraph">
          Il nostro approccio è semplice e trasparente: prima eseguiamo una diagnosi accurata, poi comunichiamo tempi e costi in maniera chiara. Interveniamo su tutte le generazioni di iPhone dotate di questo sistema, dal modello X fino alle serie più recenti. 📱
        </p>
      </section>

      <ArticleCTA />

      <section className="blog-section">
        <h2 className="blog-h2">❓ Domande frequenti (FAQ)</h2>

        <h3 className="blog-h3">▶️ Il Face ID può essere riparato su tutti i modelli di iPhone?</h3>
        <p className="blog-paragraph">
          Sì, ripariamo il Face ID su tutti i modelli di iPhone che ne sono dotati, dall'iPhone X fino alle serie più recenti (iPhone 11, 12, 13, 14, 15 e successive).
        </p>

        <h3 className="blog-h3">▶️ Quanto costa riparare il Face ID?</h3>
        <p className="blog-paragraph">
          Il costo dipende dal tipo di intervento necessario. Eseguiamo sempre una diagnosi gratuita prima di fornire un preventivo preciso e trasparente.
        </p>

        <h3 className="blog-h3">▶️ Quanto tempo richiede la riparazione?</h3>
        <p className="blog-paragraph">
          Generalmente 1-3 giorni lavorativi. Nei casi più semplici è possibile completare l'intervento in giornata.
        </p>

        <h3 className="blog-h3">▶️ Posso riparare il Face ID da solo?</h3>
        <p className="blog-paragraph">
          No, la riparazione del Face ID richiede strumenti professionali (microscopi, stazioni di microsaldatura) e competenze tecniche specifiche. Tentare riparazioni fai-da-te può peggiorare il danno.
        </p>

        <h3 className="blog-h3">▶️ Il Face ID funzionerà come prima dopo la riparazione?</h3>
        <p className="blog-paragraph">
          Sì, se la riparazione viene eseguita correttamente il Face ID funzionerà esattamente come prima, con tutte le funzionalità originali ripristinate.
        </p>

        <h3 className="blog-h3">▶️ Dove si trova GioLab?</h3>
        <p className="blog-paragraph">
          Siamo in <strong>Via Carmine 20, 09032 Assemini (CA)</strong>, facilmente raggiungibili da Cagliari, Elmas, Decimomannu e tutta la provincia.
        </p>

        <h3 className="blog-h3">▶️ Posso venire senza appuntamento?</h3>
        <p className="blog-paragraph">
          Sì, ma ti consigliamo di contattarci prima al <strong>340 69 70 686</strong> per verificare la disponibilità immediata del tecnico.
        </p>
      </section>
    </>
  );

  return (
    <BlogArticleTemplate
      title="Riparazione Face ID iPhone - Giolab Assemini"
      description="Face ID non funziona? Riparazione professionale del sistema TrueDepth iPhone. Diagnosi gratuita, micro-saldature, ripristino sensori. Assemini."
      keywords="riparazione face id, face id non funziona, truedepth iphone, riparazione sensori iphone, dot projector, face id assemini, riparazione iphone assemini"
      slug="riparazione-face-id-iphone-giolab-assemini"
      ogImage="https://giolabriparazioni.it/og-images/riparazione-face-id-iphone.jpg"
      author="Giolab Team"
      datePublished="2025-01-27"
      category="Guide"
      content={articleContent}
      readingTime={8}
    />
  );
}
