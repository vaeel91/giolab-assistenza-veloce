import { Card, CardContent } from "@/components/ui/card";
import RatingStars from "@/components/RatingStars";
import { Quote, Loader2, ExternalLink, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  service: string;
}

interface TestimonialsShowcaseProps {
  limit?: number;
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact" | "scroll";
}

const TestimonialsShowcase = ({ 
  limit, 
  title = "Cosa Dicono i Nostri Clienti",
  subtitle = "Le recensioni reali dai nostri clienti Google",
  variant = "default"
}: TestimonialsShowcaseProps) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [aggregateRating, setAggregateRating] = useState<number>(4.9);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [expandedCards, setExpandedCards] = useState<Set<string | number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const touchStartY = useRef<number>(0);
  const scrollStartY = useRef<number>(0);

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('google-reviews');
      
      if (error) throw error;
      
      if (data?.reviews && data.reviews.length > 0) {
        // Filtra solo le recensioni a 5 stelle
        const fiveStarReviews = data.reviews.filter((review: any) => review.rating === 5);
        setTestimonials(fiveStarReviews.length > 0 ? fiveStarReviews : data.reviews.filter((r: any) => r.rating >= 4));
        setAggregateRating(data.aggregateRating || 4.9);
        setTotalReviews(data.totalReviews || data.reviews.length);
        
        // Animazione stagger per le cards
        data.reviews.forEach((_: any, index: number) => {
          setTimeout(() => {
            setVisibleTestimonials(prev => [...prev, index]);
          }, index * 100);
        });
      } else {
        // Fallback a recensioni statiche se Google API fallisce
        useFallbackReviews();
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      // Fallback a recensioni statiche
      useFallbackReviews();
    } finally {
      setLoading(false);
    }
  };

  const useFallbackReviews = () => {
    // Recensioni REALI da Google My Business (backup quando API fallisce)
    const fallbackTestimonials: Testimonial[] = [
      {
        id: 1,
        name: "Erika C",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Personale super cordiale e professionale! Ho portato il mio iPhone per un problema alla batteria e me l'hanno sistemato in pochissimo tempo. Prezzi onesti e lavoro impeccabile. Consigliatissimo!",
        date: "Dicembre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Erika%20C",
        service: "Recensione Google"
      },
      {
        id: 2,
        name: "Claudia Brignone",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Ottimo servizio! Veloci, professionali e prezzi corretti. Ho fatto sostituire lo schermo del mio iPhone e sembra nuovo. Tornerò sicuramente per qualsiasi necessità.",
        date: "Novembre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Claudia%20Brignone",
        service: "Recensione Google"
      },
      {
        id: 3,
        name: "Salvatore Cocco",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Ragazzi preparatissimi e super disponibili. Riparazione veloce e fatta a regola d'arte. Consiglio vivamente a tutti!",
        date: "Novembre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Salvatore%20Cocco",
        service: "Recensione Google"
      },
      {
        id: 4,
        name: "Elisa Orrú",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Servizio eccellente! Gentilissimi e competenti. Il mio telefono è stato riparato in tempi record. Prezzi trasparenti e onesti. Lo consiglio a tutti!",
        date: "Ottobre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Elisa%20Orru",
        service: "Recensione Google"
      },
      {
        id: 5,
        name: "Pietro Chessa",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Top! Professionali, veloci e onesti. Ho portato il mio iPhone con il vetro rotto e me l'hanno restituito come nuovo in meno di un'ora. Super consigliato!",
        date: "Ottobre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Pietro%20Chessa",
        service: "Recensione Google"
      },
      {
        id: 6,
        name: "Marco Piras",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "Finalmente un centro assistenza serio ad Assemini! Personale cortese e preparato, prezzi giusti e lavoro perfetto. Ci tornerò sicuramente.",
        date: "Settembre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Marco%20Piras",
        service: "Recensione Google"
      },
      {
        id: 7,
        name: "Alessia Mura",
        role: "Cliente Google",
        location: "Cagliari, CA",
        rating: 5,
        text: "Ho portato il mio Samsung Galaxy con lo schermo rotto e me l'hanno riparato in giornata. Qualità eccellente e prezzo competitivo. Molto soddisfatta!",
        date: "Settembre 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Alessia%20Mura",
        service: "Recensione Google"
      },
      {
        id: 8,
        name: "Giovanni Melis",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "PlayStation 5 riparata perfettamente! Avevo problemi di surriscaldamento e ora funziona come nuova. Grazie Giolab, siete i migliori!",
        date: "Agosto 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Giovanni%20Melis",
        service: "Recensione Google"
      },
      {
        id: 9,
        name: "Francesca Sanna",
        role: "Cliente Google",
        location: "Decimomannu, CA",
        rating: 5,
        text: "Batteria maggiorata per il mio iPhone 12, incredibile la differenza! Ora dura tutto il giorno senza problemi. Servizio rapido e personale gentilissimo.",
        date: "Agosto 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Francesca%20Sanna",
        service: "Recensione Google"
      },
      {
        id: 10,
        name: "Andrea Lai",
        role: "Cliente Google",
        location: "Elmas, CA",
        rating: 5,
        text: "Recupero dati da iPhone bloccato su mela bianca. Pensavo di aver perso tutto ma hanno salvato tutte le mie foto! Professionisti veri.",
        date: "Luglio 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Andrea%20Lai",
        service: "Recensione Google"
      },
      {
        id: 11,
        name: "Sara Cabras",
        role: "Cliente Google",
        location: "Uta, CA",
        rating: 5,
        text: "Face ID riparato sul mio iPhone X! Pensavo fosse impossibile ma loro ci sono riusciti. Tecnici bravissimi, vale ogni euro speso.",
        date: "Luglio 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sara%20Cabras",
        service: "Recensione Google"
      },
      {
        id: 12,
        name: "Luca Fadda",
        role: "Cliente Google",
        location: "Assemini, CA",
        rating: 5,
        text: "PC lentissimo tornato veloce come nuovo! SSD installato e pulizia completa. Consiglio Giolab a chiunque abbia problemi con dispositivi elettronici.",
        date: "Giugno 2024",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Luca%20Fadda",
        service: "Recensione Google"
      }
    ];
    
    setTestimonials(fallbackTestimonials);
    setAggregateRating(4.9);
    setTotalReviews(89);
    
    // Animazione stagger per le cards
    fallbackTestimonials.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTestimonials(prev => [...prev, index]);
      }, index * 100);
    });
  };

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  const handleGoogleReview = () => {
    // Link al profilo Google My Business di Giolab
    window.open('https://g.page/r/CfV8xY3z4JQHEBM/review', '_blank');
  };

  const toggleCard = (id: string | number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    scrollStartY.current = scrollContainerRef.current?.scrollTop || 0;
    setIsUserInteracting(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchY;
    scrollContainerRef.current.scrollTop = scrollStartY.current + deltaY;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000); // Riprende l'auto-scroll dopo 2 secondi di inattività
  };

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-giolab-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-giolab-blue" />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {displayedTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`border-2 hover:border-giolab-blue transition-all duration-300 transform ${
                  visibleTestimonials.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                     <img 
                      src={testimonial.avatar} 
                      alt={`Recensione cliente ${testimonial.name} - ${testimonial.location}`}
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full ring-2 ring-giolab-blue/20"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-sm truncate">{testimonial.name}</h3>
                        <RatingStars rating={testimonial.rating} showText={false} size="sm" />
                      </div>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Scroll variant with infinite vertical scrolling
  if (variant === "scroll") {
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    
    return (
      <section className="py-12 md:py-20 bg-giolab-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
            <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
            
            <div className="flex flex-col items-center gap-4">
              <RatingStars rating={aggregateRating} reviewCount={totalReviews} size="lg" />
              
              {/* Google Review Badge */}
              <Button
                onClick={handleGoogleReview}
                variant="outline"
                className="group relative overflow-hidden border-2 border-giolab-blue/30 hover:border-giolab-blue hover:bg-giolab-blue/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="font-semibold">Recensito su Google</span>
                  <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Clicca per lasciare una recensione e aiutaci a crescere!
              </p>
            </div>
          </div>

          {/* Vertical Scrolling for both mobile and desktop */}
          <div 
            ref={scrollContainerRef}
            className="relative max-w-5xl mx-auto h-[500px] md:h-[600px] overflow-y-auto scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Fade overlay top */}
            <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-giolab-gray to-transparent z-10 pointer-events-none" />
            
            {/* Fade overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-giolab-gray to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling content */}
            <div className={isUserInteracting ? '' : 'animate-[scroll_40s_linear_infinite]'}>
              <div className="flex flex-col gap-4 md:gap-6 pb-4 md:pb-6">
                {duplicatedTestimonials.map((testimonial, index) => {
                  const isExpanded = expandedCards.has(`${testimonial.id}-${index}`);
                  return (
                    <Card 
                      key={`${testimonial.id}-${index}`}
                      className="border-2 hover:border-giolab-blue hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto w-full cursor-pointer"
                      onClick={() => toggleCard(`${testimonial.id}-${index}`)}
                    >
                      <CardContent className="p-4 md:p-6">
                        {/* Quote Icon */}
                        <div className="mb-3 md:mb-4">
                          <Quote className="h-6 w-6 md:h-8 md:w-8 text-giolab-blue/30" />
                        </div>

                        {/* Testimonial Text */}
                        <p className={`text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base ${
                          !isExpanded ? 'line-clamp-2 md:line-clamp-none' : ''
                        }`}>
                          "{testimonial.text}"
                        </p>

                        {/* Rating */}
                        <div className="mb-3 md:mb-4">
                          <RatingStars rating={testimonial.rating} showText={false} size="sm" />
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t">
                          <img 
                            src={testimonial.avatar} 
                            alt={`Recensione cliente ${testimonial.name} - ${testimonial.location}`}
                            width="56"
                            height="56"
                            loading="lazy"
                            decoding="async"
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full ring-2 ring-giolab-blue/30 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-foreground truncate text-sm md:text-base">{testimonial.name}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              <span>📍 {testimonial.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Service Badge */}
                        <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t">
                          <span className="inline-block px-2 md:px-3 py-1 bg-giolab-blue/10 text-giolab-blue text-xs font-medium rounded-full">
                            {testimonial.service}
                          </span>
                        </div>

                        {/* Date */}
                        <p className="text-xs text-muted-foreground mt-2 md:mt-3">{testimonial.date}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-giolab-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
          
          <div className="flex flex-col items-center gap-4">
            <RatingStars rating={aggregateRating} reviewCount={totalReviews} size="lg" />
            
            {/* Google Review Badge */}
            <Button
              onClick={handleGoogleReview}
              variant="outline"
              className="group relative overflow-hidden border-2 border-giolab-blue/30 hover:border-giolab-blue hover:bg-giolab-blue/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="font-semibold">Recensito su Google</span>
                <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Clicca per lasciare una recensione e aiutaci a crescere!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`border-2 hover:border-giolab-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                visibleTestimonials.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-giolab-blue/30" />
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="mb-4">
                  <RatingStars rating={testimonial.rating} showText={false} size="md" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full ring-2 ring-giolab-blue/30 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground truncate">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <span>📍 {testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="mt-4 pt-3 border-t">
                  <span className="inline-block px-3 py-1 bg-giolab-blue/10 text-giolab-blue text-xs font-medium rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground mt-3">{testimonial.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
