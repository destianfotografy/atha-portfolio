import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Atha Rasyid Risqi. All rights reserved.
            </p>
            <a 
              href="https://athastudio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-accent transition-colors flex items-center gap-1 group"
            >
              Lihat Layanan Profesional
              <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
