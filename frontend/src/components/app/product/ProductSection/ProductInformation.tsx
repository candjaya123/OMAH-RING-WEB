import { Product } from "@/dummy-data/types";
import { RefreshCcw, Star, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductInformationProps {
  product: Product;
  className?: string;
}

function ProductInformation({ product, className }: ProductInformationProps) {
  return (
    <div className={cn("flex flex-col gap-y-4", className)}>
      <p className="text-2xl font-medium">{product?.title}</p>
      <div className="flex items-center gap-x-3">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-gray-500">({product?.rating} reviews)</span>
        <span className="text-gray-500">|</span>
        <span className="text-primary">In Stock</span>
      </div>
      <p className="text-lg font-medium">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(product?.price ? product.price : 0)}
      </p>
      <p className="line-clamp-4">{product?.description}</p>
      <Separator className="bg-primary opacity-30" />
      <ColorSelector
        onChange={(value) => {
          console.log("Selected color :", value);
        }}
        options={product?.colorOptions ?? []}
      />
      <SizeSelector
        onChange={(value) => {
          console.log("Selected size :", value);
        }}
        options={product?.sizeOptions ?? []}
      />
      <div className="my-1 flex justify-between">
        <QuantitySelector
          initialValue={1}
          onChange={(value) => {
            console.log("Quantity : ", value);
          }}
        />
        <Button
          className="bg-app-dark-blue hover:bg-app-light-blue rounded-full px-10 text-base"
          size={"lg"}
        >
          Buy Now
        </Button>
      </div>

      <div
        className={cn(
          "mt-3 hidden w-full flex-col rounded-sm border border-gray-500",
          "md:flex",
        )}
      >
        <div className="flex items-center justify-start px-5">
          <Truck className="size-8" strokeWidth={2} />
          <p className="ml-3 flex flex-col items-start justify-center font-medium">
            <span>Free Delivery</span>
            <span>Enter your postal code for Delivery Availability</span>
          </p>
        </div>
        <Separator className="bg-gray-500" />
        <div className="flex items-center justify-start px-5">
          <RefreshCcw className="size-8" strokeWidth={2} />
          <p className="ml-3 flex flex-col items-start justify-center font-medium">
            <span>Return Delivery</span>
            <span>Free 30 Days Delivery Returns. Details</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
