import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CANONICAL_DOMAIN, getCanonicalUrl, normalizeUrl, extractPath, ORGANIZATION_SCHEMA } from '@/config/seoConfig';

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
  
  // SEO Best Practices: Limit title to 60 characters and description to 160 characters
  const MAX_TITLE_LENGTH = 60;
  const MAX_DESCRIPTION_LENGTH = 160;
  
  // Validate and warn in development mode
  if (import.meta.env.DEV) {
    if (title.length > MAX_TITLE_LENGTH) {
      console.warn(
        `⚠️ SEO Warning: Title is ${title.length} characters (max recommended: ${MAX_TITLE_LENGTH}).\nTitle: "${title}"\nConsider shortening it for better search appearance.`
      );
    }
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      console.warn(
        `⚠️ SEO Warning: Description is ${description.length} characters (max recommended: ${MAX_DESCRIPTION_LENGTH}).\nDescription: "${description}"\nConsider shortening it for better search appearance.`
      );
    }
  }
  
  // Truncate if exceeding limits (fallback safety)
  const sanitizedTitle = title.length > MAX_TITLE_LENGTH 
    ? title.substring(0, MAX_TITLE_LENGTH - 3) + '...' 
    : title;
  
  const sanitizedDescription = description.length > MAX_DESCRIPTION_LENGTH 
    ? description.substring(0, MAX_DESCRIPTION_LENGTH - 3) + '...' 
    : description;
  
  // Genera URL canonico corretto
  // URL di base: se è passato ogUrl lo usiamo, altrimenti usiamo l'URL corrente normalizzato
  const rawUrl = ogUrl 
    ? normalizeUrl(ogUrl) 
    : (typeof window !== 'undefined' ? normalizeUrl(window.location.href) : CANONICAL_DOMAIN);
  
  // Estraggo solo il path (es: /blog/articolo-1)
  const path = extractPath(rawUrl);
  
  // Genero l'URL canonico assoluto a partire dal path
  const cleanCanonicalUrl = getCanonicalUrl(path);
  
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
    document.title = sanitizedTitle;
    
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
    
    updateMetaTag('description', sanitizedDescription);
    updateMetaTag('keywords', keywords);
    
    // Open Graph meta tags
    updateMetaTag('og:title', sanitizedTitle, 'property');
    updateMetaTag('og:description', sanitizedDescription, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:secure_url', ogImage, 'property');
    updateMetaTag('og:image:type', ogImage.endsWith('.jpg') || ogImage.endsWith('.jpeg') ? 'image/jpeg' : 'image/png', 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', sanitizedTitle, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', cleanCanonicalUrl, 'property');
    updateMetaTag('og:site_name', 'Giolab Assemini', 'property');
    updateMetaTag('og:locale', 'it_IT', 'property');
    
    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@giolab_iphonefix');
    updateMetaTag('twitter:creator', '@giolab_iphonefix');
    updateMetaTag('twitter:title', sanitizedTitle);
    updateMetaTag('twitter:description', sanitizedDescription);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', sanitizedTitle);
    
    // Helper function to safely update or create schema script
    const updateSchemaScript = (id: string, schemaData: object | null) => {
      const existingScript = document.querySelector(`script[type="application/ld+json"]#${id}`);
      
      if (!schemaData) {
        // Remove script if schema data is null/undefined
        if (existingScript) {
          existingScript.remove();
        }
        return;
      }
      
      // Ensure schema has @context and @type
      if (!schemaData['@context'] || !schemaData['@type']) {
        console.warn(`Schema ${id} missing @context or @type`, schemaData);
        if (existingScript) {
          existingScript.remove();
        }
        return;
      }
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', id);
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      } else {
        existingScript.textContent = JSON.stringify(schemaData);
      }
    };
    
    // Add/update breadcrumb structured data
    updateSchemaScript('breadcrumb-schema', breadcrumbSchema);
    
    // Add/update Article structured data
    updateSchemaScript('article-schema', articleSchema);
    
    // Add/update FAQPage structured data
    updateSchemaScript('faq-service-schema', faqSchema);
    
    // Handle additional structured data (can be single object or array)
    if (structuredData) {
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      schemas.forEach((schema, index) => {
        // Skip empty or invalid schemas
        if (!schema || !schema['@context'] || !schema['@type']) {
          console.warn(`Invalid schema at index ${index}`, schema);
          return;
        }
        
        const schemaId = `dynamic-schema-${index}`;
        updateSchemaScript(schemaId, schema);
      });
      
      // Clean up any extra dynamic schemas that are no longer needed
      const dynamicSchemas = document.querySelectorAll('script[id^="dynamic-schema-"]');
      dynamicSchemas.forEach((script) => {
        const scriptId = script.getAttribute('id');
        const index = parseInt(scriptId?.replace('dynamic-schema-', '') || '0');
        if (index >= schemas.length) {
          script.remove();
        }
      });
    } else {
      // Remove all dynamic schemas if no structuredData provided
      const dynamicSchemas = document.querySelectorAll('script[id^="dynamic-schema"]');
      dynamicSchemas.forEach((script) => script.remove());
    }
  }, [sanitizedTitle, sanitizedDescription, keywords, ogImage, ogType, cleanCanonicalUrl, structuredData, breadcrumbSchema, articleSchema, faqSchema]);
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{sanitizedTitle}</title>
      <meta name="description" content={sanitizedDescription} />
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
      <meta property="og:title" content={sanitizedTitle} />
      <meta property="og:description" content={sanitizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={sanitizedTitle} />
      <meta property="og:site_name" content="Giolab Assemini" />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@giolab_iphonefix" />
      <meta name="twitter:title" content={sanitizedTitle} />
      <meta name="twitter:description" content={sanitizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={sanitizedTitle} />
    </Helmet>
  );
};

export default SEOHead;
