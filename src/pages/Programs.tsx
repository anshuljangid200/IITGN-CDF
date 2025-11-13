import { Code, Brain, CheckCircle, Download, ArrowRight } from "lucide-react";
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
  brochure: string;
  link: string; // <-- REQUIRED, not optional
  highlights: string[];
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const programs:Program[] = [
	{
		title: "Gen AI Powered Data Science and Engineering",
		imgSrc: "/programs/DSE.jpg",
		description: "Learn to design, implement, and scale data pipelines and machine learning infrastructure.",
		brochure: "/brochures/data-science.pdf",
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
		description: "Explore generative AI and agentic AI techniques applied to software development life cycles.",
		brochure: "/brochures/software-genai.pdf",
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
		description: "Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance.",
		brochure: "/brochures/ai-agentic.pdf",
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

			{/* Hero Section */}
			<section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="max-w-3xl mx-auto text-center animate-fade-in-up">
						<h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
							Our{" "}
							<span className="bg-gradient-primary bg-clip-text text-transparent">Programs</span>
						</h1>
						<p className="text-lg lg:text-xl text-muted-foreground">
							Explore IIT Gandhinagar's Competency Development Foundation Programs designed to build career-ready, skill-focused learning in Data Science, AI, and Software Development.
						</p>
					</div>
				</div>
			</section>

			{/* Programs Section */}
			<section className="py-16 lg:py-24">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="space-y-12 lg:space-y-16">
						{programs.map((program, index) => (
							<Card
								key={index}
								className="overflow-hidden transition-all duration-300 animate-fade-in h-full"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="grid md:grid-cols-2 gap-0 items-stretch">
									<div className="relative w-full h-full overflow-hidden rounded-l-2xl">
										{/* Image used as simple background for left column — fills full card height */}
										<img
											src={program.imgSrc}
											alt={program.title}
											className="absolute inset-0 w-full h-full object-cover object-center"
											loading="lazy"
										/>
									</div>

									<div className="h-full flex flex-col">
										<CardHeader>
											<div className="flex items-center space-x-3">
												<div className="flex items-center space-x-4">
													<CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-0">
														{program.title}
													</CardTitle>
													{program.brochure && (
													<Button
															asChild
															variant="outline"
															size="sm"
															className="bg-primary-50 border-primary-100 text-primary hover:bg-primary-100 hover:text-primary-dark group smooth-button"
														>
															{/* <a href="/gen-ai-data-science" className="flex items-center gap-2"> */}
															 <Link to={program.link} onClick={scrollToTop} className="flex items-center gap-2">
																<span>Know More</span>
																<ArrowRight className="w-4 h-4 arrow-icon-smooth" />
																</Link>
														</Button>
													)}
												</div>
											</div>
											<CardDescription className="text-base lg:text-lg text-muted-foreground">
												{program.description}
											</CardDescription>
										</CardHeader>

										<CardContent>
											<h4 className="font-semibold text-foreground mb-4">Key Highlights:</h4>
											<ul className="space-y-3 mb-6">
												{program.highlights.map((highlight, idx) => (
													<li key={idx} className="flex items-start space-x-3">
														<CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
														<span className="text-muted-foreground">{highlight}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* CTA Section */}
					<div className="mt-16 lg:mt-24 text-center">
						<div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 shadow-large animate-scale-in">
							<h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
								Ready to Begin Your Journey?
							</h2>
							<p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
								Apply now and take the first step towards building future-ready skills in AI, Data Science, and Software Development.
							</p>
							<Button
								asChild
								size="lg"
								className="bg-white text-primary hover:bg-white/90 shadow-large"
							>
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
