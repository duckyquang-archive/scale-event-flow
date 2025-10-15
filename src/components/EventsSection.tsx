import { FilterSidebar } from "./FilterSidebar";
import { EventsGrid } from "./EventsGrid";

export const EventsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Catch the most recent and upcoming AI-Native events
        </h2>
        
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 max-w-7xl mx-auto">
          <FilterSidebar />
          <EventsGrid />
        </div>
      </div>
    </section>
  );
};
