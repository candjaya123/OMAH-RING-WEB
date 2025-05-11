import { ToggleGroupItem, ToggleGroup } from "@/components/ui/toggle-group";
import { categories } from "@/dummy-data/data";
import { cn } from "@/lib/utils";

function TestingPage() {
  return (
    <div className="">
      <div className="container py-8">
        <p className="mb-4 text-lg font-bold">POPULAR PRODUK</p>

        <ToggleGroup type="multiple" className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <ToggleGroupItem
              key={index}
              value={category.name}
              className={cn(
                "max-w-fit min-w-fit shrink-0 rounded-xs border text-sm font-medium transition-colors",
                "data-[state=on]:border-orange-400 data-[state=on]:bg-orange-50 data-[state=on]:text-orange-400",
                "data-[state=off]:border-gray-200 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-50",
              )}
            >
              {category.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
}

export default TestingPage;
