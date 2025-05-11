import { Button } from "@/components/ui/button";
import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="relative max-h-80 max-w-60 overflow-hidden rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <img
          src={product.imgUrls[0]}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        <button
          className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1 transition-colors hover:bg-white"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={cn(
              "size-5",
              isFavorite ? "fill-red-500 text-red-500" : "text-app-dark-blue",
            )}
          />
        </button>

        <div
          className={cn(
            "absolute right-0 bottom-0 left-0 bg-white transition-all duration-150 ease-in-out",
            isHovered ? "translate-y-0" : "translate-y-full",
          )}
        >
          <Button className="w-full rounded-none bg-gray-900 py-3 font-medium text-white hover:bg-black">
            Add To Cart
          </Button>
        </div>
      </div>

      <Link to={`/shop/${product.id}`}>
        <div className="py-4">
          <p className={cn("mb-1 font-medium text-gray-900")}>
            {product.title}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">${product.price}</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
