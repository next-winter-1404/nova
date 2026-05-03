import Button from "@/src/components/common/button/page";
import CardContainer from "@/src/components/common/card/page";
import {HeroSection, CategorySection} from "@/src/components/homeContainer/index";
import Landing from "@/src/components/landing/page";

export default function Home() {
  return (
    <div className="flex-col-center gap-49 bg-dark-900 ">
      <HeroSection />
      <CategorySection />
      <Landing></Landing>
    </div>

  );
}
