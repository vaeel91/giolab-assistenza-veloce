import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    emoji: "📱",
    title: "Riparazione Smartphone",
    description: "Display, batterie, fotocamere e componenti. Riparazioni rapide anche in 1 ora con ricambi certificati.",
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
    title: "Batterie Maggiorate iPhone",
    description: "Sostituzione con batterie di capacità superiore. Più autonomia e prestazioni per il tuo iPhone.",
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
    description: "Rigenerazione professionale del vetro per iPhone e Apple Watch. Rimuoviamo graffi e imperfezioni per un risultato come nuovo.",
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">I Nostri Servizi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza tecnologica con garanzia e professionalità
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-giolab-blue/10 flex items-center justify-center mb-4 group-hover:bg-giolab-blue group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xl mb-2">✓ Garanzia 12 mesi</div>
            <p className="text-sm text-muted-foreground">Su tutte le riparazioni</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xl mb-2">✓ Ricambi Certificati</div>
            <p className="text-sm text-muted-foreground">Alta qualità e testati</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur border border-border">
            <div className="text-giolab-blue font-bold text-xl mb-2">✓ Preventivo Gratuito</div>
            <p className="text-sm text-muted-foreground">Senza impegno</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
