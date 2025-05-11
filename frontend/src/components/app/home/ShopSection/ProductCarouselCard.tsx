import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router";
import { Product } from "@/dummy-data/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCarouselCardParams {
  product: Product;
}

function ProductCarouselCard({ product }: ProductCarouselCardParams) {
  return (
    <Card className="bg-app-light-orange max-w-xs p-2">
      <CardContent className="space-y-3 p-2">
        <img className="aspect-3/2 rounded-md object-cover" src={product.imgUrls[0]} />
        <div className="relative pl-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="mr-0.5 h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-1 text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>

          <Button
            size={"icon"}
            className="bg-app-dark-blue absolute top-0 right-2 rounded-full hover:bg-gray-700"
          >
            <Heart className="size-5" strokeWidth={2.5} />
          </Button>
        </div>

        <div className="pl-3">
          <CardTitle>{product.title}</CardTitle>
          <p className="mb-2 flex items-center gap-2">
            <span className="text-primary font-medium">Rp.{product.price}</span>
            <span className="text-sm text-gray-500 line-through">
              Rp.{product.originalPrice}
            </span>
          </p>
        </div>

        <CardDescription
          className={cn("line-clamp-2 max-w-fit px-3", "md:pr-0")}
        >
          {product.description}
        </CardDescription>

        <Button
          asChild
          size={"lg"}
          className="bg-app-dark-blue mt-3 ml-3 rounded-full px-7 text-lg hover:bg-gray-700"
        >
          <Link to={`/shop/${product.id}`}>Beli</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCarouselCard;
