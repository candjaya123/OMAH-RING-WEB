import ImageGallery from "./ImageGallery";
import ProductBreadcrumb from "./ProductBreadcrumb";
import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import ProductInformation from "./ProductInformation";

interface ProductSectionProps {
  product: Product;
}

function ProductSection({ product }: ProductSectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center p-5",
        "md:px-20 md:py-10",
      )}
    >
      <ProductBreadcrumb className="self-start" product={product} />
      <div
        className={cn("flex w-full flex-col gap-x-20 gap-y-5", "md:flex-row")}
      >
        <ImageGallery
          className={cn("w-[90vw]", "md:w-1/2")}
          product={product}
        />
        <ProductInformation
          className={cn("w-[90vw]", "md:w-1/2")}
          product={product}
        />
      </div>
    </section>
  );
}

export default ProductSection;
