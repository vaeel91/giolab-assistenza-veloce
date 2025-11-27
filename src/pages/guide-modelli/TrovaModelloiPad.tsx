import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShare from "@/components/SocialShare";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, Tablet, Settings, Info, Box, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TrovaModelloiPad = () => {
  const pageUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/ipad";
  const pageTitle = "Trova Modello iPad - Giolab Assemini";
  const pageDescription = "Guida per identificare modello iPad. Codice modello acceso o spento. GioLab Assemini. ☎️ 340 69 70 686.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        ogUrl={pageUrl}
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        ogType="article"
        keywords="trova modello iPad, codice modello iPad, identificare iPad, modello iPad Pro, modello iPad Air, riparazione iPad Assemini, assistenza iPad Cagliari"
      />
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back button */}
          <Link 
            to="/trova-modello-dispositivo" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla selezione dei brand
          </Link>

          {/* Social Share Top */}
          <div className="mb-6">
            <SocialShare 
              url={pageUrl}
              title={pageTitle}
              description={pageDescription}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <TableOfContents />
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Come Trovare il Modello del Tuo iPad
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Identificare il modello esatto del tuo iPad è fondamentale per ottenere 
                ricambi compatibili e riparazioni precise. Scopri tutti i metodi per trovare il codice 
                modello del tuo iPad presso <strong>GioLab ad Assemini (Cagliari)</strong>.
              </p>

              {/* Section: Perché è importante */}
              <section className="mb-12">
                <h2 id="perche-importante" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Perché è Importante Conoscere il Modello iPad
                </h2>
                <p>
                  Apple produce diverse linee di iPad (Pro, Air, Mini, base) con dimensioni e componenti diversi. 
                  Identificare il modello corretto è essenziale per:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Ordinare display, batterie e ricambi compatibili</li>
                  <li>Ricevere preventivi accurati per la riparazione</li>
                  <li>Verificare la compatibilità con Apple Pencil e Magic Keyboard</li>
                  <li>Controllare gli aggiornamenti iPadOS disponibili</li>
                </ul>
              </section>

              {/* Section: iPad Acceso */}
              <section className="mb-12">
                <h2 id="ipad-acceso" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su iPad Acceso
                </h2>
                <p className="mb-4">
                  Se il tuo iPad si accende normalmente, il metodo più semplice è attraverso le Impostazioni:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="ipad-impostazioni" className="text-xl font-semibold mb-3">Metodo tramite Impostazioni</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Impostazioni</strong></li>
                    <li>Vai su <strong>Generali</strong> → <strong>Info</strong></li>
                    <li>Cerca la voce <strong>"Nome modello"</strong> (es. "iPad Pro 12,9" (6ª generazione)")</li>
                    <li>Tocca il nome per vedere il <strong>"Numero modello"</strong> (es. "MNXF3TY/A")</li>
                    <li>Tocca di nuovo per vedere il codice <strong>"Model"</strong> (es. "A2436")</li>
                  </ol>
                </div>
              </section>

              {/* Section: iPad Spento */}
              <section className="mb-12">
                <h2 id="ipad-spento" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tablet className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su iPad Spento o Danneggiato
                </h2>
                <p className="mb-4">
                  Se il tuo iPad non si accende o ha lo schermo rotto, puoi comunque identificare il modello:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="ipad-retro" className="text-xl font-semibold mb-3">Scritte sul retro del dispositivo</h3>
                  <p className="mb-3">
                    Sul retro di ogni iPad troverai il codice modello inciso nella scocca:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Gira l'iPad con lo schermo verso il basso</li>
                    <li>Nella parte inferiore troverai scritto "Model AXXXX"</li>
                    <li>Questo è il codice modello univoco del tuo iPad</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="ipad-vano-sim" className="text-xl font-semibold mb-3">Vano SIM (modelli Cellular)</h3>
                  <p>
                    Se il tuo iPad ha la versione Cellular, puoi rimuovere il carrellino SIM 
                    e trovare un'etichetta con IMEI e numero di serie all'interno.
                  </p>
                </div>
              </section>

              {/* Section: Confezione */}
              <section className="mb-12">
                <h2 id="ipad-confezione" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-primary" />
                  Trovare il Modello dalla Confezione Originale
                </h2>
                <p className="mb-4">
                  Se hai conservato la scatola originale del tuo iPad:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'etichetta sulla confezione riporta modello e codice completo</li>
                  <li>Cerca "Model: AXXXX" e il numero di parte</li>
                  <li>Troverai anche numero di serie, colore e capacità di memoria</li>
                </ul>
              </section>

              {/* Tabella Modelli */}
              <section className="mb-12">
                <h2 id="tabella-modelli-ipad" className="text-2xl font-bold text-foreground mb-4">
                  Tabella Modelli iPad Comuni
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Nome Commerciale</th>
                        <th className="border border-border p-3 text-left">Codice Modello</th>
                        <th className="border border-border p-3 text-left">Anno</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">iPad Pro 13" (M4)</td>
                        <td className="border border-border p-3">A2925, A2926</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">iPad Pro 11" (M4)</td>
                        <td className="border border-border p-3">A2836, A2837</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">iPad Air 13" (M2)</td>
                        <td className="border border-border p-3">A2898, A2899</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">iPad Air 11" (M2)</td>
                        <td className="border border-border p-3">A2902, A2903</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">iPad (10ª gen.)</td>
                        <td className="border border-border p-3">A2696, A2757</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">iPad mini (6ª gen.)</td>
                        <td className="border border-border p-3">A2567, A2568</td>
                        <td className="border border-border p-3">2021</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">iPad Pro 12,9" (6ª gen.)</td>
                        <td className="border border-border p-3">A2436, A2764</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">iPad Air (5ª gen.)</td>
                        <td className="border border-border p-3">A2588, A2589</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-amber-50 rounded-xl p-6 md:p-8 border border-amber-200">
                <h2 id="contatta-giolab" className="text-2xl font-bold text-foreground mb-4">
                  Hai Bisogno di Assistenza per il Tuo iPad?
                </h2>
                <p className="mb-6">
                  Se non riesci a identificare il modello del tuo iPad o hai bisogno di una riparazione professionale, 
                  contatta <strong>GioLab</strong> ad Assemini (Cagliari). Siamo specializzati nella riparazione di 
                  iPad di tutte le generazioni.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/393406970686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Scrivici su WhatsApp
                  </a>
                  <a
                    href="tel:+393406970686"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Chiamaci: 340 69 70 686
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  📍 Via Carmine 20, 09032 Assemini (CA) | Lun-Sab 9:00-13:00 / 16:00-20:00
                </p>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 id="faq-ipad" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Come capire se il mio iPad è Wi-Fi o Cellular?</h3>
                    <p className="text-muted-foreground">
                      Guarda il retro: se ha una striscia di plastica nella parte superiore 
                      (antenna) è un modello Cellular. In alternativa, verifica la presenza del vano SIM sul lato.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Qual è la differenza tra numero modello e codice?</h3>
                    <p className="text-muted-foreground">
                      Il numero modello (es. MNXF3TY/A) include info su configurazione e regione. 
                      Il codice modello (es. A2436) identifica l'hardware specifico.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Riparate tutti i modelli iPad ad Assemini?</h3>
                    <p className="text-muted-foreground">
                      Sì, presso GioLab ripariamo tutti i modelli iPad: Pro, Air, Mini e base. 
                      Contattaci per un preventivo gratuito.
                    </p>
                  </div>
                </div>
              </section>

              {/* Social Share Bottom */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Condividi questa guida:</p>
                <SocialShare 
                  url={pageUrl}
                  title={pageTitle}
                  description={pageDescription}
                />
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrovaModelloiPad;
