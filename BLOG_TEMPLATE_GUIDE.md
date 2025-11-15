# 📖 Guida Template Blog GioLab
**Sistema Unificato per Creazione Articoli Blog**

---

## 🎯 Obiettivo

Questa guida definisce il **template standard obbligatorio** per tutti gli articoli del blog di GioLab. Seguendo queste linee guida, garantirai:

- ✅ **Uniformità visiva** in tutti gli articoli
- ✅ **SEO ottimizzata automaticamente**
- ✅ **User Experience coerente**
- ✅ **Local SEO** per Assemini e Cagliari
- ✅ **Responsive design** perfetto su tutti i dispositivi

---

## 📋 1. SETUP BASE ARTICOLO

### Struttura File Standard

Ogni articolo blog deve essere un file `.tsx` in `src/pages/blog/` che importa e utilizza `BlogArticleTemplate`:

```tsx
import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { ArticleCTA } from "@/components/blog/ArticleCTA";

export default function NomeArticolo() {
  const articleContent = (
    <div className="blog-content">
      {/* Contenuto articolo qui */}
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Titolo Completo SEO | GioLab Assemini"
      description="Descrizione SEO 150-160 caratteri con keyword e località"
      keywords="keyword1, keyword2, keyword3, Assemini, Cagliari, Sardegna"
      slug="url-slug-articolo"
      ogImage="https://giolabriparazioni.it/og-images/nome-articolo.jpg"
      author="Giolab Team"
      datePublished="2025-01-27"
      category="Guide"
      content={articleContent}
      readingTime={7}
    />
  );
}
```

### Props Obbligatorie

| Prop | Tipo | Descrizione | Esempio |
|------|------|-------------|---------|
| `title` | string | Meta title completo (55-60 caratteri) | "Riparazione iPhone 1 Ora \| GioLab Assemini" |
| `description` | string | Meta description (150-160 caratteri) | "Servizio rapido di riparazione iPhone ad Assemini. Display, batteria, fotocamera in 1 ora. 12 mesi garanzia." |
| `keywords` | string | Keywords separate da virgola | "riparazione iPhone, Assemini, Cagliari, GioLab" |
| `slug` | string | URL-friendly slug | "riparazione-iphone-1-ora-assemini" |
| `ogImage` | string | URL completo immagine Open Graph (1200x630px) | "https://giolabriparazioni.it/og-images/articolo.jpg" |
| `author` | string | Autore articolo | "Giolab Team" |
| `datePublished` | string | Data pubblicazione (YYYY-MM-DD) | "2025-01-27" |
| `category` | string | Categoria articolo (vedi sotto) | "Guide" |
| `content` | ReactNode | Contenuto JSX articolo | `{articleContent}` |
| `readingTime` | number | Tempo lettura in minuti | `7` |

---

## 📂 2. CATEGORIE DISPONIBILI

| Categoria | URL Categoria | Utilizzo |
|-----------|---------------|----------|
| `"Guide"` | `/blog/guide` | Tutorial, how-to, consigli generali |
| `"Assistenza"` | `/blog/assistenza-smartphone` | Servizi assistenza, manutenzione |
| `"Riparazione"` | `/blog/riparazione-iphone` | Riparazioni specifiche iPhone/smartphone |
| `"Consigli"` | `/blog/guide` | Best practices, suggerimenti |

**⚠️ Importante**: Le categorie devono corrispondere esattamente a quelle definite in `BlogArticleTemplate.tsx` (linee 118-123).

---

## 🏗️ 3. STRUTTURA CONTENUTO OBBLIGATORIA

### Template HTML Completo

Ogni articolo **deve seguire questa struttura esatta**:

```tsx
const articleContent = (
  <div className="blog-content">
    {/* 1. INTRODUZIONE */}
    <section>
      <h2 className="blog-h2">Introduzione: [Descrizione Problema/Topic]</h2>
      <p className="blog-paragraph">
        Primo paragrafo introduttivo con <strong>keyword principale</strong> e 
        menzione di <strong>Assemini</strong> o <strong>Cagliari</strong>.
      </p>
      <p className="blog-paragraph">
        Secondo paragrafo che espande il contesto e introduce GioLab.
      </p>
    </section>

    {/* 2. IL PROBLEMA */}
    <section>
      <h2 className="blog-h2">Il Problema: [Descrizione Situazione dell'Utente]</h2>
      <p className="blog-paragraph">
        Descrivi i sintomi o la situazione che l'utente sta affrontando.
      </p>
      <ul className="blog-list-bulleted">
        <li>Sintomo o problema 1</li>
        <li>Sintomo o problema 2</li>
        <li>Sintomo o problema 3</li>
      </ul>
      
      {/* Box evidenziato (opzionale ma consigliato) */}
      <div className="blog-highlight-box warning">
        <p>
          <strong>⚠️ Attenzione:</strong> Informazione importante da evidenziare.
        </p>
      </div>
    </section>

    {/* 3. ANALISI PROFESSIONALE */}
    <section>
      <h2 className="blog-h2">Analisi Professionale: [Spiegazione Tecnica]</h2>
      <p className="blog-paragraph">
        Spiegazione approfondita dal punto di vista tecnico professionale.
      </p>

      {/* Sottosezioni H3 (opzionale) */}
      <h3 className="blog-h3">Sottotitolo 1</h3>
      <p className="blog-paragraph">
        Contenuto sottosezione...
      </p>

      <h3 className="blog-h3">Sottotitolo 2</h3>
      <p className="blog-paragraph">
        Contenuto sottosezione...
      </p>
    </section>

    {/* 4. SOLUZIONE PASSO PASSO */}
    <section>
      <h2 className="blog-h2">Soluzione: Come [Risolvere il Problema]</h2>
      <p className="blog-paragraph">
        Introduzione alla soluzione proposta da GioLab.
      </p>
      <ol className="blog-list-numbered">
        <li>
          <strong>Primo Step</strong><br />
          Descrizione dettagliata del primo passo con informazioni di contatto se necessario.
        </li>
        <li>
          <strong>Secondo Step</strong><br />
          Descrizione del secondo passo...
        </li>
        <li>
          <strong>Terzo Step</strong><br />
          Descrizione del terzo passo...
        </li>
        {/* Continua con tutti gli step necessari */}
      </ol>

      {/* Box evidenziato success per garanzie */}
      <div className="blog-highlight-box success">
        <p>
          <strong>✅ Garanzia:</strong> Tutti gli interventi GioLab sono coperti da 
          <strong> 12 mesi di garanzia</strong> completa.
        </p>
      </div>
    </section>

    {/* 5. CONSIGLI TECNICI */}
    <section>
      <h2 className="blog-h2">Consigli Tecnici: Best Practices</h2>
      <p className="blog-paragraph">
        Consigli pratici per ottimizzare o prevenire il problema.
      </p>
      <ul className="blog-list-bulleted">
        <li>Consiglio pratico 1</li>
        <li>Consiglio pratico 2</li>
        <li>Consiglio pratico 3</li>
      </ul>

      {/* Box info per suggerimenti speciali */}
      <div className="blog-highlight-box info">
        <p>
          <strong>💡 Consiglio Pro:</strong> Suggerimento avanzato o trucco professionale.
        </p>
      </div>
    </section>

    {/* 6. CTA ARTICOLO - OBBLIGATORIO */}
    <ArticleCTA />

    {/* 7. QUANDO RIVOLGERSI A UN TECNICO */}
    <section>
      <h2 className="blog-h2">Quando Rivolgersi a un Tecnico Qualificato?</h2>
      <p className="blog-paragraph">
        Situazioni in cui è necessario l'intervento di <strong>GioLab ad Assemini</strong>.
      </p>
      <ul className="blog-list-bulleted">
        <li>Caso 1 che richiede assistenza professionale</li>
        <li>Caso 2 che richiede assistenza professionale</li>
        <li>Caso 3 che richiede assistenza professionale</li>
      </ul>
      <p className="blog-paragraph">
        Chiusura con rinforzo brand GioLab, località (Assemini/Cagliari) e garanzie.
      </p>
    </section>

    {/* 8. CONCLUSIONE (opzionale ma consigliata) */}
    <section>
      <h2 className="blog-h2">Conclusione: [Riassunto e CTA Finale]</h2>
      <p className="blog-paragraph">
        Riassunto dei punti chiave e invito all'azione finale.
      </p>
    </section>
  </div>
);
```

---

## 🎨 4. CLASSI CSS DISPONIBILI

### Tipografia

| Classe | Utilizzo | Esempio |
|--------|----------|---------|
| `.blog-h2` | Titoli H2 (sezioni principali) | `<h2 className="blog-h2">Titolo</h2>` |
| `.blog-h3` | Titoli H3 (sottosezioni) | `<h3 className="blog-h3">Sottotitolo</h3>` |
| `.blog-h4` | Titoli H4 (rare, solo se necessari) | `<h4 className="blog-h4">Titolo minore</h4>` |
| `.blog-paragraph` | Paragrafi di testo | `<p className="blog-paragraph">Testo...</p>` |

### Liste

| Classe | Utilizzo | Esempio |
|--------|----------|---------|
| `.blog-list-numbered` | Lista numerata con cerchi colorati | `<ol className="blog-list-numbered">` |
| `.blog-list-bulleted` | Lista puntata con pallini colorati | `<ul className="blog-list-bulleted">` |

### Box Evidenziati

| Classe | Colore | Utilizzo |
|--------|--------|----------|
| `.blog-highlight-box` | Blu (default) | Info generali |
| `.blog-highlight-box warning` | Giallo/Ambra | Avvertimenti |
| `.blog-highlight-box success` | Verde | Conferme, garanzie |
| `.blog-highlight-box info` | Blu chiaro | Suggerimenti, consigli |

Esempio:
```tsx
<div className="blog-highlight-box warning">
  <p><strong>⚠️ Attenzione:</strong> Testo importante...</p>
</div>
```

### Immagini

| Classe | Utilizzo |
|--------|----------|
| `.blog-image-container` | Wrapper per immagini con bordi e ombre |
| `.blog-image-caption` | Didascalia sotto l'immagine |

Esempio:
```tsx
<div className="blog-image-container">
  <img 
    src="/path/to/image.jpg" 
    alt="Descrizione SEO con località" 
    loading="lazy"
  />
  <p className="blog-image-caption">Didascalia immagine</p>
</div>
```

---

## 🔍 5. SEO CHECKLIST

### Meta Tags Obbligatori

- ✅ **Meta Title**: 55-60 caratteri, include keyword principale + località
- ✅ **Meta Description**: 150-160 caratteri, include keyword + CTA implicita + località
- ✅ **Keywords**: minimo 5, include sempre "Assemini", "Cagliari", "GioLab"
- ✅ **OG Image**: 1200x630px, include logo GioLab e titolo articolo
- ✅ **Canonical URL**: automatico tramite template

### Struttura Heading

- ✅ **H1**: Automatico (deriva dal meta title)
- ✅ **H2**: Minimo 5 per articolo (vedi struttura obbligatoria)
- ✅ **H3**: Opzionali per sottosezioni
- ✅ **NO H4-H6**: Evitare se possibile

### Alt Text Immagini

Ogni immagine deve avere:
```tsx
<img 
  src="/image.jpg" 
  alt="[Descrizione contenuto] - GioLab Assemini" 
  loading="lazy"
/>
```

Esempio:
```tsx
<img 
  src="/iphone-schermo-rotto.jpg" 
  alt="iPhone con schermo rotto prima della riparazione - GioLab Assemini" 
  loading="lazy"
/>
```

---

## 🌍 6. LOCAL SEO OBBLIGATORIO

### Località da Menzionare

Ogni articolo **deve includere** almeno:

- 🏠 **Assemini** (minimo 3 volte)
- 📍 **Cagliari** o **Provincia di Cagliari** (minimo 2 volte)
- 🗺️ **Sardegna** (opzionale, 1 volta)

### Dove Inserirle

1. **Nel primo H2 (Introduzione)** → "GioLab ad Assemini"
2. **Nella sezione Soluzione** → "Vieni nel nostro negozio in Via Carmine 20, Assemini (Cagliari)"
3. **Nel box CTA** → Automatico con `<ArticleCTA />`
4. **Nella sezione finale** → "GioLab è il centro di riferimento ad Assemini e Cagliari"
5. **Meta description** → Includi "Assemini" o "Cagliari"

### NAP (Name, Address, Phone)

Utilizza sempre il NAP completo quando menzioni l'indirizzo:

```
GioLab – Via Carmine 20, Assemini (CA), Sardegna
Tel: +39 340 69 70 686
Email: giolabassemini@gmail.com
```

---

## 🧩 7. COMPONENTI OBBLIGATORI

### ArticleCTA

**Posizionamento**: Dopo la sezione "Consigli Tecnici" e prima di "Quando Rivolgersi a un Tecnico".

```tsx
import { ArticleCTA } from "@/components/blog/ArticleCTA";

// Nel contenuto articolo:
<ArticleCTA />
```

**Cosa Include Automaticamente**:
- Titolo "Hai bisogno di assistenza professionale?"
- Descrizione servizio GioLab
- Pulsante "Richiedi un Preventivo Gratuito" → link a `/#contatti`
- Pulsante "Chiamaci Ora" → link a `tel:+393406970686`
- Indirizzo completo e orari

### BackToBlog

**Automatico**: Già incluso in `BlogArticleTemplate` (non serve importarlo manualmente).

- Variante "top": sticky in alto durante lo scroll
- Variante "bottom": alla fine dell'articolo prima del footer

### Table of Contents (TOC)

**Automatico**: Generato automaticamente da tutti gli H2 e H3 nell'articolo.

- Desktop: sidebar laterale sempre visibile
- Mobile: accessibile tramite floating button

**⚠️ Importante**: Usa sempre classi `.blog-h2` e `.blog-h3` per permettere al TOC di funzionare correttamente.

---

## 📱 8. RESPONSIVE DESIGN

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Best Practices

- ✅ Usa `className="blog-paragraph"` per tutti i paragrafi (responsive automatico)
- ✅ Liste con spaziatura verticale adeguata su mobile
- ✅ Immagini con `max-width: 100%` automatico
- ✅ Box CTA responsive con pulsanti full-width su mobile
- ✅ TOC accessibile via Sheet su mobile

### Test Obbligatori

Prima di pubblicare, verifica:

1. ✅ Testo leggibile su mobile senza zoom
2. ✅ Pulsanti facilmente cliccabili con pollice
3. ✅ Immagini non escono dallo schermo
4. ✅ Nessun overflow orizzontale
5. ✅ TOC mobile funzionante

---

## ✍️ 9. TONE OF VOICE

### Regole di Scrittura

- ✅ **Professionale ma accessibile**: evita gergo troppo tecnico
- ✅ **Diretto e pratico**: vai al punto, soluzioni concrete
- ✅ **Rassicurante**: enfatizza garanzie e professionalità
- ✅ **Locale**: menziona sempre Assemini/Cagliari in modo naturale
- ✅ **Orientato alla soluzione**: focus su come GioLab risolve il problema

### Cosa Evitare

- ❌ Gergo tecnico eccessivo senza spiegazioni
- ❌ Clickbait o promesse irrealistiche
- ❌ Lunghezza eccessiva (target: 1200-1800 parole)
- ❌ Elenchi troppo lunghi (max 5-7 item per lista)

---

## 📊 10. METRICHE E PERFORMANCE

### Target Tempo di Lettura

- **Minimo**: 5 minuti
- **Ottimale**: 6-8 minuti
- **Massimo**: 10 minuti

Calcolo: ~200 parole al minuto.

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Ottimizzazioni Automatiche

- ✅ Lazy loading immagini (`loading="lazy"`)
- ✅ Font preloading (automatico in template)
- ✅ CSS scoped per blog (`blog.css`)
- ✅ Schema markup automatico (Article + Breadcrumbs)

---

## 🔗 11. LINK INTERNI ED ESTERNI

### Link Interni (Obbligatori)

Ogni articolo deve includere almeno:

1. **Link alla homepage**: `<Link to="/">GioLab</Link>`
2. **Link alla sezione contatti**: `<Link to="/#contatti">Contattaci</Link>`
3. **Link al telefono**: `<a href="tel:+393406970686">+39 340 69 70 686</a>`
4. **Link ad almeno 1 altro articolo blog** (automatico in `RelatedArticles`)

### Link Esterni

- ✅ Usa `rel="noopener noreferrer"` per link esterni
- ✅ Apri in nuova tab solo se necessario (`target="_blank"`)
- ✅ Limita link esterni a fonti autorevoli (Apple, iOS, ecc.)

---

## 📝 12. ESEMPI COMPLETI

Vedi i file di esempio:

1. **`src/pages/blog/RiparazioneIPhone1Ora.tsx`**
   - Articolo base con struttura completa
   - Uso di tutti i componenti obbligatori
   - Esempio di liste e box evidenziati

2. **`src/pages/blog/BatteriaMaggiorataIPhone.tsx`**
   - Articolo con immagini e H3
   - Box evidenziati multipli (warning, info, success)
   - Comparazioni e tabelle

3. **`src/pages/blog/RecuperoDatiIPhoneRotto.tsx`**
   - Articolo complesso con sottosezioni
   - Uso avanzato di box evidenziati
   - Citazioni e note tecniche

---

## 🚀 13. PUBBLICAZIONE E MANUTENZIONE

### Checklist Pre-Pubblicazione

- [ ] Titolo e meta description ottimizzati
- [ ] Keywords incluse (minimo 5 + località)
- [ ] Struttura contenuto completa (tutti H2 obbligatori)
- [ ] `<ArticleCTA />` presente
- [ ] Località menzionate (Assemini, Cagliari)
- [ ] Alt text su tutte le immagini
- [ ] OG image creata (1200x630px)
- [ ] Articolo aggiunto a `src/data/blogArticles.ts`
- [ ] Route creata in `src/App.tsx`
- [ ] Sitemap aggiornata (`public/sitemap.xml`)
- [ ] Test responsive (mobile + desktop)
- [ ] Lettura finale per errori grammaticali

### Aggiornamenti Futuri

- **Frequenza**: Aggiorna articoli ogni 6-12 mesi
- **Cosa aggiornare**: Date, statistiche, immagini, link interni
- **Versioning**: Mantieni `datePublished` originale, cambia solo il contenuto

---

## 📞 14. SUPPORTO E CONTATTI

Per domande su questo template o per richiedere modifiche:

- 📧 Email: giolabassemini@gmail.com
- 📱 Telefono: +39 340 69 70 686
- 📍 Indirizzo: Via Carmine 20, Assemini (CA)

---

## 🔗 15. RISORSE CORRELATE

- **`BLOG_ARTICLE_CREATION_WORKFLOW.md`**: Workflow passo-passo per creare nuovi articoli
- **`src/styles/blog.css`**: Tutte le classi CSS disponibili con documentazione
- **`src/components/BlogArticleTemplate.tsx`**: Codice sorgente del template
- **`src/components/blog/ArticleCTA.tsx`**: Componente CTA standard

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: 27 Gennaio 2025  
**Autore**: GioLab Team
