# Giolab Riparazioni - Sito Web Ufficiale

Centro assistenza professionale per smartphone, PC e console ad Assemini (Cagliari).  
**Website**: https://giolabriparazioni.it

---

## 📝 Articoli Blog - Standard Obbligatorio

**⚠️ TUTTI gli articoli blog devono utilizzare il componente `BlogArticleTemplate`** per garantire uniformità.

### ✅ Cosa Include Automaticamente
- **Breadcrumbs dinamici**: Home → Blog → Categoria → Articolo
- **Table of Contents**: Desktop (laterale) + Mobile (floating button)
- **SEO completo**: Meta tags, Open Graph, Twitter Card, Schema markup
- **Componenti standard**: Header, Footer, BlogNavigation, ReadingProgress, SocialShare

### 🚀 Quick Start - Creare un Nuovo Articolo

```tsx
// src/pages/blog/NuovoArticolo.tsx
import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";

export default function NuovoArticolo() {
  const articleContent = (
    <div className="space-y-8">
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
    </div>
  );

  return (
    <BlogArticleTemplate
      title="Titolo Articolo | Giolab Assemini"
      description="Descrizione SEO 150-160 caratteri"
      keywords="keyword1, keyword2, Assemini, Cagliari"
      slug="nuovo-articolo"
      ogImage="https://giolabriparazioni.it/og-images/nuovo-articolo.jpg"
      author="Giolab Team"
      datePublished="2025-01-27"
      category="Guide"
      content={articleContent}
      readingTime={8}
    />
  );
}
```

### 📚 Documentazione Completa
- **[BLOG_ARTICLE_STANDARD.md](./BLOG_ARTICLE_STANDARD.md)** - Standard e linee guida complete
- **[BLOG_SEO_GUIDE.md](./BLOG_SEO_GUIDE.md)** - Best practices SEO

### 📂 Categorie Disponibili
- `"Guide"` → /blog/guide
- `"Assistenza"` → /blog/assistenza-smartphone  
- `"Riparazione"` → /blog/riparazione-iphone
- `"Tecnologia"` → /blog/riparazione-pc
- `"Console"` → /blog/console
- `"Sicurezza"` → /blog/sicurezza-digitale

---

## Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/976925a9-a569-46ba-803d-df1afb08cf8e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/976925a9-a569-46ba-803d-df1afb08cf8e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/976925a9-a569-46ba-803d-df1afb08cf8e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
