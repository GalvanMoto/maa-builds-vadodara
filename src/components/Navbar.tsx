import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, "#home")}>
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none">MAA CONSTRUCTION</span>
              <span className="text-xs text-muted-foreground">Building Dreams</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+919824484282">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors rounded-md"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a href="tel:+919824484282" className="block">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call +91 98244 84282
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
