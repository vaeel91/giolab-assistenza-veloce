import { Smartphone, Laptop, Gamepad2, Battery, HardDrive, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "Riparazione Smartphone",
    description: "Display, batterie, fotocamere e componenti. Riparazioni rapide anche in 1 ora con ricambi certificati.",
  },
  {
    icon: Laptop,
    title: "Assistenza PC",
    description: "Riparazione hardware e software, upgrade componenti, pulizia e manutenzione professionale.",
  },
  {
    icon: Gamepad2,
    title: "Riparazione Console",
    description: "PlayStation, Xbox, Nintendo Switch. Risolviamo ogni problema hardware e software.",
  },
  {
    icon: Battery,
    title: "Batterie Maggiorate iPhone",
    description: "Sostituzione con batterie di capacità superiore. Più autonomia per il tuo iPhone.",
  },
  {
    icon: HardDrive,
    title: "Recupero Dati",
    description: "Recuperiamo i tuoi dati da dispositivi danneggiati. Foto, documenti e file importanti al sicuro.",
  },
  {
    icon: Wrench,
    title: "Micro-saldature",
    description: "Riparazioni avanzate di schede madri e componenti elettronici con tecnologia professionale.",
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
                  <service.icon className="h-7 w-7 text-giolab-blue group-hover:text-white transition-colors duration-300" />
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
