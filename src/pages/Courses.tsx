import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Camera, Code, Palette } from "lucide-react";
import { photographyCourses } from "@/courses/photography/photography";
import CourseCard from "@/components/CourseCard";
import { Link } from "react-router-dom";

type CategoryFilter = "all" | "photography" | "design" | "coding";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categories = [
    { id: "all" as CategoryFilter, label: "Semua", icon: BookOpen },
    { id: "photography" as CategoryFilter, label: "Photography", icon: Camera },
    { id: "design" as CategoryFilter, label: "Design", icon: Palette },
    { id: "coding" as CategoryFilter, label: "Coding", icon: Code },
  ];

  // Combine all courses (for now only photography, but ready for expansion)
  const allCourses = [...photographyCourses];

  // Filter courses
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-subtle border-b border-border/50">
        <div className="container max-w-6xl mx-auto text-center">
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              ← Kembali ke Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Pembelajaran
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Jelajahi berbagai materi pembelajaran dari fotografi, desain, hingga coding. 
            Semua gratis untuk meningkatkan skill kreatif kamu.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari pembelajaran..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Menampilkan {filteredCourses.length} pembelajaran
              {searchQuery && ` untuk "${searchQuery}"`}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-semibold mb-2">Tidak ada hasil</h3>
              <p className="text-muted-foreground">
                Coba ubah filter atau kata kunci pencarian kamu
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Butuh Jasa Profesional?</h3>
            <p className="text-muted-foreground mb-6">
              Jika kamu memerlukan layanan fotografi, desain, atau web development profesional, 
              kunjungi website jasa kami.
            </p>
            <a 
              href="https://athastudio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                Lihat Layanan Profesional
                <BookOpen className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;