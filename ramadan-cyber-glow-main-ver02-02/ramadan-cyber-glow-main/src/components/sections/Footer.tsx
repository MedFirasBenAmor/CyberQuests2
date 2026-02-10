import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/securinet-logo.png";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Workshops", href: "#workshops" },
  { label: "Location", href: "#location" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-navy-deep border-t border-border/30 py-12">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 items-start w-full">
          {/* Logo & Description */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="SecuriNets Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-foreground">
                SecuriNets
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-justify">
              SecuriNets ENET'Com is a student-led cybersecurity community at ENET’Com, dedicated to promoting cyber awareness, technical skills, and hands-on learning through bootcamps, CTFs, conferences, and collaborative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-w-xs">
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sfax+Technopole+Tunis+Road+Sfax+Tunisia+3021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Sfax Technopole, Tunis Road, Sfax, Tunisia, 3021
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a 
                  href="mailto:cyberquest.ramadannights@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  cyberquest.ramadannights@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a 
                  href="tel:92111573" 
                  className="hover:text-primary transition-colors"
                >
                  92 111 573
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © 2026 CyberQuests. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground order-1 md:order-2">
            Organized by <span className="text-secondary">SecuriNets</span> <span className="text-primary uppercase">ENET'Com & FST</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
