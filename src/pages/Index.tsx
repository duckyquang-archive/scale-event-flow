import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { Events } from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Courses />
      <Events />
      <footer className="bg-muted py-8 text-center">
        <p className="text-muted-foreground">
          © 2025 AI-Native Events. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
