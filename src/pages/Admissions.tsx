<<<<<<< HEAD
import { ClipboardList, UserCheck, FileCheck, CheckCircle2 } from "lucide-react";
=======
import { ClipboardList, UserCheck, FileCheck, CheckCircle2, PenLine, Check, Layers, CreditCard, Home as HomeIcon, CalendarDays, RefreshCw } from "lucide-react";
>>>>>>> 33f11b4 (changes)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
<<<<<<< HEAD
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
=======
    icon: <PenLine className="w-6 h-6" />,
    title: "Create Your Applicant Profile",
    description: "Gather transcripts, resume, statement of purpose, and evidence of programming proficiency before you begin.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Online Application Submission",
    description: "Fill the IITGN CDF application form, upload verified documents, and select your preferred program track.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Academic & Portfolio Review",
    description: "Admissions committee reviews academic performance, project portfolio, and statement of purpose for alignment.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Technical Interaction",
    description: "Shortlisted applicants may be invited for a technical conversation or coding assignment to validate readiness.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Offer, Fee & Onboarding",
    description: "Receive the formal offer, complete fee formalities as per schedule, and get onboarded to campus-life briefings.",
  },
];

const degreeCriteria = [
  "B.Tech / B.E. / B.S. (4-year) with minimum 50% marks or 5.0 CPI/CGPA (10-point scale)",
  "M.Sc., MCA, Integrated M.Sc./M.Tech, BS-MS (5-year programs) with minimum 50% marks or 5.0 CPI/CGPA",
];

const additionalRequirements = [
  "Proficiency in at least one programming language",
  "Basic understanding of mathematics & statistics",
  "Good written and spoken communication skills",
];

const careerSupport = [
  "Dedicated placement support team",
  "Resume building & portfolio preparation",
  "Mock interviews & communication grooming",
  "Industry mentor interaction sessions",
  "Placement opportunities through IITGN CDF’s partner network",
];

const feeCards = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Program Fee",
    details: "Shared with shortlisted candidates; covers tuition, learning resources, labs, industry immersions, and academic services.",
  },
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: "Hostel & Accommodation",
    details: "Residential stay on campus is mandatory. Hostel, utilities, and dining services are coordinated through IITGN CDF.",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Payment Schedule",
    details: "Structured installments: acceptance advance, pre-program payment, and balance before module two. EMI options available via partners.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Refund Policy",
    details: "Refunds follow institutional guidelines. Any withdrawal requests are processed as per IITGN CDF’s published timelines.",
>>>>>>> 33f11b4 (changes)
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
<<<<<<< HEAD
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-medium">
              <a href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              Begin Application
=======
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-medium">
              <a
                href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462"
                target="_blank"
                rel="noopener noreferrer"
              >
                Begin Application
>>>>>>> 33f11b4 (changes)
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

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
>>>>>>> 33f11b4 (changes)
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
<<<<<<< HEAD
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
=======
                  Applicants must hold one of the following degrees in relevant fields:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <ul className="space-y-3 text-muted-foreground">
                    {degreeCriteria.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-5">
                  <h4 className="text-base font-semibold text-primary mb-2">Additional Consideration</h4>
                  <p className="text-muted-foreground">
                    Candidates with strong programming skills or industry experience may be considered even with slightly lower grades (Academic Committee discretion).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Additional Requirements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {additionalRequirements.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-secondary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
>>>>>>> 33f11b4 (changes)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Career Assistance */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
              Career Assistance & Placement Support
            </h2>
            <Card className="shadow-large">
              <CardContent className="p-6 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {careerSupport.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-border/80 p-4 hover:border-primary/40 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Fees Structure & Refund Policy</h2>
            <p className="text-lg text-muted-foreground mt-3">
              Transparent view of financial planning for IITGN CDF programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feeCards.map((card) => (
              <Card key={card.title} className="h-full border border-border/80 shadow-soft">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{card.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

>>>>>>> 33f11b4 (changes)
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
<<<<<<< HEAD
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large"
            >
              <a href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              Start Your Application
=======
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-large"
            >
              <a
                href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Your Application
>>>>>>> 33f11b4 (changes)
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