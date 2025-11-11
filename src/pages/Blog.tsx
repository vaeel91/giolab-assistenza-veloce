import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "come-capire-batteria-iphone-da-sostituire",
    title: "Come capire se la batteria del tuo iPhone va sostituita",
    description: "Scopri i segnali che indicano quando è il momento di sostituire la batteria del tuo iPhone. Guida completa con consigli pratici.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Guide",
    image: "🔋"
  },
  {
    slug: "vantaggi-batteria-maggiorata-iphone",
    title: "Vantaggi della batteria maggiorata per iPhone: più autonomia, meno stress",
    description: "Tutto quello che devi sapere sulle batterie maggiorate per iPhone: vantaggi, autonomia extra e perché sceglierle.",
    date: "2025-01-14",
    readTime: "6 min",
    category: "Tecnologia",
    image: "⚡"
  },
  {
    slug: "riparazione-iphone-1-ora-giolab",
    title: "Riparazione iPhone in 1 ora: come funziona il servizio Giolab",
    description: "Scopri come riusciamo a riparare il tuo iPhone in tempi record senza compromettere la qualità. Il nostro metodo spiegato passo passo.",
    date: "2025-01-13",
    readTime: "4 min",
    category: "Servizi",
    image: "⏱️"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Blog Giolab | Guide e Consigli su Riparazione iPhone e Smartphone | Assemini"
        description="Articoli, guide e consigli su riparazione iPhone, batterie maggiorate, manutenzione smartphone e molto altro. Blog del centro assistenza Giolab di Assemini."
        keywords="blog riparazione iPhone, guide iPhone, consigli batteria iPhone, manutenzione smartphone, assistenza iPhone Assemini"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-background via-giolab-gray to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Blog Giolab
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Guide, consigli e approfondimenti su riparazione iPhone, batterie maggiorate, manutenzione e assistenza smartphone ad Assemini e Cagliari.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full border-2 hover:border-giolab-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
                    <CardHeader>
                      <div className="w-full h-48 rounded-lg bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 flex items-center justify-center mb-4 group-hover:from-giolab-blue/20 group-hover:to-giolab-blue-light/20 transition-all">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="px-2 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('it-IT')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-giolab-blue transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {post.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-giolab-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hai bisogno di assistenza per il tuo iPhone?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Vieni a trovarci ad Assemini o contattaci per un preventivo gratuito!
          </p>
          <Link to="/#contatti">
            <button className="bg-white text-giolab-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Contattaci Ora
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Blog;
