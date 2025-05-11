import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn("block", "md:hidden")}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-background/90 flex flex-col items-center justify-start gap-y-5 px-10 pt-5 backdrop-blur-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "relative font-medium text-black",
              "hover:text-primary",
              "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
              isActive ? "text-primary after:scale-x-100" : "after:scale-x-0",
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            cn(
              "relative font-medium text-black",
              "hover:text-primary",
              "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
              isActive ? "text-primary after:scale-x-100" : "after:scale-x-0",
            )
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/information"
          className={({ isActive }) =>
            cn(
              "relative font-medium text-black",
              "hover:text-primary",
              "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
              isActive ? "text-primary after:scale-x-100" : "after:scale-x-0",
            )
          }
        >
          Informasi
        </NavLink>
        <Button
          className={cn(
            "bg-primary rounded-full px-6 text-white",
            // isHomePage ? "" : "bg-app-dark-blue hover:bg-app-light-blue",
          )}
        >
          EXPLORE
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSheet;
