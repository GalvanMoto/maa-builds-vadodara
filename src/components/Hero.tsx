import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MAA Construction building site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-sm">⭐</span>
              ))}
            </div>
            <span className="text-sm font-semibold">4.9/5 on Google Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight">
            Building Dreams with
            <span className="block text-accent">Strength & Trust</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premier Real Estate Builders & Construction Company in Vadodara, Gujarat
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={scrollToContact}
            >
              <MessageSquare className="h-5 w-5" />
              Get a Quote
            </Button>
            <a href="tel:+919824484282">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2 text-lg px-8 py-6 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-heading font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-heading font-bold text-accent mb-1">200+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-heading font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
