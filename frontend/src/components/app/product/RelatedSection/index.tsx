import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { products } from "@/dummy-data/data";
import RelatedProductCard from "./RelatedProductCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

function RelatedSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section
      className={cn(
        "mb-5 flex min-h-[50vh] flex-col items-center justify-center gap-y-10 p-5",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-start gap-x-3",
          "md:pl-25",
        )}
      >
        <div className="bg-app-dark-blue h-10 w-5 rounded-sm" />
        <p className="text-app-dark-blue font-semibold">Related Item</p>
      </div>

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
              className="flex basis-1/2 items-center justify-center pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <RelatedProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default RelatedSection;
