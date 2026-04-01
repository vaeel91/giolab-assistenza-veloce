import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { Wrench, Shield, CheckCircle2, Monitor, Cpu, Settings, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          (che causa spesso infiltrazioni di polvere o aloni), come spieghiamo anche nella nostra <a href="/blog/display-originali-vs-compatibili" className="text-giolab-blue hover:underline font-medium">guida sui display originali vs compatibili</a>.
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
            e dalle griglie di aerazione (un servizio che offriamo sempre incluso, simile alla <a href="/blog/pc-lento-velocizzare-ssd-pulizia-giolab-assemini" className="text-giolab-blue hover:underline font-medium">manutenzione preventiva per PC</a>).
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

      {/* FAQ Section */}
      <section className="blog-section">
        <h2 id="faq" className="blog-h2">
          <HelpCircle className="inline-block w-6 h-6 mr-2 text-giolab-blue" />
          Domande Frequenti
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="qualita-visiva" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Il nuovo schermo avrà la stessa qualità, luminosità e colori del mio originale Apple?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Assolutamente sì. Il nostro protocollo di qualità prevede l'utilizzo di pannelli Retina conformi agli standard originali. 
              Questo significa che luminosità, fedeltà cromatica (gamma colori P3), risoluzione e angoli di visione saranno 
              indistinguibili dal display che avevi appena acquistato il Mac. Non noterai alcuna differenza nella definizione 
              del testo o nella vividezza delle immagini.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tempi-attesa" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Quanto tempo dovrò restare senza il mio MacBook? Mi serve per lavorare!
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sappiamo quanto il Mac sia fondamentale per il tuo lavoro. A differenza dei canali ufficiali che possono richiedere 
              giorni o settimane, il nostro laboratorio è strutturato per interventi rapidi. Una volta prenotato il ricambio e 
              confermato l'appuntamento, riduciamo al minimo i tempi di fermo macchina, permettendoti di tornare operativo 
              nel più breve tempo possibile.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="perdita-dati" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Devo formattare il Mac o perderò i miei file durante la riparazione?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. La sostituzione del display è un intervento hardware che non tocca la memoria del tuo computer. 
              I tuoi documenti, foto e applicazioni rimarranno esattamente dove sono. Tuttavia, come buona norma per 
              qualsiasi intervento tecnico, consigliamo sempre di avere un backup recente (Time Machine) per la tua totale tranquillità.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="garanzia-post" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              E se lo schermo smette di funzionare dopo un mese? Che garanzia offrite?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Offriamo una <strong>Garanzia di 12 Mesi</strong> sul display sostituito, esattamente come (o spesso meglio) 
              degli standard di mercato. La garanzia copre qualsiasi difetto di fabbricazione o anomalia funzionale 
              (es. touch non reattivo, pixel difettosi, spegnimenti improvvisi) che non sia causata da nuovi danni accidentali.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="webcam-truetone" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              La webcam e la regolazione automatica della luminosità (True Tone) funzioneranno ancora?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sì. I nostri tecnici sono specializzati nel trapianto corretto dei sensori. Durante il processo di sostituzione, 
              ci assicuriamo che la videocamera FaceTime e i sensori di luce ambientale vengano preservati e reinstallati 
              correttamente, mantenendo attive tutte le funzionalità originali del tuo modello (laddove il ricambio lo preveda tecnicamente).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="costo-apple-store" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Perché dovrei scegliervi rispetto all'Apple Store?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Per il rapporto <strong>Qualità/Prezzo/Tempo</strong>. Offriamo un servizio di livello "Premium" con ricambi 
              di altissima qualità e una garanzia solida, ma a un costo spesso più competitivo rispetto alla sostituzione 
              fuori garanzia della casa madre, e con tempistiche decisamente più snelle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="controllo-finale" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Come fate a essere sicuri che tutto funzioni?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Prima di riconsegnarti il dispositivo, eseguiamo una serie di <strong>Test Post-Riparazione</strong> 
              (parte integrante del nostro Protocollo Qualità). Verifichiamo non solo l'accensione, ma anche la calibrazione 
              dei colori, la retroilluminazione uniforme e la risposta della webcam, per garantirti un MacBook perfetto al 100%.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ArticleCTA Component */}
      <ArticleCTA />
    </>
  );

  return (
    <BlogArticleTemplate
      title="Display MacBook: Qualità e Garanzia 12 Mesi | Giolab"
      description="Sostituzione display MacBook ad Assemini: ricambi Full Assembly, test rigorosi e 12 mesi di garanzia."
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
