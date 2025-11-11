const About = () => {
  const features = [
    {
      emoji: "🧰",
      title: "Esperienza",
      description: "Oltre 10 anni di esperienza nel settore dell'assistenza tecnica e delle micro-riparazioni elettroniche. Ogni intervento è frutto di competenza e precisione maturata sul campo.",
    },
    {
      emoji: "🛡️",
      title: "Affidabilità",
      description: "Utilizziamo solo ricambi certificati e garantiamo ogni riparazione fino a 12 mesi. Trasparenza e fiducia sono alla base di ogni lavoro che consegniamo.",
    },
    {
      emoji: "⚡",
      title: "Rapidità",
      description: "Riparazioni rapide anche in 1 ora per i casi urgenti. Ottimizziamo i tempi senza mai rinunciare alla qualità e all'accuratezza del risultato finale.",
    },
    {
      emoji: "🎓",
      title: "Professionalità",
      description: "Partecipiamo costantemente a corsi di aggiornamento e specializzazione per offrire riparazioni sempre più evolute e fuori dall'ordinario. Restiamo al passo con le nuove tecnologie per darti sempre il meglio.",
    },
  ];

  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-5xl font-bold text-foreground">
                Centro Assistenza iPhone e Smartphone ad Assemini
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Giolab Assemini</strong> è guidato da{" "}
                <strong className="text-giolab-blue">Stefano Giordano</strong>, con oltre 10 anni di esperienza nella riparazione iPhone, smartphone, PC e console ad Assemini e Cagliari. Investiamo costantemente nella formazione tecnica per offrire riparazioni evolute e micro-saldature complesse che altri centri assistenza non gestiscono.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Presso il nostro centro assistenza di Via Carmine 20A ad Assemini utilizziamo esclusivamente ricambi certificati e tecniche professionali, garantendo risultati affidabili e duraturi con cura artigianale in ogni intervento di riparazione.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Serviamo Assemini, Cagliari e tutta la provincia con rapidità, competenza e attenzione al cliente: preventivi gratuiti chiari, riparazioni in 1 ora per i casi urgenti e telefono di cortesia disponibile durante la riparazione.
              </p>
            </div>

            {/* Right side - Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 md:p-6 rounded-2xl bg-gradient-to-br from-giolab-gray to-white border border-border hover:border-giolab-blue transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-giolab-blue/10 flex items-center justify-center mb-2 md:mb-4">
                    <span className="text-xl md:text-2xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">{feature.description}</p>
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
