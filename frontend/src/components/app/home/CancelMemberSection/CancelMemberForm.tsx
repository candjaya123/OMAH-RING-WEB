import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface CancelMemberFormProps {
  className?: string;
}

const formSchema = z.object({
  fullName: z.string().min(1),
  number: z.string().min(1),
  reason: z.string().min(1),
});

export default function CancelMemberForm({ className }: CancelMemberFormProps) {
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
          FORMULIR PEMBATALAN MEMBERSHIP
        </h1>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-foreground/40">
                Nama Lengkap<span className="-m-2 text-red-300">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-secondary rounded-full"
                  placeholder=""
                  type="text"
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
                Nomor Telepon<span className="-m-2 text-red-300">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-secondary rounded-full"
                  placeholder=""
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-foreground/40">
                Alasan Pembatalan<span className="-m-2 text-red-300">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="bg-secondary max-h-52 rounded-xl"
                  placeholder=""
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className={cn(
            "text-md bg-app-dark-blue w-full font-medium",
            "hover:bg-app-light-blue",
            "md:w-1/2",
          )}
          type="submit"
        >
          BATALKAN MEMBERSHIP
        </Button>
      </form>
    </Form>
  );
}
