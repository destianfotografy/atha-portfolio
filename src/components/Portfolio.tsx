import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Palette, Code, Sparkles } from "lucide-react";

type Category = "all" | "photography" | "design" | "coding" | "ai";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  tags: string[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all", label: "Semua Karya", icon: Sparkles },
    { id: "photography", label: "Fotografi", icon: Camera },
    { id: "design", label: "Desain", icon: Palette },
    { id: "coding", label: "Coding", icon: Code },
    { id: "ai", label: "AI Projects", icon: Sparkles },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Product Photography Series",
      category: "photography",
      description: "Koleksi foto produk dengan lighting dan komposisi yang estetik untuk brand lokal",
      tags: ["Product", "Commercial", "Lighting"]
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "design",
      description: "Desain identitas visual lengkap dari logo sampai brand guidelines",
      tags: ["Branding", "Logo", "Visual Identity"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "coding",
      description: "Website portfolio interaktif dengan animasi smooth dan responsive design",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "ai",
      description: "Tool AI untuk generate konten kreatif dengan custom prompts",
      tags: ["AI", "Automation", "Creative Tech"]
    },
    {
      id: 5,
      title: "Street Photography",
      category: "photography",
      description: "Dokumentasi momen candid di jalanan kota dengan storytelling visual",
      tags: ["Street", "Documentary", "Urban"]
    },
    {
      id: 6,
      title: "UI/UX Mobile App",
      category: "design",
      description: "Desain interface aplikasi mobile dengan fokus user experience",
      tags: ["UI/UX", "Mobile", "Figma"]
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Karya <span className="text-primary">Pilihan</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Koleksi project terbaik dari berbagai bidang kreatif
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image placeholder with gradient */}
                <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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

export default Portfolio;
