import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Sparkles, PiggyBank, Microscope, Clock, Phone, MessageCircle, Check, X, Star, Award, MapPin, Truck, ChevronRight, BookOpen, Calculator, Calendar } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/config/businessInfo";

const devicePricing = [
  { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", restauro: 179, servicePack: 449 },
  { id: "iphone-15-pro", name: "iPhone 15 Pro", restauro: 169, servicePack: 399 },
  { id: "iphone-15", name: "iPhone 15 / 15 Plus", restauro: 149, servicePack: 349 },
  { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", restauro: 169, servicePack: 429 },
  { id: "iphone-14-pro", name: "iPhone 14 Pro", restauro: 159, servicePack: 379 },
  { id: "iphone-14", name: "iPhone 14 / 14 Plus", restauro: 139, servicePack: 329 },
  { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", restauro: 149, servicePack: 379 },
  { id: "iphone-13-pro", name: "iPhone 13 Pro", restauro: 139, servicePack: 329 },
  { id: "iphone-13", name: "iPhone 13 / 13 Mini", restauro: 129, servicePack: 299 },
  { id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", restauro: 139, servicePack: 349 },
  { id: "iphone-12-pro", name: "iPhone 12 Pro", restauro: 129, servicePack: 299 },
  { id: "iphone-12", name: "iPhone 12 / 12 Mini", restauro: 119, servicePack: 279 },
  { id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", restauro: 129, servicePack: 329 },
  { id: "iphone-11-pro", name: "iPhone 11 Pro", restauro: 119, servicePack: 299 },
  { id: "iphone-11", name: "iPhone 11", restauro: 99, servicePack: 229 },
  { id: "ipad-pro-12", name: "iPad Pro 12.9\"", restauro: 199, servicePack: 699 },
  { id: "ipad-pro-11", name: "iPad Pro 11\"", restauro: 169, servicePack: 549 },
  { id: "ipad-air", name: "iPad Air", restauro: 149, servicePack: 449 },
  { id: "apple-watch-ultra", name: "Apple Watch Ultra", restauro: 149, servicePack: 499 },
  { id: "apple-watch-series", name: "Apple Watch Series 7/8/9", restauro: 99, servicePack: 299 },
];

const RestauroVetriCertificato = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const whatsappMessage = "Ciao! Vorrei un preventivo per il restauro del vetro del mio display. Invio foto del danno.";
  const vantaggi = [{
    icon: Sparkles,
    title: "Qualità Originale Preservata",
    description: "Mantieni il pannello OLED/LCD Apple originale. Nessun ricambio compatibile."
  }, {
    icon: PiggyBank,
    title: "Risparmio Reale",
    description: "Fino al 50% rispetto alla sostituzione Service Pack Apple."
  }, {
    icon: Microscope,
    title: "Tecniche di Laminazione Avanzate",
    description: "Il tuo tecnico è un Chirurgo Digitale con macchinari professionali."
  }, {
    icon: Clock,
    title: "Tempi Certi",
    description: "Intervento completato in 1-2 giorni lavorativi."
  }];
  const pricingOptions = [{
    title: "Ricambio Compatibile",
    subtitle: "Economico ma compromesso",
    price: "da €79",
    highlighted: false,
    features: [{
      text: "Colori spenti e sbiaditi",
      included: false
    }, {
      text: "Vetro fragile e sottile",
      included: false
    }, {
      text: "Touch impreciso",
      included: false
    }, {
      text: "True Tone non supportato",
      included: false
    }, {
      text: "Garanzia limitata 3 mesi",
      included: false
    }]
  }, {
    title: "Restauro Vetro Certificato",
    subtitle: "Miglior rapporto qualità/prezzo",
    price: "da €129",
    highlighted: true,
    badge: "PIÙ SCELTO",
    features: [{
      text: "Colori originali Apple",
      included: true
    }, {
      text: "Vetro premium OCA",
      included: true
    }, {
      text: "Touch perfetto",
      included: true
    }, {
      text: "True Tone preservato",
      included: true
    }, {
      text: "Garanzia 12 mesi",
      included: true
    }]
  }, {
    title: "Service Pack Apple",
    subtitle: "Originale ma costoso",
    price: "da €350+",
    highlighted: false,
    features: [{
      text: "Colori originali Apple",
      included: true
    }, {
      text: "Vetro originale Apple",
      included: true
    }, {
      text: "Touch perfetto",
      included: true
    }, {
      text: "True Tone incluso",
      included: true
    }, {
      text: "Garanzia Apple",
      included: true
    }]
  }];
  const testimonials = [{
    name: "Marco R.",
    rating: 5,
    text: "Ho portato il mio iPhone 14 Pro con il vetro rotto. Non volevo perdere la qualità del display originale e la rigenerazione è stata perfetta. Sembra nuovo!",
    date: "2 settimane fa"
  }, {
    name: "Alessia P.",
    rating: 5,
    text: "Finalmente qualcuno che non ti propone solo ricambi compatibili! Il mio Apple Watch ha il vetro rigenerato e la qualità è identica all'originale.",
    date: "1 mese fa"
  }, {
    name: "Giuseppe M.",
    rating: 5,
    text: "Professionalità e competenza. Mi hanno spiegato tutto il processo e il risultato è eccellente. Risparmiato oltre 200€ rispetto al Service Pack.",
    date: "3 settimane fa"
  }];
  const faqs = [{
    question: "Cosa significa 'Restauro Vetro Certificato'?",
    answer: "È un processo professionale che permette di sostituire solo il vetro esterno danneggiato del display, mantenendo intatto il pannello OLED o LCD originale Apple. Utilizziamo macchinari di laminazione professionali e adesivi OCA di alta qualità per garantire un risultato perfetto."
  }, {
    question: "Quali dispositivi possono essere rigenerati?",
    answer: "Rigeneriamo display di iPhone (dal modello 6 in poi), iPad e Apple Watch. La fattibilità dipende dalle condizioni del pannello interno: se l'OLED/LCD non presenta danni, il restauro è possibile."
  }, {
    question: "Il True Tone e Face ID funzioneranno ancora?",
    answer: "Sì, assolutamente. Il processo di rigenerazione non tocca i componenti elettronici. True Tone, Face ID, 3D Touch e tutte le funzionalità originali rimangono perfettamente operative."
  }, {
    question: "Quanto tempo richiede l'intervento?",
    answer: "Il processo di rigenerazione richiede 1-2 giorni lavorativi. Questo tempo è necessario per garantire una laminazione perfetta e test di qualità approfonditi."
  }, {
    question: "Cosa succede se il display si danneggia durante la rigenerazione?",
    answer: "Offriamo la Garanzia di Restauro Totale: se il display si danneggia irreparabilmente durante il nostro intervento, lo sostituiamo con un display di pari qualità a nostre spese. Zero rischi per te."
  }, {
    question: "Posso spedire il dispositivo da tutta Italia?",
    answer: "Sì! Accettiamo spedizioni da tutta Italia. Ti forniamo istruzioni dettagliate per l'imballaggio sicuro e un preventivo gratuito basato sulle foto che ci invii via WhatsApp."
  }];

  // Schema Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restauro Vetri Certificato iPhone iPad",
    description: "Servizio professionale di rigenerazione vetro display per iPhone, iPad e Apple Watch. Mantieni la qualità originale Apple risparmiando fino al 50%.",
    provider: {
      "@id": "https://giolabriparazioni.it/#business"
    },
    serviceType: "Riparazione Display",
    areaServed: {
      "@type": "Country",
      name: "Italia"
    },
    offers: {
      "@type": "Offer",
      priceRange: "€129 - €299",
      priceCurrency: "EUR"
    }
  };

  // Schema FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return <>
      <SEOHead
        title="Restauro Vetri Certificato iPhone iPad | GioLab Assemini"
        description="Restauro vetro display iPhone e iPad ad Assemini. Mantieni l'OLED originale Apple, risparmia fino al 50%. Garanzia totale inclusa."
        keywords="restauro vetro iPhone, rigenerazione display, display originale Apple, riparazione vetro Assemini, GioLab, laminazione display"
        ogUrl="https://giolabriparazioni.it/servizi/restauro-vetri-certificato"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Servizi", url: "https://giolabriparazioni.it/servizi" },
          { name: "Restauro Vetri Certificato", url: "https://giolabriparazioni.it/servizi/restauro-vetri-certificato" }
        ]}
        structuredData={[serviceSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24">
          {/* HERO SECTION */}
          <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-giolab-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-giolab-orange/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-giolab-orange/20 text-giolab-orange border-giolab-orange/30 text-sm px-4 py-1">
                  Rigenerazione Vetro 
                  <Microscope className="w-4 h-4 mr-2" />
                  ​
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Mantieni il Tuo Display Originale.
                  <br />
                  <span className="text-giolab-blue">Restauro Vetri Certificato</span> ad Assemini.
                </h1>

                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  Non sostituire l'OLED o l'LCD di fabbrica con un ricambio compatibile. Noi salviamo la tua qualità
                  Apple, cambiando <strong>solo il vetro rotto</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button size="lg" className="bg-giolab-orange hover:bg-giolab-orange/90 text-white text-lg px-8 py-6" onClick={() => window.open(getWhatsAppLink(whatsappMessage), "_blank")}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Richiedi un Preventivo Rapido
                  </Button>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6" asChild>
                    <a href={`tel:${BUSINESS_INFO.contacts.phoneInternational}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Chiama Ora
                    </a>
                  </Button>
                  <Button size="lg" className="bg-giolab-blue hover:bg-giolab-blue/90 text-white text-lg px-8 py-6" asChild>
                    <Link to="/prenota">
                      <Calendar className="w-5 h-5 mr-2" />
                      Prenota Appuntamento
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={4.9} size="sm" showText={false} />
                    <span>4.9/5 su Google</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-giolab-orange" />
                    <span>500+ Display Rigenerati</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Garanzia 12 Mesi</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IL VANTAGGIO ESCLUSIVO */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Perché Scegliere il Restauro Certificato GioLab?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Non siamo un negozio qualsiasi. Siamo specialisti nella rigenerazione di display originali.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vantaggi.map((vantaggio, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-slate-50 to-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-giolab-blue/10 flex items-center justify-center">
                        <vantaggio.icon className="w-7 h-7 text-giolab-blue" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{vantaggio.title}</h3>
                      <p className="text-muted-foreground text-sm">{vantaggio.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </section>

          {/* GARANZIA & FIDUCIA */}
          <section className="py-16 lg:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Zero Rischi per il Tuo Display
                  </h2>
                  <p className="text-muted-foreground">
                    La nostra garanzia ti protegge completamente durante tutto il processo.
                  </p>
                </div>

                <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-50 to-white shadow-xl overflow-hidden">
                  <div className="bg-green-500 text-white py-3 px-6 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    <span className="font-semibold text-lg">Garanzia di Restauro Totale</span>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-lg text-foreground mb-6">
                      Se il display si danneggia irreparabilmente durante il processo di rigenerazione,
                      <strong className="text-green-600">
                        {" "}
                        lo sostituiamo con un display di pari qualità a nostre spese
                      </strong>
                      .
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 px-4 py-2">
                        <Check className="w-4 h-4 mr-2" />
                        Nessun rischio per te
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 px-4 py-2">
                        <Check className="w-4 h-4 mr-2" />
                        Garanzia 12 mesi inclusa
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 px-4 py-2">
                        <Check className="w-4 h-4 mr-2" />
                        Risultati garantiti
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CALCOLATORE RISPARMIO */}
          <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calcolatore Risparmio
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Quanto Risparmi con il Restauro Certificato?
                  </h2>
                  <p className="text-muted-foreground">
                    Seleziona il tuo dispositivo per vedere il risparmio stimato rispetto al Service Pack Apple.
                  </p>
                </div>

                <Card className="border-2 border-green-200 shadow-xl bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Seleziona il tuo dispositivo
                      </label>
                      <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue placeholder="Scegli il modello..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50">
                          {devicePricing.map((device) => (
                            <SelectItem key={device.id} value={device.id}>
                              {device.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedDevice && (() => {
                      const device = devicePricing.find(d => d.id === selectedDevice);
                      if (!device) return null;
                      const risparmio = device.servicePack - device.restauro;
                      const percentuale = Math.round((risparmio / device.servicePack) * 100);
                      
                      return (
                        <div className="space-y-6 animate-fade-in">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                              <p className="text-sm text-red-600 font-medium mb-1">Service Pack Apple</p>
                              <p className="text-2xl font-bold text-red-700">€{device.servicePack}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                              <p className="text-sm text-green-600 font-medium mb-1">Restauro GioLab</p>
                              <p className="text-2xl font-bold text-green-700">€{device.restauro}</p>
                            </div>
                          </div>

                          <div className="p-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center">
                            <p className="text-sm font-medium opacity-90 mb-1">Il tuo risparmio</p>
                            <p className="text-4xl font-bold mb-2">€{risparmio}</p>
                            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-1">
                              -{percentuale}% rispetto ad Apple
                            </Badge>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              className="flex-1 bg-giolab-blue hover:bg-giolab-blue/90"
                              onClick={() => window.open(getWhatsAppLink(`Ciao! Vorrei un preventivo per il restauro vetro del mio ${device.name}. Invio foto del danno.`), "_blank")}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Richiedi Preventivo per {device.name.split(" ")[0]} {device.name.split(" ")[1]}
                            </Button>
                          </div>

                          <p className="text-xs text-muted-foreground text-center">
                            * Prezzi indicativi. Il preventivo finale dipende dalle condizioni del display.
                          </p>
                        </div>
                      );
                    })()}

                    {!selectedDevice && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p>Seleziona un dispositivo per calcolare il risparmio</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* SCEGLIERE LA QUALITÀ - PRICING */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Confronta le Opzioni: Quale Scegli?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Prezzi indicativi per iPhone 13/14/15. Richiedi un preventivo personalizzato per il tuo modello.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {pricingOptions.map((option, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-300 ${option.highlighted ? "border-2 border-giolab-blue shadow-2xl scale-105 z-10" : "border border-slate-200 hover:shadow-lg"}`}>
                    {option.badge && <div className="absolute top-0 right-0 bg-giolab-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        {option.badge}
                      </div>}
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className={`font-bold text-lg mb-1 ${option.highlighted ? "text-giolab-blue" : "text-foreground"}`}>
                          {option.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{option.subtitle}</p>
                        <div className={`text-3xl font-bold ${option.highlighted ? "text-giolab-blue" : "text-foreground"}`}>
                          {option.price}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {option.features.map((feature, fIndex) => <li key={fIndex} className="flex items-center gap-3 text-sm">
                            {feature.included ? <Check className="w-5 h-5 text-green-500 flex-shrink-0" /> : <X className="w-5 h-5 text-red-400 flex-shrink-0" />}
                            <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                              {feature.text}
                            </span>
                          </li>)}
                      </ul>
                      {option.highlighted && <Button className="w-full mt-6 bg-giolab-blue hover:bg-giolab-blue/90" onClick={() => window.open(getWhatsAppLink(whatsappMessage), "_blank")}>
                          Scegli Restauro
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>}
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF - RECENSIONI */}
          <section className="py-16 lg:py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Recensioni Verificate
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Guarda l'Intervento Chirurgico</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Non è una riparazione, è un restauro di precisione. Ecco cosa dicono i nostri clienti.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {testimonials.map((testimonial, index) => <Card key={index} className="bg-white/5 border-white/10 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <RatingStars rating={testimonial.rating} size="sm" showText={false} />
                      </div>
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{testimonial.name}</span>
                        <span className="text-xs text-slate-500">{testimonial.date}</span>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Gallery Placeholder */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                      <div className="text-center text-slate-500">
                        <Microscope className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <span className="text-xs">Before/After #{i}</span>
                      </div>
                    </div>)}
                </div>
                <p className="text-center text-slate-500 text-sm mt-4">
                  Spazio riservato per gallery fotografica del processo di rigenerazione
                </p>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Domande Frequenti</h2>
                  <p className="text-muted-foreground">Tutto quello che devi sapere sul restauro vetri certificato.</p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-slate-50">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </div>
            </div>
          </section>

          {/* LINK ARTICOLO BLOG */}
          <section className="py-12 bg-white border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Card className="border-2 border-giolab-blue/20 bg-gradient-to-br from-giolab-blue/5 to-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-giolab-blue/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-7 h-7 text-giolab-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          Vuoi saperne di più sulla rigenerazione vetro?
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Leggi la nostra guida completa con tutti i dettagli tecnici, i dispositivi compatibili e le risposte alle domande più frequenti.
                        </p>
                        <Button asChild variant="outline" className="border-giolab-blue text-giolab-blue hover:bg-giolab-blue hover:text-white">
                          <Link to="/blog/rigenerazione-vetro-iphone-ipad-apple-watch">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Leggi l'Articolo Completo
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA FINALE + MAPPA */}
          <section className="py-16 lg:py-20 bg-gradient-to-br from-giolab-blue to-giolab-blue/80 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Hai un Display Rotto? Facciamolo Valutare</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Inviaci una foto del danno su WhatsApp per ricevere un preventivo gratuito e senza impegno in pochi
                  minuti.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6" onClick={() => window.open(getWhatsAppLink(whatsappMessage), "_blank")}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Invia Foto su WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                    <a href={`tel:${BUSINESS_INFO.contacts.phoneInternational}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      {BUSINESS_INFO.contacts.phone}
                    </a>
                  </Button>
                </div>

                {/* Info Spedizioni */}
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Vieni in Negozio</h3>
                          <p className="text-white/70 text-sm">
                            {BUSINESS_INFO.address.street}
                            <br />
                            {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city} (
                            {BUSINESS_INFO.address.province})
                          </p>
                          <a href={BUSINESS_INFO.urls.googleMaps} target="_blank" rel="noopener noreferrer" className="text-sm text-giolab-orange hover:underline mt-2 inline-block">
                            Apri in Google Maps →
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Truck className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Spedisci da Tutta Italia</h3>
                          <p className="text-white/70 text-sm">
                            Accettiamo spedizioni da tutta Italia.
                            <br />
                            Preventivo gratuito prima dell'intervento.
                          </p>
                          <span className="text-sm text-giolab-orange mt-2 inline-block">
                            Contattaci per le istruzioni di spedizione
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <FloatingWhatsApp />
      <ScrollToTop />
    </>;
};
export default RestauroVetriCertificato;