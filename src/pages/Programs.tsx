import { CheckCircle, ArrowRight, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import "@/components/SmoothHovers.css";

type Program = {
  title: string;
  imgSrc: string;
  description: string;
  link: string;
  highlights: string[];
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const programs: Program[] = [
  {
    title: "Gen AI Powered Data Science and Engineering",
    imgSrc: "/programs/DSE.jpg",
    description:
      "Learn to design, implement, and scale data pipelines and machine learning infrastructure.",
    link: "/gen-ai-data-science",
    highlights: [
      "AutoML and big data platforms",
      "Cloud data warehousing",
      "MLOps and model deployment",
      "Foundational AI and mathematical skills",
      "Real-world project experience",
    ],
  },
  {
    title: "Gen AI Powered Software Engineering with Cloud",
    imgSrc: "/programs/SEAI.JPG",
    description:
      "Explore generative AI and agentic AI techniques applied to software development life cycles.",
    link: "/gen-ai-software-cloud",
    highlights: [
      "Modern DevOps practices",
      "Cloud-native architectures",
      "AI-augmented software applications",
      "Generative AI integration",
      "Agentic AI systems design",
    ],
  },
  {
    title: "Gen AI Powered AIML / AgenticAI Engineering",
    imgSrc: "/programs/AIA.jpg",
    description:
      "Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance.",
    link: "/gen-ai-agentic-aiml",
    highlights: [
      "Advanced AI methodologies",
      "Agentic AI systems",
      "Ethical AI principles",
      "Responsible AI governance",
      "Scalable AI solutions",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ---------------- HERO SECTION (PLACEMENTS-STYLE) ---------------- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

            {/* ICON */}
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />

            {/* TITLE */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Future-Ready{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Learning Tracks
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore IIT Gandhinagar's immersive specializations in AI, software engineering, and data
              science—crafted to mirror the clarity and focus of our placement-ready cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMS SECTION ---------------- */}
      <section className="relative py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.08),transparent_40%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="space-y-12 lg:space-y-16">
            {programs.map((program, index) => (
              <Card
                key={program.title}
                className="group relative overflow-hidden border border-border/70 bg-card/90 backdrop-blur-sm transition-all duration-500 animate-fade-in hover:shadow-large"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

                <div className="grid md:grid-cols-2 items-stretch">
                  {/* IMAGE */}
                  <div className="relative min-h-[280px] overflow-hidden">
                    <img
                      src={program.imgSrc}
                      alt={program.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-90" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col h-full">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                          {program.title}
                        </CardTitle>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-primary/10 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground smooth-button"
                        >
                          <Link to={program.link} onClick={scrollToTop} className="flex items-center gap-2">
                            <span>Know More</span>
                            <ArrowRight className="w-4 h-4 arrow-icon-smooth" />
                          </Link>
                        </Button>
                      </div>

                      <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto">
                      <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-soft">
                        <h4 className="font-semibold text-foreground mb-4 tracking-tight">Key Highlights</h4>
                        <ul className="space-y-3">
                          {program.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </span>
                              <span className="text-muted-foreground leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="mt-16 lg:mt-24 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-large animate-scale-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Apply now and take the first step towards building future-ready skills in AI, Data
                Science, and Software Development.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large">
                <Link to="/admissions">Apply for a Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
