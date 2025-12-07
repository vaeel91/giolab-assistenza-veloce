import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useProducts, useAddProduct, useUpdateProduct, useDeleteProduct, Product, ProductInsert } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ProductForm from '@/components/admin/ProductForm';
import ProductsTable from '@/components/admin/ProductsTable';
import { Plus, LogOut, Package, Search } from 'lucide-react';

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const { data: products, isLoading: productsLoading } = useProducts();
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const handleAddProduct = (productData: ProductInsert) => {
    addProduct.mutate(productData, {
      onSuccess: () => setFormOpen(false),
    });
  };

  const handleUpdateProduct = (productData: ProductInsert) => {
    if (editingProduct) {
      updateProduct.mutate(
        { id: editingProduct.id, updates: productData },
        { onSuccess: () => {
          setFormOpen(false);
          setEditingProduct(null);
        }}
      );
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteProduct.mutate(id);
  };

  const handleFormClose = (open: boolean) => {
    setFormOpen(open);
    if (!open) setEditingProduct(null);
  };

  // Filter products
  const filteredProducts = products?.filter((product) => {
    const matchesBrand = brandFilter === 'all' || product.brand === brandFilter;
    const matchesSearch = 
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.memory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  }) || [];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">GioLab Admin</h1>
              <p className="text-sm text-muted-foreground">Gestione Prodotti</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Esci
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Prodotti</CardTitle>
                <CardDescription>
                  {filteredProducts.length} prodotti trovati
                </CardDescription>
              </div>
              <Button onClick={() => setFormOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Nuovo Prodotto
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cerca prodotto..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Tutti i brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti i brand</SelectItem>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="xiaomi">Xiaomi</SelectItem>
                  <SelectItem value="oppo">OPPO</SelectItem>
                  <SelectItem value="huawei">Huawei</SelectItem>
                  <SelectItem value="console">Console</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Table */}
            {productsLoading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            ) : (
              <ProductsTable
                products={filteredProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </CardContent>
        </Card>
      </main>

      {/* Product Form Modal */}
      <ProductForm
        open={formOpen}
        onOpenChange={handleFormClose}
        product={editingProduct}
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        loading={addProduct.isPending || updateProduct.isPending}
      />
    </div>
  );
};

export default Admin;
