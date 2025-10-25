import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Camera, Code, Palette } from "lucide-react";
import { photographyCourses } from "@/courses/photography/photography";
import CourseCard from "@/components/CourseCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";
type CategoryFilter = "all" | "photography" | "design" | "coding";
const Courses = () => {
  const {
    t
  } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const categories = [{
    id: "all" as CategoryFilter,
    label: t('courses.all'),
    icon: BookOpen
  }, {
    id: "photography" as CategoryFilter,
    label: t('courses.photography'),
    icon: Camera
  }, {
    id: "design" as CategoryFilter,
    label: t('courses.design'),
    icon: Palette
  }, {
    id: "coding" as CategoryFilter,
    label: t('courses.coding'),
    icon: Code
  }];

  // Combine all courses (for now only photography, but ready for expansion)
  const allCourses = [...photographyCourses];

  // Filter courses
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase()) || course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return <div className="min-h-screen bg-background">
      <LanguageToggle />
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-subtle border-b border-border/50">
        <div className="container max-w-6xl mx-auto text-center">
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              {t('courses.backHome')}
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('courses.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('courses.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder={t('courses.search')} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 h-12" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} onClick={() => setActiveCategory(category.id)} className="gap-2">
                <category.icon className="w-4 h-4" />
                {category.label}
              </Button>)}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {t('courses.showing')} {filteredCourses.length} {t('courses.results')}
              {searchQuery && ` ${t('courses.for')} "${searchQuery}"`}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div> : <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-semibold mb-2">{t('courses.noResults')}</h3>
              <p className="text-muted-foreground">{t('courses.noResultsDesc')}</p>
            </div>}

          {/* CTA Section */}
          
        </div>
      </section>
    </div>;
};
export default Courses;