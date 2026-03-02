import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "I miei dati sono al sicuro durante la riparazione?",
      answer: "Assolutamente sì. Trattiamo ogni dispositivo nel rispetto totale della privacy: non accediamo ai dati personali e, dove necessario, lavoriamo solo su componenti hardware. Consigliamo comunque sempre un backup prima della consegna, per maggiore sicurezza."
    },
    {
      question: "Posso perdere i miei dati durante la riparazione?",
      answer: "Solo in casi eccezionali, ad esempio quando è necessario reinstallare il sistema operativo o sostituire l'unità di memoria. In questi casi informiamo sempre il cliente prima di procedere. Quando possibile, effettuiamo il salvataggio dei dati."
    },
    {
      question: "Quali tipi di ricambi utilizzate?",
      answer: "Usiamo esclusivamente ricambi nuovi e di qualità certificata, selezionati in base al tipo di dispositivo. Su richiesta possiamo montare anche ricambi originali, se disponibili."
    },
    {
      question: "Quanto tempo richiede una riparazione?",
      answer: "Dipende dal tipo di intervento:\n\n• Riparazioni rapide (display, batteria, porta di ricarica) → da 30 minuti a circa 1 ora.\n\n• Riparazioni più complesse (scheda madre, data recovery, diagnostica avanzata) → da 1 a 5 giorni lavorativi.\n\nComunichiamo sempre una stima chiara e aggiorniamo il cliente in caso di variazioni."
    },
    {
      question: "Quanto costa la riparazione?",
      answer: "Prima di qualsiasi intervento effettuiamo una diagnosi gratuita o a costo simbolico (in base al tipo di guasto) e forniamo un preventivo chiaro e trasparente. Nessuna sorpresa finale: il lavoro parte solo dopo la tua approvazione."
    },
    {
      question: "Se il problema si ripresenta dopo la riparazione?",
      answer: "Tutte le nostre riparazioni sono coperte da 12 mesi di garanzia, che include eventuali malfunzionamenti legati al pezzo o al lavoro eseguito. In caso di problemi, ci occupiamo subito della verifica e della sostituzione senza costi aggiuntivi."
    },
    {
      question: "Come gestite la privacy dei miei dati personali?",
      answer: "La privacy dei clienti è una priorità: nessun tecnico accede ai contenuti del dispositivo (foto, chat, file). Lavoriamo solo sull'hardware o sul sistema tecnico necessario alla riparazione, nel rispetto del Regolamento GDPR."
    },
    {
      question: "Come posso sapere a che punto è la mia riparazione?",
      answer: "Ti aggiorniamo tramite WhatsApp, telefono o e-mail in ogni fase: diagnosi, preventivo e riconsegna. Puoi contattarci in qualsiasi momento per chiedere informazioni sullo stato del tuo dispositivo."
    },
    {
      question: "Cosa succede se non ritiro il dispositivo?",
      answer: "In caso di mancato ritiro entro 90 giorni dalla comunicazione di completamento della riparazione, il dispositivo verrà considerato abbandonato come previsto dalla legge (art. 2756 c.c.). Lo specifichiamo nel modulo di accettazione per trasparenza."
    },
    {
      question: "Posso avere un telefono di cortesia mentre il mio è in riparazione?",
      answer: "Sì, offriamo un servizio di telefono di cortesia (in base alla disponibilità) per non lasciarti mai senza contatto durante la riparazione."
    },
    {
      question: "Cosa succede se non accetto il preventivo?",
      answer: "Se decidi di non procedere con la riparazione, il dispositivo ti verrà riconsegnato in sicurezza. In alcuni casi può essere previsto un piccolo contributo per la diagnosi tecnica, che copre il tempo impiegato dal tecnico."
    },
    {
      question: "E se il dispositivo si danneggia durante la riparazione?",
      answer: "Lavoriamo con la massima cura e strumenti professionali, ma in caso di eventuale danno imputabile al laboratorio, ci assumiamo la piena responsabilità e troviamo una soluzione immediata e trasparente per il cliente."
    },
    {
      question: "Quanto è rischioso sostituire lo schermo da un tecnico non qualificato o con parti economiche?",
      answer: "Alta probabilità di problemi: componenti di bassa qualità possono avere colori scadenti, touch irregolare, o incompatibilità con sensori. Tecnica inadeguata può danneggiare il modulo TrueDepth o la scheda madre.\n\nConsiglio: affidati a tecnici esperti e richiedi ricambi certificati; evita soluzioni \"fai da te\" per preservare tutte le funzionalità."
    }
  ];

  // Add FAQPage structured data for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/\n/g, ' ')
        }
      }))
    };

    let script = document.querySelector('script[type="application/ld+json"]#faq-service-schema');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('id', 'faq-service-schema');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]#faq-service-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-4 md:py-6 pt-20 md:pt-24 bg-background h-full flex flex-col justify-center overflow-y-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold mb-2 sr-only">Domande Frequenti</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-1">
            {faqs.slice(0, 6).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left text-xs md:text-sm py-2 md:py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
