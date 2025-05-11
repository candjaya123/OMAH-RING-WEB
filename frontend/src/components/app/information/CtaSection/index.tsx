import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bgUrl =
  "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
// const bgUrl = "https://placehold.co/1980x1080";

function CtaSection() {
  return (
    <section
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={cn(
        "hidden min-h-[75vh] bg-black/50 bg-cover bg-center bg-no-repeat bg-blend-overlay",
        "md:flex",
      )}
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-5">
        <h3 className="text-background rounded-sm bg-white/20 px-3 text-2xl backdrop-blur-md">
          Travel
        </h3>
        <h1 className="text-background mb-10 text-center text-5xl">
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="line-clamp-3 max-w-xl text-center text-[#E5E5E5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          incidunt error porro nihil dicta autem quo ex facere saepe magni,
          accusamus, provident necessitatibus accusantium quae sequi eaque
          quisquam adipisci perspiciatis.
        </p>
        <Button className="bg-app-light-orange text-foreground rounded-full px-10 py-7 text-xl hover:bg-red-50">
          Start planning your trip
        </Button>
      </div>
    </section>
  );
}

export default CtaSection;
