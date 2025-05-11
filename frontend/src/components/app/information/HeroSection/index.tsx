import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";

const bgUrl =
  "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={cn(
        "flex min-h-screen bg-black/50 bg-cover bg-center bg-no-repeat pt-16 bg-blend-overlay",
        "md:pt-0",
      )}
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-10">
        <div className={cn("relative w-[80vw]", "md:w-[50vw]")}>
          <Menu className="absolute top-2 left-5 size-5 hover:cursor-pointer" />
          <Input
            className="bg-background rounded-full pl-15"
            placeholder="Search for anything..."
            type="text"
          />
          <Search className="absolute top-2 right-5 size-5 hover:cursor-pointer" />
        </div>
        <h1
          className={cn(
            "text-app-light-orange text-center text-2xl font-normal",
            "md:text-4xl",
            "lg:text-6xl",
          )}
        >
          INSPIRATION FOR TRAVEL BY REAL PEOPLE
        </h1>
        <p
          className={cn(
            "text-app-light-orange text-center text-xl font-normal",
            "md:text-2xl",
            "lg:text-4xl",
          )}
        >
          Book smart, travel simple
        </p>
        <Button
          className={cn(
            "bg-app-light-orange text-foreground rounded-full px-7 py-5 text-md hover:bg-red-50",
            "md:text-xl md:px-10 md:py-7"
          )}
        >
          Start planning your trip
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
