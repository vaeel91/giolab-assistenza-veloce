/**
 * Configurazione SEO Centralizzata - Giolab Riparazioni
 * 
 * DOMINIO CANONICO UFFICIALE: https://giolabriparazioni.it
 * 
 * Questo file contiene tutte le configurazioni SEO per garantire coerenza
 * su tutto il sito e facilitare la manutenzione.
 */

// ============= DOMINIO PRINCIPALE =============
export const CANONICAL_DOMAIN = 'https://giolabriparazioni.it';

// ============= BUSINESS INFO =============
export const BUSINESS_INFO = {
  name: 'Giolab Riparazioni Smartphone e PC',
  legalName: 'Giolab di Stefano Giordano',
  description: 'Centro assistenza specializzato in riparazione iPhone, smartphone, PC e console ad Assemini (Cagliari)',
  founder: 'Stefano Giordano',
  foundingDate: '2014',
  address: {
    street: 'Via Carmine 20',
    city: 'Assemini',
    province: 'CA',
    postalCode: '09032',
    country: 'Italia',
    countryCode: 'IT',
  },
  geo: {
    latitude: '39.2891',
    longitude: '8.9947',
  },
  contact: {
    phone: '+39 340 69 70 686',
    phoneDisplay: '340 69 70 686',
    email: 'giolabassemini@gmail.com',
    whatsapp: '+393406970686',
  },
  social: {
    instagram: 'https://www.instagram.com/giolab_iphonefix',
    facebook: 'https://www.facebook.com/giolabassemini',
    tiktok: 'https://www.tiktok.com/@giolab_iphonefix',
  },
  hours: {
    weekdays: 'Lun-Ven: 10:00-12:30, 16:00-19:00',
    saturday: 'Sab: Solo su appuntamento',
    sunday: 'Chiuso',
  },
};

// ============= SEO DEFAULTS =============
export const SEO_DEFAULTS = {
  titleTemplate: '%s | Giolab Assemini',
  defaultTitle: 'Giolab Assemini | Riparazione iPhone, Smartphone, PC e Console',
  defaultDescription: '🔧 Centro assistenza specializzato ad Assemini (CA). Riparazione smartphone, PC e console con garanzia 12 mesi. ⚡ Riparazioni rapide anche in 1 ora. Preventivo gratuito 📞 340 69 70 686',
  defaultKeywords: 'riparazione iPhone Assemini, riparazione smartphone Assemini, assistenza PC Assemini, riparazione console Assemini, riparazione smartphone Cagliari, assistenza iPhone Cagliari, batterie maggiorate iPhone, micro-saldature, recupero dati, rigenerazione vetro iPhone, Apple Watch riparazione',
  author: 'Giolab - Stefano Giordano',
  locale: 'it_IT',
  siteType: 'website',
};

// ============= IMAGES =============
export const SEO_IMAGES = {
  logo: `${CANONICAL_DOMAIN}/favicon.png`,
  ogDefault: `${CANONICAL_DOMAIN}/og-image-giolab.jpg`,
  ogBlog: {
    batteriaMaggiorata: `${CANONICAL_DOMAIN}/og-images/batteria-maggiorata-iphone.jpg`,
    recuperoDati: `${CANONICAL_DOMAIN}/og-images/recupero-dati-iphone.jpg`,
    riparazione1Ora: `${CANONICAL_DOMAIN}/og-images/riparazione-iphone-1-ora.jpg`,
  },
};

// ============= STRUCTURED DATA =============
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${CANONICAL_DOMAIN}/#organization`,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  description: BUSINESS_INFO.description,
  url: CANONICAL_DOMAIN,
  logo: SEO_IMAGES.logo,
};

// Schema LocalBusiness globale per Local SEO
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${CANONICAL_DOMAIN}/#business`,
  name: BUSINESS_INFO.name,
  alternateName: 'Giolab Assistenza Smartphone PC Console',
  legalName: BUSINESS_INFO.legalName,
  description: BUSINESS_INFO.description,
  url: CANONICAL_DOMAIN,
  logo: SEO_IMAGES.logo,
  image: SEO_IMAGES.ogDefault,
  telephone: BUSINESS_INFO.contact.phone,
  email: BUSINESS_INFO.contact.email,
  priceRange: '€€',
  vatID: 'IT03896540925',
  foundingDate: BUSINESS_INFO.foundingDate,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    postalCode: BUSINESS_INFO.address.postalCode,
    addressRegion: BUSINESS_INFO.address.province,
    addressCountry: BUSINESS_INFO.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_INFO.geo.latitude,
    longitude: BUSINESS_INFO.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '12:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/giolab_iphonefix',
    'https://www.facebook.com/giolabassemini',
    'https://www.tiktok.com/@giolab_iphonefix',
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Assemini',
      '@id': 'https://www.wikidata.org/wiki/Q390249',
    },
    {
      '@type': 'City',
      name: 'Cagliari',
      '@id': 'https://www.wikidata.org/wiki/Q1897',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Sardegna',
      '@id': 'https://www.wikidata.org/wiki/Q1462',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

// ============= UTILITY FUNCTIONS =============

/**
 * Genera l'URL canonico completo per una pagina
 */
export const getCanonicalUrl = (urlOrPath: string = ''): string => {
  if (!urlOrPath) return CANONICAL_DOMAIN;

  // Se già contiene http, normalizzo e restituisco
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
    return normalizeUrl(urlOrPath);
  }

  // Altrimenti considero il valore come path relativo
  const cleanPath = urlOrPath.replace(/^\/+/, '');
  return cleanPath ? `${CANONICAL_DOMAIN}/${cleanPath}` : CANONICAL_DOMAIN;
};

/**
 * Normalizza un URL rimuovendo riferimenti a domini vecchi
 */
export const normalizeUrl = (url: string): string => {
  if (!url) return CANONICAL_DOMAIN;

  let cleaned = url.trim();

  // Rimpiazza vecchi domini con quello canonico
  cleaned = cleaned.replace(/https?:\/\/giolab\.lovable\.app/gi, CANONICAL_DOMAIN);
  cleaned = cleaned.replace(/https?:\/\/www\.giolab-assemini\.it/gi, CANONICAL_DOMAIN);

  // Forza HTTPS
  cleaned = cleaned.replace(/^http:\/\//i, 'https://');

  // Rimuove slash duplicati dopo il dominio
  cleaned = cleaned.replace(`${CANONICAL_DOMAIN}//`, `${CANONICAL_DOMAIN}/`);

  return cleaned;
};

/**
 * Genera meta tags Open Graph completi
 */
export const generateOGTags = (params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}) => {
  return {
    'og:site_name': BUSINESS_INFO.name,
    'og:title': params.title,
    'og:description': params.description,
    'og:url': normalizeUrl(params.url),
    'og:image': params.image || SEO_IMAGES.ogDefault,
    'og:image:secure_url': params.image || SEO_IMAGES.ogDefault,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': params.type || 'website',
    'og:locale': SEO_DEFAULTS.locale,
  };
};

/**
 * Genera meta tags Twitter Card
 */
export const generateTwitterTags = (params: {
  title: string;
  description: string;
  image?: string;
}) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': params.title,
    'twitter:description': params.description,
    'twitter:image': params.image || SEO_IMAGES.ogDefault,
  };
};

/**
 * Estrae il percorso relativo da un URL completo
 */
export const extractPath = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname + urlObj.search + urlObj.hash;
  } catch {
    return url;
  }
};
