import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { Wrench, Shield, CheckCircle2, Monitor, Cpu, Settings } from "lucide-react";

const SostituzioneDisplayMacBook = () => {
  const content = (
    <>
      {/* Introduzione */}
      <section className="blog-section">
        <h2 id="introduzione" className="blog-h2">
          <Monitor className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          Introduzione
        </h2>
        <p className="blog-paragraph">
          Un display rotto non è solo un danno estetico, è un freno alla tua produttività. Ma non tutte le riparazioni sono uguali.
        </p>
        <p className="blog-paragraph">
          Nel nostro laboratorio di <strong>Assemini</strong>, abbiamo scelto una strada precisa: niente compromessi. 
          In questo articolo ti portiamo "dietro le quinte" per mostrarti esattamente <strong>cosa montiamo</strong> sul tuo Mac 
          e <strong>come lo verifichiamo</strong>, garantendoti un risultato che non ha nulla da invidiare al prodotto appena uscito dalla scatola.
        </p>
      </section>

      {/* Qualità del Ricambio */}
      <section className="blog-section">
        <h2 id="qualita-ricambio-full-assembly" className="blog-h2">
          <Cpu className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          1. La Qualità del Ricambio: Solo Moduli "Full Assembly"
        </h2>
        <p className="blog-paragraph">
          La differenza tra una riparazione mediocre e una perfetta sta nel componente utilizzato. 
          Noi di <strong>Giolab</strong> non effettuiamo la rischiosa separazione del vetro dal pannello LCD 
          (che causa spesso infiltrazioni di polvere o aloni).
        </p>
        <p className="blog-paragraph">
          Utilizziamo esclusivamente moduli <strong>Full Assembly Original Quality</strong>.
        </p>
        
        <h3 id="cosa-significa-full-assembly" className="blog-h3">Cosa significa?</h3>
        <p className="blog-paragraph">
          Il ricambio che installiamo è un blocco unico, <strong>sigillato industrialmente in fabbrica</strong>, che comprende:
        </p>
        <ul className="blog-list-bulleted">
          <li><strong>Scocca in alluminio (Top Case):</strong> Per eliminare anche eventuali ammaccature esterne.</li>
          <li><strong>Pannello Retina/LCD:</strong> Senza difetti di pixel o cromatismi.</li>
          <li><strong>Webcam e Sensori:</strong> Già integrati e calibrati.</li>
          <li><strong>Cerniere (Hinges):</strong> Parte integrante del blocco.</li>
        </ul>

        <div className="blog-box-tip">
          <p>
            <strong>💡 Perché è importante?</strong> Essendo un modulo pre-assemblato, è fisicamente impossibile avere 
            problemi di "vetri incollati male" o "luci che filtrano dai bordi", perché il pannello non viene mai aperto 
            da mano umana, ma assemblato in camera sterile dal produttore.
          </p>
        </div>
      </section>

      {/* Protocollo di Montaggio */}
      <section className="blog-section">
        <h2 id="protocollo-montaggio" className="blog-h2">
          <Settings className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          2. Il Protocollo di Montaggio: Precisione Millimetrica
        </h2>
        <p className="blog-paragraph">
          La qualità del pezzo è inutile senza una mano esperta. Il nostro protocollo di installazione prevede passaggi inviolabili:
        </p>
        <ul className="blog-list-bulleted">
          <li>
            <strong>Sicurezza Elettrica:</strong> Scollegamento preventivo della batteria per proteggere la scheda madre.
          </li>
          <li>
            <strong>Pulizia Profonda:</strong> Prima di montare il nuovo schermo, rimuoviamo polvere e residui dalle ventole 
            e dalle griglie di aerazione (un servizio che offriamo sempre incluso).
          </li>
          <li>
            <strong>Serraggio Controllato:</strong> Le viti delle cerniere vengono serrate rispettando la coppia di forza corretta. 
            Questo garantisce che il display sia solido, stabile e che l'apertura sia fluida come il primo giorno.
          </li>
        </ul>
      </section>

      {/* Verifica Post-Installazione */}
      <section className="blog-section">
        <h2 id="verifica-post-installazione" className="blog-h2">
          <CheckCircle2 className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          3. La Verifica Post-Installazione: Il "Doppio Collaudo"
        </h2>
        <p className="blog-paragraph">
          Il lavoro non finisce quando avvitiamo l'ultima vite. Ogni MacBook subisce una serie di stress-test 
          prima di ricevere l'etichetta "Pronto":
        </p>
        <ul className="blog-list-bulleted">
          <li>
            <span className="text-green-600 font-bold">✅ Test Strutturale:</span> Verifichiamo che il display mantenga 
            la posizione a 45°, 90° e 110° senza cedimenti o rumori.
          </li>
          <li>
            <span className="text-green-600 font-bold">✅ Test Cromatico:</span> Controllo uniformità della retroilluminazione 
            e assenza di pixel difettosi.
          </li>
          <li>
            <span className="text-green-600 font-bold">✅ Test Sensori:</span> Verifica del sensore di luminosità ambientale, 
            True Tone e soprattutto del <strong>Sensore Sleep</strong> (il Mac deve andare in stop istantaneamente alla chiusura).
          </li>
        </ul>
      </section>

      {/* Garanzia */}
      <section className="blog-section">
        <h2 id="garanzia-12-mesi" className="blog-h2">
          <Shield className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          4. La Nostra Firma: 12 Mesi di Garanzia
        </h2>
        <p className="blog-paragraph">
          Perché siamo così rigidi sui protocolli? Per poterti offrire la massima serenità.
        </p>
        <p className="blog-paragraph">
          Tutti i nostri interventi di sostituzione display sono coperti da <strong>12 Mesi di Garanzia</strong>.
        </p>
        <p className="blog-paragraph">
          Sappiamo come lavoriamo e conosciamo la qualità dei nostri ricambi: se scegli <strong>Giolab</strong>, 
          scegli la sicurezza di un lavoro impeccabile, oggi e nel tempo.
        </p>

        <div className="blog-box-tip">
          <p>
            <strong>🛡️ Garanzia Completa:</strong> La nostra garanzia copre qualsiasi difetto del ricambio o dell'installazione. 
            In caso di problemi, interveniamo gratuitamente presso il nostro laboratorio di <strong>Assemini (Cagliari)</strong>.
          </p>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="blog-section">
        <h2 id="affidaci-mac" className="blog-h2">
          <Wrench className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          Affidaci il Tuo Mac
        </h2>
        <p className="blog-paragraph">
          Se cerchi qualità, trasparenza e un risultato garantito, passa a trovarci nel nostro laboratorio 
          ad <strong>Assemini</strong>, alle porte di <strong>Cagliari</strong>.
        </p>
        <p className="blog-paragraph">
          Offriamo diagnosi gratuita e preventivi trasparenti. Il tuo MacBook merita le cure migliori.
        </p>
      </section>

      {/* ArticleCTA Component */}
      <ArticleCTA />
    </>
  );

  return (
    <BlogArticleTemplate
      title="Sostituzione Display MacBook: Qualità Originale, Protocolli Rigidi e Garanzia 12 Mesi"
      description="Scopri il nostro protocollo per la sostituzione display MacBook: ricambi Full Assembly, test rigorosi e 12 mesi di garanzia per un risultato impeccabile."
      keywords="sostituzione display macbook, riparazione schermo macbook, display macbook assemini, riparazione macbook cagliari, display full assembly macbook, garanzia riparazione macbook, tecnico macbook sardegna"
      slug="sostituzione-display-macbook-protocollo-qualita-garanzia"
      ogImage="https://giolabriparazioni.it/og-images/sostituzione-display-macbook-giolab-assemini.jpg"
      author="Giolab Team"
      datePublished="2025-12-09"
      category="Guide"
      content={content}
      readingTime={7}
    />
  );
};

export default SostituzioneDisplayMacBook;
