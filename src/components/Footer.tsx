import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import giolabIcon from "@/assets/giolab-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-giolab-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={giolabIcon} 
                alt="Giolab Riparazioni" 
                className="h-16 w-16"
                loading="lazy"
              />
              <span className="text-2xl font-bold">Giolab Riparazioni</span>
            </div>
            <address className="text-white/70 text-sm not-italic">
              <strong className="text-white">Giolab Riparazioni</strong><br />
              Via Carmine 20<br />
              09032 Assemini (CA)
            </address>
            <p className="text-white/70 text-sm">
              Centro assistenza iPhone, smartphone, PC e console
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Link Rapidi</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#servizi" className="hover:text-giolab-blue-light transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="/catalogo" className="hover:text-giolab-blue-light transition-colors">
                  Catalogo Accessori
                </a>
              </li>
              <li>
                <a href="/iphone-ricondizionati-assemini" className="hover:text-giolab-blue-light transition-colors">
                  iPhone Ricondizionati
                </a>
              </li>
              <li>
                <a href="/servizi/riparazione-display-iphone-assemini" className="hover:text-giolab-blue-light transition-colors">
                  Riparazione Display iPhone
                </a>
              </li>
              <li>
                <a href="/servizi/batteria-maggiorata-iphone" className="hover:text-giolab-blue-light transition-colors">
                  Batteria Maggiorata
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="hover:text-giolab-blue-light transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-giolab-blue-light transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-giolab-blue-light transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contatti</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+393406970686" className="hover:text-giolab-blue-light transition-colors">
                  340 69 70 686
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:giolabassemini@gmail.com" className="hover:text-giolab-blue-light transition-colors">
                  giolabassemini@gmail.com
                </a>
              </li>
              <li className="flex gap-3 mt-4">
                <a
                  href="https://instagram.com/giolab_iphonefix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-giolab-blue flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com/giolabassemini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-giolab-blue flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p className="font-semibold text-white/70">
            © {currentYear} Giolab Riparazioni - Via Carmine 20, Assemini. Tutti i diritti riservati.
          </p>
          <p className="mt-2">
            <strong className="text-white/70">Via Carmine 20, 09032 Assemini (CA)</strong> | 
            P.IVA: 03896540925 | 
            Tel: <a href="tel:+393406970686" className="hover:text-white transition-colors">340 69 70 686</a>
          </p>
          <p className="mt-2">
            <strong>Orari:</strong> Lun-Ven 9:00-13:00, 16:00-20:00 | Sab 10:00-12:30
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
