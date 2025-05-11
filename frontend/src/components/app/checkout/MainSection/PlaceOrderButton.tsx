import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlaceOrderButtonProps {
  className?: string;
}

function PlaceOrderButton({ className }: PlaceOrderButtonProps) {
  const handleClick = () => {
    console.log("place order");
  };

  return (
    <Button
      onClick={handleClick}
      className={cn("w-fit rounded-full px-7 py-6 text-base", className)}
    >
      Place Order
    </Button>
  );
}

export default PlaceOrderButton;
