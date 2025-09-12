import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, BookOpen, TrendingUp, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Personalized Assessment",
      description: "Our comprehensive 15-question assessment analyzes your interests, aptitudes, and preferences to provide tailored career recommendations."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms process your responses to match you with careers that align with your unique profile and strengths."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Career Data",
      description: "Access detailed information about career paths, including education requirements, salary ranges, and growth prospects."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Market Insights",
      description: "Stay informed about job market trends, emerging careers, and future opportunities in various industries."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Accessible Platform",
      description: "Available 24/7 from anywhere, providing career guidance to students regardless of their location or background."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert-Backed Content",
      description: "Our career information is curated by industry experts and regularly updated to reflect current market realities."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "50+", label: "Career Paths" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "Accessibility" }
  ];

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-section" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About CareerPath AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing career guidance by leveraging artificial intelligence to provide personalized, 
            accessible, and comprehensive career recommendations for students across India.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 shadow-elegant">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize career guidance by providing every student with access to intelligent, 
                personalized career recommendations that help them make informed decisions about their future. 
                We believe that with the right guidance, every student can discover and pursue a career path 
                that aligns with their passions and potential.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose CareerPath AI?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Problem We Solve */}
        <Card className="mb-16 shadow-elegant">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">The Problem We Solve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-destructive">Before CareerPath AI</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Limited access to career counseling</li>
                  <li>• Information overload and confusion</li>
                  <li>• Generic, one-size-fits-all advice</li>
                  <li>• Disconnect from job market reality</li>
                  <li>• Language and accessibility barriers</li>
                  <li>• Unaware of emerging career options</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-accent">With CareerPath AI</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accessible career guidance for everyone</li>
                  <li>• Curated, relevant information</li>
                  <li>• Personalized recommendations</li>
                  <li>• Real-time market insights</li>
                  <li>• Multi-language support</li>
                  <li>• Comprehensive career database</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Discover Your Perfect Career?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students who have already found their path with CareerPath AI
          </p>
          <Button size="lg" className="animate-pulse-glow" onClick={scrollToQuiz}>
            Start Your Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;