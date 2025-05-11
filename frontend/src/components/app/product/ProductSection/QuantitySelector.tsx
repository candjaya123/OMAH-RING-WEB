import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

function QuantitySelector({
  initialValue = 2,
  min = 1,
  max = 10,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="flex h-10 w-32 overflow-hidden rounded-md border border-gray-300">
      <button
        onClick={handleDecrease}
        className="flex w-10 items-center justify-center border-r border-gray-300 text-gray-700 transition-colors hover:bg-gray-50"
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <span className="text-lg font-medium">
          <Minus />
        </span>
      </button>
      <input
        className={cn(
          "flex w-10 flex-1 items-center justify-center text-center font-medium focus:outline-none",
          "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        )}
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.min(max, parseInt(e.target.value)))}
      />
      <button
        onClick={handleIncrease}
        className="bg-app-dark-blue hover:bg-app-light-blue flex w-10 items-center justify-center text-white transition-colors"
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <span className="text-lg font-medium">
          <Plus />
        </span>
      </button>
    </div>
  );
}

export default QuantitySelector;
