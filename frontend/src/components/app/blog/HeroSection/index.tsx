import { Blog } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { SiFacebook, SiPinterest, SiX } from "@icons-pack/react-simple-icons";
import { ChartNoAxesColumn, Clock } from "lucide-react";

const bgUrl =
  "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

interface HeroSectionProps {
  blog: Blog;
}

function HeroSection({ blog }: HeroSectionProps) {
  return (
    <section
      style={{ backgroundImage: `url(${bgUrl})` }}
      className="flex min-h-screen bg-black/50 bg-cover bg-center bg-no-repeat bg-blend-overlay"
    >
      <div
        className={cn(
          "-mt-30 flex w-full flex-col items-start justify-center gap-y-5 p-5",
          "md:-mt-20 md:p-20",
        )}
      >
        <h1
          className={cn(
            "text-background line-clamp-3 max-w-5xl py-1 text-2xl",
            "md:text-4xl",
            "lg:text-6xl",
          )}
        >
          {blog.title}
        </h1>

        <h3
          className={cn(
            "text-background line-clamp-3 max-w-5xl py-1 text-xl",
            "md:text-3xl",
            "lg:w-5xl",
          )}
        >
          {blog.subtitle}
        </h3>

        <div
          className={cn(
            "text-background flex w-full flex-col items-start gap-y-2",
            "md:flex-row md:items-center",
          )}
        >
          <span className="line-clamp-1">by {blog.author}</span>

          <div
            className={cn("mx-3 hidden h-[1px] w-5 bg-gray-300", "md:block")}
          />

          <div
            className={cn(
              "flex items-center justify-between gap-x-3",
              "md:gap-x-0",
            )}
          >
            <span className="flex flex-none items-center justify-center gap-x-2">
              <Clock className="size-4" />
              {blog.readDuration} minute read
            </span>

            <div
              className={cn("mx-3 hidden h-[1px] w-5 bg-gray-300", "md:block")}
            />

            <span className="flex flex-none items-center justify-center gap-x-2">
              <ChartNoAxesColumn className="size-4" />
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(blog.viewCount)}{" "}
              views
            </span>
          </div>

          <div
            className={cn("mx-3 hidden h-[1px] w-5 bg-gray-300", "md:block")}
          />

          <span className="flex flex-none items-center justify-center gap-x-2">
            <SiFacebook className="size-4" />
            <SiX className="size-4" />
            <SiPinterest className="size-4" />
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(blog.viewCount)}{" "}
            shares
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
