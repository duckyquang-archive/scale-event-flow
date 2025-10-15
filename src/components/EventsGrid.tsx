import { EventListingCard } from "./EventListingCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const EventsGrid = () => {
  const events = [
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "MADRID, ES",
      dateRange: "OCT 15, 2025 – OCT 17, 2025",
      date: "Oct 15, 2025 – Oct 17, 2025",
      locationDetail: "Madrid, ES",
      providedBy: "Scaled Agile, Inc",
      instructors: "Michele Lanzinger, Asim Javed",
    },
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "CHICAGO, IL, US",
      dateRange: "OCT 15, 2025 – OCT 17, 2025",
      date: "Oct 15, 2025 – Oct 17, 2025",
      locationDetail: "Chicago, IL, US",
      providedBy: "Engaged Agility",
      instructors: "Randy Smith",
    },
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "BARCELONA, ES",
      dateRange: "OCT 20, 2025 – OCT 22, 2025",
      date: "Oct 20, 2025 – Oct 22, 2025",
      locationDetail: "Barcelona, ES",
      providedBy: "Digital Transformation Labs",
      instructors: "Sarah Johnson, Michael Chen",
    },
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "LONDON, UK",
      dateRange: "NOV 5, 2025 – NOV 7, 2025",
      date: "Nov 5, 2025 – Nov 7, 2025",
      locationDetail: "London, UK",
      providedBy: "Innovation Partners",
      instructors: "Emma Williams",
    },
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "SAN FRANCISCO, CA, US",
      dateRange: "NOV 12, 2025 – NOV 14, 2025",
      date: "Nov 12, 2025 – Nov 14, 2025",
      locationDetail: "San Francisco, CA, US",
      providedBy: "Tech Forward Institute",
      instructors: "David Park, Lisa Martinez",
    },
    {
      badgeGradient: "bg-gradient-secondary",
      title: "AI-Native Change Agent",
      location: "TORONTO, ON, CA",
      dateRange: "DEC 1, 2025 – DEC 3, 2025",
      date: "Dec 1, 2025 – Dec 3, 2025",
      locationDetail: "Toronto, ON, CA",
      providedBy: "Agile Excellence",
      instructors: "Jennifer Lee",
    },
  ];

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold">1-25</span> of <span className="font-semibold">124</span> results
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Per Page:</span>
          <Select defaultValue="25">
            <SelectTrigger className="w-20 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {events.map((event, index) => (
          <EventListingCard key={index} {...event} />
        ))}
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button variant="ghost" size="sm" disabled>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <Button variant="ghost" size="sm" className="text-secondary font-semibold">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};
