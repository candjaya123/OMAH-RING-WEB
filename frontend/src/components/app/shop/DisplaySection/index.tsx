import { Input } from "@/components/ui/input";
import ProductFilters from "./ProductFilters";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import ActiveFilters from "./ActiveFilters";
import { products } from "@/dummy-data/data";
import ProductCard from "./ProductCard";
import ShopPagination from "./ShopPagination";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

function DisplaySection() {
  return (
    <section className="flex w-full items-start justify-start">
      <ProductFilters className={cn("hidden", "md:ml-10 md:block")} />

      <div className={"m-5 flex w-full flex-col"}>
        <form className="relative flex gap-x-4">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="px-5 md:hidden">
              <ScrollArea className="h-full">
                <ProductFilters className="mb-5" />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <Input
            className="rounded-xs"
            placeholder="Search for anything..."
            type="text"
          />
          <Button
            className="absolute top-0 right-0 rounded-xs"
            size={"icon"}
            variant={"ghost"}
          >
            <Search />
          </Button>
        </form>

        <ActiveFilters className={cn("hidden", "md:flex")} />

        <div className="m-10 flex flex-wrap items-center justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <ShopPagination />
      </div>
    </section>
  );
}

export default DisplaySection;
