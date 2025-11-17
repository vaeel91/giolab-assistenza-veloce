import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Laptop, Gamepad2, BatteryCharging, Cpu, Sparkles, Package, Wind, Shield, Wrench, Cloud, Search, Building2, ArrowRight, Check } from "lucide-react";
import { useSafeScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Smartphone,
    iconColor: "text-blue-500",
    title: "Riparazione iPhone e Smartphone Assemini",
    description: "Sostituzione display, batterie, fotocamere e componenti per iPhone, Samsung, Huawei, Xiaomi. Riparazioni rapide anche in 1 ora con ricambi certificati. Servizio disponibile ad Assemini e Cagliari.",
    link: "/servizi/riparazione-display-iphone-assemini",
    includes: [
      "Sostituzione display con ricambi certificati",
      "Riparazione in 1 ora per iPhone e smartphone",
      "Test completo e garanzia 12 mesi"
    ]
  },
  {
    icon: Laptop,
    iconColor: "text-purple-500",
    title: "Assistenza PC e Notebook",
    description: "Riparazioni hardware e software, upgrade SSD o RAM, pulizia interna e ottimizzazione completa.",
    includes: [
      "Upgrade SSD e RAM per prestazioni migliori",
      "Pulizia interna e manutenzione hardware",
      "Risoluzione problemi software e ottimizzazione"
    ]
  },
  {
    icon: Gamepad2,
    iconColor: "text-pink-500",
    title: "Riparazione Console",
    description: "PlayStation, Xbox e Nintendo Switch. Risolviamo problemi hardware e software con ricambi originali.",
    includes: [
      "Riparazione PlayStation, Xbox e Nintendo Switch",
      "Sostituzione componenti con ricambi originali",
      "Diagnosi completa e preventivo trasparente"
    ]
  },
  {
    icon: BatteryCharging,
    iconColor: "text-green-500",
    title: "Batterie Maggiorate iPhone Assemini",
    description: "Sostituzione batteria iPhone con batterie di capacità superiore. Più autonomia e prestazioni per il tuo iPhone. Servizio specializzato disponibile ad Assemini e provincia di Cagliari.",
    link: "/servizi/batteria-maggiorata-iphone",
    includes: [
      "Batterie maggiorate fino a +35% di capacità",
      "Installazione professionale con garanzia",
      "Autonomia prolungata per il tuo iPhone"
    ]
  },
  {
    icon: Cpu,
    iconColor: "text-red-500",
    title: "Micro-saldature e Riparazioni Avanzate",
    description: "Interventi su schede madri e circuiti elettronici. Riparazioni di corti, danni da liquidi e chip guasti.",
    includes: [
      "Micro-saldature su schede madri e chip",
      "Riparazione danni da liquidi e ossidazioni",
      "Recupero dispositivi considerati irriparabili"
    ]
  },
  {
    icon: Sparkles,
    iconColor: "text-cyan-500",
    title: "Rigenerazione Vetro",
    description: "Rigenerazione professionale del vetro per iPhone e Apple Watch. Sostituiamo solo il vetro del tuo display, consentendoti di mantere lo schermo originale e abbassando il prezzo finale della lavorazione.",
    link: "/blog/rigenerazione-vetro-iphone",
    includes: [
      "Conservi il display originale del tuo iPhone",
      "Costo inferiore rispetto alla sostituzione completa",
      "Risultato estetico perfetto e duraturo"
    ]
  },
  {
    icon: Wrench,
    iconColor: "text-orange-500",
    title: "Sostituzione Vetro Posteriore iPhone",
    description: "Ripariamo il retro in vetro del tuo iPhone con risultati perfetti, senza cambiare la scocca completa.",
    includes: [
      "Sostituzione solo del vetro posteriore",
      "Mantieni la scocca originale del tuo iPhone",
      "Risultato estetico come nuovo"
    ]
  },
  {
    icon: Wind,
    iconColor: "text-amber-500",
    title: "Pulizia e Manutenzione Interna",
    description: "Rimuoviamo polvere e ossidazioni da smartphone e PC per migliorare prestazioni e raffreddamento.",
    includes: [
      "Pulizia completa di componenti interni",
      "Miglioramento prestazioni e raffreddamento",
      "Prevenzione surriscaldamenti e guasti"
    ]
  },
  {
    icon: Package,
    iconColor: "text-indigo-500",
    title: "Telefono di Cortesia",
    description: "Non restare mai senza telefono: dispositivi di cortesia disponibili durante la riparazione.",
    includes: [
      "Dispositivo sostitutivo gratuito durante la riparazione",
      "Rimani sempre connesso e operativo",
      "Servizio incluso per riparazioni lunghe"
    ]
  },
  {
    icon: Shield,
    iconColor: "text-emerald-500",
    title: "Protezione Schermo e Accessori",
    description: "Pellicole in vetro, cover, cavi e caricabatterie di qualità per proteggere e completare il tuo dispositivo.",
    includes: [
      "Pellicole in vetro temperato di alta qualità",
      "Cover protettive per tutti i modelli",
      "Accessori originali e certificati"
    ]
  },
  {
    icon: Cloud,
    iconColor: "text-sky-500",
    title: "Configurazione e Trasferimento Dati",
    description: "Impostiamo il tuo nuovo smartphone o PC e trasferiamo tutti i tuoi dati in modo sicuro.",
    includes: [
      "Trasferimento sicuro di contatti, foto e app",
      "Configurazione completa del dispositivo",
      "Backup e verifica integrità dati"
    ]
  },
  {
    icon: Search,
    iconColor: "text-violet-500",
    title: "Diagnosi e Preventivo Rapido",
    description: "Controllo tecnico immediato e preventivo chiaro prima di qualsiasi intervento.",
    includes: [
      "Diagnosi tecnica completa e gratuita",
      "Preventivo trasparente senza costi nascosti",
      "Consiglio professionale sul miglior intervento"
    ]
  },
  {
    icon: Building2,
    iconColor: "text-slate-500",
    title: "Servizi per Centri Assistenza (B2B)",
    description: "Rigenerazione display, micro-saldature conto terzi e fornitura di ricambi professionali.",
    includes: [
      "Servizi conto terzi per centri assistenza",
      "Fornitura ricambi professionali certificati",
      "Tariffe competitive per operatori del settore"
    ]
  },
];

const Services = () => {
  const { ref, isVisible } = useSafeScrollAnimation();
  
  // Genera structured data ItemList
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Giolab Riparazioni"
        }
      }
    }))
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      
      <section id="servizi" ref={ref} className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Griglia Servizi con CTA periodiche */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const shouldShowCTA = (index + 1) % 2 === 0 && index !== services.length - 1;
              
              return (
                <React.Fragment key={index}>
                  <Card 
                    className={`
                      h-full flex flex-col bg-white border-[0.5px] border-black/[0.08] rounded-[18px] 
                      shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.10)] 
                      hover:scale-[1.02] hover:border-black/[0.12] transition-all duration-300
                      ${isVisible ? 'animate-fadeUp' : ''}
                    `}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <CardHeader className="p-6 md:p-7">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${
                        service.iconColor === 'text-blue-500' ? 'from-[#34c7f9] to-[#0ea5e9]' : 
                        service.iconColor === 'text-purple-500' ? 'from-[#a259ff] to-[#8b5cf6]' : 
                        service.iconColor === 'text-pink-500' ? 'from-[#ec4899] to-[#f472b6]' : 
                        service.iconColor === 'text-green-500' ? 'from-[#10b981] to-[#34d399]' : 
                        service.iconColor === 'text-red-500' ? 'from-[#ef4444] to-[#f87171]' : 
                        service.iconColor === 'text-cyan-500' ? 'from-[#06b6d4] to-[#22d3ee]' : 
                        service.iconColor === 'text-orange-500' ? 'from-[#f97316] to-[#fb923c]' :
                        service.iconColor === 'text-amber-500' ? 'from-[#f59e0b] to-[#fbbf24]' :
                        service.iconColor === 'text-indigo-500' ? 'from-[#6366f1] to-[#818cf8]' :
                        service.iconColor === 'text-emerald-500' ? 'from-[#10b981] to-[#34d399]' :
                        service.iconColor === 'text-sky-500' ? 'from-[#0ea5e9] to-[#38bdf8]' :
                        service.iconColor === 'text-violet-500' ? 'from-[#8b5cf6] to-[#a78bfa]' :
                        service.iconColor === 'text-slate-500' ? 'from-[#64748b] to-[#94a3b8]' :
                        'from-[#3b82f6] to-[#60a5fa]'
                      } flex items-center justify-center mb-4`}>
                        <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold leading-tight mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-neutral-500">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 p-6 pt-0 md:p-7 md:pt-0 flex flex-col justify-between">
                      {/* Mini-lista "Cosa include" */}
                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-semibold text-foreground/80 mb-3">Cosa include:</p>
                        <ul className="space-y-2">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA */}
                      {service.link ? (
                        <Button variant="default" asChild className="w-full mt-4">
                          <Link to={service.link}>
                            Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="default" asChild className="w-full mt-4">
                          <Link to="/contatti">
                            Prenota ora <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* CTA a larghezza piena ogni 2 servizi */}
                  {shouldShowCTA && (
                    <Card className="md:col-span-2 lg:col-span-3 bg-white border-border hover:border-primary transition-all rounded-[18px]">
                      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 md:p-8">
                        <div className="text-center md:text-left">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                            Vuoi un preventivo immediato?
                          </h3>
                          <p className="text-muted-foreground">
                            Contattaci ora per una diagnosi gratuita e un preventivo trasparente.
                          </p>
                        </div>
                        <Button size="lg" asChild className="flex-shrink-0">
                          <Link to="/contatti">
                            Contattaci ora <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Features aggiuntive */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 md:p-5 rounded-2xl bg-white border-[0.5px] border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-giolab-blue font-semibold text-sm md:text-base">✓ Garanzia 12 mesi</div>
            </div>
            <div className="text-center p-4 md:p-5 rounded-2xl bg-white border-[0.5px] border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-giolab-blue font-semibold text-sm md:text-base">✓ Ricambi Certificati</div>
            </div>
            <div className="text-center p-4 md:p-5 rounded-2xl bg-white border-[0.5px] border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-giolab-blue font-semibold text-sm md:text-base">✓ Preventivo Gratuito</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
