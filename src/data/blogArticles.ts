import { BlogArticle } from "@/types/blogArticle";
import recuperoDatiIPhoneRottoAssemini from "@/assets/recupero-dati-iphone-rotto-assemini.jpg";
import batteriaMaggiorataIPhoneAssemini from "@/assets/batteria-maggiorata-iphone-assemini.jpg";
import riparazioneIPhone1OraAssemini from "@/assets/riparazione-iphone-1-ora-assemini.jpg";

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
  }
];
