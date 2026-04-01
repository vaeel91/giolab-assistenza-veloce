import { useState } from "react";
import { useMemo } from "react";
import { 
  CheckCircle2, 
  Shield, 
  Leaf, 
  Wrench, 
  Battery, 
  Smartphone,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Store
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SocialShare from "@/components/SocialShare";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getCanonicalUrl } from "@/config/seoConfig";

const IPhoneRicondizionati = () => {
  const [showIndex, setShowIndex] = useState(true);
  
  const pageUrl = getCanonicalUrl("/iphone-ricondizionati-assemini");
  const pageTitle = "iPhone Ricondizionati - Giolab Assemini";
  const pageDescription = "iPhone ricondizionati certificati ad Assemini. Garanzia reale, batterie nuove. Risparmio fino al 40%. ☎️ 340 69 70 686.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const tableOfContents = [
    { id: "vantaggi", title: "Perché acquistare un ricondizionato" },
    { id: "processo", title: "Come funziona il nostro processo" },
    { id: "gradi", title: "Gradi estetici" },
    { id: "catalogo", title: "Modelli disponibili" },
    { id: "giolab", title: "Perché acquistare da GioLab" },
    { id: "faq", title: "Domande frequenti" },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Risparmio fino al 40%",
      description: "Qualità Apple a prezzi accessibili, senza rinunciare alla garanzia."
    },
    {
      icon: CheckCircle2,
      title: "Qualità certificata",
      description: "Ogni dispositivo passa controlli tecnici rigorosi prima della vendita."
    },
    {
      icon: Battery,
      title: "Batterie nuove o >90%",
      description: "Solo batterie certificate con capacità garantita per durata ottimale."
    },
    {
      icon: Leaf,
      title: "Sostenibilità ambientale",
      description: "Riduci l'impatto ambientale scegliendo dispositivi ricondizionati."
    },
    {
      icon: Wrench,
      title: "Controllo tecnico completo",
      description: "Test su FaceID, fotocamere, sensori, connettività e molto altro."
    },
    {
      icon: Store,
      title: "Assistenza locale",
      description: "Negozio fisico ad Assemini con supporto tecnico post-vendita."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Diagnosi hardware avanzata",
      description: "Controllo completo di tutti i componenti interni ed esterni"
    },
    {
      step: "2",
      title: "Sostituzione componenti difettosi",
      description: "Utilizziamo solo ricambi di qualità certificata"
    },
    {
      step: "3",
      title: "Test funzionalità",
      description: "Verifica di FaceID, TrueTone, NFC, fotocamere, microfoni e tasti"
    },
    {
      step: "4",
      title: "Batteria nuova o certificata",
      description: "Installazione di batteria con capacità minima garantita del 90%"
    },
    {
      step: "5",
      title: "Test di qualità finale",
      description: "Controllo completo prima della certificazione e messa in vendita"
    }
  ];

  const aestheticGrades = [
    {
      grade: "Eccellente (A+)",
      aesthetic: "Come nuovo",
      functionality: "Perfetta",
      ideal: "Professionisti / regali",
      color: "text-green-600 dark:text-green-400"
    },
    {
      grade: "Buono (A)",
      aesthetic: "Piccoli segni d'uso",
      functionality: "Perfetta",
      ideal: "Uso quotidiano",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      grade: "Accettabile (B)",
      aesthetic: "Segni evidenti",
      functionality: "Perfetta",
      ideal: "Ragazzi / telefono secondario",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  // Mock data - facilmente aggiornabile
  const products = [
    {
      model: "iPhone 13 Pro",
      memory: "128GB",
      grade: "Eccellente (A+)",
      battery: "100%",
      price: "599€",
      warranty: "12 mesi",
      available: true
    },
    {
      model: "iPhone 12",
      memory: "64GB",
      grade: "Buono (A)",
      battery: "95%",
      price: "399€",
      warranty: "12 mesi",
      available: true
    },
    {
      model: "iPhone 11",
      memory: "128GB",
      grade: "Accettabile (B)",
      battery: "90%",
      price: "299€",
      warranty: "12 mesi",
      available: true
    },
    {
      model: "iPhone SE 2022",
      memory: "64GB",
      grade: "Eccellente (A+)",
      battery: "100%",
      price: "349€",
      warranty: "12 mesi",
      available: false
    }
  ];

  const whyGiolab = [
    {
      title: "Garanzia reale",
      description: "Non una semplice garanzia commerciale: assistenza completa per 12 mesi su tutti i dispositivi."
    },
    {
      title: "Assistenza in negozio",
      description: "Supporto tecnico diretto presso il nostro laboratorio ad Assemini, senza spedizioni."
    },
    {
      title: "Possibilità di visionare",
      description: "Vieni a provare l'iPhone prima dell'acquisto, verifica tu stesso la qualità."
    },
    {
      title: "Supporto post-vendita",
      description: "Sempre disponibili per configurazione, trasferimento dati e assistenza tecnica."
    },
    {
      title: "Attività fisica locale",
      description: "Negozio reale ad Assemini, punto di riferimento per Cagliari e hinterland."
    },
    {
      title: "Permute valutate",
      description: "Valutiamo il tuo vecchio iPhone per l'acquisto del ricondizionato."
    }
  ];

  const faqs = [
    {
      question: "Cosa significa iPhone ricondizionato?",
      answer: "Un iPhone ricondizionato è un dispositivo usato che è stato completamente testato, riparato se necessario, pulito e certificato per funzionare come nuovo. Tutti i componenti difettosi vengono sostituiti e la batteria viene rinnovata o certificata con capacità superiore al 90%."
    },
    {
      question: "È meglio nuovo o ricondizionato?",
      answer: "Dipende dalle tue esigenze. Un iPhone ricondizionato offre le stesse funzionalità di uno nuovo a un prezzo significativamente inferiore (fino al 40% di risparmio). Se cerchi qualità Apple con garanzia ma vuoi risparmiare, il ricondizionato è la scelta ideale."
    },
    {
      question: "Che differenza c'è tra ricondizionato e usato?",
      answer: "Un iPhone usato viene venduto nelle condizioni in cui si trova. Un ricondizionato passa attraverso un processo di controllo, riparazione, test e certificazione professionale. Include garanzia, batteria certificata e assistenza post-vendita."
    },
    {
      question: "Quanto dura un iPhone ricondizionato?",
      answer: "Un iPhone ricondizionato certificato può durare esattamente come uno nuovo, spesso 3-5 anni o più, grazie ai controlli tecnici e alla sostituzione dei componenti usurati. La batteria certificata garantisce autonomia ottimale."
    },
    {
      question: "La batteria è nuova?",
      answer: "Dipende dal modello. Alcuni iPhone hanno batteria completamente nuova, altri hanno batteria originale certificata con capacità minima garantita del 90%. In ogni caso, la capacità della batteria è sempre indicata nella scheda prodotto."
    },
    {
      question: "Avete ricondizionati con FaceID funzionante?",
      answer: "Assolutamente sì. Tutti i nostri iPhone ricondizionati hanno FaceID perfettamente funzionante, insieme a TrueTone, NFC e tutte le altre funzionalità originali. Eseguiamo test specifici su ogni dispositivo."
    },
    {
      question: "Qual è la garanzia?",
      answer: "Offriamo 12 mesi di garanzia reale su tutti gli iPhone ricondizionati. La garanzia copre difetti di fabbricazione e malfunzionamenti hardware. Assistenza diretta presso il nostro laboratorio ad Assemini."
    },
    {
      question: "Dove acquistare un iPhone ricondizionato ad Assemini e Cagliari?",
      answer: "GioLab Riparazioni ad Assemini è il punto di riferimento per iPhone ricondizionati certificati nell'area di Cagliari. Via Carmine 20, 09032 Assemini (CA). Vieni a trovarci per visionare i modelli disponibili."
    },
    {
      question: "Posso vedere il telefono prima dell'acquisto?",
      answer: "Certamente! Anzi, lo consigliamo. Vieni nel nostro negozio ad Assemini per toccare con mano l'iPhone, verificare le condizioni estetiche e testare tutte le funzionalità prima di decidere."
    },
    {
      question: "Accettate permute?",
      answer: "Sì, valutiamo il tuo vecchio iPhone per permuta. Porta il tuo dispositivo in negozio e ti faremo una valutazione immediata per ridurre il costo del ricondizionato."
    }
  ];

  // Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "GioLab Riparazioni - iPhone Ricondizionati",
    "description": "Vendita iPhone ricondizionati certificati ad Assemini e Cagliari",
    "address": {
    "@type": "PostalAddress",
      "streetAddress": "Via Carmine 20",
      "addressLocality": "Assemini",
      "addressRegion": "CA",
      "postalCode": "09032",
      "addressCountry": "IT"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "iPhone Ricondizionati",
      "itemListElement": products.filter(p => p.available).map((product, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.model,
          "description": `${product.model} ricondizionato ${product.grade}, memoria ${product.memory}, batteria ${product.battery}`,
          "brand": {
            "@type": "Brand",
            "name": "Apple"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Marco Piras"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "iPhone ricondizionato perfetto, come nuovo. Batteria al 100%, nessun graffio. Ottimo rapporto qualità-prezzo!",
              "datePublished": "2025-01-20"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Giulia Melis"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Acquistato iPhone 13 grado A+, condizioni eccellenti. Garanzia 12 mesi e assistenza impeccabile.",
              "datePublished": "2025-01-18"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Andrea Murgia"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Finalmente ho trovato iPhone ricondizionati certificati ad Assemini. Qualità top e prezzo onesto.",
              "datePublished": "2025-01-15"
            }
          ]
        },
        "price": product.price.replace('€', ''),
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "warranty": product.warranty
      }))
    }
  };

  return (
    <>

      <FloatingWhatsApp />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 text-sm md:text-base">
                <Smartphone className="w-4 h-4 mr-2" />
                Qualità Certificata
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                iPhone Ricondizionati Garantiti ad Assemini
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Qualità certificata, prezzi trasparenti e garanzia reale. Risparmia fino al 40% senza rinunciare all'eccellenza Apple.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" onClick={() => scrollToSection("catalogo")} className="text-base">
                  Scopri i modelli disponibili
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/393406970686?text=Ciao! Vorrei informazioni sugli iPhone ricondizionati disponibili.", "_blank")}
                  className="text-base"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Richiedi disponibilità
                </Button>
              </div>

              <SocialShare 
                url={pageUrl}
                title={pageTitle}
                description={pageDescription}
              />
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-card border-y sticky top-16 z-30">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setShowIndex(!showIndex)}
              className="w-full py-4 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
            >
              <span className="font-semibold text-foreground">Indice dei contenuti</span>
              {showIndex ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {showIndex && (
              <nav className="pb-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-sm text-primary hover:underline text-left w-full py-1"
                      >
                        → {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </section>

        {/* Vantaggi */}
        <section id="vantaggi" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Perché acquistare un iPhone ricondizionato
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Scopri i vantaggi di scegliere un dispositivo ricondizionato certificato
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <advantage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Come funziona il nostro processo di ricondizionamento
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ogni iPhone passa attraverso controlli rigorosi e certificazioni professionali
                </p>
              </div>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gradi Estetici */}
        <section id="gradi" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Gradi estetici spiegati
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Scegli il grado più adatto alle tue esigenze e al tuo budget
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-4 text-left font-semibold text-foreground border-b">Grado</th>
                      <th className="px-4 py-4 text-left font-semibold text-foreground border-b">Stato estetico</th>
                      <th className="px-4 py-4 text-left font-semibold text-foreground border-b">Funzionalità</th>
                      <th className="px-4 py-4 text-left font-semibold text-foreground border-b">Ideale per</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aestheticGrades.map((grade, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                        <td className={`px-4 py-4 font-semibold ${grade.color}`}>{grade.grade}</td>
                        <td className="px-4 py-4 text-foreground">{grade.aesthetic}</td>
                        <td className="px-4 py-4 text-foreground">{grade.functionality}</td>
                        <td className="px-4 py-4 text-muted-foreground">{grade.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Catalogo */}
        <section id="catalogo" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Modelli disponibili
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Scopri la selezione di iPhone ricondizionati certificati attualmente in negozio
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className={`relative ${!product.available ? 'opacity-60' : ''}`}>
                    {!product.available && (
                      <Badge className="absolute top-4 right-4 bg-destructive">
                        Non disponibile
                      </Badge>
                    )}
                    
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-center text-2xl">{product.model}</CardTitle>
                      <CardDescription className="text-center text-lg font-semibold text-primary">
                        {product.price}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Memoria:</span>
                        <span className="font-semibold">{product.memory}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Grado:</span>
                        <span className="font-semibold">{product.grade}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Batteria:</span>
                        <span className="font-semibold">{product.battery}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Garanzia:</span>
                        <span className="font-semibold">{product.warranty}</span>
                      </div>

                      {product.available ? (
                        <div className="space-y-2 pt-4">
                          <Button className="w-full" asChild>
                            <a href="/contatti">
                              <Store className="w-4 h-4 mr-2" />
                              Prenota ora
                            </a>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open(`https://wa.me/393406970686?text=Ciao! Sono interessato all'${product.model} ${product.memory} ${product.grade}`, "_blank")}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contatta su WhatsApp
                          </Button>
                        </div>
                      ) : (
                        <Button disabled className="w-full mt-4">
                          Al momento non disponibile
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  La disponibilità viene aggiornata quotidianamente. Contattaci per modelli specifici.
                </p>
                <Button variant="outline" asChild>
                  <a href="/contatti">
                    <Phone className="w-4 h-4 mr-2" />
                    Contattaci per altre disponibilità
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Perché GioLab */}
        <section id="giolab" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Perché acquistare da GioLab
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cosa ci distingue dai marketplace online e dai grandi store
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyGiolab.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Domande frequenti
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tutto quello che devi sapere sugli iPhone ricondizionati
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Finale */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Pronto a risparmiare senza rinunciare alla qualità?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vieni a scoprire i nostri iPhone ricondizionati certificati. Assistenza diretta, garanzia reale e la possibilità di vedere il dispositivo prima dell'acquisto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <a href="/contatti">
                    <Store className="w-5 h-5 mr-2" />
                    Ritira in negozio ad Assemini
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/393406970686?text=Ciao! Vorrei informazioni sugli iPhone ricondizionati disponibili.", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Scrivici su WhatsApp
                </Button>
              </div>

              <SocialShare 
                url={pageUrl}
                title={pageTitle}
                description={pageDescription}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPhoneRicondizionati;