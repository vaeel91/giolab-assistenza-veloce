import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Product, ProductInsert } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';

interface ProductFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product | null;
  onSubmit: (product: ProductInsert) => void;
  loading?: boolean;
}

const brands = [
  { value: 'apple', label: 'Apple' },
  { value: 'samsung', label: 'Samsung' },
  { value: 'xiaomi', label: 'Xiaomi' },
  { value: 'oppo', label: 'OPPO' },
  { value: 'huawei', label: 'Huawei' },
  { value: 'console', label: 'Console' },
];

const conditions = [
  { value: 'nuovo', label: 'Nuovo' },
  { value: 'usato', label: 'Usato' },
  { value: 'ricondizionato', label: 'Ricondizionato' },
];

const grades = [
  { value: 'A+', label: 'A+ (Eccellente)' },
  { value: 'A', label: 'A (Buono)' },
  { value: 'A-', label: 'A- (Discreto)' },
  { value: 'B', label: 'B (Accettabile)' },
];

const ProductForm = ({ open, onOpenChange, product, onSubmit, loading }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductInsert>({
    brand: 'apple',
    model: '',
    memory: '',
    condition: 'ricondizionato',
    aesthetic_grade: null,
    battery_health: '',
    price: 0,
    original_price: null,
    warranty: '12 mesi',
    available: true,
    featured: false,
    description: '',
    image_url: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        brand: product.brand,
        model: product.model,
        memory: product.memory,
        condition: product.condition,
        aesthetic_grade: product.aesthetic_grade,
        battery_health: product.battery_health || '',
        price: product.price,
        original_price: product.original_price,
        warranty: product.warranty,
        available: product.available,
        featured: product.featured,
        description: product.description || '',
        image_url: product.image_url || '',
      });
    } else {
      setFormData({
        brand: 'apple',
        model: '',
        memory: '',
        condition: 'ricondizionato',
        aesthetic_grade: null,
        battery_health: '',
        price: 0,
        original_price: null,
        warranty: '12 mesi',
        available: true,
        featured: false,
        description: '',
        image_url: '',
      });
    }
  }, [product, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      battery_health: formData.battery_health || null,
      description: formData.description || null,
      image_url: formData.image_url || null,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Modifica Prodotto' : 'Nuovo Prodotto'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand">Brand *</Label>
              <Select
                value={formData.brand}
                onValueChange={(value) => setFormData({ ...formData, brand: value as ProductInsert['brand'] })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand.value} value={brand.value}>
                      {brand.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model">Modello *</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder="iPhone 13 Pro"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="memory">Memoria *</Label>
              <Input
                id="memory"
                value={formData.memory}
                onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                placeholder="128GB"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condizione *</Label>
              <Select
                value={formData.condition}
                onValueChange={(value) => setFormData({ ...formData, condition: value as ProductInsert['condition'] })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition.value} value={condition.value}>
                      {condition.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="aesthetic_grade">Grado Estetico</Label>
              <Select
                value={formData.aesthetic_grade || 'none'}
                onValueChange={(value) => setFormData({ ...formData, aesthetic_grade: value === 'none' ? null : value as ProductInsert['aesthetic_grade'] })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleziona grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Nessuno</SelectItem>
                  {grades.map((grade) => (
                    <SelectItem key={grade.value} value={grade.value}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="battery_health">Salute Batteria</Label>
              <Input
                id="battery_health"
                value={formData.battery_health || ''}
                onChange={(e) => setFormData({ ...formData, battery_health: e.target.value })}
                placeholder="95%"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Prezzo (€) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="original_price">Prezzo Originale (€)</Label>
              <Input
                id="original_price"
                type="number"
                step="0.01"
                value={formData.original_price || ''}
                onChange={(e) => setFormData({ ...formData, original_price: e.target.value ? parseFloat(e.target.value) : null })}
                placeholder="Opzionale"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="warranty">Garanzia *</Label>
            <Input
              id="warranty"
              value={formData.warranty}
              onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
              placeholder="12 mesi"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">URL Immagine</Label>
            <Input
              id="image_url"
              value={formData.image_url || ''}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrizione</Label>
            <Textarea
              id="description"
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descrizione dettagliata del prodotto..."
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-2">
              <Switch
                id="available"
                checked={formData.available}
                onCheckedChange={(checked) => setFormData({ ...formData, available: checked })}
              />
              <Label htmlFor="available">Disponibile</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
              />
              <Label htmlFor="featured">In Evidenza</Label>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annulla
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Salvataggio...
                </>
              ) : (
                product ? 'Aggiorna' : 'Aggiungi'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
