import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { photographyCourses } from "@/courses/photography/photography";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";

const CourseViewer = () => {
  const { courseId } = useParams();
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Combine all courses (ready for expansion)
  const allCourses = [...photographyCourses];

  // Find the course
  const course = allCourses.find(c => c.id === courseId);
  
  useEffect(() => {
    // Simulate loading time for iframe
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [courseId, i18n.language]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }
  return <div className="min-h-screen bg-background flex flex-col">
      <LanguageToggle />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <Link to="/courses">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('courseViewer.back')}</span>
                </Button>
              </Link>
              
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-semibold truncate">{course.title}</h1>
                <p className="text-sm text-muted-foreground truncate">
                  {course.duration} • {course.level}
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </header>

      {/* Course Content */}
      <main className="flex-1">
        {isLoading && <div className="flex items-center justify-center h-96">
            <div className="animate-pulse text-muted-foreground">
              {t('courseViewer.loading')}
            </div>
          </div>}
        
        <iframe id="course-iframe" src={course.htmlFile} title={course.title} className={`w-full border-0 ${isLoading ? 'hidden' : 'block'}`} style={{
        height: 'calc(100vh - 73px)'
      }} sandbox="allow-same-origin allow-scripts" />
      </main>
    </div>;
};
export default CourseViewer;