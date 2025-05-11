import { cn } from "@/lib/utils";
import ProductCarousel from "./ProductCarousel";

function ShopSection() {
  return (
    <section
      className={cn(
        "flex min-h-[50vh] flex-col items-center justify-center py-15",
      )}
    >
      <h1
        className={cn(
          "mb-3 hidden text-center text-2xl font-semibold",
          "md:block",
        )}
      >
        Dapatkan Beragam Kebutuhan Burung Anda
      </h1>
      <p
        className={cn(
          "mx-auto mb-12 hidden max-w-2xl text-center font-semibold text-gray-600",
          "md:block",
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est,
        consequuntur veritatis sint sapiente asperiores corrupti velit placeat
        quam autem tenetur, qui iste eos ab quidem distinctio recusandae,
        repudiandae omnis?
      </p>

      <ProductCarousel />
    </section>
  );
}

export default ShopSection;
