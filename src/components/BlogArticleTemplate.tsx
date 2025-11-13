/**
 * Blog Article Template Component
 * 
 * Template automatico per articoli del blog con SEO pre-configurato.
 * Gestisce automaticamente:
 * - Meta tags (title, description, keywords)
 * - Open Graph tags
 * - Schema markup (Breadcrumb + Article)
 * - Componenti comuni (Header, Footer, Navigation, Social Share, etc.)
 * 
 * Usage:
 * ```tsx
 * <BlogArticleTemplate
 *   title="Come Capire se la Batteria iPhone va Sostituita | Giolab Assemini"
 *   description="Scopri i segnali che indicano quando sostituire la batteria..."
 *   keywords="batteria iPhone, sostituzione batteria, Assemini"
 *   slug="come-capire-batteria-iphone-sostituire"
 *   ogImage="https://giolabriparazioni.it/og-images/nome-file.jpg"
 *   author="Giolab Team"
 *   datePublished="2025-01-15"
 *   category="Guide"
 * >
 *   {contenuto articolo}
 * </BlogArticleTemplate>
 * ```
 */

import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogNavigation from "@/components/BlogNavigation";
import SocialShare from "@/components/SocialShare";
import RelatedArticles from "@/components/RelatedArticles";
import ReadingProgress from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
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
  // Costruisci URL completo
  const fullUrl = `https://giolabriparazioni.it/blog/${slug}`;
  
  // Genera breadcrumbs automaticamente
  const breadcrumbs = [
    { name: "Home", url: "https://giolabriparazioni.it/" },
    { name: "Blog", url: "https://giolabriparazioni.it/blog" },
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
        <BlogNavigation />
        
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
                <BreadcrumbPage>{cleanTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Metadati Articolo */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Pubblicato il {formatDate(datePublished)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min di lettura</span>
            </div>
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              {category}
            </div>
          </div>
          
              {content}
            </article>

            {/* Table of Contents - visibile solo su desktop XL */}
            <aside className="w-64 flex-shrink-0">
              <TableOfContents />
            </aside>
          </div>
        </div>

        <SocialShare title={cleanTitle} url={fullUrl} />

        <RelatedArticles currentSlug={slug} category={category} />
        
        <Footer />
      </div>
    </>
  );
};
