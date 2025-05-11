import { Blog } from "@/dummy-data/types";
import { cn } from "@/lib/utils";

interface PrimaryBlogCardProps {
  blog: Blog;
  className?: string;
}

function PrimaryBlogCard({ blog, className }: PrimaryBlogCardProps) {
  return (
    <div className={cn("flex gap-x-5 px-3", className)}>
      <img
        className="h-[13vh] w-[10vw] flex-none rounded-2xl object-cover"
        src={blog.imgUrl}
        alt={blog.title}
      />
      <p className="flex flex-col justify-between">
        <h2 className="line-clamp-2">{blog.title}</h2>
        <span className="text-app-dark-gray text-sm">
          {blog.createdAt.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </p>
    </div>
  );
}

export default PrimaryBlogCard;
