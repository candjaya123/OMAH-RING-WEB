import { cn } from "@/lib/utils";
import CheckoutForm from "./CheckoutForm.";
import OrderSummary from "./OrderSummary";

function MainSection() {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col-reverse items-center gap-y-10 gap-x-20 justify-center p-5",
        "md:flex-row md:p-20",
      )}
    >
      <CheckoutForm className={cn("w-full", "md:w-1/2")} />
      <OrderSummary className={cn("w-full", "md:w-1/2")} />
    </section>
  );
}

export default MainSection;
