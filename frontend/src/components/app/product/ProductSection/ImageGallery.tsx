import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ImageGalleryProps {
  product: Product;
  className?: string;
}

function ImageGallery({ className, product }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={cn("flex flex-col-reverse gap-4", "md:flex-row", className)}
    >
      {/* ini thumnail */}
      <ScrollArea
        className={cn(
          "flex w-full gap-2 overflow-x-auto",
          "md:max-h-[35vw] md:max-w-[8vw] md:flex-col md:overflow-x-visible",
        )}
      >
        <div className="flex gap-2 md:flex-col">
          {product.imgUrls.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "w-[80px] overflow-hidden rounded border transition-all",
                "md:size-[8vw]",
                selectedImage === index
                  ? "border-primary border-2"
                  : "border-gray-200 hover:border-app-dark-orange",
              )}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="aspect-square object-cover"
              />
            </button>
          ))}
        </div>
        <ScrollBar orientation={isDesktop ? "vertical" : "horizontal"} />
      </ScrollArea>

      {/* ini main image */}
      <div className="flex aspect-square w-full overflow-hidden rounded-lg bg-gray-50 md:size-[35vw]">
        <img
          src={product.imgUrls[selectedImage]}
          alt="Selected Image"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
