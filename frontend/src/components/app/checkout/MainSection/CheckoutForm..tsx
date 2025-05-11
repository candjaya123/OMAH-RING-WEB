import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import PlaceOrderButton from "./PlaceOrderButton";

interface CheckoutFormProps {
  className?: string;
}

function CheckoutForm({ className }: CheckoutFormProps) {
  return (
    <div className={cn("flex flex-col gap-y-5", className)}>
      <h1 className={cn("hidden text-4xl font-medium", "md:block")}>
        Billing Details
      </h1>
      <div className="space-y-2">
        <Label className="text-base font-light text-gray-400" htmlFor="name">
          Nama Lengkap
        </Label>
        <Input
          className="bg-app-light-gray rounded-full shadow-none"
          id="name"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-base font-light text-gray-400" htmlFor="address">
          Alamat Lengkap
        </Label>
        <Input
          className="bg-app-light-gray rounded-full shadow-none"
          id="address"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-base font-light text-gray-400" htmlFor="number">
          Nomor Telepon
        </Label>
        <Input
          className="bg-app-light-gray rounded-full shadow-none"
          id="number"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-base font-light text-gray-400" htmlFor="message">
          Pesan
        </Label>
        <Input
          className="bg-app-light-gray rounded-full shadow-none"
          id="message"
          type="text"
        />
      </div>
      <div className="flex items-center gap-x-2">
        <Checkbox id="saveInfo" />
        <Label htmlFor="saveInfo">
          Save this information for faster check-out next time
        </Label>
      </div>
      <Button
        asChild
        variant={"ghost"}
        className={cn(
          "hidden w-fit rounded-full border border-black px-7 py-6 text-base",
          "md:flex",
        )}
      >
        <Link to="/shop">Return To Shop</Link>
      </Button>
      <PlaceOrderButton className={cn("self-center", "md:hidden")} />
    </div>
  );
}

export default CheckoutForm;
