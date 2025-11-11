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
    <section id="chi-siamo" className="py-4 md:py-6 bg-background h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Left side - Content */}
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-lg md:text-3xl font-bold text-foreground">
                Centro Assistenza iPhone ad Assemini
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                <strong className="text-foreground">Giolab Assemini</strong> è guidato da{" "}
                <strong className="text-giolab-blue">Stefano Giordano</strong>, con oltre 10 anni di esperienza nella riparazione iPhone, smartphone, PC e console. Utilizziamo ricambi certificati e tecniche professionali.
              </p>
            </div>

            {/* Right side - Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-giolab-gray to-white border border-border hover:border-giolab-blue transition-all duration-300"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-giolab-blue/10 flex items-center justify-center mb-1 md:mb-2">
                    <span className="text-base md:text-xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{feature.description}</p>
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
