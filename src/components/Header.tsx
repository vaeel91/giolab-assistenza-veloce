import { Instagram, Facebook, Wrench, Users, Phone, BookOpen, FileText } from "lucide-react";
import giolabIcon from "@/assets/giolab-logo-new.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/giolab_iphonefix", 
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/giolabassemini", 
      label: "Facebook",
      color: "hover:text-blue-600"
    },
    { 
      icon: "tiktok", 
      href: "https://www.tiktok.com/@giolab_iphonefix", 
      label: "TikTok",
      color: "hover:text-black dark:hover:text-white"
    },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <img
              src={giolabIcon}
              alt="Giolab"
              className="h-12 md:h-16 w-auto transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Link Servizi */}
            <Link to="/servizi">
              <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Servizi
              </Button>
            </Link>

            {/* Link Chi Siamo */}
            <Link to="/chi-siamo">
              <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                <Users className="h-4 w-4" />
                Chi Siamo
              </Button>
            </Link>

            {/* Link Contatti */}
            <Link to="/contatti">
              <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contatti
              </Button>
            </Link>

            {/* Link Blog */}
            <Link to="/blog">
              <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Blog
              </Button>
            </Link>

            {/* Link Leggi Articoli */}
            <Link to="/blog">
              <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Leggi Articoli
              </Button>
            </Link>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon === "tiktok" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  ) : (
                    <social.icon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
