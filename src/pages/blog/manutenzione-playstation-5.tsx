import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import SocialShare from "@/components/SocialShare";

const ManutenzionePlayStation5 = () => {
  return (
    <>
      <SEOHead
        title="Manutenzione PlayStation 5: Guida Completa Surriscaldamento e Metallo Liquido | GioLab Assemini"
        description="Guida definitiva alla manutenzione PS5: surriscaldamento, metallo liquido, posizione orizzontale vs verticale. Servizi professionali ad Assemini (Cagliari)."
        keywords="manutenzione PS5, surriscaldamento PlayStation 5, metallo liquido PS5, pulizia PS5 Assemini, riparazione console Cagliari, ventola PS5 rumorosa, PS5 si spegne, assistenza PlayStation Assemini"
        ogImage="https://giolabriparazioni.it/og-images/manutenzione-playstation-5.jpg"
        ogUrl="https://giolabriparazioni.it/blog/manutenzione-playstation-5"
        articleData={{
          headline: "La guida definitiva alla manutenzione della tua PlayStation 5",
          description: "Tutto quello che devi sapere su surriscaldamento, metallo liquido e manutenzione professionale della PS5 ad Assemini (Cagliari).",
          author: "Giolab",
          datePublished: "2025-01-15",
          image: "https://giolabriparazioni.it/og-images/manutenzione-playstation-5.jpg",
        }}
      />

      <article className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToBlog />

          <header className="mb-8">
            <h1 className="blog-h1 text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              La guida definitiva alla manutenzione della tua PlayStation 5
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <time dateTime="2025-01-15">15 Gennaio 2025</time>
              <span>•</span>
              <span>Tempo di lettura: 8 minuti</span>
            </div>
            <SocialShare 
              url="https://giolabriparazioni.it/blog/manutenzione-playstation-5"
              title="La guida definitiva alla manutenzione della tua PlayStation 5"
            />
          </header>

          <div className="blog-article">
            <div className="blog-intro mb-8">
              <p className="blog-paragraph text-lg">
                La PlayStation 5 è una delle console più potenti mai prodotte, ma come ogni dispositivo ad alte prestazioni è soggetta a un nemico silenzioso che può comprometterne la durata: il calore.
              </p>
              <p className="blog-paragraph text-lg">
                Molti utenti iniziano a sentire la ventola salire di giri, la console diventare rumorosa o avvertire cali di performance… e nella maggior parte dei casi il problema è uno: surriscaldamento.
              </p>
            </div>

            <nav className="blog-toc bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="blog-h2 text-xl font-semibold mb-4">Indice dell'articolo</h2>
              <ul className="space-y-2">
                <li><a href="#perche-surriscalda" className="text-primary hover:underline">Perché la PS5 si surriscalda?</a></li>
                <li><a href="#metallo-liquido" className="text-primary hover:underline">Cos'è il metallo liquido e che funzione svolge?</a></li>
                <li><a href="#posizione-verticale" className="text-primary hover:underline">PS5 in verticale: perché può essere rischioso</a></li>
                <li><a href="#posizione-sicura" className="text-primary hover:underline">La posizione più sicura: orizzontale</a></li>
                <li><a href="#importanza-manutenzione" className="text-primary hover:underline">Perché la manutenzione è fondamentale</a></li>
                <li><a href="#servizi-giolab" className="text-primary hover:underline">Servizi professionali GioLab per la tua PS5</a></li>
                <li><a href="#faq" className="text-primary hover:underline">FAQ - Domande frequenti</a></li>
              </ul>
            </nav>

            <img 
              src="https://giolabriparazioni.it/blog-media/ps5-console-gaming.jpg" 
              alt="PlayStation 5 console con sistema di ventilazione visibile"
              className="w-full h-auto rounded-lg mb-8 max-w-full"
            />

            <section id="perche-surriscalda" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🔍 Perché la PS5 si surriscalda?
              </h2>
              <p className="blog-paragraph">
                La PS5 ha un hardware estremamente potente: CPU e GPU generano una grande quantità di calore. Sony ha puntato su un sistema di dissipazione avanzato, ma questo non la rende immune a criticità come:
              </p>
              <ul className="blog-list space-y-3 my-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Polvere nei canali di ventilazione</strong> – La polvere ostruisce la dissipazione e costringe la ventola a lavorare al massimo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Pasta termica/metallo liquido degradati col tempo</strong> – Il metallo liquido è eccellente, ma NON eterno.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Posizionamento errato della console</strong> – Soprattutto in verticale.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Ambienti caldi o poco ventilati</strong> – Mobile TV chiusi o a ridosso del muro.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Utilizzo intenso in giochi pesanti</strong> – Alcuni titoli spingono CPU e GPU al limite.</span>
                </li>
              </ul>
            </section>

            <img 
              src="https://giolabriparazioni.it/blog-media/ps5-dissipatore-interno.jpg" 
              alt="Sistema di dissipazione interno della PlayStation 5 con dissipatore e ventola"
              className="w-full h-auto rounded-lg mb-8 max-w-full"
            />

            <section id="metallo-liquido" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                ⚙️ Cos'è il metallo liquido della PS5 e che funzione svolge?
              </h2>
              <p className="blog-paragraph">
                Una delle innovazioni più importanti della PS5 è l'utilizzo del <strong>metallo liquido</strong> al posto della tradizionale pasta termica.
              </p>
              <p className="blog-paragraph">
                Il metallo liquido (leghe basate su gallio e indio) ha una caratteristica fondamentale:
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 rounded">
                <p className="font-semibold text-lg">
                  ⭐ Conduce il calore da 10 a 20 volte meglio della pasta termica tradizionale.
                </p>
              </div>
              <p className="blog-paragraph">
                Questo permette alla console di:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>✓ Mantenere temperature più basse</li>
                <li>✓ Avere una maggiore efficienza energetica</li>
                <li>✓ Ridurre la rumorosità della ventola</li>
                <li>✓ Evitare thermal throttling</li>
              </ul>
              <p className="blog-paragraph">
                Tuttavia, il metallo liquido ha un grande difetto:
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 rounded">
                <p className="font-semibold">
                  ➡ È estremamente mobile. Se la console non è perfettamente orizzontale, con il tempo può spostarsi.
                </p>
              </div>
              <p className="blog-paragraph">
                Se si sposta, può:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>• Fuoriuscire dall'area prevista</li>
                <li>• Ossidare componenti sensibili</li>
                <li>• Corrodere piste e contatti</li>
                <li>• Causare surriscaldamento grave</li>
                <li>• Nei casi peggiori: danneggiare la scheda madre</li>
              </ul>
            </section>

            <img 
              src="https://giolabriparazioni.it/blog-media/ps5-metallo-liquido.jpg" 
              alt="Metallo liquido applicato sul processore della PlayStation 5"
              className="w-full h-auto rounded-lg mb-8 max-w-full"
            />

            <section id="posizione-verticale" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🧨 PS5 in verticale? Ecco perché può essere rischioso
              </h2>
              <p className="blog-paragraph">
                Quando la PS5 fu lanciata, molti utenti preferirono posizionarla in verticale.
              </p>
              <p className="blog-paragraph">
                Nel tempo, però, tecnici e laboratori specializzati (come noi di <strong>GioLab ad Assemini</strong>) hanno riscontrato un problema reale:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded">
                <p className="font-semibold">
                  ➤ Il metallo liquido può colare o spostarsi leggermente se la console resta in verticale per lunghi periodi.
                </p>
              </div>
              <p className="blog-paragraph">
                Non succede a tutte, ma:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>• In console molto calde</li>
                <li>• In ambienti caldi</li>
                <li>• In console non perfettamente in bolla</li>
                <li>• In console mai aperte per pulizia</li>
              </ul>
              <p className="blog-paragraph">
                …il rischio aumenta.
              </p>
            </section>

            <section id="posizione-sicura" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🔒 La posizione più sicura? L'orizzontale
              </h2>
              <p className="blog-paragraph">
                Tenere la PS5 in orizzontale:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>✓ Mantiene il metallo liquido in sede</li>
                <li>✓ Evita movimenti indesiderati</li>
                <li>✓ Migliora la dissipazione laterale</li>
                <li>✓ Riduce il rischio di danni alla scheda madre</li>
                <li>✓ Diminuisce vibrazioni e rumorosità</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded">
                <p className="font-semibold">
                  È la configurazione consigliata da chi lavora quotidianamente sulle PS5, soprattutto sui modelli con più anni di utilizzo.
                </p>
              </div>
            </section>

            <img 
              src="https://giolabriparazioni.it/blog-media/ps5-posizione-orizzontale.jpg" 
              alt="PlayStation 5 posizionata in orizzontale per una migliore dissipazione"
              className="w-full h-auto rounded-lg mb-8 max-w-full"
            />

            <section id="importanza-manutenzione" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🧽 Perché la manutenzione è fondamentale
              </h2>
              <p className="blog-paragraph">
                Molti clienti portano la console da GioLab quando ormai:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>• La ventola urla</li>
                <li>• La PS5 si spegne per temperatura</li>
                <li>• I giochi scattano</li>
                <li>• Compare il messaggio "Temperature troppo alte"</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded">
                <p className="font-semibold text-lg">
                  La verità? 👉 Tutto questo è evitabile con manutenzione preventiva.
                </p>
              </div>
              <p className="blog-paragraph">
                Una manutenzione completa comprende:
              </p>
              <ul className="blog-list space-y-2 my-4">
                <li>✔ Smontaggio completo della console</li>
                <li>✔ Pulizia profonda ventola + dissipatore</li>
                <li>✔ Rimozione polvere dai canali interni</li>
                <li>✔ Sostituzione pasta termica se necessario</li>
                <li>✔ Verifica integrità metallo liquido</li>
                <li>✔ Pulizia porte USB e HDMI</li>
                <li>✔ Test termici post-intervento</li>
              </ul>
              <p className="blog-paragraph">
                E il risultato è sempre lo stesso:
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-6 rounded-lg my-6">
                <ul className="space-y-2 text-lg font-semibold">
                  <li>⭐ Temperature più basse</li>
                  <li>⭐ Ventola più silenziosa</li>
                  <li>⭐ Prestazioni più stabili nel tempo</li>
                </ul>
              </div>
            </section>

            <img 
              src="https://giolabriparazioni.it/blog-media/manutenzione-ps5-laboratorio.jpg" 
              alt="Tecnico GioLab esegue manutenzione professionale su PlayStation 5 ad Assemini"
              className="w-full h-auto rounded-lg mb-8 max-w-full"
            />

            <section id="servizi-giolab" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🛠️ Servizi professionali GioLab per la tua PS5
              </h2>
              <p className="blog-paragraph">
                Da <strong>GioLab</strong> (Via Carmine 20A – Assemini, Cagliari) offriamo:
              </p>

              <div className="space-y-6 my-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="blog-h3 font-semibold text-lg mb-2">🔧 1. Manutenzione completa PS5</h3>
                  <p className="blog-paragraph">Pulizia interna, ventola, dissipatore, griglie e canali d'aria.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="blog-h3 font-semibold text-lg mb-2">🔧 2. Controllo stato metallo liquido</h3>
                  <p className="blog-paragraph">Verifica che non ci siano perdite, spostamenti o contatti ossidati.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="blog-h3 font-semibold text-lg mb-2">🔧 3. Sostituzione pasta termica/metallo liquido</h3>
                  <p className="blog-paragraph">Intervento eseguito con materiali di qualità professionale.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="blog-h3 font-semibold text-lg mb-2">🔧 4. Riparazione surriscaldamento</h3>
                  <p className="blog-paragraph">Per console che si spengono, bloccano, o diventano rumorosissime.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="blog-h3 font-semibold text-lg mb-2">🔧 5. Consulenza sul posizionamento</h3>
                  <p className="blog-paragraph">Configurazione ottimale per evitare problemi futuri.</p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-6 text-gray-900">
                ❓ FAQ – Domande frequenti sul surriscaldamento PS5
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">La mia PS5 fa molto rumore: è normale?</h3>
                  <p className="blog-paragraph">No. La ventola rumorosa indica polvere, dissipazione ostruita o problemi termici. È consigliabile una pulizia professionale presso <strong>GioLab ad Assemini</strong>.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">Tenere la PS5 in verticale è pericoloso?</h3>
                  <p className="blog-paragraph">Non sempre, ma aumenta il rischio di spostamento del metallo liquido. La posizione orizzontale è la più sicura, soprattutto per console usate da più tempo.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">Ogni quanto va fatta la manutenzione?</h3>
                  <p className="blog-paragraph">Consigliamo una manutenzione completa ogni 12-18 mesi, o prima se la console è usata in ambienti molto polverosi o con ventilazione limitata.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">Il metallo liquido può fuoriuscire?</h3>
                  <p className="blog-paragraph">Sì, se la console scalda troppo o se resta a lungo in verticale. Per questo è importante una manutenzione periodica e il posizionamento orizzontale.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">La mia PS5 si spegne: è un problema di temperatura?</h3>
                  <p className="blog-paragraph">Nel 90% dei casi sì. La console ha un sistema di protezione che la spegne in caso di surriscaldamento. Porta la console da <strong>GioLab ad Assemini</strong> per una diagnosi completa.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="blog-h3 font-semibold text-lg mb-3">La manutenzione migliora le prestazioni?</h3>
                  <p className="blog-paragraph">Sì: meno temperature = più stabilità = meno throttling. Una PS5 pulita e ben mantenuta offre prestazioni costanti anche nei giochi più pesanti.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="blog-h2 text-2xl font-semibold mb-4 text-gray-900">
                🎮 Conclusione
              </h2>
              <p className="blog-paragraph">
                La PS5 è una macchina straordinaria, ma per dare il massimo ha bisogno di mantenersi pulita e ben dissipata. Surriscaldamento, rumorosità e rallentamenti non vanno ignorati: spesso sono segnali precoci di un problema che può peggiorare.
              </p>
              <p className="blog-paragraph">
                Con una manutenzione professionale e una corretta disposizione della console, puoi evitare danni e prolungare la vita del tuo investimento.
              </p>
            </section>

            <ArticleCTA />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-gray-900">📍 GioLab – Assistenza Console ad Assemini (Cagliari)</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">📍 Indirizzo:</span>
                    Via Carmine 20A – Assemini (CA)
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">📱 WhatsApp:</span>
                    <a href="https://wa.me/393406970686" className="text-primary hover:underline">340 69 70 686</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">📸 Instagram:</span>
                    <a href="https://instagram.com/giolab_iphonefix" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@giolab_iphonefix</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <SocialShare 
                url="https://giolabriparazioni.it/blog/manutenzione-playstation-5"
                title="La guida definitiva alla manutenzione della tua PlayStation 5"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ManutenzionePlayStation5;