import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Laptop, Gamepad2, BatteryCharging, Cpu, Sparkles, Package, Wind, Shield, Wrench, Cloud, Search, Building2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Smartphone,
    iconColor: "text-blue-500",
    title: "Riparazione iPhone e Smartphone Assemini",
    description: "Sostituzione display, batterie, fotocamere e componenti per iPhone, Samsung, Huawei, Xiaomi. Riparazioni rapide anche in 1 ora con ricambi certificati. Servizio disponibile ad Assemini e Cagliari.",
    link: "/servizi/riparazione-display-iphone-assemini"
  },
  {
    icon: Laptop,
    iconColor: "text-purple-500",
    title: "Assistenza PC e Notebook",
    description: "Riparazioni hardware e software, upgrade SSD o RAM, pulizia interna e ottimizzazione completa.",
  },
  {
    icon: Gamepad2,
    iconColor: "text-pink-500",
    title: "Riparazione Console",
    description: "PlayStation, Xbox e Nintendo Switch. Risolviamo problemi hardware e software con ricambi originali.",
  },
  {
    icon: BatteryCharging,
    iconColor: "text-green-500",
    title: "Batterie Maggiorate iPhone Assemini",
    description: "Sostituzione batteria iPhone con batterie di capacità superiore. Più autonomia e prestazioni per il tuo iPhone. Servizio specializzato disponibile ad Assemini e provincia di Cagliari.",
    link: "/servizi/batteria-maggiorata-iphone"
  },
  {
    icon: Cpu,
    iconColor: "text-red-500",
    title: "Micro-saldature e Riparazioni Avanzate",
    description: "Interventi su schede madri e circuiti elettronici. Riparazioni di corti, danni da liquidi e chip guasti.",
  },
  {
    icon: Sparkles,
    iconColor: "text-cyan-500",
    title: "Rigenerazione Vetro",
    description: "Rigenerazione professionale del vetro per iPhone e Apple Watch. Sostituiamo solo il vetro del tuo display, consentendoti di mantere lo schermo originale e abbassando il prezzo finale della lavorazione.",
    link: "/blog/rigenerazione-vetro-iphone"
  },
  {
    icon: Wrench,
    iconColor: "text-orange-500",
    title: "Sostituzione Vetro Posteriore iPhone",
    description: "Ripariamo il retro in vetro del tuo iPhone con risultati perfetti, senza cambiare la scocca completa.",
  },
  {
    icon: Wind,
    iconColor: "text-amber-500",
    title: "Pulizia e Manutenzione Interna",
    description: "Rimuoviamo polvere e ossidazioni da smartphone e PC per migliorare prestazioni e raffreddamento.",
  },
  {
    icon: Package,
    iconColor: "text-indigo-500",
    title: "Telefono di Cortesia",
    description: "Non restare mai senza telefono: dispositivi di cortesia disponibili durante la riparazione.",
  },
  {
    icon: Shield,
    iconColor: "text-emerald-500",
    title: "Protezione Schermo e Accessori",
    description: "Pellicole in vetro, cover, cavi e caricabatterie di qualità per proteggere e completare il tuo dispositivo.",
  },
  {
    icon: Cloud,
    iconColor: "text-sky-500",
    title: "Configurazione e Trasferimento Dati",
    description: "Impostiamo il tuo nuovo smartphone o PC e trasferiamo tutti i tuoi dati in modo sicuro.",
  },
  {
    icon: Search,
    iconColor: "text-violet-500",
    title: "Diagnosi e Preventivo Rapido",
    description: "Controllo tecnico immediato e preventivo chiaro prima di qualsiasi intervento.",
  },
  {
    icon: Building2,
    iconColor: "text-slate-500",
    title: "Servizi per Centri Assistenza (B2B)",
    description: "Rigenerazione display, micro-saldature conto terzi e fornitura di ricambi professionali.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="servizi" ref={ref} className="py-12 md:py-20 pt-24 md:pt-32 bg-gradient-to-b from-background to-giolab-gray/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Servizi di Riparazione</h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto">
            Soluzioni professionali per iPhone, smartphone, PC e console con garanzia 12 mesi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const delay = index * 100;
            
            const cardContent = (
              <Card 
                className={`h-full flex flex-col bg-white border-[0.5px] border-black/[0.08] rounded-[18px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.10)] hover:scale-[1.02] hover:border-black/[0.12] transition-all duration-300 cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardHeader className="p-6 md:p-7">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.iconColor === 'text-blue-500' ? 'from-[#34c7f9] to-[#0ea5e9]' : service.iconColor === 'text-purple-500' ? 'from-[#a259ff] to-[#8b5cf6]' : service.iconColor === 'text-pink-500' ? 'from-[#ec4899] to-[#f472b6]' : service.iconColor === 'text-green-500' ? 'from-[#10b981] to-[#34d399]' : service.iconColor === 'text-red-500' ? 'from-[#ef4444] to-[#f87171]' : service.iconColor === 'text-cyan-500' ? 'from-[#06b6d4] to-[#22d3ee]' : 'from-[#3b82f6] to-[#60a5fa]'} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0 md:p-7 md:pt-0 flex flex-col justify-between">
                  <CardDescription className="text-sm leading-relaxed text-neutral-500 mb-4 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  {service.link && (
                    <div className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Scopri il servizio</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );

            return service.link ? (
              <Link key={index} to={service.link} className="group">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Additional features */}
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
  );
};

export default Services;
