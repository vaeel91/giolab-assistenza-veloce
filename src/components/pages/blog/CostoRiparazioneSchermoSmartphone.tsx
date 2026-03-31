import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CostoRiparazioneSchermoSmartphone() {
  const articleContent = (
    <div className="blog-content">
      <section>
        <p className="blog-paragraph">
          Hai rotto il <strong>display del tuo smartphone</strong> e vuoi sapere quanto costa ripararlo? In questa guida aggiornata al 2026 ti spieghiamo i <strong>costi indicativi</strong> per la sostituzione dello schermo dei modelli più diffusi, le differenze tra display originali e compatibili, e come funziona il nostro servizio di riparazione ad Assemini, a pochi minuti da Cagliari.
        </p>
      </section>

      <section>
        <h2 id="originale-vs-compatibile" className="blog-h2">
          1. Display Originale vs Compatibile: Cosa Scegliere?
        </h2>
        <p className="blog-paragraph">
          Quando si rompe lo schermo di uno smartphone, la prima domanda è: <strong>display originale o compatibile</strong>? Ecco le differenze principali:
        </p>

        <h3 id="display-originale" className="blog-h3">Display Originale</h3>
        <p className="blog-paragraph">
          I display originali sono prodotti direttamente dal produttore (Apple, Samsung) e garantiscono la <strong>massima fedeltà cromatica</strong>, la risposta al tocco perfetta e la piena compatibilità con funzioni avanzate come <strong>Face ID</strong>, True Tone e luminosità automatica. Sono la scelta ideale per chi non vuole compromessi.
        </p>

        <h3 id="display-compatibile" className="blog-h3">Display Compatibile di Alta Qualità</h3>
        <p className="blog-paragraph">
          I display compatibili di alta qualità (<strong>INCELL</strong> o <strong>AMOLED aftermarket</strong>) offrono un ottimo rapporto qualità-prezzo. Sono la scelta giusta per chi vuole risparmiare senza rinunciare a una buona esperienza d'uso. La differenza con l'originale è minima nella maggior parte dei casi.
        </p>
        <p className="blog-paragraph">
          Da <strong>Giolab Assemini</strong> offriamo entrambe le opzioni e ti consigliamo la soluzione più adatta al tuo budget e alle tue esigenze. Approfondisci le differenze nella nostra guida dedicata: <Link to="/blog/display-originali-vs-compatibili" className="text-giolab-blue hover:underline">Display Originali vs Compatibili: confronto completo</Link>.
        </p>
      </section>

      <section>
        <h2 id="prezzi-riparazione" className="blog-h2">
          2. Prezzi Indicativi per la Riparazione del Display
        </h2>
        <p className="blog-paragraph">
          Ecco una tabella con i <strong>prezzi indicativi</strong> per la sostituzione display dei modelli più richiesti nel nostro laboratorio ad Assemini:
        </p>

        <div className="table-responsive">
          <table className="blog-table">
            <thead>
              <tr>
                <th>Modello</th>
                <th>Display Compatibile</th>
                <th>Display Originale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>iPhone 15 / 15 Plus</strong></td>
                <td>da €120</td>
                <td>da €200</td>
              </tr>
              <tr>
                <td><strong>iPhone 14 / 14 Plus</strong></td>
                <td>da €100</td>
                <td>da €180</td>
              </tr>
              <tr>
                <td><strong>iPhone 13 / 13 Mini</strong></td>
                <td>da €85</td>
                <td>da €150</td>
              </tr>
              <tr>
                <td><strong>Samsung Galaxy S24</strong></td>
                <td>da €110</td>
                <td>da €190</td>
              </tr>
              <tr>
                <td><strong>Samsung Galaxy A54</strong></td>
                <td>da €70</td>
                <td>da €120</td>
              </tr>
              <tr>
                <td><strong>Xiaomi Redmi Note 13</strong></td>
                <td>da €55</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="blog-highlight-box info">
          <p>
            <strong>Nota:</strong> i prezzi sono indicativi e possono variare in base alla disponibilità dei ricambi e al modello esatto. <strong>Contattaci per un preventivo gratuito e preciso</strong> sul tuo dispositivo.
          </p>
        </div>
      </section>

      <section>
        <h2 id="processo-riparazione" className="blog-h2">
          3. Il Processo di Riparazione del Display da Giolab
        </h2>
        <p className="blog-paragraph">
          La riparazione del display da Giolab segue un <strong>processo preciso e professionale</strong> per garantire il miglior risultato:
        </p>
        <ol className="blog-list-numbered">
          <li><strong>Diagnosi iniziale gratuita</strong> — valutiamo il danno e ti proponiamo le opzioni disponibili con preventivo trasparente</li>
          <li><strong>Smontaggio in ambiente pulito</strong> — utilizziamo strumenti antistatici e professionali per evitare danni ai componenti interni</li>
          <li><strong>Sostituzione del display</strong> — montiamo il nuovo schermo e testiamo immediatamente touch, luminosità e funzioni speciali (Face ID, impronta digitale, True Tone)</li>
          <li><strong>Riassemblaggio e verifica finale</strong> — controlliamo che tutto funzioni perfettamente prima della consegna</li>
        </ol>
        <p className="blog-paragraph">
          Ogni riparazione è coperta da <strong>garanzia di 12 mesi</strong>. Il tempo medio di intervento è di circa <strong>1 ora</strong> per la maggior parte dei modelli. Scopri di più sul nostro <Link to="/blog/riparazione-iphone-1-ora-giolab-assemini" className="text-giolab-blue hover:underline">servizio di riparazione rapida in 1 ora</Link>.
        </p>
      </section>

      <section>
        <h2 id="tutte-le-marche" className="blog-h2">
          4. Non Solo iPhone: Ripariamo Display di Tutte le Marche
        </h2>
        <p className="blog-paragraph">
          Da <strong>Giolab Assemini</strong> ripariamo schermi di tutte le principali marche di smartphone:
        </p>
        <ul className="blog-list-bulleted">
          <li><strong>Apple iPhone</strong> — tutti i modelli dal 7 al 15 Pro Max</li>
          <li><strong>Samsung Galaxy</strong> — serie S, A, Note e Z Fold/Flip</li>
          <li><strong>Xiaomi</strong> — Redmi, Poco, Mi</li>
          <li><strong>Oppo</strong>, <strong>Huawei</strong>, <strong>OnePlus</strong>, <strong>Motorola</strong> e altri</li>
        </ul>
        <p className="blog-paragraph">
          Hai un modello particolare o poco comune? Contattaci su WhatsApp al <a href="tel:+393406970686" className="text-giolab-blue hover:underline font-semibold">340 69 70 686</a> per verificare la disponibilità del ricambio e ricevere un <strong>preventivo gratuito</strong>.
        </p>
        <p className="blog-paragraph">
          Siamo in <strong>Via Cagliari 200, Assemini</strong>, a pochi minuti dal centro di Cagliari. Raggiungici facilmente da Quartu Sant'Elena, Elmas, Decimomannu e tutta l'area metropolitana.
        </p>
      </section>

      <section>
        <div className="blog-highlight-box info">
          <h2 id="contattaci" className="blog-h2">
            Richiedi un Preventivo Gratuito
          </h2>
          <p className="blog-paragraph">
            Schermo rotto? <strong>Non aspettare che il danno peggiori</strong>: un display crepato può danneggiare i componenti interni e rendere il telefono inutilizzabile. Contattaci per una diagnosi gratuita.
          </p>
          <ul className="blog-list-bulleted">
            <li>📍 Via Cagliari 200, 09032 Assemini (CA)</li>
            <li>📞 <a href="tel:+393406970686" className="text-giolab-blue hover:underline">340 69 70 686</a></li>
            <li>🕐 Lun-Ven 10:00-12:30 / 16:00-19:00 | Sab 10:00-12:30</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              size="lg" 
              className="bg-giolab-blue hover:bg-giolab-blue/90"
              onClick={() => window.open('https://wa.me/393406970686?text=Ciao, ho lo schermo rotto e vorrei un preventivo per la riparazione del display.', '_blank')}
            >
              💬 Scrivici su WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('tel:+393406970686', '_blank')}
            >
              📞 Chiamaci Ora
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 id="faq" className="blog-h2">
          Domande Frequenti
        </h2>

        <h3 id="faq-tempo" className="blog-h3">Quanto tempo ci vuole per sostituire il display?</h3>
        <p className="blog-paragraph">
          Nella maggior parte dei casi la riparazione viene completata in circa <strong>1 ora</strong>. Per modelli particolari o con danni estesi potrebbe servire qualche ora in più.
        </p>

        <h3 id="faq-dati" className="blog-h3">Perdo i dati con la sostituzione dello schermo?</h3>
        <p className="blog-paragraph">
          <strong>No</strong>, la sostituzione del display non comporta alcuna perdita di dati. Foto, contatti, app e messaggi restano intatti.
        </p>

        <h3 id="faq-garanzia" className="blog-h3">Che garanzia offrite sul display sostituito?</h3>
        <p className="blog-paragraph">
          Offriamo una <strong>garanzia di 12 mesi</strong> su ogni display installato, che copre difetti di fabbricazione e malfunzionamenti del componente.
        </p>

        <h3 id="faq-face-id" className="blog-h3">Il Face ID continua a funzionare dopo la sostituzione?</h3>
        <p className="blog-paragraph">
          Sì, i nostri tecnici eseguono il <strong>trasferimento del sensore Face ID</strong> sul nuovo display per garantire il corretto funzionamento. Scopri di più sulla <Link to="/blog/riparazione-face-id-iphone-giolab-assemini" className="text-giolab-blue hover:underline">riparazione Face ID</Link>.
        </p>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Costo Riparazione Display Smartphone – Giolab"
      description="Hai rotto il display del tuo smartphone? Scopri i costi di riparazione per iPhone, Samsung e altri marchi. Riparazioni rapide con garanzia 12 mesi da Giolab Assemini."
      keywords="costo riparazione schermo smartphone, riparazione display iPhone Cagliari, sostituzione schermo Samsung Assemini, prezzo cambio display iPhone, riparazione vetro smartphone"
      slug="costo-riparazione-schermo-smartphone-cagliari-assemini"
      ogImage="https://giolabriparazioni.it/og-images/riparazione-iphone-1-ora.jpg"
      author="Giolab Assemini"
      datePublished="2026-02-28"
      category="Guide"
      content={articleContent}
      readingTime={5}
    />
  );
}
