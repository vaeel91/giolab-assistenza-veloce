# 📝 Standard Articoli Blog Giolab

## ⚠️ IMPORTANTE: Uso Obbligatorio del BlogArticleTemplate

**TUTTI gli articoli blog devono utilizzare il componente `BlogArticleTemplate`** per garantire uniformità e coerenza nel sito.

## ✅ Cosa Include Automaticamente il Template

Il `BlogArticleTemplate` gestisce automaticamente:

### 🧭 Breadcrumbs Dinamici
- **Home → Blog → Categoria → Titolo Articolo**
- La categoria viene mappata automaticamente all'URL corretto
- Tutti i link sono cliccabili e funzionanti
- Schema JSON-LD BreadcrumbList incluso

### 📑 Indice Articolo (Table of Contents)
- **Desktop**: Visibile lateralmente su schermi XL+ (≥1280px)
- **Mobile/Tablet**: Pulsante floating in basso a destra
- Generato automaticamente dai titoli H2 e H3 del contenuto
- Scroll smooth alle sezioni
- Evidenziazione sezione attiva

### 🎨 Componenti Standard
- `Header` e `Footer`
- `BlogNavigation` (barra navigazione blog)
- `ReadingProgress` (barra progresso lettura)
- `SocialShare` (condivisione social)
- `RelatedArticles` (articoli correlati)
- `FloatingWhatsApp`

### 🔍 SEO Completo
- Meta title, description, keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Schema markup Article
- Schema markup Breadcrumbs
- Canonical URL

## 📋 Come Creare un Nuovo Articolo

### 1. Crea il file dell'articolo

```tsx
// src/pages/blog/TitoloArticolo.tsx
import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { Link } from "react-router-dom";

export default function TitoloArticolo() {
  const articleContent = (
    <div className="space-y-8">
      {/* Contenuto dell'articolo */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Prima Sezione</h2>
        <p className="text-muted-foreground leading-relaxed">
          Contenuto della prima sezione...
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Seconda Sezione</h2>
        <h3 className="text-2xl font-semibold mb-4">Sottosezione</h3>
        <p className="text-muted-foreground leading-relaxed">
          Contenuto della sottosezione...
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Domande Frequenti</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Domanda 1?</h3>
            <p className="text-muted-foreground">Risposta...</p>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-accent/20 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Hai bisogno di assistenza?</h2>
        <p className="text-muted-foreground mb-6">
          Vieni a trovarci presso Giolab Assemini per una diagnosi gratuita.
        </p>
        <Link 
          to="/contatti#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
        >
          Contattaci Ora
        </Link>
      </section>
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Titolo Completo Articolo | Giolab Assemini"
      description="Descrizione SEO dell'articolo, 150-160 caratteri max."
      keywords="keyword1, keyword2, keyword3, Assemini, Cagliari"
      slug="titolo-articolo"
      ogImage="https://giolabriparazioni.it/og-images/titolo-articolo.jpg"
      author="Giolab Team"
      datePublished="2025-01-27"
      category="Guide"
      content={articleContent}
      readingTime={8}
    />
  );
}
```

### 2. Categorie Disponibili

Usa **ESATTAMENTE** una di queste categorie:

- `"Guide"` → mappa a `/blog/guide`
- `"Assistenza"` → mappa a `/blog/assistenza-smartphone`
- `"Riparazione"` → mappa a `/blog/riparazione-iphone`
- `"Tecnologia"` → mappa a `/blog/riparazione-pc`
- `"Console"` → mappa a `/blog/console`
- `"Sicurezza"` → mappa a `/blog/sicurezza-digitale`

### 3. Aggiungi l'articolo al routing

```tsx
// src/App.tsx
import TitoloArticolo from "./pages/blog/TitoloArticolo";

// Nel componente Routes:
<Route path="/blog/titolo-articolo" element={<TitoloArticolo />} />
```

### 4. Aggiungi alla lista articoli

```tsx
// src/data/blogArticles.ts
{
  slug: "titolo-articolo",
  title: "Titolo Completo Articolo",
  description: "Descrizione breve per la card...",
  date: "27 Gennaio 2025",
  readTime: "8 min",
  category: "Guide",
  image: "/og-images/titolo-articolo.jpg"
}
```

### 5. Aggiorna la sitemap

```xml
<!-- public/sitemap.xml -->
<url>
  <loc>https://giolabriparazioni.it/blog/titolo-articolo</loc>
  <lastmod>2025-01-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## 📐 Struttura Contenuto Consigliata

### Gerarchia Titoli
- **H1**: Gestito automaticamente dal template (non includere nel content)
- **H2**: Sezioni principali dell'articolo
- **H3**: Sottosezioni

### Elementi Consigliati
```tsx
{/* Introduzione */}
<section className="mb-12">
  <p className="text-lg leading-relaxed">Introduzione...</p>
</section>

{/* Sezioni con Box Evidenziati */}
<div className="bg-accent/20 p-6 rounded-lg mb-6">
  <h3 className="text-xl font-semibold mb-4">Punto Importante</h3>
  <p>Contenuto...</p>
</div>

{/* Lista */}
<ul className="list-disc list-inside space-y-2 text-muted-foreground">
  <li>Punto 1</li>
  <li>Punto 2</li>
</ul>

{/* Tabella */}
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b">
        <th className="text-left p-4">Colonna 1</th>
        <th className="text-left p-4">Colonna 2</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="p-4">Dato 1</td>
        <td className="p-4">Dato 2</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Immagine */}
<figure className="my-8">
  <img 
    src={imagePath} 
    alt="Descrizione SEO dell'immagine"
    className="w-full rounded-lg shadow-lg"
  />
  <figcaption className="text-sm text-muted-foreground mt-2 text-center">
    Didascalia immagine
  </figcaption>
</figure>

{/* Link Interni */}
<Link 
  to="/servizi/riparazione-iphone"
  className="text-primary hover:underline"
>
  Scopri i nostri servizi
</Link>

{/* CTA Box */}
<div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
  <p className="font-semibold">💡 Consiglio Pro</p>
  <p>Testo del consiglio...</p>
</div>
```

## 🚫 NON Fare

❌ **NON creare breadcrumbs manualmente** → Il template li genera automaticamente

❌ **NON creare TOC manualmente** → Il template lo genera dai titoli H2/H3

❌ **NON includere H1 nel content** → Il template lo gestisce dal title

❌ **NON aggiungere Header/Footer manualmente** → Il template li include

❌ **NON usare strutture custom** → Usa sempre il BlogArticleTemplate

## ✅ Checklist Pre-Pubblicazione

- [ ] Usa `BlogArticleTemplate`
- [ ] Categoria corretta (una delle 6 disponibili)
- [ ] Meta title ≤ 60 caratteri con keyword + località
- [ ] Meta description ≤ 155 caratteri
- [ ] Slug URL SEO-friendly (kebab-case)
- [ ] OG Image 1200x630px creata e caricata
- [ ] Almeno 3-4 sezioni H2 (per TOC)
- [ ] Contenuto ≥ 800 parole
- [ ] Link interno ad altra pagina del sito
- [ ] Menzione "Assemini" e "Cagliari" nel testo
- [ ] CTA finale con link a contatti
- [ ] Articolo aggiunto a `blogArticles.ts`
- [ ] Route aggiunta in `App.tsx`
- [ ] URL aggiunto a `sitemap.xml`

## 🎯 Vantaggi dell'Uso del Template

✅ **Uniformità**: Tutti gli articoli hanno la stessa struttura  
✅ **SEO Automatico**: Meta tags e schema markup pre-configurati  
✅ **Manutenibilità**: Un cambio al template si applica a tutti gli articoli  
✅ **UX Coerente**: Breadcrumbs e TOC sempre presenti  
✅ **Mobile Friendly**: TOC floating per dispositivi mobili  
✅ **Performance**: Componenti ottimizzati e lazy loading  

## 📚 Documentazione Correlata

- [BLOG_SEO_GUIDE.md](./BLOG_SEO_GUIDE.md) - SEO best practices per il blog
- [src/components/BlogArticleTemplate.tsx](./src/components/BlogArticleTemplate.tsx) - Codice sorgente template
- [src/types/blogArticle.ts](./src/types/blogArticle.ts) - Type definitions

---

**Domande?** Contatta il team tecnico Giolab per assistenza.
