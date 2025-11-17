import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="404 - Pagina Non Trovata | Giolab"
        description="La pagina che stai cercando non esiste. Torna alla homepage di Giolab."
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Pagina non trovata</p>
          <Link to="/">
            <Button size="lg">
              Torna alla Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
