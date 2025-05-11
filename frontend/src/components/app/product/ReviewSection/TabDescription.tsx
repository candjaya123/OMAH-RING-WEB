import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Award, CreditCard, Handshake, Headphones, Truck } from "lucide-react";

function TabDescription() {
  return (
    <div className="flex h-full justify-between">
      <div className={cn("flex max-w-full flex-col gap-y-2","md:max-w-2/4")} >
        <h3 className="mb-2 font-semibold">Description</h3>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quis
          repellendus officia voluptates odio, sed culpa cupiditate repudiandae
          reprehenderit ad autem commodi quibusdam obcaecati qui? Odit nihil
          accusantium ratione neque.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem labore maxime cum voluptatibus officiis, quo asperiores
          a natus ullam dolorem pariatur porro modi, amet fuga illum aliquam.
          Minus, fugit perspiciatis?
        </p>
      </div>

      <div className={cn("hidden max-w-1/4 flex-col gap-y-2", "md:flex")}>
        <h3 className="mb-2 font-semibold">Feature</h3>
        <div className="flex gap-x-2">
          <Award className="text-primary" strokeWidth={1.5} />
          <p className="text-sm">Free 1 Year Warranty</p>
        </div>
        <div className="flex gap-x-2">
          <Truck className="text-primary" strokeWidth={1.5} />
          <p className="text-sm">Free Shipping & Fasted Delivery</p>
        </div>
        <div className="flex gap-x-2">
          <Handshake className="text-primary" strokeWidth={1.5} />
          <p className="text-sm">100% Money-back gurantee</p>
        </div>
        <div className="flex gap-x-2">
          <Headphones className="text-primary" strokeWidth={1.5} />
          <p className="text-sm">24/7 Customer support</p>
        </div>
        <div className="flex gap-x-2">
          <CreditCard className="text-primary" strokeWidth={1.5} />
          <p className="text-sm">Secure payment method</p>
        </div>
      </div>

      <div className="hidden md:block">
        <Separator orientation="vertical" />
      </div>

      <div className={cn("hidden max-w-1/4 flex-col gap-y-2", "md:flex")}>
        <h3 className="mb-2 font-semibold">Shipping Information</h3>
        <p className="text-sm font-medium">
          Courier:{" "}
          <span className="font-normal text-gray-500">
            2-4 days, free shipping
          </span>
        </p>
        <p className="text-sm font-medium">
          Local Shipping:{" "}
          <span className="font-normal text-gray-500">
            up to one week, $19.00
          </span>
        </p>
        <p className="text-sm font-medium">
          UPS Ground Shipping:{" "}
          <span className="font-normal text-gray-500">4-6 days, $29.00</span>
        </p>
        <p className="text-sm font-medium">
          Unishop Global Export:{" "}
          <span className="font-normal text-gray-500">3-4 days, $39.00</span>
        </p>
      </div>
    </div>
  );
}

export default TabDescription;
