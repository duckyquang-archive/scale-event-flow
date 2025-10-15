import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Target } from "lucide-react";

interface CourseCardProps {
  badge: string;
  badgeColor: "purple" | "teal";
  title: string;
  tagline: string;
  audience: string;
  format: string;
  outcome: string;
  prerequisite?: string;
}

export const CourseCard = ({
  badge,
  badgeColor,
  title,
  tagline,
  audience,
  format,
  outcome,
  prerequisite,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border-2">
      <div className="p-6">
        <Badge 
          className={`mb-4 ${
            badgeColor === "purple" 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {badge}
        </Badge>

        <div 
          className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
            badgeColor === "purple"
              ? "bg-gradient-to-br from-primary to-purple"
              : "bg-gradient-to-br from-secondary to-teal"
          }`}
        >
          <span className="text-white font-bold text-sm text-center px-2">{title}</span>
        </div>

        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-center text-secondary font-semibold mb-4">{tagline}</p>

        {prerequisite && (
          <div className="bg-accent/10 border border-accent rounded-lg p-3 mb-4">
            <p className="text-sm font-semibold text-accent">⚠️ PREREQUISITE REQUIRED</p>
            <p className="text-sm text-foreground mt-1">{prerequisite}</p>
          </div>
        )}

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-muted-foreground">AUDIENCE</p>
              <p className="text-sm text-foreground">{audience}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-muted-foreground">FORMAT</p>
              <p className="text-sm text-foreground">{format}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-muted-foreground">OUTCOME</p>
              <p className="text-sm text-foreground">{outcome}</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">
          View Upcoming Classes
        </Button>
      </div>
    </Card>
  );
};
