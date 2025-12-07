/**
 * Configurazione centralizzata delle informazioni aziendali di Giolab
 * Questo file contiene tutti i dati di contatto, orari e informazioni
 * che vengono usati in tutto il sito per garantire coerenza.
 */

export const BUSINESS_INFO = {
  // Informazioni generali
  name: "Giolab",
  fullName: "Giolab Riparazioni Smartphone e PC",
  description: "Centro assistenza specializzato in riparazione smartphone, PC e console ad Assemini (CA)",
  
  // Indirizzo
  address: {
    street: "Via Carmine 20",
    streetFull: "Via Carmine 20",
    city: "Assemini",
    province: "CA",
    provinceCode: "Cagliari",
    postalCode: "09032",
    country: "Italia",
    countryCode: "IT",
    full: "Via Carmine 20, 09032 Assemini (CA)",
    fullWithPostalCode: "Via Carmine 20, 09032 Assemini (CA)",
  },
  
  // Coordinate GPS
  geo: {
    latitude: "39.2891",
    longitude: "8.9947",
  },
  
  // Contatti
  contacts: {
    phone: "340 69 70 686",
    phoneInternational: "+393406970686",
    phoneFormatted: "340-69-70-686",
    email: "giolabassemini@gmail.com",
    whatsapp: "393406970686",
    whatsappMessage: "Ciao! Vorrei richiedere informazioni sui vostri servizi.",
  },
  
  // Social Media
  social: {
    instagram: {
      url: "https://instagram.com/giolab_iphonefix",
      handle: "@giolab_iphonefix",
    },
    facebook: {
      url: "https://facebook.com/giolabassemini",
      handle: "giolabassemini",
    },
    tiktok: {
      url: "https://www.tiktok.com/@giolab_iphonefix",
      handle: "@giolab_iphonefix",
    },
  },
  
  // Orari di apertura
  openingHours: {
    // Formato leggibile per UI
    display: {
      weekdays: "Lun-Ven: 9:00-13:00 / 16:00-20:00",
      saturday: "Sab: 10:00-12:30",
      sunday: "Domenica: Chiuso",
      full: "Lun-Ven: 9:00-13:00 / 16:00-20:00 | Sab: 10:00-12:30",
      compact: "Lun-Ven 9:00-13:00 / 16:00-20:00 | Sab 10:00-12:30",
    },
    
    // Formato strutturato per componenti
    structured: {
      monday: { morning: "9:00 - 13:00", afternoon: "16:00 - 20:00" },
      tuesday: { morning: "9:00 - 13:00", afternoon: "16:00 - 20:00" },
      wednesday: { morning: "9:00 - 13:00", afternoon: "16:00 - 20:00" },
      thursday: { morning: "9:00 - 13:00", afternoon: "16:00 - 20:00" },
      friday: { morning: "9:00 - 13:00", afternoon: "16:00 - 20:00" },
      saturday: { morning: "10:00 - 12:30", afternoon: null },
      sunday: { closed: true },
    },
    
    // Formato Schema.org per JSON-LD
    schema: [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "16:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "12:30"
      }
    ],
  },
  
  // Informazioni legali
  legal: {
    vatId: "IT03896540925",
    foundingYear: "2014",
  },
  
  // URL
  urls: {
    website: "https://giolabriparazioni.it",
    googleMaps: "https://maps.google.com/?q=Via+Carmine+20+Assemini+CA",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8406487877!2d9.000000000000000!3d39.283333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e73440c7e6cf27%3A0x9a0e0c0c0c0c0c0c!2sVia%20Carmine%2C%2020%2C%2009032%20Assemini%20CA!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit",
  },
  
  // Servizi offerti
  services: [
    "Riparazione iPhone",
    "Riparazione Smartphone",
    "Assistenza PC",
    "Riparazione Console",
    "Batterie Maggiorate",
    "Micro-saldature",
    "Recupero Dati",
    "Rigenerazione Vetro"
  ],
  
  // Aree servite
  areasServed: ["Assemini", "Cagliari", "Sardegna"],
  
  // Rating
  rating: {
    value: "4.9",
    count: "150",
    max: "5",
  },
} as const;

// Utility functions per accesso rapido
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || BUSINESS_INFO.contacts.whatsappMessage;
  return `https://wa.me/${BUSINESS_INFO.contacts.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const getPhoneLink = () => {
  return `tel:${BUSINESS_INFO.contacts.phoneInternational}`;
};

export const getEmailLink = () => {
  return `mailto:${BUSINESS_INFO.contacts.email}`;
};

export const getGoogleMapsLink = () => {
  return BUSINESS_INFO.urls.googleMaps;
};
