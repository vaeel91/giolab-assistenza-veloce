import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface Product {
  id: string;
  brand: 'apple' | 'samsung' | 'xiaomi' | 'oppo' | 'huawei' | 'console';
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
  created_at: string;
  updated_at: string;
}

export type ProductInsert = Omit<Product, 'id' | 'created_at' | 'updated_at'>;
export type ProductUpdate = Partial<ProductInsert>;

// Fetch all products
export const useProducts = (brand?: string) => {
  return useQuery({
    queryKey: ['products', brand],
    queryFn: async () => {
      let query = supabase.from('products').select('*').order('created_at', { ascending: false });
      
      if (brand) {
        query = query.eq('brand', brand);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Product[];
    },
  });
};

// Fetch available products only (for public display)
export const useAvailableProducts = (brand?: string) => {
  return useQuery({
    queryKey: ['available-products', brand],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .eq('available', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (brand) {
        query = query.eq('brand', brand);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Product[];
    },
  });
};

// Add product
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: ProductInsert) => {
      const { data, error } = await supabase
        .from('products')
        .insert(product)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['available-products'] });
      toast.success('Prodotto aggiunto con successo');
    },
    onError: (error) => {
      console.error('Error adding product:', error);
      toast.error('Errore durante l\'aggiunta del prodotto');
    },
  });
};

// Update product
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: ProductUpdate }) => {
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['available-products'] });
      toast.success('Prodotto aggiornato con successo');
    },
    onError: (error) => {
      console.error('Error updating product:', error);
      toast.error('Errore durante l\'aggiornamento del prodotto');
    },
  });
};

// Delete product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['available-products'] });
      toast.success('Prodotto eliminato');
    },
    onError: (error) => {
      console.error('Error deleting product:', error);
      toast.error('Errore durante l\'eliminazione del prodotto');
    },
  });
};
