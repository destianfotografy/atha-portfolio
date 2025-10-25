export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  htmlFile: string;
  tags: string[];
  author: string;
  publishDate: string;
}

export const photographyCourses: Course[] = [
  {
    id: "penemuan-photography",
    title: "Sejarah Penemuan Fotografi",
    description: "Kisah Niépce, Daguerre, dan Talbot: Tiga Tokoh Pionir dalam Sejarah Fotografi. Pelajari bagaimana fotografi pertama kali ditemukan dan berkembang menjadi teknologi modern.",
    category: "photography",
    duration: "30 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/thumbnail.jpg",
    htmlFile: "/courses/photography/penemuan-photography.html",
    tags: ["Sejarah", "Fotografi", "Niépce", "Daguerre", "Talbot", "Heliografi", "Daguerreotype", "Calotype"],
    author: "Atha Rasyid Risqi",
    publishDate: "2024-10"
  }
];
