import {
  HeroSection,
  CategorySection,
  SpecialOfferSection,
  MostPopulerDestinationSection,
  DepositAndRentSection,
} from "@/src/components/homeContainer/index";
import Landing from "@/src/components/landing/page";
import { Suspense } from "react";
import Recommendation from "@/src/components/homeContainer/recommendation/Recommendation";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
export default async function Home() {
  const userId = await getServerSideCookie("userId");
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex-col-center gap-49 bg-dark-900 ">
        <HeroSection />
        <CategorySection />
        <SpecialOfferSection />
        {userId && <Recommendation />}
        <MostPopulerDestinationSection />
        <DepositAndRentSection />
        <Landing></Landing>
      </div>
    </Suspense>
  );
}
