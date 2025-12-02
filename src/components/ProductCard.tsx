import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Battery, Award } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
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

const gradeLabels = {
  'A+': 'Eccellente',
  'A': 'Buono',
  'B': 'Accettabile'
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${!product.available && 'opacity-60'}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge className={conditionColors[product.condition]}>
            {conditionLabels[product.condition]}
          </Badge>
          {product.featured && (
            <Badge variant="default" className="bg-giolab-blue">
              In Offerta
            </Badge>
          )}
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {product.model}
          </h3>
          <p className="text-muted-foreground text-sm">{product.memory}</p>
        </div>

        {product.aestheticGrade && (
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Grado: <strong>{gradeLabels[product.aestheticGrade]}</strong> ({product.aestheticGrade})
            </span>
          </div>
        )}

        {product.batteryHealth && (
          <div className="flex items-center gap-2 mb-4">
            <Battery className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Batteria: <strong>{product.batteryHealth}</strong></span>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">€{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                €{product.originalPrice}
              </span>
            )}
          </div>
          {discount > 0 && (
            <p className="text-sm text-green-600 font-semibold mt-1">
              Risparmi €{product.originalPrice! - product.price} ({discount}%)
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Award className="h-4 w-4" />
          <span>Garanzia {product.warranty}</span>
        </div>

        {!product.available && (
          <Badge variant="secondary" className="w-full justify-center mb-3">
            Momentaneamente esaurito
          </Badge>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-2">
        <Button 
          className="w-full" 
          variant="default"
          disabled={!product.available}
          asChild={product.available}
        >
          {product.available ? (
            <a 
              href={`https://wa.me/393406970686?text=Ciao, sono interessato al ${product.model} ${product.memory} ${conditionLabels[product.condition].toLowerCase()} (€${product.price})`}
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
        
        <Button 
          variant="outline" 
          className="w-full"
          disabled={!product.available}
          asChild={product.available}
        >
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
