import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  brochure?: string;
  imgSrc?: string;
  showImage?: boolean;
}

const ProgramCard = ({ title, description, icon, delay = 0, brochure, imgSrc, showImage = true }: ProgramCardProps) => {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] bg-card border-border overflow-hidden rounded-2xl`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Header image area (optional) */}
      {showImage && imgSrc ? (
        <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-t-2xl">
          <img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute left-4 bottom-4 z-20">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow">{title}</h3>
          </div>
        </div>
      ) : null}

      {/* TEXT CONTENT */}
      <div className={`relative z-10 flex flex-col justify-between h-full p-6 ${showImage && imgSrc ? 'pt-4' : ''}`}>
        <CardHeader className="p-0 mb-2">
          {! (showImage && imgSrc) && (
            <div className="flex items-center gap-3">
              {icon && <span className="text-primary">{icon}</span>}
              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-0">
          <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </CardDescription>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3">
            {brochure ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className={` ${showImage && imgSrc ? 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary' : 'bg-primary-50 border-primary-100 text-primary hover:bg-primary-100 hover:text-primary-dark'} transition-colors`}
              >
                <a
                  href={brochure}
                  download
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Know more about ${title}`}
                  className="flex items-center gap-2"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            ) : (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className={`${showImage && imgSrc ? 'text-white hover:text-primary hover:bg-white/10' : 'text-primary hover:text-primary-dark hover:bg-transparent'}`}
              >
                <Link to="/programs" className="flex items-center gap-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </div>

      {/* Optional image zoom on hover wrapper (no visual element needed here) */}
    </Card>
  );
};

export default ProgramCard;
