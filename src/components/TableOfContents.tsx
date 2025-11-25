import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const TableOfContents = ({ isMobile = false, onItemClick }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Estrai tutti gli H2 dall'articolo
    const article = document.querySelector("article");
    if (!article) return;

    const h2Elements = article.querySelectorAll("h2");
    const items: TOCItem[] = [];

    h2Elements.forEach((heading, index) => {
      // Genera un ID se non esiste
      if (!heading.id) {
        const id = `section-${index}`;
        heading.id = id;
      }
      items.push({
        id: heading.id,
        text: heading.textContent || "",
      });
    });

    setHeadings(items);

    // Intersection Observer per evidenziare la sezione attiva
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    h2Elements.forEach((heading) => observer.observe(heading));

    return () => {
      h2Elements.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = isMobile ? 100 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Chiudi immediatamente il drawer su mobile per non bloccare lo scroll
      if (onItemClick) {
        onItemClick();
      }
      
      // Avvia lo scroll dopo una breve pausa per permettere al drawer di chiudersi
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const content = (
    <>
      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <span>📑</span>
        Indice dell'articolo
      </h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                "block text-sm py-1 px-2 rounded transition-all duration-200 hover:bg-primary/10 hover:text-primary border-l-2",
                activeId === heading.id
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:border-primary/50"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );

  // Versione desktop: sticky sidebar
  if (!isMobile) {
    return (
      <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-border p-4">
          {content}
        </div>
      </nav>
    );
  }

  // Versione mobile: solo il contenuto (sarà wrappato in un Sheet)
  return <div className="p-4">{content}</div>;
};
