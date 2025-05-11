import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { categories } from "@/dummy-data/data";
import { cn } from "@/lib/utils";
import FeaturedProductBanner from "./FeaturedProductBanner";
import { useState } from "react";

interface ProductFiltersProps {
  className?: string;
}

function ProductFilters({ className }: ProductFiltersProps) {
  const [idPrefix] = useState(() => Math.random().toString(36).substr(2, 9));
  return (
    <div className={cn("max-w-80", className)}>
      <div className="my-7 flex flex-col gap-y-2">
        <p className="text-lg font-medium">CATEGORY</p>
        <RadioGroup>
          {categories.map((category) => {
            const uniqueId = `category-${category.id}-${idPrefix}`;
            return (
              <div key={category.id} className="flex gap-x-2">
                <RadioGroupItem
                  fillClassName="fill-background text-background"
                  className="peer data-[state=checked]:border-primary data-[state=checked]:text-primary data-[state=checked]:bg-primary size-5"
                  value={category.id}
                  id={uniqueId}
                />
                <Label
                  htmlFor={uniqueId}
                  className={cn(
                    "text-gray-500 hover:cursor-pointer",
                    "peer-data-[state=checked]:text-foreground",
                  )}
                >
                  {category.name}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>

      <Separator orientation="horizontal" />

      <div className="container py-8">
        <p className="mb-4 text-lg font-medium">POPULAR PRODUCT</p>
        <ToggleGroup
          type="multiple"
          className="flex flex-wrap gap-3 rounded-xs"
        >
          {categories.map((category, index) => (
            <ToggleGroupItem
              key={index}
              value={category.name}
              className={cn(
                "max-w-fit min-w-fit !rounded-xs border text-sm font-medium transition-colors",
                "data-[state=on]:border-primary data-[state=on]:text-primary data-[state=on]:bg-[#FFF3EB]",
                "data-[state=off]:border-gray-200 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-50",
              )}
            >
              {category.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <FeaturedProductBanner />
    </div>
  );
}

export default ProductFilters;
