/**
 * AutoLinkedContent Component
 * Processa automaticamente il contenuto degli articoli e inserisce link inline
 * verso altri articoli basandosi su keyword matching
 */

import React, { ReactNode, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/data/blogArticles';
import { extractKeywords } from '@/utils/articleKeywordMatcher';
import { ExternalLink, Clock, Tag } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AutoLinkedContentProps {
  children: ReactNode;
  currentSlug: string;
  maxLinksPerArticle?: number;
}

interface KeywordMatch {
  keyword: string;
  articleSlug: string;
  articleTitle: string;
  position: number;
}

/**
 * Trova tutte le keyword matchabili nel testo
 */
const findKeywordMatches = (text: string, currentSlug: string): KeywordMatch[] => {
  const matches: KeywordMatch[] = [];
  const textLower = text.toLowerCase();
  
  // Escludi articolo corrente
  const availableArticles = blogArticles.filter(
    article => article.slug !== currentSlug
  );

  // Per ogni articolo, cerca le sue keyword nel testo
  availableArticles.forEach(article => {
    // Estrai keyword dal titolo (più rilevanti)
    const titleKeywords = extractKeywords(article.title);
    
    // Cerca anche frasi complete del titolo (multiword)
    const titlePhrases = article.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 4);

    // Cerca multi-word phrases (es: "recupero dati", "batteria maggiorata")
    for (let i = 0; i < titlePhrases.length - 1; i++) {
      const phrase = `${titlePhrases[i]} ${titlePhrases[i + 1]}`;
      const regex = new RegExp(`\\b${phrase}\\b`, 'i');
      const match = textLower.match(regex);
      
      if (match && match.index !== undefined && phrase.length > 8) {
        matches.push({
          keyword: phrase,
          articleSlug: article.slug,
          articleTitle: article.title,
          position: match.index
        });
      }
    }

    // Cerca singole keyword rilevanti
    titleKeywords.forEach(keyword => {
      if (keyword.length > 5) { // Solo keyword significative
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        const match = textLower.match(regex);
        
        if (match && match.index !== undefined) {
          matches.push({
            keyword,
            articleSlug: article.slug,
            articleTitle: article.title,
            position: match.index
          });
        }
      }
    });
  });

  return matches;
};

/**
 * Sostituisce le keyword nel testo con link
 */
const linkifyText = (
  text: string,
  matches: KeywordMatch[],
  usedKeywords: Set<string>
): ReactNode[] => {
  if (matches.length === 0) {
    return [text];
  }

  // Ordina match per posizione
  const sortedMatches = [...matches].sort((a, b) => a.position - b.position);
  
  const result: ReactNode[] = [];
  let lastIndex = 0;
  let linkCount = 0;
  const maxLinks = 2; // Max 2 link per paragrafo

  sortedMatches.forEach((match, idx) => {
    // Limita il numero di link per paragrafo
    if (linkCount >= maxLinks) return;
    
    // Evita di linkare la stessa keyword più volte nell'intero articolo
    const matchKey = `${match.keyword}-${match.articleSlug}`;
    if (usedKeywords.has(matchKey)) return;

    const startIndex = match.position;
    const endIndex = startIndex + match.keyword.length;

    // Aggiungi testo prima del match
    if (startIndex > lastIndex) {
      result.push(text.substring(lastIndex, startIndex));
    }

    // Trova i dati completi dell'articolo per il tooltip
    const linkedArticle = blogArticles.find(a => a.slug === match.articleSlug);

    // Aggiungi il link con tooltip
    result.push(
      <Tooltip key={`tooltip-${idx}-${match.keyword}`}>
        <TooltipTrigger asChild>
          <Link
            to={`/blog/${match.articleSlug}`}
            className="text-giolab-blue hover:text-giolab-blue/80 underline decoration-giolab-blue/30 hover:decoration-giolab-blue transition-colors font-medium inline-flex items-center gap-1"
            title={match.articleTitle}
          >
            {text.substring(startIndex, endIndex)}
            <ExternalLink className="h-3 w-3 inline" />
          </Link>
        </TooltipTrigger>
        {linkedArticle && (
          <TooltipContent className="max-w-xs p-3">
            <div className="space-y-2">
              <p className="font-semibold text-sm leading-tight">{linkedArticle.title}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {linkedArticle.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {linkedArticle.readTime}
                </span>
              </div>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    );

    usedKeywords.add(matchKey);
    linkCount++;
    lastIndex = endIndex;
  });

  // Aggiungi testo rimanente
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
};

/**
 * Processa ricorsivamente i children React
 */
const processChildren = (
  children: ReactNode,
  currentSlug: string,
  usedKeywords: Set<string>
): ReactNode => {
  return React.Children.map(children, (child) => {
    // Se è una stringa, cerca e sostituisci keyword
    if (typeof child === 'string') {
      const matches = findKeywordMatches(child, currentSlug);
      if (matches.length > 0) {
        return linkifyText(child, matches, usedKeywords);
      }
      return child;
    }

    // Se è un elemento React, processa ricorsivamente i suoi children
    if (React.isValidElement(child)) {
      const element = child as ReactElement;
      
      // Non processare elementi già linkati o code/pre
      if (
        element.type === 'a' ||
        element.type === 'code' ||
        element.type === 'pre' ||
        element.type === Link
      ) {
        return child;
      }

      // Processa solo paragrafi, list items, e simili
      const processableTypes = ['p', 'li', 'span', 'div'];
      const shouldProcess = 
        typeof element.type === 'string' && 
        processableTypes.includes(element.type);

      if (shouldProcess && element.props.children) {
        return React.cloneElement(element, {
          ...element.props,
          children: processChildren(element.props.children, currentSlug, usedKeywords)
        });
      }
    }

    return child;
  });
};

/**
 * Componente principale AutoLinkedContent
 */
export const AutoLinkedContent: React.FC<AutoLinkedContentProps> = ({
  children,
  currentSlug,
  maxLinksPerArticle = 8
}) => {
  // Set per tracciare le keyword già usate (evita duplicati)
  const usedKeywords = new Set<string>();

  const processedContent = processChildren(children, currentSlug, usedKeywords);

  return (
    <TooltipProvider delayDuration={300}>
      {processedContent}
    </TooltipProvider>
  );
};
