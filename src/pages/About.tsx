import { Building2, Target, Heart, Users, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Board from "@/components/Board";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missions = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Accelerate Talent for Future Technologies",
    description: "Develop immediately deployable learners for next-generation fields such as AI, Generative AI, Cloud Engineering, Data Science, and Intelligent Automation, ensuring they are industry-ready from day one.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Build High-Impact Career Pathways",
    description: "Enable meaningful career transitions through rigorous training, mentorship, and structured placement support.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Advance Research-Informed Learning",
    description: "Integrate IIT Gandhinagar’s academic and research strengths into applied training for real-world impact.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Nurture Innovation and Problem-Solving",
    description: "Develop creative, ethical, and scalable solutions to real-world challenges through hands-on, project-driven learning.",
  },
];

const whyChooseUs = [
  {
    title: "IIT Gandhinagar Pedigree",
    description: "Benefit from the academic excellence, research culture, and innovation ecosystem of one of India's premier institutes.",
  },
  {
    title: "Industry-Academia Bridge",
    description: "Our programs are co-designed with industry leaders, ensuring curriculum relevance and employability.",
  },
  {
    title: "Applied Learning Focus",
    description: "50-60% of program hours devoted to hands-on labs, projects, capstones, and real-world problem-solving.",
  },
  {
    title: "Emerging Technology Specialization",
    description: "Deep focus on Generative AI, Agentic AI, LLMs, Cloud-Native Development, MLOps, and Data Engineering.",
  },
  {
    title: "Residential Immersion",
    description: "Six-month intensive, on-campus programs creating a collaborative learning environment and peer network.",
  },
  {
    title: "Career Readiness",
    description: "Comprehensive placement support including resume building, mock interviews, certification prep, and industry connections.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">IIT Gandhinagar CDF</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              The IIT Gandhinagar Competency Development Foundation (CDF) is a Section 8 company established under the aegis of the Indian Institute of Technology Gandhinagar to strengthen the bridge between academic excellence and industry application.

CDF is envisioned as IIT Gandhinagar’s dedicated platform for advancing professional and technical competencies through innovative, hands-on, and industry-aligned programs. These programs, pioneered by IIT Gandhinagar through CDF, bring together the institute’s academic rigor, research expertise, and a strong network of industry collaborators to create meaningful pathways for upskilling and talent development.

By offering intensive, residential, and application-driven programs in cutting-edge technology domains such as Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, Robotics, and Semiconductor Manufacturing, CDF aims to equip learners with the practical skills, depth of knowledge, and confidence to meet the evolving needs of modern industries.

Guided by IIT Gandhinagar’s values of integrity, innovation, and impact, CDF is committed to shaping the next generation of skilled professionals who can contribute effectively to India’s technological advancement and global competitiveness.

            </p>
          </div>
        </div>
      </section>

      {/* IITGN Videos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Experience IITGN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-large overflow-hidden">
              <CardContent className="p-0 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fK9y8wiHUsk?si=5uAsyCtoEJ2qIEnU"
                  title="IITGN Campus Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CardContent>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">IIT Ghandinagar Campus Tour</h3>
                <p className="text-sm text-muted-foreground">Experience our world-class facilities and vibrant campus life</p>
              </div>
            </Card>
            <Card className="shadow-large overflow-hidden">
              <CardContent className="p-0 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Student Life at IITGN"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardContent>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Student Life at IIT Gandhinagar</h3>
                <p className="text-sm text-muted-foreground">Get a glimpse of the vibrant academic and cultural life at IITGN</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a globally recognized platform for competency-based learning, enabling professionals and students to drive innovation and excellence in technology and engineering — contributing to India's transformation into a knowledge-driven economy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missions.map((mission, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-large transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <div className="text-primary-foreground">{mission.icon}</div>
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{mission.title}</h3>
                      <p className="text-muted-foreground text-sm">{mission.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IITGN-CDF */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose IITGN-CDF?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3 text-lg">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IIT Advantage Section */}
<section className="py-20 lg:py-28 bg-white">
  <div className="container mx-auto px-4 lg:px-8">

    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
      The IIT Advantage
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Text Section */}
      <div className="space-y-10">

        {/* Block */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted">
            <span className="text-xl">📘</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">IIT Credential</h3>
            <p className="text-muted-foreground">
              Postgraduate Diploma from IIT Gandhinagar with Executive Alumni Status.
            </p>
          </div>
        </div>

        {/* Block */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted">
            <span className="text-xl">🏠</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Residential Experience</h3>
            <p className="text-muted-foreground">
              Live, learn, and build on campus with full access to IITGN facilities.
            </p>
          </div>
        </div>

        {/* Block */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted">
            <span className="text-xl">⚙️</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Industry Integration</h3>
            <p className="text-muted-foreground">
              Fortune-500 mentors guide your projects and conduct code reviews.
            </p>
          </div>
        </div>

        {/* Block */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted">
            <span className="text-xl">🎓</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Placement Cell Access</h3>
            <p className="text-muted-foreground">
              IITGN-CDF x Futurense placement assistance supports qualified learners.
            </p>
          </div>
        </div>

      </div>

      {/* Right Image Section */}
      <div className="rounded-xl overflow-hidden shadow-xl">
        <img
          src="public\images\iit advantage.avif"  // replace with your image path
          alt="IIT Gandhinagar Classroom"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>

      {/* Commitment */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Our Commitment to Excellence
            </h2>
            <Card className="shadow-large">
              <CardContent className="p-8 space-y-4">
                {[
                  { title: "Academic Integrity", desc: "Maintaining the highest standards of teaching and evaluation" },
                  { title: "Student Success", desc: "Providing mentorship, career guidance, and lifelong learning opportunities" },
                  { title: "Innovation Leadership", desc: "Staying at the forefront of emerging technologies and pedagogical methods" },
                  { title: "Ethical Responsibility", desc: "Promoting responsible AI development and data ethics" },
                  { title: "Social Impact", desc: "Contributing to national skill development and technological advancement" },
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{commitment.title}</h4>
                      <p className="text-muted-foreground text-sm">{commitment.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
