import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShare from "@/components/SocialShare";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, Smartphone, Settings, Info, Box, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TrovaModelloOPPO = () => {
  const pageUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/oppo";
  const pageTitle = "Trova Modello OPPO - Giolab Assemini";
  const pageDescription = "Guida per identificare modello OPPO. Codice modello acceso o spento. GioLab Assemini. ☎️ 340 69 70 686.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        ogUrl={pageUrl}
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        ogType="article"
        keywords="trova modello OPPO, codice modello OPPO, identificare OPPO, modello Reno, modello Find X, riparazione OPPO Assemini, assistenza OPPO Cagliari"
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
                Come Trovare il Modello del Tuo OPPO
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Identificare il modello esatto del tuo smartphone OPPO è fondamentale per ottenere 
                ricambi compatibili e riparazioni precise. Scopri tutti i metodi per trovare il codice 
                modello del tuo OPPO presso <strong>GioLab ad Assemini (Cagliari)</strong>.
              </p>

              {/* Section: Perché è importante */}
              <section className="mb-12">
                <h2 id="perche-importante" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Perché è Importante Conoscere il Modello OPPO
                </h2>
                <p>
                  OPPO produce diverse linee di smartphone (Find, Reno, A Series) con specifiche diverse. 
                  Identificare il modello corretto è essenziale per:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Ordinare display, batterie e ricambi compatibili</li>
                  <li>Ricevere preventivi accurati per la riparazione</li>
                  <li>Verificare la compatibilità con accessori e cover</li>
                  <li>Controllare gli aggiornamenti ColorOS disponibili</li>
                </ul>
              </section>

              {/* Section: OPPO Acceso */}
              <section className="mb-12">
                <h2 id="oppo-acceso" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su OPPO Acceso
                </h2>
                <p className="mb-4">
                  Se il tuo OPPO si accende normalmente, il metodo più semplice è attraverso le Impostazioni:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="oppo-impostazioni" className="text-xl font-semibold mb-3">Metodo tramite Impostazioni</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Impostazioni</strong></li>
                    <li>Scorri fino a <strong>"Informazioni sul dispositivo"</strong></li>
                    <li>Cerca la voce <strong>"Nome modello"</strong> e <strong>"Numero modello"</strong></li>
                    <li>Troverai il nome commerciale (es. "OPPO Reno 10 Pro") e il codice (es. "CPH2525")</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 id="oppo-codice-dial" className="text-xl font-semibold mb-3">Metodo tramite Codice Dial</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Telefono</strong></li>
                    <li>Digita <strong>*#1234#</strong> o <strong>*#888#</strong></li>
                    <li>Apparirà una schermata con le informazioni del dispositivo</li>
                  </ol>
                </div>
              </section>

              {/* Section: OPPO Spento */}
              <section className="mb-12">
                <h2 id="oppo-spento" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su OPPO Spento o Danneggiato
                </h2>
                <p className="mb-4">
                  Se il tuo OPPO non si accende o ha lo schermo rotto, puoi comunque identificare il modello:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="oppo-vano-sim" className="text-xl font-semibold mb-3">Etichetta nel vano SIM</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Rimuovi il carrellino SIM</li>
                    <li>Illumina l'interno del vano con una torcia</li>
                    <li>Su molti modelli OPPO troverai un'etichetta con il codice CPH</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="oppo-retro" className="text-xl font-semibold mb-3">Scritte sul retro del dispositivo</h3>
                  <p>
                    Il codice modello OPPO (inizia con "CPH") è stampato in piccolo sul retro 
                    del dispositivo, vicino alle certificazioni e al logo CE.
                  </p>
                </div>
              </section>

              {/* Section: Confezione */}
              <section className="mb-12">
                <h2 id="oppo-confezione" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-primary" />
                  Trovare il Modello dalla Confezione Originale
                </h2>
                <p className="mb-4">
                  Se hai conservato la scatola originale del tuo OPPO:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'etichetta sulla confezione riporta modello e codice completo</li>
                  <li>Cerca "Model: CPHxxxx" sull'etichetta</li>
                  <li>Troverai anche IMEI, colore e capacità di memoria</li>
                </ul>
              </section>

              {/* Tabella Modelli */}
              <section className="mb-12">
                <h2 id="tabella-modelli-oppo" className="text-2xl font-bold text-foreground mb-4">
                  Tabella Modelli OPPO Comuni
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
                        <td className="border border-border p-3">OPPO Find X7 Ultra</td>
                        <td className="border border-border p-3">PHZ110</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">OPPO Reno 11 Pro</td>
                        <td className="border border-border p-3">CPH2609</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">OPPO Reno 10 Pro</td>
                        <td className="border border-border p-3">CPH2525</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">OPPO A79 5G</td>
                        <td className="border border-border p-3">CPH2553</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">OPPO Find N3 Flip</td>
                        <td className="border border-border p-3">CPH2519</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">OPPO A18</td>
                        <td className="border border-border p-3">CPH2591</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-amber-50 rounded-xl p-6 md:p-8 border border-amber-200">
                <h2 id="contatta-giolab" className="text-2xl font-bold text-foreground mb-4">
                  Hai Bisogno di Assistenza per il Tuo OPPO?
                </h2>
                <p className="mb-6">
                  Se non riesci a identificare il modello del tuo OPPO o hai bisogno di una riparazione professionale, 
                  contatta <strong>GioLab</strong> ad Assemini (Cagliari). Siamo specializzati nella riparazione di 
                  smartphone OPPO di tutte le serie.
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
                  📍 Via Carmine 20, 09032 Assemini (CA) | Lun-Ven 10:00-12:30 / 16:00-19:00 | Sab su appuntamento
                </p>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 id="faq-oppo" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Cosa significa il codice CPH nei modelli OPPO?</h3>
                    <p className="text-muted-foreground">
                      CPH è il prefisso usato da OPPO per identificare i modelli destinati ai mercati internazionali. 
                      Ogni modello ha un codice CPH univoco.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">OPPO e OnePlus usano gli stessi ricambi?</h3>
                    <p className="text-muted-foreground">
                      Alcuni componenti sono compatibili dato che appartengono allo stesso gruppo, 
                      ma è sempre meglio verificare il codice modello esatto per la massima compatibilità.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Riparate tutti i modelli OPPO ad Assemini?</h3>
                    <p className="text-muted-foreground">
                      Sì, presso GioLab ripariamo tutti i modelli OPPO, inclusi Find, Reno e serie A. 
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

export default TrovaModelloOPPO;
