/**
 * Blog Article Template Component - Astro-compatible
 * SEO is handled by Astro page <head>. Navigation uses plain <a> tags.
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import ScrollToTop from "@/components/ScrollToTop";
import RelatedArticles from "@/components/RelatedArticles";
import ReadingProgress from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { AutoLinkedContent } from "@/components/blog/AutoLinkedContent";
import { BlogSidebarCTA } from "@/components/blog/BlogSidebarCTA";
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
import { Calendar, Clock, List } from "lucide-react";
import { useState } from "react";
import type { BlogArticleData } from "@/types/blogArticle";

interface BlogArticleTemplateProps extends BlogArticleData {
  readingTime?: number;
}

export const BlogArticleTemplate = ({
  title,
  slug,
  datePublished,
  category,
  content,
  readingTime = 5,
}: BlogArticleTemplateProps) => {
  const [isTOCOpen, setIsTOCOpen] = useState(false);

  const fullUrl = `https://giolabriparazioni.it/blog/${slug}`;

  const categoryUrls: Record<string, { name: string; url: string }> = {
    "Guide": { name: "Guide e Consigli", url: "/blog" },
    "Assistenza": { name: "Assistenza Smartphone", url: "/blog" },
    "Riparazione": { name: "Riparazione iPhone", url: "/blog" },
    "Tecnologia": { name: "Riparazione PC", url: "/blog" },
    "Console": { name: "Console", url: "/blog" },
    "Sicurezza": { name: "Sicurezza Digitale", url: "/blog" },
    "Consigli": { name: "Guide e Consigli", url: "/blog" },
  };

  const categoryInfo = categoryUrls[category] || { name: category, url: "/blog" };
  const cleanTitle = title.split("|")[0].trim();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      <ReadingProgress />

      <div className="min-h-screen bg-background">
        <Header />
        <BackToBlog variant="top" currentSlug={slug} />

        <div className="container mx-auto px-4 pt-24 pb-8 overflow-x-hidden">
          <div className="flex gap-8 max-w-7xl mx-auto">
            <BlogSidebarCTA />

            <article className="flex-1 max-w-4xl min-w-0 overflow-x-hidden">
              {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild><a href="/">Home</a></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild><a href="/blog">Blog</a></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild><a href={categoryInfo.url}>{categoryInfo.name}</a></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{cleanTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Metadati */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground border-b border-border pb-4">
                <a href={categoryInfo.url} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors">
                  {categoryInfo.name}
                </a>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Pubblicato il {formatDate(datePublished)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min di lettura</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                {cleanTitle}
              </h1>

              <article className="prose prose-lg max-w-none dark:prose-invert blog-content overflow-x-hidden">
                <AutoLinkedContent currentSlug={slug}>
                  {content}
                </AutoLinkedContent>
              </article>
            </article>

            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents />
            </aside>
          </div>
        </div>

        {/* Mobile TOC */}
        <Sheet open={isTOCOpen} onOpenChange={setIsTOCOpen}>
          <SheetTrigger asChild>
            <button
              className="xl:hidden fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
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
          <BackToBlog variant="bottom" currentSlug={slug} />
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};
