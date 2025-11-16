import { ClipboardList, UserCheck, FileCheck, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Complete Application",
    description: "Fill out the online application form with your academic and professional details.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Submit Documents",
    description: "Upload required documents including transcripts, resume, and identification proof.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Application Review",
    description: "Our admissions team will review your application and credentials.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Enrollment",
    description: "Team will contact you shortly",
  },
];

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Application</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Apply for IIT Gandhinagar's Competency Development Foundation Programs and take the next step in your career.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-medium">
              <a href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              Begin Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="relative hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-medium">
                  {index + 1}
                </div>
                <CardHeader className="pt-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-soft">
                    <div className="text-primary-foreground">{step.icon}</div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                  Eligibility Criteria
                </CardTitle>
                <CardDescription className="text-base lg:text-lg">
                  General requirements for admission to our Competency Development Foundation Programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Bachelor's degree in any discipline from a recognized university
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Basic understanding of programming and mathematics (recommended)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Working professionals and recent graduates are welcome
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Passion for learning and career advancement in tech
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Apply?
            </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to advance your career with an IIT Gandhinagar Competency Development Foundation Program.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large"
            >
              <a href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              Start Your Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
