import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    emoji: "📱",
    title: "Riparazione iPhone e Smartphone Assemini",
    description: "Sostituzione display, batterie, fotocamere e componenti per iPhone, Samsung, Huawei, Xiaomi. Riparazioni rapide anche in 1 ora con ricambi certificati. Servizio disponibile ad Assemini e Cagliari.",
    link: "/servizi/riparazione-display-iphone-assemini"
  },
  {
    emoji: "💻",
    title: "Assistenza PC e Notebook",
    description: "Riparazioni hardware e software, upgrade SSD o RAM, pulizia interna e ottimizzazione completa.",
  },
  {
    emoji: "🎮",
    title: "Riparazione Console",
    description: "PlayStation, Xbox e Nintendo Switch. Risolviamo problemi hardware e software con ricambi originali.",
  },
  {
    emoji: "🔋",
    title: "Batterie Maggiorate iPhone Assemini",
    description: "Sostituzione batteria iPhone con batterie di capacità superiore. Più autonomia e prestazioni per il tuo iPhone. Servizio specializzato disponibile ad Assemini e provincia di Cagliari.",
    link: "/servizi/batteria-maggiorata-iphone"
  },
  {
    emoji: "💾",
    title: "Recupero Dati",
    description: "Recuperiamo foto, video e documenti da smartphone, hard disk o SSD danneggiati. Privacy garantita.",
  },
  {
    emoji: "🧠",
    title: "Micro-saldature e Riparazioni Avanzate",
    description: "Interventi su schede madri e circuiti elettronici. Riparazioni di corti, danni da liquidi e chip guasti.",
  },
  {
    emoji: "⚙️",
    title: "Sostituzione Vetro Posteriore iPhone",
    description: "Ripariamo il retro in vetro del tuo iPhone con risultati perfetti, senza cambiare la scocca completa.",
  },
  {
    emoji: "💎",
    title: "Rigenerazione Vetro",
    description: "Rigenerazione professionale del vetro per iPhone e Apple Watch. Sostituiamo solo il vetro del tuo display, consentendoti di mantere lo schermo originale e abbassando il prezzo finale della lavorazione.",
    link: "/blog/rigenerazione-vetro-iphone"
  },
  {
    emoji: "🧹",
    title: "Pulizia e Manutenzione Interna",
    description: "Rimuoviamo polvere e ossidazioni da smartphone e PC per migliorare prestazioni e raffreddamento.",
  },
  {
    emoji: "📦",
    title: "Telefono di Cortesia",
    description: "Non restare mai senza telefono: dispositivi di cortesia disponibili durante la riparazione.",
  },
  {
    emoji: "🛡️",
    title: "Protezione Schermo e Accessori",
    description: "Pellicole in vetro, cover, cavi e caricabatterie di qualità per proteggere e completare il tuo dispositivo.",
  },
  {
    emoji: "☁️",
    title: "Configurazione e Trasferimento Dati",
    description: "Impostiamo il tuo nuovo smartphone o PC e trasferiamo tutti i tuoi dati in modo sicuro.",
  },
  {
    emoji: "🔍",
    title: "Diagnosi e Preventivo Rapido",
    description: "Controllo tecnico immediato e preventivo chiaro prima di qualsiasi intervento.",
  },
  {
    emoji: "🔧",
    title: "Servizi per Centri Assistenza (B2B)",
    description: "Rigenerazione display, micro-saldature conto terzi e fornitura di ricambi professionali.",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-4 md:py-6 bg-gradient-to-b from-background to-giolab-gray h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Servizi di Riparazione</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Riparazione professionale di iPhone, smartphone, PC e console. Garanzia 12 mesi.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 max-w-7xl mx-auto">
          {services.slice(0, 6).map((service, index) => {
            const card = (
              <Card className="h-full flex flex-col border hover:border-giolab-blue transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-2 md:p-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-giolab-blue/10 flex items-center justify-center mb-1 md:mb-2 group-hover:bg-giolab-blue transition-all duration-300">
                    <span className="text-lg md:text-2xl">{service.emoji}</span>
                  </div>
                  <CardTitle className="text-xs md:text-sm leading-tight line-clamp-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-2 pt-0 md:p-3 md:pt-0">
                  <CardDescription className="text-xs leading-snug line-clamp-2 hidden md:block">{service.description}</CardDescription>
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

        {/* Additional features */}
        <div className="mt-3 md:mt-4 grid grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xs md:text-sm">✓ Garanzia 12 mesi</div>
          </div>
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xs md:text-sm">✓ Ricambi Certificati</div>
          </div>
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xs md:text-sm">✓ Preventivo Gratuito</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
