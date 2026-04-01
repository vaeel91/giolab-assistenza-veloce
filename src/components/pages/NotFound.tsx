import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Wrench, BookOpen, Phone, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const quickLinks = [
    {
      to: "/",
      icon: Home,
      title: "Homepage",
      description: "Torna alla pagina principale"
    },
    {
      to: "/servizi",
      icon: Wrench,
      title: "Servizi",
      description: "Riparazioni iPhone, PC e console"
    },
    {
      to: "/blog",
      icon: BookOpen,
      title: "Blog",
      description: "Guide e articoli tecnici"
    },
    {
      to: "/contatti",
      icon: Phone,
      title: "Contatti",
      description: "Scrivici o chiamaci"
    }
  ];

  return (
    <>
      
      <Header />
      
      <main className="min-h-[70vh] pt-20 md:pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Error indicator */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pagina Non Trovata
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                La pagina che stai cercando potrebbe essere stata spostata, 
                rinominata o non esiste più. Prova a navigare usando i link qui sotto.
              </p>
            </div>

            {/* Quick navigation links */}
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {quickLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="group p-5 border rounded-xl hover:border-primary hover:shadow-md transition-all bg-card"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Back button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Torna Indietro
              </Button>
              <a href="/">
                <Button className="gap-2">
                  <Home className="h-4 w-4" />
                  Vai alla Homepage
                </Button>
              </a>
            </div>

            {/* Help text */}
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">
                Hai bisogno di assistenza?
              </h3>
              <p className="text-muted-foreground mb-4">
                Se cerchi informazioni su riparazioni iPhone, smartphone o PC, 
                contattaci direttamente:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:+393406970686" 
                  className="flex items-center justify-center gap-2 text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  340 69 70 686
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <a 
                  href="https://wa.me/393406970686" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
