import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export const EventNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">AN</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                AI-NATIVE
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Why AI-Native
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Resources
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Enterprise
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="font-medium">
                Sign In
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Get it free
              </Button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 border-t border-border">
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Why AI-Native
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Enterprise
              </a>
              <Button size="sm" className="w-full bg-primary text-primary-foreground">
                Get it free
              </Button>
            </div>
          )}
        </div>
      </nav>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center space-x-8 h-12 text-sm">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Company
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Customers
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Careers
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Investors
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-bold border-b-2 border-primary">
              Events
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Newsroom
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Press kit
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
