import SEOHead from "@/components/SEOHead";
import { BackToBlog } from "@/components/blog/BackToBlog";
import SocialShare from "@/components/SocialShare";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import faceIdOgImage from "/og-images/riparazione-face-id-iphone.jpg";
import faceIdComponents from "@/assets/face-id-truedepth-components.jpg";
import laboratorioRepair from "@/assets/riparazione-face-id-laboratorio.jpg";
import strumentiMicrosaldatura from "@/assets/strumenti-microsaldatura-face-id.jpg";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const RiparazioneFaceIDIPhone = () => {
  const articleUrl = "https://giolabriparazioni.it/blog/riparazione-face-id-iphone-giolab-assemini";

  return (
    <>
      <SEOHead
        title="Riparazione Face ID iPhone - Giolab Assemini"
        description="Face ID non funziona? Riparazione professionale del sistema TrueDepth iPhone. Diagnosi gratuita, micro-saldature, ripristino sensori. Assemini."
        keywords="riparazione face id, face id non funziona, truedepth iphone, riparazione sensori iphone, dot projector, face id assemini, riparazione iphone assemini"
        ogImage={faceIdOgImage}
        articleData={{
          headline: "Face ID non funziona? Come individuiamo il problema e come lo ripariamo in laboratorio",
          author: "Giolab Team",
          datePublished: "2025-01-27",
          description: "Guida completa alla riparazione del Face ID: cause dei malfunzionamenti, diagnosi tecnica, procedure di riparazione del sistema TrueDepth, costi e tempistiche.",
          image: faceIdOgImage
        }}
      />

      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToBlog currentSlug="riparazione-face-id-iphone-giolab-assemini" />

          <article className="prose prose-lg max-w-none mt-8">
            <header className="mb-8">
              <h1 id="titolo-principale" className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Face ID non funziona? Come individuiamo il problema e come lo ripariamo in laboratorio
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span>📅 27 Gennaio 2025</span>
                <span>⏱️ 8 min di lettura</span>
                <span>🔧 Riparazione</span>
              </div>
            </header>

            <SocialShare 
              url={articleUrl}
              title="Face ID non funziona? Scopri come ripariamo il sistema TrueDepth degli iPhone"
            />

            <div className="my-8">
              <img 
                src={faceIdOgImage} 
                alt="Riparazione professionale Face ID iPhone nel laboratorio Giolab Assemini"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="eager"
              />
            </div>

            <div className="lead text-xl text-muted-foreground mb-8">
              <p>
                Il Face ID è uno dei sistemi più avanzati integrati negli iPhone e, quando smette di funzionare, può creare disagi immediati: accesso al dispositivo, app bancarie, pagamenti, tutto diventa meno pratico.
              </p>
              <p>
                I malfunzionamenti possono avere diverse cause, ma nella maggior parte dei casi è possibile intervenire in modo efficace. Nel nostro laboratorio di Assemini ci occupiamo regolarmente della riparazione del Face ID, con procedure tecniche mirate e strumenti dedicati. 🔧
              </p>
            </div>

            <h2 id="perche-face-id-smette-funzionare" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Perché il Face ID può smettere di funzionare
            </h2>

            <p>
              Il sistema di riconoscimento facciale si basa sul <strong>modulo TrueDepth</strong>, un insieme di componenti estremamente delicati:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>Dot Projector</strong></li>
              <li><strong>Flood Illuminator</strong></li>
              <li><strong>Sensore a infrarossi</strong></li>
              <li><strong>Fotocamera frontale TrueDepth</strong></li>
              <li><strong>Cavo flessibile di collegamento</strong></li>
            </ul>

            <div className="my-8">
              <img 
                src={faceIdComponents} 
                alt="Componenti del sistema TrueDepth iPhone: Dot Projector, Flood Illuminator, sensore IR"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                I componenti del sistema TrueDepth che permettono il riconoscimento facciale
              </p>
            </div>

            <p>
              Questi elementi lavorano insieme per creare la mappa tridimensionale del volto. Cadute, urti, infiltrazioni di liquidi o interventi non eseguiti correttamente (come una sostituzione display effettuata senza accortezza) possono danneggiare uno o più elementi del sistema.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span>⚠️</span>
                <span>I sintomi più comuni</span>
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>"Face ID non è disponibile"</li>
                <li>"Impossibile attivare Face ID su questo iPhone"</li>
                <li>Il Face ID non risponde o non permette una nuova configurazione</li>
                <li>Riconoscimento lento o impreciso</li>
              </ul>
            </div>

            <h2 id="problemi-piu-frequenti" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              I problemi più frequenti che riscontriamo
            </h2>

            <p>
              Nel nostro laboratorio vediamo spesso le stesse casistiche:
            </p>

            <h3 id="face-id-non-disponibile" className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              Face ID non disponibile
            </h3>
            <p>
              Spesso legato a un danno del <strong>Dot Projector</strong> o del flex TrueDepth.
            </p>

            <h3 id="face-id-dopo-cambio-display" className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              Face ID non funzionante dopo un cambio display
            </h3>
            <p>
              Può accadere quando i sensori vengono trasferiti in modo scorretto o subiscono una micro-lesione.
            </p>

            <h3 id="face-id-non-riconosce-volto" className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              Face ID che non riconosce il volto
            </h3>
            <p>
              Possibile guasto alla <strong>fotocamera IR</strong> o interruzioni nelle linee dati.
            </p>

            <h3 id="configurazione-impossibile" className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              Configurazione impossibile
            </h3>
            <p>
              Tipico nei casi di ossidazione o flessibile compromesso.
            </p>

            <p className="mt-6">
              Questi problemi, pur essendo delicati, sono generalmente risolvibili. ✔️
            </p>

            <h2 id="si-puo-riparare-face-id" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Si può riparare il Face ID?
            </h2>

            <p>
              <strong>Sì.</strong> Il Face ID può essere riparato nella maggior parte dei casi, purché venga eseguito da un laboratorio attrezzato.
            </p>

            <p>
              Non è un intervento che si può affrontare sostituendo un componente generico: i sensori del sistema TrueDepth sono collegati in modo univoco alla scheda logica e richiedono procedure mirate.
            </p>

            <div className="my-8">
              <img 
                src={laboratorioRepair} 
                alt="Tecnico specializzato che ripara il Face ID iPhone sotto microscopio nel laboratorio Giolab"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                Riparazione del Face ID sotto microscopio nel nostro laboratorio
              </p>
            </div>

            <h2 id="come-avviene-riparazione" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Come avviene la riparazione del Face ID da Giolab
            </h2>

            <p>
              Il nostro metodo di lavoro è strutturato e professionale:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>🔍</span>
                  <span>1. Diagnosi tecnica</span>
                </h3>
                <p>
                  Analizziamo il modulo TrueDepth per individuare con precisione il componente difettoso.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>⚡</span>
                  <span>2. Test dei sensori principali</span>
                </h3>
                <p>
                  Verifichiamo Dot Projector, Flood Illuminator, sensore IR e fotocamera, controllando potenza, continuità e risposte elettroniche.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>🔧</span>
                  <span>3. Interventi di micro-saldatura</span>
                </h3>
                <p>
                  Quando necessario, ripristiniamo linee interrotte o flessibili lesionati con strumenti professionali.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>🛠️</span>
                  <span>4. Ripristino del Dot Projector</span>
                </h3>
                <p>
                  In caso di danni a questo componente, utilizziamo procedure avanzate che mantengono l'abbinamento originale con la scheda logica.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span>✅</span>
                  <span>5. Calibrazione finale</span>
                </h3>
                <p>
                  Terminata la riparazione, eseguiamo una serie di test per assicurarci che il sistema funzioni in modo corretto e stabile.
                </p>
              </div>
            </div>

            <div className="my-8">
              <img 
                src={strumentiMicrosaldatura} 
                alt="Strumenti professionali per microsaldatura e riparazione Face ID: microscopio e stazione saldante"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                Gli strumenti professionali che utilizziamo per le micro-saldature
              </p>
            </div>

            <h2 id="costi-riparazione" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Costi della riparazione
            </h2>

            <p>
              Il prezzo varia in base al tipo di guasto rilevato:
            </p>

            <div className="table-responsive my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-accent/20">
                    <th className="border border-border p-3 text-left">Tipo di intervento</th>
                    <th className="border border-border p-3 text-left">Costo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Danni al flessibile</td>
                    <td className="border border-border p-3">Costo contenuto</td>
                  </tr>
                  <tr className="bg-accent/5">
                    <td className="border border-border p-3">Linee interrotte o micro-saldature</td>
                    <td className="border border-border p-3">Costo medio</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Ripristino Dot Projector o sensore IR</td>
                    <td className="border border-border p-3">Intervento più complesso</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 my-8 rounded-lg">
              <p className="font-semibold flex items-center gap-2">
                <span>💼</span>
                <span>Prima di procedere eseguiamo sempre una diagnosi gratuita, così da proporre solo la soluzione realmente necessaria.</span>
              </p>
            </div>

            <h2 id="tempistiche" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Tempistiche
            </h2>

            <p>
              Generalmente l'intervento richiede:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong>1–3 giorni lavorativi</strong> per la maggior parte delle riparazioni</li>
              <li>Nei casi più semplici è possibile eseguire la riparazione anche <strong>in giornata</strong></li>
            </ul>

            <h2 id="perche-rivolgersi-giolab" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Perché rivolgersi a noi per la riparazione del Face ID
            </h2>

            <p>
              La riparazione del Face ID richiede competenze specifiche e strumenti adatti all'analisi dei sensori TrueDepth. Nel nostro laboratorio di Assemini trattiamo regolarmente problemi legati a questo sistema, il che ci consente di individuare con precisione la causa del guasto e intervenire con la procedura più adeguata.
            </p>

            <p>
              Il nostro approccio è semplice e trasparente: prima eseguiamo una diagnosi accurata, poi comunichiamo tempi e costi in maniera chiara. Interveniamo su tutte le generazioni di iPhone dotate di questo sistema, dal modello X fino alle serie più recenti. 📱
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Hai problemi con il Face ID del tuo iPhone?</h3>
              <p className="text-center mb-6">
                Porta il tuo dispositivo nel nostro laboratorio ad Assemini per una diagnosi gratuita e senza impegno.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Via Carmine 20, 09032 Assemini (CA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:3406970686" className="hover:underline">340 69 70 686</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:giolabassemini@gmail.com" className="hover:underline">giolabassemini@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="https://instagram.com/giolab_iphonefix" target="_blank" rel="noopener noreferrer" className="hover:underline">@giolab_iphonefix</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="tel:3406970686">
                    <Phone className="mr-2 h-5 w-5" />
                    Chiamaci ora
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="https://wa.me/393406970686" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <h2 id="faq" className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Domande frequenti (FAQ)
            </h2>

            <div className="space-y-6 my-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Il Face ID può essere riparato su tutti i modelli di iPhone?</h3>
                <p>
                  Sì, ripariamo il Face ID su tutti i modelli di iPhone che ne sono dotati, dall'iPhone X fino alle serie più recenti (iPhone 11, 12, 13, 14, 15 e successive).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Quanto costa riparare il Face ID?</h3>
                <p>
                  Il costo varia in base al tipo di danno. Eseguiamo sempre una diagnosi gratuita prima di comunicare il preventivo esatto. I costi vanno da interventi contenuti (danni al flessibile) a interventi più complessi (ripristino Dot Projector).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Quanto tempo ci vuole per riparare il Face ID?</h3>
                <p>
                  Nella maggior parte dei casi l'intervento richiede 1-3 giorni lavorativi. Per guasti semplici possiamo effettuare la riparazione anche in giornata.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Perché il Face ID smette di funzionare dopo la sostituzione del display?</h3>
                <p>
                  Durante la sostituzione del display, i sensori del sistema TrueDepth devono essere trasferiti con estrema cura. Un montaggio scorretto o una micro-lesione ai componenti può causare il malfunzionamento del Face ID.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Il Face ID riparato funziona come l'originale?</h3>
                <p>
                  Sì, una volta completata la riparazione e la calibrazione, il Face ID funziona esattamente come quello originale, mantenendo tutte le funzionalità di sicurezza e riconoscimento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Offrite garanzia sulla riparazione del Face ID?</h3>
                <p>
                  Sì, tutti i nostri interventi sono coperti da garanzia. I termini specifici vengono comunicati al momento del preventivo.
                </p>
              </div>
            </div>

            <SocialShare 
              url={articleUrl}
              title="Face ID non funziona? Scopri come ripariamo il sistema TrueDepth degli iPhone"
            />
          </article>

          <div className="mt-12">
            <BackToBlog currentSlug="riparazione-face-id-iphone-giolab-assemini" />
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default RiparazioneFaceIDIPhone;
