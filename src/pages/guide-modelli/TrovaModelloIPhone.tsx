import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { TableOfContents } from "@/components/TableOfContents";
import SocialShare from "@/components/SocialShare";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Settings, Box, Info } from "lucide-react";

const TrovaModelloIPhone = () => {
  const shareUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/iphone";
  const shareTitle = "Come Trovare il Modello del Tuo iPhone - Guida Completa";

  return (
    <>
      <SEOHead
        title="Trova Modello iPhone - Giolab Assemini"
        description="Guida per identificare modello iPhone. Codice su impostazioni, scocca e confezione. GioLab Assemini. ☎️ 340 69 70 686."
        ogUrl={shareUrl}
        ogImage="https://giolabriparazioni.it/og-images/codice-modello-dispositivo.jpg"
        ogType="article"
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Back Button */}
            <Link 
              to="/trova-modello-dispositivo"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Torna alla selezione dei brand
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Come Trovare il Modello del Tuo iPhone
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Guida completa per identificare il modello esatto del tuo iPhone in ogni situazione, 
              che sia acceso, spento o danneggiato. Centro assistenza <strong>GioLab ad Assemini (Cagliari)</strong>.
            </p>

            {/* Social Share */}
            <div className="mb-8">
              <SocialShare url={shareUrl} title={shareTitle} />
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <TableOfContents />
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              
              <h2 id="introduzione" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-primary" />
                Perché è importante conoscere il modello
              </h2>
              <p>
                Conoscere il <strong>modello esatto del tuo iPhone</strong> è fondamentale per diverse ragioni:
              </p>
              <ul className="space-y-2">
                <li>Ordinare <strong>ricambi compatibili</strong> (display, batteria, fotocamera)</li>
                <li>Verificare la <strong>copertura della garanzia Apple</strong></li>
                <li>Identificare le <strong>specifiche tecniche precise</strong></li>
                <li>Ricevere un <strong>preventivo accurato</strong> per la riparazione</li>
              </ul>
              <p>
                Da <strong>GioLab ad Assemini</strong>, questa informazione ci permette di fornirti il servizio più rapido e preciso possibile.
              </p>

              <h2 id="iphone-acceso" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                iPhone Acceso: Metodo via Impostazioni
              </h2>
              <p>
                Se il tuo iPhone si accende normalmente, questo è il metodo più rapido e affidabile:
              </p>
              
              <h3 id="procedura-impostazioni" className="text-2xl font-semibold mt-8 mb-4">
                Procedura passo-passo
              </h3>
              <ol className="space-y-3">
                <li>Apri l'app <strong>Impostazioni</strong></li>
                <li>Vai su <strong>Generali</strong></li>
                <li>Seleziona <strong>Info</strong></li>
                <li>Cerca la voce <strong>"Nome modello"</strong> o <strong>"Codice modello"</strong></li>
                <li>Troverai un codice tipo <strong>A2482</strong>, <strong>A2633</strong>, ecc.</li>
              </ol>

              <Card className="bg-blue-50 border-blue-200 p-6 my-8">
                <p className="font-semibold text-blue-900 mb-2">💡 Consiglio GioLab</p>
                <p className="text-blue-800">
                  Fai uno screenshot della schermata "Info" prima di portare il dispositivo in assistenza. 
                  Questo ci aiuterà a prepararci meglio per la tua riparazione ad Assemini.
                </p>
              </Card>

              <h2 id="iphone-spento" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                iPhone Spento o Non Funzionante
              </h2>
              <p>
                Se il tuo iPhone non si accende o è danneggiato, puoi identificare il modello tramite la scocca posteriore.
              </p>

              <h3 id="dove-guardare-scocca" className="text-2xl font-semibold mt-8 mb-4">
                Dove guardare sulla scocca
              </h3>
              <p>
                Il codice modello è inciso sul <strong>retro dell'iPhone</strong>, nella parte inferiore:
              </p>
              <ul className="space-y-2">
                <li><strong>iPhone 8 e successivi</strong>: incisione piccola nella parte bassa del retro</li>
                <li><strong>iPhone 7 e precedenti</strong>: sul retro, vicino alla scritta "iPhone"</li>
                <li>Il codice inizia sempre con la lettera <strong>A</strong> seguita da 4 cifre (es. A2482)</li>
              </ul>

              <Card className="bg-amber-50 border-amber-200 p-6 my-8">
                <p className="font-semibold text-amber-900 mb-2">⚠️ Attenzione</p>
                <p className="text-amber-800">
                  L'incisione può essere molto piccola e difficile da leggere. Usa una luce forte e, 
                  se necessario, una lente d'ingrandimento. Il nostro staff a <strong>GioLab Assemini</strong> può aiutarti.
                </p>
              </Card>

              <h2 id="confezione-originale" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Box className="w-8 h-8 text-primary" />
                Tramite Confezione Originale
              </h2>
              <p>
                Se hai conservato la <strong>scatola originale</strong> del tuo iPhone, puoi trovare il codice modello sull'etichetta posteriore.
              </p>
              <h3 id="informazioni-scatola" className="text-2xl font-semibold mt-8 mb-4">
                Cosa trovi sulla scatola
              </h3>
              <ul className="space-y-2">
                <li><strong>Codice modello</strong>: inizia con A (es. A2633)</li>
                <li><strong>Numero di serie</strong>: utile per verifiche garanzia</li>
                <li><strong>IMEI</strong>: identificativo univoco del dispositivo</li>
                <li><strong>Codice a barre</strong> con tutte le informazioni tecniche</li>
              </ul>

              <h2 id="tabella-modelli" className="text-3xl font-bold mt-12 mb-6">
                Tabella Riepilogativa Modelli iPhone
              </h2>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Codice Modello</th>
                      <th>Nome Commerciale</th>
                      <th>Anno</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A2864, A2865, A2866, A2867</td>
                      <td>iPhone 15 Pro Max</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>A2848, A2849, A2850, A2851</td>
                      <td>iPhone 15 Pro</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>A2846, A2847</td>
                      <td>iPhone 15 Plus</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>A2842, A2843, A2844, A2845</td>
                      <td>iPhone 15</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>A2896, A2897, A2898, A2899</td>
                      <td>iPhone 14 Pro Max</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>A2650, A2651, A2652, A2653</td>
                      <td>iPhone 14 Pro</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>A2632, A2633, A2634, A2635</td>
                      <td>iPhone 14 Plus</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>A2649, A2881, A2882, A2883, A2884</td>
                      <td>iPhone 14</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>A2484, A2641, A2644, A2645, A2643</td>
                      <td>iPhone 13 Pro Max</td>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <td>A2483, A2636, A2639, A2640, A2638</td>
                      <td>iPhone 13 Pro</td>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <td>A2482, A2631, A2634, A2635, A2633</td>
                      <td>iPhone 13</td>
                      <td>2021</td>
                    </tr>
                    <tr>
                      <td>A2481, A2626, A2629, A2630, A2628</td>
                      <td>iPhone 13 mini</td>
                      <td>2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ⬅️ Scorri per vedere tutto →
              </p>

              {/* CTA Section */}
              <Card className="bg-[#F8F6F0] border-0 p-8 my-12">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Hai trovato il codice del tuo iPhone?
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Contattaci subito per un <strong>preventivo gratuito</strong> o per prenotare una riparazione ad Assemini.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/393406970686" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                  >
                    Scrivici su WhatsApp
                  </a>
                  <a 
                    href="tel:+393406970686"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Chiamaci: 340 69 70 686
                  </a>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  📍 Via Carmine 20, 09032 Assemini (CA) | Lun-Sab 9:00-13:00, 16:00-20:00
                </p>
              </Card>

              {/* FAQ */}
              <h2 id="faq" className="text-3xl font-bold mt-12 mb-6">
                Domande Frequenti (FAQ)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Il codice modello è diverso dal numero di serie?
                  </h3>
                  <p>
                    Sì, sono due codici diversi. Il <strong>codice modello</strong> (es. A2482) identifica il tipo di iPhone, 
                    mentre il <strong>numero di serie</strong> è univoco per ogni dispositivo.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Posso identificare il modello tramite IMEI?
                  </h3>
                  <p>
                    Sì, puoi utilizzare l'IMEI su siti come <strong>checkcoverage.apple.com</strong> per identificare 
                    il modello esatto e verificare lo stato della garanzia.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Il mio iPhone non si accende e non ho la scatola. Cosa faccio?
                  </h3>
                  <p>
                    Porta il dispositivo da <strong>GioLab ad Assemini</strong>. Il nostro staff tecnico può identificare 
                    il modello tramite la scocca posteriore o tramite connessione diagnostica.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    I codici modello sono diversi per mercato?
                  </h3>
                  <p>
                    Sì, un iPhone può avere codici leggermente diversi a seconda del mercato (USA, Europa, Asia). 
                    Ad esempio, A2482 è per il mercato USA, A2633 per l'Europa.
                  </p>
                </div>
              </div>

            </article>

            {/* Social Share Bottom */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-center font-semibold mb-4">Condividi questa guida:</p>
              <SocialShare url={shareUrl} title={shareTitle} />
            </div>

            {/* Back Button Bottom */}
            <div className="mt-12 text-center">
              <Link 
                to="/trova-modello-dispositivo"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Torna alla selezione dei brand
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TrovaModelloIPhone;
