import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "#";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#workshops", label: "Workshops" },
  { href: "#location", label: "Location" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="font-bold text-2xl">
              <span className="text-white">Cyber</span><span className="text-primary">Quests</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    const navHeight = 80;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Join Us Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleJoinClick}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Join Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-xl animate-fade-in-up">
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      const navHeight = 80;
                      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
                    }
                  }}
                  className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={handleJoinClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
