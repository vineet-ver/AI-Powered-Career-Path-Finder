import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, Brain } from "lucide-react";
import { quizQuestions, type QuizQuestion } from "@/data/quizQuestions";

interface QuizSectionProps {
  onComplete?: (scores: Record<string, number>) => void;
}

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const calculateScores = () => {
    const domainScores: Record<string, number> = {
      science: 0,
      technology: 0,
      engineering: 0,
      arts: 0,
      mathematics: 0,
      social: 0,
      business: 0,
      healthcare: 0
    };

    quizQuestions.forEach(question => {
      const selectedOptionId = answers[question.id];
      if (selectedOptionId) {
        const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
        if (selectedOption) {
          Object.entries(selectedOption.impacts).forEach(([domain, score]) => {
            domainScores[domain] += score;
          });
        }
      }
    });

    return domainScores;
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const scores = calculateScores();
      setIsCompleted(true);
      onComplete?.(scores);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentAnswer = answers[quizQuestions[currentQuestion]?.id];

  const scrollToResults = () => {
    const tryScroll = () => {
      const results = document.getElementById('results');
      if (results) {
        results.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };
    if (!tryScroll()) {
      setTimeout(tryScroll, 100);
    }
  };

  if (isCompleted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elegant">
            <CardContent className="text-center py-16">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Assessment Complete!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your responses have been analyzed. Here are your personalized career recommendations:
              </p>
              <Button variant="default" size="lg" className="animate-pulse-glow" onClick={scrollToResults}>
                View Your Results
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz-section" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Career Assessment Quiz</h2>
          <p className="text-lg text-muted-foreground">
            Answer these questions to help us understand your interests and aptitudes
          </p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-lg">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h3 className="text-xl font-semibold">
              {quizQuestions[currentQuestion]?.text}
            </h3>
            
            <div className="space-y-3">
              {quizQuestions[currentQuestion]?.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id)}
                  className={`w-full p-4 text-left border rounded-lg transition-all hover:border-primary ${
                    currentAnswer === option.id
                      ? 'border-primary bg-primary/5 shadow-elegant'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      currentAnswer === option.id
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`} />
                    <span className="font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="group"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Complete' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;