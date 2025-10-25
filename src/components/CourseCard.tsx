import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Course } from "@/courses/photography/photography";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`}>
      <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="relative overflow-hidden h-48">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm">
            {course.level}
          </Badge>
        </div>
        
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
            <span className="mx-2">•</span>
            <BookOpen className="w-4 h-4" />
            <span>{course.category}</span>
          </div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {course.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{course.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;