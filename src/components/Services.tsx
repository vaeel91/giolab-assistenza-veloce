import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Laptop, Gamepad2, BatteryCharging, Cpu, Sparkles, Package, Wind, Shield, Wrench, Cloud, Search, Building2 } from "lucide-react";
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
    <section id="servizi" ref={ref} className="py-4 md:py-6 pt-20 md:pt-24 bg-gradient-to-b from-background to-giolab-gray h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Servizi di Riparazione</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Riparazione professionale di iPhone, smartphone, PC e console. Garanzia 12 mesi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 max-w-7xl mx-auto">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
            const delay = index * 100;
            
            const card = (
              <Card 
                className={`h-full flex flex-col border hover:border-giolab-blue transition-all duration-300 group cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardHeader className="p-3 md:p-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue/5 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-5 w-5 md:h-6 md:w-6 ${service.iconColor}`} width="24" height="24" />
                  </div>
                  <CardTitle className="text-sm md:text-base leading-tight line-clamp-2 font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-3 pt-0 md:p-4 md:pt-0">
                  <CardDescription className="text-sm md:text-sm leading-relaxed line-clamp-3 hidden sm:block">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );

            return service.link ? (
              <Link key={index} to={service.link}>
                {card}
              </Link>
            ) : (
              <div key={index}>
                {card}
              </div>
            );
          })}
        </div>

        {/* Additional features - Mobile optimized */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4 md:p-4 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-base md:text-base">✓ Garanzia 12 mesi</div>
          </div>
          <div className="text-center p-4 md:p-4 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-base md:text-base">✓ Ricambi Certificati</div>
          </div>
          <div className="text-center p-4 md:p-4 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-base md:text-base">✓ Preventivo Gratuito</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
