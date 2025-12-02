import ServiceTemplate from "@/components/ServiceTemplate";
import { Clock, Shield, Award, Wrench } from "lucide-react";

const RiparazioneDisplayIPhone = () => {
  return (
    <>
      <ServiceTemplate
      seoTitle="Riparazione Display iPhone Assemini | Giolab"
      seoDescription="Riparazione display iPhone ad Assemini. Schermo nuovo in 1 ora con ricambi certificati e garanzia 12 mesi. Preventivo gratuito."
      seoKeywords="riparazione display iPhone Assemini, sostituzione schermo iPhone Assemini, riparazione vetro iPhone Cagliari, schermo iPhone rotto Assemini, display iPhone in 1 ora, sostituzione display iPhone 13 14 15 Assemini"
      h1Title="Riparazione Display iPhone ad Assemini"
      subtitle="Sostituzione professionale di display e vetro per iPhone. Riparazioni rapide anche in 1 ora con ricambi certificati e garanzia 12 mesi."
      timeRange="30 min - 1 ora"
      priceRange="A partire da €69"
      breadcrumbs={[
        { name: "Home", url: "https://giolabriparazioni.it/" },
        { name: "Servizi", url: "https://giolabriparazioni.it/#servizi" },
        { name: "Riparazione Display iPhone" }
      ]}
      mainContent={
        <div className="space-y-6 text-muted-foreground">
          {/* CTA Instagram */}
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Guarda i nostri lavori su Instagram</p>
                <p className="text-xs text-muted-foreground">Scopri le riparazioni display che abbiamo realizzato</p>
              </div>
            </div>
            <a
              href="https://instagram.com/giolab_iphonefix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
            >
              Seguici su Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <p className="text-lg leading-relaxed">
            Il <strong className="text-foreground">display del tuo iPhone si è rotto</strong>? Da Giolab ad Assemini offriamo un servizio di <strong className="text-foreground">riparazione display iPhone professionale e veloce</strong>. Sostituiamo il vetro e lo schermo di tutti i modelli di iPhone, dall'iPhone X fino agli ultimi iPhone 15 Pro Max.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Riparazione Display iPhone: Rapida e Certificata
          </h2>
          <p className="leading-relaxed">
            La sostituzione del display iPhone è una delle riparazioni più richieste nel nostro centro assistenza di Assemini. Che si tratti di un <strong className="text-foreground">vetro rotto</strong>, di uno <strong className="text-foreground">schermo con linee colorate</strong>, o di un display completamente nero, il nostro team è in grado di risolvere il problema in tempi rapidi.
          </p>
          <p className="leading-relaxed">
            Utilizziamo esclusivamente <strong className="text-foreground">display di alta qualità certificati</strong>, compatibili con gli standard Apple. Ogni riparazione include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Display OLED o LCD di qualità premium</li>
            <li>Touch screen perfettamente funzionante</li>
            <li>True Tone preservato (dove possibile)</li>
            <li>Garanzia 12 mesi sul display sostituito</li>
            <li>Test completo pre e post riparazione</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Quanto Costa Riparare il Display di un iPhone ad Assemini?
          </h2>
          <p className="leading-relaxed">
            Il costo della riparazione display iPhone varia in base al modello. Ecco alcuni prezzi indicativi per i modelli più comuni:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">iPhone 13/13 Mini/13 Pro</strong>: da €129</li>
            <li><strong className="text-foreground">iPhone 14/14 Plus/14 Pro</strong>: da €149</li>
            <li><strong className="text-foreground">iPhone 15/15 Plus/15 Pro/15 Pro Max</strong>: da €169</li>
            <li><strong className="text-foreground">iPhone X/XS/11</strong>: da €99</li>
            <li><strong className="text-foreground">iPhone 12/12 Pro</strong>: da €119</li>
          </ul>
          <p className="leading-relaxed mt-4">
            <strong className="text-giolab-blue">Contattaci per un preventivo personalizzato gratuito!</strong> Valutiamo ogni caso singolarmente per offrirti il miglior rapporto qualità-prezzo.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Tempi di Riparazione: Veloce come un Lampo
          </h2>
          <p className="leading-relaxed">
            Sappiamo quanto sia importante il tuo iPhone nella vita quotidiana. Per questo motivo, <strong className="text-foreground">la maggior parte delle riparazioni display vengono completate in 30-60 minuti</strong>. Puoi aspettare comodamente nel nostro centro oppure tornare a ritirare il tuo iPhone perfettamente funzionante.
          </p>
          <p className="leading-relaxed">
            Durante la riparazione, se necessario, mettiamo a disposizione un <strong className="text-foreground">telefono di cortesia</strong> per non lasciarti mai senza comunicazione.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Perché Scegliere Giolab per la Riparazione Display iPhone ad Assemini?
          </h2>
          <p className="leading-relaxed">
            Con oltre 10 anni di esperienza nella riparazione iPhone, Giolab è il punto di riferimento ad Assemini e in tutta la provincia di Cagliari. Il nostro laboratorio è dotato di strumentazione professionale e i nostri tecnici partecipano costantemente a corsi di aggiornamento per restare al passo con le ultime tecnologie Apple.
          </p>
          <p className="leading-relaxed">
            Ogni riparazione viene eseguita con <strong className="text-foreground">precisione millimetrica</strong>, garantendo che il tuo iPhone torni come nuovo. Inoltre, grazie alla nostra <strong className="text-foreground">garanzia di 12 mesi</strong>, puoi stare tranquillo sulla qualità del lavoro svolto.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Serviamo Assemini, Cagliari e Provincia
          </h2>
          <p className="leading-relaxed">
            Il nostro centro assistenza si trova in <strong className="text-foreground">Via Carmine 20, 09032 Assemini (CA)</strong>, facilmente raggiungibile da Cagliari e da tutta la provincia. Siamo aperti dal lunedì al sabato con orario continuato per venirti incontro.
          </p>
          <p className="leading-relaxed">
            <strong className="text-giolab-blue">Prenota ora il tuo intervento su WhatsApp o chiamaci!</strong> Ti aspettiamo per restituire al tuo iPhone lo schermo perfetto che merita.
          </p>
        </div>
      }
      benefits={[
        {
          icon: <Clock className="h-12 w-12 text-giolab-blue" />,
          title: "Riparazione Rapida",
          description: "La maggior parte delle riparazioni vengono completate in 30-60 minuti"
        },
        {
          icon: <Shield className="h-12 w-12 text-giolab-blue" />,
          title: "Garanzia 12 Mesi",
          description: "Ogni display sostituito è coperto da garanzia completa di 12 mesi"
        },
        {
          icon: <Award className="h-12 w-12 text-giolab-blue" />,
          title: "Ricambi Certificati",
          description: "Utilizziamo solo display di alta qualità certificati e compatibili Apple"
        },
        {
          icon: <Wrench className="h-12 w-12 text-giolab-blue" />,
          title: "Tecnici Esperti",
          description: "Oltre 10 anni di esperienza nella riparazione iPhone di ogni modello"
        }
      ]}
      features={[
        {
          title: "Diagnosi Gratuita",
          description: "Valutiamo il danno e ti forniamo un preventivo chiaro prima di procedere"
        },
        {
          title: "Display Premium",
          description: "Utilizziamo schermi di qualità superiore con colori vividi e touch preciso"
        },
        {
          title: "Test Completo",
          description: "Verifichiamo touch, luminosità, colori e funzionalità complete del display"
        },
        {
          title: "Telefono di Cortesia",
          description: "Durante la riparazione mettiamo a disposizione un dispositivo sostitutivo"
        },
        {
          title: "Pulizia Interna",
          description: "Approfittiamo dell'apertura per pulire polvere e ossidazioni interne"
        },
        {
          title: "Backup Assistito",
          description: "Ti aiutiamo a fare il backup dei tuoi dati prima della riparazione"
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo ci vuole per riparare il display del mio iPhone?",
          answer: "La maggior parte delle riparazioni display vengono completate in 30-60 minuti. Per modelli particolarmente recenti o con danni complessi potrebbe essere necessaria qualche ora in più."
        },
        {
          question: "Perdo i dati se riparo il display?",
          answer: "No, la sostituzione del display non comporta la perdita di dati. Tuttavia, consigliamo sempre di effettuare un backup preventivo per sicurezza."
        },
        {
          question: "La garanzia Apple rimane valida dopo la riparazione?",
          answer: "Se il tuo iPhone è ancora in garanzia Apple, ti consigliamo di valutare prima il servizio Apple. Se la garanzia è scaduta, la nostra riparazione non influisce su eventuali future riparazioni."
        },
        {
          question: "Il display sostituito mantiene la qualità originale?",
          answer: "Sì, utilizziamo display di alta qualità certificati che mantengono colori vividi, luminosità ottimale e touch preciso, comparabili agli standard Apple."
        },
        {
          question: "Cosa include la garanzia di 12 mesi?",
          answer: "La garanzia copre difetti di fabbricazione del display e problemi tecnici legati alla sostituzione. Non copre danni accidentali successivi alla riparazione."
        }
      ]}
      />
    </>
  );
};

export default RiparazioneDisplayIPhone;
