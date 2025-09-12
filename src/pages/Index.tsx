import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import CareerRecommendationsUpdated from "@/components/CareerRecommendationsUpdated";
import About from "@/components/About";
import CareersSection from "@/components/CareersSection";
import AuthComponent from "@/components/Auth";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [domainScores, setDomainScores] = useState<Record<string, number> | undefined>();
  const [showResults, setShowResults] = useState(false);

  const handleProfileComplete = () => {
    setIsAuthenticated(true);
  };

  const handleQuizComplete = (scores: Record<string, number>) => {
    setDomainScores(scores);
    setShowResults(true);
  };

  if (!isAuthenticated) {
    return <AuthComponent onProfileComplete={handleProfileComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuizSection onComplete={handleQuizComplete} />
      {showResults && <CareerRecommendationsUpdated domainScores={domainScores} />}
      <About />
      <CareersSection />
    </div>
  );
};

export default Index;
