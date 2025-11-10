import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const whatsappNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Vorrei richiedere informazioni sui vostri servizi.");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dove Siamo",
      content: "Via Carmine 20A, Assemini (CA)",
      action: () => window.open("https://maps.google.com/?q=Via+Carmine+20A+Assemini+CA", "_blank"),
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "340 69 70 686",
      action: () => (window.location.href = "tel:+393406970686"),
    },
    {
      icon: Mail,
      title: "Email",
      content: "giolabassemini@gmail.com",
      action: () => (window.location.href = "mailto:giolabassemini@gmail.com"),
    },
    {
      icon: Clock,
      title: "Orari",
      content: "Lun-Sab: 9:00-13:00 / 16:00-19:30",
      action: null,
    },
  ];

  return (
    <section id="contatti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Contattaci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siamo qui per aiutarti. Richiedi un preventivo gratuito o prenota la tua riparazione
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-2 hover:border-giolab-blue transition-all duration-300 ${
                  info.action ? "cursor-pointer hover:shadow-lg" : ""
                }`}
                onClick={info.action || undefined}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-giolab-blue/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-giolab-blue" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-br from-giolab-blue to-giolab-blue-light rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Prenota la tua riparazione oggi</h3>
            <p className="text-lg mb-8 opacity-90">Preventivo gratuito e senza impegno in pochi minuti</p>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="bg-white text-giolab-blue hover:bg-white/90 border-0 text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-transform"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contattaci su WhatsApp
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-12 flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2"
              onClick={() => window.open("https://instagram.com/giolab_iphonefix", "_blank")}
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2"
              onClick={() => window.open("https://facebook.com/giolab", "_blank")}
            >
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
