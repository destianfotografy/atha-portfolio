import { Camera, Code, Palette, Zap, Sparkles, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Camera,
      title: "Photography",
      skills: ["Product Photography", "Street Photography", "Event Documentation", "Portrait", "Commercial"],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      skills: ["React & TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX Implementation", "Modern Web Apps"],
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Creative Design",
      skills: ["Visual Design", "Brand Identity", "Layout Design", "Color Theory", "Typography"],
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      skills: ["AI-Powered Tools", "Automation", "Creative AI", "Workflow Optimization", "Content Enhancement"],
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Tools & Tech",
      skills: ["Figma", "Adobe Suite", "Git & GitHub", "VS Code", "Vercel/Netlify"],
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Soft Skills",
      skills: ["Problem Solving", "Creative Thinking", "Client Communication", "Project Management", "Attention to Detail"],
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kombinasi unik dari kreativitas visual, technical skills, dan problem-solving yang menghasilkan solusi inovatif
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-white backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full border border-border/50 text-foreground/80 text-sm hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
