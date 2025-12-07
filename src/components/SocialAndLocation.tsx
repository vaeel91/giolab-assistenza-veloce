import { MapPin } from "lucide-react";
import Gallery from "./Gallery";
import Location from "./Location";

const SocialAndLocation = () => {
  return (
    <section id="dove-siamo" className="py-8 md:py-12 bg-muted/30 rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Header integrato */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-giolab-blue/10 flex items-center justify-center">
            <MapPin className="h-5 w-5 md:h-6 md:w-6 text-giolab-blue" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Dove Trovarci
            </h2>
            <p className="text-sm text-muted-foreground">
              Vieni a trovarci ad Assemini, siamo a due passi da Cagliari
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
          <Gallery />
          <Location />
        </div>
      </div>
    </section>
  );
};

export default SocialAndLocation;
