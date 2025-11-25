import { BlogArticle } from "@/types/blogArticle";
import recuperoDatiIPhoneRottoAssemini from "@/assets/recupero-dati-iphone-rotto-assemini.jpg";
import batteriaMaggiorataIPhoneAssemini from "@/assets/batteria-maggiorata-iphone-assemini.jpg";
import riparazioneIPhone1OraAssemini from "@/assets/riparazione-iphone-1-ora-assemini.jpg";
import rigenerazioneVetro from "/og-images/rigenerazione-vetro.jpg";
import manutenzionePS5 from "/og-images/manutenzione-playstation-5.jpg";
import codiceModelloDispositivo from "/og-images/codice-modello-dispositivo.jpg";

export const blogArticles: BlogArticle[] = [
  {
    slug: "riparazione-iphone-1-ora-giolab-assemini",
    title: "Riparazione iPhone in 1 Ora ad Assemini",
    description: "Servizio rapido di riparazione iPhone. Display, batteria, fotocamera in solo 1 ora con garanzia 12 mesi.",
    date: "2025-01-27",
    readTime: "7 min",
    category: "Riparazione",
    image: riparazioneIPhone1OraAssemini
  },
  {
    slug: "batteria-maggiorata-iphone-giolab-assemini",
    title: "Batteria Maggiorata iPhone: +30% Autonomia",
    description: "Installa batteria maggiorata su iPhone. Fino al 30% di autonomia in più con certificazioni di sicurezza.",
    date: "2025-01-27",
    readTime: "8 min",
    category: "Assistenza",
    image: batteriaMaggiorataIPhoneAssemini
  },
  {
    slug: "recupero-dati-iphone-rotto-assemini",
    title: "Recupero Dati da iPhone Rotto",
    description: "Recupero professionale dati da iPhone danneggiati. Microsaldature e estrazione chip NAND.",
    date: "2025-01-27",
    readTime: "9 min",
    category: "Guide",
    image: recuperoDatiIPhoneRottoAssemini
  },
  {
    slug: "display-originali-vs-compatibili",
    title: "Display Originali vs Compatibili per iPhone",
    description: "Guida completa alla scelta tra display originale e compatibile per iPhone. Differenze reali, pro e contro.",
    date: "2025-01-01",
    readTime: "9 min",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop"
  },
  {
    slug: "rigenerazione-vetro-iphone-ipad-apple-watch",
    title: "Rigenerazione vetro su iPhone, iPad e Apple Watch",
    description: "Guida completa al processo di rigenerazione del solo vetro per iPhone, iPad e Apple Watch ad Assemini (Cagliari). Risparmio, qualità e vantaggi tecnici spiegati in modo semplice.",
    date: "2025-01-01",
    readTime: "8 min",
    category: "Guide",
    image: rigenerazioneVetro
  },
  {
    slug: "manutenzione-playstation-5",
    title: "La guida definitiva alla manutenzione della tua PlayStation 5",
    description: "Surriscaldamento PS5, metallo liquido e manutenzione professionale: tutto quello che devi sapere ad Assemini (Cagliari).",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Guide",
    image: manutenzionePS5
  },
  {
    slug: "come-trovare-codice-modello-dispositivo-giolab-assemini",
    title: "Come Trovare il Codice Modello del Tuo Dispositivo",
    description: "Guida completa per identificare il codice modello di iPhone, Samsung, Xiaomi, iPad e MacBook anche se non si accendono",
    date: "2025-11-25",
    readTime: "7 min",
    category: "Guide",
    image: codiceModelloDispositivo
  }
];
