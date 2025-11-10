import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "Via Carmine 20A, Assemini (CA)";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8406487877!2d9.000000000000000!3d39.283333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e73440c7e6cf27%3A0x9a0e0c0c0c0c0c0c!2sVia%20Carmine%2C%2020A%2C%2009032%20Assemini%20CA!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit";

  const handleGetDirections = () => {
    window.open(`https://maps.google.com/?q=Via+Carmine+20A+Assemini+CA`, "_blank");
  };

  return (
    <section id="dove-siamo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Dove Siamo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vieni a trovarci nel nostro laboratorio ad Assemini. Ti aspettiamo!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardContent className="p-0">
              {/* Google Maps iframe */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Giolab"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Address info overlay */}
              <div className="p-6 md:p-8 bg-background">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-giolab-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-giolab-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">Il Nostro Laboratorio</h3>
                      <p className="text-muted-foreground">{address}</p>
                      <p className="text-sm text-muted-foreground mt-2">Lun-Sab: 9:00-13:00 / 16:00-19:30</p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleGetDirections}
                    className="bg-giolab-blue hover:bg-giolab-blue-dark text-white font-semibold whitespace-nowrap"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Ottieni Indicazioni
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
