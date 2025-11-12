# Guida SEO per Articoli del Blog Giolab

## Obiettivo

Questa guida documenta tutte le best practices SEO implementate sul blog Giolab per garantire massima visibilità sui motori di ricerca e coerenza nei contenuti futuri.

---

## 1. Struttura Base di un Articolo

Ogni articolo del blog deve seguire questa struttura:

```tsx
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogNavigation } from "@/components/BlogNavigation";
import { SocialShare } from "@/components/SocialShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ReadingProgress } from "@/components/ReadingProgress";

const NomeArticolo = () => {
  return (
    <>
      <SEOHead
        title="Titolo Ottimizzato | Giolab Assemini"
        description="Meta description 150-160 caratteri con keyword principale"
        keywords="keyword1, keyword2, keyword3, keyword locale"
        ogImage="https://giolabriparazioni.it/og-images/nome-file.jpg"
        breadcrumbs={[
          { name: "Home", url: "https://giolabriparazioni.it/" },
          { name: "Blog", url: "https://giolabriparazioni.it/blog" },
          { name: "Titolo Articolo", url: "https://giolabriparazioni.it/blog/slug-articolo" }
        ]}
        article={{
          description: "Breve descrizione dell'articolo",
          author: "Giolab Team",
          datePublished: "2025-01-15",
          image: "https://giolabriparazioni.it/og-images/nome-file.jpg",
          category: "Guide" // o "Assistenza", "Riparazione", etc.
        }}
      />
      <ReadingProgress />
      <div className="min-h-screen bg-background">
        <Header />
        <BlogNavigation />
        
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Contenuto articolo */}
        </article>

        <SocialShare 
          title="Titolo Articolo"
          url="https://giolabriparazioni.it/blog/slug-articolo"
        />

        <RelatedArticles currentArticleId="slug-articolo" />
        
        <Footer />
      </div>
    </>
  );
};
```

---

## 2. Meta Tags Obbligatori

### Title Tag
- **Formato**: `Keyword Principale | Giolab Assemini`
- **Lunghezza**: Massimo 60 caratteri
- **Esempio**: `Come Capire se la Batteria iPhone va Sostituita | Giolab Assemini`

### Meta Description
- **Lunghezza**: 150-160 caratteri
- **Contenuto**: Deve includere keyword principale + località + call-to-action
- **Esempio**: `Scopri i segnali che indicano quando sostituire la batteria iPhone. Guida dal centro Giolab di Assemini con consigli pratici.`

### Keywords
- Minimo 4-5 keywords separate da virgola
- Includere sempre varianti locali (Assemini, Cagliari)
- **Esempio**: `batteria iPhone sostituire, segnali batteria iPhone, Assemini, riparazione iPhone Cagliari`

### Open Graph Image
- **Dimensioni**: 1200x630px
- **Posizione**: `/public/og-images/nome-file.jpg`
- **URL completo**: `https://giolabriparazioni.it/og-images/nome-file.jpg`
- **Contenuto**: Logo Giolab + Titolo articolo su sfondo branded

---

## 3. Schema Markup (JSON-LD)

Ogni articolo implementa automaticamente tramite `SEOHead`:

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://giolabriparazioni.it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://giolabriparazioni.it/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Titolo Articolo",
      "item": "https://giolabriparazioni.it/blog/slug"
    }
  ]
}
```

### Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titolo Articolo",
  "description": "Descrizione articolo",
  "author": {
    "@type": "Organization",
    "name": "Giolab Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Giolab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://giolabriparazioni.it/giolab-logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "image": "https://giolabriparazioni.it/og-images/nome-file.jpg"
}
```

---

## 4. Struttura dei Contenuti

### Heading Hierarchy

#### H1 (Uno solo per articolo)
- Titolo principale dell'articolo
- Deve contenere la keyword principale
- **Esempio**: `Come Capire se la Batteria del tuo iPhone va Sostituita`

#### H2 (Sezioni principali)
- Suddividono l'articolo in sezioni logiche
- Includere keyword secondarie quando naturale
- **Esempi**:
  - `Segnali che la Batteria del tuo iPhone è da Sostituire`
  - `Come Verificare la Salute della Batteria iPhone`
  - `Quando Rivolgersi a Giolab per la Sostituzione`

#### H3 (Sottosezioni)
- Dettagli all'interno delle sezioni H2
- **Esempi**:
  - `1. Ricarica Troppo Frequente`
  - `2. Spegnimenti Improvvisi`

### Lunghezza Contenuto
- **Minimo**: 600 parole
- **Ottimale**: 800-1200 parole
- **Massimo**: Non oltre 2000 parole per mantenere engagement

### Densità Keyword
- Keyword principale: 2-3% (circa 2-3 volte ogni 100 parole)
- Inserimento naturale, mai forzato
- Varianti e sinonimi per evitare keyword stuffing

---

## 5. SEO Locale

### Località da Menzionare
- **Primaria**: Assemini
- **Secondaria**: Cagliari
- **Zona**: Hinterland cagliaritano

### Come Integrarle
```markdown
✅ CORRETTO:
"Se hai bisogno di sostituire la batteria del tuo iPhone ad Assemini, 
Giolab offre un servizio rapido e professionale."

"Il nostro centro assistenza a Cagliari e dintorni garantisce..."

❌ SBAGLIATO:
"Assemini batteria iPhone Cagliari riparazione"
(keyword stuffing non naturale)
```

### Riferimenti a Giolab
- Menzionare almeno 2-3 volte il nome "Giolab"
- Includere link alla pagina servizi pertinente
- CTA finale con riferimento locale

---

## 6. Immagini e Media

### Immagini Featured
- **Alt Text**: Sempre descrittivo con keyword
- **Formato**: WEBP o JPG ottimizzato
- **Dimensioni**: Max 200KB per immagine
- **Esempio Alt**: `Tecnico Giolab che sostituisce batteria iPhone ad Assemini`

### Open Graph Image
- Generata con dimensioni 1200x630px
- Include logo Giolab
- Testo leggibile del titolo articolo
- Salvata in `/public/og-images/`

---

## 7. Link Interni ed Esterni

### Link Interni (Obbligatori)
Ogni articolo deve includere:

1. **Link ad articolo correlato** (minimo 1)
   ```tsx
   <a href="/blog/articolo-correlato">testo anchor</a>
   ```

2. **Link a pagina servizio** (minimo 1)
   ```tsx
   <a href="/servizi/riparazione-display-iphone-assemini">
     Scopri il nostro servizio
   </a>
   ```

### Anchor Text
- Descrittivo e naturale
- Mai generico ("clicca qui", "leggi di più")
- **Esempio**: `scopri come funziona il servizio di sostituzione batteria`

---

## 8. Call-to-Action (CTA)

Ogni articolo deve concludere con:

### CTA Testuale
```markdown
## Hai Bisogno di Assistenza?

Se hai notato uno di questi segnali sul tuo iPhone, non aspettare! 
Contatta Giolab ad Assemini per una diagnosi gratuita e un preventivo 
senza impegno. Siamo in Via Carmine 20, aperti dal lunedì al sabato.
```

### Link Contatto
- WhatsApp: Sempre presente nel pulsante floating
- Pagina Contatti: Link diretto
- Telefono: `tel:340-69-70-686`

---

## 9. Componenti Accessori

### Barra di Progresso Lettura
```tsx
<ReadingProgress />
```
Mostra avanzamento scroll dell'articolo.

### Social Share
```tsx
<SocialShare 
  title="Titolo Articolo"
  url="https://giolabriparazioni.it/blog/slug-articolo"
/>
```
Pulsanti condivisione WhatsApp, Facebook, Twitter, LinkedIn.

### Articoli Correlati
```tsx
<RelatedArticles currentArticleId="slug-articolo" />
```
Suggerimenti automatici di 3-4 articoli simili.

### Navigazione Blog
```tsx
<BlogNavigation />
```
Menu sticky con breadcrumb e link sezioni principali.

---

## 10. Checklist Pre-Pubblicazione

Prima di pubblicare un nuovo articolo, verifica:

### SEO Tecnico
- [ ] Meta title sotto 60 caratteri
- [ ] Meta description 150-160 caratteri
- [ ] Almeno 4-5 keywords definite
- [ ] Open Graph image 1200x630px caricata
- [ ] URL slug leggibile e con keyword (`/blog/keyword-principale`)
- [ ] Breadcrumb configurati correttamente

### Schema Markup
- [ ] BreadcrumbList presente
- [ ] Article schema con tutti i campi
- [ ] Data pubblicazione corretta
- [ ] Categoria assegnata

### Contenuto
- [ ] H1 unico con keyword principale
- [ ] H2 e H3 strutturati logicamente
- [ ] Minimo 600 parole
- [ ] Keyword principale ripetuta 2-3%
- [ ] Località menzionate (Assemini/Cagliari)
- [ ] Almeno 1 link interno ad altro articolo
- [ ] Almeno 1 link a pagina servizio
- [ ] CTA finale presente

### Immagini
- [ ] Tutte le immagini hanno alt text descrittivo
- [ ] Immagini ottimizzate (max 200KB)
- [ ] OG image corretta e funzionante

### Componenti
- [ ] `<ReadingProgress />` presente
- [ ] `<SocialShare />` con URL corretto
- [ ] `<RelatedArticles />` configurato
- [ ] `<BlogNavigation />` presente

### Test Finale
- [ ] Testato su mobile
- [ ] Verificato caricamento veloce
- [ ] Link interni funzionanti
- [ ] Condivisione social funzionante
- [ ] Breadcrumb visibili su Google Search Console

---

## 11. URL e Routing

### Formato URL
```
https://giolabriparazioni.it/blog/[slug-articolo]
```

### Naming Convention Slug
- Tutto minuscolo
- Parole separate da trattino `-`
- Keyword principale nel slug
- Massimo 5-6 parole
- **Esempi**:
  - `/blog/come-capire-batteria-iphone-sostituire`
  - `/blog/riparazione-iphone-1-ora-giolab`

### File Component
```
src/pages/blog/NomeArticolo.tsx
```
- PascalCase per il nome file
- Corrisponde al titolo/argomento
- **Esempi**:
  - `ComeCabireBatteriaIPhone.tsx`
  - `RiparazioneIPhone1OraGiolab.tsx`

### Aggiunta Route in App.tsx
```tsx
<Route path="/blog/slug-articolo" element={<NomeArticolo />} />
```

### Aggiunta a blogArticles.ts
```tsx
{
  id: "slug-articolo",
  title: "Titolo Articolo",
  excerpt: "Breve anteprima 150 caratteri...",
  category: "Guide",
  date: "15 Gennaio 2025",
  slug: "/blog/slug-articolo",
  image: "URL immagine"
}
```

---

## 12. Categorie Blog

Le categorie disponibili sono:

- **Guide**: Tutorial e how-to
- **Assistenza**: Info sui servizi Giolab
- **Riparazione**: Approfondimenti tecnici
- **Consigli**: Best practices e suggerimenti

Assegnare sempre una categoria coerente con il contenuto.

---

## 13. Tone of Voice

### Caratteristiche
- **Professionale ma accessibile**: Linguaggio tecnico spiegato in modo semplice
- **Rassicurante**: Trasmettere competenza e fiducia
- **Pratico**: Focus su soluzioni concrete
- **Locale**: Enfatizzare la presenza sul territorio

### Esempi

✅ **CORRETTO**:
> "Se il tuo iPhone si scarica troppo velocemente, potrebbe essere il momento di sostituire la batteria. Da Giolab ad Assemini possiamo verificare lo stato di salute in pochi minuti e offrirti una soluzione rapida."

❌ **SBAGLIATO**:
> "La batteria del dispositivo mobile Apple presenta problematiche di autonomia energetica che necessitano intervento sostitutivo presso centro autorizzato."

---

## 14. Sitemap e Indicizzazione

### Sitemap.xml
Ogni nuovo articolo viene automaticamente incluso in `/public/sitemap.xml`.

Struttura entry articolo:
```xml
<url>
  <loc>https://giolabriparazioni.it/blog/slug-articolo</loc>
  <lastmod>2025-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://giolabriparazioni.it/sitemap.xml
```

---

## 15. Performance e Core Web Vitals

### Target Metriche
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Ottimizzazioni Implementate
- Lazy loading immagini
- Componenti code-split
- Font preload
- Compressione immagini

---

## 16. Monitoraggio e Analytics

### Google Search Console
Monitorare per ogni articolo:
- Impressioni
- Click
- CTR
- Posizione media
- Query di ricerca

### Metriche di Successo
- **Posizione Google**: Top 3 per keyword principale
- **CTR**: > 3% nei risultati di ricerca
- **Tempo sulla pagina**: > 2 minuti
- **Bounce rate**: < 60%

---

## 17. Aggiornamento Contenuti

### Frequenza Revisione
- **Articoli evergreen**: Ogni 6 mesi
- **Articoli tecnici**: Ogni 3 mesi
- **Articoli su servizi**: A ogni cambio offerta

### Cosa Aggiornare
- Date e riferimenti temporali
- Prezzi e promozioni
- Screenshot e immagini
- Link interni/esterni
- Statistiche e dati

---

## 18. Best Practices Finali

### DO ✅
- Scrivere per l'utente prima che per i motori di ricerca
- Usare esempi concreti e casi reali
- Includere sempre localizzazione (Assemini/Cagliari)
- Testare su mobile prima di pubblicare
- Verificare tutti i link prima della pubblicazione
- Aggiornare sitemap dopo ogni nuovo articolo

### DON'T ❌
- Keyword stuffing o ripetizioni forzate
- Copiare contenuti da altri siti
- Usare immagini non ottimizzate o senza alt text
- Dimenticare i link interni
- Pubblicare senza CTA finale
- Trascurare la meta description

---

## 19. Riferimenti Utili

### Documentazione Interna
- `/REVIEW_SCHEMA_GUIDE.md`: Schema recensioni
- `/SCHEMA_IMPLEMENTATION_GUIDE.md`: Implementazione schema
- `/SEO_OPTIMIZATION_REPORT.md`: Report ottimizzazioni
- `/src/pages/SEODocumentation.tsx`: Documentazione meta tags

### Strumenti Esterni
- Google Search Console
- Google PageSpeed Insights
- Schema.org Validator
- Facebook Sharing Debugger
- Twitter Card Validator

---

## 20. Contatti e Supporto

Per domande o chiarimenti su questa guida:
- **Email**: giolabassemini@gmail.com
- **Tel**: 340-69-70-686
- **Indirizzo**: Via Carmine 20, Assemini (CA)

---

**Ultima revisione**: Gennaio 2025  
**Versione**: 1.0  
**Autore**: Giolab Team
