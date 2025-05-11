import { cn } from "@/lib/utils";
import ProductHeroCarousel from "./ProductHeroCarousel";
import { Button } from "@/components/ui/button";
import JoinMemberDialog from "./JoinMemberDialog";

function HeroSection() {
  return (
    <section className="bg-app-light-orange flex min-h-screen flex-col items-center justify-center">
      <h1 className="mt-16 mb-8 text-4xl font-bold md:text-5xl">OMAH RING</h1>
      <h1 className="mb-4 text-center text-xl font-semibold md:text-2xl">
        RUMAH PRODUKSI RING BURUNG
        <br />
        BERKUALITAS DAN TERPERCAYA
      </h1>
      <p
        className={cn(
          "mx-auto mb-8 hidden max-w-2xl text-center font-semibold text-gray-600",
          "md:flex",
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat
        magnam ipsam voluptatem labore. Doloribus sapiente totam provident modi
        perferendis aliquid nobis, nemo consequatur possimus repellat, tenetur
        reprehenderit hic veniam.
      </p>
      <div
        className={cn(
          "mb-12 flex w-full flex-col items-center justify-center gap-3 px-15",
          "md:flex-row",
        )}
      >
        <JoinMemberDialog>
          <Button
            className={cn(
              "w-60 rounded-full py-5 text-lg font-semibold",
              "md:w-40 md:text-base",
            )}
          >
            JOIN MEMBER
          </Button>
        </JoinMemberDialog>
        <Button
          className={cn(
            "w-60 rounded-full border-black py-5 text-lg font-semibold",
            "md:w-40 md:text-base",
          )}
          variant={"outline"}
        >
          GET INFO
        </Button>
      </div>

      <ProductHeroCarousel />
    </section>
  );
}

export default HeroSection;
