import { useEffect } from 'react';

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
}

const SEOHead = ({ 
  title = "Giolab Assemini | Riparazione iPhone, Smartphone, PC e Console",
  description = "Centro assistenza specializzato ad Assemini (CA). Riparazione smartphone, PC e console con garanzia 12 mesi. Riparazioni rapide anche in 1 ora. Preventivo gratuito.",
  keywords = "riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza PC Assemini, riparazione console Assemini",
  ogImage = "https://giolabriparazioni.it/og-image-giolab.jpg",
  ogType = "website",
  ogUrl = typeof window !== 'undefined' ? window.location.href.replace('giolab.lovable.app', 'giolabriparazioni.it') : 'https://giolabriparazioni.it',
  structuredData,
  breadcrumbs,
  articleData
}: SEOHeadProps) => {
  
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
      "url": "https://www.giolab-assemini.it"
    },
      "publisher": {
        "@type": "Organization",
        "name": "Giolab Assemini",
        "logo": {
          "@type": "ImageObject",
          "url": "https://giolabriparazioni.it/favicon.png",
          "width": "512",
          "height": "512"
        },
        "url": "https://giolabriparazioni.it",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Carmine 20A",
        "addressLocality": "Assemini",
        "postalCode": "09032",
        "addressCountry": "IT"
      },
      "telephone": "+39 340 69 70 686",
      "email": "giolabassemini@gmail.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ogUrl
    },
    ...(articleData.category && {
      "articleSection": articleData.category
    })
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
    
    // Canonical URL
    const canonicalUrl = ogUrl.replace('giolab.lovable.app', 'giolabriparazioni.it');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
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
  }, [title, description, keywords, ogImage, ogType, ogUrl, structuredData, breadcrumbSchema, articleSchema]);
  
  return null;
};

export default SEOHead;
