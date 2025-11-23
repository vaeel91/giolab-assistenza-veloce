import ServiceTemplate from "@/components/ServiceTemplate";
import { Clock, Shield, Award, Wrench } from "lucide-react";

const RiparazioneDisplayIPhone = () => {
  return (
    <>
      <ServiceTemplate
      seoTitle="Riparazione Display iPhone Assemini | Sostituzione Vetro e Schermo in 1 Ora | Giolab"
      seoDescription="Riparazione display iPhone ad Assemini e Cagliari. Sostituzione vetro e schermo rotto in 1 ora. Ricambi certificati, garanzia 12 mesi. Preventivo gratuito ☎️ 340 69 70 686"
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
