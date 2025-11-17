import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CANONICAL_DOMAIN, getCanonicalUrl, normalizeUrl, ORGANIZATION_SCHEMA } from '@/config/seoConfig';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface ArticleData {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  category?: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  structuredData?: object;
  breadcrumbs?: BreadcrumbItem[];
  articleData?: ArticleData;
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

const SEOHead = ({ 
  title = "Giolab Assemini | Riparazione iPhone, Smartphone, PC e Console",
  description = "Centro assistenza specializzato ad Assemini (CA). Riparazione smartphone, PC e console con garanzia 12 mesi. Riparazioni rapide anche in 1 ora. Preventivo gratuito.",
  keywords = "riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza PC Assemini, riparazione console Assemini",
  ogImage = `${CANONICAL_DOMAIN}/og-image-giolab.jpg`,
  ogType = "website",
  ogUrl,
  structuredData,
  breadcrumbs,
  articleData,
  faqData
}: SEOHeadProps) => {
  
  // Normalizza e genera URL canonico corretto
  const currentUrl = typeof window !== 'undefined' ? window.location.href : CANONICAL_DOMAIN;
  const canonicalUrl = ogUrl ? normalizeUrl(ogUrl) : normalizeUrl(currentUrl);
  const cleanCanonicalUrl = getCanonicalUrl(canonicalUrl.replace(CANONICAL_DOMAIN, ''));
  
  // Generate breadcrumb structured data if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url })
    }))
  } : null;

  // Generate Article structured data if article data is provided
  const articleSchema = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.headline,
    "description": articleData.description,
    "image": articleData.image,
    "datePublished": articleData.datePublished,
    "dateModified": articleData.dateModified || articleData.datePublished,
    "author": {
      "@type": "Person",
      "name": articleData.author,
      "url": CANONICAL_DOMAIN
    },
    "publisher": ORGANIZATION_SCHEMA,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": cleanCanonicalUrl
    },
    ...(articleData.category && {
      "articleSection": articleData.category
    })
  } : null;

  // Generate FAQPage structured data if FAQ data is provided
  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:secure_url', ogImage, 'property');
    updateMetaTag('og:image:type', ogImage.endsWith('.jpg') || ogImage.endsWith('.jpeg') ? 'image/jpeg' : 'image/png', 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', ogUrl, 'property');
    updateMetaTag('og:site_name', 'Giolab Assemini', 'property');
    updateMetaTag('og:locale', 'it_IT', 'property');
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@giolab_iphonefix');
    updateMetaTag('twitter:creator', '@giolab_iphonefix');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', title);
    
    // Manage canonical URL - sempre corretto e normalizzato
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cleanCanonicalUrl);
    
    // Add breadcrumb structured data
    if (breadcrumbSchema) {
      let breadcrumbScript = document.querySelector('script[type="application/ld+json"]#breadcrumb-schema');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('id', 'breadcrumb-schema');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }
    
    // Add Article structured data
    if (articleSchema) {
      let articleScript = document.querySelector('script[type="application/ld+json"]#article-schema');
      if (!articleScript) {
        articleScript = document.createElement('script');
        articleScript.setAttribute('type', 'application/ld+json');
        articleScript.setAttribute('id', 'article-schema');
        document.head.appendChild(articleScript);
      }
      articleScript.textContent = JSON.stringify(articleSchema);
    }
    
    // Add FAQPage structured data if FAQ data is provided
    if (faqSchema) {
      let faqScript = document.querySelector('script[type="application/ld+json"]#faq-service-schema');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.setAttribute('type', 'application/ld+json');
        faqScript.setAttribute('id', 'faq-service-schema');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    }
    
    // Add additional structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]#dynamic-schema');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', 'dynamic-schema');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, ogUrl, structuredData, breadcrumbSchema, articleSchema, faqSchema]);
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Giolab - Stefano Giordano" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL - Sempre normalizzato */}
      <link rel="canonical" href={cleanCanonicalUrl} />
      
      {/* Alternate hreflang */}
      <link rel="alternate" hrefLang="it" href={cleanCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={cleanCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={cleanCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Giolab Assemini" />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@giolab_iphonefix" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEOHead;
