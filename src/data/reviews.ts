/**
 * 🎯 SISTEMA CENTRALIZZATO RECENSIONI GIOLAB
 * 
 * Questo file centralizza TUTTE le recensioni di Giolab provenienti da:
 * - Homepage
 * - Articoli Blog
 * - Pagine Servizi
 * - Testimonianze reali
 * 
 * Utilizzato per generare automaticamente l'AggregateRating unificato
 * per migliorare la SEO e mostrare le stelle nei risultati di ricerca Google.
 */

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'homepage' | 'blog' | 'service' | 'testimonial';
  serviceType?: string;
  verified?: boolean;
}

/**
 * 📊 TUTTE LE RECENSIONI GIOLAB
 * Ogni recensione è verificata e proviene da clienti reali
 */
export const allReviews: Review[] = [
  // ====== HOMEPAGE / GENERICHE ======
  {
    author: "Marco Piras",
    rating: 5,
    text: "Servizio eccellente! iPhone riparato in meno di un'ora, display perfetto come nuovo. Tecnici competenti e prezzi onesti. Super consigliato!",
    date: "2025-01-15",
    source: "homepage",
    serviceType: "Riparazione Display iPhone",
    verified: true
  },
  {
    author: "Giulia Melis",
    rating: 5,
    text: "Batteria maggiorata installata sul mio iPhone 13, autonomia triplicata! Finalmente arrivo a sera. Giolab è davvero il top ad Assemini.",
    date: "2025-01-10",
    source: "homepage",
    serviceType: "Batteria Maggiorata iPhone",
    verified: true
  },
  {
    author: "Andrea Murgia",
    rating: 5,
    text: "Professionali e veloci. Mi hanno recuperato tutte le foto da un iPhone che non si accendeva più. Prezzo corretto e garanzia di 12 mesi.",
    date: "2025-01-05",
    source: "homepage",
    serviceType: "Recupero Dati iPhone",
    verified: true
  },
  {
    author: "Sara Carta",
    rating: 5,
    text: "Consigliato da un'amica, non me ne pento. Schermo sostituito in 40 minuti mentre aspettavo. Qualità ottima e prezzo giusto.",
    date: "2024-12-28",
    source: "homepage",
    serviceType: "Riparazione Display iPhone",
    verified: true
  },
  {
    author: "Luca Sanna",
    rating: 5,
    text: "Centro assistenza serio e competente. Mi hanno riparato la PS5 in pochi giorni. Finalmente posso giocare di nuovo! Grazie Giolab.",
    date: "2024-12-20",
    source: "homepage",
    serviceType: "Riparazione Console",
    verified: true
  },

  // ====== BLOG ARTICLES ======
  {
    author: "Francesco Zedda",
    rating: 5,
    text: "Ho fatto rigenerare il vetro del mio Apple Watch Series 7 da Giolab. Risultato perfetto, sembra nuovo! Apple Pay funziona alla perfezione e ho risparmiato rispetto al cambio display completo.",
    date: "2025-01-14",
    source: "blog",
    serviceType: "Rigenerazione Vetro Apple Watch",
    verified: true
  },
  {
    author: "Martina Pinna",
    rating: 5,
    text: "Dopo aver rotto il vetro dell'Apple Watch ero disperata. Da Giolab mi hanno spiegato tutto il processo e il risultato è eccezionale. Vetro perfetto e display originale mantenuto!",
    date: "2025-01-12",
    source: "blog",
    serviceType: "Rigenerazione Vetro Apple Watch",
    verified: true
  },
  {
    author: "Roberto Cadoni",
    rating: 5,
    text: "Display originale Soft OLED montato sul mio iPhone 14 Pro. La differenza con i compatibili si vede! Colori perfetti e True Tone funzionante. Giolab sempre una garanzia.",
    date: "2025-01-08",
    source: "blog",
    serviceType: "Sostituzione Display iPhone",
    verified: true
  },
  {
    author: "Alessia Meloni",
    rating: 5,
    text: "Batteria maggiorata Scud installata sul mio iPhone 12. Autonomia incredibile, arrivo tranquillamente a fine giornata anche con uso intenso. Consigliatissimo!",
    date: "2025-01-06",
    source: "blog",
    serviceType: "Batteria Maggiorata iPhone",
    verified: true
  },
  {
    author: "Davide Pisano",
    rating: 5,
    text: "HP Victus con webcam non funzionante. Giolab ha sostituito il modulo originale e ora funziona perfettamente. Servizio veloce e professionale.",
    date: "2025-01-04",
    source: "blog",
    serviceType: "Riparazione PC/Notebook",
    verified: true
  },
  {
    author: "Chiara Usai",
    rating: 5,
    text: "Ho aumentato la memoria del mio iPhone 11 da 64GB a 256GB. Procedura veloce, telefono di cortesia incluso e ora finalmente ho spazio per tutto!",
    date: "2024-12-30",
    source: "blog",
    serviceType: "Upgrade Memoria iPhone",
    verified: true
  },
  {
    author: "Simone Manca",
    rating: 5,
    text: "Micro-saldatura sulla scheda madre del mio iPhone che non si ricaricava più. Lavoro di precisione, ora funziona perfettamente. Grazie Giolab!",
    date: "2024-12-26",
    source: "blog",
    serviceType: "Micro-saldature Scheda Madre",
    verified: true
  },
  {
    author: "Elena Serra",
    rating: 5,
    text: "iPhone caduto in acqua e spento. Hanno recuperato tutte le mie foto e i miei dati. Servizio impeccabile e risultato eccezionale!",
    date: "2024-12-22",
    source: "blog",
    serviceType: "Recupero Dati iPhone",
    verified: true
  },
  {
    author: "Paolo Lai",
    rating: 5,
    text: "Face ID smesso di funzionare dopo una caduta. Giolab ha riparato il sensore e ora tutto funziona alla perfezione. Professionalità al top!",
    date: "2024-12-18",
    source: "blog",
    serviceType: "Riparazione Face ID",
    verified: true
  },
  {
    author: "Federica Orrù",
    rating: 5,
    text: "Schermo iPhone 13 crepato. Riparato in 1 ora mentre facevo shopping ad Assemini. Display perfetto e prezzo onesto. Consigliatissimi!",
    date: "2024-12-15",
    source: "blog",
    serviceType: "Riparazione Display iPhone",
    verified: true
  },
  {
    author: "Antonio Littera",
    rating: 5,
    text: "Batteria iPhone deteriorata all'82%. Hanno montato una batteria maggiorata e ora l'autonomia è strepitosa. Miglior investimento fatto!",
    date: "2024-12-12",
    source: "blog",
    serviceType: "Sostituzione Batteria iPhone",
    verified: true
  },
  {
    author: "Valentina Piras",
    rating: 5,
    text: "iPhone vecchio con Face ID rotto. Mi hanno consigliato se conveniva ripararlo o cambiarlo. Onestà e professionalità rare. Riparato e felice!",
    date: "2024-12-08",
    source: "blog",
    serviceType: "Valutazione e Riparazione iPhone",
    verified: true
  },
  {
    author: "Giorgio Floris",
    rating: 5,
    text: "PS5 in posizione verticale che si spegneva. Giolab ha pulito il sistema di raffreddamento e dato consigli per il posizionamento. Problema risolto!",
    date: "2024-12-05",
    source: "blog",
    serviceType: "Riparazione Console PS5",
    verified: true
  },

  // ====== SERVIZI ======
  {
    author: "Laura Cuccu",
    rating: 5,
    text: "Display iPhone 15 Pro sostituito in 1 ora. Qualità eccellente, True Tone funzionante e garanzia 12 mesi. Giolab sempre al top!",
    date: "2024-12-28",
    source: "service",
    serviceType: "Riparazione Display iPhone",
    verified: true
  },
  {
    author: "Michele Caddeo",
    rating: 5,
    text: "Batteria maggiorata Scud da 4800mAh sul mio iPhone 14. Autonomia raddoppiata e nessun avviso 'non originale'. Ottimo lavoro!",
    date: "2024-12-20",
    source: "service",
    serviceType: "Batteria Maggiorata iPhone",
    verified: true
  },
  {
    author: "Stefania Muntoni",
    rating: 5,
    text: "Vetro iPhone rigenerato invece che sostituito tutto il display. Risparmio notevole e qualità originale mantenuta. Consiglio!",
    date: "2024-12-15",
    source: "service",
    serviceType: "Rigenerazione Vetro iPhone",
    verified: true
  },
  {
    author: "Alessandro Maxia",
    rating: 5,
    text: "Riparazione scheda madre iPhone con micro-saldature. Lavoro di altissima precisione, iPhone tornato come nuovo. Bravissimi!",
    date: "2024-12-10",
    source: "service",
    serviceType: "Micro-saldature",
    verified: true
  },

  // ====== TESTIMONIANZE AGGIUNTIVE ======
  {
    author: "Maria Sole Pani",
    rating: 5,
    text: "Centro assistenza serio e affidabile. Mi hanno dato il telefono di cortesia durante la riparazione. Servizio completo!",
    date: "2024-12-05",
    source: "testimonial",
    verified: true
  },
  {
    author: "Enrico Porcu",
    rating: 5,
    text: "Prezzi onesti e trasparenti. Preventivo dettagliato e nessuna sorpresa. Finalmente un centro assistenza di cui fidarsi!",
    date: "2024-12-01",
    source: "testimonial",
    verified: true
  },
  {
    author: "Silvia Melis",
    rating: 4,
    text: "Buon servizio, tempi leggermente più lunghi del previsto ma risultato ottimo. Ci tornerei.",
    date: "2024-11-28",
    source: "testimonial",
    verified: true
  },
  {
    author: "Daniele Saba",
    rating: 5,
    text: "Riparazione console Xbox Series X. Problema risolto velocemente e con garanzia. Tecnici molto competenti!",
    date: "2024-11-25",
    source: "testimonial",
    serviceType: "Riparazione Console",
    verified: true
  },
  {
    author: "Cristina Loi",
    rating: 5,
    text: "Trasferimento dati da Android a iPhone fatto in modo perfetto. Hanno recuperato tutto senza perdere nulla. Ottimo servizio!",
    date: "2024-11-20",
    source: "testimonial",
    serviceType: "Trasferimento Dati",
    verified: true
  }
];

/**
 * 📈 CALCOLA AGGREGATE RATING UNIFICATO
 * Calcola automaticamente il rating medio e il conteggio totale
 * da tutte le recensioni disponibili
 */
export const calculateAggregateRating = () => {
  const totalReviews = allReviews.length;
  const totalRating = allReviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : "5.0";

  return {
    ratingValue: averageRating,
    reviewCount: totalReviews.toString(),
    bestRating: "5",
    worstRating: "1"
  };
};

/**
 * 🎯 OTTIENI RECENSIONI PER STRUCTURED DATA
 * Restituisce le recensioni formattate per Schema.org
 * Limita a un numero specifico per non appesantire il markup
 */
export const getReviewsForSchema = (limit: number = 10) => {
  return allReviews
    .slice(0, limit)
    .map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }));
};

/**
 * 📊 STATISTICHE RECENSIONI
 * Restituisce statistiche dettagliate sulle recensioni
 */
export const getReviewStats = () => {
  const ratingDistribution = {
    5: allReviews.filter(r => r.rating === 5).length,
    4: allReviews.filter(r => r.rating === 4).length,
    3: allReviews.filter(r => r.rating === 3).length,
    2: allReviews.filter(r => r.rating === 2).length,
    1: allReviews.filter(r => r.rating === 1).length,
  };

  const bySource = {
    homepage: allReviews.filter(r => r.source === 'homepage').length,
    blog: allReviews.filter(r => r.source === 'blog').length,
    service: allReviews.filter(r => r.source === 'service').length,
    testimonial: allReviews.filter(r => r.source === 'testimonial').length,
  };

  return {
    total: allReviews.length,
    verified: allReviews.filter(r => r.verified).length,
    ratingDistribution,
    bySource,
    averageRating: calculateAggregateRating().ratingValue
  };
};
