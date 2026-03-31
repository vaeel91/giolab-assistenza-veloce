import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShare from "@/components/SocialShare";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, Laptop, Settings, Info, Box, HelpCircle, Phone, MessageCircle, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const TrovaModelloMacBook = () => {
  const pageUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/macbook";
  const pageTitle = "Trova Modello MacBook - Giolab Assemini";
  const pageDescription = "Guida per identificare modello MacBook. Codice modello acceso o spento. GioLab Assemini. ☎️ 340 69 70 686.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        ogUrl={pageUrl}
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        ogType="article"
        keywords="trova modello MacBook, codice modello MacBook, identificare MacBook, modello MacBook Pro, modello MacBook Air, riparazione MacBook Assemini, assistenza MacBook Cagliari"
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
                Come Trovare il Modello del Tuo MacBook
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Identificare il modello esatto del tuo MacBook è fondamentale per ottenere 
                ricambi compatibili e riparazioni precise. Scopri tutti i metodi per trovare il codice 
                modello del tuo MacBook presso <strong>GioLab ad Assemini (Cagliari)</strong>.
              </p>

              {/* Section: Perché è importante */}
              <section className="mb-12">
                <h2 id="perche-importante" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Perché è Importante Conoscere il Modello MacBook
                </h2>
                <p>
                  Apple produce diverse linee di MacBook (Air, Pro) con chip diversi (Intel, M1, M2, M3). 
                  Identificare il modello corretto è essenziale per:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Ordinare display, batterie, tastiere e ricambi compatibili</li>
                  <li>Ricevere preventivi accurati per la riparazione</li>
                  <li>Verificare la compatibilità con accessori e aggiornamenti macOS</li>
                  <li>Determinare le specifiche tecniche (RAM, SSD, chip)</li>
                </ul>
              </section>

              {/* Section: MacBook Acceso */}
              <section className="mb-12">
                <h2 id="macbook-acceso" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su MacBook Acceso
                </h2>
                <p className="mb-4">
                  Se il tuo MacBook si accende normalmente, il metodo più semplice è attraverso il menu Apple:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="macbook-info-sistema" className="text-xl font-semibold mb-3">Metodo tramite "Informazioni su questo Mac"</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Clicca sul menu <strong>Apple </strong> in alto a sinistra</li>
                    <li>Seleziona <strong>"Informazioni su questo Mac"</strong></li>
                    <li>Vedrai il nome del modello (es. "MacBook Pro (14 pollici, 2023)")</li>
                    <li>Clicca su <strong>"Più info..."</strong> o <strong>"Resoconto di sistema"</strong></li>
                    <li>Nella sezione Hardware troverai il <strong>"Identificatore modello"</strong> (es. "Mac14,5")</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 id="macbook-terminale" className="text-xl font-semibold mb-3">Metodo tramite Terminale</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri il <strong>Terminale</strong> (Applicazioni → Utility)</li>
                    <li>Digita: <code className="bg-muted px-2 py-1 rounded">system_profiler SPHardwareDataType</code></li>
                    <li>Premi Invio per vedere tutte le informazioni hardware</li>
                  </ol>
                </div>
              </section>

              {/* Section: MacBook Spento */}
              <section className="mb-12">
                <h2 id="macbook-spento" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Laptop className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su MacBook Spento o Danneggiato
                </h2>
                <p className="mb-4">
                  Se il tuo MacBook non si accende o ha lo schermo rotto, puoi comunque identificare il modello:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="macbook-scocca" className="text-xl font-semibold mb-3">Scritte sulla scocca inferiore</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Capovolgi il MacBook</li>
                    <li>Nella parte inferiore, vicino alla cerniera, troverai scritto "Model AXXXX"</li>
                    <li>Sui modelli più recenti, le scritte sono molto piccole vicino alle certificazioni</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="macbook-numero-serie" className="text-xl font-semibold mb-3">Tramite numero di serie</h3>
                  <p className="mb-3">
                    Il numero di serie è inciso sulla scocca inferiore. Puoi usarlo su:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://checkcoverage.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">checkcoverage.apple.com</a> - per verificare copertura e modello</li>
                    <li><a href="https://support.apple.com/specs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">support.apple.com/specs</a> - per le specifiche tecniche</li>
                  </ul>
                </div>
              </section>

              {/* Section: Confezione */}
              <section className="mb-12">
                <h2 id="macbook-confezione" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-primary" />
                  Trovare il Modello dalla Confezione Originale
                </h2>
                <p className="mb-4">
                  Se hai conservato la scatola originale del tuo MacBook:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'etichetta con il codice a barre riporta modello e numero di parte</li>
                  <li>Troverai il nome commerciale completo (es. "MacBook Air M2 2022")</li>
                  <li>È indicato anche numero di serie, colore e configurazione</li>
                </ul>
              </section>

              {/* Tabella Modelli */}
              <section className="mb-12">
                <h2 id="tabella-modelli-macbook" className="text-2xl font-bold text-foreground mb-4">
                  Tabella Modelli MacBook Comuni
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Nome Commerciale</th>
                        <th className="border border-border p-3 text-left">Identificatore</th>
                        <th className="border border-border p-3 text-left">Codice Modello</th>
                        <th className="border border-border p-3 text-left">Anno</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">MacBook Pro 14" (M3 Pro/Max)</td>
                        <td className="border border-border p-3">Mac15,6 / Mac15,8</td>
                        <td className="border border-border p-3">A2918</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">MacBook Pro 16" (M3 Pro/Max)</td>
                        <td className="border border-border p-3">Mac15,7 / Mac15,9</td>
                        <td className="border border-border p-3">A2991</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">MacBook Air 15" (M3)</td>
                        <td className="border border-border p-3">Mac15,12</td>
                        <td className="border border-border p-3">A3114</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">MacBook Air 13" (M3)</td>
                        <td className="border border-border p-3">Mac15,13</td>
                        <td className="border border-border p-3">A3113</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">MacBook Air 13" (M2)</td>
                        <td className="border border-border p-3">Mac14,2</td>
                        <td className="border border-border p-3">A2681</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">MacBook Pro 13" (M2)</td>
                        <td className="border border-border p-3">Mac14,7</td>
                        <td className="border border-border p-3">A2338</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">MacBook Air (M1)</td>
                        <td className="border border-border p-3">MacBookAir10,1</td>
                        <td className="border border-border p-3">A2337</td>
                        <td className="border border-border p-3">2020</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-amber-50 rounded-xl p-6 md:p-8 border border-amber-200">
                <h2 id="contatta-giolab" className="text-2xl font-bold text-foreground mb-4">
                  Hai Bisogno di Assistenza per il Tuo MacBook?
                </h2>
                <p className="mb-6">
                  Se non riesci a identificare il modello del tuo MacBook o hai bisogno di una riparazione professionale, 
                  contatta <strong>GioLab</strong> ad Assemini (Cagliari). Siamo specializzati nella riparazione di 
                  MacBook Air e MacBook Pro di tutte le generazioni.
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
                  📍 Via Carmine 20, 09032 Assemini (CA) | Lun-Ven 10:00-12:30 / 16:00-19:00 | Sab 10:00-12:30
                </p>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 id="faq-macbook" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Come capire se il mio MacBook ha chip Intel o Apple Silicon?</h3>
                    <p className="text-muted-foreground">
                      Da "Informazioni su questo Mac" vedrai indicato il processore. 
                      I MacBook con chip Apple mostrano "Apple M1/M2/M3", quelli Intel mostrano "Intel Core i5/i7/i9".
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Qual è la differenza tra identificatore e codice modello?</h3>
                    <p className="text-muted-foreground">
                      L'identificatore (es. Mac14,2) identifica la configurazione hardware interna. 
                      Il codice modello (es. A2681) identifica il design fisico del dispositivo.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Riparate tutti i modelli MacBook ad Assemini?</h3>
                    <p className="text-muted-foreground">
                      Sì, presso GioLab ripariamo MacBook Air e MacBook Pro, sia con chip Intel che Apple Silicon. 
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

export default TrovaModelloMacBook;
