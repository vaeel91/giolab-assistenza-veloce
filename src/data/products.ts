export interface Product {
  id: string;
  brand: 'apple' | 'samsung' | 'xiaomi' | 'oppo' | 'huawei' | 'console';
  model: string;
  memory: string;
  condition: 'nuovo' | 'usato' | 'ricondizionato';
  aestheticGrade?: 'A+' | 'A' | 'A-' | 'B';
  batteryHealth?: string;
  price: number;
  originalPrice?: number;
  warranty: string;
  available: boolean;
  featured: boolean;
  description?: string;
  image?: string;
}

// Immagini prodotti
import nintendoSwitchOled from '@/assets/products/nintendo-switch-oled-giolab.png';
import nintendoSwitchOledAMinus from '@/assets/products/nintendo-switch-oled-grado-a-minus-giolab.png';

export const products: Product[] = [
  // Console
  {
    id: 'switch-oled-usato-001',
    brand: 'console',
    model: 'Nintendo Switch OLED',
    memory: '64GB',
    condition: 'usato',
    aestheticGrade: 'A',
    price: 220,
    originalPrice: 349,
    warranty: 'Garanzia negozio',
    available: true,
    featured: true,
    description: 'Grado A Certificato - Condizioni impeccabili, nessun graffio, joy-con perfetti. Dotazione completa: scatola originale, cavi, dock e accessori. Pellicola protettiva già applicata sul display.',
    image: nintendoSwitchOled
  },
  {
    id: 'switch-oled-usato-002',
    brand: 'console',
    model: 'Nintendo Switch OLED',
    memory: '64GB',
    condition: 'usato',
    aestheticGrade: 'A-',
    price: 200,
    originalPrice: 349,
    warranty: 'Garanzia negozio',
    available: true,
    featured: true,
    description: 'Grado A- - Qualche piccolo segno estetico sulla scocca, ma tecnicamente perfetta al 100%. Joy-Con senza drift, display OLED impeccabile. Dotazione completa: scatola originale, dock, cavi e alimentatore. Pellicola protettiva professionale già applicata.',
    image: nintendoSwitchOledAMinus
  },
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
