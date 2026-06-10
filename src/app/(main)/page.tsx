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
import SpinnerComponent from "@/src/components/spinner/Spinner";
import { Spinner } from "@heroui/react";
export default async function Home() {
  const userId = await getServerSideCookie("userId");
  function Loading() {
    return  <div className="w-screen flex-center h-screen">
    <Spinner size="xl" className="w-[200px] h-[200px] text-primary-accent-green" />
  </div>;
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
        {/* <Landing></Landing> */}
      </div>
    </Suspense>
  );
}
