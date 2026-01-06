import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import SEOMonitor from "@/components/SEOMonitor";

// Eager load - Pagine critiche (sempre caricate subito)
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import Blog from "./pages/Blog";

// Lazy load - Pagine secondarie
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const Contatti = lazy(() => import("./pages/Contatti"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SEODocumentation = lazy(() => import("./pages/SEODocumentation"));
const SocialPreview = lazy(() => import("./pages/SocialPreview"));
const IPhoneRicondizionati = lazy(() => import("./pages/IPhoneRicondizionati"));
const TrovaModelloDispositivo = lazy(() => import("./pages/TrovaModelloDispositivo"));
const Saldi = lazy(() => import("./pages/Saldi"));


// Lazy load - Servizi
const RiparazioneDisplayIPhone = lazy(() => import("./pages/services/RiparazioneDisplayIPhone"));
const BatteriaMaggiorataIPhoneService = lazy(() => import("./pages/services/BatteriaMaggiorataIPhone"));
const RestauroVetriCertificato = lazy(() => import("./pages/services/RestauroVetriCertificato"));

// Lazy load - Articoli Blog
const RiparazioneIPhone1Ora = lazy(() => import("./pages/blog/RiparazioneIPhone1Ora"));
const BatteriaMaggiorataIPhoneBlog = lazy(() => import("./pages/blog/BatteriaMaggiorataIPhone"));
const RecuperoDatiIPhoneRotto = lazy(() => import("./pages/blog/RecuperoDatiIPhoneRotto"));
const ComeCabireBatteriaIPhone = lazy(() => import("./pages/blog/ComeCabireBatteriaIPhone"));
const DisplayOriginaliVsCompatibili = lazy(() => import("./pages/blog/DisplayOriginaliVsCompatibili"));
const RigenerazioneVetroIphoneIpadAppleWatch = lazy(() => import("./pages/blog/rigenerazione-vetro-iphone-ipad-apple-watch"));
const ManutenzionePlayStation5 = lazy(() => import("./pages/blog/manutenzione-playstation-5"));
const CodiceModelloDispositivo = lazy(() => import("./pages/blog/CodiceModelloDispositivo"));
const RiparazioneFaceIDIPhone = lazy(() => import("./pages/blog/RiparazioneFaceIDIPhone"));
const SostituzioneDisplayMacBook = lazy(() => import("./pages/blog/SostituzioneDisplayMacBook"));
const PCLentoVelocizzare = lazy(() => import("./pages/blog/PCLentoVelocizzare"));
const RiparazioneWebcamHPVictus = lazy(() => import("./pages/blog/RiparazioneWebcamHPVictus"));

// Lazy load - Guide Modelli
const TrovaModelloIPhone = lazy(() => import("./pages/guide-modelli/TrovaModelloIPhone"));
const TrovaModelloSamsung = lazy(() => import("./pages/guide-modelli/TrovaModelloSamsung"));
const TrovaModelloXiaomi = lazy(() => import("./pages/guide-modelli/TrovaModelloXiaomi"));
const TrovaModelloOPPO = lazy(() => import("./pages/guide-modelli/TrovaModelloOPPO"));
const TrovaModelloHuawei = lazy(() => import("./pages/guide-modelli/TrovaModelloHuawei"));
const TrovaModelloiPad = lazy(() => import("./pages/guide-modelli/TrovaModelloiPad"));
const TrovaModelloMacBook = lazy(() => import("./pages/guide-modelli/TrovaModelloMacBook"));

// Lazy load - Catalogo
const CatalogoHub = lazy(() => import("./pages/CatalogoHub"));
const CategoriaAccessori = lazy(() => import("./pages/catalogo/CategoriaAccessori"));
const PellicoleHydrogel = lazy(() => import("./pages/catalogo/PellicoleHydrogel"));

// Suspense fallback - Leggero e non invasivo
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-giolab-blue">Caricamento...</div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {import.meta.env.DEV && <SEOMonitor />}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
        
        {/* Pagine principali */}
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/iphone-ricondizionati-assemini" element={<IPhoneRicondizionati />} />
        <Route path="/saldi" element={<Saldi />} />
        <Route path="/social-preview" element={<SocialPreview />} />
        
        
        {/* Guide Modelli Dispositivi */}
        <Route path="/trova-modello-dispositivo" element={<TrovaModelloDispositivo />} />
        <Route path="/trova-modello-dispositivo/iphone" element={<TrovaModelloIPhone />} />
        <Route path="/trova-modello-dispositivo/samsung" element={<TrovaModelloSamsung />} />
        
        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/riparazione-iphone-1-ora-giolab-assemini" element={<RiparazioneIPhone1Ora />} />
        <Route path="/blog/batteria-maggiorata-iphone-giolab-assemini" element={<BatteriaMaggiorataIPhoneBlog />} />
        <Route path="/blog/recupero-dati-iphone-rotto-assemini" element={<RecuperoDatiIPhoneRotto />} />
        <Route path="/blog/come-capire-batteria-iphone-sostituita" element={<ComeCabireBatteriaIPhone />} />
        <Route path="/blog/display-originali-vs-compatibili" element={<DisplayOriginaliVsCompatibili />} />
            <Route path="/blog/rigenerazione-vetro-iphone-ipad-apple-watch" element={<RigenerazioneVetroIphoneIpadAppleWatch />} />
            <Route path="/blog/manutenzione-playstation-5" element={<ManutenzionePlayStation5 />} />
            <Route path="/blog/come-trovare-codice-modello-dispositivo-giolab-assemini" element={<CodiceModelloDispositivo />} />
            <Route path="/blog/riparazione-face-id-iphone-giolab-assemini" element={<RiparazioneFaceIDIPhone />} />
            <Route path="/blog/pc-lento-velocizzare-ssd-pulizia-giolab-assemini" element={<PCLentoVelocizzare />} />
            <Route path="/blog/sostituzione-display-macbook-protocollo-qualita-garanzia" element={<SostituzioneDisplayMacBook />} />
            <Route path="/blog/riparazione-webcam-hp-victus-giolab-assemini" element={<RiparazioneWebcamHPVictus />} />
        
        {/* Guide Modelli */}
        <Route path="/trova-modello-dispositivo/xiaomi" element={<TrovaModelloXiaomi />} />
        <Route path="/trova-modello-dispositivo/oppo" element={<TrovaModelloOPPO />} />
        <Route path="/trova-modello-dispositivo/huawei" element={<TrovaModelloHuawei />} />
        <Route path="/trova-modello-dispositivo/ipad" element={<TrovaModelloiPad />} />
        <Route path="/trova-modello-dispositivo/macbook" element={<TrovaModelloMacBook />} />
        
        {/* Servizi specifici */}
        <Route path="/servizi/riparazione-display-iphone-assemini" element={<RiparazioneDisplayIPhone />} />
        <Route path="/servizi/batteria-maggiorata-iphone" element={<BatteriaMaggiorataIPhoneService />} />
        <Route path="/servizi/restauro-vetri-certificato" element={<RestauroVetriCertificato />} />
        
        {/* Catalogo */}
        <Route path="/catalogo" element={<CatalogoHub />} />
        <Route path="/catalogo/accessori" element={<CategoriaAccessori />} />
        <Route path="/catalogo/accessori/pellicole-hydrogel" element={<PellicoleHydrogel />} />
        
        {/* Documentazione */}
        <Route path="/seo-docs" element={<SEODocumentation />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
