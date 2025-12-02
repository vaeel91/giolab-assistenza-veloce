import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface BrandCardProps {
  brand: string;
  name: string;
  description: string;
  slug: string;
  productCount: number;
  gradient: string;
}

export const BrandCard = ({ brand, name, description, slug, productCount, gradient }: BrandCardProps) => {
  return (
    <Link to={`/dispositivi/${slug}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary">
        <CardContent className="p-6">
          <div className={`w-full h-24 mb-4 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-4xl font-bold text-white">{name}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {productCount} {productCount === 1 ? 'dispositivo' : 'dispositivi'}
            </Badge>
            
            <Button variant="ghost" size="sm" className="group-hover:text-primary">
              Vedi catalogo
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
