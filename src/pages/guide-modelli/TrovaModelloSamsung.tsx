import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { TableOfContents } from "@/components/TableOfContents";
import SocialShare from "@/components/SocialShare";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Settings, Box, Info } from "lucide-react";

const TrovaModelloSamsung = () => {
  const shareUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/samsung";
  const shareTitle = "Come Trovare il Modello del Tuo Samsung - Guida Completa";

  return (
    <>
      <SEOHead
        title="Come Trovare il Modello del Tuo Samsung | Guida Completa GioLab Assemini"
        description="Guida dettagliata per identificare il modello esatto del tuo smartphone Samsung Galaxy, anche se non si accende. Centro assistenza GioLab ad Assemini (Cagliari)."
        ogUrl={shareUrl}
        ogImage="https://giolabriparazioni.it/og-images/codice-modello-dispositivo.jpg"
        ogType="article"
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <Link 
              to="/trova-modello-dispositivo"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Torna alla selezione dei brand
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Come Trovare il Modello del Tuo Samsung
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Guida completa per identificare il <strong>modello esatto del tuo Samsung Galaxy</strong>, 
              inclusi metodi per dispositivi accesi, spenti o danneggiati. Centro assistenza <strong>GioLab ad Assemini (Cagliari)</strong>.
            </p>

            <div className="mb-8">
              <SocialShare url={shareUrl} title={shareTitle} />
            </div>

            <div className="mb-12">
              <TableOfContents />
            </div>

            <article className="prose prose-lg max-w-none">
              
              <h2 id="introduzione" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-primary" />
                Perché identificare il modello Samsung
              </h2>
              <p>
                Conoscere il <strong>codice modello esatto</strong> del tuo Samsung Galaxy è essenziale per:
              </p>
              <ul className="space-y-2">
                <li>Ordinare <strong>ricambi compatibili e certificati</strong> (display, batteria, fotocamera)</li>
                <li>Verificare la <strong>garanzia Samsung</strong> e gli aggiornamenti software disponibili</li>
                <li>Identificare le <strong>specifiche tecniche precise</strong> del dispositivo</li>
                <li>Ricevere un <strong>preventivo accurato</strong> per riparazioni da GioLab ad Assemini</li>
              </ul>

              <h2 id="samsung-acceso" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                Samsung Acceso: Metodo via Impostazioni
              </h2>
              <p>
                Se il tuo Samsung si accende normalmente, segui questa procedura rapida:
              </p>
              
              <h3 id="procedura-impostazioni" className="text-2xl font-semibold mt-8 mb-4">
                Procedura passo-passo
              </h3>
              <ol className="space-y-3">
                <li>Apri l'app <strong>Impostazioni</strong></li>
                <li>Scorri verso il basso e seleziona <strong>Informazioni sul telefono</strong></li>
                <li>Cerca la voce <strong>"Numero modello"</strong></li>
                <li>Troverai un codice tipo <strong>SM-G998B</strong>, <strong>SM-A525F</strong>, ecc.</li>
                <li>In alcuni casi vedrai anche il nome commerciale (es. Galaxy S21 Ultra)</li>
              </ol>

              <Card className="bg-blue-50 border-blue-200 p-6 my-8">
                <p className="font-semibold text-blue-900 mb-2">💡 Consiglio GioLab</p>
                <p className="text-blue-800">
                  Fai uno screenshot della schermata "Informazioni sul telefono" prima di portare il dispositivo 
                  in assistenza ad Assemini. Ci aiuterà a preparare i ricambi giusti in anticipo.
                </p>
              </Card>

              <h2 id="samsung-spento" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                Samsung Spento o Non Funzionante
              </h2>
              <p>
                Se il tuo Samsung non si accende o lo schermo è rotto, puoi identificare il modello in altri modi.
              </p>

              <h3 id="etichetta-retro" className="text-2xl font-semibold mt-8 mb-4">
                Etichetta sul retro o sotto la batteria
              </h3>
              <p>
                I dispositivi Samsung hanno sempre un'<strong>etichetta con il codice modello</strong>:
              </p>
              <ul className="space-y-2">
                <li><strong>Samsung recenti</strong> (batteria non removibile): etichetta sul retro del dispositivo, vicino al logo Samsung</li>
                <li><strong>Samsung più datati</strong> (batteria removibile): rimuovi la cover posteriore e la batteria, troverai l'etichetta all'interno</li>
                <li>Il codice inizia sempre con <strong>SM-</strong> seguito da lettere e numeri (es. SM-G998B)</li>
              </ul>

              <Card className="bg-amber-50 border-amber-200 p-6 my-8">
                <p className="font-semibold text-amber-900 mb-2">⚠️ Attenzione</p>
                <p className="text-amber-800">
                  Se il tuo Samsung ha la batteria non removibile, <strong>non tentare di aprirlo</strong> da solo. 
                  Porta il dispositivo da <strong>GioLab ad Assemini</strong> per un'identificazione sicura.
                </p>
              </Card>

              <h2 id="confezione-originale" className="text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                <Box className="w-8 h-8 text-primary" />
                Tramite Confezione Originale
              </h2>
              <p>
                Se hai conservato la <strong>scatola originale</strong> del tuo Samsung Galaxy, 
                il codice modello è stampato sull'etichetta laterale o posteriore.
              </p>
              <h3 id="informazioni-scatola" className="text-2xl font-semibold mt-8 mb-4">
                Cosa trovi sulla scatola
              </h3>
              <ul className="space-y-2">
                <li><strong>Codice modello</strong>: inizia con SM- (es. SM-A525F)</li>
                <li><strong>Numero di serie</strong>: utile per verifiche garanzia Samsung</li>
                <li><strong>IMEI</strong>: identificativo univoco del dispositivo</li>
                <li><strong>Codice a barre</strong> con specifiche tecniche complete</li>
              </ul>

              <h2 id="tabella-modelli" className="text-3xl font-bold mt-12 mb-6">
                Tabella Riepilogativa Modelli Samsung Galaxy
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
                      <td>SM-S928B</td>
                      <td>Galaxy S24 Ultra</td>
                      <td>2024</td>
                    </tr>
                    <tr>
                      <td>SM-S926B</td>
                      <td>Galaxy S24+</td>
                      <td>2024</td>
                    </tr>
                    <tr>
                      <td>SM-S921B</td>
                      <td>Galaxy S24</td>
                      <td>2024</td>
                    </tr>
                    <tr>
                      <td>SM-S918B</td>
                      <td>Galaxy S23 Ultra</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>SM-S916B</td>
                      <td>Galaxy S23+</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>SM-S911B</td>
                      <td>Galaxy S23</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>SM-S908B</td>
                      <td>Galaxy S22 Ultra</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>SM-S906B</td>
                      <td>Galaxy S22+</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>SM-S901B</td>
                      <td>Galaxy S22</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>SM-A546B</td>
                      <td>Galaxy A54 5G</td>
                      <td>2023</td>
                    </tr>
                    <tr>
                      <td>SM-A536B</td>
                      <td>Galaxy A53 5G</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <td>SM-A525F</td>
                      <td>Galaxy A52 5G</td>
                      <td>2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ⬅️ Scorri per vedere tutto →
              </p>

              <Card className="bg-[#F8F6F0] border-0 p-8 my-12">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Hai identificato il tuo Samsung?
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Contattaci per un <strong>preventivo gratuito</strong> o per prenotare una riparazione certificata ad Assemini.
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

              <h2 id="faq" className="text-3xl font-bold mt-12 mb-6">
                Domande Frequenti (FAQ)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Qual è la differenza tra SM-G998B e SM-G998U?
                  </h3>
                  <p>
                    La lettera finale indica il <strong>mercato di destinazione</strong>: "B" per Europa, "U" per USA, "F" per mercati internazionali. 
                    Questo può influenzare la compatibilità dei ricambi.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Posso usare l'IMEI per identificare il modello?
                  </h3>
                  <p>
                    Sì, digitando <strong>*#06#</strong> sul tastierino visualizzi l'IMEI. 
                    Puoi poi verificarlo su <strong>imei.info</strong> per ottenere il modello esatto.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Il mio Samsung non si accende e non ho la scatola. Cosa faccio?
                  </h3>
                  <p>
                    Porta il dispositivo da <strong>GioLab ad Assemini</strong>. Possiamo identificare il modello tramite 
                    l'etichetta interna o connessione diagnostica professionale.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Tutti i Samsung Galaxy hanno il codice SM-?
                  </h3>
                  <p>
                    Sì, tutti i dispositivi Samsung Galaxy (smartphone e tablet) iniziano con <strong>SM-</strong>. 
                    Altri dispositivi Samsung possono avere codici diversi.
                  </p>
                </div>
              </div>

            </article>

            <div className="mt-12 pt-8 border-t">
              <p className="text-center font-semibold mb-4">Condividi questa guida:</p>
              <SocialShare url={shareUrl} title={shareTitle} />
            </div>

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

export default TrovaModelloSamsung;
