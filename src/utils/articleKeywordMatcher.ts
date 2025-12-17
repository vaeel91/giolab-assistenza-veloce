/**
 * Sistema di Internal Linking Automatico
 * Analizza keywords e categoria per suggerire articoli correlati
 */

import { BlogArticle } from "@/types/blogArticle";

export interface ArticleMatch {
  article: BlogArticle;
  score: number;
  matchReasons: string[];
}

/**
 * Estrae keywords significative dal titolo e descrizione
 */
export const extractKeywords = (text: string): string[] => {
  // Rimuovi parole comuni (stopwords italiane estese)
  const stopwords = [
    'il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'uno', 'una',
    'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra',
    'e', 'o', 'ma', 'se', 'come', 'più', 'anche', 'del', 'della',
    'dei', 'delle', 'al', 'alla', 'ai', 'alle', 'dal', 'dalla',
    'nei', 'nel', 'sulla', 'giolab', 'assemini', 'cagliari',
    'guida', 'come', 'quando', 'dove', 'cosa', 'perché', 'questo',
    'quello', 'questi', 'quelle', 'ora', 'oggi', 'anno', 'anni',
    'tutto', 'tutti', 'ogni', 'tutto', 'molto', 'tanto', 'poco'
  ];

  // Normalizza e splitta il testo
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopwords.includes(word));

  return [...new Set(words)];
};

/**
 * Calcola il punteggio di rilevanza tra due articoli
 */
export const calculateRelevanceScore = (
  currentArticle: BlogArticle,
  candidateArticle: BlogArticle
): number => {
  let score = 0;

  // 1. Match categoria (peso alto: 40 punti)
  if (currentArticle.category === candidateArticle.category) {
    score += 40;
  }

  // 2. Estrai keywords da titolo e descrizione
  const currentKeywords = [
    ...extractKeywords(currentArticle.title),
    ...extractKeywords(currentArticle.description)
  ];

  const candidateKeywords = [
    ...extractKeywords(candidateArticle.title),
    ...extractKeywords(candidateArticle.description)
  ];

  // 3. Conta keywords comuni (peso medio: 10 punti per keyword)
  const commonKeywords = currentKeywords.filter(kw => 
    candidateKeywords.includes(kw)
  );
  score += commonKeywords.length * 10;

  // 4. Bonus per keywords specifiche molto rilevanti
  const highValueKeywords = [
    'iphone', 'riparazione', 'batteria', 'display', 'schermo',
    'face', 'recupero', 'dati', 'maggiorata', 'vetro', 'playstation',
    'macbook', 'webcam', 'laptop', 'notebook', 'ps5', 'console',
    'computer', 'ssd', 'pulizia', 'pasta', 'termica', 'surriscaldamento'
  ];

  const currentHighValue = currentKeywords.filter(kw => 
    highValueKeywords.includes(kw)
  );
  const candidateHighValue = candidateKeywords.filter(kw => 
    highValueKeywords.includes(kw)
  );

  const highValueMatch = currentHighValue.filter(kw => 
    candidateHighValue.includes(kw)
  );
  score += highValueMatch.length * 15;

  return score;
};

/**
 * Trova articoli correlati con scoring intelligente
 */
export const findRelatedArticles = (
  currentArticle: BlogArticle,
  allArticles: BlogArticle[],
  maxResults: number = 3
): ArticleMatch[] => {
  // Escludi l'articolo corrente
  const candidates = allArticles.filter(
    article => article.slug !== currentArticle.slug
  );

  // Calcola score per ogni candidato
  const matches: ArticleMatch[] = candidates.map(candidate => {
    const score = calculateRelevanceScore(currentArticle, candidate);
    
    const matchReasons: string[] = [];
    
    if (currentArticle.category === candidate.category) {
      matchReasons.push(`Stessa categoria: ${candidate.category}`);
    }

    const currentKeywords = [
      ...extractKeywords(currentArticle.title),
      ...extractKeywords(currentArticle.description)
    ];
    const candidateKeywords = [
      ...extractKeywords(candidate.title),
      ...extractKeywords(candidate.description)
    ];
    const commonKeywords = currentKeywords.filter(kw => 
      candidateKeywords.includes(kw)
    );

    if (commonKeywords.length > 0) {
      matchReasons.push(`Keywords comuni: ${commonKeywords.slice(0, 3).join(', ')}`);
    }

    return {
      article: candidate,
      score,
      matchReasons
    };
  });

  // Ordina per score decrescente e prendi i migliori
  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
};

/**
 * Suggerisce link inline nel testo (per uso futuro)
 */
export const suggestInlineLinks = (
  contentText: string,
  allArticles: BlogArticle[],
  currentSlug: string
): Array<{ keyword: string; article: BlogArticle }> => {
  const suggestions: Array<{ keyword: string; article: BlogArticle }> = [];
  
  const availableArticles = allArticles.filter(
    article => article.slug !== currentSlug
  );

  // Cerca match di keywords nel testo
  availableArticles.forEach(article => {
    const keywords = extractKeywords(article.title);
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      if (regex.test(contentText) && keyword.length > 4) {
        suggestions.push({ keyword, article });
      }
    });
  });

  return suggestions.slice(0, 5); // Limita a 5 suggerimenti
};
