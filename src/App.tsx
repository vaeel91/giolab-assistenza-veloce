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
import BatteriaMaggiorataIPhoneService from "./pages/services/BatteriaMaggiorataIPhone";
import RiparazioneIPhone1Ora from "./pages/blog/RiparazioneIPhone1Ora";
import BatteriaMaggiorataIPhoneBlog from "./pages/blog/BatteriaMaggiorataIPhone";
import RecuperoDatiIPhoneRotto from "./pages/blog/RecuperoDatiIPhoneRotto";
import ComeCabireBatteriaIPhone from "./pages/blog/ComeCabireBatteriaIPhone";
import DisplayOriginaliVsCompatibili from "./pages/blog/DisplayOriginaliVsCompatibili";
import SEODocumentation from "./pages/SEODocumentation";
import SocialPreview from "./pages/SocialPreview";
import IPhoneRicondizionati from "./pages/IPhoneRicondizionati";

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
        <Route path="/iphone-ricondizionati-assemini" element={<IPhoneRicondizionati />} />
        <Route path="/social-preview" element={<SocialPreview />} />
        
        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/riparazione-iphone-1-ora-giolab-assemini" element={<RiparazioneIPhone1Ora />} />
        <Route path="/blog/batteria-maggiorata-iphone-giolab-assemini" element={<BatteriaMaggiorataIPhoneBlog />} />
        <Route path="/blog/recupero-dati-iphone-rotto-assemini" element={<RecuperoDatiIPhoneRotto />} />
        <Route path="/blog/come-capire-batteria-iphone-sostituita" element={<ComeCabireBatteriaIPhone />} />
        <Route path="/blog/display-originali-vs-compatibili" element={<DisplayOriginaliVsCompatibili />} />
        
        {/* Servizi specifici */}
        <Route path="/servizi/riparazione-display-iphone-assemini" element={<RiparazioneDisplayIPhone />} />
        <Route path="/servizi/batteria-maggiorata-iphone" element={<BatteriaMaggiorataIPhoneService />} />
        
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
