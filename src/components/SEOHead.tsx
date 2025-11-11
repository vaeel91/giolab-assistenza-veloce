import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title = "Giolab Assemini | Riparazione iPhone, Smartphone, PC e Console",
  description = "Centro assistenza specializzato ad Assemini (CA). Riparazione smartphone, PC e console con garanzia 12 mesi. Riparazioni rapide anche in 1 ora. Preventivo gratuito.",
  keywords = "riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza PC Assemini, riparazione console Assemini",
  ogImage = typeof window !== 'undefined' ? `${window.location.origin}/og-image-giolab.jpg` : '/og-image-giolab.jpg',
  ogType = "website",
  ogUrl = typeof window !== 'undefined' ? window.location.href : '',
  structuredData
}: SEOHeadProps) => {
  
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
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
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
    
    // Add structured data if provided
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
  }, [title, description, keywords, ogImage, ogType, ogUrl, structuredData]);
  
  return null;
};

export default SEOHead;
