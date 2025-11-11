import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErroriPostSostituzioneDisplay = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="I 5 Errori Più Comuni dopo la Sostituzione del Display iPhone | Giolab Assemini"
        description="Scopri i 5 errori più comuni che gli utenti commettono dopo aver sostituito il display dell'iPhone e come evitarli. Consigli pratici da Giolab."
        keywords="display iPhone problemi post riparazione, vetro nuovo non funziona, errori sostituzione schermo iPhone, consigli display iPhone Assemini"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Errori post sostituzione display" }
        ]}
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
                <li className="text-foreground font-medium">Errori post sostituzione display</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                24 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                6 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              I 5 errori più comuni dopo la sostituzione del display iPhone
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">⚠️</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hai appena <strong className="text-foreground">sostituito il display del tuo iPhone</strong> e vuoi che duri il più a lungo possibile? Molti utenti commettono errori banali subito dopo la riparazione che compromettono la qualità e la durata del nuovo schermo. In questo articolo ti spieghiamo i <strong className="text-giolab-blue">5 errori più comuni</strong> e come evitarli per mantenere il tuo iPhone perfetto.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                1. Non Applicare (o Applicare Male) la Pellicola Protettiva
              </h2>
              <p className="leading-relaxed">
                Uno degli <strong className="text-foreground">errori più frequenti</strong> è pensare che il nuovo vetro sia già protetto. Anche se hai sostituito il display con uno di alta qualità, <strong className="text-foreground">il vetro nuovo è comunque soggetto a graffi</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Cosa fare
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Applica subito una <strong>pellicola in vetro temperato</strong> di qualità</li>
                <li>Pulisci accuratamente lo schermo prima di applicarla</li>
                <li>Rimuovi tutte le bolle d'aria con una spatola morbida</li>
                <li>Evita pellicole troppo economiche che non offrono protezione reale</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                2. Esporre Subito l'iPhone all'Acqua o all'Umidità
              </h2>
              <p className="leading-relaxed">
                Anche se molti iPhone sono <strong className="text-foreground">certificati IP68</strong>, dopo una sostituzione del display è fondamentale <strong className="text-giolab-blue">evitare l'acqua per almeno 24-48 ore</strong>.
              </p>
              <p className="leading-relaxed">
                Durante la riparazione, le <strong className="text-foreground">guarnizioni impermeabili</strong> vengono rimosse e rimontate. Servono alcune ore affinché gli adesivi speciali facciano presa correttamente.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Cosa evitare nelle prime 48 ore
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Doccia con l'iPhone in bagno (vapore)</li>
                <li>Lavare i piatti o fare attività vicino all'acqua</li>
                <li>Andare in piscina o al mare</li>
                <li>Esposizione a pioggia intensa</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                3. Non Calibrare il Touch dopo la Sostituzione
              </h2>
              <p className="leading-relaxed">
                Anche se il nuovo display funziona correttamente, potrebbe necessitare di una <strong className="text-foreground">calibrazione del touch</strong> per una precisione perfetta.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Come calibrare il touch su iPhone
              </h3>
              <p className="leading-relaxed">
                Su iPhone non esiste una calibrazione manuale come su Android, ma puoi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Riavviare l'iPhone</strong> dopo la sostituzione</li>
                <li><strong>Testare il touch</strong> aprendo note e scrivendo in tutti gli angoli</li>
                <li><strong>Verificare i tap e gli swipe</strong> in tutte le aree dello schermo</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Se noti <strong className="text-foreground">zone morte o touch impreciso</strong>, contatta immediatamente il centro assistenza. Potrebbe essere un problema del connettore o del display stesso.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                4. Usare Custodie Troppo Strette Subito Dopo la Riparazione
              </h2>
              <p className="leading-relaxed">
                Molti utenti rimontano subito la custodia, ma se questa è <strong className="text-foreground">troppo rigida o stretta</strong>, può esercitare pressione sul nuovo display e causare:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Distacco parziale del vetro</li>
                <li>Infiltrazioni di polvere</li>
                <li>Pressione sui bordi che compromette la tenuta</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Consiglio Giolab
              </h3>
              <p className="leading-relaxed">
                Usa una <strong className="text-giolab-blue">custodia morbida in silicone o TPU</strong> per i primi giorni. Evita cover troppo rigide, magnetiche o con chiusura a pressione fino a quando gli adesivi non sono completamente asciutti.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                5. Non Verificare le Funzionalità Subito Dopo la Riparazione
              </h2>
              <p className="leading-relaxed">
                Uno degli <strong className="text-foreground">errori più gravi</strong> è uscire dal centro assistenza senza aver testato tutte le funzioni dello schermo. Molti problemi sono <strong className="text-foreground">evidenti solo dopo alcuni minuti di utilizzo</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Cosa testare immediatamente
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Touch in tutti gli angoli</strong>: apri note e prova a scrivere ovunque</li>
                <li><strong>Face ID o Touch ID</strong>: verifica che funzionino correttamente</li>
                <li><strong>Sensore di prossimità</strong>: fai una telefonata e copri lo schermo, deve spegnersi</li>
                <li><strong>Luminosità e colori</strong>: controlla che siano uniformi</li>
                <li><strong>True Tone e Night Shift</strong>: verifica che siano attivi</li>
                <li><strong>3D Touch o Haptic Touch</strong>: testa la pressione prolungata sulle icone</li>
              </ul>

              <p className="leading-relaxed mt-4">
                <strong className="text-giolab-blue">Da Giolab</strong>, testiamo sempre insieme al cliente ogni funzione prima della consegna. Se noti qualcosa di anomalo a casa, <Link to="/#contatti" className="text-giolab-blue hover:underline">contattaci subito</Link> entro le 24 ore.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Evitare questi <strong className="text-foreground">5 errori comuni</strong> ti permetterà di mantenere il tuo nuovo display in perfette condizioni più a lungo. Ricorda: la qualità della riparazione conta, ma anche <strong className="text-giolab-blue">la cura nelle prime ore dopo la sostituzione</strong> fa la differenza.
              </p>
              <p className="leading-relaxed mt-4">
                Se hai dubbi o problemi dopo la sostituzione del display, <strong className="text-foreground">Giolab ad Assemini</strong> offre supporto post-riparazione e garanzia 12 mesi su tutti i display sostituiti.
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hai sostituito il display e hai dubbi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Supporto post-riparazione e garanzia 12 mesi su tutte le sostituzioni display!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho sostituito il display e vorrei un controllo");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Contattaci per Supporto
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
              currentSlug="errori-post-sostituzione-display"
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

export default ErroriPostSostituzioneDisplay;
