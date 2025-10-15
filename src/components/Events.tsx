import { EventCard } from "./EventCard";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

export const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Connect with Teams Just Like Yours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our upcoming events, conferences, meetups, and more. Whether we're coming to a screen or a city near you, there's something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            image={event1}
            title="AI-Native Summit 2025"
            date="7-9 October 2025"
            location="Barcelona and online"
            description="Get your all-access digital pass and tune in anytime, anywhere to the conference for AI-powered teamwork. Catch product announcements, expert-led sessions, and insights from Europe's highest performing teams."
          />

          <EventCard
            image={event2}
            title="AI Innovation Workshop"
            date="15-16 November 2025"
            location="San Francisco, CA"
            description="Hands-on workshop exploring cutting-edge AI implementation strategies. Learn from industry leaders and connect with innovators transforming their organizations with AI-native approaches."
          />

          <EventCard
            image={event1}
            title="Enterprise AI Meetup"
            date="5 December 2025"
            location="New York, NY"
            description="Join us for an evening of networking and knowledge sharing. Discover how enterprises are successfully deploying AI at scale and overcoming common challenges in their transformation journey."
          />

          <EventCard
            image={event2}
            title="AI Leadership Forum"
            date="20-21 January 2026"
            location="London, UK"
            description="Executive-level forum bringing together C-suite leaders to discuss AI strategy, governance, and organizational transformation. Interactive sessions focused on driving ROI and managing change."
          />

          <EventCard
            image={event1}
            title="AI Developer Conference"
            date="10-12 March 2026"
            location="Austin, TX"
            description="Technical deep-dive into AI development best practices, tools, and frameworks. Featuring workshops on prompt engineering, model fine-tuning, and production deployment strategies."
          />

          <EventCard
            image={event2}
            title="Virtual AI Roundtable"
            date="25 April 2026"
            location="Online"
            description="Monthly online roundtable discussion with AI practitioners sharing real-world experiences, challenges, and solutions. Open forum for Q&A and peer learning."
          />
        </div>
      </div>
    </section>
  );
};
