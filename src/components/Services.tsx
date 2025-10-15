import { Home, Building, PaintBucket, ClipboardCheck, Ruler } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Building Construction",
      description: "Custom home building, apartments, and residential complexes designed to your specifications with quality craftsmanship.",
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes built to meet modern business requirements and standards.",
    },
    {
      icon: PaintBucket,
      title: "Renovation & Interior Design",
      description: "Complete renovation services and modern interior design solutions to transform your existing spaces.",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project management ensuring timely completion, quality control, and budget optimization.",
    },
    {
      icon: Ruler,
      title: "Architectural Consulting",
      description: "Professional architectural design and consulting services to bring your vision to life with innovative solutions.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="mt-3 font-heading font-bold text-4xl md:text-5xl text-foreground">
              Comprehensive Construction Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we provide full-service construction expertise
            </p>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need a custom solution for your project?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              Get in touch with our experts →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
