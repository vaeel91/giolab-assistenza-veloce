import ServiceTemplate from "@/components/ServiceTemplate";
import { Smartphone, Clock, Shield, Wrench } from "lucide-react";

const RiparazioneSamsung = () => {
  return (
    <ServiceTemplate
      seoTitle="Riparazione Samsung Assemini | Giolab – Schermo e Batteria"
      seoDescription="Riparazione Samsung Galaxy ad Assemini: schermo, batteria, fotocamera e connettore. Intervento in giornata, garanzia 12 mesi. Giolab – preventivo gratuito."
      seoKeywords="riparazione Samsung Assemini, sostituzione schermo Samsung Cagliari, batteria Samsung Galaxy, riparazione fotocamera Samsung, connettore ricarica Samsung"
      h1Title="Riparazione Samsung ad Assemini"
      subtitle="Riparazione professionale Samsung Galaxy: display, batteria, fotocamera, connettore di ricarica e back cover. Intervento rapido in giornata con garanzia 12 mesi."
      timeRange="1-2 ore"
      priceRange="A partire da €59"
      breadcrumbs={[
        { name: "Home", url: "https://giolabriparazioni.it/" },
        { name: "Servizi", url: "https://giolabriparazioni.it/servizi" },
        { name: "Riparazione Samsung" }
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Riparazione Samsung Galaxy",
        "description": "Riparazione professionale Samsung Galaxy ad Assemini: schermo, batteria, fotocamera e connettore di ricarica.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://giolabriparazioni.it/#business"
        },
        "areaServed": [
          { "@type": "City", "name": "Assemini" },
          { "@type": "City", "name": "Cagliari" }
        ],
        "serviceType": "Riparazione Samsung"
      }}
      mainContent={
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Il tuo <strong className="text-foreground">Samsung Galaxy ha lo schermo rotto</strong> o la batteria non dura più? Da Giolab ad Assemini ripariamo tutti i modelli della serie Galaxy: <strong className="text-foreground">Galaxy S, Galaxy A, Galaxy Note e Galaxy Z</strong>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Servizi di Riparazione Samsung Galaxy
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Sostituzione display Samsung</strong>: schermo AMOLED rotto, touch non funzionante, display con righe</li>
            <li><strong className="text-foreground">Sostituzione batteria</strong>: batteria scarica velocemente, rigonfiamenti, spegnimenti improvvisi</li>
            <li><strong className="text-foreground">Riparazione fotocamera</strong>: fotocamera principale o frontale non funzionante, macchie sull'obiettivo</li>
            <li><strong className="text-foreground">Connettore di ricarica</strong>: porta USB-C danneggiata, ricarica intermittente</li>
            <li><strong className="text-foreground">Sostituzione back cover</strong>: vetro posteriore rotto o graffiato</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Modelli Samsung Supportati
          </h2>
          <p className="leading-relaxed">
            Ripariamo tutti i modelli Samsung Galaxy più diffusi:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Galaxy S24, S23, S22, S21, S20</strong> (Ultra, Plus, FE)</li>
            <li><strong className="text-foreground">Galaxy A54, A34, A14, A15, A25</strong> e tutta la serie A</li>
            <li><strong className="text-foreground">Galaxy Z Flip, Z Fold</strong> (display pieghevoli)</li>
            <li><strong className="text-foreground">Galaxy Note 20, Note 10</strong></li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Quanto Costa Riparare un Samsung Galaxy?
          </h2>
          <p className="leading-relaxed">
            I prezzi variano in base al modello e al tipo di intervento. Ecco alcuni prezzi indicativi:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Display Galaxy A</strong>: da €59</li>
            <li><strong className="text-foreground">Display Galaxy S</strong>: da €129</li>
            <li><strong className="text-foreground">Batteria Samsung</strong>: da €49</li>
            <li><strong className="text-foreground">Connettore di ricarica</strong>: da €39</li>
          </ul>
          <p className="leading-relaxed mt-4">
            <strong className="text-giolab-blue">Contattaci per un preventivo gratuito personalizzato!</strong>
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Perché Scegliere Giolab per la Riparazione Samsung
          </h2>
          <p className="leading-relaxed">
            Con oltre 10 anni di esperienza, il nostro team conosce a fondo la tecnologia Samsung. Utilizziamo <strong className="text-foreground">ricambi di qualità certificata</strong> e offriamo <strong className="text-foreground">garanzia di 12 mesi</strong> su ogni intervento. Vieni a trovarci in <strong className="text-foreground">Via Carmine 20, Assemini</strong>.
          </p>
        </div>
      }
      benefits={[
        {
          icon: <Smartphone className="h-12 w-12 text-giolab-blue" />,
          title: "Tutti i Galaxy",
          description: "Ripariamo Galaxy S, A, Note e Z di ogni generazione"
        },
        {
          icon: <Clock className="h-12 w-12 text-giolab-blue" />,
          title: "Intervento in Giornata",
          description: "La maggior parte delle riparazioni Samsung completata in 1-2 ore"
        },
        {
          icon: <Shield className="h-12 w-12 text-giolab-blue" />,
          title: "Garanzia 12 Mesi",
          description: "Ogni riparazione Samsung è coperta da garanzia completa"
        },
        {
          icon: <Wrench className="h-12 w-12 text-giolab-blue" />,
          title: "Ricambi Certificati",
          description: "Display AMOLED e componenti di qualità originale"
        }
      ]}
      features={[
        {
          title: "Display AMOLED",
          description: "Sostituzione con schermi AMOLED di qualità certificata"
        },
        {
          title: "Diagnosi Gratuita",
          description: "Valutiamo il problema e forniamo preventivo senza impegno"
        },
        {
          title: "Trasferimento Dati",
          description: "Ti aiutiamo a salvare e trasferire i tuoi dati in sicurezza"
        },
        {
          title: "Back Cover Originale",
          description: "Sostituzione vetro posteriore con qualità originale"
        },
        {
          title: "Test Impermeabilità",
          description: "Verifica della tenuta stagna dopo l'intervento (modelli IP68)"
        },
        {
          title: "Preventivo Trasparente",
          description: "Prezzi chiari e nessuna sorpresa a fine intervento"
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo ci vuole per riparare lo schermo di un Samsung?",
          answer: "La sostituzione del display Samsung richiede generalmente 1-2 ore. Per i modelli pieghevoli (Z Flip, Z Fold) potrebbe servire un po' più di tempo."
        },
        {
          question: "Usate display AMOLED originali?",
          answer: "Utilizziamo display AMOLED di qualità certificata, comparabili agli originali per colori, luminosità e reattività del touch. Sono disponibili anche display originali Samsung su richiesta."
        },
        {
          question: "La riparazione mantiene la certificazione IP68?",
          answer: "Facciamo il possibile per ripristinare la tenuta stagna, ma dopo l'apertura del dispositivo non possiamo garantire al 100% la certificazione IP68 originale."
        },
        {
          question: "Riparate anche i Samsung Galaxy pieghevoli?",
          answer: "Sì, ripariamo anche i Galaxy Z Flip e Z Fold. Sono dispositivi che richiedono competenze specifiche e ricambi dedicati. Contattaci per un preventivo."
        },
        {
          question: "Posso aspettare durante la riparazione?",
          answer: "Certamente! Puoi attendere nel nostro centro ad Assemini oppure tornare a ritirare il tuo Samsung una volta completata la riparazione."
        }
      ]}
    />
  );
};

export default RiparazioneSamsung;
