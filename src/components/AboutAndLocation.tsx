import { MapPin, Navigation, Shield, Zap, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, getGoogleMapsLink } from "@/config/businessInfo";
import { useEffect, useRef, useState } from "react";

const AboutAndLocation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    { icon: Award, title: "10+ Anni", desc: "Esperienza" },
    { icon: Shield, title: "12 Mesi", desc: "Garanzia" },
    { icon: Zap, title: "1 Ora", desc: "Riparazioni" },
    { icon: GraduationCap, title: "Certificati", desc: "Tecnici" },
  ];

  const handleGetDirections = () => {
    window.open(getGoogleMapsLink(), "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Il Tuo Centro Assistenza di Fiducia
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              <strong className="text-giolab-blue">Giolab</strong> ad Assemini: competenza, rapidità e garanzia su ogni riparazione
            </p>
          </div>

          {/* Main Grid: Chi Siamo + Dove Siamo */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Chi Siamo Card */}
            <Card 
              className={`border-0 shadow-xl bg-gradient-to-br from-white to-secondary/30 overflow-hidden transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-giolab-blue flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Chi Siamo</h3>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  <strong className="text-foreground">Giolab</strong> è guidato da{" "}
                  <strong className="text-giolab-blue">Stefano Giordano</strong>, con oltre 10 anni nel settore. 
                  Ripariamo iPhone, smartphone, PC e console con ricambi certificati e tecniche professionali.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-4 gap-2 md:gap-3">
                  {features.map((feat, i) => (
                    <div 
                      key={i}
                      className={`text-center p-2 md:p-3 rounded-xl bg-white/70 border border-border/50 hover:border-giolab-blue/30 hover:shadow-md transition-all duration-500 hover-scale ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: isVisible ? `${400 + i * 100}ms` : "0ms" }}
                    >
                      <feat.icon className="h-5 w-5 md:h-6 md:w-6 text-giolab-blue mx-auto mb-1.5" />
                      <div className="text-xs md:text-sm font-bold text-foreground">{feat.title}</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dove Siamo Card */}
            <Card 
              className={`border-0 shadow-xl overflow-hidden transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-0">
                {/* Map */}
                <div className="relative w-full h-[180px] md:h-[220px]">
                  <iframe
                    src={BUSINESS_INFO.urls.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Giolab Assemini"
                    className="w-full h-full"
                  />
                </div>
                
                {/* Info */}
                <div className="p-5 md:p-6 bg-gradient-to-br from-white to-secondary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-giolab-blue flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base mb-0.5">Dove Trovarci</h3>
                      <p className="text-sm text-muted-foreground">{BUSINESS_INFO.address.full}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted-foreground mb-4 pl-[52px]">
                    <span className="bg-secondary/50 px-2 py-1 rounded">{BUSINESS_INFO.openingHours.display.weekdays}</span>
                    <span className="bg-secondary/50 px-2 py-1 rounded">{BUSINESS_INFO.openingHours.display.saturday}</span>
                  </div>
                  
                  <Button
                    onClick={handleGetDirections}
                    className="w-full bg-giolab-blue hover:bg-giolab-blue-dark text-white font-semibold hover-scale"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Ottieni Indicazioni
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndLocation;