import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogNavigation from "@/components/BlogNavigation";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrasferimentoDatiAndroidIPhone = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Trasferimento Dati da Android a iPhone e Viceversa: Guida Completa | Giolab"
        description="Guida completa per trasferire contatti, foto, WhatsApp e dati da Android a iPhone e viceversa. Metodi semplici e sicuri per non perdere nulla."
        keywords="trasferire dati Android iPhone, passaggio rubrica foto WhatsApp, cambio smartphone dati, migrare da Android a iPhone"
        breadcrumbs={[
          { name: "Home", url: "https://giolab.lovable.app/" },
          { name: "Blog", url: "https://giolab.lovable.app/blog" },
          { name: "Trasferimento dati Android iPhone" }
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
                <li className="text-foreground font-medium">Trasferimento dati Android iPhone</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-giolab-blue/10 text-giolab-blue rounded-full font-medium">
                Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                25 Gennaio 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                9 minuti di lettura
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Trasferimento dati da Android a iPhone e viceversa: guida semplice e completa
            </h1>

            <div className="w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br from-giolab-blue/20 to-giolab-blue-light/20 flex items-center justify-center mb-12">
              <span className="text-8xl">🔄</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Passare da <strong className="text-foreground">Android a iPhone</strong> (o viceversa) può sembrare complicato, ma con gli strumenti giusti è <strong className="text-giolab-blue">semplice e veloce</strong>. In questa guida completa ti spieghiamo passo dopo passo come trasferire contatti, foto, video, WhatsApp e tutti i tuoi dati importanti senza perdere nulla.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Da Android a iPhone: Metodo Ufficiale con "Passa a iOS"
              </h2>
              <p className="leading-relaxed">
                Apple ha creato l'app <strong className="text-foreground">Passa a iOS</strong> (Move to iOS) per rendere il trasferimento da Android a iPhone il più semplice possibile.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Cosa Trasferisce "Passa a iOS"
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contatti</strong></li>
                <li><strong>Messaggi SMS</strong> (non WhatsApp)</li>
                <li><strong>Foto e video</strong></li>
                <li><strong>Account email</strong></li>
                <li><strong>Calendari</strong></li>
                <li><strong>Segnalibri web</strong></li>
                <li><strong>App gratuite</strong> compatibili con iOS (vengono suggerite per il download)</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Come Funziona "Passa a iOS"
              </h3>
              <p className="leading-relaxed font-bold text-foreground">Passo 1: Prepara l'iPhone</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accendi il nuovo iPhone</li>
                <li>Durante la configurazione iniziale, arriva alla schermata <strong>"App e Dati"</strong></li>
                <li>Seleziona <strong>"Migra i dati da Android"</strong></li>
              </ul>

              <p className="leading-relaxed font-bold text-foreground mt-6">Passo 2: Installa "Passa a iOS" su Android</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Scarica l'app <strong>"Passa a iOS"</strong> dal Google Play Store</li>
                <li>Apri l'app e accetta i termini</li>
                <li>Tocca <strong>"Continua"</strong> e poi <strong>"Accetto"</strong></li>
              </ul>

              <p className="leading-relaxed font-bold text-foreground mt-6">Passo 3: Collega i Due Dispositivi</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sull'iPhone comparirà un <strong>codice numerico</strong></li>
                <li>Inserisci il codice nell'app Android</li>
                <li>I due dispositivi si collegheranno automaticamente tramite <strong>Wi-Fi diretto</strong></li>
              </ul>

              <p className="leading-relaxed font-bold text-foreground mt-6">Passo 4: Scegli Cosa Trasferire</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Seleziona i contenuti da trasferire (contatti, foto, messaggi, ecc.)</li>
                <li>Tocca <strong>"Avanti"</strong></li>
                <li>Aspetta che il trasferimento sia completato (può richiedere da pochi minuti a un'ora, a seconda della quantità di dati)</li>
              </ul>

              <p className="leading-relaxed font-bold text-foreground mt-6">Passo 5: Completa la Configurazione</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Una volta completato, continua la configurazione dell'iPhone</li>
                <li>Accedi con il tuo Apple ID</li>
                <li>Scarica le app consigliate da App Store</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Trasferire WhatsApp da Android a iPhone
              </h2>
              <p className="leading-relaxed">
                Il trasferimento di <strong className="text-foreground">WhatsApp</strong> è uno dei punti più critici perché i backup di Android e iOS <strong className="text-foreground">non sono compatibili</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Metodo 1: Trasferimento Ufficiale con Cavo
              </h3>
              <p className="leading-relaxed">
                Da metà 2023, WhatsApp supporta il <strong className="text-giolab-blue">trasferimento diretto tramite cavo</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aggiorna WhatsApp all'ultima versione su entrambi i dispositivi</li>
                <li>Collega Android e iPhone con un <strong>cavo USB (con adattatore Lightning/USB-C)</strong></li>
                <li>Apri WhatsApp su iPhone e segui le istruzioni per <strong>"Importa chat da Android"</strong></li>
                <li>Scansiona il QR code mostrato su iPhone con il telefono Android</li>
                <li>Attendi che il trasferimento sia completato</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Metodo 2: Software di Terze Parti
              </h3>
              <p className="leading-relaxed">
                Se il metodo ufficiale non funziona, puoi usare software come <strong className="text-foreground">iTransor per WhatsApp</strong> o <strong className="text-foreground">Dr.Fone</strong>. Questi strumenti sono a pagamento ma garantiscono il trasferimento completo di chat, foto e video.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Da iPhone a Android: Come Funziona
              </h2>
              <p className="leading-relaxed">
                Il trasferimento da <strong className="text-foreground">iPhone a Android</strong> è gestito da Google tramite l'app <strong className="text-giolab-blue">Switch to Android</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Cosa Trasferisce "Switch to Android"
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contatti</li>
                <li>Foto e video</li>
                <li>Calendari</li>
                <li>Note</li>
                <li>App gratuite compatibili</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Come Funziona
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Scarica l'app <strong>"Switch to Android"</strong> su iPhone</li>
                <li>Durante la configurazione del nuovo Android, seleziona <strong>"Copia da iPhone"</strong></li>
                <li>Scansiona il QR code mostrato su Android con iPhone</li>
                <li>Segui le istruzioni per collegare i dispositivi e trasferire i dati</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Trasferimento Manuale: Metodi Alternativi
              </h2>
              <p className="leading-relaxed">
                Se preferisci non usare le app ufficiali, puoi trasferire i dati manualmente:
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                1. Trasferire Contatti tramite Google
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Su Android: sincronizza i contatti con il tuo <strong>account Google</strong></li>
                <li>Su iPhone: vai in <strong>Impostazioni → Mail → Aggiungi account → Google</strong></li>
                <li>Attiva la sincronizzazione dei <strong>Contatti</strong></li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                2. Trasferire Foto tramite Cloud
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Carica le foto su <strong>Google Foto</strong>, <strong>Dropbox</strong> o <strong>OneDrive</strong></li>
                <li>Accedi allo stesso account sul nuovo telefono</li>
                <li>Scarica le foto</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                3. Trasferire File tramite PC
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Collega il telefono Android al PC e copia foto/video</li>
                <li>Usa <strong>iTunes</strong> (Windows) o <strong>Finder</strong> (Mac) per trasferirli su iPhone</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Problemi Comuni e Soluzioni
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Il trasferimento si blocca o è molto lento
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Assicurati che entrambi i dispositivi siano <strong>completamente carichi</strong></li>
                <li>Usa una <strong>connessione Wi-Fi stabile</strong></li>
                <li>Disattiva temporaneamente VPN e firewall</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                WhatsApp non trasferisce le chat
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verifica di avere l'<strong>ultima versione di WhatsApp</strong> su entrambi i telefoni</li>
                <li>Usa il cavo USB originale</li>
                <li>Se non funziona, considera software di terze parti</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">
                Alcune app non si trasferiscono
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Le app a pagamento potrebbero non essere disponibili gratuitamente sull'altro sistema</li>
                <li>Cerca versioni alternative nello store del nuovo telefono</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Giolab Ti Aiuta nel Trasferimento Dati
              </h2>
              <p className="leading-relaxed">
                Non hai tempo o non riesci a trasferire i dati da solo? <strong className="text-giolab-blue">Da Giolab ad Assemini</strong> offriamo un <strong className="text-foreground">servizio di trasferimento dati assistito</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Trasferimento completo da Android a iPhone e viceversa</li>
                <li>Backup e ripristino di WhatsApp</li>
                <li>Migrazione di contatti, foto, video, email e app</li>
                <li>Configurazione completa del nuovo dispositivo</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Porta entrambi i dispositivi in negozio e in pochi minuti saremo operativi con il tuo nuovo smartphone, senza perdere nulla!
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                Conclusione
              </h2>
              <p className="leading-relaxed">
                Cambiare sistema operativo non deve essere un incubo. Con gli strumenti ufficiali come <strong className="text-foreground">"Passa a iOS"</strong> e <strong className="text-foreground">"Switch to Android"</strong>, il trasferimento è diventato <strong className="text-giolab-blue">semplice e sicuro</strong>. Se hai dubbi o difficoltà, il team di Giolab ad Assemini è pronto ad aiutarti!
              </p>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-giolab-blue/10 to-giolab-blue-light/10 border-2 border-giolab-blue/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hai bisogno di aiuto per trasferire i tuoi dati?
              </h3>
              <p className="text-muted-foreground mb-6">
                Servizio di trasferimento dati assistito in negozio. Veloce, sicuro e garantito!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    const whatsappNumber = "393406970686";
                    const message = encodeURIComponent("Ciao! Ho bisogno di aiuto per trasferire i dati sul nuovo smartphone");
                    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="bg-giolab-blue hover:bg-giolab-blue/90"
                >
                  Prenota Servizio Trasferimento Dati
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
              currentSlug="trasferimento-dati-android-iphone"
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

export default TrasferimentoDatiAndroidIPhone;
