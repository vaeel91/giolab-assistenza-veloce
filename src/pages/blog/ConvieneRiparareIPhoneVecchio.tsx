import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConvieneRiparareIPhoneVecchio = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Conviene Riparare un iPhone Vecchio o Comprarne uno Ricondizionato? | Giolab"
        description="Riparare o sostituire un iPhone vecchio? Scopri quando conviene riparare e quando è meglio comprare un iPhone ricondizionato. Guida completa da Giolab Assemini."
        keywords="iPhone ricondizionato Assemini, conviene riparare iPhone, iPhone usato vs riparazione, acquisto iPhone ricondizionato Cagliari"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Riparare o comprare iPhone ricondizionato" }
        ]}
        articleData={{
          headline: "Conviene riparare un iPhone vecchio o comprarne uno ricondizionato?",
          description: "Analisi completa per decidere se riparare il tuo iPhone vecchio o comprarne uno ricondizionato. Tutti i fattori da considerare.",
          author: "Giolab Team",
          datePublished: "2025-01-20",
          image: typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
          category: "Guide"
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
                <li className="text-foreground font-medium">Riparare o comprare ricondizionato</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                20 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Conviene riparare un iPhone vecchio o comprarne uno ricondizionato?
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🤔</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hai un <strong className="text-foreground">iPhone vecchio danneggiato</strong> e ti stai chiedendo se conviene ripararlo o comprarne uno ricondizionato? È una domanda che molti utenti si pongono, soprattutto quando il costo della riparazione sembra elevato. In questo articolo ti aiuteremo a prendere la decisione migliore analizzando tutti i fattori da considerare, dal valore dell'iPhone al tipo di danno, fino al budget disponibile.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando Conviene Riparare l'iPhone
              </h2>
              <p className="leading-relaxed">
                Riparare il tuo iPhone attuale è spesso la <strong className="text-giolab-blue">scelta più conveniente</strong> in questi casi:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Il Danno è Limitato e il Costo di Riparazione è Basso
              </h3>
              <p className="leading-relaxed">
                Se il problema è una <strong className="text-foreground">batteria scarica</strong>, uno <Link to="/blog/cosa-fare-iphone-caduto-schermo-crepato" className="text-giolab-blue hover:underline">schermo crepato</Link> o un vetro rotto, la riparazione costa molto meno di un iPhone ricondizionato. Ad esempio:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sostituzione batteria: 50-80€</li>
                <li>Rigenerazione vetro: 80-150€</li>
                <li>Sostituzione display: 100-250€ (a seconda del modello)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Un iPhone 11 ricondizionato costa minimo 300-400€, quindi se il tuo iPhone funziona bene a parte un componente danneggiato, <strong className="text-foreground">riparare è decisamente più conveniente</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Hai un iPhone Recente (iPhone 12, 13, 14, 15)
              </h3>
              <p className="leading-relaxed">
                Se possiedi un <strong className="text-foreground">iPhone degli ultimi 3-4 anni</strong>, ha senso ripararlo piuttosto che sostituirlo. Questi modelli hanno ancora ottime prestazioni, ricevono aggiornamenti iOS per anni e mantengono un buon valore di mercato.
              </p>
              <p className="leading-relaxed">
                Investire 150-200€ in una riparazione su un iPhone 13 o 14 è molto più sensato che spendere 500-800€ per un ricondizionato della stessa generazione.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. I Tuoi Dati e le Tue Impostazioni Sono Preziosi
              </h3>
              <p className="leading-relaxed">
                Riparare l'iPhone significa <strong className="text-foreground">mantenere tutti i tuoi dati, app, foto e configurazioni</strong> senza dover fare backup e ripristini. Se hai impostazioni personalizzate, abbonamenti o configurazioni complesse, evitare il trasferimento dati può farti risparmiare tempo e stress.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Quando Conviene Comprare un iPhone Ricondizionato
              </h2>
              <p className="leading-relaxed">
                Acquistare un <strong className="text-foreground">iPhone ricondizionato ad Assemini o Cagliari</strong> diventa la scelta migliore in questi casi:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Il Costo di Riparazione Supera il 50% del Valore dell'iPhone
              </h3>
              <p className="leading-relaxed">
                Se possiedi un <strong className="text-foreground">iPhone 8, X o XS</strong> e la riparazione costerebbe 200-300€, mentre un iPhone ricondizionato dello stesso modello costa 250-350€, allora conviene comprare il ricondizionato. Avrai un dispositivo completamente funzionante con garanzia.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Hai Danni Multipli o Problemi alla Scheda Madre
              </h3>
              <p className="leading-relaxed">
                Se il tuo iPhone ha <strong className="text-foreground">più componenti danneggiati</strong> (schermo + batteria + fotocamera) o ha problemi alla <Link to="/blog/microsaldature-scheda-madre" className="text-giolab-blue hover:underline">scheda madre</Link>, il costo totale della riparazione potrebbe diventare proibitivo. In questi casi, sostituire il dispositivo è più ragionevole.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Vuoi Fare un Upgrade di Modello
              </h3>
              <p className="leading-relaxed">
                Se hai un <strong className="text-foreground">iPhone 7, 8 o X</strong> e vuoi passare a un modello più recente senza spendere cifre elevate, un iPhone 12 o 13 ricondizionato è un'ottima scelta. Con 400-600€ puoi avere un dispositivo molto più potente e con supporto iOS garantito per anni.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Confronto Costi: Riparazione vs Ricondizionato
              </h2>
              <p className="leading-relaxed">
                Ecco una tabella di confronto per aiutarti a decidere:
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-2 text-left">Modello iPhone</th>
                      <th className="border border-border px-4 py-2 text-left">Costo Riparazione Display</th>
                      <th className="border border-border px-4 py-2 text-left">Prezzo Ricondizionato</th>
                      <th className="border border-border px-4 py-2 text-left">Consiglio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">iPhone 8</td>
                      <td className="border border-border px-4 py-2">80-120€</td>
                      <td className="border border-border px-4 py-2">180-250€</td>
                      <td className="border border-border px-4 py-2">Riparare se danno singolo</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">iPhone X/XS</td>
                      <td className="border border-border px-4 py-2">120-180€</td>
                      <td className="border border-border px-4 py-2">250-350€</td>
                      <td className="border border-border px-4 py-2">Riparare</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">iPhone 11</td>
                      <td className="border border-border px-4 py-2">130-200€</td>
                      <td className="border border-border px-4 py-2">350-450€</td>
                      <td className="border border-border px-4 py-2">Riparare</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">iPhone 12/13</td>
                      <td className="border border-border px-4 py-2">180-250€</td>
                      <td className="border border-border px-4 py-2">500-700€</td>
                      <td className="border border-border px-4 py-2">Decisamente riparare</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Cosa Verificare Prima di Comprare un iPhone Ricondizionato
              </h2>
              <p className="leading-relaxed">
                Se decidi di acquistare un ricondizionato, assicurati che:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Abbia una garanzia</strong> di almeno 12 mesi</li>
                <li><strong>La batteria sia stata sostituita</strong> o abbia almeno l'85% di salute</li>
                <li><strong>Non sia bloccato su account iCloud</strong> precedenti</li>
                <li><strong>Lo schermo sia originale o di alta qualità</strong></li>
                <li><strong>Provenga da un rivenditore affidabile</strong></li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Perché Scegliere Giolab per la Riparazione iPhone
              </h2>
              <p className="leading-relaxed">
                Se decidi di riparare il tuo iPhone, <strong className="text-giolab-blue">Giolab ad Assemini</strong> ti offre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><Link to="/blog/riparazione-iphone-1-ora-giolab" className="text-giolab-blue hover:underline">Riparazioni rapide in 1 ora</Link> per la maggior parte degli interventi</li>
                <li>Ricambi certificati con garanzia 12 mesi</li>
                <li>Preventivi gratuiti e trasparenti</li>
                <li>Possibilità di installare <strong>batterie maggiorate</strong> per autonomia extra</li>
                <li>Oltre 10 anni di esperienza nel settore</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione: La Regola Generale
              </h2>
              <p className="leading-relaxed">
                Ecco la regola da seguire: <strong className="text-foreground">se il costo della riparazione è inferiore al 40-50% del valore di un iPhone ricondizionato equivalente, conviene riparare</strong>. Altrimenti, valuta l'acquisto di un ricondizionato o un upgrade a un modello superiore.
              </p>
              <p className="leading-relaxed">
                Vieni da Giolab per una <strong className="text-giolab-blue">consulenza gratuita</strong> e un preventivo: ti aiuteremo a prendere la decisione migliore per le tue esigenze e il tuo budget!
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Non sai se riparare o sostituire il tuo iPhone?
              </h3>
              <p className="text-muted-foreground mb-6">
                Vieni da Giolab per una consulenza gratuita! Ti aiuteremo a scegliere la soluzione migliore.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Vorrei una consulenza per decidere se riparare il mio iPhone");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Richiedi Consulenza Gratuita
                </Button>
              </div>
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
              currentSlug="conviene-riparare-iphone-vecchio"
              category="Guide"
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

export default ConvieneRiparareIPhoneVecchio;