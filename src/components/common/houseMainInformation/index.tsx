import Image from "next/image";
import location from "@/src/assets/icons/Location.svg";
import { FC } from "react";
interface IHouseProp {
  houseTitle: string;
  houseAddress: string;
}
const HouseMainInformation: FC<IHouseProp> = ({ houseTitle, houseAddress }) => {
  return (
    <div className="flex flex-col gap-5" dir="rtl">
      <h1 className="text-32-semibold">{houseTitle}</h1>
      <div className="flex gap-2 items-center text-16-medium text-white">
        <div className="flex gap-1 items-center">
          <Image alt="icon" src={location} />
          <span>ادرس:</span>
        </div>
        <span>{houseAddress}</span>
      </div>
    </div>
  );
};

export default HouseMainInformation;
