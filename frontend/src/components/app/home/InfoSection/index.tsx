import { Button } from "@/components/ui/button";
import { competition } from "@/dummy-data/data";
import { cn } from "@/lib/utils";
import { Award, Calendar1, MapPin } from "lucide-react";

function InfoSection() {
  return (
    <section className="bg-app-dark-blue flex min-h-screen flex-col items-center justify-center py-10">
      <h1
        className={cn(
          "text-primary mb-3 text-center text-2xl font-semibold",
          "md:text-4xl",
        )}
      >
        Temukan Informasi Seputar Lomba & Peternak
      </h1>
      <p
        className={cn(
          "mx-auto mb-12 hidden max-w-2xl text-center font-semibold text-gray-400",
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
          "flex w-full flex-col items-center justify-center gap-5 px-10",
          "md:flex-row md:gap-x-16",
        )}
      >
        <img
          className={cn(
            "size-[80vw] rounded-2xl object-cover",
            "md:size-[65vh]",
          )}
          src="https://placehold.co/500"
          alt=""
        />

        <div className="flex flex-col gap-y-6">
          <div className="bg-app-light-orange border-t-primary mt size-fit rounded-xl border-t-3 px-5 py-2 text-sm font-bold">
            INFO LOMBA
          </div>
          <p
            className={cn(
              "text-primary-foreground line-clamp-2 hidden max-w-xs text-2xl font-semibold",
              "md:block",
            )}
          >
            {competition.title.split(" ").slice(0, -1).join(" ")}
            <span className="text-primary">
              {" "}
              {competition.title.split(" ").slice(-1)}
            </span>
          </p>

          <div className="flex items-center gap-x-5">
            <MapPin
              className={cn(
                "text-foreground bg-app-light-orange size-15 rounded-xl",
                "md:size-20",
              )}
              strokeWidth={1}
            />
            <p className={cn("text-xl font-semibold", "md:text-2xl")}>
              <span className="text-primary-foreground">LOKASI :</span>
              <br />
              <span className={cn("text-base text-gray-200", "text-xl")}>
                {competition.location}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <Calendar1
              className={cn(
                "text-foreground bg-app-light-orange size-15 rounded-xl",
                "md:size-20",
              )}
              strokeWidth={1}
            />
            <p className={cn("text-xl font-semibold", "md:text-2xl")}>
              <span className="text-primary-foreground">
                WAKTU PELAKSANAAN :
              </span>
              <br />
              <span className={cn("text-base text-gray-200", "text-xl")}>
                {competition.date.toLocaleString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <Award
              className={cn(
                "text-foreground bg-app-light-orange size-15 rounded-xl",
                "md:size-20",
              )}
              strokeWidth={1}
            />
            <p className={cn("text-xl font-semibold", "md:text-2xl")}>
              <span className="text-primary-foreground">
                TOTAL HADIAH :
                <span className="text-primary">
                  {" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(competition.prize)}
                </span>
              </span>
              <br />
              <span className={cn("text-base text-gray-200", "md:text-xl")}>
                {competition.prizeNote}
              </span>
            </p>
          </div>

          <Button
            className={cn(
              "w-full rounded-full px-9 py-5 text-lg font-semibold",
              "md:w-fit",
            )}
          >
            JELAJAHI LAGI
          </Button>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
