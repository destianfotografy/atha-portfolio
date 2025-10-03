import { Calendar, MapPin, GraduationCap, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const info = [
    { icon: Calendar, label: "Lahir", value: "20 Agustus 2008" },
    { icon: MapPin, label: "Asal", value: "Balikpapan, Kalimantan" },
    { icon: Home, label: "Tinggal di", value: "Depok, Beji" },
  ];

  const education = [
    "Pondok Tahfidz Askar Kauny",
    "Pondok Multimedia Munzalan Indonesia"
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              Tentang <span className="text-primary">Aku</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Perjalanan seorang creative technologist yang terus belajar dan berkarya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Info Cards */}
            <div className="space-y-4">
              {info.map((item, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Education */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Pendidikan</h3>
              </div>
              <ul className="space-y-3">
                {education.map((edu, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{edu}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Story */}
          <Card className="p-8 bg-gradient-primary border-0 shadow-glow">
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Kombinasi Seni + Logika
              </h3>
              <div className="space-y-3 text-primary-foreground/90">
                <p>
                  Dari Kalimantan sampai Depok, perjalanan gue penuh sama eksplorasi. 
                  Fotografi ngajarin gue cara melihat dunia dari sudut pandang berbeda, 
                  desain ngasih cara buat mewujudkan imajinasi jadi visual yang keren.
                </p>
                <p>
                  Coding? Itu senjata buat bikin semua ide jadi nyata dan interaktif. 
                  Kombinasi ketiganya bikin gue bisa berkarya tanpa batas - dari foto produk 
                  yang estetik, desain interface yang user-friendly, sampai aplikasi yang 
                  solve real problems.
                </p>
                <p className="font-semibold text-primary-foreground">
                  Buat gue, kreativitas bukan cuma soal seni - tapi juga tentang teknologi 
                  dan gimana cara menggunakannya untuk bikin impact.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
