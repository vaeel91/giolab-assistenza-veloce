# 🎯 Guida Implementazione Schema.org - Giolab

## ✅ Schema Implementati

### 1. **Organization Schema** (Globale)
**Posizione**: `index.html` - linee 65-103  
**Tipo**: `@type: "Organization"`

**Scopo**: Rappresenta Giolab come organizzazione aziendale su tutti i motori di ricerca.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Giolab",
  "url": "https://giolabriparazioni.it",
  "logo": "https://giolabriparazioni.it/favicon.png",
  "sameAs": [
    "https://www.instagram.com/giolab_iphonefix",
    "https://www.facebook.com/giolabassemini",
    "https://www.tiktok.com/@giolab_iphonefix"
  ],
  "knowsAbout": [
    "Riparazione iPhone",
    "Riparazione Smartphone",
    ...
  ]
}
```

**Benefici**:
- Mostra logo aziendale nei risultati di ricerca
- Collega i profili social
- Aumenta l'autorevolezza del brand

---

### 2. **LocalBusiness Schema** (Globale)
**Posizione**: `index.html` - linee 106-265  
**Tipo**: `@type: "LocalBusiness"`

**Scopo**: Definisce Giolab come attività locale con orari, servizi e recensioni.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://giolabriparazioni.it/#business",
  "name": "Giolab",
  "telephone": "+393406970686",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Carmine 20A",
    "addressLocality": "Assemini",
    ...
  },
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
}
```

**Benefici**:
- Appare in Google Maps
- Mostra orari di apertura
- Visualizza recensioni come stelle nei risultati
- Migliora la Local SEO

---

### 3. **Service Schema** (Automatico per ogni pagina servizio)
**Posizione**: `src/components/ServiceTemplate.tsx` - linee 61-119  
**Tipo**: `@type: "Service"`

**Scopo**: Descrive ogni singolo servizio offerto da Giolab.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Batteria Maggiorata iPhone ad Assemini",
  "name": "Batteria Maggiorata iPhone...",
  "description": "Sostituzione batteria maggiorata...",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://giolabriparazioni.it/#business"
  },
  "areaServed": [
    { "@type": "City", "name": "Assemini" },
    { "@type": "City", "name": "Cagliari" }
  ],
  "offers": {
    "@type": "Offer",
    "price": "A partire da €49",
    "priceCurrency": "EUR"
  }
}
```

**Benefici**:
- Rich snippet con prezzi nei risultati di ricerca
- Mostra aree servite
- Aumenta CTR (Click-Through Rate)

**Pagine dove è attivo**:
- ✅ `/servizi/batteria-maggiorata-iphone`
- ✅ `/servizi/riparazione-display-iphone-assemini`
- ✅ Tutte le future pagine servizi che usano `ServiceTemplate`

---

### 4. **FAQPage Schema** (Automatico dove ci sono FAQ)
**Posizione**: `src/components/SEOHead.tsx` - linee 102-112  
**Tipo**: `@type: "FAQPage"`

**Scopo**: Mostra domande e risposte direttamente nei risultati di ricerca.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "La batteria maggiorata è sicura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Assolutamente sì. Utilizziamo batterie certificate..."
      }
    }
  ]
}
```

**Benefici**:
- Accordion FAQ espandibili nei risultati Google
- Aumenta visibilità e spazio occupato nei SERP
- Migliora posizionamento per query "come" e "perché"

**Dove è attivo**:
- ✅ Homepage (sezione FAQ generale)
- ✅ Tutte le pagine servizi con FAQ
- ✅ Articoli blog (se implementato in futuro)

---

### 5. **Article Schema** (Articoli Blog)
**Posizione**: `src/components/SEOHead.tsx` - linee 59-99  
**Tipo**: `@type: "Article"`

**Scopo**: Definisce gli articoli del blog come contenuti editoriali.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Come capire se la batteria iPhone va sostituita",
  "author": {
    "@type": "Person",
    "name": "Giolab Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Giolab Assemini"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20"
}
```

**Benefici**:
- Mostra data di pubblicazione nei risultati
- Visualizza autore e publisher
- Aumenta credibilità dei contenuti

**Dove è attivo**:
- ✅ Tutti i 16 articoli del blog

---

### 6. **Breadcrumb Schema** (Navigazione)
**Posizione**: `src/components/SEOHead.tsx` - linee 43-52  
**Tipo**: `@type: "BreadcrumbList"`

**Scopo**: Mostra il percorso di navigazione nei risultati di ricerca.

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
      "name": "Servizi"
    }
  ]
}
```

**Benefici**:
- Breadcrumb visibili sopra title nei risultati Google
- Migliora UX e comprensione struttura sito
- Aumenta CTR

**Dove è attivo**:
- ✅ Tutte le pagine servizi
- ✅ Tutti gli articoli blog

---

## 📊 Riepilogo Schema per Pagina

### Homepage (`/`)
- ✅ Organization Schema
- ✅ LocalBusiness Schema
- ✅ FAQPage Schema

### Pagine Servizi (`/servizi/*`)
- ✅ Service Schema (specifico per servizio)
- ✅ FAQPage Schema (se ha FAQ)
- ✅ Breadcrumb Schema

### Articoli Blog (`/blog/*`)
- ✅ Article Schema
- ✅ Breadcrumb Schema
- ✅ FAQPage Schema (se implementato)

---

## 🔍 Come Verificare gli Schema

### 1. **Google Rich Results Test**
URL: https://search.google.com/test/rich-results

1. Inserisci URL della pagina (es. `https://giolabriparazioni.it/servizi/batteria-maggiorata-iphone`)
2. Clicca "Test URL"
3. Verifica che non ci siano errori
4. Controlla quali rich results sono eligibili

### 2. **Schema Markup Validator**
URL: https://validator.schema.org/

1. Inserisci URL o incolla codice HTML
2. Verifica errori e warning
3. Visualizza struttura dati JSON-LD

### 3. **Google Search Console**
1. Vai su **Miglioramenti**
2. Controlla sezioni:
   - **FAQ**
   - **Breadcrumb**
   - **Local Business**
   - **Organization**

---

## 🎨 Come Appariranno i Risultati Google

### Service Schema + FAQPage
```
🔵 Giolab Assemini › Servizi
Batteria Maggiorata iPhone ad Assemini - Giolab
https://giolabriparazioni.it/servizi/batteria-maggiorata-iphone
⭐⭐⭐⭐⭐ 4.9 (150)
Sostituzione batteria maggiorata iPhone ad Assemini e Cagliari.
Aumenta l'autonomia del tuo iPhone fino al 30% in più...
💰 A partire da €49

▼ La batteria maggiorata è sicura per il mio iPhone?
  Assolutamente sì. Utilizziamo batterie certificate...

▼ Quanto dura in più una batteria maggiorata?
  Una batteria maggiorata offre fino al 30% di autonomia...
```

### Article Schema
```
🔵 Home › Blog › Guide
Come Capire se la Batteria del tuo iPhone va Sostituita
https://giolabriparazioni.it/blog/come-capire-batteria-iphone
👤 Giolab Team • 15 gen 2025
Scopri i segnali che indicano quando è il momento di sostituire
la batteria del tuo iPhone. Guida completa con consigli...
```

---

## 🚀 Prossimi Passi Consigliati

### 1. Monitoraggio (Settimana 1-2)
- [ ] Verificare tutti gli schema con Rich Results Test
- [ ] Correggere eventuali errori/warning
- [ ] Monitorare Coverage su Search Console

### 2. Ottimizzazioni (Settimana 3-4)
- [ ] Aggiungere `Video` schema per tutorial YouTube (se presenti)
- [ ] Implementare `HowTo` schema per guide passo-passo
- [ ] Aggiungere `Review` schema per testimonianze clienti

### 3. Espansione (Mese 2)
- [ ] Creare Product schema per accessori/ricambi (se venduti)
- [ ] Aggiungere Event schema per promozioni/eventi
- [ ] Implementare JobPosting se cercate personale

---

## 📖 Documentazione Utile

### Schema.org
- [Service Schema](https://schema.org/Service)
- [LocalBusiness Schema](https://schema.org/LocalBusiness)
- [FAQPage Schema](https://schema.org/FAQPage)
- [Article Schema](https://schema.org/Article)
- [Organization Schema](https://schema.org/Organization)

### Google
- [Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Local Business Schema](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [FAQ Rich Results](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

---

## ⚠️ Note Importanti

### Non Modificare Manualmente
Questi file gestiscono automaticamente gli schema:
- ❌ `src/components/SEOHead.tsx` - Gestisce tutti gli schema dinamici
- ❌ `src/components/ServiceTemplate.tsx` - Genera Service schema automaticamente
- ❌ `index.html` - Contiene Organization e LocalBusiness globali

### Cosa Puoi Modificare
- ✅ Dati azienda in `index.html` (orari, telefono, email, indirizzo)
- ✅ Rating e numero recensioni in LocalBusiness schema
- ✅ Aggiungere/modificare FAQ nelle pagine servizi
- ✅ Prezzi e descrizioni servizi

---

## 🎯 Risultati Attesi

### Breve Termine (1-2 mesi)
- ✅ Rich snippet FAQ visibili nei risultati
- ✅ Stelle di rating accanto al nome Giolab
- ✅ Breadcrumb sopra i risultati di ricerca
- ✅ Prezzi visibili per i servizi

### Medio Termine (3-6 mesi)
- ✅ Aumento CTR del 15-30%
- ✅ Migliore posizionamento per query locali
- ✅ Più visibilità su Google Maps
- ✅ Featured snippets per alcune query

### Lungo Termine (6-12 mesi)
- ✅ Autorevolezza marca aumentata
- ✅ Dominio della SERP locale per keyword target
- ✅ Traffico organico +40-60%
- ✅ Conversioni aumentate da ricerca organica

---

**Ultimo aggiornamento**: 2025-01-25  
**Prossima revisione**: 2025-02-25
