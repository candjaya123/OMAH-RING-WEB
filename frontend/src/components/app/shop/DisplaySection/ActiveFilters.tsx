import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface ActiveFiltersProps {
  className?: string;
}

function ActiveFilters({ className }: ActiveFiltersProps) {
  const [activeFilters, setActiveFilters] = useState([
    "Electronics Devices",
    "5 Star Rating",
  ]);

  const [resultsCount, setResultsCount] = useState(65867);

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters(
      activeFilters.filter((filter) => filter !== filterToRemove),
    );
  };
  return (
    <div
      className={cn(
        "mt-2 flex items-center justify-between rounded-sm bg-slate-50 px-1 py-2",
        className,
      )}
    >
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground ml-5 text-sm">
            Active Filters:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="flex items-center gap-1 px-2 py-1"
              >
                {filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => removeFilter(filter)}
                >
                  <X className="size-3" />
                  <span className="sr-only">Remove {filter} filter</span>
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {resultsCount > 0 && (
        <p className="text-sm font-medium">
          {resultsCount.toLocaleString()}
          <span className="text-gray-500"> Results found.</span>
        </p>
      )}
    </div>
  );
}

export default ActiveFilters;
