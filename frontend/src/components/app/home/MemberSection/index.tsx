import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function MemberSection() {
  return (
    <section className="bg-app-light-orange flex min-h-screen flex-col items-center justify-center px-8 py-10">
      <h1 className={cn("mb-3 text-center text-xl font-bold", "md:text-4xl")}>
        GABUNG MEMBER SEKARANG!!!
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
      <div
        className={cn(
          "flex w-full flex-col-reverse items-center justify-center gap-5",
          "md:flex-row md:gap-x-16",
        )}
      >
        <div className={cn("w flex w-full flex-col gap-y-6", "md:w-fit")}>
          <div className="bg-app-light-orange border-y-app-dark-blue mt size-fit rounded-xl border-y-3 px-5 py-2 text-sm font-bold">
            MEMBERSHIP
          </div>
          <p
            className={cn(
              "line-clamp-2 hidden max-w-lg text-2xl font-semibold",
              "md:block",
            )}
          >
            Dapatkan Beragam Penawaran Menarik Antara Lain :
          </p>
          <div className="flex items-center gap-x-5">
            <Check
              className={cn(
                "bg-app-dark-blue size-15 rounded-2xl text-white",
                "md:size-20",
              )}
              strokeWidth={2}
            />
            <p className="text-2xl font-bold">
              <span className="">IKLAN :</span>
              <br />
              <span
                className={cn("hidden font-medium text-gray-600", "md:block")}
              >
                who seeks it, abcde fghij klmno pqrstu
              </span>
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <Check
              className={cn(
                "bg-app-dark-blue size-15 rounded-2xl text-white",
                "md:size-20",
              )}
              strokeWidth={2}
            />
            <p className={cn("text-2xl font-bold")}>
              <span className="">IKLAN :</span>
              <br />
              <span
                className={cn("hidden font-medium text-gray-600", "md:block")}
              >
                who seeks it, abcde fghij klmno pqrstu
              </span>
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <Check
              className={cn(
                "bg-app-dark-blue size-15 rounded-2xl text-white",
                "md:size-20",
              )}
              strokeWidth={2}
            />
            <p className={cn("text-2xl font-bold")}>
              <span>IKLAN :</span>
              <br />
              <span
                className={cn("hidden font-medium text-gray-600", "md:block")}
              >
                who seeks it, abcde fghij klmno pqrstu
              </span>
            </p>
          </div>

          <Button
            className={cn(
              "bg-app-dark-blue w-full rounded-full px-9 py-6 text-lg font-semibold",
              "hover:bg-gray-700",
              "md:w-fit",
            )}
          >
            JELAJAHI LAGI
          </Button>
        </div>

        <img
          className={cn(
            "size-[80vw] rounded-2xl object-cover",
            "md:size-[65vh]",
          )}
          src="https://placehold.co/500"
          alt=""
        />
      </div>
    </section>
  );
}

export default MemberSection;
