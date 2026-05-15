import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import building from "@/src/assets/icons/house-building.svg";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { IHousesResponse } from "@/src/core/types/IHouse";
import SimilarHouseItems from "./SimilarHouseItems";
import { FC } from "react";

export const revalidate = 60
const SimilarHouses: FC<IHousesResponse> = async () => {
  const result = await getHouses({ transactionType: "reservation" });
  const houses = result?.houses || [];

  return (
    <div className="flex flex-col w-full gap-4 mb-30 mt-10 ">
      <div className=" w-full  bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-between gap-6 px-5 ">
        <div className="flex-center text-primary-accent-green gap-4 cursor-pointer hover:opacity-70">
          <FiChevronLeft className="w-4 h-4" />
          <span className="cursor-pointer">مشاهده همه</span>
        </div>
        <div className="flex-center text-white gap-4">
          <span>اگهی های مشابه</span>
          <Image alt="icon" src={building} className="w-4 h-4" />
        </div>
      </div>
      <div className="flex w-full mt-10">
        <SimilarHouseItems houses={houses} />
      </div>
    </div>
  );
};

export default SimilarHouses;
