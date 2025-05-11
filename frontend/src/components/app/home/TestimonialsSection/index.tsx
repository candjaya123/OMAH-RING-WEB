import { testimonials } from "@/dummy-data/data";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ReviewDialog from "./ReviewDialog";

function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-3 p-5">
      <div className="bg-app-light-orange border-t-primary rounded-xl border-t-4 px-10 py-3 text-xl font-semibold">
        TESTIMONI
      </div>
      <h1 className={cn("hidden text-center text-4xl font-bold", "md:block")}>
        COBA DENGAR APA KATA<span className="text-primary"> CUSTOMER </span>
        KAMI
      </h1>
      <p
        className={cn(
          "mx-auto hidden max-w-2xl text-center font-semibold text-gray-600",
          "md:block",
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta
        itaque ullam tempora, dolor adipisci voluptate eum repellat, suscipit
        officiis accusamus quis eligendi ipsum porro magnam rerum maxime
        quibusdam asperiores.
      </p>

      <div
        className={cn(
          "mt-5 grid grid-cols-1 gap-6",
          "md:grid-cols-2",
          "lg:grid-cols-3 lg:px-20",
        )}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            className={cn(
              index >= 3 && !showAll && "hidden",
              index >= 3 && index < 6 && !showAll && "md:block",
              index >= 6 && !showAll && "md:hidden",
            )}
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>

      <div className="my-5 space-x-3">
        <ReviewDialog>
          <Button
            className={cn(
              "bg-app-dark-blue rounded-full px-8 text-xl",
              "hover:bg-app-light-blue",
              "md:px-10 md:text-xl",
            )}
            size={"lg"}
          >
            Buat Review
          </Button>
        </ReviewDialog>
        <Button
          onClick={() => setShowAll(!showAll)}
          variant={"outline"}
          className={cn(
            "hidden rounded-full border-black",
            "md:inline-block md:px-10 md:text-xl",
          )}
          size={"lg"}
        >
          {showAll ? "Lihat Lebih Sedikit" : "Semua Review"}
        </Button>
      </div>
    </section>
  );
}

export default TestimonialsSection;
