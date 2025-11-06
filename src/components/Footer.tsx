import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/logo2.png" alt="IITGN logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">IITGN</h3>
                <p className="text-xs text-muted-foreground">Competency Advancement Academy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering professionals with career-ready, skill-focused learning in Gen AI powered programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://genx.iitgn.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GenX
                </a>
              </li>
              <li>
                <a href="https://iitgn.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IITGN Website
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#data-science" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gen AI Powered Data Science and Engineering
                </a>
              </li>
              <li>
                <a href="#software" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gen AI Powered Software Engineering with Cloud
                </a>
              </li>
              <li>
                <a href="#aiml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gen AI Powered AIML / AgenticAI Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@iitgn.ac.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@iitgn.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+917923951100" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91-79-2395-1100
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Palaj, Gujarat - 382055
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 IIT Gandhinagar Competency Development Foundation Programs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
