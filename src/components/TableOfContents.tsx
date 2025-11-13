import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
}

export const TableOfContents = () => {
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
      const offset = 100; // Offset per header sticky
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-muted/30 backdrop-blur-sm rounded-lg border border-border p-4">
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
      </div>
    </nav>
  );
};
