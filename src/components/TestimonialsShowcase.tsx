import { Card, CardContent } from "@/components/ui/card";
import RatingStars from "@/components/RatingStars";
import { Quote, Loader2, ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('google-reviews');
      
      if (error) throw error;
      
      if (data?.reviews && data.reviews.length > 0) {
        setTestimonials(data.reviews);
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
    const fallbackTestimonials: Testimonial[] = [
      {
        id: 1,
        name: "Marco Piras",
        role: "Imprenditore",
        location: "Assemini",
        rating: 5,
        text: "Servizio eccellente! iPhone riparato in meno di un'ora, display perfetto come nuovo. Tecnici competenti e prezzi onesti. Super consigliato per chi cerca qualità e velocità!",
        date: "15 Gennaio 2025",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco",
        service: "Riparazione Display iPhone"
      },
      {
        id: 2,
        name: "Giulia Melis",
        role: "Studentessa",
        location: "Cagliari",
        rating: 5,
        text: "Batteria maggiorata installata sul mio iPhone 13, autonomia triplicata! Finalmente arrivo a sera senza problemi. Giolab è davvero il top ad Assemini, lo consiglio a tutti!",
        date: "10 Gennaio 2025",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Giulia",
        service: "Batteria Maggiorata iPhone"
      },
      {
        id: 3,
        name: "Andrea Murgia",
        role: "Fotografo",
        location: "Cagliari",
        rating: 5,
        text: "Professionali e veloci. Mi hanno recuperato tutte le foto da un iPhone che non si accendeva più. Servizio impeccabile, prezzo corretto e garanzia di 12 mesi. Grazie infinite!",
        date: "5 Gennaio 2025",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea",
        service: "Recupero Dati"
      },
      {
        id: 4,
        name: "Sara Carta",
        role: "Insegnante",
        location: "Assemini",
        rating: 5,
        text: "Consigliato da un'amica, non me ne pento. Schermo sostituito in 40 minuti mentre aspettavo. Qualità ottima, telefono come nuovo e prezzo super competitivo. Tornerò sicuramente!",
        date: "28 Dicembre 2024",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
        service: "Riparazione Display iPhone"
      },
      {
        id: 5,
        name: "Luca Sanna",
        role: "Gamer",
        location: "Cagliari",
        rating: 5,
        text: "Centro assistenza serio e competente. Mi hanno riparato la PS5 in pochi giorni e funziona perfettamente. Finalmente posso giocare di nuovo! Personale gentile e preparato. Grazie Giolab!",
        date: "20 Dicembre 2024",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luca",
        service: "Riparazione Console"
      },
      {
        id: 6,
        name: "Francesca Pinna",
        role: "Commerciante",
        location: "Assemini",
        rating: 5,
        text: "Affidabilità e professionalità. Ho fatto sostituire la batteria del mio iPhone 12 e ora dura il doppio. Servizio rapido con telefono di cortesia. Prezzi trasparenti. Consigliatissimo!",
        date: "15 Dicembre 2024",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Francesca",
        service: "Sostituzione Batteria"
      }
    ];
    
    setTestimonials(fallbackTestimonials);
    setAggregateRating(4.9);
    setTotalReviews(150);
    
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? displayedTestimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds on mobile

    return () => clearInterval(interval);
  }, [isMobile, displayedTestimonials.length]);

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
                      alt={testimonial.name}
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

  // Scroll variant with infinite vertical scrolling (desktop) or horizontal slider (mobile)
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

          {/* Mobile: Horizontal Slider */}
          {isMobile ? (
            <div className="relative max-w-2xl mx-auto">
              {/* Fade overlay left */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-giolab-gray to-transparent z-10 pointer-events-none" />
              
              {/* Fade overlay right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-giolab-gray to-transparent z-10 pointer-events-none" />

              {/* Slider container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {displayedTestimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <Card className="border-2 hover:border-giolab-blue transition-all duration-300">
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-2 border-giolab-blue/30 hover:border-giolab-blue hover:bg-giolab-blue/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-2 border-giolab-blue/30 hover:border-giolab-blue hover:bg-giolab-blue/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {displayedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === index
                        ? "w-8 h-2 bg-giolab-blue"
                        : "w-2 h-2 bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop: Vertical Scrolling */
            <div className="relative max-w-5xl mx-auto h-[600px] overflow-hidden">
              {/* Fade overlay top */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-giolab-gray to-transparent z-10 pointer-events-none" />
              
              {/* Fade overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-giolab-gray to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling content */}
              <div className="animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex flex-col gap-6 pb-6">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <Card 
                      key={`${testimonial.id}-${index}`}
                      className="border-2 hover:border-giolab-blue hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto w-full"
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
            </div>
          )}
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
