import { useState } from "react";
import { cn } from "@/lib/utils";
import { SizeOption } from "@/dummy-data/types";

interface SizeSelectorProps {
  options: SizeOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function SizeSelector({ options, defaultValue, onChange }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(defaultValue || "M");

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
    onChange?.(value);
  };

  return (
    <div className="flex my-1 items-center gap-3">
      <p className="font-medium">Size:</p>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-sm font-medium transition-colors",
              selectedSize === option.value
                ? "border-app-dark-blue bg-app-dark-blue text-white"
                : "bg-white text-gray-900 hover:bg-gray-50",
              option.disabled && "cursor-not-allowed opacity-50",
            )}
            onClick={() => !option.disabled && handleSizeChange(option.value)}
            disabled={option.disabled}
            aria-pressed={selectedSize === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
