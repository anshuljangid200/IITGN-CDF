import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./SmoothHovers.css";

interface ProgramCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  imgSrc?: string;
  showImage?: boolean;
  route?: string;
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ProgramCard = ({
  title,
  subtitle,
  description,
  icon,
  delay = 0,
  imgSrc,
  showImage = true,
  route,
}: ProgramCardProps) => {
  return (
    <Card
      className={`group bg-card border-border overflow-hidden rounded-2xl program-card`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header image */}
      {showImage && imgSrc ? (
        <div className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-t-2xl">
          <img
            src={imgSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-t-2xl program-image"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute left-4 bottom-4 z-20">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white drop-shadow leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs md:text-sm text-white/90 mt-1 drop-shadow-sm leading-snug">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      ) : null}

      {/* TEXT CONTENT */}
      <div
        className={`relative z-10 flex flex-col justify-between h-full p-6 ${
          showImage && imgSrc ? "pt-4" : ""
        }`}
      >
        <CardHeader className="p-0 mb-3 relative">
          {/* IF NO IMAGE – SHOW HEADINGS + FLOATING ICON */}
          {!(showImage && imgSrc) && (
            <div className="relative">
              {/* Floating top-right icon */}
              {icon && (
                <div className="absolute top-0 right-0 p-2 rounded-lg bg-primary/10 text-primary shadow-sm">
                  {icon}
                </div>
              )}

              {/* Title + Subtitle */}
              <div className="pr-12">
                <CardTitle className="text-2xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>

                {subtitle && (
                  <p className="text-sm text-muted-foreground/90 mt-1.5 tracking-wide leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-0">
          <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </CardDescription>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant={route ? "outline" : "ghost"}
              size="sm"
              className={
                route
                  ? `${
                      showImage && imgSrc
                        ? "bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary"
                        : "bg-primary-50 border-primary-100 text-primary hover:bg-primary-100 hover:text-primary-dark"
                    } transition-colors`
                  : `${
                      showImage && imgSrc
                        ? "text-white hover:text-primary hover:bg-white/10"
                        : "text-primary hover:text-primary-dark hover:bg-transparent"
                    }`
              }
            >
              <Link
                to={route ?? "/programs"}
                onClick={scrollToTop}
                aria-label={`Know more about ${title}`}
                className="flex items-center gap-2"
              >
                <span>{route ? "Know More" : "Learn More"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProgramCard;
