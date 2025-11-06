import { ArrowRight, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./Index.module.css";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import LogoMarquee from "@/components/LogoMarquee";
import styles from "./Index.module.css";
import CarouselBackground from "@/components/CarouselBackground"; // ✅ ADDED

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">

        {/* ✅ Background Carousel Inserted */}
        <CarouselBackground />

        {/* ✅ Your Existing Gradients (kept exactly same) */}
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-flex items-center space-x-2 bg-black/40 text-primary-foreground px-4 py-2 rounded-full mb-4 backdrop-blur-lg border border-white/20 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Experience world-class education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build Your Future with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Career-ready skills
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your career with IIT Gandhinagar's Competency Development
              Foundation Programs in Data Science, AI, and Software Development with
              Generative AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-medium group"
              >
                <Link to="/admissions" className="flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-6 h-6" />, value: "3", label: "Programs" },
              { icon: <Users className="w-6 h-6" />, value: "Growing", label: "Community of learners" },
              { icon: <BookOpen className="w-6 h-6" />, value: "100%", label: "Career-ready Skills" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in stat-delay-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <div className="text-primary-foreground">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from three cutting-edge programs designed to equip you with
              the skills needed for tomorrow's tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <ProgramCard
              title="Gen AI Powered Data Science and Engineering"
              description="Learn to design, implement, and scale data pipelines and machine learning infrastructure with hands-on expertise in AutoML, MLOps, and cloud platforms."
              delay={0}
              brochure="/brochures/data-science.pdf"
              imgSrc="/programs/DSE.jpg"
              showImage={false}
            />
            <ProgramCard
              title="Gen AI Powered Software Engineering with Cloud"
              description="Master modern DevOps, cloud-native architectures, and AI-augmented software applications with generative and agentic AI techniques."
              delay={100}
              brochure="/brochures/software-genai.pdf"
              imgSrc="/programs/SEAI.JPG"
              showImage={false}
            />
            <ProgramCard
              title="Gen AI Powered AIML / AgenticAI Engineering"
              description="Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance for scalable AI solutions."
              delay={200}
              brochure="/brochures/ai-agentic.pdf"
              imgSrc="/programs/AIA.jpg"
              showImage={false}
            />
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="bg-muted/30">
        <Board />

        {(() => {
          const hiringPaths = [
            '/OUR%20HIRING%20PARTNERS/Apple.svg',
            '/OUR%20HIRING%20PARTNERS/BlackRock.svg',
            '/OUR%20HIRING%20PARTNERS/Deloitte..svg',
            '/OUR%20HIRING%20PARTNERS/EY.svg',
            '/OUR%20HIRING%20PARTNERS/JPM.svg',
            '/OUR%20HIRING%20PARTNERS/LSE.svg',
            '/OUR%20HIRING%20PARTNERS/MicroTrend.svg',
            '/OUR%20HIRING%20PARTNERS/Nestle.svg',
            '/OUR%20HIRING%20PARTNERS/TESLA.svg',
          ];

          const trustedPaths = [
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Accenture.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Amazon.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Google.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Honeywell.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/IBM.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Infosys.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Microsoft.svg',
            '/TRUSTED%20BY%20LEADING%20COMAPNIES/Siemens.svg',
          ];

          return (
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">Our Hiring Partners</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Organizations that collaborate with IIT Gandhinagar to empower future-ready talent.</p>
                <LogoMarquee hiringTop={{ logos: hiringPaths, leftToRight: true, duration: 18 }} />
              </div>

              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">Trusted by Leading Companies</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Our graduates are trusted by these industry leaders.</p>
                <LogoMarquee trusted={{ logos: trustedPaths, leftToRight: false, duration: 18 }} />
              </div>
            </div>
          );
        })()}
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-16 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
              Advance Your Career Today
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our Competency Development Foundation Programs and build expertise that opens doors
              to roles such as Data Scientist, AI Engineer, Cloud Data Engineer,
              and more.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large group"
            >
              <Link to="/admissions" className="flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
