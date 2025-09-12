import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, DollarSign, GraduationCap, Star, MapPin, Clock, Users } from "lucide-react";
import { getCareerRecommendations } from "@/data/careerPaths";

interface CareerRecommendationsProps {
  domainScores?: Record<string, number>;
}

const CareerRecommendations = ({ domainScores }: CareerRecommendationsProps) => {
  // Use sample scores if none provided
  const defaultScores = {
    science: 20,
    technology: 25,
    engineering: 18,
    arts: 15,
    mathematics: 22,
    social: 12,
    business: 16,
    healthcare: 10
  };

  const scores = domainScores || defaultScores;
  const recommendations = getCareerRecommendations(scores);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section id="results" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Your Career Recommendations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your assessment, here are the career paths that align best with your interests and aptitudes
          </p>
        </div>

        {/* Domain Scores Visualization */}
        <Card className="mb-12 shadow-elegant">
          <CardHeader>
            <CardTitle>Your Aptitude Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(scores).map(([domain, score]) => (
                <div key={domain} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">{domain}</span>
                    <span className="text-sm text-muted-foreground">{Math.round((score/30)*100)}%</span>
                  </div>
                  <Progress value={Math.min((score/30)*100, 100)} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8">
          {recommendations.map((rec, index) => (
            <Card key={rec.career.id} className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{rec.career.title}</CardTitle>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        #{index + 1} Match
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium">Match Score:</span>
                      <Progress value={rec.matchScore} className="flex-1 max-w-32" />
                      <span className="text-sm font-bold text-primary">{rec.matchScore}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{rec.career.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium">Growth Outlook</p>
                      <p className="text-sm text-muted-foreground">{rec.career.growthOutlook}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Salary Range</p>
                      <p className="text-sm text-muted-foreground">{rec.career.salaryRange.entry} - {rec.career.salaryRange.senior}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium">Work Environment</p>
                      <p className="text-sm text-muted-foreground">{rec.career.workEnvironment}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Why this matches you:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {rec.reasoning.map((reason, idx) => (
                      <li key={idx}>{reason}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Key Skills Required:</h4>
                  <div className="flex flex-wrap gap-2">
                    {rec.career.requiredSkills.slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="default" className="flex-1">
                    Explore Career Path
                  </Button>
                  <Button variant="outline">
                    Save to Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRecommendations;