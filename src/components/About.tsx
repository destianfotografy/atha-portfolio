import { Calendar, MapPin, GraduationCap, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const { t } = useTranslation();
  const info = [
    { icon: Calendar, label: t('about.born'), value: t('about.birthDate') },
    { icon: MapPin, label: t('about.from'), value: t('about.fromLocation') },
    { icon: Home, label: t('about.liveIn'), value: t('about.liveInLocation') },
  ];

  const education = [
    t('about.school1'),
    t('about.school2'),
    t('about.school3')
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img 
                src={profileImage} 
                alt="Atha Rasyid Risqi"
                className="w-full h-full object-cover rounded-2xl shadow-glow border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
            </div>
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
                <h3 className="font-semibold text-lg">{t('about.education')}</h3>
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
                {t('about.storyTitle')}
              </h3>
              <div className="space-y-3 text-primary-foreground/90">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p className="font-semibold text-primary-foreground">{t('about.storyP3')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
