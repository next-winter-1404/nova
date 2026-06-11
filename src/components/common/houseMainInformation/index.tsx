import Image from "next/image";
import location from "@/src/assets/icons/Location.svg";
import { FC } from "react";
interface IHouseProp {
  houseTitle: string;
  houseAddress: string;
}
const HouseMainInformation: FC<IHouseProp> = ({ houseTitle, houseAddress }) => {
  return (
    <div className="flex-center flex-col md:gap-5 gap-7 md:items-start" dir="rtl">
      <h1 className="lg:text-32-semibold text-white-pure text-4xl">{houseTitle}</h1>
      <div className="flex gap-6 items-center w-full text-white-pure">
        <div className="flex gap-1 items-center">
          <Image alt="icon" src={location} />
          <span>ادرس:</span>
        </div>
        <span className="text-md  ">{houseAddress}</span>
      </div>
    </div>
  );
};

export default HouseMainInformation;
