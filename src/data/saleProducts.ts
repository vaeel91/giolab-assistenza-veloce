export interface SaleProduct {
  id: string;
  name: string;
  brand: "Apple" | "Samsung" | "Xiaomi" | "Nintendo" | "Sony";
  category: "smartphone" | "tablet" | "console" | "accessorio";
  condition: "nuovo" | "ricondizionato";
  originalPrice: number;
  salePrice: number;
  discount: number;
  memory?: string;
  grade?: string;
  batteryHealth?: string;
  warranty: string;
  available: boolean;
  featured: boolean;
  image?: string;
}

export const saleProducts: SaleProduct[] = [
  // iPhone Ricondizionati
  {
    id: "iphone-14-pro-256-a",
    name: "iPhone 14 Pro",
    brand: "Apple",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 899,
    salePrice: 649,
    discount: 28,
    memory: "256GB",
    grade: "Eccellente (A+)",
    batteryHealth: "98%",
    warranty: "12 mesi",
    available: true,
    featured: true,
  },
  {
    id: "iphone-13-128-a",
    name: "iPhone 13",
    brand: "Apple",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 599,
    salePrice: 429,
    discount: 28,
    memory: "128GB",
    grade: "Buono (A)",
    batteryHealth: "95%",
    warranty: "12 mesi",
    available: true,
    featured: true,
  },
  {
    id: "iphone-12-64-b",
    name: "iPhone 12",
    brand: "Apple",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 449,
    salePrice: 299,
    discount: 33,
    memory: "64GB",
    grade: "Accettabile (B)",
    batteryHealth: "90%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
  {
    id: "iphone-se-2022-64-a",
    name: "iPhone SE 2022",
    brand: "Apple",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 429,
    salePrice: 299,
    discount: 30,
    memory: "64GB",
    grade: "Eccellente (A+)",
    batteryHealth: "100%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
  {
    id: "iphone-11-128-a",
    name: "iPhone 11",
    brand: "Apple",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 349,
    salePrice: 229,
    discount: 34,
    memory: "128GB",
    grade: "Buono (A)",
    batteryHealth: "92%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
  // Samsung
  {
    id: "samsung-s23-ultra-256-a",
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 899,
    salePrice: 599,
    discount: 33,
    memory: "256GB",
    grade: "Eccellente (A+)",
    batteryHealth: "97%",
    warranty: "12 mesi",
    available: true,
    featured: true,
  },
  {
    id: "samsung-s22-128-a",
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    category: "smartphone",
    condition: "ricondizionato",
    originalPrice: 549,
    salePrice: 349,
    discount: 36,
    memory: "128GB",
    grade: "Buono (A)",
    batteryHealth: "94%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
  // Xiaomi
  {
    id: "xiaomi-13-pro-256-nuovo",
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    category: "smartphone",
    condition: "nuovo",
    originalPrice: 799,
    salePrice: 599,
    discount: 25,
    memory: "256GB",
    warranty: "24 mesi",
    available: true,
    featured: false,
  },
  {
    id: "xiaomi-redmi-note-13-128-nuovo",
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    category: "smartphone",
    condition: "nuovo",
    originalPrice: 249,
    salePrice: 179,
    discount: 28,
    memory: "128GB",
    warranty: "24 mesi",
    available: true,
    featured: false,
  },
  // Console
  {
    id: "nintendo-switch-oled-ric",
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    category: "console",
    condition: "ricondizionato",
    originalPrice: 349,
    salePrice: 269,
    discount: 23,
    grade: "Eccellente (A+)",
    warranty: "12 mesi",
    available: true,
    featured: true,
  },
  {
    id: "ps5-slim-nuovo",
    name: "PlayStation 5 Slim",
    brand: "Sony",
    category: "console",
    condition: "nuovo",
    originalPrice: 549,
    salePrice: 499,
    discount: 9,
    warranty: "24 mesi",
    available: false,
    featured: false,
  },
  // iPad
  {
    id: "ipad-air-5-64-a",
    name: "iPad Air 5",
    brand: "Apple",
    category: "tablet",
    condition: "ricondizionato",
    originalPrice: 599,
    salePrice: 449,
    discount: 25,
    memory: "64GB",
    grade: "Eccellente (A+)",
    batteryHealth: "96%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
  {
    id: "ipad-10-gen-64-ric",
    name: "iPad 10ª Gen",
    brand: "Apple",
    category: "tablet",
    condition: "ricondizionato",
    originalPrice: 449,
    salePrice: 349,
    discount: 22,
    memory: "64GB",
    grade: "Buono (A)",
    batteryHealth: "94%",
    warranty: "12 mesi",
    available: true,
    featured: false,
  },
];

export const brands = ["Apple", "Samsung", "Xiaomi", "Nintendo", "Sony"] as const;
export const categories = ["smartphone", "tablet", "console", "accessorio"] as const;
export const conditions = ["nuovo", "ricondizionato"] as const;

// Data di fine saldi - impostata a 15 giorni da oggi
export const getSaleEndDate = (): Date => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 15);
  endDate.setHours(23, 59, 59, 999);
  return endDate;
};
