import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CalendlyBooking from "@/components/CalendlyBooking";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, getPhoneLink } from "@/config/businessInfo";

const Prenota = () => {
  const benefits = [
    "Conferma immediata via email",
    "Promemoria automatico 24h prima",
    "Possibilità di riprogrammare",
    "Nessun tempo di attesa in negozio",
  ];

  return (
    <>
      <SEOHead
        title="Prenota Riparazione Smartphone | Giolab Assemini"
        description="Prenota online la tua riparazione iPhone e smartphone ad Assemini. Scegli data e ora, conferma immediata. Servizio rapido e professionale."
        keywords="prenota riparazione iPhone, appuntamento riparazione smartphone, prenotazione Giolab Assemini"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prenota la Tua Riparazione
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scegli data e ora che preferisci. Riceverai conferma immediata e promemoria automatico.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Vantaggi */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Vantaggi della Prenotazione
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-giolab-blue mt-0.5">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Info Negozio */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-lg font-semibold">Dove Siamo</h2>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-giolab-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{BUSINESS_INFO.name}</p>
                      <p className="text-sm text-muted-foreground">{BUSINESS_INFO.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-giolab-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Orari di Apertura</p>
                      <p className="text-sm text-muted-foreground">{BUSINESS_INFO.openingHours.display.weekdays}</p>
                      <p className="text-sm text-muted-foreground">{BUSINESS_INFO.openingHours.display.saturday}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-giolab-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefono</p>
                      <a 
                        href={getPhoneLink()} 
                        className="text-sm text-giolab-blue hover:underline"
                      >
                        {BUSINESS_INFO.contacts.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Note */}
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-amber-800">
                    <strong>Nota:</strong> La prenotazione non richiede pagamento anticipato. 
                    Il preventivo verrà fornito al momento della diagnosi in negozio.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Calendly Widget */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <CalendlyBooking mode="inline" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Prenota;
