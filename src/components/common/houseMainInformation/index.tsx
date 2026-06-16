import Image from "next/image";
import location from "@/src/assets/icons/Location.svg";
import { FC } from "react";
import ShinyText from "../../animations/ShinyText/ShinyText";
import Slide from "../../animations/Slide";
interface IHouseProp {
  houseTitle: string;
  houseAddress: string;
}
const HouseMainInformation: FC<IHouseProp> = ({ houseTitle, houseAddress }) => {
  return (
    <Slide direction="right">
      <div
        className="flex-center flex-col md:gap-5 gap-7 md:items-start"
        dir="rtl"
      >
        <h1 className="lg:text-32-semibold text-white-pure text-4xl">
          <ShinyText
            text={houseTitle}
            speed={1}
            delay={0}
            color="var(--color-white-pure)"
            shineColor="var(--color-gray-300)"
            spread={120}
            direction="right"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
        </h1>
        <div className="flex gap-6 items-center w-full text-white-pure">
          <div className="flex gap-1 items-center">
            <Image alt="icon" src={location} />
            <span>ادرس:</span>
          </div>
          <span className="text-md  ">{houseAddress}</span>
        </div>
      </div>
    </Slide>
  );
};

export default HouseMainInformation;
