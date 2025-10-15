import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      
      <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Future with AI-Native Learning & Events
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our in-depth training programs and connect with industry leaders at exclusive events. 
            Build the skills and network you need to thrive in the AI era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-hover">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              View Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
