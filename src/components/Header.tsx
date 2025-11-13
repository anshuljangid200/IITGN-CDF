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
          <Link to="/" className="flex items-start group -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 flex-shrink-0">
            <div className="flex items-start">
              <div className="flex items-center">
                <div className="w-[36px] sm:w-[48px] md:w-[56px] lg:w-[62px] h-[36px] sm:h-[48px] md:h-[56px] lg:h-[62px] rounded-full flex items-center justify-center bg-white shadow-soft group-hover:shadow-medium transition-all duration-300 overflow-hidden flex-shrink-0">
                  <img
                    src="/logo.png"
                    alt="IIT Gandhinagar CDF logo"
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="hidden sm:block mx-1 sm:mx-2 w-px h-6 sm:h-8 bg-border/50"></div>
                <div className="hidden sm:flex w-[36px] sm:w-[48px] md:w-[56px] lg:w-[62px] h-[36px] sm:h-[48px] md:h-[56px] lg:h-[62px] rounded-full flex-shrink-0 items-center justify-center bg-white shadow-soft group-hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <img
                    src="/logo2.png"
                    alt="IIT Gandhinagar logo"
                    className="w-full h-full object-contain p-1"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="ml-2 sm:ml-3 flex flex-col justify-center leading-tight">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-foreground">IITGN</span>
                <span className="hidden sm:inline text-xs text-muted-foreground">Competency Development</span>
                <span className="hidden sm:inline text-xs text-muted-foreground">Foundation Programs</span>
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
            <Button asChild className="ml-4 bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <Button asChild className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
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
