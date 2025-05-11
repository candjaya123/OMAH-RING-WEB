import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { products } from "@/dummy-data/data";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

function ProductHeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    setCount(carouselApi.scrollSnapList().length);
    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-[90vw] rounded-2xl"
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setCarouselApi}
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className="rounded-2xl">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="flex basis-full items-center justify-center rounded-2xl"
            >
              <div
                className={cn(
                  "flex h-[50vw] w-[80vw] items-center justify-around gap-x-20 rounded-2xl bg-gray-500 px-0",
                  "md:h-[33vh] md:w-[80vw] md:px-10",
                  "lg:px-5",
                )}
              >
                <div className={cn("hidden max-w-md", "md:block")}>
                  <h3 className="mb-2 text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="line-clamp-3 text-gray-600">
                    {product.description}
                  </p>
                  <p className="text-primary mt-4 text-lg font-bold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price)}
                  </p>
                  <Link
                    to={`/shop/${product.id}`}
                    className="flex w-fit gap-x-2 hover:underline"
                  >
                    Show Now
                    <ArrowRight />
                  </Link>
                </div>

                <img
                  className={cn(
                    "size-full aspect-3/2 rounded-2xl object-cover",
                    "md:h-50 md:w-90",
                  )}
                  src={product.imgUrls[0]}
                  alt={product.title}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className={cn(
          "absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform",
          "md:block",
        )}
      >
        <div className="mt-4 flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`size-4 rounded-full transition-colors ${
                current === index
                  ? "bg-primary border-2 border-white"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHeroCarousel;
