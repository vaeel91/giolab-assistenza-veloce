import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  condition: string;
  onConditionChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  resultCount: number;
}

export const ProductFilters = ({
  searchQuery,
  onSearchChange,
  condition,
  onConditionChange,
  sortBy,
  onSortByChange,
  resultCount
}: ProductFiltersProps) => {
  return (
    <div className="bg-card border rounded-lg p-4 mb-6 sticky top-20 z-10 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cerca modello... (es. iPhone 13, Galaxy S23)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
              onClick={() => onSearchChange('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Condition Filter */}
        <div className="flex gap-2 flex-wrap lg:flex-nowrap">
          <Button
            variant={condition === 'all' ? 'default' : 'outline'}
            onClick={() => onConditionChange('all')}
            size="sm"
          >
            Tutti
          </Button>
          <Button
            variant={condition === 'nuovo' ? 'default' : 'outline'}
            onClick={() => onConditionChange('nuovo')}
            size="sm"
          >
            Nuovi
          </Button>
          <Button
            variant={condition === 'usato' ? 'default' : 'outline'}
            onClick={() => onConditionChange('usato')}
            size="sm"
          >
            Usati
          </Button>
          <Button
            variant={condition === 'ricondizionato' ? 'default' : 'outline'}
            onClick={() => onConditionChange('ricondizionato')}
            size="sm"
          >
            Ricondizionati
          </Button>
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={onSortByChange}>
          <SelectTrigger className="w-full lg:w-[200px]">
            <SelectValue placeholder="Ordina per" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">In Offerta</SelectItem>
            <SelectItem value="price-asc">Prezzo: Crescente</SelectItem>
            <SelectItem value="price-desc">Prezzo: Decrescente</SelectItem>
            <SelectItem value="model">Modello A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Result Count */}
      <div className="mt-3 flex items-center justify-between">
        <Badge variant="secondary" className="text-sm">
          {resultCount} {resultCount === 1 ? 'dispositivo trovato' : 'dispositivi trovati'}
        </Badge>
        {(searchQuery || condition !== 'all') && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onSearchChange('');
              onConditionChange('all');
            }}
          >
            Cancella filtri
          </Button>
        )}
      </div>
    </div>
  );
};
