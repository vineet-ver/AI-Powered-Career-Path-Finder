"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowRight, ArrowLeft, User, Mail, MapPin, GraduationCap, Calendar, Eye, EyeOff, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';

interface UserProfile {
  name: string;
  email: string;
  password: string;
  age: string;
  location: string;
  education: string;
}

interface AuthProps {
  onProfileComplete?: () => void;
}

const AuthComponent: React.FC<AuthProps> = ({ onProfileComplete }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    password: '',
    age: '',
    location: '',
    education: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user && onProfileComplete) {
          setTimeout(() => {
            checkUserProfile(session.user.id);
          }, 0);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user && onProfileComplete) {
        checkUserProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [onProfileComplete]);

  const checkUserProfile = async (userId: string) => {
    try {
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileData && onProfileComplete) {
        onProfileComplete();
      } else if (!profileData && !error) {
        // User exists but no profile, stay on profile creation
        setStep(2);
      }
    } catch (error) {
      console.error('Error checking profile:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        if (step === 1) {
          // Validate basic info and sign up
          if (!profile.name || !profile.email || !profile.password) {
            toast({
              title: "Missing Information",
              description: "Please fill in all required fields.",
              variant: "destructive",
            });
            setLoading(false);
            return;
          }

          // Sign up user
          const redirectUrl = `${window.location.origin}/`;
          const { data, error } = await supabase.auth.signUp({
            email: profile.email,
            password: profile.password,
            options: {
              emailRedirectTo: redirectUrl,
              data: {
                display_name: profile.name,
              }
            }
          });

          if (error) {
            toast({
              title: "Sign Up Error",
              description: error.message,
              variant: "destructive",
            });
            setLoading(false);
            return;
          }

          if (data.user) {
            // If email confirmation is enabled, session may be null here.
            // Try to sign in to establish a session for profile creation.
            if (!data.session) {
              const { error: signInError } = await supabase.auth.signInWithPassword({
                email: profile.email,
                password: profile.password,
              });
              if (signInError) {
                // If sign-in fails (e.g., email not confirmed), inform the user.
                toast({
                  title: "Verification required",
                  description: "Check your email to verify your account before continuing.",
                });
              }
            }
            toast({
              title: "Account Created!",
              description: "Please complete your profile to continue.",
            });
            setStep(2);
          }
        } else {
          // Complete profile - create profile record
          if (!profile.age || !profile.location || !profile.education) {
            toast({
              title: "Missing Information", 
              description: "Please complete your profile.",
              variant: "destructive",
            });
            setLoading(false);
            return;
          }

          // Ensure we have a current session/user before writing profile
          let currentUser = user;
          if (!currentUser) {
            const { data: sessionData } = await supabase.auth.getSession();
            currentUser = sessionData.session?.user ?? null;
          }
          if (!currentUser) {
            // Try a last-attempt password sign-in with provided credentials
            const { error: signInError } = await supabase.auth.signInWithPassword({
              email: profile.email,
              password: profile.password,
            });
            if (signInError) {
              toast({
                title: "Authentication Error",
                description: "Please verify your email or sign in again.",
                variant: "destructive",
              });
              setLoading(false);
              return;
            }
            const { data: refreshed } = await supabase.auth.getSession();
            currentUser = refreshed.session?.user ?? null;
          }

          // Create profile
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              user_id: currentUser!.id,
              display_name: profile.name,
              age: parseInt(profile.age),
              location: profile.location,
              education_level: profile.education,
            });

          if (profileError) {
            toast({
              title: "Profile Creation Error",
              description: profileError.message,
              variant: "destructive",
            });
            setLoading(false);
            return;
          }
          
          toast({
            title: "Profile Created!",
            description: "Welcome to CareerPath AI. Let's find your perfect career match!",
          });
          
          if (onProfileComplete) {
            onProfileComplete();
          }
        }
      } else {
        // Sign in logic
        if (!profile.email || !profile.password) {
          toast({
            title: "Missing Information",
            description: "Please enter your email and password.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        
        const { data, error } = await supabase.auth.signInWithPassword({
          email: profile.email,
          password: profile.password,
        });

        if (error) {
          toast({
            title: "Sign In Error",
            description: error.message,
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        toast({
          title: "Welcome Back!",
          description: "Successfully signed in to CareerPath AI.",
        });

        // Immediately check profile and proceed
        const { data: userData } = await supabase.auth.getUser();
        const signedInUser = userData.user;
        if (signedInUser) {
          const { data: profileData, error: profileErr } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', signedInUser.id)
            .single();

          if (!profileErr && profileData) {
            if (onProfileComplete) onProfileComplete();
          } else {
            // No profile yet: switch to profile completion step 2
            setIsSignUp(true);
            setStep(2);
          }
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const educationOptions = [
    "10th Grade",
    "12th Grade", 
    "Undergraduate",
    "Graduate",
    "Post Graduate"
  ];

  const progressValue = step === 1 ? 50 : 100;

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            {isSignUp ? "Join CareerPath AI" : "Welcome Back"}
          </CardTitle>
          <p className="text-muted-foreground">
            {isSignUp 
              ? "Create your profile to get personalized career recommendations"
              : "Sign in to continue your career journey"
            }
          </p>
          
          {isSignUp && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Setup Progress</span>
                <span>{progressValue}%</span>
              </div>
              <Progress value={progressValue} className="h-2" />
            </div>
          )}
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp ? (
              step === 1 ? (
                // Step 1: Basic Information + Account Creation
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={profile.password}
                        onChange={(e) => setProfile({...profile, password: e.target.value})}
                        className="bg-background/50 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Creating Account..." : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              ) : (
                // Step 2: Additional Information
                <>
                  <div className="space-y-2">
                    <Label htmlFor="age" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Age *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      min="13"
                      max="100"
                      value={profile.age}
                      onChange={(e) => setProfile({...profile, age: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location *
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="City, State"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Education Level *
                    </Label>
                    <div className="grid grid-cols-1 gap-2">
                      {educationOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setProfile({...profile, education: option})}
                          className={`p-3 text-left border rounded-lg transition-all ${
                            profile.education === option
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full border-2 ${
                              profile.education === option
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`} />
                            {option}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={loading}>
                      {loading ? "Creating Profile..." : "Complete Profile"}
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )
            ) : (
              // Sign In Form
              <>
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email Address</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="bg-background/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={profile.password}
                      onChange={(e) => setProfile({...profile, password: e.target.value})}
                      className="bg-background/50 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </>
            )}
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setStep(1);
                setProfile({
                  name: '',
                  email: '',
                  password: '',
                  age: '',
                  location: '',
                  education: '',
                });
              }}
              className="text-primary hover:underline text-sm"
            >
              {isSignUp 
                ? "Already have an account? Sign in" 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>

          {isSignUp && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                What you'll get:
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personalized career recommendations</li>
                <li>• Detailed assessment results</li>
                <li>• Career pathway guidance</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthComponent;