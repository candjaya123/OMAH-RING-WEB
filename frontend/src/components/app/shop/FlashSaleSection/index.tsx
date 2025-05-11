import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CountdownTimer from "./CountdownTimer";
import { products } from "@/dummy-data/data";
import FlashSaleProductCard from "./FlashSaleProductCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

function FlashSaleSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section
      className={cn(
        "bg-app-dark-gray flex min-h-[50vh] w-full flex-col items-center justify-center pt-5 pb-10",
        "md:py-1",
      )}
    >
      <div
        className={cn(
          "mt-5 hidden w-[90vw] items-center justify-start gap-x-3",
          "md:flex",
        )}
      >
        <div className="bg-app-dark-blue h-10 w-5 rounded-sm" />
        <p className={"font-semibold"}>Promo Hari Ini :</p>
      </div>

      <Carousel
        className={cn("w-[90vw] pb-8", "md:pb-0")}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <div
          className={cn(
            "mb-5 flex flex-col items-center justify-start",
            "md:flex-row",
          )}
        >
          <div
            className={cn(
              "flex flex-col items-start justify-center gap-x-15 gap-y-5",
              "md:flex-row md:items-center md:justify-center",
            )}
          >
            <p className={cn("ml-3 text-4xl font-semibold", "md:ml-0")}>
              Flash Sales
            </p>
            <CountdownTimer targetDate={new Date("5-30-2025")} />
          </div>
          <div
            className={cn(
              "absolute bottom-0 flex",
              "md:top-10 md:right-40 md:bottom-auto",
            )}
          >
            <CarouselPrevious className="size-10" />
            <CarouselNext className="size-10" />
          </div>
        </div>

        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="flex items-center justify-center md:basis-1/2 lg:basis-1/4"
            >
              <FlashSaleProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default FlashSaleSection;
