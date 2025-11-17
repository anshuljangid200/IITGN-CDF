import { ArrowRight, Award, Users, BookOpen, Sparkles, Brain, Database, Cloud, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./Index.module.css";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import LogoMarquee from "@/components/LogoMarquee";
import CarouselBackground from "@/components/CarouselBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <CarouselBackground />
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-black/40 text-primary-foreground px-4 py-2 rounded-full mb-4 backdrop-blur-lg border border-white/20 shadow-md">
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
              Transform your career with IIT Gandhinagar's Competency
              Development Foundation Programs in Data Science, AI, and Software
              Development with Generative AI.
            </p>

            {/* ✅ Compact Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary hover:opacity-90 shadow-medium group px-5 py-2 text-sm font-medium rounded-full"
              >
                <Link to="/admissions" className="flex items-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-2 hover:bg-muted px-5 py-2 text-sm font-medium rounded-full"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
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

          {/* ✅ Corrected Program Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            <ProgramCard
              title="PG Diploma in GenAI-Powered AI-ML & Agentic AI Engineering"
              subtitle="Admissions, Industry & Hospitality Partner: Futurense"
              description="Learn to design, implement, and scale data pipelines and machine learning infrastructure with hands-on expertise in AutoML, MLOps, and cloud platforms."
              icon={<Brain className="w-5 h-5" />}
              delay={0}
              imgSrc="/programs/DSE.jpg"
              showImage={false}
              route="/gen-ai-data-science"
            />

            <ProgramCard
              title="PG Diploma in GenAI-Powered Data Science & Engineering"
              subtitle="Admissions, Industry & Hospitality Partner: Futurense"
              description="Master modern DevOps, cloud-native architectures, and AI-augmented software applications with generative and agentic AI techniques."
              icon={<Database className="w-5 h-5" />}
              delay={100}
              imgSrc="/programs/SEAI.JPG"
              showImage={false}
              route="/gen-ai-software-cloud"
            />

            <ProgramCard
              title="PG Diploma in AI-Powered Software Engineering with Cloud"
              subtitle="Admissions, Industry & Hospitality Partner: Futurense"
              description="Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance for scalable AI solutions."
              icon={
                <>
                  <Cloud className="w-4 h-4 inline-block" />
                  <Code className="w-4 h-4 inline-block ml-1" />
                </>
              }
              delay={200}
              imgSrc="/programs/AIA.jpg"
              showImage={false}
              route="/gen-ai-agentic-aiml"
            />
          </div>
        </div>
      </section>

      {/* Board Section: immediately after Programs */}
      <section className="bg-muted/30">
        <Board />
      </section>

      {/* Hiring Partners: placed after Board as requested */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {(() => {
            const hiringPaths = [
              "/OUR HIRING PARTNERS/Accenture.svg",
              "/OUR HIRING PARTNERS/Adani Group.svg",
              "/OUR HIRING PARTNERS/Aditya Birla Group.svg",
              "/OUR HIRING PARTNERS/Ashok_Leyland.svg",
              "/OUR HIRING PARTNERS/Backbase.svg",
              "/OUR HIRING PARTNERS/Bosch.svg",
              "/OUR HIRING PARTNERS/Capco.svg",
              "/OUR HIRING PARTNERS/CitiBank.svg",
              "/OUR HIRING PARTNERS/DXC Technology.svg",
              "/OUR HIRING PARTNERS/EY.svg",
              "/OUR HIRING PARTNERS/Gallagher.svg",
              "/OUR HIRING PARTNERS/Giant Eagle.svg",
              "/OUR HIRING PARTNERS/Grant Thornton.svg",
              "/OUR HIRING PARTNERS/HPE.svg",
              "/OUR HIRING PARTNERS/IBM.svg",
              "/OUR HIRING PARTNERS/JCPenney.svg",
              "/OUR HIRING PARTNERS/Kmart.svg",
              "/OUR HIRING PARTNERS/KPMG.svg",
              "/OUR HIRING PARTNERS/Kyndryl.svg",
              "/OUR HIRING PARTNERS/Landmark Group.svg",
              "/OUR HIRING PARTNERS/Lenovo.svg",
              "/OUR HIRING PARTNERS/Levi’s.svg",
              "/OUR HIRING PARTNERS/Lowe’s.svg",
              "/OUR HIRING PARTNERS/Optum.svg",
              "/OUR HIRING PARTNERS/Philips.svg",
              "/OUR HIRING PARTNERS/Protiviti.svg",
              "/OUR HIRING PARTNERS/Renault Nissan (RNTBCI).svg",
              "/OUR HIRING PARTNERS/Schneider Electric.svg",
              "/OUR HIRING PARTNERS/Siemens.svg",
              "/OUR HIRING PARTNERS/Societe Generale.svg",
              "/OUR HIRING PARTNERS/Stryker.svg",
              "/OUR HIRING PARTNERS/Swiss Re.svg",
              "/OUR HIRING PARTNERS/Wells Fargo.svg",
              "/OUR HIRING PARTNERS/ZS Associate.svg",
            ];

            const trustedPaths = [
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Accenture.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Amazon.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Google.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Honeywell.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/IBM.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Infosys.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Microsoft.svg",
              "/TRUSTED%20BY%20LEADING%20COMAPNIES/Siemens.svg",
            ];

            return (
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-6">
                  <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">
                    Our Hiring Partners
                  </h3>
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Organizations that collaborate with IIT Gandhinagar to empower
                    future-ready talent.
                  </p>
                  <LogoMarquee
                    hiringTop={{
                      logos: hiringPaths,
                      leftToRight: true,
                      duration: 22,
                    }}
                  />
                </div>

                <div className="bg-card rounded-2xl p-6">
                  <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">
                    Trusted by Leading Companies
                  </h3>
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Our graduates are trusted by these industry leaders.
                  </p>
                  <LogoMarquee
                    trusted={{
                      logos: trustedPaths,
                      leftToRight: false,
                      duration: 12,
                    }}
                  />
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-16 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
              Advance Your Career Today
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our Competency Development Foundation Programs and build
              expertise that opens doors to roles such as Data Scientist, AI
              Engineer, Cloud Data Engineer, and more.
            </p>
            <Button
              asChild
              size="sm"
              className="bg-white text-primary hover:bg-white/90 shadow-large group px-6 py-2 text-sm font-semibold rounded-full"
            >
              <Link
                to="/admissions"
                className="flex items-center justify-center space-x-2"
              >
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
