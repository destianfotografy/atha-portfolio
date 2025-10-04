import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Creative Technologist</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Atha Rasyid
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
            Belajar Banyak, Berkarya Nyata, Tampil Unik
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl">
            Menggabungkan fotografi, desain, coding, dan kreativitas artistik jadi satu karya yang memukau
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="text-base"
            >
              Lihat Karyaku
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-base"
            >
              Hubungi Aku
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
