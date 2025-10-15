import { Building2, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Expert Builders",
      description: "Specializing in residential and commercial construction with modern techniques",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "15+ years of expertise with skilled engineers and craftsmen",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium materials and strict quality control at every stage",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to completing projects within agreed timelines",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="mt-3 font-heading font-bold text-4xl md:text-5xl text-foreground">
              Your Trusted Construction Partner
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">MAA CONSTRUCTION</span> is a premier real estate 
                builders and construction company based in Vadodara, Gujarat. With over 15 years of experience 
                in the industry, we have established ourselves as a trusted name in delivering exceptional 
                construction services.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our commitment to quality, timely delivery, and customer satisfaction has earned us a stellar 
                reputation with a <span className="font-semibold text-success">4.9/5 rating</span> on Google Reviews. 
                From residential buildings to commercial complexes, we bring your vision to life with precision 
                and professionalism.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Located near BAPS Swaminarayan Temple in Bhayli, Vadodara, we serve clients across Gujarat with 
                comprehensive construction solutions including architectural design, project management, and 
                interior renovation services.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
