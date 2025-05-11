import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Package, ShoppingBag, Star } from "lucide-react";
import ListOrderDialog from "./ListOrderDialog";

function DeliveryPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Package
          strokeWidth={1}
          className={cn("text-background size-6 fill-black", "md:size-8")}
        />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="aspect-square w-xs bg-white/4 p-7 backdrop-blur-3xl"
      >
        <form className="flex size-full flex-col items-center justify-center gap-y-2">
          <Input
            type="text"
            placeholder="Nama"
            className="bg-background rounded-full"
          />
          <Input
            type="text"
            placeholder="Nomer Telepon"
            className="bg-background rounded-full"
          />
          <ListOrderDialog>
            <Button variant={"ghost"} className="text-background">
              <ShoppingBag />
              My Order
            </Button>
          </ListOrderDialog>
          <Button variant={"ghost"} className="text-background">
            <Star />
            My Reviews
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default DeliveryPopover;
