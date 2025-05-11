import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProductItem from "./ProductItem";
import { products } from "@/dummy-data/data";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import PlaceOrderButton from "./PlaceOrderButton";

interface OrderSummaryProps {
  className?: string;
}

function OrderSummary({ className }: OrderSummaryProps) {
  return (
    <div className={cn("mt-12 flex flex-col gap-y-5", className)}>
      <h1 className={cn("text-4xl font-medium", "md:hidden")}>
        Billing Details
      </h1>
      <ProductItem product={products[0]} />
      <ProductItem product={products[1]} />
      <p className="flex w-full justify-between">
        <span>Subtotal:</span>
        <span>Rp. 2129012</span>
      </p>
      <Separator className="bg-black opacity-40" orientation="horizontal" />
      <p className="flex w-full justify-between">
        <button className="flex items-center">
          <span>Shipping:</span>
          <ChevronDown className="mt-1 ml-3 size-4" />
        </button>
        <span>Free</span>
      </p>
      <Separator className="bg-black opacity-40" orientation="horizontal" />
      <p className="flex w-full justify-between">
        <span>Total:</span>
        <span>Rp. 2129012</span>
      </p>
      <RadioGroup>
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <RadioGroupItem
              id="bank"
              value="bank"
              className="data-[state=checked] size-5 flex-none data-[state=checked]:border-black"
              fillClassName="fill-black text-black"
            />
            <Label htmlFor="bank">Bank</Label>
          </div>
          <div className="flex gap-x-2">
            <img
              className="size-5 object-cover"
              src="https://placehold.co/100"
              alt="logo bank"
            />
            <img
              className="size-5 object-cover"
              src="https://placehold.co/100"
              alt="logo bank"
            />
            <img
              className="size-5 object-cover"
              src="https://placehold.co/100"
              alt="logo bank"
            />
            <img
              className="size-5 object-cover"
              src="https://placehold.co/100"
              alt="logo bank"
            />
          </div>
        </div>

        <div className="flex gap-x-3">
          <RadioGroupItem
            id="cod"
            value="cod"
            className="data-[state=checked] size-5 flex-none data-[state=checked]:border-black"
            fillClassName="fill-black text-black"
          />
          <Label htmlFor="cod">Cash on delivery</Label>
        </div>
      </RadioGroup>

      <div className="flex gap-x-5">
        <Input
          className={cn(
            "rounded-full border-black text-base placeholder:text-base",
            "md:py-6",
          )}
          type="text"
          placeholder="Cupon Code"
        />
        <Button className={cn("w-fit rounded-full px-7 text-base", "md:py-6")}>
          Apply Cupon
        </Button>
      </div>

      <PlaceOrderButton className={cn("hidden", "md:flex")} />
    </div>
  );
}

export default OrderSummary;
