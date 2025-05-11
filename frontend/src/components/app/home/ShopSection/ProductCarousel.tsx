import { products } from "@/dummy-data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCarouselCard from "./ProductCarouselCard";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { cn } from "@/lib/utils";

function ProductCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      className="w-[90vw]"
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex items-center justify-center pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <ProductCarouselCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          "bg-primary text-primary-foreground top-3/4 -left-3 size-10",
          "hover:text-app-light-orange hover:bg-orange-300",
          "md:top-1/2 md:-left-7 md:-translate-y-1/2",
        )}
      />
      <CarouselNext
        className={cn(
          "bg-primary text-primary-foreground top-3/4 -right-3 size-10",
          "hover:text-app-light-orange hover:bg-orange-300",
          "md:top-1/2 md:-right-7 md:-translate-y-1/2",
        )}
      />
    </Carousel>
  );
}

export default ProductCarousel;
