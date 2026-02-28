import ServiceTemplate from "@/components/ServiceTemplate";
import { Gamepad2, Clock, Shield, Wrench } from "lucide-react";

const RiparazioneConsole = () => {
  return (
    <ServiceTemplate
      seoTitle="Riparazione Console PS5 e Xbox Assemini | Giolab"
      seoDescription="Riparazione PS5, PS4, Xbox e Nintendo Switch ad Assemini. Sostituzione ventola, lettore ottico, HDMI e joystick. Giolab – diagnosi gratuita e garanzia."
      seoKeywords="riparazione PS5 Assemini, riparazione Xbox Cagliari, riparazione Nintendo Switch, sostituzione ventola PS5, porta HDMI PS5, joystick drift Switch"
      h1Title="Riparazione Console ad Assemini"
      subtitle="Riparazione professionale di PS5, PS4, Xbox Series X/S, Xbox One e Nintendo Switch. Diagnosi gratuita, ricambi certificati e garanzia 12 mesi."
      timeRange="1-3 giorni"
      priceRange="A partire da €49"
      breadcrumbs={[
        { name: "Home", url: "https://giolabriparazioni.it/" },
        { name: "Servizi", url: "https://giolabriparazioni.it/servizi" },
        { name: "Riparazione Console" }
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Riparazione Console Videogiochi",
        "description": "Riparazione PS5, PS4, Xbox e Nintendo Switch ad Assemini: ventola, lettore ottico, porta HDMI e joystick.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://giolabriparazioni.it/#business"
        },
        "areaServed": [
          { "@type": "City", "name": "Assemini" },
          { "@type": "City", "name": "Cagliari" }
        ],
        "serviceType": "Riparazione Console Videogiochi"
      }}
      mainContent={
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            La tua <strong className="text-foreground">console non funziona più correttamente</strong>? Da Giolab ad Assemini ripariamo <strong className="text-foreground">PS5, PS4, Xbox Series X/S, Xbox One e Nintendo Switch</strong>. Dal surriscaldamento al joystick drift, risolviiamo ogni problema.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Servizi di Riparazione Console
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Sostituzione ventola</strong>: console rumorosa o che si surriscalda</li>
            <li><strong className="text-foreground">Lettore ottico</strong>: disco non letto, espulsione anomala, rumori meccanici</li>
            <li><strong className="text-foreground">Porta HDMI</strong>: nessun segnale video, porta danneggiata o piegata</li>
            <li><strong className="text-foreground">Joystick drift</strong>: stick analogico che si muove da solo (Switch, PS5, Xbox)</li>
            <li><strong className="text-foreground">Pulizia e manutenzione</strong>: rimozione polvere, sostituzione pasta termica</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Riparazione PlayStation 5 e PS4
          </h2>
          <p className="leading-relaxed">
            La PS5 si spegne da sola o fa troppo rumore? Probabilmente è il momento di una <strong className="text-foreground">pulizia interna e sostituzione della pasta termica</strong>. Ripariamo anche il lettore Blu-ray, la porta HDMI e i controller DualSense con problemi di drift o trigger adattivi.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Riparazione Xbox Series X/S e Xbox One
          </h2>
          <p className="leading-relaxed">
            Problemi con la tua Xbox? Interveniamo su <strong className="text-foreground">surriscaldamento, lettore ottico, alimentazione e porta HDMI</strong>. Ripariamo anche i controller Elite e standard con problemi di joystick o pulsanti.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Riparazione Nintendo Switch e Joy-Con
          </h2>
          <p className="leading-relaxed">
            Il <strong className="text-foreground">joystick drift</strong> è il problema più comune della Nintendo Switch. Sostituiamo gli stick analogici dei Joy-Con e del Pro Controller, ripariamo la porta USB-C, il lettore di cartucce e i problemi alla batteria.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Dove Trovarci
          </h2>
          <p className="leading-relaxed">
            Vieni a trovarci in <strong className="text-foreground">Via Carmine 20, 09032 Assemini (CA)</strong>, facilmente raggiungibile da Cagliari. <strong className="text-giolab-blue">Contattaci su WhatsApp per prenotare la diagnosi gratuita della tua console!</strong>
          </p>
        </div>
      }
      benefits={[
        {
          icon: <Gamepad2 className="h-12 w-12 text-giolab-blue" />,
          title: "Tutte le Console",
          description: "PS5, PS4, Xbox Series, Xbox One e Nintendo Switch"
        },
        {
          icon: <Clock className="h-12 w-12 text-giolab-blue" />,
          title: "Diagnosi Gratuita",
          description: "Valutiamo il problema e forniamo preventivo dettagliato senza costi"
        },
        {
          icon: <Shield className="h-12 w-12 text-giolab-blue" />,
          title: "Garanzia 12 Mesi",
          description: "Ogni riparazione console è coperta da garanzia completa"
        },
        {
          icon: <Wrench className="h-12 w-12 text-giolab-blue" />,
          title: "Micro-saldature",
          description: "Interventi di precisione su schede madri e porte HDMI"
        }
      ]}
      features={[
        {
          title: "Pulizia Professionale",
          description: "Rimozione polvere e sostituzione pasta termica per temperature ottimali"
        },
        {
          title: "Porta HDMI",
          description: "Sostituzione porta HDMI con micro-saldatura di precisione"
        },
        {
          title: "Lettore Ottico",
          description: "Riparazione o sostituzione del lettore Blu-ray/DVD"
        },
        {
          title: "Joystick Drift",
          description: "Sostituzione stick analogici su Joy-Con, DualSense e controller Xbox"
        },
        {
          title: "Alimentazione",
          description: "Riparazione problemi di alimentazione e connettore di corrente"
        },
        {
          title: "Controller",
          description: "Riparazione controller: pulsanti, trigger, batteria e Bluetooth"
        }
      ]}
      faqs={[
        {
          question: "Quanto costa riparare una PS5?",
          answer: "Il costo dipende dal tipo di intervento. Una pulizia con sostituzione pasta termica parte da €49, mentre la sostituzione della porta HDMI parte da €89. Contattaci per un preventivo gratuito."
        },
        {
          question: "Quanto tempo ci vuole per riparare una console?",
          answer: "La maggior parte delle riparazioni viene completata in 1-3 giorni lavorativi. Per interventi semplici come la pulizia o sostituzione joystick, spesso il tempo è inferiore."
        },
        {
          question: "Riparate il joystick drift della Nintendo Switch?",
          answer: "Sì, è uno degli interventi più frequenti. Sostituiamo lo stick analogico dei Joy-Con con ricambi di qualità. L'intervento è veloce e coperto da garanzia."
        },
        {
          question: "La mia PS5 si surriscalda e si spegne, cosa può essere?",
          answer: "Probabilmente la pasta termica è secca o le ventole sono intasate di polvere. Una pulizia professionale con sostituzione della pasta termica risolve il problema nella maggior parte dei casi."
        },
        {
          question: "Riparate anche i controller?",
          answer: "Sì, ripariamo controller DualSense (PS5), DualShock (PS4), controller Xbox e Joy-Con Nintendo. Interveniamo su joystick, pulsanti, trigger e problemi di connessione."
        }
      ]}
    />
  );
};

export default RiparazioneConsole;
