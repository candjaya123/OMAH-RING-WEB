import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CancelMemberDialog from "./CancelMemberDialog";

function CancelMemberSection() {
  return (
    <section
      className={cn(
        "bg-app-dark-blue flex min-h-[50vh] flex-col items-center justify-around px-8 py-10",
        "md:flex-row",
      )}
    >
      <div className="flex flex-col">
        <h1
          className={cn(
            "text-primary-foreground mb-3 text-start text-2xl font-semibold",
            "md:text-4xl",
          )}
        >
          BATALKAN MEMBERSHIP <br />
          <span className="text-primary">KAPANPUN</span>
        </h1>
        <p
          className={cn(
            "text-app-dark-gray mb-12 line-clamp-3 max-w-2xl text-start font-semibold",
            "md:line-clamp-none",
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est,
          consequuntur veritatis sint sapiente asperiores corrupti velit placeat
          quam autem tenetur, qui iste eos ab quidem distinctio recusandae,
          repudiandae omnis?
        </p>
      </div>

      <div className={cn("flex w-full flex-col gap-3", "md:w-fit md:flex-row")}>
        <CancelMemberDialog>
          <Button
            className={cn("w-full rounded-xl text-base font-bold", "md:w-52")}
            size={"lg"}
          >
            Ajukan Pembatalan
          </Button>
        </CancelMemberDialog>
        <Button
          className={cn(
            "border-primary w-full rounded-xl border-3 text-base font-bold",
            "md:w-52",
          )}
          variant={"outline"}
          size={"lg"}
        >
          Ajukan Keluhan
        </Button>
      </div>
    </section>
  );
}

export default CancelMemberSection;
