import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };
  return (
    <div className="flex w-full items-center justify-between">
      <img
        className={cn("size-15 object-cover", "md:flex-none")}
        src={product.imgUrls[0]}
      />
      <p className={cn("line-clamp-2 max-w-xs", "md:flex-auto")}>
        {product.title}
      </p>
      <div
        className={cn(
          "flex items-center justify-center rounded-full border border-black px-2 py-1",
          "md:flex-none",
        )}
      >
        <input
          className={cn(
            "w-10 border-none text-center focus:outline-none",
            "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          )}
          type="number"
          value={quantity.toString().padStart(2, "0")}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <div className="flex flex-col">
          <button onClick={handleIncrease}>
            <ChevronUp className="size-4" />
          </button>
          <button onClick={handleDecrease}>
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
      <p className={cn("w-fit", "md:flex-none")}>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(product.price)}
      </p>
    </div>
  );
}

export default ProductItem;
