import { useState } from "react";
import { cn } from "@/lib/utils";
import TabAdditional from "./TabAdditional";
import TabDescription from "./TabDescription";
import TabReview from "./TabReview";
import TabSpecification from "./TabSpecification";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Tabs = "description" | "additional" | "specification" | "review";

function ReviewSection() {
  const [activeTab, setActiveTab] = useState<Tabs>("description");

  return (
    <section className={cn("px-5", "md:px-20")}>
      <div className="rounded-md border">
        {/* Tabs Header */}
        <div className="flex items-center justify-center border-b">
          {/* Mobile view with arrows */}
          <div className="flex w-full items-center justify-between px-5 py-1 md:hidden">
            <button
              onClick={() => {
                const tabs = [
                  "description",
                  "additional",
                  "specification",
                  "review",
                ];
                const currentIndex = tabs.indexOf(activeTab);
                const prevIndex =
                  (currentIndex - 1 + tabs.length) % tabs.length;
                setActiveTab(tabs[prevIndex] as Tabs);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
            >
              <ArrowLeft />
            </button>

            <div className="text-center font-medium uppercase">
              {activeTab === "description" && "DESCRIPTION"}
              {activeTab === "additional" && "ADDITIONAL INFORMATION"}
              {activeTab === "specification" && "SPECIFICATION"}
              {activeTab === "review" && "REVIEW"}
            </div>

            <button
              onClick={() => {
                const tabs = [
                  "description",
                  "additional",
                  "specification",
                  "review",
                ];
                const currentIndex = tabs.indexOf(activeTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                setActiveTab(tabs[nextIndex] as Tabs);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Desktop view with all tabs */}
          <div className="hidden flex-wrap justify-center md:flex">
            <button
              onClick={() => setActiveTab("description")}
              className={cn(
                "relative px-6 py-4 text-center font-medium",
                activeTab === "description" ? "text-black" : "text-gray-500",
              )}
            >
              DESCRIPTION
              {activeTab === "description" && (
                <div className="bg-primary absolute bottom-0 left-0 h-1 w-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={cn(
                "relative px-6 py-4 text-center font-medium",
                activeTab === "additional" ? "text-black" : "text-gray-500",
              )}
            >
              ADDITIONAL INFORMATION
              {activeTab === "additional" && (
                <div className="bg-primary absolute bottom-0 left-0 h-1 w-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("specification")}
              className={cn(
                "relative px-6 py-4 text-center font-medium",
                activeTab === "specification" ? "text-black" : "text-gray-500",
              )}
            >
              SPECIFICATION
              {activeTab === "specification" && (
                <div className="bg-primary absolute bottom-0 left-0 h-1 w-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={cn(
                "relative px-6 py-4 text-center font-medium",
                activeTab === "review" ? "text-black" : "text-gray-500",
              )}
            >
              REVIEW
              {activeTab === "review" && (
                <div className="bg-primary absolute bottom-0 left-0 h-1 w-full"></div>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <div className="bg-primary -mt-1 h-1 w-[50vw]"></div>
        </div>

        {/* Tab Content */}
        <div className="p-7">
          {activeTab === "description" && <TabDescription />}
          {activeTab === "additional" && <TabAdditional />}
          {activeTab === "specification" && <TabSpecification />}
          {activeTab === "review" && <TabReview />}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
