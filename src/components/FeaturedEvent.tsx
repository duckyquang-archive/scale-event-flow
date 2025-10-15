import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import event1 from "@/assets/event-1.jpg";

export const FeaturedEvent = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={event1}
              alt="Conference venue"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>7 - 9 October 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Barcelona and online</span>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Team '25 Europe</h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get your all-access digital pass and tune in anytime, anywhere to the conference for AI-powered teamwork. Catch product announcements, expert-led sessions to help you sift through the AI hype, and the chance to hear insights from Europe's highest performing teams.
            </p>
            
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Register for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
