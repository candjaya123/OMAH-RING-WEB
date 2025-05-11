import { blogs } from "@/dummy-data/data";
import { Blog } from "@/dummy-data/types";
import ReactMarkdown from "react-markdown";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import BlogPagination from "./BlogPagination";
import { cn } from "@/lib/utils";

interface ArticleSectionProps {
  blog: Blog;
}

function ArticleSection({ blog }: ArticleSectionProps) {
  return (
    <section className="relative min-h-[50vh]">
      <div
        className={cn(
          "z-10 mx-10 -mt-40 flex flex-col rounded-xl bg-white p-5",
          "md:mx-20 md:flex-row md:p-10",
        )}
      >
        <div className={cn("relative mb-20 max-w-full", "md:max-w-2/3")}>
          <h1 className={cn("mb-3 text-2xl", "md:text-4xl")}>GATAU INI APA</h1>
          <div className="prose max-w-none">
            {blog.content.map((content, index) => {
              if (content.type === "image")
                return (
                  <img
                    key={index}
                    className="mx-auto rounded-xl"
                    src={content.content}
                  />
                );
              else
                return (
                  <ReactMarkdown key={index}>{content.content}</ReactMarkdown>
                );
            })}
          </div>
          <BlogPagination className={cn("absolute -bottom-15", "md:hidden")} />
        </div>

        <div
          className={cn(
            "ml-[50%] flex w-[95vw] -translate-x-1/2 flex-col-reverse justify-between gap-y-5 px-2",
            "md:mx-0 md:max-w-1/3 md:translate-x-0 md:flex-col md:px-0 md:pl-10",
          )}
        >
          <div className="flex flex-col gap-y-5">
            <h2 className="text-2xl">The Latest</h2>
            <div
              className={cn("mb-10 grid grid-cols-2 gap-3", "md:grid-cols-1")}
            >
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>

          <Button className="bg-app-dark-blue hover:bg-app-light-blue mx-auto w-fit px-10 py-5 text-xl">
            MORE
          </Button>
        </div>
      </div>

      <BlogPagination className={cn("absolute bottom-10 hidden", "md:flex")} />
    </section>
  );
}

export default ArticleSection;
