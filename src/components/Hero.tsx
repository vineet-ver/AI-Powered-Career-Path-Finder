import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Perfect Career Path
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered career guidance to help students make informed decisions based on their interests, aptitude, and skills
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="group" onClick={scrollToQuiz}>
            Start Your Assessment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-hero" size="lg" onClick={scrollToAbout}>
            Learn More
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Brain className="h-12 w-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
            <p className="text-white/80">Advanced algorithms analyze your responses to provide personalized recommendations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Target className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Personalized Results</h3>
            <p className="text-white/80">Get career suggestions tailored to your unique interests and aptitudes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <TrendingUp className="h-12 w-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Growth Insights</h3>
            <p className="text-white/80">Understand job prospects, salary trends, and educational pathways</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;