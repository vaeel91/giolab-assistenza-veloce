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
    <section id="servizi" className="py-20 bg-gradient-to-b from-background to-giolab-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Servizi di Riparazione ad Assemini e Cagliari</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Riparazione professionale di iPhone, smartphone, PC, notebook e console. Interventi rapidi con ricambi certificati, garanzia 12 mesi e preventivo gratuito. Serviamo Assemini, Cagliari e tutta la provincia.
          </p>
          <a 
            href="https://instagram.com/giolab_iphonefix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-giolab-blue hover:underline font-medium"
          >
            Guarda i nostri lavori
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0.5 md:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const card = (
              <Card className="h-full flex flex-col border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
                <CardHeader className="p-4 md:p-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-giolab-blue/10 flex items-center justify-center mb-2 md:mb-4 group-hover:bg-giolab-blue group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">{service.emoji}</span>
                  </div>
                  <CardTitle className="text-sm md:text-xl leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-4 pt-0 md:p-6 md:pt-0">
                  <CardDescription className="text-xs md:text-base leading-snug line-clamp-4">{service.description}</CardDescription>
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
        <div className="mt-16 grid grid-cols-3 gap-0.5 md:gap-6 max-w-4xl mx-auto">
          <div className="text-center p-3 md:p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-sm md:text-xl mb-1 md:mb-2">✓ Garanzia 12 mesi</div>
            <p className="text-xs md:text-sm text-muted-foreground">Su tutte le riparazioni</p>
          </div>
          <div className="text-center p-3 md:p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-sm md:text-xl mb-1 md:mb-2">✓ Ricambi Certificati</div>
            <p className="text-xs md:text-sm text-muted-foreground">Alta qualità e testati</p>
          </div>
          <div className="text-center p-3 md:p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-sm md:text-xl mb-1 md:mb-2">✓ Preventivo Gratuito</div>
            <p className="text-xs md:text-sm text-muted-foreground">Senza impegno</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
