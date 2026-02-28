import ServiceTemplate from "@/components/ServiceTemplate";
import { HardDrive, Clock, Shield, Search } from "lucide-react";

const RecuperoDatiSmartphone = () => {
  return (
    <ServiceTemplate
      seoTitle="Recupero Dati Smartphone Assemini | Giolab – iPhone e Android"
      seoDescription="Recupero dati da iPhone e Android ad Assemini: foto, contatti, messaggi da dispositivi rotti o con schermo danneggiato. Giolab – preventivo gratuito."
      seoKeywords="recupero dati smartphone Assemini, recupero foto iPhone rotto, recupero dati Android Cagliari, recupero messaggi WhatsApp, dati schermo rotto"
      h1Title="Recupero Dati Smartphone ad Assemini"
      subtitle="Recuperiamo foto, contatti, messaggi e documenti da iPhone e smartphone Android rotti, bloccati o con danni da liquidi. Preventivo gratuito e massima riservatezza."
      timeRange="1-5 giorni"
      priceRange="A partire da €79"
      breadcrumbs={[
        { name: "Home", url: "https://giolabriparazioni.it/" },
        { name: "Servizi", url: "https://giolabriparazioni.it/servizi" },
        { name: "Recupero Dati Smartphone" }
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Recupero Dati Smartphone",
        "description": "Recupero dati da iPhone e Android: foto, contatti e messaggi da dispositivi rotti o con schermo danneggiato ad Assemini.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://giolabriparazioni.it/#business"
        },
        "areaServed": [
          { "@type": "City", "name": "Assemini" },
          { "@type": "City", "name": "Cagliari" }
        ],
        "serviceType": "Recupero Dati Smartphone"
      }}
      mainContent={
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Hai perso le <strong className="text-foreground">foto, i contatti o i messaggi</strong> dal tuo smartphone? Da Giolab ad Assemini siamo specializzati nel <strong className="text-foreground">recupero dati da iPhone e Android</strong>, anche da dispositivi con schermo rotto, bloccati o danneggiati dall'acqua.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Quando Serve il Recupero Dati?
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Schermo rotto</strong>: display completamente nero o non touch – recuperiamo i dati senza riparare lo schermo</li>
            <li><strong className="text-foreground">Dispositivo bloccato</strong>: smartphone che non si accende o resta in boot loop</li>
            <li><strong className="text-foreground">Danni da liquidi</strong>: telefono caduto in acqua, bevande o altri liquidi</li>
            <li><strong className="text-foreground">Backup pre-riparazione</strong>: salvataggio completo dei dati prima di ogni intervento</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Cosa Possiamo Recuperare
          </h2>
          <p className="leading-relaxed">
            Il nostro team è in grado di recuperare una vasta gamma di dati:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Foto e video (galleria, iCloud, Google Foto)</li>
            <li>Contatti e rubrica telefonica</li>
            <li>Messaggi WhatsApp, Telegram e SMS</li>
            <li>Documenti, note e file</li>
            <li>Cronologia chiamate e dati delle app</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Come Funziona il Servizio
          </h2>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Diagnosi gratuita</strong>: valutiamo lo stato del dispositivo e la fattibilità del recupero</li>
            <li><strong className="text-foreground">Preventivo</strong>: ti comunichiamo il costo e le probabilità di successo</li>
            <li><strong className="text-foreground">Recupero</strong>: utilizziamo strumenti professionali per estrarre i dati</li>
            <li><strong className="text-foreground">Consegna</strong>: i dati recuperati vengono trasferiti su un supporto a tua scelta</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Massima Riservatezza Garantita
          </h2>
          <p className="leading-relaxed">
            I tuoi dati sono trattati con la <strong className="text-foreground">massima riservatezza</strong>. Non conserviamo copie dei tuoi file e rispettiamo rigorosamente la privacy. Al termine del recupero, i dati presenti nei nostri strumenti vengono completamente eliminati.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
            Dove Trovarci
          </h2>
          <p className="leading-relaxed">
            Vieni a trovarci in <strong className="text-foreground">Via Carmine 20, 09032 Assemini (CA)</strong>. <strong className="text-giolab-blue">Contattaci su WhatsApp per una consulenza gratuita sul recupero dei tuoi dati!</strong>
          </p>
        </div>
      }
      benefits={[
        {
          icon: <HardDrive className="h-12 w-12 text-giolab-blue" />,
          title: "iPhone e Android",
          description: "Recuperiamo dati da qualsiasi smartphone, iOS o Android"
        },
        {
          icon: <Search className="h-12 w-12 text-giolab-blue" />,
          title: "Diagnosi Gratuita",
          description: "Valutiamo la fattibilità del recupero senza alcun costo"
        },
        {
          icon: <Shield className="h-12 w-12 text-giolab-blue" />,
          title: "Privacy Garantita",
          description: "Massima riservatezza sui tuoi dati personali e file"
        },
        {
          icon: <Clock className="h-12 w-12 text-giolab-blue" />,
          title: "Esperienza Decennale",
          description: "Oltre 10 anni di esperienza nel recupero dati professionale"
        }
      ]}
      features={[
        {
          title: "Schermo Rotto",
          description: "Recuperiamo i dati anche se il display è completamente distrutto"
        },
        {
          title: "Danni da Liquidi",
          description: "Intervento su dispositivi caduti in acqua o a contatto con liquidi"
        },
        {
          title: "Backup Completo",
          description: "Salvataggio di foto, video, contatti, messaggi e documenti"
        },
        {
          title: "Trasferimento Dati",
          description: "Migrazione completa dal vecchio al nuovo smartphone"
        },
        {
          title: "WhatsApp e Chat",
          description: "Recupero conversazioni WhatsApp, Telegram e altre app di messaggistica"
        },
        {
          title: "Supporto a Scelta",
          description: "Consegna dati su chiavetta USB, hard disk o cloud a tua preferenza"
        }
      ]}
      faqs={[
        {
          question: "È possibile recuperare i dati da un iPhone con schermo rotto?",
          answer: "Sì, nella maggior parte dei casi possiamo recuperare i dati anche da un iPhone con display completamente rotto o non funzionante, utilizzando strumenti professionali dedicati."
        },
        {
          question: "Quanto tempo ci vuole per il recupero dati?",
          answer: "I tempi variano da 1 a 5 giorni lavorativi, a seconda della complessità del caso. Per situazioni urgenti, offriamo un servizio prioritario."
        },
        {
          question: "I miei dati sono al sicuro durante il recupero?",
          answer: "Assolutamente sì. Trattiamo i tuoi dati con la massima riservatezza e li cancelliamo dai nostri strumenti al termine del servizio."
        },
        {
          question: "Cosa succede se il recupero non è possibile?",
          answer: "Se non riusciamo a recuperare i dati, non paghi nulla. La diagnosi è gratuita e ti comunichiamo in anticipo le probabilità di successo."
        },
        {
          question: "Recuperate anche i dati da smartphone Android?",
          answer: "Sì, recuperiamo dati da smartphone Android di tutti i marchi: Samsung, Xiaomi, OPPO, Huawei, Motorola e altri."
        }
      ]}
    />
  );
};

export default RecuperoDatiSmartphone;
