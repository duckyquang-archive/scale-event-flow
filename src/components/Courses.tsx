import { CourseCard } from "./CourseCard";

export const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI-Native Class Finder</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer two in-depth, in-person classes brought to you exclusively by our extensive partner network.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10">Learn more about our class offerings</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CourseCard
            badge="FOR EVERYONE"
            badgeColor="purple"
            title="AI-Native Foundations"
            tagline="IGNITE YOUR AI FLUENCY AND CONFIDENCE"
            audience="All professionals—business, product, delivery, and operations"
            format="2-day in-person immersive training"
            outcome="You are equipped to confidently navigate change, use AI tools responsibly, and unlock greater ROI from your current and future AI skills."
          />

          <CourseCard
            badge="FOR PRACTITIONERS"
            badgeColor="teal"
            title="AI-Native Change Agent"
            tagline="TRANSLATE AI POTENTIAL INTO REAL-WORLD BUSINESS RESULTS"
            audience="Team leads, change agents, digital strategists, and transformation owners driving AI initiatives"
            format="3-day hands-on, project-based experience guiding a real AI initiative from opportunity to production, with milestones at 30, 60, and 90 days"
            outcome="You'll learn to lead cross-functional teams, avoid common AI pitfalls, and deliver measurable outcomes that move beyond POCs into business impact"
            prerequisite="Completion of AI-Native Foundations is required prior to beginning AI-Native Change Agent."
          />
        </div>
      </div>
    </section>
  );
};
