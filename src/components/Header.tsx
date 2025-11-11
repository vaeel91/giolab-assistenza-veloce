import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import giolabIcon from "@/assets/giolab-icon.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Servizi", href: "#servizi" },
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Testimonianze", href: "#testimonianze" },
    { label: "FAQ", href: "#faq" },
    { label: "Dove Siamo", href: "#dove-siamo" },
    { label: "Contatti", href: "#contatti" },
  ];

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group"
          >
            <img
              src={giolabIcon}
              alt="Giolab"
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Giolab
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-giolab-blue transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-giolab-blue transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pl-6 border-l border-border">
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-muted-foreground hover:text-giolab-blue transition-colors px-4 py-2 hover:bg-accent rounded-md"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Social Media Links in Mobile Menu */}
              <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors flex items-center gap-2`}
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
