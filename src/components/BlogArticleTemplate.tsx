/**
 * Blog Article Template Component
 * 
 * ⚠️ IMPORTANTE: TUTTI GLI ARTICOLI BLOG DEVONO USARE QUESTO TEMPLATE
 * 
 * Questo template automatico garantisce uniformità e coerenza in tutti gli articoli del blog.
 * 
 * ✅ COSA INCLUDE AUTOMATICAMENTE:
 * - Breadcrumbs dinamici con categoria (Home → Blog → Categoria → Articolo)
 * - Table of Contents (TOC) automatico da titoli H2/H3
 * - Meta tags SEO completi (title, description, keywords, OG, Twitter Card)
 * - Schema markup (Article + Breadcrumbs)
 * - Header, Footer, BlogNavigation
 * - ReadingProgress bar
 * - SocialShare buttons
 * - RelatedArticles
 * - FloatingWhatsApp
 * 
 * 📋 USAGE OBBLIGATORIO:
 * ```tsx
 * import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
 * 
 * export default function NomeArticolo() {
 *   const articleContent = (
 *     <div className="space-y-8">
 *       <section>
 *         <h2>Prima Sezione</h2>
 *         <p>Contenuto...</p>
 *       </section>
 *       <section>
 *         <h2>Seconda Sezione</h2>
 *         <h3>Sottosezione</h3>
 *         <p>Contenuto...</p>
 *       </section>
 *     </div>
 *   );
 * 
 *   return (
 *     <BlogArticleTemplate
 *       title="Titolo Completo | Giolab Assemini"
 *       description="Descrizione SEO 150-160 caratteri"
 *       keywords="keyword1, keyword2, Assemini, Cagliari"
 *       slug="titolo-articolo"
 *       ogImage="https://giolabriparazioni.it/og-images/nome.jpg"
 *       author="Giolab Team"
 *       datePublished="2025-01-27"
 *       category="Guide"
 *       content={articleContent}
 *       readingTime={8}
 *     />
 *   );
 * }
 * ```
 * 
 * 📂 CATEGORIE DISPONIBILI:
 * - "Guide" → /blog/guide
 * - "Assistenza" → /blog/assistenza-smartphone
 * - "Riparazione" → /blog/riparazione-iphone
 * - "Tecnologia" → /blog/riparazione-pc
 * - "Console" → /blog/console
 * - "Sicurezza" → /blog/sicurezza-digitale
 * 
 * 📖 DOCUMENTAZIONE COMPLETA: /BLOG_ARTICLE_STANDARD.md
 */

import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import ScrollToTop from "@/components/ScrollToTop";
import RelatedArticles from "@/components/RelatedArticles";
import ReadingProgress from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { getCanonicalUrl, extractPath } from "@/config/seoConfig";
import "@/styles/blog.css";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Calendar, Clock, List } from "lucide-react";
import { useState } from "react";
import type { BlogArticleData } from "@/types/blogArticle";

interface BlogArticleTemplateProps extends BlogArticleData {
  readingTime?: number; // tempo di lettura in minuti
}

export const BlogArticleTemplate = ({
  title,
  description,
  keywords,
  slug,
  ogImage,
  author = "Giolab Team",
  datePublished,
  category,
  content,
  readingTime = 5,
}: BlogArticleTemplateProps) => {
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  
  // Costruisci URL completo
  const fullUrl = `https://giolabriparazioni.it/blog/${slug}`;
  
  // Mappa categorie agli URL delle pagine categoria
  // ⚠️ IMPORTANTE: Queste mappature devono corrispondere alle route in App.tsx
  const categoryUrls: Record<string, { name: string; url: string }> = {
    "Guide": { name: "Guide e Consigli", url: "https://giolabriparazioni.it/blog/guide" },
    "Assistenza": { name: "Assistenza Smartphone", url: "https://giolabriparazioni.it/blog/assistenza-smartphone" },
    "Riparazione": { name: "Riparazione iPhone", url: "https://giolabriparazioni.it/blog/riparazione-iphone" },
    "Tecnologia": { name: "Riparazione PC", url: "https://giolabriparazioni.it/blog/riparazione-pc" },
    "Console": { name: "Console", url: "https://giolabriparazioni.it/blog/console" },
    "Sicurezza": { name: "Sicurezza Digitale", url: "https://giolabriparazioni.it/blog/sicurezza-digitale" },
    "Consigli": { name: "Guide e Consigli", url: "https://giolabriparazioni.it/blog/guide" },
  };
  
  // Genera breadcrumbs dinamicamente con categoria
  const categoryInfo = categoryUrls[category] || { name: category, url: "https://giolabriparazioni.it/blog" };
  const breadcrumbs = [
    { name: "Home", url: "https://giolabriparazioni.it/" },
    { name: "Blog", url: "https://giolabriparazioni.it/blog" },
    { name: categoryInfo.name, url: categoryInfo.url },
    { name: title.split("|")[0].trim(), url: fullUrl },
  ];

  // Estrai titolo pulito per display (rimuovi " | Giolab Assemini")
  const cleanTitle = title.split("|")[0].trim();
  
  // Formatta data in italiano
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        breadcrumbs={breadcrumbs}
        articleData={{
          headline: cleanTitle,
          description: description,
          author: author,
          datePublished: datePublished,
          image: ogImage,
          category: category,
        }}
      />
      
      <ReadingProgress />
      
      <div className="min-h-screen bg-background">
        <Header />
        <BackToBlog variant="top" />
        
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Contenuto principale articolo */}
            <article className="flex-1 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={extractPath(categoryInfo.url)}>{categoryInfo.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{cleanTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Metadati Articolo */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground border-b border-border pb-4">
            <Link 
              to={extractPath(categoryInfo.url)}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
            >
              {categoryInfo.name}
            </Link>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Pubblicato il {formatDate(datePublished)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min di lettura</span>
            </div>
          </div>
          
              {/* Main Article Content */}
              <article className="prose prose-lg max-w-none dark:prose-invert blog-content">
                {content}
              </article>
            </article>

            {/* Table of Contents Desktop - visibile solo su schermi XL */}
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents />
            </aside>
          </div>
        </div>

        {/* Pulsante floating mobile per TOC con label */}
        <Sheet open={isTOCOpen} onOpenChange={setIsTOCOpen}>
          <SheetTrigger asChild>
            <button 
              className="xl:hidden fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all group flex items-center gap-2"
              aria-label="Apri indice articolo"
            >
              <List className="w-5 h-5" />
              <span className="text-sm font-medium">Indice</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Indice dell'articolo</SheetTitle>
            </SheetHeader>
            <TableOfContents isMobile onItemClick={() => setIsTOCOpen(false)} />
          </SheetContent>
        </Sheet>

        <SocialShare title={cleanTitle} url={fullUrl} />

        <RelatedArticles currentSlug={slug} category={category} />
        
        <div className="container mx-auto px-4">
          <BackToBlog variant="bottom" />
        </div>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
