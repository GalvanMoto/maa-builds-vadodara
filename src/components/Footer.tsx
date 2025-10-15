import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Projects",
    "Interior Design",
    "Renovation Services",
    "Project Management",
    "Architectural Consulting",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-heading font-bold text-xl">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg leading-none text-background">
                    MAA CONSTRUCTION
                  </span>
                  <span className="text-xs text-background/70">Building Dreams</span>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed">
                Premier real estate builders and construction company in Vadodara, Gujarat. 
                Building quality structures with trust and excellence.
              </p>
            </div>
            <div className="flex items-center gap-2 text-background/90">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">⭐</span>
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-background">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-background">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-background/80 text-sm leading-relaxed">
                  BAPS SWAMINARAYAN TEMPLE, 1 AADHYA AANGAN, nr. BHAYLI, Vadodara, Gujarat 391410
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+919824484282" className="text-background/80 hover:text-accent transition-colors">
                  +91 98244 84282
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@maaconstruction.com" className="text-background/80 hover:text-accent transition-colors">
                  info@maaconstruction.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 text-background">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
            <p>
              © {currentYear} MAA CONSTRUCTION. All rights reserved.
            </p>
            <p>
              Made with <span className="text-accent">❤️</span> in Vadodara, Gujarat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
