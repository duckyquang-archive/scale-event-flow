import { EventNavigation } from "@/components/EventNavigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { EventsHero } from "@/components/EventsHero";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { EventsSection } from "@/components/EventsSection";
import { EventsFooter } from "@/components/EventsFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventNavigation />
      <AnnouncementBanner />
      <EventsHero />
      <FeaturedEvent />
      <EventsSection />
      <EventsFooter />
    </div>
  );
};

export default Index;
