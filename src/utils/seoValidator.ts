/**
 * SEO Validator Utility
 * Verifica la correttezza dei meta tag, schema markup e breadcrumbs
 */

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'schema' | 'images' | 'links' | 'structure';
  message: string;
  element?: string;
}

export interface SEOValidationResult {
  passed: boolean;
  score: number;
  issues: SEOIssue[];
  checks: {
    metaTags: boolean;
    schemaMarkup: boolean;
    breadcrumbs: boolean;
    images: boolean;
    openGraph: boolean;
    canonical: boolean;
  };
}

/**
 * Valida i meta tag della pagina
 */
export function validateMetaTags(): SEOIssue[] {
  const issues: SEOIssue[] = [];

  // Check title
  const title = document.querySelector('title');
  if (!title || !title.textContent) {
    issues.push({
      type: 'error',
      category: 'meta',
      message: 'Meta title mancante',
      element: '<title>'
    });
  } else if (title.textContent.length > 60) {
    issues.push({
      type: 'warning',
      category: 'meta',
      message: `Meta title troppo lungo (${title.textContent.length} caratteri, consigliato < 60)`,
      element: '<title>'
    });
  }

  // Check meta description
  const description = document.querySelector('meta[name="description"]');
  if (!description || !description.getAttribute('content')) {
    issues.push({
      type: 'error',
      category: 'meta',
      message: 'Meta description mancante',
      element: '<meta name="description">'
    });
  } else {
    const content = description.getAttribute('content') || '';
    if (content.length > 160) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: `Meta description troppo lunga (${content.length} caratteri, consigliato < 160)`,
        element: '<meta name="description">'
      });
    }
  }

  // Check keywords
  const keywords = document.querySelector('meta[name="keywords"]');
  if (!keywords || !keywords.getAttribute('content')) {
    issues.push({
      type: 'warning',
      category: 'meta',
      message: 'Meta keywords mancante',
      element: '<meta name="keywords">'
    });
  }

  // Check viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    issues.push({
      type: 'error',
      category: 'meta',
      message: 'Meta viewport mancante',
      element: '<meta name="viewport">'
    });
  }

  return issues;
}

/**
 * Valida Open Graph tags
 */
export function validateOpenGraph(): SEOIssue[] {
  const issues: SEOIssue[] = [];

  const requiredOGTags = [
    'og:title',
    'og:description',
    'og:image',
    'og:url',
    'og:type'
  ];

  requiredOGTags.forEach(tag => {
    const element = document.querySelector(`meta[property="${tag}"]`);
    if (!element || !element.getAttribute('content')) {
      issues.push({
        type: 'warning',
        category: 'meta',
        message: `Open Graph tag mancante: ${tag}`,
        element: `<meta property="${tag}">`
      });
    }
  });

  // Check Twitter Card
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (!twitterCard) {
    issues.push({
      type: 'info',
      category: 'meta',
      message: 'Twitter Card meta tag mancante',
      element: '<meta name="twitter:card">'
    });
  }

  return issues;
}

/**
 * Valida gli schema markup JSON-LD
 */
export function validateSchemaMarkup(): SEOIssue[] {
  const issues: SEOIssue[] = [];

  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (scripts.length === 0) {
    issues.push({
      type: 'error',
      category: 'schema',
      message: 'Nessun schema markup JSON-LD trovato',
      element: '<script type="application/ld+json">'
    });
    return issues;
  }

  scripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.textContent || '{}');
      
      // Validate basic structure
      if (!data['@context']) {
        issues.push({
          type: 'error',
          category: 'schema',
          message: `Schema #${index + 1}: @context mancante`,
          element: `<script type="application/ld+json"> [${index}]`
        });
      }

      if (!data['@type']) {
        issues.push({
          type: 'error',
          category: 'schema',
          message: `Schema #${index + 1}: @type mancante`,
          element: `<script type="application/ld+json"> [${index}]`
        });
      }

      // Validate specific schema types
      if (data['@type'] === 'BreadcrumbList') {
        if (!data.itemListElement || !Array.isArray(data.itemListElement)) {
          issues.push({
            type: 'error',
            category: 'schema',
            message: `BreadcrumbList: itemListElement mancante o non valido`,
            element: 'BreadcrumbList schema'
          });
        }
      }

      if (data['@type'] === 'Article') {
        const requiredFields = ['headline', 'author', 'datePublished', 'image'];
        requiredFields.forEach(field => {
          if (!data[field]) {
            issues.push({
              type: 'warning',
              category: 'schema',
              message: `Article schema: campo "${field}" mancante`,
              element: 'Article schema'
            });
          }
        });
      }

      if (data['@type'] === 'LocalBusiness' || data['@type'] === 'Organization') {
        const requiredFields = ['name', 'address', 'telephone'];
        requiredFields.forEach(field => {
          if (!data[field]) {
            issues.push({
              type: 'warning',
              category: 'schema',
              message: `${data['@type']} schema: campo "${field}" mancante`,
              element: `${data['@type']} schema`
            });
          }
        });
      }

      if (data['@type'] === 'FAQPage') {
        if (!data.mainEntity || !Array.isArray(data.mainEntity)) {
          issues.push({
            type: 'error',
            category: 'schema',
            message: `FAQPage: mainEntity mancante o non valido`,
            element: 'FAQPage schema'
          });
        }
      }

    } catch (e) {
      issues.push({
        type: 'error',
        category: 'schema',
        message: `Schema #${index + 1}: JSON non valido - ${e}`,
        element: `<script type="application/ld+json"> [${index}]`
      });
    }
  });

  return issues;
}

/**
 * Valida le immagini (alt text)
 */
export function validateImages(): SEOIssue[] {
  const issues: SEOIssue[] = [];

  const images = document.querySelectorAll('img');
  let imagesWithoutAlt = 0;

  images.forEach((img, index) => {
    const alt = img.getAttribute('alt');
    const src = img.getAttribute('src') || 'unknown';
    
    if (!alt || alt.trim() === '') {
      imagesWithoutAlt++;
      issues.push({
        type: 'warning',
        category: 'images',
        message: `Immagine senza alt text: ${src.substring(0, 50)}...`,
        element: `<img> [${index}]`
      });
    }
  });

  if (imagesWithoutAlt > 0) {
    issues.push({
      type: 'info',
      category: 'images',
      message: `Totale immagini senza alt text: ${imagesWithoutAlt}/${images.length}`,
      element: 'Summary'
    });
  }

  return issues;
}

/**
 * Valida i link e la struttura
 */
export function validateLinks(): SEOIssue[] {
  const issues: SEOIssue[] = [];

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push({
      type: 'warning',
      category: 'links',
      message: 'Link canonico mancante',
      element: '<link rel="canonical">'
    });
  }

  // Check H1
  const h1Elements = document.querySelectorAll('h1');
  if (h1Elements.length === 0) {
    issues.push({
      type: 'error',
      category: 'structure',
      message: 'Nessun H1 trovato nella pagina',
      element: '<h1>'
    });
  } else if (h1Elements.length > 1) {
    issues.push({
      type: 'warning',
      category: 'structure',
      message: `Multipli H1 trovati (${h1Elements.length}), consigliato solo 1`,
      element: '<h1>'
    });
  }

  // Check heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1));
    if (index > 0 && level > lastLevel + 1) {
      issues.push({
        type: 'warning',
        category: 'structure',
        message: `Gerarchia heading non corretta: saltato da H${lastLevel} a H${level}`,
        element: heading.tagName
      });
    }
    lastLevel = level;
  });

  return issues;
}

/**
 * Esegue la validazione completa SEO
 */
export function validateSEO(): SEOValidationResult {
  const allIssues: SEOIssue[] = [];

  // Run all validations
  const metaIssues = validateMetaTags();
  const ogIssues = validateOpenGraph();
  const schemaIssues = validateSchemaMarkup();
  const imageIssues = validateImages();
  const linkIssues = validateLinks();

  allIssues.push(...metaIssues, ...ogIssues, ...schemaIssues, ...imageIssues, ...linkIssues);

  // Calculate checks
  const checks = {
    metaTags: metaIssues.filter(i => i.type === 'error').length === 0,
    schemaMarkup: schemaIssues.filter(i => i.type === 'error').length === 0,
    breadcrumbs: !schemaIssues.some(i => i.message.includes('BreadcrumbList')),
    images: imageIssues.filter(i => i.type === 'error').length === 0,
    openGraph: ogIssues.filter(i => i.type === 'error').length === 0,
    canonical: !linkIssues.some(i => i.message.includes('canonico'))
  };

  // Calculate score (0-100)
  const errorCount = allIssues.filter(i => i.type === 'error').length;
  const warningCount = allIssues.filter(i => i.type === 'warning').length;
  
  let score = 100;
  score -= errorCount * 15; // -15 per error
  score -= warningCount * 5; // -5 per warning
  score = Math.max(0, Math.min(100, score));

  return {
    passed: errorCount === 0,
    score,
    issues: allIssues,
    checks
  };
}
