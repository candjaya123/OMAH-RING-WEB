import BlogsSection from "@/components/app/information/BlogsSection";
import CtaSection from "@/components/app/information/CtaSection";
import CategorySection from "@/components/app/information/CategorySection";
import HeroSection from "@/components/app/information/HeroSection";

function InformationPage() {
  return (
    <main>
      <HeroSection />
      <BlogsSection />
      <CtaSection />
      <CategorySection />
    </main>
  );
}

export default InformationPage;
