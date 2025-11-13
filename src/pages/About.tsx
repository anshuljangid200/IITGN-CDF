import { Building2, Target, Heart, Users, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Board from "@/components/Board";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const missions = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Deliver Advanced Training",
    description: "Programs in AI, Data Science, Software Development, and emerging technologies",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Foster Academia-Industry Collaboration",
    description: "Bridge the gap between academic knowledge and industry requirements",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Enable Lifelong Learning",
    description: "Provide reskilling and upskilling opportunities through IIT Gandhinagar's academic rigor",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Promote Ethical AI Development",
    description: "Emphasize responsible, transparent, and impactful use of Artificial Intelligence",
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">IIT Gandhinagar CDF</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The IIT Gandhinagar Competency Development Foundation (IITGN-CDF) is a Section 8 Company incorporated under the Companies Act, 2013, established on 27th November 2024 with its registered office at the IIT Gandhinagar Campus.
            </p>
          </div>
        </div>
      </section>

      {/* IITGN Videos */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience <span className="bg-gradient-primary bg-clip-text text-transparent">IITGN</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our world-class campus and vibrant student community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-large overflow-hidden hover:shadow-larger transition-all duration-300 border border-border/50">
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">IITGN Campus Tour</h3>
                <p className="text-muted-foreground leading-relaxed">Experience our world-class facilities and vibrant campus life</p>
              </div>
            </Card>
            <Card className="shadow-large overflow-hidden hover:shadow-larger transition-all duration-300 border border-border/50">
              <CardContent className="p-0 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Student Life at IITGN"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardContent>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Student Life at IITGN</h3>
                <p className="text-muted-foreground leading-relaxed">Get a glimpse of the vibrant academic and cultural life at IITGN</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                To create a globally recognized platform for competency-based learning, enabling professionals and students to drive innovation and excellence in technology and engineering — contributing to India's transformation into a knowledge-driven economy.
              </p>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {missions.map((mission, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-border/50 program-card"
                  >
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                        <div className="text-primary-foreground text-xl">{mission.icon}</div>
                      </div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">{mission.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance (Board + Leadership Sections) */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Board />

          {/* Additional leadership directories as compact lists with round photo bullets */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Advisory & Operational Support</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shri Nirmal Jha', title: 'Senior Advisor', img: '/images/Board_3.jpg' },
                { name: 'Prof. Sam Placid', title: 'Advisor', img: '/images/Board_4.jpg' },
                { name: 'Shri Anand Pandey', title: 'Operational Lead', img: '/images/Board_2.jpg' },
              ].map((person, idx) => (
                <li key={idx} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/10">
                  <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{person.name}</div>
                    <div className="text-sm text-muted-foreground">{person.title}</div>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4 text-center">Executive Team</h3>
            <ul className="space-y-3">
              {[
                { name: 'Prof. Rajat Moona', title: 'Director', img: '/images/Board_1.jpg' },
                { name: 'Prof. Amit Prashant', title: 'Dean', img: '/images/Board_2.jpg' },
                { name: 'P. K. Chopra', title: 'Registrar', img: '/images/Board_3.jpg' },
              ].map((person, idx) => (
                <li key={idx} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/10">
                  <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{person.name}</div>
                    <div className="text-sm text-muted-foreground">{person.title}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why IITGN-CDF */}
      <section className="py-20 lg:py-28 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">IITGN-CDF?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Discover what sets us apart in competency development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-border/50 program-card"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 shadow-soft">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 lg:py-28 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Commitment to <span className="bg-gradient-primary bg-clip-text text-transparent">Excellence</span>
              </h2>
            </div>
            <Card className="shadow-large border border-border/50">
              <CardContent className="p-10 space-y-6">
                {[
                  { title: "Academic Integrity", desc: "Maintaining the highest standards of teaching and evaluation" },
                  { title: "Student Success", desc: "Providing mentorship, career guidance, and lifelong learning opportunities" },
                  { title: "Innovation Leadership", desc: "Staying at the forefront of emerging technologies and pedagogical methods" },
                  { title: "Ethical Responsibility", desc: "Promoting responsible AI development and data ethics" },
                  { title: "Social Impact", desc: "Contributing to national skill development and technological advancement" },
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-4 p-5 rounded-lg hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-0.5 font-bold text-sm">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg mb-1">{commitment.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{commitment.desc}</p>
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
