import { X } from "lucide-react";
import { useState } from "react";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue/10 border-b border-blue/20">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-foreground flex-1">
            Join AI-Native's CEO and Co-founder for an exclusive look at our newly announced AI-powered apps & innovations.{" "}
            <a href="#" className="font-bold text-secondary hover:underline">
              Register for free
            </a>
            .
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
