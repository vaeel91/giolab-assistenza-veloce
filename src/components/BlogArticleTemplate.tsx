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
import type { BlogArticleData } from "@/types/blogArticle";

interface BlogArticleTemplateProps extends BlogArticleData {}

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
        
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {content}
        </article>

        <SocialShare title={cleanTitle} url={fullUrl} />

        <RelatedArticles currentSlug={slug} category={category} />
        
        <Footer />
      </div>
    </>
  );
};
