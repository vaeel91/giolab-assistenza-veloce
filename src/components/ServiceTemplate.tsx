import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import ScrollToTop from "@/components/ScrollToTop";
import RatingStars from "@/components/RatingStars";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import { Link } from "react-router-dom";

interface ServiceTemplateProps {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  h1Title: string;
  subtitle: string;
  heroImage?: string;
  heroImageAlt?: string;
  mainContent: React.ReactNode;
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  priceRange?: string;
  timeRange?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  showTestimonials?: boolean;
  breadcrumbs?: Array<{
    name: string;
    url?: string;
  }>;
}

const ServiceTemplate = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  h1Title,
  subtitle,
  heroImage,
  heroImageAlt,
  mainContent,
  benefits,
  features,
  priceRange,
  timeRange,
  faqs,
  showTestimonials = true,
  breadcrumbs,
}: ServiceTemplateProps) => {
  const handleWhatsApp = () => {
    const whatsappNumber = "393406970686";
    const message = encodeURIComponent(`Ciao! Vorrei informazioni su: ${h1Title}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = "tel:+393406970686";
  };

  // Generate Service and Product Schema for better SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": h1Title,
    "name": seoTitle,
    "description": seoDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://giolabriparazioni.it/#business",
      "name": "Giolab",
      "telephone": "+393406970686",
      "email": "giolabassemini@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Carmine 20",
        "addressLocality": "Assemini",
        "addressRegion": "CA",
        "postalCode": "09032",
        "addressCountry": "IT"
      },
      "url": "https://giolabriparazioni.it",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Assemini"
      },
      {
        "@type": "City",
        "name": "Cagliari"
      },
      {
        "@type": "State",
        "name": "Sardegna"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": h1Title,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": h1Title,
            "description": subtitle
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": priceRange || "Preventivo gratuito",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://giolabriparazioni.it',
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Product schema for services with specific pricing
  const productSchema = priceRange ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": h1Title,
    "description": seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "Giolab"
    },
    "offers": {
      "@type": "Offer",
      "price": priceRange,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://giolabriparazioni.it',
      "seller": {
        "@type": "LocalBusiness",
        "@id": "https://giolabriparazioni.it/#business"
      },
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  } : null;

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        structuredData={productSchema ? [serviceSchema, productSchema] : serviceSchema}
        faqData={faqs}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-background via-giolab-gray to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-giolab-blue">Home</Link></li>
                <li>/</li>
                <li><Link to="/#servizi" className="hover:text-giolab-blue">Servizi</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">{h1Title}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              {h1Title}
            </h1>
            
            {/* Rating Stars */}
            <div className="mb-6">
              <RatingStars 
                rating={4.9} 
                reviewCount={150} 
                size="lg"
                className="justify-start"
              />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-giolab-blue hover:bg-giolab-blue/90 text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Prenota su WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleCall}
                className="border-2 hover:border-giolab-blue hover:text-giolab-blue"
              >
                <Phone className="mr-2 h-5 w-5" />
                Chiama Ora
              </Button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {timeRange && (
                <Card className="border-2">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Clock className="h-8 w-8 text-giolab-blue flex-shrink-0" />
                    <div>
                      <div className="font-bold text-sm">Tempi</div>
                      <div className="text-sm text-muted-foreground">{timeRange}</div>
                    </div>
                  </CardContent>
                </Card>
              )}
              <Card className="border-2">
                <CardContent className="p-4 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-giolab-blue flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Garanzia</div>
                    <div className="text-sm text-muted-foreground">12 mesi</div>
                  </div>
                </CardContent>
              </Card>
              {priceRange && (
                <Card className="border-2">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="h-8 w-8 text-giolab-blue flex-shrink-0" />
                    <div>
                      <div className="font-bold text-sm">Preventivo</div>
                      <div className="text-sm text-muted-foreground">{priceRange}</div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            {mainContent}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-12 md:py-20 bg-giolab-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perché scegliere Giolab
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 hover:border-giolab-blue transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Cosa include il servizio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-giolab-blue/20 flex items-center justify-center mt-1">
                      <span className="text-giolab-blue font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-12 md:py-20 bg-giolab-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Domande Frequenti
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {showTestimonials && (
        <TestimonialsShowcase 
          limit={3}
          title="I Nostri Clienti Soddisfatti"
          subtitle="Leggi le recensioni di chi ha già scelto Giolab"
          variant="compact"
        />
      )}

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-giolab-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a riparare il tuo dispositivo?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contattaci ora per un preventivo gratuito. Siamo ad Assemini, pronti ad aiutarti!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-giolab-blue hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Prenota su WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="border-2 border-white text-white hover:bg-white hover:text-giolab-blue"
            >
              <Phone className="mr-2 h-5 w-5" />
              Chiama: 340 69 70 686
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default ServiceTemplate;
