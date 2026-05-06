
import {HeroSection, CategorySection, SpecialOfferSection, MostPopulerDestinationSection, DepositAndRentSection} from "@/src/components/homeContainer/index";
import Landing from "@/src/components/landing/page";

export default function Home() {
  return (
    <div className="flex-col-center gap-49 bg-dark-900 ">
      <HeroSection />
      <CategorySection />
      <SpecialOfferSection />
      <MostPopulerDestinationSection />
      <DepositAndRentSection />
      <Landing></Landing>
    </div>

  );
}
