import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, DollarSign, GraduationCap, Star } from "lucide-react";

interface CareerRecommendation {
  id: string;
  title: string;
  matchScore: number;
  description: string;
  growthOutlook: string;
  salaryRange: string;
  educationPath: string;
  skills: string[];
  reasons: string[];
}

const sampleRecommendations: CareerRecommendation[] = [
  {
    id: "1",
    title: "Data Scientist",
    matchScore: 95,
    description: "Analyze complex data to help organizations make better decisions using statistical methods and machine learning.",
    growthOutlook: "22% growth expected",
    salaryRange: "₹8-25 LPA",
    educationPath: "Bachelor's in Statistics/Computer Science + Specialization",
    skills: ["Python", "Machine Learning", "Statistics", "SQL"],
    reasons: [
      "Strong analytical thinking skills",
      "Interest in problem-solving",
      "Mathematical aptitude"
    ]
  },
  {
    id: "2", 
    title: "UX Designer",
    matchScore: 88,
    description: "Design user-friendly interfaces and experiences for digital products, focusing on user needs and behaviors.",
    growthOutlook: "13% growth expected",
    salaryRange: "₹6-20 LPA",
    educationPath: "Bachelor's in Design/Psychology + UX Certification",
    skills: ["Design Thinking", "Prototyping", "User Research", "Figma"],
    reasons: [
      "Creative problem-solving approach",
      "Interest in human behavior",
      "Visual design skills"
    ]
  },
  {
    id: "3",
    title: "Software Engineer",
    matchScore: 85,
    description: "Develop, test, and maintain software applications and systems using various programming languages and frameworks.",
    growthOutlook: "25% growth expected",
    salaryRange: "₹5-30 LPA",
    educationPath: "Bachelor's in Computer Science/Engineering",
    skills: ["Programming", "Problem Solving", "System Design", "Testing"],
    reasons: [
      "Logical thinking abilities",
      "Interest in technology",
      "Problem-solving skills"
    ]
  }
];

const CareerRecommendations = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Your Career Recommendations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your assessment, here are the career paths that align best with your interests and aptitudes
          </p>
        </div>

        <div className="grid gap-8">
          {sampleRecommendations.map((career, index) => (
            <Card key={career.id} className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{career.title}</CardTitle>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        #{index + 1} Match
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium">Match Score:</span>
                      <Progress value={career.matchScore} className="flex-1 max-w-32" />
                      <span className="text-sm font-bold text-primary">{career.matchScore}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{career.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium">Growth Outlook</p>
                      <p className="text-sm text-muted-foreground">{career.growthOutlook}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Salary Range</p>
                      <p className="text-sm text-muted-foreground">{career.salaryRange}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium">Education Path</p>
                      <p className="text-sm text-muted-foreground">{career.educationPath}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Why this matches you:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {career.reasons.map((reason, idx) => (
                      <li key={idx}>{reason}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Key Skills Required:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
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