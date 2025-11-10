import { Award, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Esperienza",
      description: "Oltre 6 anni nel settore dell'assistenza tecnica",
    },
    {
      icon: Shield,
      title: "Affidabilità",
      description: "Garanzia fino a 12 mesi su ogni riparazione",
    },
    {
      icon: Clock,
      title: "Rapidità",
      description: "Riparazioni anche in 1 ora per i casi urgenti",
    },
    {
      icon: Users,
      title: "Professionalità",
      description: "Tecnici certificati e costantemente aggiornati",
    },
  ];

  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Il tuo partner di fiducia per l'assistenza tecnologica
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Giolab</strong> è guidato da{" "}
                <strong className="text-giolab-blue">Stefano Giordano</strong>, professionista con oltre 6 anni di
                esperienza nel settore dell'assistenza e riparazione di dispositivi elettronici.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La nostra missione è fornire servizi di riparazione di altissima qualità, utilizzando esclusivamente
                ricambi certificati e tecniche professionali. Ogni intervento viene eseguito con cura e precisione,
                garantendo risultati duraturi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ci distinguiamo per la trasparenza, la rapidità e l'attenzione al cliente. Offriamo preventivi gratuiti
                e dettagliati, tempi di riparazione rapidi e la possibilità di un telefono di cortesia durante
                l'intervento.
              </p>
            </div>

            {/* Right side - Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-giolab-gray to-white border border-border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-giolab-blue/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-giolab-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
