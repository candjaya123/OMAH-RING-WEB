import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPaginationProps {
  className?: string;
}

function BlogPagination({ className }: BlogPaginationProps) {
  return (
    <Pagination className={className}>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationLink
            to={""}
            className={cn(
              "text-primary border-primary rounded-full border-2",
              "hover:text-primary",
            )}
          >
            <ArrowLeft />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink to={""} className="rounded-full border-1">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink to={""} className="rounded-full border-1">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink to={""} className="rounded-full border-1">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            to={""}
            className={cn(
              "text-primary border-primary rounded-full border-2",
              "hover:text-primary",
            )}
          >
            <ArrowRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default BlogPagination;
