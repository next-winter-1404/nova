import Image from "next/image";

import HeroBackground from "../../assets/images/HeroSectionBackground.jpg"
import building from "../../assets/images/building.png"
import Landing from "@/src/components/landing/page";
import Footer from "@/src/components/footer/page";
export default function Home() {
  const imageStyle = {
    width: '100%',
    height: '100vh',
  }
  return (
    <div className ="relative w-full">
      {/* <Image src={building} alt="pic" className="absolute w-1/3 h-[90%] bottom-0"/>
      <Image 
      src={HeroBackground} 
      alt="pic" 
      style={imageStyle}
    ></Image> */}
    <Landing></Landing>
    <Footer/>
    </div>
  );
}
