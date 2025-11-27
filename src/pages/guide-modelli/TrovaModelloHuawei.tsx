import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShare from "@/components/SocialShare";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, Smartphone, Settings, Info, Box, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TrovaModelloHuawei = () => {
  const pageUrl = "https://giolabriparazioni.it/trova-modello-dispositivo/huawei";
  const pageTitle = "Trova Modello Huawei - Giolab Assemini";
  const pageDescription = "Guida per identificare modello Huawei. Codice modello acceso o spento. GioLab Assemini. ☎️ 340 69 70 686.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        ogUrl={pageUrl}
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
        ogType="article"
        keywords="trova modello Huawei, codice modello Huawei, identificare Huawei, modello P Series, modello Mate, riparazione Huawei Assemini, assistenza Huawei Cagliari"
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
                Come Trovare il Modello del Tuo Huawei
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Identificare il modello esatto del tuo smartphone Huawei è fondamentale per ottenere 
                ricambi compatibili e riparazioni precise. Scopri tutti i metodi per trovare il codice 
                modello del tuo Huawei presso <strong>GioLab ad Assemini (Cagliari)</strong>.
              </p>

              {/* Section: Perché è importante */}
              <section className="mb-12">
                <h2 id="perche-importante" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  Perché è Importante Conoscere il Modello Huawei
                </h2>
                <p>
                  Huawei produce diverse linee di smartphone (P Series, Mate, Nova, Y Series) con specifiche molto diverse. 
                  Identificare il modello corretto è essenziale per:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Ordinare display, batterie e ricambi compatibili</li>
                  <li>Ricevere preventivi accurati per la riparazione</li>
                  <li>Verificare la compatibilità con accessori e cover</li>
                  <li>Controllare gli aggiornamenti EMUI/HarmonyOS disponibili</li>
                </ul>
              </section>

              {/* Section: Huawei Acceso */}
              <section className="mb-12">
                <h2 id="huawei-acceso" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su Huawei Acceso
                </h2>
                <p className="mb-4">
                  Se il tuo Huawei si accende normalmente, il metodo più semplice è attraverso le Impostazioni:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="huawei-impostazioni" className="text-xl font-semibold mb-3">Metodo tramite Impostazioni</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Impostazioni</strong></li>
                    <li>Scorri fino a <strong>"Info telefono"</strong> o <strong>"Informazioni dispositivo"</strong></li>
                    <li>Cerca la voce <strong>"Nome modello"</strong> e <strong>"Numero modello"</strong></li>
                    <li>Troverai il nome commerciale (es. "HUAWEI P60 Pro") e il codice (es. "MNA-LX9")</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 id="huawei-codice-dial" className="text-xl font-semibold mb-3">Metodo tramite Codice Dial</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Apri l'app <strong>Telefono</strong></li>
                    <li>Digita <strong>*#*#2846579#*#*</strong></li>
                    <li>Si aprirà il menu ProjectMenu con le informazioni del dispositivo</li>
                  </ol>
                </div>
              </section>

              {/* Section: Huawei Spento */}
              <section className="mb-12">
                <h2 id="huawei-spento" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  Come Trovare il Modello su Huawei Spento o Danneggiato
                </h2>
                <p className="mb-4">
                  Se il tuo Huawei non si accende o ha lo schermo rotto, puoi comunque identificare il modello:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="huawei-vano-sim" className="text-xl font-semibold mb-3">Etichetta nel vano SIM</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Rimuovi il carrellino SIM</li>
                    <li>Illumina l'interno del vano con una torcia</li>
                    <li>Molti modelli Huawei hanno un'etichetta interna con il codice modello</li>
                  </ol>
                </div>
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <h3 id="huawei-retro" className="text-xl font-semibold mb-3">Scritte sul retro del dispositivo</h3>
                  <p>
                    Il codice modello Huawei è stampato in piccolo sul retro del dispositivo, 
                    solitamente nella parte inferiore vicino alle certificazioni CE e FCC.
                  </p>
                </div>
              </section>

              {/* Section: Confezione */}
              <section className="mb-12">
                <h2 id="huawei-confezione" className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-primary" />
                  Trovare il Modello dalla Confezione Originale
                </h2>
                <p className="mb-4">
                  Se hai conservato la scatola originale del tuo Huawei:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>L'etichetta sulla confezione riporta modello e codice completo</li>
                  <li>Cerca "Model:" seguito dal codice (es. "VOG-L29")</li>
                  <li>Troverai anche IMEI, colore e capacità di memoria</li>
                </ul>
              </section>

              {/* Tabella Modelli */}
              <section className="mb-12">
                <h2 id="tabella-modelli-huawei" className="text-2xl font-bold text-foreground mb-4">
                  Tabella Modelli Huawei Comuni
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
                        <td className="border border-border p-3">HUAWEI Pura 70 Ultra</td>
                        <td className="border border-border p-3">LNA-AL00</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">HUAWEI P60 Pro</td>
                        <td className="border border-border p-3">MNA-LX9</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">HUAWEI Mate 60 Pro</td>
                        <td className="border border-border p-3">ALN-AL10</td>
                        <td className="border border-border p-3">2023</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">HUAWEI Nova 12</td>
                        <td className="border border-border p-3">FOA-LX9</td>
                        <td className="border border-border p-3">2024</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">HUAWEI P50 Pro</td>
                        <td className="border border-border p-3">JAD-LX9</td>
                        <td className="border border-border p-3">2022</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3">HUAWEI P30 Pro</td>
                        <td className="border border-border p-3">VOG-L29</td>
                        <td className="border border-border p-3">2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-12 bg-amber-50 rounded-xl p-6 md:p-8 border border-amber-200">
                <h2 id="contatta-giolab" className="text-2xl font-bold text-foreground mb-4">
                  Hai Bisogno di Assistenza per il Tuo Huawei?
                </h2>
                <p className="mb-6">
                  Se non riesci a identificare il modello del tuo Huawei o hai bisogno di una riparazione professionale, 
                  contatta <strong>GioLab</strong> ad Assemini (Cagliari). Siamo specializzati nella riparazione di 
                  smartphone Huawei di tutte le serie.
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
                <h2 id="faq-huawei" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Domande Frequenti
                </h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Come decodificare il codice modello Huawei?</h3>
                    <p className="text-muted-foreground">
                      Il codice modello Huawei è formato da tre lettere (codice progetto) + due lettere (variante) + 
                      due caratteri (regione). Es. "VOG-L29" indica P30 Pro versione dual SIM globale.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Gli Huawei con HarmonyOS hanno codici diversi?</h3>
                    <p className="text-muted-foreground">
                      No, il sistema di codifica resta lo stesso. Il codice modello identifica l'hardware, 
                      non il sistema operativo installato.
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Riparate tutti i modelli Huawei ad Assemini?</h3>
                    <p className="text-muted-foreground">
                      Sì, presso GioLab ripariamo tutti i modelli Huawei, inclusi P Series, Mate, Nova e Y Series. 
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

export default TrovaModelloHuawei;
