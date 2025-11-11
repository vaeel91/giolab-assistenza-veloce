import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import RiparazioneDisplayIPhone from "./pages/services/RiparazioneDisplayIPhone";
import BatteriaMaggiorataIPhone from "./pages/services/BatteriaMaggiorataIPhone";
import ComeCabireBatteriaIPhone from "./pages/blog/ComeCabireBatteriaIPhone";
import VantaggiBatteriaMaggiorataIPhone from "./pages/blog/VantaggiBatteriaMaggiorataIPhone";
import RiparazioneIPhone1OraGiolab from "./pages/blog/RiparazioneIPhone1OraGiolab";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/come-capire-batteria-iphone-da-sostituire" element={<ComeCabireBatteriaIPhone />} />
          <Route path="/blog/vantaggi-batteria-maggiorata-iphone" element={<VantaggiBatteriaMaggiorataIPhone />} />
          <Route path="/blog/riparazione-iphone-1-ora-giolab" element={<RiparazioneIPhone1OraGiolab />} />
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
