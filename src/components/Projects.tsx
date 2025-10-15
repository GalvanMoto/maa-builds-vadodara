import { useState } from "react";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Luxury Residential Complex",
      category: "Residential",
      image: projectResidential,
      description: "Modern 50-unit apartment complex in Vadodara",
    },
    {
      title: "Corporate Office Building",
      category: "Commercial",
      image: projectCommercial,
      description: "5-story commercial building with premium facilities",
    },
    {
      title: "Premium Interior Design",
      category: "Interior",
      image: projectInterior,
      description: "Complete luxury home interior transformation",
    },
    {
      title: "Township Development",
      category: "Residential",
      image: projectResidential,
      description: "Integrated township with 200+ homes",
    },
    {
      title: "Shopping Mall Construction",
      category: "Commercial",
      image: projectCommercial,
      description: "Multi-level retail and entertainment complex",
    },
    {
      title: "Villa Renovation",
      category: "Renovation",
      image: projectInterior,
      description: "Complete modern renovation of heritage villa",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="mt-3 font-heading font-bold text-4xl md:text-5xl text-foreground">
              Completed Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing excellence in construction across Vadodara and Gujarat
            </p>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-sm">
              <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
