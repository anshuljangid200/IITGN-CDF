import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/campus-life", label: "Campus Life" },
    { path: "/placements", label: "Placements" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-start group -ml-3 sm:-ml-5 md:-ml-6 lg:-ml-7 flex-shrink-0"
          >
            <div className="flex items-start">
              {/* LOGO GROUP */}
              <div className="flex items-center gap-[6px] sm:gap-[8px]">
                {/* Left Circle Logo */}
                <div
                  className="
        w-[40px] sm:w-[52px] md:w-[60px] lg:w-[66px]
        h-[40px] sm:h-[52px] md:h-[60px] lg:h-[66px]
        rounded-full bg-white shadow-soft group-hover:shadow-medium 
        transition-all duration-300 overflow-hidden flex items-center justify-center
      "
                >
                  <img
                    src="/logo.png"
                    alt="CDF icon"
                    className="object-contain w-[72%] h-[72%]"
                    loading="lazy"
                  />
                </div>

                {/* Divider — reduced spacing */}
                <div className="hidden sm:block w-px h-6 sm:h-7 bg-border/40"></div>

                {/* Right Circle Logo */}
                <div
                  className="
        hidden sm:flex
        w-[40px] sm:w-[52px] md:w-[60px] lg:w-[66px]
        h-[40px] sm:h-[52px] md:h-[60px] lg:h-[66px]
        rounded-full bg-white shadow-soft group-hover:shadow-medium
        transition-all duration-300 overflow-hidden flex items-center justify-center
      "
                >
                  <img
                    src="/logo2.png"
                    alt="IIT Gandhinagar logo"
                    className="object-contain w-[72%] h-[72%]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* TEXT GROUP */}
              <div className="ml-2 sm:ml-3 flex flex-col justify-center leading-[1.15] font-sans">
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-foreground">
                  IITGN
                </span>
                <span className="hidden sm:inline text-[0.70rem] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground">
                  Competency Development
                </span>
                <span className="hidden sm:inline text-[0.70rem] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground">
                  Foundation
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
                Apply Now
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
