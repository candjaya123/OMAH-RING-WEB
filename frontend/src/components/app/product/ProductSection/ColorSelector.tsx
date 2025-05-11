import { useState } from "react";
import { cn } from "@/lib/utils";
import { ColorOption } from "@/dummy-data/types";

interface ColorSelectorProps {
  options: ColorOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

function ColorSelector({
  options,
  defaultValue,
  onChange,
}: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(
    defaultValue || options[0].value,
  );

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
    onChange?.(value);
  };

  return (
    <div className="my-1 flex items-center gap-3">
      <span className="font-medium">Colors: </span>
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            className={cn(
              "size-6 rounded-full transition-all",
              selectedColor === option.value
                ? "size-4 ring-2 ring-black ring-offset-2 ring-offset-white"
                : "",
            )}
            style={{ backgroundColor: option.value }}
            onClick={() => handleColorChange(option.value)}
            aria-label={`Select ${option.label} color`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
