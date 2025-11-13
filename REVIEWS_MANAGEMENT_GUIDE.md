# 📊 GUIDA GESTIONE RECENSIONI GIOLAB

## 🎯 Obiettivo

Questo documento spiega come gestire il **sistema centralizzato di recensioni** di Giolab, utilizzato per:

✅ Generare automaticamente l'**AggregateRating unificato** nella homepage  
✅ Migliorare la **SEO** mostrando le stelle nei risultati di ricerca Google  
✅ Aumentare la **credibilità** e la **fiducia** degli utenti  
✅ Tracciare tutte le recensioni da diverse fonti in un unico posto

---

## 📂 File Principali

### 1. `src/data/reviews.ts`
**File centralizzato** che contiene TUTTE le recensioni di Giolab.

**Struttura:**
```typescript
export interface Review {
  author: string;           // Nome del recensore
  rating: number;           // Voto da 1 a 5
  text: string;            // Testo della recensione
  date: string;            // Data formato YYYY-MM-DD
  source: string;          // Origine: 'homepage' | 'blog' | 'service' | 'testimonial'
  serviceType?: string;    // Tipo di servizio (opzionale)
  verified?: boolean;      // Se verificata (opzionale)
}
```

---

## ➕ Come Aggiungere una Nuova Recensione

### Passo 1: Apri `src/data/reviews.ts`

### Passo 2: Aggiungi la recensione nell'array `allReviews`

```typescript
{
  author: "Nome Cognome",
  rating: 5,
  text: "Testo completo della recensione del cliente...",
  date: "2025-01-20",
  source: "blog",  // o 'homepage', 'service', 'testimonial'
  serviceType: "Riparazione Display iPhone",
  verified: true
}
```

### Passo 3: Salva il file

✅ **L'AggregateRating della homepage si aggiorna AUTOMATICAMENTE!**

---

## 📈 Funzioni Disponibili

### `calculateAggregateRating()`
Calcola automaticamente il rating medio e il conteggio totale da tutte le recensioni.

**Restituisce:**
```typescript
{
  ratingValue: "4.9",      // Media calcolata automaticamente
  reviewCount: "25",       // Numero totale recensioni
  bestRating: "5",
  worstRating: "1"
}
```

**Utilizzo nella homepage:**
```typescript
import { calculateAggregateRating } from "@/data/reviews";

const aggregateRating = calculateAggregateRating();
// Usa aggregateRating nello structured data
```

---

### `getReviewsForSchema(limit)`
Restituisce le recensioni formattate per lo **Schema.org JSON-LD**.

**Parametri:**
- `limit`: numero massimo di recensioni da restituire (default: 10)

**Utilizzo:**
```typescript
import { getReviewsForSchema } from "@/data/reviews";

const reviews = getReviewsForSchema(10);
// Usa reviews nello structured data della homepage
```

---

### `getReviewStats()`
Restituisce **statistiche dettagliate** sulle recensioni.

**Restituisce:**
```typescript
{
  total: 25,                    // Totale recensioni
  verified: 23,                 // Recensioni verificate
  ratingDistribution: {         // Distribuzione per stelle
    5: 22,
    4: 2,
    3: 1,
    2: 0,
    1: 0
  },
  bySource: {                   // Recensioni per fonte
    homepage: 5,
    blog: 12,
    service: 4,
    testimonial: 4
  },
  averageRating: "4.9"
}
```

**Utilizzo:**
```typescript
import { getReviewStats } from "@/data/reviews";

const stats = getReviewStats();
console.log(`Media: ${stats.averageRating}`);
console.log(`Totale: ${stats.total} recensioni`);
```

---

## 🏠 Implementazione Homepage

La homepage (`src/pages/Index.tsx`) utilizza il sistema centralizzato:

```typescript
import { calculateAggregateRating, getReviewsForSchema } from "@/data/reviews";

const Index = () => {
  // Calcola aggregate rating unificato
  const aggregateRating = calculateAggregateRating();
  const reviews = getReviewsForSchema(10);

  return (
    <SEOHead 
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": aggregateRating.ratingValue,
          "reviewCount": aggregateRating.reviewCount,
          "bestRating": aggregateRating.bestRating,
          "worstRating": aggregateRating.worstRating
        },
        "review": reviews
      }}
    />
  );
};
```

---

## ✅ Best Practices

### 1. **Aggiorna Regolarmente le Recensioni**
Aggiungi nuove recensioni man mano che arrivano per mantenere il sistema aggiornato e migliorare la SEO.

### 2. **Usa Date Recenti**
Le recensioni recenti hanno più valore per Google. Cerca di avere recensioni distribuite nel tempo.

### 3. **Varia le Fonti**
Includi recensioni da:
- Homepage (recensioni generiche)
- Blog (relative ad articoli specifici)
- Servizi (relative a servizi specifici)
- Testimonianze (da clienti reali)

### 4. **Specifica il `serviceType`**
Quando possibile, indica il tipo di servizio recensito per migliorare la Local SEO.

### 5. **Marca come Verificate**
Imposta `verified: true` per le recensioni di cui hai conferma dell'autenticità.

### 6. **Mantieni Rating Realistici**
Non tutte le recensioni devono essere 5 stelle. Un mix realistico (4-5 stelle) è più credibile.

---

## 📊 Monitoraggio SEO

### Come Verificare l'AggregateRating su Google

1. **Google Rich Results Test**
   - Vai su: https://search.google.com/test/rich-results
   - Inserisci URL: `https://giolabriparazioni.it`
   - Verifica che compaiano le stelle ⭐

2. **Google Search Console**
   - Vai su: https://search.google.com/search-console
   - Controlla sezione "Miglioramenti" → "Dati strutturati"
   - Verifica che `AggregateRating` sia rilevato correttamente

3. **Schema Markup Validator**
   - Vai su: https://validator.schema.org/
   - Inserisci URL o codice JSON-LD
   - Controlla che non ci siano errori

---

## 🎯 Impatto SEO

### Vantaggi del Sistema Centralizzato:

✅ **Rich Snippet con Stelle**: Google mostra le stelle ⭐⭐⭐⭐⭐ nei risultati di ricerca  
✅ **Click-Through Rate (CTR) Maggiore**: Gli utenti cliccano di più su risultati con stelle  
✅ **Maggiore Fiducia**: Le recensioni verificate aumentano la credibilità  
✅ **Local SEO Potenziata**: Le recensioni specifiche per servizi migliorano il posizionamento locale  
✅ **Dati Sempre Aggiornati**: Il rating si aggiorna automaticamente aggiungendo nuove recensioni

---

## 📝 Esempio Completo

### Aggiungere una Nuova Recensione per il Blog "Rigenerazione Vetro Apple Watch"

```typescript
// In src/data/reviews.ts, aggiungi nell'array allReviews:

{
  author: "Giovanni Rossi",
  rating: 5,
  text: "Ho fatto rigenerare il vetro del mio Apple Watch presso Giolab ad Assemini. Risultato perfetto, sembra nuovo di zecca! Il display originale è rimasto intatto e Apple Pay funziona alla perfezione. Consiglio vivamente questo servizio!",
  date: "2025-01-20",
  source: "blog",
  serviceType: "Rigenerazione Vetro Apple Watch",
  verified: true
}
```

✅ **Il sistema aggiorna automaticamente:**
- Rating medio homepage
- Conteggio totale recensioni
- Structured data Schema.org
- Statistiche recensioni

---

## 🔄 Manutenzione

### Operazioni Periodiche:

**Ogni Settimana:**
- [ ] Aggiungi nuove recensioni ricevute
- [ ] Verifica che le date siano corrette
- [ ] Controlla che i rating siano realistici

**Ogni Mese:**
- [ ] Esegui Google Rich Results Test
- [ ] Controlla Google Search Console per errori
- [ ] Verifica statistiche con `getReviewStats()`

**Ogni 3 Mesi:**
- [ ] Analizza distribuzione recensioni per fonte
- [ ] Bilancia recensioni tra homepage/blog/servizi
- [ ] Aggiorna recensioni meno recenti se necessario

---

## 🆘 Troubleshooting

### Problema: Le stelle non compaiono su Google

**Soluzione:**
1. Verifica che il JSON-LD sia valido con Google Rich Results Test
2. Assicurati che `ratingValue` sia tra 1 e 5
3. Controlla che `reviewCount` sia > 0
4. Aspetta qualche giorno per l'indicizzazione

### Problema: Rating troppo basso

**Soluzione:**
1. Aggiungi recensioni positive recenti
2. Verifica che non ci siano recensioni duplicate negative
3. Bilancia le recensioni 4-5 stelle

### Problema: Recensioni non si aggiornano nella homepage

**Soluzione:**
1. Verifica di aver salvato `src/data/reviews.ts`
2. Controlla che l'import in `Index.tsx` sia corretto
3. Pulisci cache del browser (Ctrl+Shift+R)

---

## 📞 Supporto

Per domande o problemi sul sistema recensioni:
- **Email**: giolabassemini@gmail.com
- **Tel**: +39 340 69 70 686
- **Sede**: Via Carmine 20A, Assemini (CA)

---

## 🎉 Conclusione

Il sistema centralizzato di recensioni Giolab è progettato per:
- **Semplificare** la gestione delle recensioni
- **Automatizzare** il calcolo dell'AggregateRating
- **Migliorare** la SEO e la visibilità su Google
- **Aumentare** la credibilità e le conversioni

✅ **Mantieni sempre aggiornato il file `reviews.ts` per massimizzare i benefici SEO!**
