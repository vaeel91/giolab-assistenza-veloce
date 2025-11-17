import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSafeScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Marco R.",
    rating: 5,
    text: "Servizio eccellente! Hanno riparato il mio iPhone in meno di un'ora. Professionalità e cortesia al top.",
  },
  {
    name: "Laura P.",
    rating: 5,
    text: "Dopo aver girato diversi centri, solo qui sono riusciti a recuperare i miei dati. Consigliatissimo!",
  },
  {
    name: "Giovanni M.",
    rating: 5,
    text: "Prezzi onesti e lavoro garantito. Stefano è molto competente e disponibile a spiegare ogni dettaglio.",
  },
  {
    name: "Alessia T.",
    rating: 5,
    text: "Ho sostituito la batteria maggiorata del mio iPhone e ora dura il doppio! Ottimo investimento.",
  },
  {
    name: "Davide S.",
    rating: 5,
    text: "Riparato il mio PC che non si accendeva più. Velocissimi e molto professionali. Lo consiglio a tutti!",
  },
  {
    name: "Chiara F.",
    rating: 5,
    text: "La mia PlayStation 5 aveva problemi con il lettore. Riparata perfettamente e con garanzia di 12 mesi!",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useSafeScrollAnimation();
  
  return (
    <section id="testimonianze" ref={ref} className="py-4 md:py-6 pt-20 md:pt-24 bg-gradient-to-b from-giolab-gray to-background h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Cosa Dicono i Clienti</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-7xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => {
            const delay = index * 100;
            return (
              <Card 
                key={index} 
                className={`border hover:border-giolab-blue transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
              <CardContent className="pt-3 p-2 md:p-4">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-giolab-blue text-giolab-blue" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 italic line-clamp-3">"{testimonial.text}"</p>
                <p className="text-xs font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Trust indicator */}
        <div className="mt-3 md:mt-4 text-center">
          <div className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-giolab-blue/10 rounded-full">
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-giolab-blue text-giolab-blue" />
            <span className="text-xs md:text-sm font-semibold text-foreground">4.9/5 valutazione media</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
