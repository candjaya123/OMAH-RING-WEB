import { blogs } from "@/dummy-data/data";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function BlogsSection() {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-y-10 px-5 py-20",
        "md:px-20 md:py-10",
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 items-start justify-center gap-x-[7vw] gap-y-25",
          "md:gap-y-10 md:grid-cols-2",
        )}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="flex-none border-black px-15 py-5 text-lg text-gray-500"
      >
        Load More
      </Button>
    </section>
  );
}

export default BlogsSection;
