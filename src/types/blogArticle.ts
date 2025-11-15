/**
 * Blog Article Type Definitions
 * Utilizzati dal sistema di template automatico per articoli blog
 */

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface BlogArticleData {
  // SEO Meta Tags
  title: string; // Title tag completo (es: "Titolo | Giolab Assemini")
  description: string; // Meta description 150-160 caratteri
  keywords: string; // Keywords separate da virgola
  
  // URL e Identificatori
  slug: string; // URL slug (es: "come-capire-batteria-iphone")
  
  // Open Graph
  ogImage: string; // URL completo immagine OG (1200x630px)
  
  // Schema Article
  author: string; // Default: "Giolab Team"
  datePublished: string; // Formato: YYYY-MM-DD
  category: "Guide" | "Assistenza" | "Riparazione" | "Consigli";
  
  // Contenuto
  content: React.ReactNode; // Contenuto JSX dell'articolo
  readingTime?: number; // Tempo di lettura in minuti (opzionale, default: 5)
}

export interface BlogArticleSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  article: {
    description: string;
    author: string;
    datePublished: string;
    image: string;
    category: string;
  };
}
