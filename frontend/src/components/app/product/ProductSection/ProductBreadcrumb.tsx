import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/dummy-data/types";
import { cn } from "@/lib/utils";
import { Slash } from "lucide-react";

interface ProductBreadcrumbProps {
  product: Product;
  className?: string;
}

function ProductBreadcrumb({ className, product }: ProductBreadcrumbProps) {
  return (
    <Breadcrumb className={cn("py-10", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="">Account</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="">Gaming</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary">
            {product?.title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default ProductBreadcrumb;
