import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Testimonial } from "@/dummy-data/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
  ));

  return (
    <div
      className={cn(
        "bg-app-light-orange flex flex-col rounded-2xl p-6",
        className,
      )}
    >
      <h3 className="mb-2 text-xl font-bold">"{testimonial.title}"</h3>
      <p className="mb-6 text-gray-700">"{testimonial.description}"</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={testimonial.avatarUrl} />
            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold">{testimonial.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">{stars}</div>
          <span className="font-medium text-gray-700">
            {testimonial.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
