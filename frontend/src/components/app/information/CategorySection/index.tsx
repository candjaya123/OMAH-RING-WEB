import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router";
import PrimaryBlogCard from "./PrimaryBlogCard";
import { blogs } from "@/dummy-data/data";
import SecondaryBlogCard from "./SecondaryBlogCard";

const categories = [
  "category 1",
  "category 2",
  "category 3",
  "category 4",
  "category 5",
  "category 6",
];

function CategorySection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section
      className={cn(
        "hidden min-h-[50vh] flex-col items-center justify-center gap-y-5 p-20",
        "md:flex",
      )}
    >
      <div className="h-fit w-fit border-b-2 border-gray-200">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-lg font-medium transition-colors",
              activeTab === index
                ? "border-app-dark-blue text-app-dark-blue border-b-2"
                : "hover:text-app-dark-blue",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex h-full w-full gap-x-2">
        <div className="border-app-dark-gray flex w-3/4 gap-x-10 border p-5">
          <div className="flex w-1/2 flex-col">
            <img
              className="h-[40vh] w-[30vw] rounded-4xl object-cover"
              src="https://placehold.co/400x300"
              alt=""
            />
            <p className="text-app-dark-gray">1 month ago</p>
            <h1 className="line-clamp-2">
              Tick one more destination off of your bucket list with one of our
              most popular vacations in 2022
            </h1>
            <p className="text-app-dark-gray line-clamp-3">
              lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend
              sed ex. Donec quis magna sed felis elementum blandit nec quis sem.
              Maecen.
            </p>
            <Link to={"#"} className="underline underline-offset-10">
              View Post
            </Link>
          </div>
          <div className="flex w-1/2 flex-col gap-y-3 px-5">
            {blogs.map((blog, index) => (
              <PrimaryBlogCard
                key={blog.id}
                blog={blog}
                className={index >= 4 ? "hidden" : ""}
              />
            ))}
          </div>
        </div>

        <div className="border-app-dark-gray flex w-1/4 flex-col gap-y-3 border p-5">
          <h2 className="text-lg">Manga reads</h2>
          {blogs.map((blog, index) => (
            <SecondaryBlogCard
              key={blog.id}
              blog={blog}
              className={index >= 3 ? "hidden" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
