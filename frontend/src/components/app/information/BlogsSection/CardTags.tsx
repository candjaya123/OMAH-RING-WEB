import { cn } from "@/lib/utils";
import { Image } from "lucide-react";

interface CardTagsProps {
  tags: string[];
  className?: string;
}

function CardTags({ tags, className }: CardTagsProps) {
  return (
    <div className={cn("flex justify-between", className)}>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-full bg-white/20 px-2 py-1 text-center text-lg text-white backdrop-blur-md"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="size-fit rounded-full bg-white/20 p-2 text-white backdrop-blur-md">
        <Image strokeWidth={1.5} className="size-5" />
      </div>
    </div>
  );
}

export default CardTags;
