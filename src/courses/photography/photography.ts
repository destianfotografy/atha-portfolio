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
  },
  {
    id: "jenis-camera",
    title: "jenis-jenis kamera",
    description: "jenis-jenis kamera yang digunakan dalam fotografi",
    category: "photography",
    duration: "60 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/jenis-camera.jpg",
    htmlFile: "/courses/photography/jenis-camera.html",
    tags: [ "Fotografi", "Perkembangan", "Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
  {
    id: "fungsi-camera",
    title: "Fungsi & Bagian dari kamera",
    description: "fungsi dan bagian-bagian utama dari sebuah kamera fotografi",
    category: "photography",
    duration: "60 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/fungsi-camera.jpg",
    htmlFile: "/courses/photography/fungsi-camera.html",
    tags: [ "Fungsi", "Fotografi", "Perkembangan", "Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
  {
    id: "jenis-lensa",
    title: "jenis-jenis lensa kamera",
    description: "jenis-jenis lensa yang digunakan dalam fotografi",
    category: "photography",
    duration: "60 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/jenis-lensa.jpg",
    htmlFile: "/courses/photography/jenis-lensa.html",
    tags: [ "jenis", "Fotografi", "Perkembangan", "Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
  {
    id: "focal-length",
    title: "Focal Length pada lensa",
    description: "Focal Length pada lensa kamera dan pengaruhnya terhadap hasil foto",
    category: "photography",
    duration: "90 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/focal.jpg",
    htmlFile: "/courses/photography/focal-length.html",
    tags: [ "jenis", "Fotografi", "Perkembangan", "Teknologi", "lensa"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
  {
    id: "histogram",
    title: "Pengertian Histogram",
    description: "Pengertian Histogram dalam fotografi dan cara membacanya untuk meningkatkan kualitas foto",
    category: "photography",
    duration: "60 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/histogram.jpg",
    htmlFile: "/courses/photography/histogram.html",
    tags: [ "Histogram", "Metering",  "Fotografi", "Perkembangan", "jenis","Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
  {
    id: "iso-shutter-aperture",
    title: "Pengertian ISO, Shutter Speed, dan Aperture",
    description: "Cara mengatur ISO, Shutter Speed, dan Aperture pada kamera untuk mendapatkan hasil foto yang optimal",
    category: "photography",
    duration: "180 menit",
    level: "Beginner",
    thumbnail: "/courses/photography/iso.jpg",
    htmlFile: "/courses/photography/iso.html",
    tags: [ "Shutter", "ISO",  "Fotografi", "Perkembangan", "jenis", "Aperture", "Teknologi"],
    author: "Atha Rasyid Risqi",
    publishDate: "2025-10",
  },
];
