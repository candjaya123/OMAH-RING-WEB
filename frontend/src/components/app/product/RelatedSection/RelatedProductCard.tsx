import { Button } from "@/components/ui/button";
import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { Eye, Heart, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
interface RelatedProductCardProps {
  product: Product;
}

function RelatedProductCard({ product }: RelatedProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="relative mx-5 max-w-60 rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-sm">
        <img
          src={product.imgUrls[0]}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        <p className="bg-app-dark-blue text-primary-foreground absolute top-2 left-2 rounded-md px-3 py-1 text-xs">
          -{product.discount}%
        </p>

        <div className="absolute top-2 right-2 z-10 flex flex-col gap-y-3">
          <button
            className="rounded-full bg-white/80 p-1 transition-colors hover:bg-white"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={cn(
                "size-5",
                isFavorite ? "fill-red-500 text-red-500" : "text-app-dark-blue",
              )}
            />
          </button>
          <button className="rounded-full bg-white/80 p-1 transition-colors hover:bg-white">
            <Eye className="size-5" />
          </button>
        </div>

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
          <div className="flex flex-col items-start justify-between">
            <p className="mb-2 flex items-center gap-2">
              <span className="font-medium">Rp.{product.price}</span>
              <span className="text-sm text-gray-500 line-through">
                Rp.{product.originalPrice}
              </span>
            </p>
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

export default RelatedProductCard;
