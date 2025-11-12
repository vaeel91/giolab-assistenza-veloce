# Guida Creazione Rapida Articoli Blog

## Sistema di Template Automatico

Questa guida spiega come utilizzare il sistema di template automatico per creare nuovi articoli del blog in modo rapido e con SEO ottimizzato.

---

## 1. Overview del Sistema

Il sistema di template automatico è composto da:

- **`BlogArticleTemplate`**: Component React che gestisce automaticamente tutta la struttura SEO
- **`blogArticle.ts`**: Type definitions TypeScript per type safety
- **`BLOG_SEO_GUIDE.md`**: Guida completa alle best practices SEO

### Vantaggi

✅ **SEO Automatico**: Meta tags, Open Graph e Schema markup configurati automaticamente  
✅ **Componenti Inclusi**: Header, Footer, Navigation, Social Share, Reading Progress, Related Articles  
✅ **Type Safety**: TypeScript types per evitare errori  
✅ **Consistency**: Struttura identica per tutti gli articoli  
✅ **Velocità**: Crea un nuovo articolo in 5 minuti invece che 30  

---

## 2. Creazione Nuovo Articolo - Checklist

### Step 1: Definisci i Dati SEO

Prima di iniziare, prepara:

```
✓ Keyword principale
✓ Titolo ottimizzato (max 60 caratteri)
✓ Meta description (150-160 caratteri)
✓ Keywords (4-5 separate da virgola)
✓ Slug URL (minuscolo, con trattini)
✓ Categoria (Guide/Assistenza/Riparazione/Consigli)
✓ Data pubblicazione (YYYY-MM-DD)
```

### Step 2: Genera Open Graph Image

Genera immagine OG (1200x630px) con:
- Logo Giolab
- Titolo articolo
- Salva in `/public/og-images/nome-file.jpg`

### Step 3: Crea il File Component

Crea file in: `src/pages/blog/NomeArticolo.tsx`

---

## 3. Template Base - Copy & Paste

```tsx
import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";

const NomeArticolo = () => {
  return (
    <BlogArticleTemplate
      title="Titolo Completo con Keyword | Giolab Assemini"
      description="Meta description ottimizzata 150-160 caratteri con keyword principale e località."
      keywords="keyword1, keyword2, keyword3, Assemini, Cagliari"
      slug="slug-url-articolo"
      ogImage="https://giolabriparazioni.it/og-images/nome-file.jpg"
      author="Giolab Team"
      datePublished="2025-01-20"
      category="Guide"
      content={
        <>
          {/* ===== INTRODUZIONE ===== */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Titolo Principale H1 con Keyword
            </h1>
            <p className="text-lg text-muted-foreground">
              Paragrafo introduttivo che spiega brevemente il problema e 
              perché è importante. Menziona Giolab e la località (Assemini/Cagliari).
            </p>
          </header>

          {/* ===== SEZIONE 1 ===== */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Prima Sezione Principale (H2)
            </h2>
            <p className="mb-4 text-foreground/90">
              Contenuto della prima sezione. Usa paragrafi brevi e leggibili.
              Includi keyword secondarie in modo naturale.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-foreground">
              Sottosezione 1.1 (H3)
            </h3>
            <p className="mb-4 text-foreground/90">
              Dettagli specifici. Esempi pratici. Casi d'uso reali.
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Punto elenco 1</li>
              <li>Punto elenco 2</li>
              <li>Punto elenco 3</li>
            </ul>
          </section>

          {/* ===== SEZIONE 2 ===== */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Seconda Sezione Principale (H2)
            </h2>
            <p className="mb-4 text-foreground/90">
              Continua con contenuto rilevante e utile.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-4 mb-4">
              <p className="text-foreground font-medium">
                💡 <strong>Consiglio di Giolab:</strong> Suggerimento pratico
                o informazione importante evidenziata.
              </p>
            </div>
          </section>

          {/* ===== IMMAGINE (opzionale) ===== */}
          <figure className="mb-8">
            <img 
              src="/assets/blog/nome-immagine.jpg" 
              alt="Descrizione dettagliata con keyword per SEO"
              className="w-full rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              Didascalia immagine (opzionale)
            </figcaption>
          </figure>

          {/* ===== SEZIONE 3 - QUANDO RIVOLGERSI A GIOLAB ===== */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Quando Rivolgersi a Giolab ad Assemini
            </h2>
            <p className="mb-4 text-foreground/90">
              Se hai riscontrato [problema specifico], il team di Giolab ad Assemini
              è pronto ad aiutarti con [soluzione specifica].
            </p>
            <p className="mb-4 text-foreground/90">
              I nostri servizi includono:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
              <li>Servizio 1 correlato all'articolo</li>
              <li>Servizio 2 correlato all'articolo</li>
              <li>Servizio 3 correlato all'articolo</li>
            </ul>
            <p className="mb-4 text-foreground/90">
              Scopri di più sul nostro{" "}
              <a 
                href="/servizi/nome-servizio" 
                className="text-primary hover:underline font-medium"
              >
                servizio di [nome servizio]
              </a>.
            </p>
          </section>

          {/* ===== CONCLUSIONE + CTA ===== */}
          <section className="mb-8 bg-muted/50 p-6 rounded-lg border border-border">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Hai Bisogno di Assistenza?
            </h2>
            <p className="mb-4 text-foreground/90">
              Se hai notato [problema] sul tuo [dispositivo], non aspettare!
              Contatta Giolab ad Assemini per una diagnosi gratuita e un 
              preventivo senza impegno.
            </p>
            <div className="space-y-2 text-foreground/90">
              <p>
                📍 <strong>Dove siamo:</strong> Via Carmine 20, Assemini (CA)
              </p>
              <p>
                📞 <strong>Telefono:</strong>{" "}
                <a href="tel:3406970686" className="text-primary hover:underline">
                  340-69-70-686
                </a>
              </p>
              <p>
                📧 <strong>Email:</strong>{" "}
                <a 
                  href="mailto:giolabassemini@gmail.com" 
                  className="text-primary hover:underline"
                >
                  giolabassemini@gmail.com
                </a>
              </p>
              <p>
                🕒 <strong>Orari:</strong> Lunedì - Sabato, 9:00 - 13:00 / 16:00 - 20:00
              </p>
            </div>
            <div className="mt-4">
              <a 
                href="https://wa.me/3406970686" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </section>

          {/* ===== LINK INTERNO AD ARTICOLO CORRELATO ===== */}
          <div className="mt-8 p-4 bg-accent/20 rounded-lg border border-accent">
            <p className="text-foreground/90">
              📖 <strong>Lettura correlata:</strong>{" "}
              <a 
                href="/blog/articolo-correlato" 
                className="text-primary hover:underline font-medium"
              >
                Titolo Articolo Correlato
              </a>
            </p>
          </div>
        </>
      }
    />
  );
};

export default NomeArticolo;
```

---

## 4. Personalizzazione Contenuto

### Struttura Raccomandata

```
1. INTRODUZIONE (1-2 paragrafi)
   └─ Problema + Importanza + Giolab/Località

2. SEZIONI PRINCIPALI (3-5 sezioni H2)
   ├─ Sezione 1: Problema dettagliato
   ├─ Sezione 2: Cause e sintomi
   ├─ Sezione 3: Soluzioni
   └─ Sezione 4: Quando rivolgersi a Giolab

3. CONCLUSIONE + CTA
   └─ Riassunto + Contatti Giolab + CTA WhatsApp

4. LINK CORRELATI
   └─ Articolo correlato + Pagina servizio
```

### Elementi da Includere

✅ **Liste puntate**: Per elenchi e checklist  
✅ **Box evidenziati**: Per consigli o informazioni importanti  
✅ **Immagini**: Con alt text descrittivo  
✅ **Link interni**: 1-2 ad articoli correlati e pagine servizi  
✅ **Localizzazione**: Menzionare Assemini/Cagliari 2-3 volte  
✅ **CTA chiara**: WhatsApp, telefono, contatti  

---

## 5. Dopo la Creazione

### Step 4: Aggiungi Route

In `src/App.tsx`:

```tsx
import NomeArticolo from "@/pages/blog/NomeArticolo";

// Dentro <Routes>
<Route path="/blog/slug-articolo" element={<NomeArticolo />} />
```

### Step 5: Aggiungi a Lista Blog

In `src/data/blogArticles.ts`:

```tsx
{
  id: "slug-articolo",
  title: "Titolo Articolo",
  excerpt: "Breve anteprima 120-150 caratteri...",
  category: "Guide",
  date: "20 Gennaio 2025",
  slug: "/blog/slug-articolo",
  image: "URL immagine preview (opzionale)"
}
```

### Step 6: Aggiorna Sitemap

In `public/sitemap.xml`, aggiungi:

```xml
<url>
  <loc>https://giolabriparazioni.it/blog/slug-articolo</loc>
  <lastmod>2025-01-20</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 6. Checklist Pre-Pubblicazione

Prima di pubblicare, verifica:

### SEO Tecnico
- [ ] Title < 60 caratteri
- [ ] Description 150-160 caratteri
- [ ] Keywords (4-5 minimo)
- [ ] OG Image 1200x630px
- [ ] Slug leggibile

### Contenuto
- [ ] H1 unico
- [ ] H2/H3 strutturati
- [ ] Min 600 parole
- [ ] Keyword density 2-3%
- [ ] Località menzionate
- [ ] 1+ link articolo correlato
- [ ] 1+ link pagina servizio
- [ ] CTA finale

### Componenti Automatici
- [ ] `BlogArticleTemplate` usato
- [ ] Route aggiunta in App.tsx
- [ ] Articolo in blogArticles.ts
- [ ] Sitemap aggiornata

### Test
- [ ] Testato su mobile
- [ ] Link funzionanti
- [ ] Immagini caricate
- [ ] Social share OK

---

## 7. Stili Comuni

### Box Evidenziato (Consiglio)

```tsx
<div className="bg-primary/10 border-l-4 border-primary p-4 mb-4">
  <p className="text-foreground font-medium">
    💡 <strong>Consiglio:</strong> Testo del consiglio
  </p>
</div>
```

### Box CTA Finale

```tsx
<section className="mb-8 bg-muted/50 p-6 rounded-lg border border-border">
  <h2 className="text-3xl font-semibold mb-4 text-foreground">
    Titolo CTA
  </h2>
  <p className="mb-4 text-foreground/90">Testo CTA</p>
  {/* Contatti e pulsanti */}
</section>
```

### Lista Puntata

```tsx
<ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/90">
  <li>Punto 1</li>
  <li>Punto 2</li>
  <li>Punto 3</li>
</ul>
```

### Immagine con Caption

```tsx
<figure className="mb-8">
  <img 
    src="/path/image.jpg" 
    alt="Alt text descrittivo SEO"
    className="w-full rounded-lg shadow-lg"
  />
  <figcaption className="text-sm text-muted-foreground mt-2 text-center">
    Didascalia
  </figcaption>
</figure>
```

### Link Interno

```tsx
<a 
  href="/blog/articolo-correlato" 
  className="text-primary hover:underline font-medium"
>
  Testo link
</a>
```

### Pulsante CTA

```tsx
<a 
  href="https://wa.me/3406970686" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
>
  Testo Pulsante
</a>
```

---

## 8. Esempio Completo Reale

Vedi: `src/pages/blog/ComeCabireBatteriaIPhone.tsx` (aggiornato con template)

Oppure qualsiasi altro articolo che usa `BlogArticleTemplate`.

---

## 9. Tips & Tricks

### Velocità Creazione

⏱️ **5 minuti**: Copy template → Modifica props → Scrivi contenuto → Pubblica

### Consistency

🎨 Tutti gli articoli avranno:
- Stesso layout
- Stessi componenti
- Stesso stile SEO
- Stessa UX

### Manutenibilità

🔧 Se cambia qualcosa (es: footer, header), basta aggiornare `BlogArticleTemplate` e tutti gli articoli sono aggiornati automaticamente.

### Type Safety

✅ TypeScript ti avviserà se dimentichi un campo obbligatorio o sbagli un type.

---

## 10. Troubleshooting

### Errore: "Property X is missing"

Assicurati di aver compilato tutti i campi obbligatori nel `BlogArticleTemplate`:
- title
- description
- keywords
- slug
- ogImage
- datePublished
- category
- content

### Articolo non appare nel blog

Verifica:
1. Route aggiunta in `App.tsx`
2. Articolo aggiunto in `blogArticles.ts`
3. Slug corretto in tutti e 3 i posti

### Immagine OG non si vede

Verifica:
1. URL completo: `https://giolabriparazioni.it/og-images/...`
2. File effettivamente caricato in `/public/og-images/`
3. Dimensioni corrette 1200x630px

### Schema markup non valido

Usa il validator: https://validator.schema.org/
Incolla l'URL dell'articolo pubblicato.

---

## 11. Riferimenti

### Documentazione Correlata
- `BLOG_SEO_GUIDE.md`: Best practices SEO complete
- `SEO_OPTIMIZATION_REPORT.md`: Report ottimizzazioni
- `/seo-docs`: Documentazione SEO web

### Componenti
- `BlogArticleTemplate`: Template automatico
- `SEOHead`: Gestione meta tags
- `BlogNavigation`: Menu sticky
- `SocialShare`: Condivisione social
- `RelatedArticles`: Articoli correlati
- `ReadingProgress`: Barra progresso

---

## 12. Aggiornamenti Template

Se il template viene aggiornato con nuove funzionalità, tutti gli articoli che lo usano beneficeranno automaticamente degli aggiornamenti.

**Versione corrente**: 1.0  
**Ultima modifica**: Gennaio 2025  
**Creato da**: Giolab Team

---

## Domande?

Per supporto o chiarimenti:
- **Email**: giolabassemini@gmail.com
- **Tel**: 340-69-70-686

Buona scrittura! ✍️
