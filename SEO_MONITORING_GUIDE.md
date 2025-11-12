# 🔍 Guida al Sistema di Monitoraggio SEO Automatico

## Panoramica

Il sito Giolab Riparazioni dispone di un **sistema automatico di verifica SEO** che scansiona periodicamente tutte le pagine per garantire la corretta implementazione di:

- ✅ **Meta tags** (title, description, keywords, viewport)
- ✅ **Open Graph tags** (Facebook, LinkedIn)
- ✅ **Twitter Card tags**
- ✅ **Schema Markup JSON-LD** (Article, Organization, LocalBusiness, BreadcrumbList, FAQPage)
- ✅ **Canonical URLs**
- ✅ **Alt text** per le immagini
- ✅ **Struttura semantica** (H1, gerarchia heading)

---

## 🚀 Come Funziona

### 1. **Componente Visuale (SEOMonitor)**

Il componente `SEOMonitor` appare in basso a destra su tutte le pagine del sito in modalità sviluppo e mostra:

- **Score SEO** (0-100) basato su errori e avvisi trovati
- **Badge colorato** (verde ≥90, giallo ≥70, rosso <70)
- **Elenco dettagliato** di errori, avvisi e info
- **Auto-refresh** opzionale ogni 10 secondi

**Posizione file:** `src/components/SEOMonitor.tsx`

### 2. **Script di Validazione (seoValidator)**

Lo script esegue 5 tipi di controlli:

#### **A. Meta Tags** (`validateMetaTags()`)
- Verifica presenza di `<title>` (max 60 caratteri)
- Controlla `<meta name="description">` (max 160 caratteri)
- Controlla `<meta name="keywords">`
- Verifica `<meta name="viewport">` per mobile-first

#### **B. Open Graph** (`validateOpenGraph()`)
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`
- `twitter:card`

#### **C. Schema Markup** (`validateSchemaMarkup()`)
- Valida la sintassi JSON-LD
- Controlla presenza di `@context` e `@type`
- Valida campi specifici per:
  - **BreadcrumbList** (itemListElement)
  - **Article** (headline, author, datePublished, image)
  - **LocalBusiness/Organization** (name, address, telephone)
  - **FAQPage** (mainEntity)

#### **D. Immagini** (`validateImages()`)
- Verifica che tutte le immagini abbiano attributo `alt`
- Conta immagini senza alt text

#### **E. Link e Struttura** (`validateLinks()`)
- Controlla presenza di `<link rel="canonical">`
- Verifica che ci sia un solo H1 per pagina
- Valida la gerarchia dei heading (H1 → H2 → H3, senza salti)

**Posizione file:** `src/utils/seoValidator.ts`

---

## 📊 Calcolo del Punteggio SEO

```javascript
Score iniziale: 100 punti

- Errore: -15 punti ciascuno
- Avviso: -5 punti ciascuno
- Info: 0 punti (solo notifiche)

Score minimo: 0
Score massimo: 100
```

**Interpretazione:**
- **90-100**: 🟢 Ottimizzazione SEO eccellente
- **70-89**: 🟡 Buona, ma migliorabile
- **0-69**: 🔴 Richiede attenzione urgente

---

## 🛠️ Come Utilizzare il Sistema

### **Metodo 1: Componente UI (Consigliato per sviluppo)**

1. Importa `SEOMonitor` nella tua pagina:

```tsx
import SEOMonitor from '@/components/SEOMonitor';

function MyPage() {
  return (
    <>
      {/* Contenuto della pagina */}
      
      {/* Aggiungi il monitor SEO in fondo */}
      <SEOMonitor />
    </>
  );
}
```

2. Il pulsante apparirà in basso a destra con lo score
3. Clicca per aprire il pannello dettagliato
4. Attiva "Auto-refresh" per scansioni continue

### **Metodo 2: Console Script (Manuale)**

Puoi eseguire manualmente la validazione aprendo la **Console del Browser** (F12) e digitando:

```javascript
import { validateSEO } from '@/utils/seoValidator';

// Esegui validazione completa
const results = validateSEO();

console.log('📊 SEO Score:', results.score);
console.log('✅ Checks:', results.checks);
console.log('⚠️ Issues:', results.issues);
```

### **Metodo 3: Auto-refresh Programmato**

Per eseguire il controllo ogni volta che cambia la route:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validateSEO } from '@/utils/seoValidator';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Esegui validazione ad ogni cambio pagina
    const results = validateSEO();
    
    if (!results.passed) {
      console.warn('⚠️ SEO Issues detected:', results.issues);
    } else {
      console.log('✅ SEO validation passed');
    }
  }, [location.pathname]);

  return <YourApp />;
}
```

---

## 🔧 Configurazione Avanzata

### Personalizzare le Soglie di Punteggio

Modifica `src/utils/seoValidator.ts`:

```typescript
// Linea 358-363
let score = 100;
score -= errorCount * 20; // Aumenta penalità errori
score -= warningCount * 3; // Riduci penalità avvisi
score = Math.max(0, Math.min(100, score));
```

### Aggiungere Nuovi Controlli

Esempio: verificare presenza di structured data per recensioni

```typescript
// In src/utils/seoValidator.ts

export function validateReviewSchema(): SEOIssue[] {
  const issues: SEOIssue[] = [];
  
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  let hasReviewSchema = false;
  
  scripts.forEach((script) => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      
      if (data['@type'] === 'AggregateRating') {
        hasReviewSchema = true;
        
        // Verifica campi obbligatori
        if (!data.ratingValue) {
          issues.push({
            type: 'error',
            category: 'schema',
            message: 'AggregateRating: ratingValue mancante',
            element: 'AggregateRating schema'
          });
        }
      }
    } catch (e) {
      // Ignora errori di parsing
    }
  });
  
  if (!hasReviewSchema && window.location.pathname === '/') {
    issues.push({
      type: 'warning',
      category: 'schema',
      message: 'Homepage: AggregateRating schema mancante',
      element: 'AggregateRating schema'
    });
  }
  
  return issues;
}

// Aggiungi la chiamata in validateSEO():
export function validateSEO(): SEOValidationResult {
  const allIssues: SEOIssue[] = [];

  const metaIssues = validateMetaTags();
  const ogIssues = validateOpenGraph();
  const schemaIssues = validateSchemaMarkup();
  const imageIssues = validateImages();
  const linkIssues = validateLinks();
  const reviewIssues = validateReviewSchema(); // ⬅️ NUOVO

  allIssues.push(
    ...metaIssues, 
    ...ogIssues, 
    ...schemaIssues, 
    ...imageIssues, 
    ...linkIssues,
    ...reviewIssues // ⬅️ NUOVO
  );

  // ... resto del codice
}
```

---

## 📈 Best Practices

### ✅ **Durante lo Sviluppo**

1. **Mantieni SEOMonitor attivo** su tutte le pagine in sviluppo
2. **Controlla lo score** dopo ogni modifica importante
3. **Risolvi gli errori** (rossi) prima degli avvisi (gialli)
4. **Testa su più pagine**: homepage, blog, servizi, contatti

### ✅ **Prima del Deploy**

1. **Esegui validazione completa** su tutte le pagine principali
2. **Score minimo accettabile: 85/100**
3. **Zero errori critici** (errori rossi)
4. **Controlla manualmente** con [Google Rich Results Test](https://search.google.com/test/rich-results)

### ✅ **In Produzione**

1. **Rimuovi SEOMonitor** dalle build di produzione
2. **Usa Google Search Console** per monitoraggio continuo
3. **Verifica sitemap.xml** su `https://giolabriparazioni.it/sitemap.xml`
4. **Controlla robots.txt** su `https://giolabriparazioni.it/robots.txt`

---

## 🐛 Troubleshooting

### **Problema: "Schema markup non trovato"**

**Causa:** Il componente `SEOHead` non è stato aggiunto alla pagina

**Soluzione:**
```tsx
import SEOHead from '@/components/SEOHead';

function MyPage() {
  return (
    <>
      <SEOHead
        title="Il mio titolo"
        description="La mia descrizione"
        // ... altri props
      />
      {/* Resto del contenuto */}
    </>
  );
}
```

### **Problema: "Multiple H1 detected"**

**Causa:** Più di un tag `<h1>` nella pagina

**Soluzione:** Usa solo un H1 per pagina (solitamente il titolo principale)

```tsx
// ❌ SBAGLIATO
<h1>Benvenuto</h1>
<h1>I nostri servizi</h1>

// ✅ CORRETTO
<h1>Benvenuto</h1>
<h2>I nostri servizi</h2>
```

### **Problema: "Canonical URL mancante"**

**Causa:** Il componente SEOHead non sta generando il canonical tag

**Soluzione:** Passa l'URL completa a SEOHead:

```tsx
<SEOHead
  ogUrl={`https://giolabriparazioni.it${window.location.pathname}`}
/>
```

### **Problema: "Immagini senza alt text"**

**Causa:** Tag `<img>` senza attributo `alt`

**Soluzione:** Aggiungi sempre alt descrittivo

```tsx
// ❌ SBAGLIATO
<img src="/logo.png" />

// ✅ CORRETTO
<img src="/logo.png" alt="Logo Giolab Riparazioni iPhone Assemini" />
```

---

## 📋 Checklist SEO per Nuove Pagine

Prima di pubblicare una nuova pagina, verifica:

- [ ] Title tag presente (50-60 caratteri, include keyword locale)
- [ ] Meta description presente (140-160 caratteri, naturale e invitante)
- [ ] Meta keywords presente (5-8 keyword separate da virgola)
- [ ] Open Graph tags completi (title, description, image, url, type)
- [ ] Twitter Card configurato
- [ ] Schema markup appropriato (Article per blog, Service per servizi)
- [ ] Breadcrumb schema se applicabile
- [ ] Canonical URL corretta (https://giolabriparazioni.it/...)
- [ ] Un solo H1 per pagina
- [ ] Gerarchia heading corretta (H1 → H2 → H3)
- [ ] Tutte le immagini hanno alt text descrittivo
- [ ] URL SEO-friendly (lowercase, hyphens, keyword)
- [ ] Score SEO ≥ 85/100

---

## 🚨 Codici di Errore Comuni

| Codice | Severità | Descrizione | Soluzione |
|--------|----------|-------------|-----------|
| **META_TITLE_MISSING** | 🔴 Error | Title tag non presente | Aggiungi `<SEOHead title="..."/>` |
| **META_DESC_LONG** | 🟡 Warning | Description > 160 char | Accorcia la descrizione |
| **OG_IMAGE_MISSING** | 🟡 Warning | og:image non trovato | Aggiungi `ogImage` prop |
| **SCHEMA_INVALID_JSON** | 🔴 Error | JSON-LD malformato | Controlla sintassi JSON |
| **H1_MULTIPLE** | 🟡 Warning | Più di un H1 | Usa un solo H1 |
| **IMG_NO_ALT** | 🟡 Warning | Immagine senza alt | Aggiungi attributo alt |
| **CANONICAL_MISSING** | 🟡 Warning | Link canonical assente | Passa `ogUrl` a SEOHead |

---

## 📞 Supporto e Contatti

Per problemi o domande relative al sistema di monitoraggio SEO:

1. **Consulta questa guida** per soluzioni rapide
2. **Controlla la console del browser** per log dettagliati
3. **Verifica i file**:
   - `src/utils/seoValidator.ts` (logica validazione)
   - `src/components/SEOMonitor.tsx` (componente UI)
   - `src/components/SEOHead.tsx` (generazione meta tags)

---

## 🔄 Changelog

### Versione 1.0 (27 Gennaio 2025)
- ✅ Implementato sistema di validazione completo
- ✅ Aggiunto componente UI SEOMonitor
- ✅ Auto-refresh ogni 10 secondi
- ✅ Console logging automatico
- ✅ Supporto per 5 tipi di controlli SEO
- ✅ Sistema di scoring 0-100

---

## 📚 Risorse Aggiuntive

- [Guida SEO Giolab completa](./SEO_META_TAGS_COMPLETE.md)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

**Ultimo aggiornamento:** 27 Gennaio 2025  
**Autore:** Sistema SEO Giolab  
**Versione:** 1.0
