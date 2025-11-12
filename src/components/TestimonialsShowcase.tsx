import { Card, CardContent } from "@/components/ui/card";
import RatingStars from "@/components/RatingStars";
import { Quote, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

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
  variant?: "default" | "compact";
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

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('google-reviews');
      
      if (error) throw error;
      
      if (data?.reviews) {
        setTestimonials(data.reviews);
        setAggregateRating(data.aggregateRating || 4.9);
        setTotalReviews(data.totalReviews || data.reviews.length);
        
        // Animazione stagger per le cards
        data.reviews.forEach((_: any, index: number) => {
          setTimeout(() => {
            setVisibleTestimonials(prev => [...prev, index]);
          }, index * 100);
        });
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

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

  return (
    <section className="py-12 md:py-20 bg-giolab-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
          <div className="flex justify-center">
            <RatingStars rating={aggregateRating} reviewCount={totalReviews} size="lg" />
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
