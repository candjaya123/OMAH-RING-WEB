import { Blog } from "@/dummy-data/types";
import { cn } from "@/lib/utils";

interface SecondaryBlogCardProps {
  blog: Blog;
  className?: string;
}

function SecondaryBlogCard({ blog, className }: SecondaryBlogCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <img
        className="h-[13vh] w-[10vw] flex-none rounded-2xl object-cover"
        src={blog.imgUrl}
        alt={blog.title}
      />
      <h2 className="line-clamp-2 max-w-[13vw]">{blog.title}</h2>
    </div>
  );
}

export default SecondaryBlogCard;
