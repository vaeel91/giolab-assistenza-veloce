import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Laptop, Gamepad2, BatteryCharging, Cpu, Sparkles, Package, Wind, Shield, Wrench, Cloud, Search, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/5",
    title: "Riparazione iPhone e Smartphone Assemini",
    shortTitle: "iPhone & Smartphone",
    description: "Sostituzione display, batterie, fotocamere e componenti per iPhone, Samsung, Huawei, Xiaomi. Riparazioni rapide anche in 1 ora con ricambi certificati.",
    link: "/servizi/riparazione-display-iphone-assemini",
    featured: true
  },
  {
    icon: Laptop,
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-500/10 to-pink-400/5",
    title: "Assistenza PC e Notebook",
    shortTitle: "PC & Notebook",
    description: "Riparazioni hardware e software, upgrade SSD o RAM, pulizia interna e ottimizzazione completa.",
  },
  {
    icon: Gamepad2,
    gradient: "from-pink-500 to-rose-400",
    bgGradient: "from-pink-500/10 to-rose-400/5",
    title: "Riparazione Console",
    shortTitle: "Console Gaming",
    description: "PlayStation, Xbox e Nintendo Switch. Risolviamo problemi hardware e software con ricambi originali.",
  },
  {
    icon: BatteryCharging,
    gradient: "from-green-500 to-emerald-400",
    bgGradient: "from-green-500/10 to-emerald-400/5",
    title: "Batterie Maggiorate iPhone Assemini",
    shortTitle: "Batterie Maggiorate",
    description: "Sostituzione batteria iPhone con batterie di capacità superiore. Più autonomia e prestazioni per il tuo iPhone.",
    link: "/servizi/batteria-maggiorata-iphone",
    featured: true
  },
  {
    icon: Cpu,
    gradient: "from-red-500 to-orange-400",
    bgGradient: "from-red-500/10 to-orange-400/5",
    title: "Micro-saldature e Riparazioni Avanzate",
    shortTitle: "Micro-saldature",
    description: "Interventi su schede madri e circuiti elettronici. Riparazioni di corti, danni da liquidi e chip guasti.",
  },
  {
    icon: Sparkles,
    gradient: "from-cyan-500 to-teal-400",
    bgGradient: "from-cyan-500/10 to-teal-400/5",
    title: "Rigenerazione Vetro",
    shortTitle: "Rigenerazione Vetro",
    description: "Rigenerazione professionale del vetro per iPhone e Apple Watch. Mantieni lo schermo originale.",
    link: "/servizi/restauro-vetri-certificato",
    featured: true
  },
  {
    icon: Wrench,
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-400/5",
    title: "Sostituzione Vetro Posteriore iPhone",
    shortTitle: "Back Glass",
    description: "Ripariamo il retro in vetro del tuo iPhone con risultati perfetti.",
  },
  {
    icon: Wind,
    gradient: "from-amber-500 to-yellow-400",
    bgGradient: "from-amber-500/10 to-yellow-400/5",
    title: "Pulizia e Manutenzione Interna",
    shortTitle: "Pulizia Interna",
    description: "Rimuoviamo polvere e ossidazioni per migliorare prestazioni e raffreddamento.",
  },
  {
    icon: Package,
    gradient: "from-indigo-500 to-violet-400",
    bgGradient: "from-indigo-500/10 to-violet-400/5",
    title: "Telefono di Cortesia",
    shortTitle: "Cortesia",
    description: "Non restare mai senza telefono durante la riparazione.",
  },
  {
    icon: Shield,
    gradient: "from-emerald-500 to-green-400",
    bgGradient: "from-emerald-500/10 to-green-400/5",
    title: "Protezione Schermo e Accessori",
    shortTitle: "Accessori",
    description: "Pellicole in vetro, cover, cavi e caricabatterie di qualità.",
  },
  {
    icon: Cloud,
    gradient: "from-sky-500 to-blue-400",
    bgGradient: "from-sky-500/10 to-blue-400/5",
    title: "Configurazione e Trasferimento Dati",
    shortTitle: "Trasferimento Dati",
    description: "Impostiamo il tuo nuovo smartphone e trasferiamo i tuoi dati.",
  },
  {
    icon: Search,
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-400/5",
    title: "Diagnosi e Preventivo Rapido",
    shortTitle: "Diagnosi Gratuita",
    description: "Controllo tecnico immediato e preventivo chiaro.",
  },
  {
    icon: Building2,
    gradient: "from-slate-500 to-gray-400",
    bgGradient: "from-slate-500/10 to-gray-400/5",
    title: "Servizi per Centri Assistenza (B2B)",
    shortTitle: "Servizi B2B",
    description: "Rigenerazione display, micro-saldature conto terzi e fornitura ricambi.",
  },
];

const guarantees = [
  { icon: CheckCircle2, text: "Garanzia 12 mesi" },
  { icon: CheckCircle2, text: "Ricambi Certificati" },
  { icon: CheckCircle2, text: "Preventivo Gratuito" },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="servizi" ref={ref} className="py-8 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-giolab-blue/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-giolab-blue/10 text-giolab-blue text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            I Nostri Servizi
          </span>
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Riparazioni Professionali
          </h2>
          <p className={`text-base md:text-lg text-slate-600 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Esperienza e precisione al servizio dei tuoi dispositivi. iPhone, smartphone, PC e console.
          </p>
        </div>

        {/* Featured Services - Large Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
          {services.filter(s => s.featured).map((service, index) => {
            const IconComponent = service.icon;
            const delay = 300 + index * 100;
            
            const card = (
              <Card 
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                <CardContent className="p-6 md:p-8">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-7 w-7 md:h-8 md:w-8 bg-gradient-to-r ${service.gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`, WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                    <IconComponent className={`h-7 w-7 md:h-8 md:w-8 text-giolab-blue`} />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-giolab-blue transition-colors">
                    {service.shortTitle}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-giolab-blue font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Scopri di più</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );

            return service.link ? (
              <Link key={index} to={service.link} className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>

        {/* Other Services - Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-10 md:mb-16">
          {services.filter(s => !s.featured).map((service, index) => {
            const IconComponent = service.icon;
            const delay = 600 + index * 50;
            
            const card = (
              <Card 
                className={`group relative overflow-hidden border border-slate-100 hover:border-giolab-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardContent className="p-4 md:p-5">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-slate-700" />
                  </div>
                  
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1.5 group-hover:text-giolab-blue transition-colors line-clamp-2">
                    {service.shortTitle}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-2 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );

            return service.link ? (
              <Link key={index} to={service.link} className="block">
                {card}
              </Link>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className={`flex flex-wrap justify-center gap-4 md:gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          {guarantees.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-giolab-blue/5 to-cyan-500/5 border border-giolab-blue/10"
            >
              <item.icon className="h-5 w-5 text-giolab-blue" />
              <span className="text-slate-800 font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
