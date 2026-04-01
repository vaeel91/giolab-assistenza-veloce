/**
 * ArticleCTA Component
 * Call-to-Action standard per tutti gli articoli del blog
 * 
 * Include:
 * - Titolo accattivante
 * - Descrizione servizio Giolab
 * - Pulsante primario "Richiedi Preventivo"
 * - Pulsante secondario "Chiamaci"
 */

import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, MessageCircle } from "lucide-react";

export const ArticleCTA = () => {
  return (
    <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 shadow-lg">
      <div className="text-center space-y-6">
        {/* Titolo */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Hai bisogno di assistenza professionale?
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Descrizione */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <strong className="text-foreground">GioLab</strong> – Riparazioni iPhone, Smartphone, PC e Console ad{" "}
          <strong className="text-foreground">Assemini (Cagliari)</strong>.<br />
          Interventi rapidi, ricambi di qualità certificati e{" "}
          <strong className="text-primary">12 mesi di garanzia</strong> su tutti gli interventi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="/#contatti">
            <Button 
              size="lg" 
              className="w-full sm:w-auto gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Richiedi un Preventivo Gratuito
            </Button>
          </a>
          
          <a href="tel:+393406970686">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto gap-2 border-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              Chiamaci Ora
            </Button>
          </a>

          <a href="https://wa.me/393406970686" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto gap-2 border-2 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Info aggiuntive */}
        <div className="pt-4 text-sm text-muted-foreground">
          <p>📍 Via Carmine 20, 09032 Assemini (CA) • ⏰ Lun-Ven 10:00-12:30 / 16:00-19:00 | Sab 10:00-12:30</p>
        </div>
      </div>
    </div>
  );
};
