import { Building, Laptop, BookOpen, Home, Utensils, Dumbbell, Users as UsersIcon, Clock, Users, GraduationCap, Network, Target, School } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import TimelineComponent from "@/components/TimelineComponent";

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "High-Performance Computing Labs",
    description: "GPU clusters for deep learning, cloud credits for AWS/Azure/GCP, latest development tools",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "24/7 Library Access",
    description: "Physical and digital collections, IEEE/ACM subscriptions, quiet study areas",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Comfortable Accommodation",
    description: "Furnished hostel rooms with internet, 24/7 electricity, security and medical facilities",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Nutritious Meals",
    description: "Hygienic mess with veg/non-veg options, multi-cuisine, dietary requirements accommodated",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Sports & Fitness",
    description: "Cricket, football, basketball, badminton courts, modern gymnasium, yoga sessions",
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Hackathons, guest lectures, peer learning, industry networking opportunities",
  },
];

// dayInLife schedule removed — section omitted per content update

const whyResidential = [
  {
    icon: <School className="w-6 h-6" />,
    title: "IIT Culture",
    description: "Experience the culture of excellence, innovation, and integrity that defines IIT Gandhinagar.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Learn alongside peers from diverse backgrounds, fostering collaboration and peer learning.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Immersive Experience",
    description: "24/7 access to labs, faculty, and resources accelerates your learning journey.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Networking",
    description: "Build lifelong connections with classmates, faculty, alumni, and industry mentors.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Focus & Discipline",
    description: "Structured campus life helps you stay focused on your goals without distractions.",
  },
];

const CampusLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Experience <span className="bg-gradient-primary bg-clip-text text-transparent">IIT Gandhinagar</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Immerse yourself in a transformative 6-month residential experience that combines rigorous academics, hands-on projects, collaborative learning, and holistic personal development.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              World-Class Campus
            </h2>
            <p className="text-lg text-muted-foreground">
              IIT Gandhinagar is spread across 400+ acres of beautifully designed campus space in Palaj, Gandhinagar, Gujarat. The campus blends modern architecture with green, sustainable design — creating an inspiring environment for learning and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary-foreground">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 'A Day in the Life' section removed per content update */}

      {/* Why Residential Learning */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Why Residential Learning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyResidential.map((reason, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <div className="text-primary-foreground">{reason.icon}</div>
                    </div>
                    <h3 className="font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Details */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Academic Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Smart classrooms with AV systems and smart boards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dedicated GPU clusters for deep learning workloads</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cloud computing credits (AWS, Azure, GCP)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24/7 library with technical collections and digital resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>High-speed Wi-Fi connectivity across campus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Student Support Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24/7 security personnel and CCTV monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>On-campus medical center with resident doctor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Counseling and wellness support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dedicated program coordinators for student queries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Laundry facilities and hostel amenities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusLife;
