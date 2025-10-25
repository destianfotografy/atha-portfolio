import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
