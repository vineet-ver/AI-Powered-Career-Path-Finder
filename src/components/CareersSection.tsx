import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, GraduationCap, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { getAllCareerPaths } from "@/data/careerPaths";

const CareersSection = () => {
  const careerPaths = getAllCareerPaths();

  const careerCategories = [
    {
      title: "Technology & Engineering",
      careers: careerPaths.filter(career => 
        career.domains.includes("technology") || career.domains.includes("engineering")
      ),
      color: "bg-blue-500"
    },
    {
      title: "Healthcare & Science",
      careers: careerPaths.filter(career => 
        career.domains.includes("healthcare") || career.domains.includes("science")
      ),
      color: "bg-green-500"
    },
    {
      title: "Business & Social",
      careers: careerPaths.filter(career => 
        career.domains.includes("business") || career.domains.includes("social")
      ),
      color: "bg-purple-500"
    },
    {
      title: "Arts & Creative",
      careers: careerPaths.filter(career => 
        career.domains.includes("arts")
      ),
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Explore Career Paths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover detailed information about various career options, from traditional paths to emerging opportunities
          </p>
        </div>

        {/* Career Categories */}
        {careerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <Badge variant="secondary">{category.careers.length} Careers</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.careers.map((career) => (
                <Card key={career.id} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {career.title}
                      </CardTitle>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-2">{career.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span>{career.salaryRange.entry}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        <span className="text-xs">{career.growthOutlook.split(' ')[0]}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs truncate">{career.workEnvironment.split(',')[0]}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs">{career.topCompanies.length}+ Top Companies</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {career.requiredSkills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {career.requiredSkills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{career.requiredSkills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Statistics */}
        <Card className="shadow-elegant">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Career Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{careerPaths.length}+</div>
                <div className="text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <div className="text-muted-foreground">Career Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Job Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Access</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Career Suits You?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Take our comprehensive assessment to get personalized career recommendations
          </p>
          <Button size="lg" className="animate-pulse-glow">
            Start Career Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;