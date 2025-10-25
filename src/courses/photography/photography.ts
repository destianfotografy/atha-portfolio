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
    duration: "15 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/penemuan-photography.jpg",
    htmlFile: "/courses/photography/penemuan-photography.html",
    tags: ["Sejarah", "Fotografi", "Niépce", "Daguerre", "Talbot", "Heliografi", "Daguerreotype", "Calotype"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10"
  },
  {
    id: "photography-20th",
    title: "Fotografi di abad ke-20",
    description: "Eksplorasi perkembangan fotografi sepanjang abad ke-20, termasuk kemajuan teknologi, gaya fotografi, dan pengaruh budaya yang membentuk dunia fotografi modern.",
    category: "photography",
    duration: "30 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/photo-20th.jpg",
    htmlFile: "/courses/photography/photography-20th.html",
    tags: ["Sejarah", "Fotografi", "Perkembangan", "Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  }
];
