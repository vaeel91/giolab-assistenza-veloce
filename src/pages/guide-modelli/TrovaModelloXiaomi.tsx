import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShare from "@/components/SocialShare";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, Smartphone, Settings, Info, Box, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TrovaModelloXiaomi = () => {
  const pageUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/xiaomi";
  const pageTitle = "Trova Modello Xiaomi - Giolab Assemini";
  const pageDescription = "Guida per identificare modello Xiaomi. Codice modello acceso o spento. GioLab Assemini. ☎️ 340 69 70 686.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        ogUrl={pageUrl}
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        ogType="article"
        keywords="trova modello Xiaomi, codice modello Xiaomi, identificare Xiaomi, modello Redmi, modello POCO, riparazione Xiaomi Assemini, assistenza Xiaomi Cagliari"
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
                Come Trovare il Modello del Tuo Xiaomi
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Identificare il modello esatto del tuo Xiaomi (Redmi, POCO, Mi) è fondamentale per ottenere 
                ricambi compatibili e riparazioni precise. In questa guida ti mostriamo tutti i metodi per 
                trovare il codice modello del tuo dispositivo Xiaomi presso <strong>GioLab ad Assemini (Cagliari)</strong>.
              </p>

              {/* Section: Perché è importante */}
              <section className="mb-12">
                <h2 id="perche-importante" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Perché è Importante Conoscere il Modello Xiaomi
                </h2>
                <p>
                  Xiaomi produce diverse linee di smartphone (Mi, Redmi, POCO, Black Shark) con molte varianti. 
                  Conoscere il modello esatto è essenziale per:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Ordinare display, batterie e ricambi compatibili</li>
                  <li>Ricevere preventivi accurati per la riparazione</li>
                  <li>Verificare la compatibilità con accessori e cover</li>
                  <li>Controllare gli aggiornamenti software disponibili</li>
                </ul>
              </section>

              {/* Section: Xiaomi Acceso */}
              <section className="mb-12">
                <h2 id="xiaomi-acceso" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su Xiaomi Acceso
                </h2>
                <p className="mb-4">
                  Se il tuo Xiaomi si accende normalmente, il metodo più semplice è attraverso le Impostazioni:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="xiaomi-impostazioni" className="text-xl font-semibold mb-3">Metodo tramite Impostazioni</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Impostazioni</strong></li>
                    <li>Scorri fino a <strong>"Info sistema"</strong> o <strong>"Informazioni telefono"</strong></li>
                    <li>Cerca la voce <strong>"Nome dispositivo"</strong> o <strong>"Modello"</strong></li>
                    <li>Troverai il nome commerciale (es. "Redmi Note 12 Pro") e il codice modello (es. "22101316G")</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 id="xiaomi-codice-dial" className="text-xl font-semibold mb-3">Metodo tramite Codice Dial</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Telefono</strong></li>
                    <li>Digita <strong>*#*#6484#*#*</strong> o <strong>*#*#64663#*#*</strong></li>
                    <li>Si aprirà il menu CIT con tutte le info del dispositivo</li>
                  </ol>
                </div>
              </section>

              {/* Section: Xiaomi Spento */}
              <section className="mb-12">
                <h2 id="xiaomi-spento" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su Xiaomi Spento o Danneggiato
                </h2>
                <p className="mb-4">
                  Se il tuo Xiaomi non si accende o ha lo schermo rotto, puoi comunque identificare il modello:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="xiaomi-etichetta-sim" className="text-xl font-semibold mb-3">Etichetta nel vano SIM</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Rimuovi il carrellino SIM con l'apposito strumento</li>
                    <li>Guarda all'interno del vano SIM con una luce</li>
                    <li>Su alcuni modelli troverai un'etichetta con il codice modello</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="xiaomi-retro" className="text-xl font-semibold mb-3">Scritte sul retro del dispositivo</h3>
                  <p>
                    Molti Xiaomi riportano il codice modello stampato in piccolo sul retro, 
                    vicino alle certificazioni CE. Cerca una sigla tipo "M2101K6G" o simili.
                  </p>
                </div>
              </section>

              {/* Section: Confezione */}
              <section className="mb-12">
                <h2 id="xiaomi-confezione" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-primary" />
                  Trovare il Modello dalla Confezione Originale
                </h2>
                <p className="mb-4">
                  Se hai conservato la scatola originale del tuo Xiaomi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'etichetta sulla confezione riporta modello e codice completo</li>
                  <li>Troverai anche IMEI, colore e capacità di memoria</li>
                  <li>Il codice modello è indicato dopo "Model:"</li>
                </ul>
              </section>

              {/* Tabella Modelli */}
              <section className="mb-12">
                <h2 id="tabella-modelli-xiaomi" className="text-2xl font-bold text-foreground mb-4">
                  Tabella Modelli Xiaomi Comuni
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
                        <td className="border border-border p-3">Redmi Note 13 Pro</td>
                        <td className="border border-border p-3">23090RA98G</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">Redmi Note 12 Pro</td>
                        <td className="border border-border p-3">22101316G</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Xiaomi 14</td>
                        <td className="border border-border p-3">2311DRK48G</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">POCO X6 Pro</td>
                        <td className="border border-border p-3">23122PCD1G</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Redmi 13C</td>
                        <td className="border border-border p-3">2310FPCA4G</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">Xiaomi 13T Pro</td>
                        <td className="border border-border p-3">23078PND5G</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-amber-50 rounded-xl p-6 md:p-8 border border-amber-200">
                <h2 id="contatta-giolab" className="text-2xl font-bold text-foreground mb-4">
                  Hai Bisogno di Assistenza per il Tuo Xiaomi?
                </h2>
                <p className="mb-6">
                  Se non riesci a identificare il modello del tuo Xiaomi o hai bisogno di una riparazione professionale, 
                  contatta <strong>GioLab</strong> ad Assemini (Cagliari). Siamo specializzati nella riparazione di 
                  smartphone Xiaomi, Redmi e POCO.
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
                <h2 id="faq-xiaomi" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Qual è la differenza tra Xiaomi, Redmi e POCO?</h3>
                    <p className="text-muted-foreground">
                      Sono tutti brand di Xiaomi: Xiaomi per la fascia premium, Redmi per la fascia media/economica, 
                      POCO per il rapporto qualità-prezzo. I ricambi possono essere diversi.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Come decodificare il codice modello Xiaomi?</h3>
                    <p className="text-muted-foreground">
                      Il codice contiene: anno e mese di produzione (prime 4 cifre), codice progetto, 
                      e lettera finale che indica la regione (G = Global, I = India, C = Cina).
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Riparate tutti i modelli Xiaomi ad Assemini?</h3>
                    <p className="text-muted-foreground">
                      Sì, presso GioLab ripariamo tutti i modelli Xiaomi, Redmi e POCO. 
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

export default TrovaModelloXiaomi;
