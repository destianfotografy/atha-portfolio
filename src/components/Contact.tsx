import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { z } from "zod";
const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const contactSchema = z.object({
    name: z.string().trim().nonempty({ message: t('contact.errorName') }).max(100),
    email: z.string().trim().email({ message: t('contact.errorEmail') }).max(255),
    message: z.string().trim().nonempty({ message: t('contact.errorMessage') }).max(1000)
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const socialLinks = [{
    icon: Instagram,
    label: t('contact.instagram'),
    value: "@athadiary21",
    href: "https://instagram.com/athadiary21",
    color: "hover:text-pink-500"
  }, {
    icon: Facebook,
    label: t('contact.facebook'),
    value: "AthaDiary21",
    href: "https://facebook.com/AthaDiary21",
    color: "hover:text-blue-500"
  }, {
    icon: Phone,
    label: t('contact.whatsapp'),
    value: "+62 82241590417",
    href: "https://wa.me/6282241590417",
    color: "hover:text-green-500"
  }, {
    icon: Mail,
    label: t('contact.emailLabel'),
    value: "athadiary21@gmail.com",
    href: "mailto:athadiary21@gmail.com",
    color: "hover:text-accent"
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Error",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }
    const {
      name,
      email,
      message
    } = validation.data;
    const whatsappMessage = encodeURIComponent(`Halo Atha! 👋\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.open(`https://wa.me/6282241590417?text=${whatsappMessage}`, '_blank');
    toast({
      title: t('contact.successTitle'),
      description: t('contact.successDescription')
    });
  };
  return <section id="contact" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input id="name" placeholder={t('contact.namePlaceholder')} value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="bg-background/50" required maxLength={100} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input id="email" type="email" placeholder={t('contact.emailPlaceholder')} value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="bg-background/50" required maxLength={255} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea id="message" placeholder={t('contact.messagePlaceholder')} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="bg-background/50 min-h-[120px]" required maxLength={1000} />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  {t('contact.send')}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-accent border-0 shadow-accent-glow">
                <h3 className="font-display text-2xl font-bold mb-6 text-slate-50">
                  {t('contact.cardTitle')}
                </h3>
                <p className="mb-6 text-slate-50">
                  {t('contact.cardDescription')}
                </p>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground/40 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent-foreground/40 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-accent-foreground/40 animate-pulse delay-150" />
                </div>
              </Card>

              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className={`w-5 h-5 text-primary transition-colors ${social.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{social.label}</p>
                            <p className="font-medium">{social.value}</p>
                          </div>
                        </div>
                      </Card>
                    </a>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;