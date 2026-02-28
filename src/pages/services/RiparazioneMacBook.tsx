import ServiceTemplate from "@/components/ServiceTemplate";
import { Monitor, Clock, Shield, Wrench } from "lucide-react";

const RiparazioneMacBook = () => {
  return (
    <ServiceTemplate
      seoTitle="Riparazione MacBook Assemini | Giolab – Diagnosi Gratuita"
      seoDescription="Riparazione MacBook ad Assemini: schermo, tastiera, batteria e scheda madre. Diagnosi gratuita, ricambi originali, garanzia 12 mesi. Giolab – anche a Cagliari."
      seoKeywords="riparazione MacBook Assemini, riparazione schermo MacBook Cagliari, sostituzione tastiera MacBook, upgrade SSD MacBook Assemini, batteria MacBook, scheda madre MacBook"
      h1Title="Riparazione MacBook ad Assemini"
      subtitle="Riparazione professionale di MacBook Air e MacBook Pro: display, tastiera, batteria, scheda madre e upgrade RAM/SSD. Diagnosi gratuita e garanzia 12 mesi."
      timeRange="1-3 giorni"
      priceRange="A partire da €89"
      breadcrumbs={[
        { name: "Home", url: "https://giolabriparazioni.it/" },
        { name: "Servizi", url: "https://giolabriparazioni.it/servizi" },
        { name: "Riparazione MacBook" }
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Riparazione MacBook",
        "description": "Riparazione professionale MacBook Air e Pro ad Assemini: display, tastiera, batteria, scheda madre e upgrade SSD/RAM.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://giolabriparazioni.it/#business"
        },
        "areaServed": [
          { "@type": "City", "name": "Assemini" },
          { "@type": "City", "name": "Cagliari" }
        ],
        "serviceType": "Riparazione MacBook"
      }}
      mainContent={
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Il tuo <strong className="text-foreground">MacBook ha problemi</strong>? Da Giolab ad Assemini ripariamo tutti i modelli di MacBook Air e MacBook Pro: dallo <strong className="text-foreground">schermo rotto</strong> alla <strong className="text-foreground">tastiera malfunzionante</strong>, dalla batteria esausta fino ai guasti sulla scheda madre.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Servizi di Riparazione MacBook
          </h2>
          <p className="leading-relaxed">
            Il nostro laboratorio è attrezzato per gestire ogni tipo di intervento su MacBook:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Sostituzione display MacBook</strong>: schermo rotto, pixel morti, retroilluminazione difettosa</li>
            <li><strong className="text-foreground">Sostituzione tastiera</strong>: tasti bloccati, butterfly keyboard, tastiera con liquidi</li>
            <li><strong className="text-foreground">Upgrade RAM e SSD</strong>: aumento memoria e velocità con SSD NVMe</li>
            <li><strong className="text-foreground">Riparazione scheda madre</strong>: micro-saldature, chip danneggiati, problemi di alimentazione</li>
            <li><strong className="text-foreground">Sostituzione batteria MacBook</strong>: batteria gonfia, autonomia ridotta, cicli esauriti</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Perché Scegliere Giolab per il Tuo MacBook?
          </h2>
          <p className="leading-relaxed">
            Con oltre 10 anni di esperienza, Giolab è il punto di riferimento ad Assemini e Cagliari per la riparazione MacBook. Utilizziamo <strong className="text-foreground">ricambi originali e compatibili certificati</strong>, strumentazione professionale per micro-saldature e diagnostica avanzata.
          </p>
          <p className="leading-relaxed">
            Ogni intervento include una <strong className="text-foreground">diagnosi gratuita</strong> con preventivo dettagliato. Non procediamo mai senza la tua approvazione.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Upgrade SSD e RAM: Velocizza il Tuo MacBook
          </h2>
          <p className="leading-relaxed">
            Il tuo MacBook è lento? Un <strong className="text-foreground">upgrade SSD</strong> può trasformarlo completamente. Sostituiamo il disco meccanico con un SSD ad alta velocità, aumentando drasticamente le prestazioni di avvio e caricamento applicazioni.
          </p>
          <p className="leading-relaxed">
            Per i modelli compatibili, offriamo anche l'<strong className="text-foreground">upgrade della RAM</strong> per migliorare il multitasking e la fluidità generale del sistema.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Dove Trovarci
          </h2>
          <p className="leading-relaxed">
            Il nostro centro si trova in <strong className="text-foreground">Via Carmine 20, 09032 Assemini (CA)</strong>, facilmente raggiungibile da Cagliari e dalla provincia. <strong className="text-giolab-blue">Contattaci su WhatsApp per prenotare la diagnosi gratuita del tuo MacBook!</strong>
          </p>
        </div>
      }
      benefits={[
        {
          icon: <Monitor className="h-12 w-12 text-giolab-blue" />,
          title: "Tutti i Modelli",
          description: "Ripariamo MacBook Air, MacBook Pro di ogni generazione e anno"
        },
        {
          icon: <Clock className="h-12 w-12 text-giolab-blue" />,
          title: "Diagnosi Gratuita",
          description: "Valutiamo il problema e forniamo un preventivo dettagliato senza impegno"
        },
        {
          icon: <Shield className="h-12 w-12 text-giolab-blue" />,
          title: "Garanzia 12 Mesi",
          description: "Ogni riparazione è coperta da garanzia completa di 12 mesi"
        },
        {
          icon: <Wrench className="h-12 w-12 text-giolab-blue" />,
          title: "Ricambi Certificati",
          description: "Utilizziamo solo ricambi originali o compatibili di alta qualità"
        }
      ]}
      features={[
        {
          title: "Display Retina",
          description: "Sostituzione schermi Retina con pannelli di qualità originale"
        },
        {
          title: "Micro-saldature",
          description: "Riparazioni a livello di scheda madre con strumentazione professionale"
        },
        {
          title: "Upgrade SSD NVMe",
          description: "Velocizza il tuo MacBook con SSD di ultima generazione"
        },
        {
          title: "Pulizia Interna",
          description: "Rimozione polvere e sostituzione pasta termica per temperature ottimali"
        },
        {
          title: "Backup Dati",
          description: "Salvataggio completo dei tuoi dati prima di qualsiasi intervento"
        },
        {
          title: "Test Completo",
          description: "Verifica approfondita di tutte le funzionalità post-riparazione"
        }
      ]}
      faqs={[
        {
          question: "Quanto costa riparare lo schermo di un MacBook?",
          answer: "Il costo varia in base al modello e al tipo di danno. Contattaci per un preventivo gratuito personalizzato. In generale, i prezzi partono da €189 per i modelli più comuni."
        },
        {
          question: "Quanto tempo ci vuole per riparare un MacBook?",
          answer: "La maggior parte delle riparazioni viene completata in 1-3 giorni lavorativi. Per interventi più complessi come riparazioni sulla scheda madre, potrebbe servire qualche giorno in più."
        },
        {
          question: "Posso fare l'upgrade SSD sul mio MacBook?",
          answer: "Dipende dal modello. I MacBook più recenti hanno SSD saldati, ma molti modelli precedenti permettono l'upgrade. Ti consigliamo durante la diagnosi gratuita."
        },
        {
          question: "La batteria del mio MacBook è gonfia, è pericoloso?",
          answer: "Sì, una batteria gonfia può essere pericolosa. Ti consigliamo di portare il MacBook il prima possibile per una sostituzione sicura. Non continuare ad usarlo."
        },
        {
          question: "Perderò i miei dati durante la riparazione?",
          answer: "Per la maggior parte degli interventi no. In ogni caso, effettuiamo sempre un backup preventivo dei tuoi dati quando possibile, prima di procedere con la riparazione."
        }
      ]}
    />
  );
};

export default RiparazioneMacBook;
