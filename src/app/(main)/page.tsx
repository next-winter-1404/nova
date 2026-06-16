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
import { Spinner } from "@heroui/react";
import { getCategory } from "@/src/utils/sevices/api/category/getCategory";
import SlideInRight from "@/src/components/animations/GoingFromRight";
export default async function Home() {
  const getAllCategory = await getCategory();
  console.log("getAllCategory", getAllCategory);
  const userId = await getServerSideCookie("userId");
  function Loading() {
    return (
      <div className="w-screen flex-center h-screen">
        <Spinner
          size="xl"
          className="w-[200px] h-[200px] text-primary-accent-green"
        />
      </div>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex-col-center gap-49 bg-dark-900 ">
        <HeroSection />
        <SlideInRight direction="right">
          <CategorySection data={getAllCategory?.data} />
        </SlideInRight>
        <SlideInRight direction="left">
          <SpecialOfferSection />
        </SlideInRight>
        <SlideInRight direction="right">
          {userId && <Recommendation />}
        </SlideInRight>
        <SlideInRight direction="left">
          <MostPopulerDestinationSection />
        </SlideInRight>
        <SlideInRight direction="right">
          <DepositAndRentSection />
        </SlideInRight>
        <Landing></Landing>
      </div>
    </Suspense>
  );
}
