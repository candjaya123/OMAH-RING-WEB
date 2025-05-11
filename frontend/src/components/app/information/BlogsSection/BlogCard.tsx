import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Blog } from "@/dummy-data/types";
import { Dot, Share2 } from "lucide-react";
import CardTags from "./CardTags";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <div
      className={cn(
        "flex w-[80vw] flex-col gap-y-5",
        "md:max-w-[36.5vw]",
        className,
      )}
    >
      <div className="relative">
        <img
          className={cn(
            "aspect-square w-full h-full rounded-4xl object-cover",
            "md:aspect-4/3",
          )}
          src={blog.imgUrl}
          alt={blog.title}
        />
        <CardTags className="absolute top-0 w-full p-5" tags={blog.tags} />
      </div>

      <p className={cn("line-clamp-2 text-xl font-normal", "md:text-4xl")}>
        {blog.title}
      </p>

      <div
        className={cn(
          "flex w-full flex-col items-start gap-y-2",
          "md:flex-row md:items-center",
        )}
      >
        <div
          className={cn(
            "flex max-w-full items-center justify-start",
            "md:max-w-1/2",
          )}
        >
          <Avatar className={cn("size-6", "md:size-8")}>
            <AvatarImage src={blog.authorImg} />
            <AvatarFallback>{blog.author[0]}</AvatarFallback>
          </Avatar>
          <p className="ml-1 max-w-full truncate text-lg">{blog.author}</p>
        </div>

        <div
          className={cn(
            "mx-0 h-[2px] w-full bg-gray-300",
            "md:mx-3 md:h-[1px] md:w-8",
          )}
        />

        <p className="flex items-center justify-center">
          <span className="text-gray-400">
            {blog.createdAt.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <Dot className="size-6 text-gray-400" />
          <Share2 className="mr-1 size-4 text-gray-400" />
          <span className="text-gray-400">
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(blog.shareCount)}{" "}
            shares
          </span>
        </p>
      </div>

      <p className={cn("hidden text-[#6C757D]", "md:line-clamp-3")}>
        {blog.content[0].content}
      </p>

      <Button
        asChild
        className={cn(
          "bg-app-dark-blue w-fit",
          "hover:bg-app-light-blue",
          "md:px-6 md:py-5 md:text-xl",
        )}
      >
        <Link to={`/information/${blog.id}`}>View Post</Link>
      </Button>
    </div>
  );
}

export default BlogCard;
