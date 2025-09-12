import { Button } from "@/components/ui/button";
import { Brain, Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
      window.location.reload(); // Refresh to go back to auth
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-white">CareerPath AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">
              Home
            </a>
            <a href="#quiz-section" className="text-white/90 hover:text-white transition-colors">
              Assessment
            </a>
            <a href="#careers" className="text-white/90 hover:text-white transition-colors">
              Careers
            </a>
            <a href="#about-section" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {user.user_metadata?.display_name || user.email}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">
                Home
              </a>
              <a href="#quiz-section" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">
                Assessment
              </a>
              <a href="#careers" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#about-section" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">
                About
              </a>
              <div className="px-3 py-2">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm p-2 bg-white/10 rounded-lg">
                      <User className="h-4 w-4 text-white" />
                      <span className="text-white">{user.user_metadata?.display_name || user.email}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button variant="hero" size="sm" className="w-full">
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;