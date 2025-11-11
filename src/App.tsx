import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/come-capire-batteria-iphone-da-sostituire" element={<ComeCabireBatteriaIPhone />} />
          <Route path="/blog/vantaggi-batteria-maggiorata-iphone" element={<VantaggiBatteriaMaggiorataIPhone />} />
          <Route path="/blog/riparazione-iphone-1-ora-giolab" element={<RiparazioneIPhone1OraGiolab />} />
          <Route path="/blog/rigenerazione-vetro-iphone" element={<RigenerazioneVetroIPhone />} />
          <Route path="/blog/cosa-fare-iphone-caduto-schermo-crepato" element={<CosaFareIPhoneCadutoSchermoCrepato />} />
          <Route path="/blog/perche-face-id-smette-funzionare" element={<PercheFaceIDSmetteFunzionare />} />
          <Route path="/blog/recupero-dati-iphone-rotto" element={<RecuperoDatiIPhoneRotto />} />
          <Route path="/blog/microsaldature-scheda-madre" element={<MicrosaldatureSchedaMadre />} />
          <Route path="/blog/conviene-riparare-iphone-vecchio" element={<ConvieneRiparareIPhoneVecchio />} />
          <Route path="/blog/come-capire-problema-scheda-madre" element={<ComeCapireProblemaSchedaMadre />} />
          <Route path="/blog/riparazione-console-assemini" element={<RiparazioneConsoleAssemini />} />
          <Route path="/blog/come-evitare-batteria-iphone-rovini" element={<ComeEvitareBatteriaIPhoneRovini />} />
          <Route path="/blog/qualita-ricambi-durata-riparazione" element={<QualitaRicambiDurataRiparazione />} />
          <Route path="/blog/errori-post-sostituzione-display" element={<ErroriPostSostituzioneDisplay />} />
          <Route path="/blog/servizio-telefono-cortesia" element={<ServizioTelefonoCortesia />} />
          <Route path="/blog/display-originali-vs-compatibili" element={<DisplayOriginaliVsCompatibili />} />
          <Route path="/blog/trasferimento-dati-android-iphone" element={<TrasferimentoDatiAndroidIPhone />} />
          <Route path="/servizi/riparazione-display-iphone-assemini" element={<RiparazioneDisplayIPhone />} />
          <Route path="/servizi/batteria-maggiorata-iphone" element={<BatteriaMaggiorataIPhone />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
