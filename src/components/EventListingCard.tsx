import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, GraduationCap, Users, ExternalLink } from "lucide-react";

interface EventListingCardProps {
  badgeGradient: string;
  title: string;
  location: string;
  dateRange: string;
  date: string;
  locationDetail: string;
  providedBy: string;
  instructors: string;
}

export const EventListingCard = ({
  badgeGradient,
  title,
  location,
  dateRange,
  date,
  locationDetail,
  providedBy,
  instructors,
}: EventListingCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-to-br from-accent/5 to-background">
      <div className="p-6">
        <div className="flex gap-6 mb-6">
          <div 
            className={`w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center ${badgeGradient}`}
          >
            <div className="text-white text-center">
              <div className="text-xs font-bold">AI-NATIVE</div>
              <div className="text-[10px] font-semibold mt-1">CHANGE<br/>AGENT</div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-muted-foreground font-medium mb-1">{location}</p>
            <p className="text-sm text-muted-foreground">{dateRange}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">DATE</p>
              <p className="text-sm font-medium text-foreground">{date}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">LOCATION</p>
              <p className="text-sm font-medium text-foreground">{locationDetail}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">PROVIDED BY</p>
              <p className="text-sm font-medium text-secondary">{providedBy}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">INSTRUCTORS</p>
              <p className="text-sm font-medium text-foreground">{instructors}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="#" className="text-sm text-secondary font-semibold hover:underline text-center">
            Learn more
          </a>
          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            Register
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
