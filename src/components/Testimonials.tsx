import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section id="recensioni" className="py-20 bg-gradient-to-b from-giolab-gray to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei clienti è la nostra priorità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-giolab-blue text-giolab-blue" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-giolab-blue/10 rounded-full">
            <Star className="h-5 w-5 fill-giolab-blue text-giolab-blue" />
            <span className="font-semibold text-foreground">4.9/5 valutazione media</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
