import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export const FilterSidebar = () => {
  return (
    <div className="bg-background border border-border rounded-lg p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-6">Filter & Search</h2>
      
      <p className="text-sm text-muted-foreground mb-6">
        All of our classes are currently taught in English and in-person.
      </p>

      <div className="space-y-6">
        <div>
          <div className="relative">
            <Input
              placeholder="Location, Partner, Instructor"
              className="pr-10"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Course</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="foundations">AI-Native Foundations</SelectItem>
              <SelectItem value="change-agent">AI-Native Change Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Date Range</label>
          <Input
            type="text"
            placeholder="Choose start and end dates"
          />
        </div>
      </div>
    </div>
  );
};
