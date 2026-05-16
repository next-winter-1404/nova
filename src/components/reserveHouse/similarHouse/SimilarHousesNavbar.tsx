import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import building from "@/src/assets/icons/house-building.svg";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { IHousesResponse } from "@/src/core/types/IHouse";
import SimilarHouseItems from "./SimilarHouseItems";
import { FC } from "react";
import Link from "next/link";
import SimilarNavbarItem from "./navbarItem";

export const revalidate = 60
const SimilarHouses: FC<IHousesResponse> = async () => {
  const result = await getHouses({ transactionType: "reservation" });
  const houses = result?.houses || [];

  return (
    <div className="flex flex-col w-full gap-4 mb-30 mt-10 ">
     <SimilarNavbarItem href="/reserve-house" similarTitle="اگهی های مشابه"/>
      <div className="flex w-full mt-10">
        <SimilarHouseItems houses={houses} />
      </div>
    </div>
  );
};

export default SimilarHouses;
