import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Brand Owner",
      content: "Atha bener-bener ngerti visi gue! Foto produknya estetik banget, bikin brand gue keliatan lebih premium. Highly recommended!",
      rating: 5
    },
    {
      name: "Rizky Pratama",
      role: "Startup Founder",
      content: "Website yang dia bikin smooth banget, UI/UX-nya on point. Kerjanya cepet, komunikasi jelas, hasil memuaskan!",
      rating: 5
    },
    {
      name: "Dinda Kartika",
      role: "Content Creator",
      content: "Kolaborasi bareng Atha seru! Dia bisa bantuin dari konsep sampai eksekusi, hasilnya selalu beyond expectation.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Kata <span className="text-primary">Mereka</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Feedback dari klien dan kolaborator yang puas
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="card-animated-border p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
