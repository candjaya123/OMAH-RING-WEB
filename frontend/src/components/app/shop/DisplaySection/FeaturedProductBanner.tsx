import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";

function FeaturedProductBanner() {
  return (
    <div className="border-app-light-orange flex flex-col items-center justify-center space-y-5 rounded-sm border-4 py-9">
      <img
        className="size-50 object-cover"
        src="https://placehold.co/400"
        alt=""
      />
      <p className="text-lg font-semibold">INI NAMA PRODUK</p>
      <p className="text-sm">
        Only for:{" "}
        <span className="rounded-sm bg-yellow-200 px-3 py-1 font-semibold">
          Rp. 10.000
        </span>
      </p>

      <div className="flex w-full flex-col gap-y-2">
        <Button className="mx-10 rounded-xs">
          <ShoppingCart />
          ADD TO CART
        </Button>
        <Button
          className={cn(
            "text-primary border-primary mx-10 rounded-xs border-2",
            "hover:text-primary",
          )}
          variant={"outline"}
        >
          VIEW DETAILS
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FeaturedProductBanner;
