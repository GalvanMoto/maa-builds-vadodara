import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Rajesh Patel",
      location: "Vadodara",
      rating: 5,
      text: "MAA Construction built our dream home with excellent quality and finished on time. Their team was professional, and the attention to detail was outstanding. Highly recommended!",
      project: "Residential Villa",
    },
    {
      name: "Priya Shah",
      location: "Bhayli, Vadodara",
      rating: 5,
      text: "We hired them for our commercial office building. The project management was superb, and they stayed within our budget. Very satisfied with the end result.",
      project: "Office Building",
    },
    {
      name: "Amit Desai",
      location: "Vadodara",
      rating: 5,
      text: "Complete interior renovation was handled professionally. From design to execution, everything was perfect. The team understood our vision and delivered beyond expectations.",
      project: "Interior Renovation",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-3 font-heading font-bold text-4xl md:text-5xl text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied clients across Vadodara
            </p>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Google Rating Badge */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="bg-card rounded-2xl shadow-lg p-6 inline-flex items-center gap-4 border border-border">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-heading font-bold text-foreground">4.9</div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-semibold text-foreground">Google Reviews</div>
                <div className="text-sm text-muted-foreground">Based on 150+ reviews</div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-accent/30" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>

                  {/* Project Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {review.project}
                    </span>
                  </div>

                  {/* Reviewer Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA to Google */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want to see more reviews?</p>
            <a
              href="https://www.google.com/maps/search/MAA+CONSTRUCTION+Vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
