import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const whatsappNumber = "393406970686";
  const whatsappMessage = encodeURIComponent("Ciao! Vorrei richiedere informazioni sui vostri servizi.");

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dove Siamo",
      content: "Via Carmine 20A, Assemini (CA)",
      action: () => window.open("https://maps.google.com/?q=Via+Carmine+20A+Assemini+CA", "_blank", "noopener,noreferrer"),
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
    <section id="contatti" className="py-4 md:py-6 bg-background h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3 md:mb-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Contattaci</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border hover:border-giolab-blue transition-all duration-300 ${
                  info.action ? "cursor-pointer" : ""
                }`}
                onClick={info.action || undefined}
              >
                <CardContent className="pt-3 p-2 md:p-3 text-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-giolab-blue/10 flex items-center justify-center mx-auto mb-2">
                    <info.icon className="h-4 w-4 md:h-5 md:w-5 text-giolab-blue" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-foreground mb-1">{info.title}</h3>
                  <p className="text-xs text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA section */}
          <div className="bg-gradient-to-br from-giolab-blue to-giolab-blue-light rounded-2xl p-4 md:p-6 text-center text-white shadow-xl">
            <h3 className="text-base md:text-2xl font-bold mb-2">Prenota la tua riparazione</h3>
            <p className="text-xs md:text-sm mb-3 md:mb-4 opacity-90">Preventivo gratuito e senza impegno</p>
            <Button
              size="sm"
              variant="outline"
              onClick={handleWhatsApp}
              className="bg-white text-giolab-blue hover:bg-white/90 border-0 text-xs md:text-sm px-4 py-2 h-auto font-semibold"
            >
              <MessageCircle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Contattaci su WhatsApp
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-3 md:mt-4 flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border"
              onClick={() => window.open("https://instagram.com/giolab_iphonefix", "_blank", "noopener,noreferrer")}
            >
              <Instagram className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border"
              onClick={() => window.open("https://facebook.com/giolab", "_blank", "noopener,noreferrer")}
            >
              <Facebook className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
