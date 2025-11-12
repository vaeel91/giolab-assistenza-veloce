import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SocialShare from "@/components/SocialShare";
import ReadingProgress from "@/components/ReadingProgress";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ps5CoolingSystem from "@/assets/blog/ps5-cooling-system.jpg";
import ps5VerticalVsHorizontal from "@/assets/blog/ps5-vertical-vs-horizontal.jpg";
import ps5VerticalPosition from "@/assets/blog/ps5-vertical-position.jpg";
import ps5HorizontalPosition from "@/assets/blog/ps5-horizontal-position.jpg";

const PS5VerticaleOrizzontale = () => {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <SEOHead
        title="PS5 verticale o orizzontale? Ecco la posizione migliore | GioLab Assemini"
        description="Scopri se è meglio tenere la PS5 in verticale o in orizzontale. Ti spieghiamo i rischi del metallo liquido e come posizionarla nel modo più sicuro. GioLab – Assemini (Cagliari)."
        keywords="ps5 verticale o orizzontale, ps5 metallo liquido, posizione ps5 corretta, assistenza ps5 Assemini, riparazione ps5 Cagliari, manutenzione ps5, centro assistenza console Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Blog", url: "https://giolabriparazioni.it/blog" },
          { name: "PS5 verticale o orizzontale" }
        ]}
        articleData={{
          headline: "PS5: meglio in verticale o in orizzontale? Ecco cosa sapere sul metallo liquido",
          description: "Guida completa per capire se è meglio posizionare la PS5 in verticale o orizzontale, i rischi del metallo liquido e come prevenire danni alla console.",
          author: "Giolab Team",
          datePublished: "2025-01-26",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Tecnologia"
        }}
      />
      <Header />
      
      <article className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6 text-sm">
              <ol className="flex items-center gap-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-giolab-blue">Home</Link></li>
                <li>/</li>
                <li><Link to="/blog" className="hover:text-giolab-blue">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground font-medium">PS5 verticale o orizzontale</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Tecnologia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                26 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                9 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              PS5: meglio in verticale o in orizzontale? Ecco cosa sapere sul metallo liquido
            </h1>

            <img 
              src={ps5VerticalVsHorizontal}
              alt="PlayStation 5 in posizione verticale e orizzontale a confronto"
              className="w-full rounded-2xl shadow-lg mb-12"
            />

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Quando acquisti una <strong className="text-foreground">PlayStation 5</strong>, una delle prime domande che ti poni è: <strong className="text-foreground">"La tengo in verticale o in orizzontale?"</strong> La risposta non è solo una questione estetica, ma riguarda la <strong className="text-giolab-blue">sicurezza e la durata dei componenti interni</strong>, in particolare il metallo liquido utilizzato nel sistema di raffreddamento del processore.
              </p>
              <p className="leading-relaxed">
                In questo articolo, <strong className="text-foreground">GioLab – Centro Assistenza Console, Smartphone e PC ad Assemini (Cagliari)</strong> ti spiega tutto quello che devi sapere per posizionare correttamente la tua PS5 e preservarla nel tempo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Come funziona il sistema di raffreddamento della PS5
              </h2>
              
              <img 
                src={ps5CoolingSystem}
                alt="Sistema di raffreddamento PS5 con camera di vapore e metallo liquido"
                className="w-full rounded-2xl shadow-lg my-8"
              />

              <p className="leading-relaxed">
                Il sistema di raffreddamento della <strong className="text-foreground">PlayStation 5</strong> è uno dei più avanzati mai implementati in una console. Sony ha progettato un sistema che combina:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Una grande ventola radiale</strong> da 120mm che aspira aria ed espelle il calore</li>
                <li><strong className="text-foreground">Una camera di vapore (heatpipe)</strong> che distribuisce uniformemente il calore</li>
                <li><strong className="text-foreground">Metallo liquido</strong> come interfaccia termica tra CPU e dissipatore</li>
              </ul>

              <p className="leading-relaxed mt-4">
                Il <strong className="text-giolab-blue">metallo liquido</strong> è una lega metallica liquida a temperatura ambiente, con <strong className="text-foreground">conducibilità termica eccezionale</strong> (fino a 10 volte superiore alla pasta termica tradizionale). Questa caratteristica permette alla PS5 di rimanere fresca anche durante sessioni di gioco intense.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-sm leading-relaxed text-gray-800">
                  <strong>⚠️ Attenzione:</strong> Il metallo liquido è anche <strong>conduttivo elettricamente</strong>. Se si sposta dalla sua posizione originale, può entrare in contatto con componenti della scheda madre e causare cortocircuiti permanenti.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Rischi del posizionamento verticale
              </h2>
              <p className="leading-relaxed">
                Tenere la <strong className="text-foreground">PS5 in posizione verticale</strong> per lunghi periodi può comportare alcuni rischi legati al metallo liquido. Ecco cosa può accadere:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Effetto della gravità sul metallo liquido
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Spostamento graduale verso il basso</strong>: la forza di gravità può far scivolare lentamente il metallo liquido</li>
                <li><strong>Perdita di contatto con la CPU</strong>: se il metallo liquido si concentra in una zona, alcune aree del processore non vengono più raffreddate efficacemente</li>
                <li><strong>Peggioramento del raffreddamento</strong>: temperature più elevate e possibili thermal throttling (riduzione prestazioni per proteggere la CPU)</li>
                <li><strong>Potenziale contaminazione della scheda madre</strong>: nei casi più gravi, il metallo liquido può fuoriuscire e danneggiare irreparabilmente la console</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                <p className="text-sm leading-relaxed text-gray-800">
                  <strong>🔴 Importante:</strong> Questi problemi non si manifestano immediatamente, ma il rischio aumenta con il tempo e l'uso intenso della console, specialmente in caso di urti o movimenti bruschi.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                PS5 verticale: Pro e Contro
              </h2>

              <img 
                src={ps5VerticalPosition}
                alt="PlayStation 5 in posizione verticale su scrivania moderna"
                className="w-full rounded-2xl shadow-lg my-8"
              />

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-giolab-blue/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-foreground">✅ Pro</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-foreground">❌ Contro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Aspetto più elegante e moderno</td>
                      <td className="border border-gray-300 px-4 py-3">Maggiore rischio di spostamento del metallo liquido</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Occupa meno spazio in larghezza</td>
                      <td className="border border-gray-300 px-4 py-3">Potenziale perdita di dissipazione ottimale</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Design iconico PlayStation</td>
                      <td className="border border-gray-300 px-4 py-3">Accumulo di polvere sul fondo</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Migliore per spazi ristretti</td>
                      <td className="border border-gray-300 px-4 py-3">Meno stabile in caso di urti</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                PS5 orizzontale: Pro e Contro
              </h2>

              <img 
                src={ps5HorizontalPosition}
                alt="PlayStation 5 in posizione orizzontale su scrivania con buona ventilazione"
                className="w-full rounded-2xl shadow-lg my-8"
              />

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-giolab-blue/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-foreground">✅ Pro</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-foreground">❌ Contro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Posizione più stabile e sicura</td>
                      <td className="border border-gray-300 px-4 py-3">Occupa più spazio in larghezza</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Minore rischio di fuoriuscita del metallo liquido</td>
                      <td className="border border-gray-300 px-4 py-3">Necessita di superficie ben ventilata</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Migliore equilibrio termico nel lungo periodo</td>
                      <td className="border border-gray-300 px-4 py-3">Estetica meno d'impatto</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Metallo liquido distribuito uniformemente</td>
                      <td className="border border-gray-300 px-4 py-3">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                💡 Raccomandazione di GioLab
              </h2>
              <div className="bg-blue-50 border-l-4 border-giolab-blue p-6 my-6">
                <p className="leading-relaxed text-gray-800 mb-4">
                  In base alla nostra <strong>esperienza di laboratorio</strong> con centinaia di console riparate, la nostra raccomandazione è chiara:
                </p>
                <p className="leading-relaxed text-gray-800 font-bold text-lg mb-4">
                  🔵 La posizione orizzontale è la più sicura nel lungo periodo.
                </p>
                <p className="leading-relaxed text-gray-800 mb-2">Inoltre, è fondamentale:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800">
                  <li>Lasciare <strong>almeno 10 cm di spazio</strong> attorno alla console per la ventilazione</li>
                  <li><strong>Evitare di spostarla o inclinarla</strong> durante l'uso</li>
                  <li><strong>Pulire regolarmente</strong> le prese d'aria con aria compressa</li>
                  <li>Non coprire mai la console mentre è accesa</li>
                </ul>
              </div>

              <div className="bg-gray-100 border-l-4 border-gray-500 p-6 my-8">
                <p className="leading-relaxed text-gray-800 italic">
                  <strong>"In laboratorio abbiamo visto diversi casi di danni da metallo liquido su PS5 tenute in verticale per mesi. Meglio prevenire: posizionala in modo stabile e lascia respirare la tua console."</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">— Team Giolab, Centro Assistenza Assemini</p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                🔧 Servizi GioLab per la tua PS5
              </h2>
              <p className="leading-relaxed">
                Se la tua <strong className="text-foreground">PlayStation 5</strong> mostra segni di surriscaldamento o problemi di prestazioni, <strong className="text-giolab-blue">Giolab ad Assemini</strong> offre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pulizia interna e manutenzione termica completa</strong></li>
                <li><strong>Sostituzione o riapplicazione del metallo liquido</strong></li>
                <li><strong>Riparazione porta HDMI e problemi di alimentazione</strong></li>
                <li><strong>Upgrade SSD e test di raffreddamento</strong></li>
                <li><strong>Diagnosi gratuita</strong> per identificare il problema</li>
              </ul>

              <div className="bg-gradient-to-r from-giolab-blue/5 to-giolab-blue-light/5 border-2 border-giolab-blue/20 rounded-xl p-6 my-8">
                <p className="leading-relaxed font-semibold text-foreground mb-2">
                  📍 <strong>Via Carmine 20 – Assemini (Cagliari)</strong>
                </p>
                <p className="leading-relaxed text-muted-foreground mb-2">
                  💬 <strong>WhatsApp:</strong> 340 69 70 686
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  ⏰ <strong>Orari:</strong> Lun-Ven 9:00-13:00 / 15:30-19:30 | Sab 9:00-13:00
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                La <strong className="text-foreground">PlayStation 5 funziona in entrambe le posizioni</strong>, ma la posizione <strong className="text-giolab-blue">orizzontale è più sicura nel lungo periodo</strong>. Il metallo liquido garantisce ottime prestazioni di raffreddamento, ma va gestito con attenzione per evitare spostamenti che potrebbero compromettere la console.
              </p>
              <p className="leading-relaxed mt-4">
                Una corretta manutenzione periodica e il posizionamento ottimale prevengono problemi di surriscaldamento e prolungano la vita della tua PS5.
              </p>
              <p className="leading-relaxed mt-4 font-semibold text-giolab-blue text-lg">
                Da GioLab ad Assemini, siamo specializzati nella manutenzione e riparazione PS5. Ti aiutiamo a mantenerla efficiente, silenziosa e sicura.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Prenota una manutenzione completa per la tua PS5
              </h3>
              <p className="text-muted-foreground mb-6">
                Diagnosi gratuita, pulizia interna professionale e riapplicazione metallo liquido. Mantieni la tua console al top!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Vorrei prenotare una manutenzione per la mia PS5");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Prenota Manutenzione PS5
                </Button>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12">
              <SocialShare
                url="/blog/ps5-verticale-o-orizzontale"
                title="PS5: meglio in verticale o in orizzontale? Ecco cosa sapere sul metallo liquido"
                description="Scopri se è meglio tenere la PS5 in verticale o orizzontale e i rischi del metallo liquido. Guida completa da GioLab Assemini."
              />
            </div>

            <div className="mt-12">
              <Link to="/blog">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Torna al Blog
                </Button>
              </Link>
            </div>

            <RelatedArticles 
              currentSlug="ps5-verticale-o-orizzontale"
              category="Tecnologia"
              maxArticles={3}
            />
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
      <BlogNavigation />
    </div>
  );
};

export default PS5VerticaleOrizzontale;