export interface Product {
  id: string;
  brand: 'apple' | 'samsung' | 'xiaomi' | 'oppo' | 'huawei' | 'console';
  model: string;
  memory: string;
  condition: 'nuovo' | 'usato' | 'ricondizionato';
  aestheticGrade?: 'A+' | 'A' | 'B';
  batteryHealth?: string;
  price: number;
  originalPrice?: number;
  warranty: string;
  available: boolean;
  featured: boolean;
  description?: string;
  image?: string;
}

export const products: Product[] = [
  // Apple
  {
    id: 'ip13p-128-ric',
    brand: 'apple',
    model: 'iPhone 13 Pro',
    memory: '128GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    batteryHealth: '95%',
    price: 599,
    originalPrice: 799,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'iPhone 13 Pro ricondizionato certificato, condizioni eccellenti'
  },
  {
    id: 'ip14-256-nuovo',
    brand: 'apple',
    model: 'iPhone 14',
    memory: '256GB',
    condition: 'nuovo',
    price: 899,
    warranty: '24 mesi Apple',
    available: true,
    featured: true,
    description: 'iPhone 14 nuovo sigillato con garanzia ufficiale Apple'
  },
  {
    id: 'ip12-64-usato',
    brand: 'apple',
    model: 'iPhone 12',
    memory: '64GB',
    condition: 'usato',
    aestheticGrade: 'A',
    batteryHealth: '87%',
    price: 399,
    originalPrice: 529,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'iPhone 12 usato in ottime condizioni'
  },
  {
    id: 'ip13-128-ric',
    brand: 'apple',
    model: 'iPhone 13',
    memory: '128GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A',
    batteryHealth: '92%',
    price: 499,
    originalPrice: 679,
    warranty: '12 mesi',
    available: true,
    featured: false,
    description: 'iPhone 13 ricondizionato certificato'
  },
  
  // Samsung
  {
    id: 's23u-256-ric',
    brand: 'samsung',
    model: 'Galaxy S23 Ultra',
    memory: '256GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    batteryHealth: '94%',
    price: 749,
    originalPrice: 999,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'Samsung Galaxy S23 Ultra ricondizionato, condizioni eccellenti'
  },
  {
    id: 's22-128-usato',
    brand: 'samsung',
    model: 'Galaxy S22',
    memory: '128GB',
    condition: 'usato',
    aestheticGrade: 'A',
    batteryHealth: '89%',
    price: 429,
    originalPrice: 599,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'Samsung Galaxy S22 usato in ottime condizioni'
  },
  {
    id: 'a54-128-nuovo',
    brand: 'samsung',
    model: 'Galaxy A54',
    memory: '128GB',
    condition: 'nuovo',
    price: 349,
    warranty: '24 mesi Samsung',
    available: true,
    featured: true,
    description: 'Samsung Galaxy A54 nuovo sigillato'
  },
  
  // Xiaomi
  {
    id: 'mi13-256-ric',
    brand: 'xiaomi',
    model: 'Xiaomi 13',
    memory: '256GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A',
    batteryHealth: '91%',
    price: 449,
    originalPrice: 599,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'Xiaomi 13 ricondizionato certificato'
  },
  {
    id: 'redmi-128-nuovo',
    brand: 'xiaomi',
    model: 'Redmi Note 13 Pro',
    memory: '128GB',
    condition: 'nuovo',
    price: 299,
    warranty: '24 mesi Xiaomi',
    available: true,
    featured: false,
    description: 'Redmi Note 13 Pro nuovo sigillato'
  },
  
  // OPPO
  {
    id: 'find-256-ric',
    brand: 'oppo',
    model: 'Find X5 Pro',
    memory: '256GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    batteryHealth: '93%',
    price: 499,
    originalPrice: 699,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'OPPO Find X5 Pro ricondizionato, condizioni eccellenti'
  },
  {
    id: 'reno8-128-nuovo',
    brand: 'oppo',
    model: 'Reno 8',
    memory: '128GB',
    condition: 'nuovo',
    price: 349,
    warranty: '24 mesi OPPO',
    available: true,
    featured: false,
    description: 'OPPO Reno 8 nuovo sigillato'
  },
  
  // Huawei
  {
    id: 'p50-256-ric',
    brand: 'huawei',
    model: 'P50 Pro',
    memory: '256GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A',
    batteryHealth: '90%',
    price: 429,
    originalPrice: 599,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'Huawei P50 Pro ricondizionato certificato'
  },
  {
    id: 'nova9-128-nuovo',
    brand: 'huawei',
    model: 'Nova 9',
    memory: '128GB',
    condition: 'nuovo',
    price: 299,
    warranty: '24 mesi Huawei',
    available: false,
    featured: false,
    description: 'Huawei Nova 9 nuovo - momentaneamente esaurito'
  },
  
  // Console
  {
    id: 'ps5-825-ric',
    brand: 'console',
    model: 'PlayStation 5',
    memory: '825GB SSD',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    price: 449,
    originalPrice: 549,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'PS5 ricondizionata certificata, pulita e testata'
  },
  {
    id: 'ps5-digital-ric',
    brand: 'console',
    model: 'PlayStation 5 Digital',
    memory: '825GB SSD',
    condition: 'ricondizionato',
    aestheticGrade: 'A',
    price: 379,
    originalPrice: 449,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'PS5 Digital ricondizionata, senza lettore disco'
  },
  {
    id: 'ps4-pro-1tb-usato',
    brand: 'console',
    model: 'PlayStation 4 Pro',
    memory: '1TB',
    condition: 'usato',
    aestheticGrade: 'A',
    price: 249,
    originalPrice: 349,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'PS4 Pro usata in ottime condizioni, pulita internamente'
  },
  {
    id: 'ps4-slim-500-usato',
    brand: 'console',
    model: 'PlayStation 4 Slim',
    memory: '500GB',
    condition: 'usato',
    aestheticGrade: 'B',
    price: 179,
    originalPrice: 249,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'PS4 Slim usata, segni di usura leggeri ma perfettamente funzionante'
  },
  {
    id: 'switch-oled-ric',
    brand: 'console',
    model: 'Nintendo Switch OLED',
    memory: '64GB',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    price: 299,
    originalPrice: 349,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'Nintendo Switch OLED ricondizionata, schermo perfetto'
  },
  {
    id: 'switch-v2-usato',
    brand: 'console',
    model: 'Nintendo Switch V2',
    memory: '32GB',
    condition: 'usato',
    aestheticGrade: 'A',
    price: 219,
    originalPrice: 279,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'Nintendo Switch V2 usata con batteria migliorata'
  },
  {
    id: 'xbox-series-x-ric',
    brand: 'console',
    model: 'Xbox Series X',
    memory: '1TB SSD',
    condition: 'ricondizionato',
    aestheticGrade: 'A+',
    price: 429,
    originalPrice: 499,
    warranty: '12 mesi',
    available: true,
    featured: true,
    description: 'Xbox Series X ricondizionata certificata'
  },
  {
    id: 'xbox-series-s-usato',
    brand: 'console',
    model: 'Xbox Series S',
    memory: '512GB SSD',
    condition: 'usato',
    aestheticGrade: 'A',
    price: 229,
    originalPrice: 299,
    warranty: '6 mesi',
    available: true,
    featured: false,
    description: 'Xbox Series S usata in ottime condizioni'
  }
];

export const brandInfo = {
  apple: {
    name: 'Apple',
    slug: 'iphone',
    description: 'iPhone ricondizionati certificati con garanzia 12 mesi',
    color: 'from-gray-800 to-gray-600'
  },
  samsung: {
    name: 'Samsung',
    slug: 'samsung',
    description: 'Galaxy ricondizionati e nuovi con garanzia ufficiale',
    color: 'from-blue-600 to-blue-800'
  },
  xiaomi: {
    name: 'Xiaomi',
    slug: 'xiaomi',
    description: 'Xiaomi e Redmi nuovi e ricondizionati certificati',
    color: 'from-orange-600 to-orange-800'
  },
  oppo: {
    name: 'OPPO',
    slug: 'oppo',
    description: 'OPPO Find e Reno ricondizionati con garanzia',
    color: 'from-green-600 to-green-800'
  },
  huawei: {
    name: 'Huawei',
    slug: 'huawei',
    description: 'Huawei P e Nova ricondizionati certificati',
    color: 'from-red-600 to-red-800'
  },
  console: {
    name: 'Console',
    slug: 'console',
    description: 'PlayStation, Nintendo e Xbox ricondizionate e usate con garanzia',
    color: 'from-purple-600 to-indigo-800'
  }
};
