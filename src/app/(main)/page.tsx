import Image from "next/image";

import HeroBackground from "../../assets/images/HeroSectionBackground.jpg"
import building from "../../assets/images/building.png"
export default function Home() {
  const imageStyle = {
    width: '100%',
    height: '100vh',
  }
  return (
    <div className="relative flex-center">
      <Image src={building} alt="pic" className="absolute w-1/3 h-[90%] bottom-0"/>
      <Image 
      src={HeroBackground} 
      alt="pic" 
      style={imageStyle}
    ></Image>
    </div>
  );
}
