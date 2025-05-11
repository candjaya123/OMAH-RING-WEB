import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ReviewFormProps {
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  review: z.string(),
});

export default function ReviewForm({ className }: ReviewFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "flex h-full flex-col items-center justify-center gap-y-6 p-5",
          "md:p-20",
          className,
        )}
      >
        <h1 className={cn("text-center text-xl font-bold", "md:text-3xl")}>
          REVIEW
        </h1>
        <div className={cn("flex w-full flex-col gap-4", "md:flex-row")}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-foreground/40">
                  Nama<span className="-m-2 text-red-300">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type="text"
                    className="bg-secondary rounded-full"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-foreground/40">
                  Nomer Telepon<span className="-m-2 text-red-300">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    type="text"
                    className="bg-secondary rounded-full"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-foreground/40">
                Review<span className="-m-2 text-red-300">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="bg-secondary max-h-52 rounded-xl"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={cn("text-md w-full font-medium", "md:w-1/2")}
          type="submit"
        >
          KIRIM REVIEW
        </Button>
      </form>
    </Form>
  );
}
