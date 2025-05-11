import ProductSection from "@/components/app/product/ProductSection";
import RelatedSection from "@/components/app/product/RelatedSection";
import ReviewSection from "@/components/app/product/ReviewSection";
import { products } from "@/dummy-data/data";
import { useParams } from "react-router";

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <main>
      <ProductSection product={product!} />
      <ReviewSection />
      <RelatedSection />
    </main>
  );
}

export default ProductPage;
