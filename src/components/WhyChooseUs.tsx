import { Award, Users, Clock, IndianRupee, Shield, Lightbulb } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Quality Work",
      description: "Premium materials and expert craftsmanship ensuring superior construction quality",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "15+ years of expertise with certified engineers and skilled craftsmen",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to completing projects within agreed timelines without compromise",
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent pricing and no hidden costs",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict adherence to safety protocols and quality standards on every site",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Modern construction techniques and creative problem-solving approaches",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-3 font-heading font-bold text-4xl md:text-5xl text-foreground">
              Your Perfect Construction Partner
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why hundreds of clients trust us with their construction projects
            </p>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Icon className="h-10 w-10 text-accent-foreground" />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-12 shadow-lg">
            <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their construction dreams
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-md"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+919824484282"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all border border-white/30"
              >
                Call +91 98244 84282
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
