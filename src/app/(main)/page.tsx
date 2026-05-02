import {HeroSection, CategorySection} from "@/src/components/homeContainer/index";

export default function Home() {
  return (
    <div className="flex-col-center gap-49 bg-dark-900 ">
      <HeroSection />
      <CategorySection />
      <Landing></Landing>
    </div>

  );
}
