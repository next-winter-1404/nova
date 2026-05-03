
import {HeroSection, CategorySection, SpecialOfferSection} from "@/src/components/homeContainer/index";
import Landing from "@/src/components/landing/page";
import Footer from "@/src/components/footer/page";
export default function Home() {
  return ( 
    <div className="flex-col-center gap-49 bg-dark-900 ">
      <HeroSection />
      <CategorySection />
      <SpecialOfferSection />
      <Landing></Landing>
      <Footer/>
    </div>

  );
}
