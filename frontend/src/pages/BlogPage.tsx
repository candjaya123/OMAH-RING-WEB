import ArticleSection from "@/components/app/blog/ArticleSection";
import HeroSection from "@/components/app/blog/HeroSection";
import { blogs } from "@/dummy-data/data";
import { useParams } from "react-router";

function BlogPage() {
  const { informationId } = useParams();
  const blog = blogs.find((blog) => blog.id === informationId);
  return (
    <main>
      <HeroSection blog={blog!} />
      <ArticleSection blog={blog!} />
    </main>
  );
}

export default BlogPage;
