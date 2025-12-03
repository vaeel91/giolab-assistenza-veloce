import { Instagram, Facebook, Wrench, Users, Phone, BookOpen, FileText, Menu, X } from "lucide-react";
import giolabIcon from "@/assets/giolab-logo-new.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { to: "/servizi", icon: Wrench, label: "Servizi" },
    { to: "/chi-siamo", icon: Users, label: "Chi Siamo" },
    { to: "/contatti", icon: Phone, label: "Contatti" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={giolabIcon}
              alt="Giolab"
              className="h-12 md:h-16 w-auto transition-transform group-hover:scale-110"
              loading="lazy"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-giolab-blue transition-colors"
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button variant="ghost" className="text-foreground hover:text-giolab-blue flex items-center gap-2">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            ))}

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 ml-2">
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

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-foreground hover:text-giolab-blue hover:bg-giolab-blue/5 text-base py-3"
                >
                  <link.icon className="h-5 w-5 mr-3" />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
          
          {/* Social links mobile */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-colors p-2`}
                aria-label={social.label}
              >
                {social.icon === "tiktok" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                ) : (
                  <social.icon className="h-6 w-6" />
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
