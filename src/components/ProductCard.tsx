import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Battery, Award } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    model: string;
    memory: string;
    condition: 'nuovo' | 'usato' | 'ricondizionato';
    aesthetic_grade?: 'A+' | 'A' | 'A-' | 'B' | null;
    battery_health?: string | null;
    price: number;
    original_price?: number | null;
    warranty: string;
    available: boolean;
    featured: boolean;
    description?: string | null;
    image_url?: string | null;
  };
}

const conditionColors = {
  nuovo: "bg-green-500/10 text-green-700 border-green-500/20",
  usato: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  ricondizionato: "bg-orange-500/10 text-orange-700 border-orange-500/20"
};

const conditionLabels = {
  nuovo: "Nuovo",
  usato: "Usato",
  ricondizionato: "Ricondizionato"
};

const gradeLabels: Record<string, string> = {
  'A+': 'Eccellente',
  'A': 'Ottimo',
  'A-': 'Buono',
  'B': 'Accettabile'
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const originalPrice = product.original_price ? Number(product.original_price) : null;
  const price = Number(product.price);
  const discount = originalPrice ? Math.round((originalPrice - price) / originalPrice * 100) : 0;

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${!product.available && 'opacity-60'}`}>
      <CardContent className="p-0">
        {/* Product Image */}
        {product.image_url && (
          <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={product.image_url}
              alt={`${product.model} - Giolab Assemini`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {discount > 0 && (
              <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0">
                -{discount}%
              </Badge>
            )}
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <Badge className={conditionColors[product.condition]}>
              {conditionLabels[product.condition]}
            </Badge>
            {product.featured && !product.image_url && (
              <Badge variant="default" className="bg-giolab-blue">
                In Offerta
              </Badge>
            )}
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {product.model}
            </h3>
            <p className="text-sm text-muted-foreground">{product.memory}</p>
          </div>

          {product.aesthetic_grade && (
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Grado: <strong>{gradeLabels[product.aesthetic_grade]}</strong> ({product.aesthetic_grade})
              </span>
            </div>
          )}

          {product.battery_health && (
            <div className="flex items-center gap-2 mb-4">
              <Battery className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Batteria: <strong>{product.battery_health}</strong></span>
            </div>
          )}

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">€{price}</span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  €{originalPrice}
                </span>
              )}
            </div>
            {discount > 0 && originalPrice && (
              <p className="text-sm text-green-600 font-semibold mt-1">
                Risparmi €{originalPrice - price} ({discount}%)
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Award className="h-4 w-4" />
            <span>{product.warranty}</span>
          </div>

          {!product.available && (
            <Badge variant="secondary" className="w-full justify-center mb-3">
              Momentaneamente esaurito
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-2">
        <Button className="w-full" variant="default" disabled={!product.available} asChild={product.available}>
          {product.available ? (
            <a
              href={`https://wa.me/393406970686?text=Ciao, sono interessato al ${product.model} ${product.memory} ${conditionLabels[product.condition].toLowerCase()} (€${price})`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Richiedi info su WhatsApp
            </a>
          ) : (
            <span>Non disponibile</span>
          )}
        </Button>
        
        <Button variant="outline" className="w-full" disabled={!product.available} asChild={product.available}>
          {product.available ? (
            <a href="tel:+393406970686">
              <Phone className="mr-2 h-4 w-4" />
              Chiama ora
            </a>
          ) : (
            <span>Esaurito</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
