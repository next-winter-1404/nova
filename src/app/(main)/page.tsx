
import {HeroSection, CategorySection, SpecialOfferSection, MostPopulerDestinationSection, DepositAndRentSection} from "@/src/components/homeContainer/index";
import Landing from "@/src/components/landing/page";
import Footer from "@/src/components/footer/page";
import { Suspense } from "react";
export default function Home() {
  function Loading() {
  return <h2>🌀 Loading...</h2>;
}
  return ( 
    <Suspense fallback={<Loading />}>
    <div className="flex-col-center gap-49 bg-dark-900 ">
      <HeroSection />
      <CategorySection />
      <SpecialOfferSection />
      <MostPopulerDestinationSection />
      <DepositAndRentSection/>
      <Landing></Landing>
    </div>
    </Suspense>

  );
}
