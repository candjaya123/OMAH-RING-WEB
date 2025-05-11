import HeroSection from "@/components/app/home/HeroSection";
import ShopSection from "@/components/app/home/ShopSection";
import InfoSection from "@/components/app/home/InfoSection";
import MemberSection from "@/components/app/home/MemberSection";
import CancelMemberSection from "@/components/app/home/CancelMemberSection";
import TestimonialsSection from "@/components/app/home/TestimonialsSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ShopSection />
      <InfoSection />
      <MemberSection />
      <CancelMemberSection />
      <TestimonialsSection />
    </main>
  );
}

export default HomePage;
