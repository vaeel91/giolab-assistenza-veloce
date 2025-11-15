import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import SEOMonitor from "@/components/SEOMonitor";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import ChiSiamo from "./pages/ChiSiamo";
import FAQPage from "./pages/FAQ";
import DoveSiamo from "./pages/DoveSiamo";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import RiparazioneDisplayIPhone from "./pages/services/RiparazioneDisplayIPhone";
import BatteriaMaggiorataIPhone from "./pages/services/BatteriaMaggiorataIPhone";
import ComeCabireBatteriaIPhone from "./pages/blog/ComeCabireBatteriaIPhone";
import VantaggiBatteriaMaggiorataIPhone from "./pages/blog/VantaggiBatteriaMaggiorataIPhone";
import RiparazioneIPhone1OraGiolab from "./pages/blog/RiparazioneIPhone1OraGiolab";
import RigenerazioneVetroIPhone from "./pages/blog/RigenerazioneVetroIPhone";
import CosaFareIPhoneCadutoSchermoCrepato from "./pages/blog/CosaFareIPhoneCadutoSchermoCrepato";
import PercheFaceIDSmetteFunzionare from "./pages/blog/PercheFaceIDSmetteFunzionare";
import RecuperoDatiIPhoneRotto from "./pages/blog/RecuperoDatiIPhoneRotto";
import MicrosaldatureSchedaMadre from "./pages/blog/MicrosaldatureSchedaMadre";
import ConvieneRiparareIPhoneVecchio from "./pages/blog/ConvieneRiparareIPhoneVecchio";
import ComeCapireProblemaSchedaMadre from "./pages/blog/ComeCapireProblemaSchedaMadre";
import RiparazioneConsoleAssemini from "./pages/blog/RiparazioneConsoleAssemini";
import ComeEvitareBatteriaIPhoneRovini from "./pages/blog/ComeEvitareBatteriaIPhoneRovini";
import QualitaRicambiDurataRiparazione from "./pages/blog/QualitaRicambiDurataRiparazione";
import ErroriPostSostituzioneDisplay from "./pages/blog/ErroriPostSostituzioneDisplay";
import ServizioTelefonoCortesia from "./pages/blog/ServizioTelefonoCortesia";
import DisplayOriginaliVsCompatibili from "./pages/blog/DisplayOriginaliVsCompatibili";
import TrasferimentoDatiAndroidIPhone from "./pages/blog/TrasferimentoDatiAndroidIPhone";
import PS5VerticaleOrizzontale from "./pages/blog/PS5VerticaleOrizzontale";
import AumentareMemoriaIPhone from "./pages/blog/AumentareMemoriaIPhone";
import RiparazioneWebcamHPVictus from "./pages/blog/RiparazioneWebcamHPVictus";
import BatteriaMaggiorataIPhoneGiolab from "./pages/blog/BatteriaMaggiorataIPhoneGiolab";
import RigenerazioneVetroAppleWatch from "./pages/blog/RigenerazioneVetroAppleWatch";
import SEODocumentation from "./pages/SEODocumentation";
import SocialPreview from "./pages/SocialPreview";

// Blog Category Pages
import RiparazioneIPhone from "./pages/blog/categories/RiparazioneIPhone";
import AssistenzaSmartphone from "./pages/blog/categories/AssistenzaSmartphone";
import RiparazionePC from "./pages/blog/categories/RiparazionePC";
import ConsoleCategory from "./pages/blog/categories/Console";
import SicurezzaDigitale from "./pages/blog/categories/SicurezzaDigitale";
import Guide from "./pages/blog/categories/Guide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {import.meta.env.DEV && <SEOMonitor />}
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Pagine principali */}
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/dove-siamo" element={<DoveSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/social-preview" element={<SocialPreview />} />
        
        {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            
            {/* Blog Category Routes */}
            <Route path="/blog/riparazione-iphone" element={<RiparazioneIPhone />} />
            <Route path="/blog/assistenza-smartphone" element={<AssistenzaSmartphone />} />
            <Route path="/blog/riparazione-pc" element={<RiparazionePC />} />
            <Route path="/blog/console" element={<ConsoleCategory />} />
            <Route path="/blog/sicurezza-digitale" element={<SicurezzaDigitale />} />
            <Route path="/blog/guide" element={<Guide />} />
            
            {/* Blog Article Routes */}
            <Route path="/blog/display-originali-vs-compatibili" element={<DisplayOriginaliVsCompatibili />} />
            <Route path="/blog/batteria-maggiorata-iphone-giolab" element={<BatteriaMaggiorataIPhoneGiolab />} />
            <Route path="/blog/riparazione-webcam-hp-victus" element={<RiparazioneWebcamHPVictus />} />
            <Route path="/blog/aumentare-memoria-iphone" element={<AumentareMemoriaIPhone />} />
            <Route path="/blog/microsaldature-scheda-madre" element={<MicrosaldatureSchedaMadre />} />
            <Route path="/blog/recupero-dati-iphone-rotto" element={<RecuperoDatiIPhoneRotto />} />
            <Route path="/blog/perche-face-id-smette-funzionare" element={<PercheFaceIDSmetteFunzionare />} />
            <Route path="/blog/cosa-fare-iphone-caduto-schermo-crepato" element={<CosaFareIPhoneCadutoSchermoCrepato />} />
            <Route path="/blog/come-capire-batteria-iphone-da-sostituire" element={<ComeCabireBatteriaIPhone />} />
            <Route path="/blog/come-evitare-batteria-iphone-rovini" element={<ComeEvitareBatteriaIPhoneRovini />} />
            <Route path="/blog/conviene-riparare-iphone-vecchio" element={<ConvieneRiparareIPhoneVecchio />} />
            <Route path="/blog/qualita-ricambi-durata-riparazione" element={<QualitaRicambiDurataRiparazione />} />
            <Route path="/blog/errori-post-sostituzione-display" element={<ErroriPostSostituzioneDisplay />} />
            <Route path="/blog/vantaggi-batteria-maggiorata-iphone" element={<VantaggiBatteriaMaggiorataIPhone />} />
            <Route path="/blog/servizio-telefono-cortesia" element={<ServizioTelefonoCortesia />} />
            <Route path="/blog/trasferimento-dati-android-iphone" element={<TrasferimentoDatiAndroidIPhone />} />
            <Route path="/blog/riparazione-iphone-1-ora-giolab" element={<RiparazioneIPhone1OraGiolab />} />
            <Route path="/blog/come-capire-problema-scheda-madre" element={<ComeCapireProblemaSchedaMadre />} />
            <Route path="/blog/riparazione-console-assemini" element={<RiparazioneConsoleAssemini />} />
            <Route path="/blog/ps5-verticale-o-orizzontale" element={<PS5VerticaleOrizzontale />} />
            <Route path="/blog/rigenerazione-vetro-apple-watch" element={<RigenerazioneVetroAppleWatch />} />
            <Route path="/blog/rigenerazione-vetro-iphone" element={<RigenerazioneVetroIPhone />} />
        <Route path="/blog/ps5-verticale-o-orizzontale" element={<PS5VerticaleOrizzontale />} />
        <Route path="/blog/aumentare-memoria-iphone" element={<AumentareMemoriaIPhone />} />
        <Route path="/blog/riparazione-webcam-hp-victus" element={<RiparazioneWebcamHPVictus />} />
        <Route path="/blog/batteria-maggiorata-iphone-giolab" element={<BatteriaMaggiorataIPhoneGiolab />} />
        <Route path="/blog/rigenerazione-vetro-apple-watch" element={<RigenerazioneVetroAppleWatch />} />
        
        {/* Servizi specifici */}
        <Route path="/servizi/riparazione-display-iphone-assemini" element={<RiparazioneDisplayIPhone />} />
        <Route path="/servizi/batteria-maggiorata-iphone" element={<BatteriaMaggiorataIPhone />} />
        
        {/* Documentazione */}
        <Route path="/seo-docs" element={<SEODocumentation />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
