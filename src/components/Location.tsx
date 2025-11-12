import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, getGoogleMapsLink } from "@/config/businessInfo";

const Location = () => {
  const handleGetDirections = () => {
    window.open(getGoogleMapsLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="dove-siamo" className="py-8 md:py-12">
      <div className="h-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Dove Siamo</h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Vieni a trovarci ad Assemini
          </p>
        </div>

        <Card className="overflow-hidden border-2 shadow-xl">
          <CardContent className="p-0">
            {/* Google Maps iframe */}
            <div className="relative w-full h-[250px] md:h-[300px]">
              <iframe
                src={BUSINESS_INFO.urls.mapEmbed}
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

            {/* Address info */}
            <div className="p-4 md:p-6 bg-background">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-giolab-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-giolab-blue" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-bold text-foreground text-base mb-1">Il Nostro Laboratorio</h3>
                    <p className="text-sm text-muted-foreground">{BUSINESS_INFO.address.full}</p>
                    <p className="text-xs text-muted-foreground mt-1">{BUSINESS_INFO.openingHours.display.weekdays}</p>
                    <p className="text-xs text-muted-foreground">{BUSINESS_INFO.openingHours.display.saturday}</p>
                  </div>
                </div>
                <Button
                  size="default"
                  onClick={handleGetDirections}
                  className="bg-giolab-blue hover:bg-giolab-blue-dark text-white font-semibold w-full"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Ottieni Indicazioni
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Location;
