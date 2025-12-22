// Catalogo data structure

export interface CatalogSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface CatalogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  subcategories: CatalogSubcategory[];
}

export interface CatalogProduct {
  id: string;
  categoryId: string;
  subcategoryId: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  features: string[];
  available: boolean;
  featured: boolean;
}

// Categories definition
export const catalogCategories: CatalogCategory[] = [
  {
    id: "accessori",
    name: "Accessori",
    slug: "accessori",
    description: "Pellicole, cover, caricatori e accessori per tutti i dispositivi",
    icon: "🛡️",
    color: "from-blue-500 to-cyan-500",
    subcategories: [
      {
        id: "pellicole-hydrogel",
        name: "Pellicole Hydrogel",
        slug: "pellicole-hydrogel",
        description: "Pellicole protettive in hydrogel di alta qualità"
      },
      {
        id: "cover-custodie",
        name: "Cover e Custodie",
        slug: "cover-custodie",
        description: "Custodie protettive per smartphone e tablet"
      },
      {
        id: "caricatori-cavi",
        name: "Caricatori e Cavi",
        slug: "caricatori-cavi",
        description: "Caricatori originali e compatibili, cavi USB-C e Lightning"
      }
    ]
  }
];

// Pellicole Hydrogel products
export const hydrogePlellicoleProducts: CatalogProduct[] = [
  // Pellicole Lucide
  {
    id: "hydrogel-lucida-iphone",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Lucida - iPhone",
    description: "Pellicola in hydrogel ad alta trasparenza per iPhone. Auto-rigenerante, anti-graffio, compatibile con Face ID.",
    price: 15,
    features: ["Alta trasparenza", "Auto-rigenerante", "Anti-graffio", "Compatibile Face ID", "Applicazione inclusa"],
    available: true,
    featured: true
  },
  {
    id: "hydrogel-lucida-samsung",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Lucida - Samsung",
    description: "Pellicola in hydrogel trasparente per Samsung Galaxy. Compatibile con sensore impronte ultrasonico.",
    price: 15,
    features: ["Alta trasparenza", "Auto-rigenerante", "Compatibile sensore impronte", "Applicazione inclusa"],
    available: true,
    featured: true
  },
  {
    id: "hydrogel-lucida-universale",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Lucida - Universale",
    description: "Pellicola in hydrogel tagliata su misura per qualsiasi smartphone. Massima trasparenza.",
    price: 12,
    features: ["Taglio su misura", "Alta trasparenza", "Auto-rigenerante", "Applicazione inclusa"],
    available: true,
    featured: false
  },
  
  // Pellicole Opache
  {
    id: "hydrogel-opaca-iphone",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Opaca - iPhone",
    description: "Pellicola matte anti-riflesso per iPhone. Ideale per gaming e lettura all'aperto.",
    price: 18,
    features: ["Effetto matte", "Anti-riflesso", "Anti-impronte", "Ideale per gaming", "Applicazione inclusa"],
    available: true,
    featured: true
  },
  {
    id: "hydrogel-opaca-samsung",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Opaca - Samsung",
    description: "Pellicola matte anti-riflesso per Samsung Galaxy. Superficie satinata anti-impronte.",
    price: 18,
    features: ["Effetto matte", "Anti-riflesso", "Compatibile sensore impronte", "Applicazione inclusa"],
    available: true,
    featured: false
  },
  {
    id: "hydrogel-opaca-universale",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Opaca - Universale",
    description: "Pellicola matte tagliata su misura per qualsiasi smartphone. Finitura satinata professionale.",
    price: 15,
    features: ["Taglio su misura", "Effetto matte", "Anti-riflesso", "Applicazione inclusa"],
    available: true,
    featured: false
  },
  
  // Pellicole Opache Privacy
  {
    id: "hydrogel-privacy-iphone",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Privacy - iPhone",
    description: "Pellicola privacy anti-spy per iPhone. Visibile solo frontalmente, blocca visione laterale.",
    price: 22,
    features: ["Privacy anti-spy", "Visione frontale", "Effetto matte", "Compatibile Face ID", "Applicazione inclusa"],
    available: true,
    featured: true
  },
  {
    id: "hydrogel-privacy-samsung",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Privacy - Samsung",
    description: "Pellicola privacy anti-spy per Samsung Galaxy. Protezione dati sensibili.",
    price: 22,
    features: ["Privacy anti-spy", "Visione frontale", "Compatibile sensore impronte", "Applicazione inclusa"],
    available: true,
    featured: false
  },
  {
    id: "hydrogel-privacy-universale",
    categoryId: "accessori",
    subcategoryId: "pellicole-hydrogel",
    name: "Pellicola Hydrogel Privacy - Universale",
    description: "Pellicola privacy tagliata su misura per qualsiasi smartphone. Massima riservatezza.",
    price: 20,
    features: ["Taglio su misura", "Privacy anti-spy", "Effetto matte", "Applicazione inclusa"],
    available: true,
    featured: false
  }
];

// Types for pellicole filtering
export type PellicolaType = 'lucida' | 'opaca' | 'privacy';

export const pellicolaTypes: { id: PellicolaType; name: string; description: string; icon: string }[] = [
  {
    id: 'lucida',
    name: 'Lucide',
    description: 'Massima trasparenza e definizione colori',
    icon: '✨'
  },
  {
    id: 'opaca',
    name: 'Opache',
    description: 'Anti-riflesso, ideali per gaming e lettura',
    icon: '🎮'
  },
  {
    id: 'privacy',
    name: 'Privacy',
    description: 'Anti-spy, proteggono la tua privacy',
    icon: '🔒'
  }
];

// Helper functions
export function getCategoryBySlug(slug: string): CatalogCategory | undefined {
  return catalogCategories.find(cat => cat.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): CatalogSubcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.slug === subcategorySlug);
}

export function getProductsBySubcategory(subcategoryId: string): CatalogProduct[] {
  return hydrogePlellicoleProducts.filter(p => p.subcategoryId === subcategoryId);
}

export function getProductsByType(type: PellicolaType): CatalogProduct[] {
  return hydrogePlellicoleProducts.filter(p => p.name.toLowerCase().includes(type));
}
