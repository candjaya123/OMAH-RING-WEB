import { Blog } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Link } from "react-router";

interface BlogCardProps {
  blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      to={`/information/${blog.id}`}
      style={{ backgroundImage: `url(${blog.imgUrl})` }}
      className={cn(
        "flex aspect-3/4 max-w-[45vw] flex-col justify-between space-y-6 rounded-lg p-5",
        "bg-black/50 bg-cover bg-center bg-no-repeat bg-blend-overlay",
        "md:aspect-auto md:p-5",
      )}
    >
      <h2 className="text-background line-clamp-3">{blog.title}</h2>
      <div
        className={cn(
          "text-app-dark-gray flex flex-wrap flex-col items-start justify-between gap-y-1 text-xs",
          "md:flex-row md:items-center md:text-base",
        )}
      >
        <span className="flex-none">
          {blog.createdAt.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <div className={cn("h-[1px] w-[80%] bg-gray-300", "md:mx-3 md:w-5")} />
        <div className="flex items-center justify-center gap-x-1">
          <Clock className={cn("size-3", "md:size-4")} />
          <span className="flex-none">{blog.readDuration} minute read</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
