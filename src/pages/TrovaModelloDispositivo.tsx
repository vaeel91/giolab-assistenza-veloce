import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Smartphone, Tablet, Laptop } from "lucide-react";

const brands = [
  {
    id: "iphone",
    name: "iPhone",
    description: "Scopri come identificare il modello del tuo iPhone",
    icon: Smartphone,
    path: "/trova-modello-dispositivo/iphone",
    color: "from-gray-900 to-gray-700"
  },
  {
    id: "samsung",
    name: "Samsung",
    description: "Guida completa per trovare il modello Samsung",
    icon: Smartphone,
    path: "/trova-modello-dispositivo/samsung",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    description: "Identifica facilmente il tuo dispositivo Xiaomi",
    icon: Smartphone,
    path: "/trova-modello-dispositivo/xiaomi",
    color: "from-orange-600 to-orange-400"
  },
  {
    id: "oppo",
    name: "OPPO",
    description: "Trova il codice modello del tuo OPPO",
    icon: Smartphone,
    path: "/trova-modello-dispositivo/oppo",
    color: "from-green-600 to-green-400"
  },
  {
    id: "huawei",
    name: "Huawei",
    description: "Guida per dispositivi Huawei e Honor",
    icon: Smartphone,
    path: "/trova-modello-dispositivo/huawei",
    color: "from-red-600 to-red-400"
  },
  {
    id: "ipad",
    name: "iPad",
    description: "Identifica il modello del tuo iPad",
    icon: Tablet,
    path: "/trova-modello-dispositivo/ipad",
    color: "from-purple-600 to-purple-400"
  },
  {
    id: "macbook",
    name: "MacBook",
    description: "Trova il modello esatto del tuo Mac",
    icon: Laptop,
    path: "/trova-modello-dispositivo/macbook",
    color: "from-gray-800 to-gray-600"
  }
];

const TrovaModelloDispositivo = () => {
  return (
    <>
      <SEOHead
        title="Trova Modello Dispositivo - Giolab Assemini"
        description="Guida per identificare modello iPhone, Samsung, Xiaomi, iPad, MacBook. GioLab assistenza Assemini. ☎️ 340 69 70 686."
        ogUrl="https://giolabriparazioni.it/trova-modello-dispositivo"
        ogImage="https://giolabriparazioni.it/og-images/codice-modello-dispositivo.jpg"
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Come trovare il codice modello del tuo dispositivo
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Seleziona il brand del tuo dispositivo per scoprire dove trovare il codice modello esatto. 
                Guide complete e aggiornate per ogni marca, anche se il dispositivo non si accende.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                <strong>GioLab</strong> – Centro Assistenza ad Assemini (Cagliari)
              </p>
            </div>

            {/* Brand Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {brands.map((brand) => {
                const Icon = brand.icon;
                return (
                  <Link key={brand.id} to={brand.path}>
                    <Card className="group h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {brand.description}
                        </p>
                        <span className="inline-block text-primary font-semibold group-hover:underline">
                          Apri guida →
                        </span>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* CTA Section */}
            <Card className="bg-[#F8F6F0] border-0 p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Hai bisogno di assistenza?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Se non riesci a identificare il modello del tuo dispositivo o hai bisogno di una riparazione, 
                  contatta il nostro centro assistenza ad Assemini.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/393406970686" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                  >
                    Contattaci su WhatsApp
                  </a>
                  <Link 
                    to="/contatti"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Vai ai Contatti
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TrovaModelloDispositivo;
